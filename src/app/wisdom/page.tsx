'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WisdomGrove() {
  const [subscriptionTier, setSubscriptionTier] = useState<string>('seeker');
  const [loading, setLoading] = useState(true);
  const [selectedVault, setSelectedVault] = useState<string | null>(null);
  const [selectedScroll, setSelectedScroll] = useState<string | null>(null);
  const [showScrollGuide, setShowScrollGuide] = useState(false);
  // Sacred Wisdom Vaults - Structured Teaching Modules
  const wisdomVaults = {
    seeker: {
      name: "Foundation Vaults",
      description: "Sacred teachings for beginning your awakening journey",
      vaults: [
        {
          id: "gentle-awakening",
          name: "🌱 Gentle Awakening Vault",
          description: "First steps into conscious awareness",
          icon: "🌱",
          scrolls: [
            {
              id: "first-breath",
              title: "The Sacred First Breath",
              subtitle: "Awakening to this moment",
              teachings: [
                "Every moment of awakening is both a remembering and a first breath.",
                "Consciousness is not something you achieve - it is what you are.",
                "The journey begins not with doing, but with gentle being.",
                "Your awareness is already perfect; it simply asks to be acknowledged."
              ],
              practice: {
                title: "Sacred Breath Awareness",
                instructions: [
                  "Find a comfortable position and close your eyes gently",
                  "Notice your natural breath without changing it",
                  "With each inhale, whisper internally: 'I am awakening'",
                  "With each exhale, whisper: 'I am aware'",
                  "Continue for 5-10 minutes, returning when mind wanders"
                ],
                duration: "5-10 minutes",
                frequency: "Daily, upon waking"
              },
              guide: {
                greeting: "Welcome, gentle soul. I am here to support your first steps into conscious awareness.",
                encouragement: "Remember, there is no rush in awakening. Each breath is a doorway to deeper presence.",
                helpWith: ["Understanding what awakening means", "Establishing daily practice", "Working with resistance", "Celebrating small shifts"]
              }
            },
            {
              id: "self-compassion",
              title: "The Garden of Self-Compassion",
              subtitle: "Healing the inner critic through love",
              teachings: [
                "You are not broken and in need of fixing. You are whole and in the process of remembering.",
                "Self-compassion is not self-indulgence; it is the foundation of genuine transformation.",
                "The voice that judges you is not your voice - it is conditioning speaking.",
                "Love yourself as you would tend a delicate seedling - with patience and care."
              ],
              practice: {
                title: "Inner Garden Visualization",
                instructions: [
                  "Sit quietly and imagine yourself as a gardener",
                  "See your heart as a beautiful garden plot",
                  "Notice any weeds (self-criticism) with gentle awareness",
                  "Instead of pulling them roughly, speak to them: 'Thank you for trying to protect me'",
                  "Plant seeds of kindness: 'I am worthy of love and patience'",
                  "Water these seeds with your breath and attention"
                ],
                duration: "10-15 minutes",
                frequency: "3 times per week"
              },
              guide: {
                greeting: "Hello, dear one. I'm here to help you cultivate the most important relationship - the one with yourself.",
                encouragement: "Self-compassion is a practice, not a perfection. Be patient with yourself as you learn.",
                helpWith: ["Transforming self-criticism", "Building self-worth", "Creating inner safety", "Developing self-forgiveness"]
              }
            }
          ]
        },
        {
          id: "inner-wisdom",
          name: "🌿 Inner Wisdom Vault", 
          description: "Learning to trust your inner knowing",
          icon: "🌿",
          scrolls: [
            {
              id: "heart-whispers",
              title: "Listening to Heart Whispers",
              subtitle: "The language of intuitive knowing",
              teachings: [
                "Trust the whispers of your heart, for they speak the language of your soul's deepest knowing.",
                "Intuition is not mystical - it is your natural intelligence speaking through feeling.",
                "The mind asks 'How?', the heart knows 'Why', the soul remembers 'What'.",
                "Your inner wisdom has been waiting patiently for you to listen."
              ],
              practice: {
                title: "Heart Compass Practice",
                instructions: [
                  "Place one hand on your heart, one on your belly",
                  "Pose a gentle question to your heart about your day",
                  "Notice any sensations, images, or feelings that arise",
                  "Don't judge what comes - simply receive with curiosity",
                  "Thank your heart for sharing its wisdom",
                  "Act on one small insight throughout your day"
                ],
                duration: "5-10 minutes",
                frequency: "Morning or before decisions"
              },
              guide: {
                greeting: "Greetings, wise one. I'm here to help you remember the intelligence of your own heart.",
                encouragement: "Your intuition strengthens with practice. Trust what you receive, even if it seems simple.",
                helpWith: ["Distinguishing intuition from fear", "Building trust in inner knowing", "Making heart-based decisions", "Quieting mental noise"]
              }
            }
          ]
        }
      ]
    },
    
    gardener: {
      name: "Cultivation Vaults",
      description: "Advanced practices for deepening spiritual growth",
      vaults: [
        {
          id: "shadow-integration",
          name: "🌙 Shadow Integration Vault",
          description: "Befriending the rejected aspects of self",
          icon: "🌙",
          scrolls: [
            {
              id: "shadow-teacher",
              title: "The Shadow as Sacred Teacher",
              subtitle: "Transforming fear into wisdom",
              teachings: [
                "The shadow is not your enemy, but your teacher wearing a mask of fear.",
                "What you resist in others is often what you resist in yourself.",
                "Integration, not elimination, is the path to wholeness.",
                "Your rejected aspects hold keys to your greatest gifts."
              ],
              practice: {
                title: "Shadow Dialogue Practice",
                instructions: [
                  "Think of someone who irritates or triggers you",
                  "Ask: 'What quality in them do I dislike?'",
                  "Breathe and ask: 'How might I have this quality too?'",
                  "Without judgment, explore this with curiosity",
                  "Send compassion to both them and this aspect in yourself",
                  "Ask: 'What gift might this quality offer when integrated?'"
                ],
                duration: "15-20 minutes",
                frequency: "Weekly or when triggered"
              },
              guide: {
                greeting: "Welcome, brave soul. I'm here to support you in embracing all aspects of your being.",
                encouragement: "Shadow work takes courage. You're doing sacred healing for yourself and the collective.",
                helpWith: ["Understanding projection", "Working with triggers", "Integrating rejected aspects", "Finding gifts in shadows"]
              }
            }
          ]
        },
        {
          id: "energy-mastery",
          name: "⚡ Energy Mastery Vault",
          description: "Working with subtle energies and frequencies",
          icon: "⚡",
          scrolls: [
            {
              id: "cosmic-dance",
              title: "The Cosmic Dance Within",
              subtitle: "Harmonizing with universal frequencies",
              teachings: [
                "In stillness, the cosmic dance reveals its sacred choreography through your willing vessel.",
                "You are not separate from the universe - you are the universe experiencing itself.",
                "Energy follows awareness; consciousness directs the dance.",
                "Your body is a sacred instrument capable of playing cosmic symphonies."
              ],
              practice: {
                title: "Frequency Attunement Practice",
                instructions: [
                  "Sit in stillness and scan your body with gentle awareness",
                  "Notice areas of tension or density",
                  "Breathe golden light into these areas",
                  "Imagine your entire body vibrating at the frequency of love",
                  "Extend this vibration beyond your body into your space",
                  "Rest in the awareness of yourself as pure vibrating consciousness"
                ],
                duration: "20-30 minutes", 
                frequency: "3-4 times per week"
              },
              guide: {
                greeting: "Greetings, frequency worker. I'm here to help you master the art of conscious vibration.",
                encouragement: "You are more powerful than you know. Your consciousness shapes energy in every moment.",
                helpWith: ["Sensing subtle energies", "Chakra awareness", "Energy protection", "Raising personal frequency"]
              }
            }
          ]
        }
      ]
    },
    
    guardian: {
      name: "Mastery Vaults", 
      description: "Advanced consciousness work and service to others",
      vaults: [
        {
          id: "akashic-wisdom",
          name: "📜 Akashic Wisdom Vault",
          description: "Accessing the cosmic library of soul records",
          icon: "📜",
          scrolls: [
            {
              id: "living-records",
              title: "The Living Records of Experience",
              subtitle: "Decoding soul patterns through presence",
              teachings: [
                "The Akashic records are written in the language of lived experience, decoded through pure presence.",
                "Every soul carries within it the library of all its experiences across time.",
                "Accessing records requires not psychic ability, but pure, loving presence.",
                "Your current patterns are echoes of soul choices made in love or fear."
              ],
              practice: {
                title: "Soul Pattern Recognition",
                instructions: [
                  "Enter deep meditation and call in your highest guidance",
                  "Ask to be shown a current life pattern with love and clarity",
                  "Notice what images, feelings, or knowings arise",
                  "Ask: 'What soul gift is trying to emerge through this pattern?'",
                  "Request healing for any fear-based aspects",
                  "Anchor the gifts and release what no longer serves"
                ],
                duration: "30-45 minutes",
                frequency: "Monthly or when seeking clarity on patterns"
              },
              guide: {
                greeting: "Sacred keeper of records, I'm here to support your journey into the cosmic library of your soul.",
                encouragement: "You have permission to access your own soul's wisdom. Trust what you receive in love.",
                helpWith: ["Accessing personal records", "Understanding soul contracts", "Healing karmic patterns", "Integrating soul gifts"]
              }
            }
          ]
        },
        {
          id: "multidimensional",
          name: "🌌 Multidimensional Vault",
          description: "Consciousness beyond time and space",
          icon: "🌌", 
          scrolls: [
            {
              id: "time-transcendence",
              title: "Dancing Beyond Time",
              subtitle: "Experiencing the eternal now",
              teachings: [
                "Time is consciousness dreaming itself into sequential experience. The awakened one plays in all dimensions simultaneously.",
                "Past and future are present-moment constructs; reality exists only in the eternal now.",
                "Your consciousness is not limited by the body's experience of linear time.",
                "In true presence, all possibilities exist simultaneously in the quantum field."
              ],
              practice: {
                title: "Timeless Awareness Practice",
                instructions: [
                  "Sit in meditation and anchor yourself in present moment awareness",
                  "Feel yourself expanding beyond the boundaries of your physical form",
                  "Release the concept of past and future - rest in pure now",
                  "Ask to experience yourself as timeless consciousness",
                  "Notice the spaciousness that emerges when time dissolves",
                  "Return gently, carrying this timeless awareness into daily life"
                ],
                duration: "30-60 minutes",
                frequency: "Weekly or when feeling limited by time"
              },
              guide: {
                greeting: "Infinite being, I'm here to support your exploration of consciousness beyond dimensional boundaries.",
                encouragement: "You are far more vast than your human experience suggests. Trust your multidimensional nature.",
                helpWith: ["Transcending time limitations", "Accessing higher dimensions", "Understanding parallel realities", "Integrating expanded awareness"]
              }
            }
          ]
        }
      ]
    }
  };

  // Get appropriate wisdom vaults based on tier
  const getAvailableVaults = () => {
    if (subscriptionTier === 'guardian') {
      return [...wisdomVaults.seeker.vaults, ...wisdomVaults.gardener.vaults, ...wisdomVaults.guardian.vaults];
    } else if (subscriptionTier === 'gardener') {
      return [...wisdomVaults.seeker.vaults, ...wisdomVaults.gardener.vaults];
    } else {
      return wisdomVaults.seeker.vaults;
    }
  };

  const availableVaults = getAvailableVaults();
  
  // Get total scroll count for display
  const totalScrollCount = availableVaults.reduce((total, vault) => total + vault.scrolls.length, 0);

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
          
          {/* Wisdom Vaults Interface */}
          {!loading && availableVaults.length > 0 && (
            <>
              {selectedVault === null ? (
                <>
                  {/* Vault Selection View */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {availableVaults.map((vault) => (
                      <div 
                        key={vault.id}
                        onClick={() => setSelectedVault(vault.id)}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="text-4xl mb-4 group-hover:animate-pulse">{vault.icon}</div>
                        <h3 className="text-xl text-white mb-3">{vault.name}</h3>
                        <p className="text-purple-200 text-sm mb-4">{vault.description}</p>
                        <div className="text-purple-300 text-xs">
                          {vault.scrolls.length} Sacred Scrolls Available
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : selectedScroll === null ? (
                <>
                  {/* Scroll Selection View */}
                  <div className="mb-6">
                    <button
                      onClick={() => setSelectedVault(null)}
                      className="flex items-center text-purple-300 hover:text-white transition-colors mb-4"
                    >
                      <span className="mr-2">←</span>
                      Back to Vaults
                    </button>
                    {(() => {
                      const vault = availableVaults.find(v => v.id === selectedVault);
                      return vault ? (
                        <>
                          <h2 className="text-2xl text-white mb-2 flex items-center">
                            <span className="mr-3">{vault.icon}</span>
                            {vault.name}
                          </h2>
                          <p className="text-purple-200 mb-6">{vault.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {vault.scrolls.map((scroll) => (
                              <div 
                                key={scroll.id}
                                onClick={() => setSelectedScroll(scroll.id)}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                              >
                                <h3 className="text-lg text-white mb-2">{scroll.title}</h3>
                                <p className="text-purple-200 text-sm mb-3">{scroll.subtitle}</p>
                                <div className="text-purple-300 text-xs">
                                  {scroll.teachings.length} teachings • Practice included
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : null;
                    })()}
                  </div>
                </>
              ) : (
                <>
                  {/* Scroll Detail View */}
                  <div className="mb-6">
                    <button
                      onClick={() => setSelectedScroll(null)}
                      className="flex items-center text-purple-300 hover:text-white transition-colors mb-4"
                    >
                      <span className="mr-2">←</span>
                      Back to Scrolls
                    </button>
                    {(() => {
                      const vault = availableVaults.find(v => v.id === selectedVault);
                      const scroll = vault?.scrolls.find(s => s.id === selectedScroll);
                      return scroll ? (
                        <div className="max-w-4xl mx-auto">
                          <div className="text-center mb-8">
                            <h1 className="text-3xl text-white mb-2">{scroll.title}</h1>
                            <p className="text-purple-200 italic">{scroll.subtitle}</p>
                          </div>

                          {/* Sacred Teachings */}
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
                            <h2 className="text-xl text-purple-100 mb-6 flex items-center">
                              <span className="mr-2">📜</span>
                              Sacred Teachings
                            </h2>
                            <div className="space-y-4">
                              {scroll.teachings.map((teaching, index) => (
                                <div key={index} className="border-l-2 border-purple-400/30 pl-6">
                                  <p className="text-purple-100 italic leading-relaxed">
                                    &ldquo;{teaching}&rdquo;
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Practice Section */}
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
                            <h2 className="text-xl text-purple-100 mb-6 flex items-center">
                              <span className="mr-2">🧘‍♀️</span>
                              {scroll.practice.title}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                              <div className="text-center">
                                <div className="text-purple-300 text-sm mb-1">Duration</div>
                                <div className="text-white">{scroll.practice.duration}</div>
                              </div>
                              <div className="text-center">
                                <div className="text-purple-300 text-sm mb-1">Frequency</div>
                                <div className="text-white">{scroll.practice.frequency}</div>
                              </div>
                              <div className="text-center">
                                <button
                                  onClick={() => setShowScrollGuide(true)}
                                  className="px-4 py-2 bg-purple-500/30 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all text-sm"
                                >
                                  Ask Guide
                                </button>
                              </div>
                            </div>
                            <div className="space-y-3">
                              {scroll.practice.instructions.map((instruction, index) => (
                                <div key={index} className="flex items-start">
                                  <span className="text-purple-400 mr-3 mt-1 text-sm">
                                    {index + 1}.
                                  </span>
                                  <span className="text-purple-200">{instruction}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Scroll Guide */}
                          {showScrollGuide && (
                            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
                              <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl text-purple-100 flex items-center">
                                  <span className="mr-2">🤖</span>
                                  Your Scroll Guide
                                </h2>
                                <button
                                  onClick={() => setShowScrollGuide(false)}
                                  className="text-purple-300 hover:text-white"
                                >
                                  ✕
                                </button>
                              </div>
                              <p className="text-purple-200 mb-4 italic">
                                &ldquo;{scroll.guide.greeting}&rdquo;
                              </p>
                              <p className="text-purple-300 text-sm mb-4">
                                {scroll.guide.encouragement}
                              </p>
                              <div className="mb-4">
                                <div className="text-purple-200 text-sm mb-2">I can help you with:</div>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {scroll.guide.helpWith.map((help, index) => (
                                    <div key={index} className="text-purple-300 text-sm flex items-center">
                                      <span className="mr-2">•</span>
                                      {help}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <Link 
                                href="/garden-guide" 
                                className="inline-block px-4 py-2 bg-purple-500/50 text-purple-100 rounded-lg hover:bg-purple-500/70 transition-all text-sm"
                              >
                                Begin Sacred Dialogue
                              </Link>
                            </div>
                          )}
                        </div>
                      ) : null;
                    })()}
                  </div>
                </>
              )}
            </>
          )}

          {/* Tier-specific vault information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20 mb-8">
            {subscriptionTier === 'guardian' ? (
              <div className="text-center">
                <h3 className="text-purple-100 text-lg mb-4">🌳 Guardian Sacred Library</h3>
                <p className="text-purple-200 mb-4">
                  Access to all wisdom vaults including exclusive Guardian teachings on consciousness mastery, 
                  multidimensional awareness, and advanced spiritual technologies.
                </p>
                <div className="text-purple-300 text-sm">
                  {totalScrollCount} Sacred Scrolls Available across {availableVaults.length} Vaults
                </div>
              </div>
            ) : subscriptionTier === 'gardener' ? (
              <div className="text-center">
                <h3 className="text-purple-100 text-lg mb-4">🌿 Gardener Expanded Wisdom</h3>
                <p className="text-purple-200 mb-4">
                  Foundation vaults plus advanced cultivation including shadow integration, energy mastery, 
                  and consciousness expansion practices.
                </p>
                <div className="text-purple-300 text-sm mb-2">
                  {totalScrollCount} Sacred Scrolls Available across {availableVaults.length} Vaults
                </div>
                <Link href="/garden/services" className="text-purple-400 text-xs underline hover:text-purple-300">
                  Unlock Guardian vaults →
                </Link>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-purple-100 text-lg mb-4">🌱 Seeker Foundation Wisdom</h3>
                <p className="text-purple-200 mb-4">
                  Essential foundation vaults for beginning your awakening journey, focusing on 
                  gentle awakening, self-compassion, and inner wisdom practices.
                </p>
                <div className="text-purple-300 text-sm mb-2">
                  {totalScrollCount} Foundation Scrolls Available across {availableVaults.length} Vaults
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
