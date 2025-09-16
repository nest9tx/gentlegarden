'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '../../lib/supabase';

interface TieredContentProps {
  children: React.ReactNode;
  requiredTier: 'public' | 'seeker' | 'gardener';
  fallback?: React.ReactNode;
  upgradeMessage?: string;
  upgradePath?: string;
}

export default function TieredContent({ 
  children, 
  requiredTier, 
  fallback, 
  upgradeMessage,
  upgradePath = '/garden/personal'
}: TieredContentProps) {
  const [userTier, setUserTier] = useState<'public' | 'seeker' | 'gardener' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserAccess = async () => {
      try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();
        
        setIsAuthenticated(!!session);
        
        if (session) {
          // In a full implementation, you'd fetch the user's tier from their profile/subscription
          // For now, we'll assume authenticated users are at least 'seeker' tier
          // This would typically involve checking a user_profiles table or subscription status
          setUserTier('seeker'); // This should be fetched from user profile
        } else {
          setUserTier('public');
        }
      } catch (error) {
        console.error('Error checking user access:', error);
        setUserTier('public');
      } finally {
        setLoading(false);
      }
    };

    checkUserAccess();
  }, []);

  const hasAccess = () => {
    if (requiredTier === 'public') return true;
    if (requiredTier === 'seeker' && (userTier === 'seeker' || userTier === 'gardener')) return true;
    if (requiredTier === 'gardener' && userTier === 'gardener') return true;
    return false;
  };

  if (loading) {
    return (
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-white/10 h-12 w-12"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-white/10 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-white/10 rounded"></div>
              <div className="h-3 bg-white/10 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (hasAccess()) {
    return <>{children}</>;
  }

  // Show fallback content or upgrade prompt
  if (fallback) {
    return <>{fallback}</>;
  }

  const defaultUpgradeMessage = 
    requiredTier === 'seeker' ? 'Join as a Seeker to unlock this content' :
    requiredTier === 'gardener' ? 'Upgrade to Gardener to access deeper teachings' :
    'Premium content available';

  const getUpgradeButtonText = () => {
    if (!isAuthenticated) {
      return requiredTier === 'seeker' ? 'Join as Seeker' : 'Join as Gardener';
    }
    return requiredTier === 'gardener' ? 'Upgrade to Gardener' : 'Upgrade Access';
  };

  const getGradientClasses = () => {
    if (requiredTier === 'gardener') {
      return 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600';
    }
    return 'from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600';
  };

  return (
    <div className="bg-white/10 rounded-lg p-6 border border-white/20">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {requiredTier === 'gardener' ? (
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-green-300 text-xl">🌱</span>
            </div>
          ) : (
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
              <span className="text-teal-300 text-xl">✨</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-white font-medium mb-2">
            {requiredTier === 'gardener' ? '🌱 Gardener Content' : '✨ Seeker Content'}
          </h4>
          <p className="text-white/80 text-sm mb-4">
            {upgradeMessage || defaultUpgradeMessage}
          </p>
          <button 
            onClick={() => window.location.href = upgradePath}
            className={`bg-gradient-to-r ${getGradientClasses()} text-white px-4 py-2 rounded-lg text-sm transition-all font-medium`}
          >
            {getUpgradeButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper hook for getting user tier in components
export const useUserTier = () => {
  const [userTier, setUserTier] = useState<'public' | 'seeker' | 'gardener' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserAccess = async () => {
      try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();
        
        setIsAuthenticated(!!session);
        
        if (session) {
          // In a full implementation, you'd fetch this from user profile
          setUserTier('seeker'); // This should be fetched from user profile
        } else {
          setUserTier('public');
        }
      } catch (error) {
        console.error('Error checking user access:', error);
        setUserTier('public');
      } finally {
        setLoading(false);
      }
    };

    checkUserAccess();
  }, []);

  return { userTier, isAuthenticated, loading };
};