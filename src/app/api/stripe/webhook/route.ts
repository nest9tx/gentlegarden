import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { SupabaseClient } from '@supabase/supabase-js';

// Export a simple GET handler to prevent build-time evaluation issues
export async function GET() {
  return NextResponse.json({ message: 'Stripe webhook endpoint. Use POST method.' }, { status: 405 });
}

export async function POST(req: NextRequest) {
  try {
    // Initialize Stripe with environment variables
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!stripeSecretKey) {
      console.error('STRIPE_SECRET_KEY not found in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET not found in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (!supabaseServiceKey) {
      console.error('SUPABASE_SERVICE_ROLE_KEY not found in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-06-30.basil',
    });
    const body = await req.text();
    const signature = req.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }

    // Create Supabase client with service role key for admin operations
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseServiceKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    // Helper function to handle subscription updates
    async function handleSubscriptionUpdate(
      stripe: Stripe,
      supabase: SupabaseClient,
      customerEmail: string | null,
      sessionOrInvoiceId: string,
      eventType: 'checkout' | 'invoice',
      amount?: number
    ) {
      console.log('=== SUBSCRIPTION UPDATE DEBUG ===');
      console.log('Event type:', eventType);
      console.log('Customer email:', customerEmail);
      console.log('Session/Invoice ID:', sessionOrInvoiceId);
      console.log('Amount:', amount);

      if (!customerEmail) {
        console.error('No customer email provided');
        return { error: 'No customer email' };
      }

      // Find user by email
      const { data: userData, error: userError } = await supabase.auth.admin.listUsers();
      if (userError) {
        console.error('Error fetching users:', userError);
        return { error: 'Database error' };
      }

      console.log('Found', userData.users.length, 'total users in database');
      const user = userData.users.find((u) => u.email === customerEmail);
      if (!user) {
        console.error('User not found for email:', customerEmail);
        console.log('Available users:', userData.users.map(u => u.email).filter(Boolean));
        return { error: 'User not found' };
      }

      console.log('Found user:', user.id, user.email);

      // Determine subscription tier based on amount
      let subscriptionTier = 'seeker';
      let messageLimit = 3;
      
      let finalAmount = amount;
      
      if (eventType === 'checkout') {
        // For checkout sessions, get line items
        const lineItems = await stripe.checkout.sessions.listLineItems(sessionOrInvoiceId);
        const firstItem = lineItems.data[0];
        finalAmount = firstItem?.price?.unit_amount || 0;
      }
      
      console.log('Final amount to check:', finalAmount);
      
      if (finalAmount) {
        if (finalAmount === 700) { // $7.00 - Gardener
          subscriptionTier = 'gardener';
          messageLimit = 77;
        } else if (finalAmount === 1500) { // $15.00 - Guardian
          subscriptionTier = 'guardian';  
          messageLimit = -1;
        }
      }

      console.log('Determined tier:', subscriptionTier, 'with limit:', messageLimit);

      // Update user subscription tier (using existing table structure)
      const updateData: {
        user_id: string;
        subscription_tier: string;
        daily_message_count: number;
        monthly_message_count: number;
        last_message_date: string;
        updated_at: string;
      } = {
        user_id: user.id,
        subscription_tier: subscriptionTier,
        daily_message_count: 0, // Reset daily count on upgrade
        monthly_message_count: 0, // Reset monthly count on upgrade  
        last_message_date: new Date().toISOString().split('T')[0],
        updated_at: new Date().toISOString()
      };

      const { error: updateError } = await supabase
        .from('garden_guide_usage')
        .upsert(updateData, {
          onConflict: 'user_id'
        });

      if (updateError) {
        console.error('Error updating subscription:', updateError);
        return { error: 'Failed to update subscription' };
      }

      console.log(`✅ Successfully updated user ${user.email} to ${subscriptionTier} tier`);
      console.log('=== END SUBSCRIPTION UPDATE DEBUG ===');
      return { success: true };
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('🎯 Processing checkout.session.completed');
        console.log('Session details:', {
          id: session.id,
          customer: session.customer,
          customer_email: session.customer_details?.email,
          amount_total: session.amount_total,
          mode: session.mode
        });
        await handleSubscriptionUpdate(stripe, supabase, session.customer_details?.email || null, session.id, 'checkout');
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('💰 Processing invoice.payment_succeeded');
        console.log('Invoice details:', {
          id: invoice.id,
          customer: invoice.customer,
          amount_paid: invoice.amount_paid,
          amount_due: invoice.amount_due
        });
        
        // Get customer email from the invoice
        const customer = await stripe.customers.retrieve(invoice.customer as string);
        const customerEmail = (customer as Stripe.Customer).email || null;
        
        await handleSubscriptionUpdate(stripe, supabase, customerEmail, invoice.id || '', 'invoice', invoice.amount_paid);
        break;
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        
        // Handle subscription changes (upgrades, downgrades, cancellations)
        const stripeCustomerId = subscription.customer as string;
        
        // Find user by Stripe customer ID
        const { data: usageData, error: usageError } = await supabase
          .from('garden_guide_usage')
          .select('user_id')
          .eq('stripe_customer_id', stripeCustomerId)
          .single();

        if (usageError || !usageData) {
          console.error('User not found for Stripe customer:', stripeCustomerId);
          return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        let newTier = 'seeker';
        let newLimit = 3;

        if (event.type === 'customer.subscription.deleted') {
          // Subscription cancelled - revert to seeker
          newTier = 'seeker';
          newLimit = 3;
        } else {
          // Update based on current subscription
          if (subscription.status === 'active') {
            const amount = subscription.items.data[0]?.price.unit_amount;
            if (amount === 700) {
              newTier = 'gardener';
              newLimit = 77;
            } else if (amount === 1500) {
              newTier = 'guardian';
              newLimit = -1;
            }
          }
        }

        const { error: updateError } = await supabase
          .from('garden_guide_usage')
          .update({
            subscription_tier: newTier,
            monthly_message_limit: newLimit,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', usageData.user_id);

        if (updateError) {
          console.error('Error updating subscription status:', updateError);
          return NextResponse.json({ error: 'Failed to update subscription' }, { status: 500 });
        }

        console.log(`Updated subscription for user to ${newTier} tier`);
        break;
      }

      case 'payment_intent.succeeded': {
        // Handle one-time service purchases
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        // Get the checkout session to find customer details
        const sessions = await stripe.checkout.sessions.list({
          payment_intent: paymentIntent.id,
          limit: 1
        });

        if (sessions.data.length > 0) {
          const session = sessions.data[0];
          const customerEmail = session.customer_details?.email;
          
          if (customerEmail) {
            // Find user and record service purchase
            const { data: userData, error: userError } = await supabase.auth.admin.listUsers();
            if (!userError) {
              const user = userData.users.find((u) => u.email === customerEmail);
              if (user) {
                // Record service purchase in a services_purchased table
                const amount = paymentIntent.amount;
                let serviceName = 'Unknown Service';
                
                if (amount === 3300) serviceName = 'Sacred Reflection Intensive';
                else if (amount === 5500) serviceName = 'Energy Alignment Session';
                else if (amount === 7700) serviceName = 'One-on-One Mentoring Session';
                else if (amount === 11100) serviceName = 'Akashic Deep Dive Reading';

                // You could create a services_purchased table to track these
                console.log(`User ${customerEmail} purchased ${serviceName} for $${amount/100}`);
              }
            }
          }
        }
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
