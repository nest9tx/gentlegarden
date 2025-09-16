'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '../../../../lib/supabase';
import SacredAuth from '../../../components/SacredAuth';
import type { User } from '@supabase/auth-helpers-nextjs';

interface UserTier {
  name: string;
  level: number;
  monthlyMessages: number;
  dailyMessagesUsed?: number;
  monthlyMessagesUsed?: number;
}

interface GardenData {
  dailyIntention: string;
  preferences: {
    notifications: boolean;
    sacredSymbol: string;
    gentleReminders: boolean;
  };
  stats: {
    daysActive: number;
    intentionsSet: number;
    meditationsCompleted: number;
    circleParticipation: number;
  };
}

// Sacred intentions that rotate daily/weekly
const sacredIntentions = [
  "I welcome whatever seeds are ready to bloom within me today.",
  "I trust the gentle unfolding of my awakening journey.",
  "I breathe sacred presence into each moment of this day.",
  "I allow my heart to guide me toward my highest truth.",
  "I embrace the wisdom that emerges from stillness.",
  "I honor the divine intelligence that moves through me.",
  "I receive today's gifts with gratitude and wonder.",
  "I align with the frequencies of love and peace.",
  "I listen deeply to the whispers of my soul.",
  "I plant seeds of consciousness with every breath.",
  "I trust the perfect timing of my spiritual growth.",
  "I open to receive the blessings this day offers.",
  "I breathe compassion into every corner of my being.",
  "I allow my heart's wisdom to illuminate my path.",
  "I create space for magic to enter my experience.",
  "I honor the sacred in every ordinary moment.",
  "I align with the rhythm of my soul's deepest knowing.",
  "I trust the perfect unfolding of my highest good.",
  "I welcome the gifts that today wishes to share.",
  "I breathe gratitude for the miracle of this life.",
];

//const sacredSymbols = ['🌸', '🌿', '✨', '🕯️', '🔮', '🧘‍♀️', '🌙', '☀️', '🦋', '💫', '🌺', '🍃'];

// Function to fetch user tier and usage from Supabase
async function getUserTierFromSupabase(user: User | null): Promise<UserTier> {
  if (!user) {
    return {
      name: 'Gentle Seeker',
      level: 1,
      monthlyMessages: 3,
    };
  }

  try {
    const supabase = createClient();
    
    // Fetch usage data from Supabase
    const { data: usageData, error: fetchError } = await supabase
      .from('garden_guide_usage')
      .select('monthly_message_count, daily_message_count, subscription_tier')
      .eq('user_id', user.id)
      .single();

    // If no usage data found, create initial record
    if (fetchError && fetchError.code === 'PGRST116') {
      console.log('🌱 Initializing new user in garden:', user.email);
      
      // Determine if user should be gardener based on email
      const isGardenerUser = user.email && (
        user.email.includes('yahoo.com') || 
        user.email.includes('gardener') || 
        user.email.includes('admin')
      );
      
      const initialTier = isGardenerUser ? 'gardener' : 'seeker';
      
      const { error: insertError } = await supabase
        .from('garden_guide_usage')
        .insert({
          user_id: user.id,
          subscription_tier: initialTier,
          monthly_message_count: 0,
          daily_message_count: 0,
          last_message_date: new Date().toISOString().split('T')[0],
          last_reset_date: new Date().toISOString().split('T')[0]
        })
        .select('monthly_message_count, daily_message_count, subscription_tier')
        .single();
      
      if (insertError) {
        console.error('Error creating user record:', insertError);
      } else {
        console.log('✨ User initialized with tier:', initialTier);
        return {
          name: isGardenerUser ? 'Sacred Gardener' : 'Gentle Seeker',
          level: isGardenerUser ? 2 : 1,
          monthlyMessages: isGardenerUser ? 777 : 3,
          monthlyMessagesUsed: 0,
          dailyMessagesUsed: 0,
        };
      }
    } else if (usageData) {
      const isGardener = usageData.subscription_tier === 'gardener';
      return {
        name: isGardener ? 'Sacred Gardener' : 'Gentle Seeker',
        level: isGardener ? 2 : 1,
        monthlyMessages: isGardener ? 777 : 3,
        monthlyMessagesUsed: usageData.monthly_message_count || 0,
        dailyMessagesUsed: usageData.daily_message_count || 0,
      };
    }
  } catch (error) {
    console.error('Error fetching user tier from Supabase:', error);
  }

  // Fallback to default if no data found
  return {
    name: 'Gentle Seeker',
    level: 1,
    monthlyMessages: 3,
  };
}





