'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { User } from '@supabase/auth-helpers-nextjs';

interface SacredNavigationProps {
  currentPage?: string;
  showBackToGarden?: boolean;
  showSanctuaries?: boolean;
}

export default function SacredNavigation({ 
  currentPage = '', 
  showBackToGarden = true,
  showSanctuaries = true 
}: SacredNavigationProps) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [subscriptionTier, setSubscriptionTier] = useState<string>('seeker');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const { createClient } = await import('../../lib/supabase');
        const supabase = createClient();
        
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user);
          
          // Load subscription tier
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
    
    loadAuth();
  }, []);

  const handleSignOut = async () => {
    try {
      const { createClient } = await import('../../lib/supabase');
      const supabase = createClient();
      await supabase.auth.signOut();
      setUser(null);
      setSubscriptionTier('seeker');
      window.location.href = '/';
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  const getTierDisplay = () => {
    if (subscriptionTier === 'gardener') return '🌿 Sacred Gardener';
    if (subscriptionTier === 'guardian') return '✨ Garden Guardian';
    return '🌱 Gentle Seeker';
  };

  const getTierColor = () => {
    if (subscriptionTier === 'gardener') return 'text-green-300';
    if (subscriptionTier === 'guardian') return 'text-yellow-300';
    return 'text-purple-300';
  };
  
  // Core quick sanctuary shortcuts (can later source from config) now pointing to new /sanctuaries structure
  const sanctuaryLinks = [
    { name: 'Morning Light', href: '/sanctuaries/morning-light', symbol: '🌅' },
    { name: 'Chakras', href: '/sanctuaries/chakras', symbol: '🕉️' },
    { name: 'Sacred Geometry', href: '/sanctuaries/sacred-geometries', symbol: '🔷' },
    { name: 'Communion', href: '/sanctuaries/communion', symbol: '🤲' },
    { name: 'Healing', href: '/sanctuaries/healing', symbol: '🌿' },
    { name: 'Light Work', href: '/sanctuaries/light-work', symbol: '💡' }
  ];

  const getReturnLink = () => {
    if (pathname.startsWith('/garden/personal')) {
      return '/garden/personal';
    }
    return '/garden';
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm border-b border-purple-300/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 hover:text-white transition-all duration-300 text-sm"
            >
              <span>🌱</span>
              <span>Home</span>
            </Link>

            {showBackToGarden && user && (
              <Link 
                href={getReturnLink()}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 hover:text-white transition-all duration-300 text-sm"
              >
                <span>🌸</span>
                <span>My Garden</span>
              </Link>
            )}

            <Link 
              href="/sanctuaries"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 hover:text-white transition-all duration-300 text-sm"
            >
              <span>🏛️</span>
              <span>Sanctuaries</span>
            </Link>
          </div>

          {/* Center - Current Page */}
          {currentPage && (
            <div className="text-center">
              <div className="text-purple-100 font-medium text-lg">{currentPage}</div>
            </div>
          )}

          {/* Right - Auth Status & Quick Links */}
          <div className="flex items-center space-x-4">
            {/* Quick Sanctuary Links */}
            {showSanctuaries && (
              <div className="hidden lg:flex items-center space-x-2">
                {sanctuaryLinks.slice(0, 4).map((sanctuary) => (
                  <Link
                    key={sanctuary.href}
                    href={sanctuary.href}
                    className={`p-2 rounded-lg transition-all duration-300 hover:bg-white/20 group relative ${
                      pathname === sanctuary.href ? 'bg-white/20 text-white' : 'text-purple-300 hover:text-white'
                    }`}
                    title={sanctuary.name}
                  >
                    <span className="text-sm">{sanctuary.symbol}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Authentication Status */}
            {!loading && (
              <div className="flex items-center space-x-3">
                {user ? (
                  <>
                    <div className="text-right hidden sm:block">
                      <div className={`text-sm font-medium ${getTierColor()}`}>{getTierDisplay()}</div>
                      <div className="text-purple-300 text-xs opacity-75">{user.email}</div>
                    </div>
                    <button 
                      onClick={handleSignOut}
                      className="p-2 text-purple-300 hover:text-purple-100 transition-colors rounded-lg hover:bg-white/10"
                      title="Leave garden gently"
                    >
                      🚪
                    </button>
                  </>
                ) : (
                  <Link 
                    href="/enter"
                    className="bg-purple-600/30 hover:bg-purple-600/50 text-purple-100 px-3 py-1.5 rounded-full text-sm transition-colors border border-purple-400/30"
                  >
                    Enter Garden
                  </Link>
                )}
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button className="p-2 text-purple-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
