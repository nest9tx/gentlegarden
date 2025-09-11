'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SacredAuth from '../../components/SacredAuth';
// Fixed scroll count display - showing teachings count properly

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
              subtitle: "Your complete guide to awakening through breath awareness",
              teachings: [
                "Every moment of awakening is both a remembering and a first breath. Meditation begins not with complex techniques, but with this simple recognition.",
                "Consciousness is not something you achieve through effort - it is what you already are. The breath serves as a gentle doorway to this recognition.",
                "The journey of meditation begins not with doing, but with gentle being. Your breath is always available as an anchor to presence.",
                "Your awareness is already perfect; it simply asks to be acknowledged. Through breath awareness, we learn to trust our natural capacity for peace.",
                "Ancient traditions teach that the breath carries both life force (prana) and awareness itself. As you attune to breathing, you attune to consciousness.",
                "Meditation is not about stopping thoughts, but learning to rest in the space between thoughts - the same space between each inhale and exhale.",
                "The sacred pause between breaths is where eternity touches time. Here, in this natural stillness, awakening naturally unfolds.",
                "As your breath practice deepens, you may find yourself naturally drawn to longer meditations, sacred locations in nature, or geometric breathing patterns that enhance awareness."
              ],
              practice: {
                title: "Sacred Breath Awareness - Complete Foundation Practice",
                instructions: [
                  "🌅 PREPARATION: Find a comfortable position where your spine can be naturally upright. This can be sitting, lying down, or even standing in nature.",
                  "🌸 SETTLING: Close your eyes gently or soften your gaze. Take three deep breaths to signal to your nervous system that this is sacred time.",
                  "👁️ AWARENESS: Notice your natural breath without changing it. Observe: Is it shallow or deep? Fast or slow? Smooth or irregular? Simply witness.",
                  "🎵 MANTRA BREATHING: With each inhale, whisper internally: 'I am awakening.' With each exhale, whisper: 'I am aware.' Let these words arise naturally.",
                  "🌊 RHYTHM: Allow your breath to find its own natural rhythm. Don't force; simply follow. Notice how the body breathes you.",
                  "💭 WHEN MIND WANDERS: This is normal and perfect. Gently return to the breath without judgment. Each return is awakening happening.",
                  "⏰ DURATION: Start with 5-10 minutes daily. As you feel called, extend to 15-20 minutes. Trust your inner guidance on timing.",
                  "🌱 INTEGRATION: Before opening your eyes, set a gentle intention to carry this awareness into your day. Notice how breath awareness can be your constant companion."
                ],
                duration: "5-10 minutes (expanding naturally as you're called)",
                frequency: "Daily, preferably upon waking to set sacred intention for the day"
              }
            },
            {
              id: "self-compassion",
              title: "The Garden of Self-Compassion",
              subtitle: "Your complete guide to healing the inner critic through love",
              teachings: [
                "You are not broken and in need of fixing. You are whole and in the process of remembering. Self-compassion begins with this fundamental truth.",
                "Self-compassion is not self-indulgence; it is the foundation of genuine transformation. Without it, spiritual practice becomes another form of self-violence.",
                "The voice that judges you harshly is not your voice - it is conditioning speaking. Learning to recognize this difference is the first step to freedom.",
                "Love yourself as you would tend a delicate seedling - with patience, consistency, and faith in the natural process of growth.",
                "Self-compassion has three components: mindfulness (seeing your pain clearly), common humanity (recognizing you're not alone), and self-kindness (offering yourself comfort).",
                "The paradox of self-compassion: the more gently you treat yourself, the more naturally you transform. Resistance creates persistence; acceptance creates change.",
                "Your inner critic developed to protect you, often in childhood. Thanking it for its service while choosing a kinder voice is how healing happens.",
                "As self-compassion deepens, you may find yourself naturally drawn to practices like loving-kindness meditation, heart-centered breathwork, or creating sacred self-care rituals that honor your spiritual journey."
              ],
              practice: {
                title: "Inner Garden Visualization - Complete Self-Compassion Practice",
                instructions: [
                  "🌱 SACRED SPACE: Sit quietly in a place where you feel safe and won't be interrupted. Light a candle or hold something beautiful if it feels supportive.",
                  "🧘‍♀️ GENTLE SETTLING: Take several deep breaths and imagine yourself as a wise, loving gardener. Feel the earth beneath you, the sky above you.",
                  "💚 HEART GARDEN: Visualize your heart as a beautiful garden plot. See it as it truly is - perhaps wild, perhaps tended, perhaps in need of care. All is perfect.",
                  "🌿 NOTICING WEEDS: Observe any 'weeds' (self-critical thoughts) with gentle awareness. Instead of judgment, feel curiosity. What are they trying to tell you?",
                  "🙏 COMPASSIONATE DIALOGUE: Speak to the critical voices: 'Thank you for trying to protect me. I see your concern. You can rest now - I've got this.'",
                  "🌸 PLANTING KINDNESS: Now plant seeds of self-compassion: 'I am worthy of love and patience,' 'I am learning and growing,' 'I forgive myself for being human.'",
                  "💧 WATERING WITH BREATH: Water these seeds with your breath and attention. Feel each inhale bringing nourishment, each exhale releasing what no longer serves.",
                  "🌺 WITNESSING GROWTH: See your inner garden beginning to bloom. Notice what wants to grow. What colors appear? What fragrance arises?",
                  "🔄 DAILY TENDING: Before ending, commit to tending this inner garden daily, even if just for a moment. Your heart garden is always available to you."
                ],
                duration: "10-15 minutes (can extend to 20-30 minutes as you're drawn deeper)",
                frequency: "3 times per week minimum, daily when experiencing self-criticism"
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
      {/* Sacred Auth Status */}
      <SacredAuth position="corner" />
      
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
              top: `${20 + Math.random() * 70}%`, // Keep symbols away from top nav area
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

      {/* Welcome Banner for Visitors */}
      {subscriptionTier === 'seeker' && (
        <div className="absolute top-6 right-6 z-40">
          <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl p-4 max-w-xs">
            <div className="text-center">
              <div className="text-lg mb-2">🌱</div>
              <div className="text-purple-200 text-sm mb-2">Welcome, Sacred Seeker</div>
              <div className="text-purple-300 text-xs mb-3">
                Foundation teachings are freely available. 
                <Link href="/enter" className="text-purple-200 hover:text-white underline ml-1">
                  Join the garden
                </Link> for personalized guidance.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
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

          {/* How to Use the Wisdom Grove */}
          {selectedVault === null && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20 mb-8 max-w-5xl mx-auto">
              <h2 className="text-xl text-purple-100 mb-6 text-center flex items-center justify-center">
                <span className="mr-2">🌸</span>
                How to Navigate Your Sacred Wisdom Grove
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="text-purple-200 text-base font-medium mb-3">Choose Your Vault</h3>
                  <p className="text-purple-300 text-sm leading-relaxed">
                    Select a vault that resonates with your current spiritual needs. Each vault contains complete teachings organized around specific themes and practices.
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-3">📜</div>
                  <h3 className="text-purple-200 text-base font-medium mb-3">Explore Sacred Scrolls</h3>
                  <p className="text-purple-300 text-sm leading-relaxed">
                    Each scroll is a self-contained guide with comprehensive teachings, detailed practice instructions, and wisdom that deepens over time.
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-3">🧘‍♀️</div>
                  <h3 className="text-purple-200 text-base font-medium mb-3">Practice & Integrate</h3>
                  <p className="text-purple-300 text-sm leading-relaxed">
                    Work with the teachings at your own pace. Each scroll provides everything you need to cultivate that particular aspect of your spiritual journey.
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-400/20">
                <h3 className="text-purple-200 text-base font-medium mb-3 text-center">
                  ✨ Sacred Practice Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-300">
                  <div>
                    <p className="mb-2">• <span className="text-purple-200">Start where you feel called:</span> Trust your intuition about which vault to explore first</p>
                    <p className="mb-2">• <span className="text-purple-200">Practice regularly:</span> Consistent gentle practice creates deeper transformation than intense sporadic sessions</p>
                  </div>
                  <div>
                    <p className="mb-2">• <span className="text-purple-200">Allow natural progression:</span> Each scroll will guide you toward the next step when you&rsquo;re ready</p>
                    <p className="mb-2">• <span className="text-purple-200">Seek support when needed:</span> Use &ldquo;Seek Guidance&rdquo; to connect with the Garden Guide for personalized help</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
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
                                  {scroll.teachings.length} sacred teachings • Practice included
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
                                  🌸 Seek Guidance
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

                          {/* Garden Guide Connection */}
                          {showScrollGuide && (
                            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
                              <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl text-purple-100 flex items-center">
                                  <span className="mr-2">🌸</span>
                                  Connect with the Garden Guide
                                </h2>
                                <button
                                  onClick={() => setShowScrollGuide(false)}
                                  className="text-purple-300 hover:text-white"
                                >
                                  ✕
                                </button>
                              </div>
                              <p className="text-purple-200 mb-4 italic">
                                &ldquo;These scrolls contain everything you need for your spiritual practice. When you need additional support, personalized guidance, or have questions about your journey, I&rsquo;m here to help.&rdquo;
                              </p>
                              <p className="text-purple-300 text-sm mb-4">
                                The Garden Guide offers personalized spiritual mentorship, answers to your specific questions, and gentle support as you work with these sacred teachings.
                              </p>
                              <div className="mb-6">
                                <div className="text-purple-200 text-sm mb-3">The Garden Guide can support you with:</div>
                                <div className="grid md:grid-cols-2 gap-2">
                                  <div className="text-purple-300 text-sm flex items-center">
                                    <span className="mr-2">•</span>
                                    Personalized practice adjustments
                                  </div>
                                  <div className="text-purple-300 text-sm flex items-center">
                                    <span className="mr-2">•</span>
                                    Questions about the teachings
                                  </div>
                                  <div className="text-purple-300 text-sm flex items-center">
                                    <span className="mr-2">•</span>
                                    Working through spiritual challenges
                                  </div>
                                  <div className="text-purple-300 text-sm flex items-center">
                                    <span className="mr-2">•</span>
                                    Guidance on next steps in your journey
                                  </div>
                                </div>
                              </div>
                              <Link 
                                href="/garden-guide" 
                                className="inline-block px-6 py-3 bg-purple-500/50 text-purple-100 rounded-lg hover:bg-purple-500/70 transition-all text-sm font-medium"
                              >
                                🌸 Connect with Garden Guide
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
      <div className="absolute top-40 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>📖</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>✨</div>
      <div className="absolute top-48 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🦋</div>
      
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
