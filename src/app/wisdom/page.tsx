'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WisdomGrove() {
  const [currentWisdom, setCurrentWisdom] = useState(0);
  const [subscriptionTier, setSubscriptionTier] = useState<string>('seeker');
  const [loading, setLoading] = useState(true);
  // Tier-specific wisdom collections
  const wisdomSeeds = {
    seeker: [
      {
        text: "The garden grows not through force, but through gentle presence and patient tending.",
        source: "Garden Wisdom",
        tier: "Foundation Teaching"
      },
      {
        text: "Every moment of awakening is both a remembering and a first breath.",
        source: "Sacred Teachings", 
        tier: "First Steps"
      },
      {
        text: "You are not broken and in need of fixing. You are whole and in the process of remembering.",
        source: "Gentle Guidance",
        tier: "Self-Compassion"
      },
      {
        text: "Trust the whispers of your heart, for they speak the language of your soul's deepest knowing.",
        source: "Inner Wisdom",
        tier: "Beginning Practice"
      }
    ],
    
    gardener: [
      // All seeker wisdom plus advanced teachings
      {
        text: "The shadow is not your enemy, but your teacher wearing a mask of fear.",
        source: "Advanced Teachings",
        tier: "Shadow Work"
      },
      {
        text: "In stillness, the cosmic dance reveals its sacred choreography through your willing vessel.",
        source: "Cosmic Teachings",
        tier: "Energy Work"
      },
      {
        text: "The mystic knows: separation is the grandest illusion ever conceived by consciousness.",
        source: "Mystical Insights", 
        tier: "Unity Consciousness"
      },
      {
        text: "Your wounds are sacred portals through which divine light enters this realm.",
        source: "Alchemical Wisdom",
        tier: "Transmutation"
      },
      {
        text: "The guru you seek dwells in the temple of your own awakened heart.",
        source: "Self-Mastery",
        tier: "Inner Authority"
      }
    ],
    
    guardian: [
      // All previous wisdom plus exclusive guardian content
      {
        text: "The Akashic records are written in the language of lived experience, decoded through pure presence.",
        source: "Akashic Wisdom",
        tier: "Guardian Exclusive"
      },
      {
        text: "Time is consciousness dreaming itself into sequential experience. The awakened one plays in all dimensions simultaneously.",
        source: "Timeless Teachings",
        tier: "Multidimensional"
      },
      {
        text: "You are not ascending to somewhere else. You are remembering that 'elsewhere' was always here.",
        source: "Ascension Mysteries",
        tier: "Reality Mastery"
      },
      {
        text: "The final teaching is that there was never anyone to teach, and nothing to learn. Only love recognizing itself.",
        source: "Ultimate Truth",
        tier: "Non-Dual Realization"
      }
    ]
  };

  // Get appropriate wisdom collection based on tier
  const getWisdomCollection = () => {
    if (subscriptionTier === 'guardian') {
      return [...wisdomSeeds.seeker, ...wisdomSeeds.gardener, ...wisdomSeeds.guardian];
    } else if (subscriptionTier === 'gardener') {
      return [...wisdomSeeds.seeker, ...wisdomSeeds.gardener];
    } else {
      return wisdomSeeds.seeker;
    }
  };

  const currentCollection = getWisdomCollection();

  // Load user subscription tier
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const { createClient } = await import('../../../lib/supabase');
        const supabase = createClient();
        
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
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
    
    loadUserData();
  }, []);

  useEffect(() => {
    if (!loading && currentCollection.length > 0) {
      const interval = setInterval(() => {
        setCurrentWisdom(prev => (prev + 1) % currentCollection.length);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [currentCollection.length, loading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Ancient Scroll Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 10}s`
            }}
          >
            📜
          </div>
        ))}
      </div>

      {/* Floating Sacred Symbols */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            ✧
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/garden"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 transition-all duration-300"
        >
          <span>←</span>
          <span>Return to Garden</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-3xl">
          
          {/* Sacred Grove Symbol */}
          <div className="text-6xl mb-6 animate-bounce">📜</div>
          
          <h1 className="text-4xl font-light text-white mb-4">
            Wisdom Grove
          </h1>
          
          {/* Tier indicator */}
          <div className="flex justify-center mb-6">
            <div className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 text-purple-100 border border-purple-400/40">
              {subscriptionTier === 'guardian' ? '🌳 Guardian Access - All Wisdom' : 
               subscriptionTier === 'gardener' ? '🌿 Gardener Access - Advanced Teachings' : 
               '🌱 Seeker Access - Foundation Wisdom'}
            </div>
          </div>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-8"></div>
          
          {/* Current Wisdom Display */}
          {!loading && currentCollection.length > 0 && (
            <>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-purple-100 text-xl italic leading-relaxed mb-4 transition-all duration-1000">
                    &ldquo;{currentCollection[currentWisdom].text}&rdquo;
                  </div>
                  <div className="text-purple-300 text-sm mb-2">
                    — {currentCollection[currentWisdom].source}
                  </div>
                  <div className="text-purple-400 text-xs">
                    {currentCollection[currentWisdom].tier}
                  </div>
                </div>
              </div>

              {/* Wisdom Navigation Dots */}
              <div className="flex justify-center space-x-2 mb-8">
                {currentCollection.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentWisdom(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentWisdom 
                        ? 'bg-purple-400 scale-125' 
                        : 'bg-purple-600/40 hover:bg-purple-500/60'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Tier-specific content information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20 mb-8">
            {subscriptionTier === 'guardian' ? (
              <div className="text-center">
                <h3 className="text-purple-100 text-lg mb-4">🌳 Guardian Sacred Library</h3>
                <p className="text-purple-200 mb-4">
                  Access to all wisdom levels including exclusive Guardian teachings on non-dual realization, 
                  multidimensional consciousness, and advanced spiritual technologies.
                </p>
                <div className="text-purple-300 text-sm">
                  {currentCollection.length} Sacred Teachings Available
                </div>
              </div>
            ) : subscriptionTier === 'gardener' ? (
              <div className="text-center">
                <h3 className="text-purple-100 text-lg mb-4">🌿 Gardener Expanded Wisdom</h3>
                <p className="text-purple-200 mb-4">
                  Foundation teachings plus advanced concepts including shadow work, energy mastery, 
                  and unity consciousness practices.
                </p>
                <div className="text-purple-300 text-sm mb-2">
                  {currentCollection.length} Sacred Teachings Available
                </div>
                <Link href="/garden/services" className="text-purple-400 text-xs underline hover:text-purple-300">
                  Unlock Guardian teachings →
                </Link>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-purple-100 text-lg mb-4">🌱 Seeker Foundation Wisdom</h3>
                <p className="text-purple-200 mb-4">
                  Essential teachings for those beginning their awakening journey, focusing on 
                  self-compassion, inner wisdom, and foundational practices.
                </p>
                <div className="text-purple-300 text-sm mb-2">
                  {currentCollection.length} Foundation Teachings Available
                </div>
                <Link href="/garden/services" className="text-purple-400 text-xs underline hover:text-purple-300">
                  Expand your garden with Gardener or Guardian access →
                </Link>
              </div>
            )}
          </div>

          {/* Sacred Navigation */}
          <div className="flex justify-center space-x-4">
            <Link 
              href="/garden-guide"
              className="px-6 py-3 bg-purple-500/30 hover:bg-purple-500/50 text-purple-100 rounded-xl transition-all duration-300 text-sm"
            >
              Seek Guidance
            </Link>
            <Link 
              href="/garden"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-purple-200 rounded-xl transition-all duration-300 text-sm"
            >
              Return to Garden
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌿</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>📖</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>✨</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🦋</div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