export default function PersonalGardenPage() {
  const [user, setUser] = useState<User | null>(null);
  const [userTier, setUserTier] = useState<UserTier>({ 
    name: 'Gentle Seeker', 
    level: 1, 
    monthlyMessages: 3 
  });
  const [gardenData, setGardenData] = useState<GardenData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          
          // Get today's sacred intention
          const today = new Date();
          const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
          const sacredIntention = sacredIntentions[dayOfYear % sacredIntentions.length];
          
          // Mock user data with rotating daily intention
          setGardenData({
            dailyIntention: sacredIntention,
            preferences: {
              notifications: true,
              sacredSymbol: '🌸',
              gentleReminders: true
            },
            stats: {
              daysActive: Math.floor(Math.random() * 365) + 30,
              intentionsSet: Math.floor(Math.random() * 200) + 50,
              meditationsCompleted: Math.floor(Math.random() * 100) + 20,
              circleParticipation: Math.floor(Math.random() * 25) + 5
            }
          });
          
          // Set tier based on user data from Supabase
          const tierData = await getUserTierFromSupabase(session.user);
          setUserTier(tierData);
        }
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    const supabase = createClient();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        setGardenData(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-rose-900 flex items-center justify-center">
        <div className="text-purple-200 text-lg">Preparing your sacred space...</div>
      </div>
    );
  }

  if (!user) {
    return <SacredAuth />;
  }

  if (!gardenData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-rose-900 flex items-center justify-center">
        <div className="text-purple-200 text-lg">Loading your garden...</div>
      </div>
    );
  }

  // Get current sacred intention
  //const today = new Date();
  //const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  //const sacredIntention = sacredIntentions[dayOfYear % sacredIntentions.length];



  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-rose-900">
      {/* Header */}
      <div className="pt-20 pb-12 text-center">
        <div className="text-6xl mb-4">🌸</div>
        <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
          Your Sacred Garden
        </h1>
        <p className="text-purple-200 text-xl max-w-2xl mx-auto px-6">
          Welcome to your personal sanctuary of growth and reflection
        </p>
      </div>

      {/* Main Garden Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-light text-purple-100 mb-8 flex items-center">
            <span className="mr-3">🌟</span>
            My Garden Benefits
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Tier */}
            <div>
              <h3 className="text-lg font-light text-purple-100 mb-4">Current Tier</h3>
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">{userTier.level === 1 ? '🌱' : '🌸'}</span>
                  <span className="text-purple-100 font-medium">{userTier.name}</span>
                </div>
                <div className="space-y-2 text-sm text-purple-300">
                  <div className="flex items-center">
                    <span className="mr-2">💌</span>
                    {userTier.level === 1 
                      ? `${userTier.monthlyMessages} daily messages` 
                      : `${userTier.monthlyMessages} monthly messages`}
                  </div>
                  {userTier.level === 2 && userTier.monthlyMessagesUsed !== undefined && (
                    <div className="flex items-center text-xs text-purple-400">
                      <span className="mr-2">📊</span>
                      {userTier.monthlyMessagesUsed} used this month
                    </div>
                  )}
                  <div className="flex items-center">
                    <span className="mr-2">🌱</span>
                    Complete practices access
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🌸</span>
                    Sacred Circle participation
                  </div>
                </div>
                <div className="text-purple-300 text-sm mt-3">
                  ✓ Active Sacred Gardener
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center text-purple-300 text-sm mb-2">
                  <span className="mr-2">📧</span>
                  Contact Sacred Support
                </div>
                <div className="text-purple-400 text-xs">support@gentlegarden.org</div>
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h3 className="text-lg font-light text-purple-100 mb-4">Quick Access</h3>
              <div className="space-y-3">
                <Link
                  href="/garden-guide"
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🤖</span>
                    <div>
                      <div className="text-purple-100 text-sm">Garden Guide Chat</div>
                    </div>
                  </div>
                </Link>
                
                <Link
                  href="/sanctuaries/meditation-garden"
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🧘‍♀️</span>
                    <div>
                      <div className="text-purple-100 text-sm">Meditation Garden (guided practices & wisdom)</div>
                    </div>
                  </div>
                </Link>
                
                <Link
                  href="/sanctuaries/chakras"
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🟣</span>
                    <div>
                      <div className="text-purple-100 text-sm">Chakra Sanctuary (energy center guidance)</div>
                    </div>
                  </div>
                </Link>
                
                <Link
                  href="/sanctuaries"
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">✨</span>
                    <div>
                      <div className="text-purple-100 text-sm">All Learning Sanctuaries</div>
                    </div>
                  </div>
                </Link>
                
                <Link
                  href="/garden/services"
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🎋</span>
                    <div>
                      <div className="text-purple-100 text-sm">Sacred Services & Support</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Sacred Services */}
            <div>
              <h3 className="text-lg font-light text-purple-100 mb-4">Sacred Services</h3>
              <div className="mb-4">
                <Link 
                  href="/garden/services" 
                  className="text-purple-100 hover:text-purple-200 text-sm underline flex items-center"
                >
                  <span className="mr-2">🔍</span>
                  View All Sacred Services →
                </Link>
                <div className="text-purple-400 text-xs mt-1">Detailed descriptions, processes & booking</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="text-purple-100 text-sm font-medium">Sacred Reflection</h4>
                  <div className="text-purple-300 text-xs">Weekly guidance & meditation support</div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="text-purple-100 text-sm font-medium">Energy Alignment</h4>
                  <div className="text-purple-300 text-xs">Reiki & chakra balancing session</div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="text-purple-100 text-sm font-medium">Mentoring Session</h4>
                  <div className="text-purple-300 text-xs">Personal spiritual guidance</div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="text-purple-100 text-sm font-medium">Akashic Reading</h4>
                  <div className="text-purple-300 text-xs">Soul records exploration</div>
                </div>
              </div>
              
              {userTier.name === 'Gentle Seeker' && (
                <div className="mt-4 text-center">
                  <p className="text-purple-400 text-sm mb-2">Expand Your Garden:</p>
                  <div className="bg-white/5 rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">✅ Sacred Gardener Path - $111/month</span>
                    </div>
                    <div className="text-purple-400 text-xs mt-1">777 monthly messages • complete access</div>
                    <Link 
                      href="/garden/services" 
                      className="text-purple-300 hover:text-purple-200 text-xs underline block mt-2"
                    >
                      Learn more & upgrade
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Sections */}
      

      {/* Sacred Quote */}
      <div className="text-center py-12">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-purple-200 italic text-lg leading-relaxed">
            &quot;Your personal garden is a sacred mirror, reflecting the beauty of your awakening consciousness back to you with infinite love.&quot;
          </p>
          <div className="text-purple-400 text-sm mt-4">✧ Garden Wisdom ✧</div>
        </div>
      </div>
    </div>
  );
}