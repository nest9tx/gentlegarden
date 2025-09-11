'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User } from '@supabase/auth-helpers-nextjs';
import SacredFrequencies from '../../components/SacredFrequencies';
import SacredNavigation from '../../components/SacredNavigation';

export default function GardenDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscriptionTier, setSubscriptionTier] = useState<string>('seeker');

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
        
        // Initialize user in garden if not already present
        const { initializeUserInGarden } = await import('../../../lib/userInitialization');
        await initializeUserInGarden(session.user.id, session.user.email || '');
        
        // Load subscription tier from Supabase
        const { data: usageData } = await supabase
          .from('garden_guide_usage')
          .select('subscription_tier')
          .eq('user_id', session.user.id)
          .single();
          
        if (usageData) {
          setSubscriptionTier(usageData.subscription_tier || 'seeker');
        }
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
      {/* Sacred Navigation with integrated auth */}
      <SacredNavigation currentPage="Sacred Garden" showBackToGarden={false} />
      
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
          
          {/* Sacred Welcome - Unified Personal Experience */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="text-5xl animate-bounce">🌺</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-white">Your Sacred Garden</h1>
                <div className="text-purple-300">Welcome back, beautiful soul</div>
              </div>
            </div>
            
            {/* Journey Status */}
            <div className="flex justify-center items-center mb-4">
              <div className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-200 border border-purple-400/30">
                {subscriptionTier === 'gardener' ? '🌿 Sacred Gardener' : '🌱 Gentle Seeker'}
              </div>
            </div>
            
            {/* Tier guidance for Seekers */}
            {subscriptionTier === 'seeker' && (
              <p className="text-purple-300 text-sm">
                Your garden blooms beautifully • Explore the{' '}
                <Link href="/garden/services" className="underline hover:text-purple-200">
                  Sacred Gardener Path
                </Link>
                {' '}for deeper cultivation
              </p>
            )}
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-6"></div>
            
            {/* Direct Practice Access */}
            <div className="text-purple-300 text-sm mb-8">
              ✧ Sacred practices ✧ Gentle wisdom ✧ AI companion ✧ Personal growth ✧
            </div>
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

            {/* Wisdom Grove - Now redirects to Ancient Wisdom Grove Sanctuary */}
            <Link href="/community/wisdom-grove">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl mb-4 group-hover:animate-pulse">🌳</div>
                <h3 className="text-xl text-white mb-2">Ancient Wisdom Grove</h3>
                <p className="text-purple-200 text-sm">
                  Connect with eternal wisdom through contemplative practices.
                </p>
                <div className="mt-4 text-purple-300 text-xs">
                  → Enter wisdom sanctuary
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

            {/* Sacred Practice Sanctuaries */}
            <Link href="/community">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl mb-4 group-hover:animate-pulse">🏛️</div>
                <h3 className="text-xl text-white mb-2">Sacred Sanctuaries</h3>
                <p className="text-purple-200 text-sm">
                  Daily spiritual practices for gentle awakening and soul communion.
                </p>
                <div className="mt-4 text-purple-300 text-xs">
                  → Enter sacred practice
                </div>
              </div>
            </Link>

            {/* Personal Garden */}
            <Link href="/garden/personal">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl group-hover:animate-pulse">🌿</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-200 border border-purple-400/30">
                    {subscriptionTier === 'gardener' ? '🌿 Gardener' : '🌱 Seeker'}
                  </div>
                </div>
                <h3 className="text-xl text-white mb-2">Personal Garden</h3>
                <p className="text-purple-200 text-sm">
                  Tend to your preferences and track your sacred journey.
                </p>
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
    </div>
  );
}
