'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User } from '@supabase/auth-helpers-nextjs';
import SacredFrequencies from '../../components/SacredFrequencies';

export default function GardenDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [journeyDays, setJourneyDays] = useState(0);
  const [subscriptionTier, setSubscriptionTier] = useState<string>('seeker');
  const [messageUsage, setMessageUsage] = useState({ daily: 0, monthly: 0 });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { createClient } = await import('../../../lib/supabase');
      const supabase = createClient();
      
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        setUser(session.user);
        
        // Load subscription tier and usage from Supabase
        const { data: usageData } = await supabase
          .from('garden_guide_usage')
          .select('*')
          .eq('user_id', session.user.id)
          .single();
          
        if (usageData) {
          setSubscriptionTier(usageData.subscription_tier || 'seeker');
          setMessageUsage({
            daily: usageData.daily_message_count || 0,
            monthly: usageData.monthly_message_count || 0
          });
        }
        
        // Calculate journey days from when they first entered the garden
        let journeyStart = new Date();
        
        // Try to get journey start from user metadata, otherwise use created_at
        if (session.user.user_metadata?.journey_start) {
          journeyStart = new Date(session.user.user_metadata.journey_start);
        } else if (session.user.created_at) {
          journeyStart = new Date(session.user.created_at);
        } else {
          // Fallback to today if no creation date available
          journeyStart = new Date();
        }
        
        const today = new Date();
        // Calculate days since journey started (start counting from day 1)
        const diffTime = today.getTime() - journeyStart.getTime();
        
        // For same-day creation, show Day 1; otherwise show actual days passed + 1
        const actualDays = diffTime < (24 * 60 * 60 * 1000) ? 1 : Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
        setJourneyDays(actualDays);
        
        console.log('🌱 Journey calculation:', {
          journeyStart: journeyStart.toISOString(),
          today: today.toISOString(),
          diffTime: diffTime,
          actualDays: actualDays,
          created: session.user.created_at
        });
      }
    } catch (error) {
      console.log('Auth check error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { createClient } = await import('../../../lib/supabase');
      const supabase = createClient();
      await supabase.auth.signOut();
      window.location.href = '/';
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-4 animate-pulse">🌱</div>
          <p className="text-purple-200">The garden is awakening...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-center max-w-md">
          <div className="text-4xl mb-4">🌸</div>
          <h1 className="text-2xl mb-4">Sacred Invitation Required</h1>
          <p className="text-purple-200 mb-6">
            This sacred space awaits your gentle entry. Please request your invitation to bloom in this garden.
          </p>
          <Link 
            href="/enter"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            Request Sacred Invitation
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-purple-300 hover:text-white transition-colors">
            ← The Gentle Garden
          </Link>
          <button 
            onClick={handleSignOut}
            className="text-purple-300 hover:text-white transition-colors text-sm"
          >
            Peaceful Departure
          </button>
        </div>
      </header>

      {/* Main Garden Dashboard */}
      <div className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Sacred Welcome */}
          <div className="text-center mb-12">
            <div className="text-5xl mb-4 animate-bounce">🌺</div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              Welcome to Your Sacred Garden
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-4"></div>
            
            {/* Journey Day and Tier Status */}
            <div className="flex justify-center items-center space-x-6 mb-2">
              <p className="text-purple-200 text-lg">
                Day {journeyDays} of your awakening journey
              </p>
              <div className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 text-purple-100 border border-purple-400/40">
                {subscriptionTier === 'guardian' ? '🌳 Guardian Path' : 
                 subscriptionTier === 'gardener' ? '🌿 Gardener Journey' : 
                 '🌱 Seeker Beginning'}
              </div>
            </div>
            
            {/* Gentle tier encouragement */}
            {subscriptionTier === 'seeker' && (
              <p className="text-purple-300 text-sm mt-2">
                Your garden can bloom even brighter - explore our{' '}
                <Link href="/garden/services" className="underline hover:text-purple-200">
                  Sacred Services
                </Link>
              </p>
            )}
          </div>

          {/* Garden Pathways - Sacred Navigation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Meditation Garden */}
            <Link href="/meditations">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl mb-4 group-hover:animate-pulse">🧘‍♀️</div>
                <h3 className="text-xl text-white mb-2">Meditation Garden</h3>
                <p className="text-purple-200 text-sm">
                  Voice-guided journeys for inner peace and awakening.
                </p>
                <div className="mt-4 text-purple-300 text-xs">
                  → Enter the sacred silence
                </div>
              </div>
            </Link>

            {/* Wisdom Grove */}
            <Link href="/wisdom">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl mb-4 group-hover:animate-pulse">📜</div>
                <h3 className="text-xl text-white mb-2">Wisdom Grove</h3>
                <p className="text-purple-200 text-sm">
                  Gentle teachings and sacred insights for your path.
                </p>
                <div className="mt-4 text-purple-300 text-xs">
                  → Receive today&apos;s wisdom
                </div>
              </div>
            </Link>

            {/* Garden Guide */}
            <Link href="/garden-guide">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl mb-4 group-hover:animate-pulse">🤖</div>
                <h3 className="text-xl text-white mb-2">Garden Guide</h3>
                <p className="text-purple-200 text-sm">
                  Your gentle AI companion, available anytime you need support.
                </p>
                <div className="mt-4 text-purple-300 text-xs">
                  → Begin sacred dialogue
                </div>
              </div>
            </Link>

            {/* Community Circle */}
            <Link href="/community">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl mb-4 group-hover:animate-pulse">🌻</div>
                <h3 className="text-xl text-white mb-2">Community Circle</h3>
                <p className="text-purple-200 text-sm">
                  Connect with fellow awakening souls on similar journeys.
                </p>
                <div className="mt-4 text-purple-300 text-xs">
                  → Join the circle
                </div>
              </div>
            </Link>

            {/* Personal Garden */}
            <Link href="/garden/personal">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl group-hover:animate-pulse">🌿</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-200 border border-purple-400/30">
                    {subscriptionTier === 'guardian' ? '🌳 Guardian' : 
                     subscriptionTier === 'gardener' ? '🌿 Gardener' : 
                     '🌱 Seeker'}
                  </div>
                </div>
                <h3 className="text-xl text-white mb-2">Personal Garden</h3>
                <p className="text-purple-200 text-sm mb-3">
                  Tend to your preferences and track your sacred journey.
                </p>
                
                {/* Tier-specific benefits preview */}
                <div className="space-y-1 mb-4">
                  {subscriptionTier === 'guardian' ? (
                    <>
                      <div className="text-xs text-green-300">✨ Unlimited AI guidance</div>
                      <div className="text-xs text-green-300">🎯 Priority support access</div>
                      <div className="text-xs text-green-300">🔮 Exclusive content library</div>
                    </>
                  ) : subscriptionTier === 'gardener' ? (
                    <>
                      <div className="text-xs text-blue-300">🌙 77 monthly messages ({messageUsage.monthly}/77 used)</div>
                      <div className="text-xs text-blue-300">📚 Advanced wisdom access</div>
                      <div className="text-xs text-blue-300">🌸 Community features</div>
                    </>
                  ) : (
                    <>
                      <div className="text-xs text-yellow-300">☀️ 3 daily messages ({messageUsage.daily}/3 used)</div>
                      <div className="text-xs text-yellow-300">🌱 Foundation practices</div>
                      <div className="text-xs text-purple-300 mt-2">
                        <span className="underline">Upgrade for expanded access</span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="mt-4 text-purple-300 text-xs">
                  → Nurture your growth
                </div>
              </div>
            </Link>

            {/* Sacred Services */}
            <Link href="/garden/services">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl mb-4 group-hover:animate-pulse">🔮</div>
                <h3 className="text-xl text-white mb-2">Sacred Services</h3>
                <p className="text-purple-200 text-sm">
                  Explore offerings for deeper spiritual support and guidance.
                </p>
                <div className="mt-4 text-purple-300 text-xs">
                  → Discover sacred pathways
                </div>
              </div>
            </Link>

            {/* Today's Intention */}
            <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
              <div className="text-3xl mb-4">🌸</div>
              <h3 className="text-xl text-white mb-2">Today&apos;s Intention</h3>
              <p className="text-purple-200 text-sm italic">
                &ldquo;I welcome whatever seeds are ready to bloom within me today.&rdquo;
              </p>
              <div className="mt-4 text-purple-300 text-xs">
                ✧ Sacred reflection ✧
              </div>
            </div>
          </div>

          {/* Sacred Quote */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20">
              <p className="text-purple-200 text-lg italic leading-relaxed">
                &ldquo;Every moment in this garden is an opportunity to remember<br />
                the divine seed that has always lived within you.&rdquo;
              </p>
              <div className="mt-4 text-purple-300 text-sm">
                ✧ Garden Wisdom ✧
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌱</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🦋</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🌺</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🕊️</div>
      
      {/* Sacred Frequencies Component */}
      <SacredFrequencies />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
