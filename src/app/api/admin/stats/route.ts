import { NextRequest, NextResponse } from 'next/server';

// Admin API route to get comprehensive garden statistics
// This route bypasses RLS to give admin full visibility
export async function GET() {
  try {
    console.log('🌸 Admin Stats API Called - Starting comprehensive analysis...');
    
    // Create admin client with service role for full access
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseServiceKey) {
      console.error('❌ SUPABASE_SERVICE_ROLE_KEY not found');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    console.log('✅ Service role key found, creating admin client...');

    // Create service role client that bypasses RLS
    const { createClient: createServiceClient } = await import('@supabase/supabase-js');
    const adminSupabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseServiceKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    // First, initialize any users who aren't in garden_guide_usage yet
    console.log('🔍 Checking for users to initialize...');
    
    // Get all auth users
    const { data: authData, error: authError } = await adminSupabase.auth.admin.listUsers();
    
    if (authError) {
      console.error('❌ Error fetching auth users:', authError);
      return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }

    const authUsers = authData.users || [];
    console.log(`✅ Found ${authUsers.length} total authenticated users`);

    // Get existing users in garden_guide_usage
    const { data: existingUsage, error: usageError } = await adminSupabase
      .from('garden_guide_usage')
      .select('user_id');

    if (usageError) {
      console.error('❌ Error fetching garden usage:', usageError);
      return NextResponse.json({ error: 'Failed to fetch garden usage' }, { status: 500 });
    }

    const existingUserIds = new Set(existingUsage?.map(u => u.user_id) || []);
    console.log(`✅ Found ${existingUserIds.size} users already in garden_guide_usage`);

    // Initialize missing users
    const missingUsers = authUsers.filter(user => !existingUserIds.has(user.id));
    console.log(`🌱 Need to initialize ${missingUsers.length} missing users...`);

    let initializedCount = 0;
    for (const user of missingUsers) {
      try {
        const { error: insertError } = await adminSupabase
          .from('garden_guide_usage')
          .insert({
            user_id: user.id,
            monthly_message_count: 0,
            daily_message_count: 0,
            subscription_tier: 'seeker', // Default to seeker
            last_message_date: new Date().toISOString().split('T')[0],
            last_reset_date: new Date().toISOString().split('T')[0]
          });

        if (insertError) {
          console.error(`❌ Error initializing user ${user.id}:`, insertError);
        } else {
          console.log(`✨ Initialized user ${user.id} (${user.email}) in garden`);
          initializedCount++;
        }
      } catch (error) {
        console.error(`❌ Error processing user ${user.id}:`, error);
      }
    }

    console.log(`🌸 Successfully initialized ${initializedCount} new users`);

    // Now get comprehensive stats from all users
    const { data: allUsageData, error: allUsageError } = await adminSupabase
      .from('garden_guide_usage')
      .select(`
        user_id,
        subscription_tier,
        created_at,
        monthly_message_count,
        last_message_date
      `);

    if (allUsageError) {
      console.error('❌ Error fetching all usage data:', allUsageError);
      return NextResponse.json({ error: 'Failed to fetch complete usage data' }, { status: 500 });
    }

    console.log(`📊 Processing stats for ${allUsageData?.length || 0} garden users...`);

    // Calculate comprehensive statistics
    const totalUsers = allUsageData?.length || 0;
    const seekers = allUsageData?.filter(u => u.subscription_tier === 'seeker').length || 0;
    const gardeners = allUsageData?.filter(u => u.subscription_tier === 'gardener').length || 0;
    const guardians = allUsageData?.filter(u => u.subscription_tier === 'guardian').length || 0;
    const monthlyRevenue = (gardeners * 11.11) + (guardians * 33.33); // Assuming guardian tier is $33.33

    // Get additional insights
    const activeUsers = allUsageData?.filter(u => {
      const lastMessage = new Date(u.last_message_date);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return lastMessage >= thirtyDaysAgo;
    }).length || 0;

    const totalMessages = allUsageData?.reduce((sum, u) => sum + (u.monthly_message_count || 0), 0) || 0;

    const stats = {
      totalUsers,
      seekers,
      gardeners,
      guardians,
      monthlyRevenue: Math.round(monthlyRevenue * 100) / 100, // Round to 2 decimal places
      activeUsers,
      totalMessages,
      conversionRate: totalUsers > 0 ? Math.round((gardeners / totalUsers) * 100) : 0,
      projectedAnnualRevenue: Math.round(monthlyRevenue * 12)
    };

    console.log('🌸 Final Garden Stats:', stats);

    return NextResponse.json({
      success: true,
      stats,
      message: `Successfully initialized ${initializedCount} new users. Total garden population: ${totalUsers}`,
      debugInfo: {
        authUsersFound: authUsers.length,
        existingInGarden: existingUserIds.size,
        newlyInitialized: initializedCount,
        finalGardenTotal: totalUsers
      }
    });

  } catch (error) {
    console.error('❌ Error in admin stats API:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Verify admin access
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    
    // Your admin emails - should match the ones in the admin page
    const ADMIN_EMAILS = ['support@gentlegarden.org', 'admin@gentlegarden.org'];
    
    if (ADMIN_EMAILS.includes(email)) {
      return NextResponse.json({ authorized: true });
    } else {
      return NextResponse.json({ authorized: false }, { status: 403 });
    }
  } catch (error) {
    console.error('Error in admin auth check:', error);
    return NextResponse.json({ authorized: false }, { status: 500 });
  }
}
