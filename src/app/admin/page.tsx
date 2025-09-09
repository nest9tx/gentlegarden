'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User } from '@supabase/auth-helpers-nextjs';

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    seekers: 0, 
    gardeners: 0,
    monthlyRevenue: 0
  });

  // Your admin email - update this to your actual email
  const ADMIN_EMAIL = 'support@gentlegarden.org'; // Update this!

  useEffect(() => {
    const initAdmin = async () => {
      try {
        const { createClient } = await import('../../../lib/supabase');
        const supabase = createClient();
        
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user);
          
          // Check if user is admin (update email above)
          if (session.user.email === ADMIN_EMAIL) {
            setIsAuthorized(true);
            
            // Get comprehensive user data
            await loadComprehensiveStats(supabase);
          }
        }
      } catch (error) {
        console.log('Admin auth error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    initAdmin();
  }, []);

  const loadComprehensiveStats = async (supabase: ReturnType<typeof import('../../../lib/supabase').createClient>) => {
    try {
      // Get all users from auth (requires service role or admin privileges)
      // For now, we'll work with what we can access
      
      // Initialize any auth users who aren't in garden_guide_usage yet
      const { data: { users: authUsers }, error: authError } = await supabase.auth.admin.listUsers();
      
      if (authUsers && !authError) {
        // Initialize users who haven't been initialized yet
        const { initializeUserInGarden } = await import('../../../lib/userInitialization');
        
        for (const authUser of authUsers) {
          await initializeUserInGarden(authUser.id, authUser.email || '');
        }
      }
      
      // Now get all usage data (should include everyone)
      const { data: usageData } = await supabase
        .from('garden_guide_usage')
        .select('user_id, subscription_tier, created_at, monthly_message_count');

      if (usageData) {
        const totalUsers = usageData.length;
        const seekers = usageData.filter((u: { subscription_tier: string }) => u.subscription_tier === 'seeker').length;
        const gardeners = usageData.filter((u: { subscription_tier: string }) => u.subscription_tier === 'gardener').length;
        const monthlyRevenue = gardeners * 11.11;
        
        setStats({ totalUsers, seekers, gardeners, monthlyRevenue });
        
        console.log('🌸 Garden Stats Updated:', {
          totalUsers,
          seekers,
          gardeners,
          monthlyRevenue,
          authUsersFound: authUsers?.length || 'access_limited'
        });
      }
    } catch (error) {
      console.log('Note: Limited admin access - showing available data only:', error);
      
      // Fallback: Just show what we can see from garden_guide_usage
      const { data: usageData } = await supabase
        .from('garden_guide_usage')
        .select('user_id, subscription_tier');

      if (usageData) {
        const totalUsers = usageData.length;
        const seekers = usageData.filter((u: { subscription_tier: string }) => u.subscription_tier === 'seeker').length;
        const gardeners = usageData.filter((u: { subscription_tier: string }) => u.subscription_tier === 'gardener').length;
        const monthlyRevenue = gardeners * 11.11;
        
        setStats({ totalUsers, seekers, gardeners, monthlyRevenue });
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-4 animate-pulse">🌸</div>
          <p className="text-purple-200">Sacred garden awakening...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-center max-w-md">
          <div className="text-4xl mb-4">🔒</div>
          <h1 className="text-2xl mb-4">Sacred Garden Guardian Access</h1>
          <p className="text-purple-200 mb-6">
            This sacred space is reserved for garden guardians only.
          </p>
          <Link 
            href="/garden"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            Return to Garden
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
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

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">🌸</div>
            <div>
              <h1 className="text-2xl font-light text-white">Sacred Garden Guardian</h1>
              <div className="text-purple-300 text-sm">Admin Dashboard</div>
            </div>
          </div>
          <Link 
            href="/garden"
            className="text-purple-300 hover:text-white transition-colors"
          >
            Return to Garden
          </Link>
        </div>
      </header>

      {/* Main Dashboard */}
      <div className="relative z-10 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Overview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Total Users */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">👥</div>
                <div className="text-right">
                  <div className="text-2xl font-light text-white">{stats.totalUsers}</div>
                  <div className="text-purple-300 text-sm">Total Souls</div>
                </div>
              </div>
              <div className="text-purple-200 text-xs">
                Sacred garden community
              </div>
            </div>

            {/* Seekers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">🌱</div>
                <div className="text-right">
                  <div className="text-2xl font-light text-white">{stats.seekers}</div>
                  <div className="text-purple-300 text-sm">Seekers</div>
                </div>
              </div>
              <div className="text-purple-200 text-xs">
                Free tier explorers
              </div>
            </div>

            {/* Gardeners */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">🌿</div>
                <div className="text-right">
                  <div className="text-2xl font-light text-white">{stats.gardeners}</div>
                  <div className="text-purple-300 text-sm">Gardeners</div>
                </div>
              </div>
              <div className="text-purple-200 text-xs">
                Sacred cultivators ($11.11/month)
              </div>
            </div>

            {/* Monthly Revenue */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">💰</div>
                <div className="text-right">
                  <div className="text-2xl font-light text-white">${stats.monthlyRevenue.toFixed(2)}</div>
                  <div className="text-purple-300 text-sm">Monthly Flow</div>
                </div>
              </div>
              <div className="text-purple-200 text-xs">
                Sacred exchange energy
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 mb-8">
            <h3 className="text-lg font-light text-white mb-4 flex items-center">
              <span className="mr-2">⚡</span>
              Sacred Garden Management
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              
              {/* Stripe Dashboard */}
              <a 
                href="https://dashboard.stripe.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">💳</span>
                  <div>
                    <div className="text-purple-100 text-sm">Stripe Dashboard</div>
                    <div className="text-purple-400 text-xs">Payment management</div>
                  </div>
                </div>
                <span className="text-purple-300 group-hover:text-purple-200">→</span>
              </a>

              {/* Supabase Dashboard */}
              <a 
                href="https://supabase.com/dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🗄️</span>
                  <div>
                    <div className="text-purple-100 text-sm">Supabase Console</div>
                    <div className="text-purple-400 text-xs">Database & auth</div>
                  </div>
                </div>
                <span className="text-purple-300 group-hover:text-purple-200">→</span>
              </a>

              {/* Support Email */}
              <a 
                href="mailto:support@gentlegarden.org" 
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <div className="text-purple-100 text-sm">Support Email</div>
                    <div className="text-purple-400 text-xs">Garden assistance</div>
                  </div>
                </div>
                <span className="text-purple-300 group-hover:text-purple-200">→</span>
              </a>
            </div>
          </div>

          {/* Conversion Insights */}
          <div className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
            <h3 className="text-lg font-light text-purple-100 mb-4 flex items-center">
              <span className="mr-2">�</span>
              Sacred Garden Insights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-2xl text-purple-100 mb-2">
                  {stats.totalUsers > 0 ? Math.round((stats.gardeners / stats.totalUsers) * 100) : 0}%
                </div>
                <div className="text-purple-300 text-sm">Seeker to Gardener conversion</div>
              </div>
              <div>
                <div className="text-2xl text-purple-100 mb-2">
                  ${stats.monthlyRevenue > 0 ? (stats.monthlyRevenue * 12).toFixed(0) : 0}
                </div>
                <div className="text-purple-300 text-sm">Projected annual revenue</div>
              </div>
            </div>
            <div className="mt-4 text-purple-200 text-sm space-y-1">
              <p>• For detailed analytics, use Stripe Dashboard for payments</p>
              <p>• Access Supabase Console for user data and database management</p>
              <p>• Email notifications will arrive at support@gentlegarden.org</p>
              <p>• Update ADMIN_EMAIL in this file to change access permissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
