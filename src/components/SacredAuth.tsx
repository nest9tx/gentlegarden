'use client';

import { useState, useEffect } from 'react';
import { User } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

type SacredAuthProps = {
  position?: 'header' | 'corner' | 'inline';
  showTier?: boolean;
  showLogout?: boolean;
  className?: string;
};

export default function SacredAuth({ 
  position = 'header', 
  showTier = true, 
  showLogout = true,
  className = ''
}: SacredAuthProps) {
  const [user, setUser] = useState<User | null>(null);
  const [subscriptionTier, setSubscriptionTier] = useState<string>('seeker');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { createClient } = await import('../../lib/supabase');
        const supabase = createClient();
        
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user);
          await loadUserTier(session.user.id);
        }
      } catch (error) {
        console.log('Auth check error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    initAuth();
  }, []);

  const loadUserTier = async (userId: string) => {
    try {
      const { createClient } = await import('../../lib/supabase');
      const supabase = createClient();
      
      const { data: usageData } = await supabase
        .from('garden_guide_usage')
        .select('subscription_tier')
        .eq('user_id', userId)
        .single();

      if (usageData) {
        setSubscriptionTier(usageData.subscription_tier || 'seeker');
      }
    } catch (error) {
      console.log('Tier loading error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      const { createClient } = await import('../../lib/supabase');
      const supabase = createClient();
      await supabase.auth.signOut();
      setUser(null);
      setSubscriptionTier('seeker');
      // Gentle redirect to home
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

  if (loading) {
    return (
      <div className={`${className} ${position === 'corner' ? 'fixed top-20 right-4 z-40' : ''}`}>
        <div className="flex items-center text-purple-300 text-sm">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse mr-2"></div>
          Connecting to garden...
        </div>
      </div>
    );
  }

  // Guest (not signed in) display
  if (!user) {
    return (
      <div className={`${className} ${position === 'corner' ? 'fixed top-20 right-4 z-40' : ''}`}>
        <div className="flex items-center gap-3">
          {position === 'header' && (
            <div className="text-purple-300 text-sm flex items-center">
              🌸 <span className="ml-1">Garden Explorer</span>
            </div>
          )}
          <Link 
            href="/enter"
            className="bg-purple-600/30 hover:bg-purple-600/50 text-purple-100 px-3 py-1.5 rounded-full text-sm transition-colors border border-purple-400/30"
          >
            Enter Garden
          </Link>
        </div>
      </div>
    );
  }

  // Authenticated user display
  return (
    <div className={`${className} ${position === 'corner' ? 'fixed top-20 right-4 z-40' : ''}`}>
      <div className="flex items-center gap-3">
        {/* User Status */}
        <div className="text-sm">
          {showTier && (
            <div className={`${getTierColor()} font-medium`}>
              {getTierDisplay()}
            </div>
          )}
          <div className="text-purple-300 text-xs opacity-75">
            {user.email}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <Link 
            href="/garden"
            className="bg-purple-600/30 hover:bg-purple-600/50 text-purple-100 px-3 py-1.5 rounded-full text-sm transition-colors border border-purple-400/30"
          >
            My Garden
          </Link>
          
          {showLogout && (
            <button 
              onClick={handleSignOut}
              className="text-purple-300 hover:text-purple-100 text-sm transition-colors px-2"
              title="Leave garden gently"
            >
              🚪
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Simplified version for feature access indicators
export function FeatureAccess({ 
  requiresAuth = false, 
  requiresTier = 'seeker',
  children 
}: { 
  requiresAuth?: boolean;
  requiresTier?: 'seeker' | 'gardener' | 'guardian';
  children: React.ReactNode;
}) {
  const [hasAccess, setHasAccess] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      if (!requiresAuth) {
        setHasAccess(true);
        return;
      }

      try {
        const { createClient } = await import('../../lib/supabase');
        const supabase = createClient();
        
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) {
          setHasAccess(false);
          return;
        }

        setUser(session.user);

        // Check tier if required
        if (requiresTier !== 'seeker') {
          const { data: usageData } = await supabase
            .from('garden_guide_usage')
            .select('subscription_tier')
            .eq('user_id', session.user.id)
            .single();

          const userTier = usageData?.subscription_tier || 'seeker';

          const tierHierarchy = { seeker: 0, gardener: 1, guardian: 2 };
          const requiredLevel = tierHierarchy[requiresTier];
          const userLevel = tierHierarchy[userTier as keyof typeof tierHierarchy];

          setHasAccess(userLevel >= requiredLevel);
        } else {
          setHasAccess(true);
        }
      } catch (error) {
        console.log('Access check error:', error);
        setHasAccess(false);
      }
    };

    checkAccess();
  }, [requiresAuth, requiresTier]);

  if (!hasAccess && requiresAuth && !user) {
    return (
      <div className="bg-purple-900/30 border border-purple-400/30 rounded-lg p-6 text-center">
        <div className="text-purple-200 mb-3">
          🌸 This sacred space awaits your gentle entry
        </div>
        <Link 
          href="/enter"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
        >
          Enter the Garden
        </Link>
      </div>
    );
  }

  if (!hasAccess && user) {
    return (
      <div className="bg-amber-900/20 border border-amber-400/30 rounded-lg p-6 text-center">
        <div className="text-amber-200 mb-3">
          ✨ This sanctuary is available for {requiresTier === 'gardener' ? 'Sacred Gardeners' : 'Garden Guardians'}
        </div>
        <Link 
          href="/garden/services"
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-colors"
        >
          Explore Sacred Offerings
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
