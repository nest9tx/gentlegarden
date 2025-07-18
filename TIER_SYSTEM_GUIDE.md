# The Gentle Garden - Tier-Based System Guide

## Overview
The Gentle Garden features a pure two-tier subscription system: Seeker (free) and Gardener ($11.11/month). This system integrates Stripe payments, Supabase database management, and tier-specific content across the application.

## Subscription Tiers

### 🌱 Seeker (Free Tier)
- **Price**: Free
- **Garden Guide**: 3 messages per day
- **Wisdom Grove**: 4 foundation teachings focused on self-compassion and basic awakening principles
- **Features**: Basic access to Personal Garden, journey day counter

### 🌿 Gardener ($11.11/month)
- **Price**: $11.11/month (sacred portal number - Stripe recurring subscription)
- **Garden Guide**: 777 messages per month (sacred abundance)
- **Wisdom Grove**: 9 teachings (foundation + advanced) including shadow work, energy mastery, unity consciousness
- **Features**: Enhanced Personal Garden with tier-specific benefits display, access to all Sacred Garden Circles

## Personal Services (Available to All Tiers)
- **Sacred Reflection Intensive**: $33 (30min remote session via Zoom/Phone)
- **Energy Alignment Session**: $55 (45min remote energy work via Zoom)
- **One-on-One Mentoring Session**: $77 (60min spiritual guidance via Zoom)
- **Akashic Deep Dive Reading**: $111 (90min soul records exploration via Zoom + written summary)

## Technical Implementation

### Database Schema
The system uses Supabase with the `garden_guide_usage` table:
```sql
- user_id (uuid, primary key)
- subscription_tier (text) - 'seeker', 'gardener', 'guardian'
- daily_message_count (integer)
- monthly_message_count (integer)
- last_message_date (date)
- last_monthly_reset (date)
```

### Payment Flow
1. **User selects tier** on `/garden/services` page
2. **Stripe Checkout** processes payment
3. **Webhook** at `/api/stripe/webhook` receives payment confirmation
4. **Database update** changes user's subscription_tier in Supabase
5. **Frontend refresh** shows new tier benefits immediately

### Content Protection
- **Garden Guide** (`/garden-guide/page.tsx`): Enforces message limits based on tier
- **Wisdom Grove** (`/wisdom/page.tsx`): Shows tier-appropriate wisdom collections
- **Personal Garden** (`/garden/personal/page.tsx`): **Enhanced tier benefits hub** with service booking, usage stats, and tier-specific access

### Key Features
- **Journey Day Counter**: Shows days since account creation
- **Real-time Usage Tracking**: Message counts update immediately
- **Tier Upgrade Prompts**: Users see benefits of higher tiers
- **Graceful Degradation**: Free tier users get meaningful value
- **🌟 NEW: Personal Garden Benefits Hub**: Central dashboard for all tier-specific features and services

## File Structure
```
src/app/
├── garden/
│   ├── page.tsx                 # Main dashboard with tier display
│   └── services/page.tsx        # Stripe payment links and tier info
├── garden-guide/page.tsx        # AI chat with tier-based limits
├── wisdom/page.tsx              # Tier-based wisdom content
└── api/stripe/webhook/route.ts  # Stripe webhook handler

lib/
└── supabase.ts                  # Database client configuration
```

## Environment Variables Required
```bash
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# OpenAI (for Garden Guide)
OPENAI_API_KEY=sk-...
```

## Testing the System
1. **Payment Testing**: Use Stripe test cards in development
2. **Webhook Testing**: Use Stripe CLI for local webhook forwarding
3. **Tier Logic**: Manually update database records to test different tiers
4. **Usage Limits**: Test message limits in Garden Guide

## Future Enhancements
- Email notifications for successful upgrades
- More granular content permissions
- Seasonal content releases for higher tiers
- Integration with meditation timer and tracking
- Community features for Gardener+ tiers

## Security Considerations
- Webhook signature verification prevents unauthorized tier changes
- Service role key used only on server-side
- User authentication required for all tier-protected content
- Rate limiting prevents abuse of message limits

The system is now fully functional and ready for production use with live Stripe payments and real user subscriptions.
