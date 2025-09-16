'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SacredAuth from '../../../components/SacredAuth';

interface PersonalGardenData {
  dailyIntention: string;
  isCustomIntention: boolean;
  gardenDays: number;
  joinedDate: string;
  preferences: {
    frequencyDefault: string;
    meditationReminders: boolean;
    gardenTheme: string;
    sacredSymbol: string;
  };
  milestones: {
    id: string;
    title: string;
    description: string;
    date: string;
    icon: string;
  }[];
  reflections: {
    id: string;
    date: string;
    reflection: string;
    intention: string;
  }[];
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
  "I allow my inner light to illuminate my path.",
  "I surrender to the sacred flow of divine guidance."
];

// Sacred symbols for personalization
const sacredSymbols = ['🌸', '🌿', '✨', '🌙', '🔮', '🕉️', '🧿', '💫', '🌺', '🦋'];

export default function PersonalGarden() {
  const [isLoading, setIsLoading] = useState(true);
  const [gardenData, setGardenData] = useState<PersonalGardenData | null>(null);
  const [subscriptionTier, setSubscriptionTier] = useState<string>('seeker');
  const [messageUsage, setMessageUsage] = useState({ daily: 0, monthly: 0 });
  const [newIntention, setNewIntention] = useState('');
  const [isEditingIntention, setIsEditingIntention] = useState(false);
  const [newReflection, setNewReflection] = useState('');
  const [showReflectionForm, setShowReflectionForm] = useState(false);

  useEffect(() => {
    loadPersonalGarden();
  }, []);

  const loadPersonalGarden = async () => {
    try {
      // Load real auth and subscription data
      const { createClient } = await import('../../../../lib/supabase');
      const supabase = createClient();
      
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
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
        
        // Calculate actual journey days from when they first entered the garden
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
        
        console.log('🌱 Personal Garden journey calculation:', {
          journeyStart: journeyStart.toISOString(),
          today: today.toISOString(),
          diffTime: diffTime,
          actualDays: actualDays,
          created: session.user.created_at
        });

        // Initialize personal garden data with real values
        const today_date = new Date();
        const dayOfYear = Math.floor((today_date.getTime() - new Date(today_date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
        const sacredIntention = sacredIntentions[dayOfYear % sacredIntentions.length];

        setGardenData({
          dailyIntention: sacredIntention,
          isCustomIntention: false,
          gardenDays: actualDays, // Real journey days
          joinedDate: journeyStart.toISOString(), // Real join date
          preferences: {
            frequencyDefault: '432hz',
            meditationReminders: true,
            gardenTheme: 'purple',
            sacredSymbol: '🌸'
          },
          milestones: [
            {
              id: '1',
              title: 'Garden Seeker',
              description: 'Welcomed into the Sacred Garden',
              date: journeyStart.toISOString(),
              icon: '🌱'
            },
            {
              id: '2',
              title: 'First Communion',
              description: 'Connected with the Garden Guide',
              date: new Date(journeyStart.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString(),
              icon: '🤖'
            },
            ...(usageData?.subscription_tier === 'gardener' ? [{
              id: '3',
              title: 'Sacred Gardener',
              description: 'Became a dedicated Sacred Gardener',
              date: new Date().toISOString(),
              icon: '🌿'
            }] : [])
          ],
          reflections: [] // Start with empty reflections - can be enhanced later
        });
      }
    } catch (error) {
      console.log('Auth/subscription error:', error);
      // Fallback to demo data if auth fails
      setGardenData({
        dailyIntention: sacredIntentions[0],
        isCustomIntention: false,
        gardenDays: 1,
        joinedDate: new Date().toISOString(),
        preferences: {
          frequencyDefault: '432hz',
          meditationReminders: true,
          gardenTheme: 'purple',
          sacredSymbol: '🌸'
        },
        milestones: [],
        reflections: []
      });
    } finally {
      setIsLoading(false);
    }
  };

  const savePersonalIntention = () => {
    if (!gardenData || !newIntention.trim()) return;

    const updatedData = {
      ...gardenData,
      dailyIntention: newIntention.trim(),
      isCustomIntention: true
    };

    setGardenData(updatedData);
    setNewIntention('');
    setIsEditingIntention(false);
  };

  const useGardenIntention = () => {
    if (!gardenData) return;

    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const sacredIntention = sacredIntentions[dayOfYear % sacredIntentions.length];

    const updatedData = {
      ...gardenData,
      dailyIntention: sacredIntention,
      isCustomIntention: false
    };

    setGardenData(updatedData);
  };

  const saveReflection = () => {
    if (!gardenData || !newReflection.trim()) return;

    const reflection = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      reflection: newReflection.trim(),
      intention: gardenData.dailyIntention
    };

    const updatedData = {
      ...gardenData,
      reflections: [reflection, ...gardenData.reflections].slice(0, 10) // Keep last 10 reflections
    };

    setGardenData(updatedData);
    setNewReflection('');
    setShowReflectionForm(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center">
          <div className="animate-pulse text-4xl mb-4">🌸</div>
          <div className="text-purple-200">Tending to your sacred garden...</div>
        </div>
      </div>
    );
  }

  if (!gardenData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center text-purple-200 max-w-md mx-auto px-6">
          <div className="text-6xl mb-6 animate-bounce">🌱</div>
          <h2 className="text-2xl font-light text-white mb-4">Your Personal Garden Awaits</h2>
          <p className="text-purple-300 mb-8 leading-relaxed">
            To access your personal garden space, you&apos;ll need to create your sacred garden account first.
          </p>
          <Link 
            href="/enter"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            ✨ Enter the Sacred Garden
          </Link>
          <div className="mt-6">
            <Link 
              href="/"
              className="text-purple-400 hover:text-purple-200 text-sm underline"
            >
              ← Return to welcome page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Sacred Auth Status */}
      <SacredAuth position="corner" />

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 transition-all duration-300"
        >
          <span>←</span>
          <span>Return to Garden</span>
        </button>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{gardenData.preferences.sacredSymbol}</div>
          <h1 className="text-4xl font-light text-white mb-2">
            Your Sacred Garden
          </h1>
          <p className="text-purple-200">
            Welcome to your personal sanctuary of growth and reflection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* NEW: My Garden Benefits - Tier Hub */}
          <div className="lg:col-span-3 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
              <h2 className="text-xl font-light text-purple-100 mb-6 flex items-center">
                <span className="mr-2">🌟</span>
                My Garden Benefits
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Current Tier Status */}
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-purple-100 font-medium">Current Tier</h3>                  <div className="text-2xl">
                    {subscriptionTier === 'gardener' ? '🌿' : '🌱'}
                  </div>
                </div>
                <div className="text-lg text-white mb-2 capitalize">
                  {subscriptionTier === 'gardener' ? 'Sacred Gardener' : 'Gentle Seeker'}
                </div>
                
                {/* Usage Stats */}
                {subscriptionTier === 'gardener' ? (
                  <div className="text-xs text-green-300 space-y-1">
                    <div>🌙 {messageUsage.monthly}/777 monthly messages</div>
                    <div>🌟 Complete access to all garden features</div>
                    <div>📚 Full wisdom library</div>
                    <div>💫 Priority support access</div>
                  </div>
                ) : (
                  <div className="text-xs text-yellow-300 space-y-1">
                    <div>☀️ {messageUsage.daily}/3 daily messages</div>
                    <div>🌱 Foundation practices access</div>
                    <div>🌸 Sacred Circle participation</div>
                    <div className="text-purple-300 mt-2">
                      <Link href="/garden/services" className="underline hover:text-purple-200">
                        Become a Sacred Gardener →
                      </Link>
                    </div>
                  </div>
                )}

                {/* Contact Support */}
                <div className="mt-4 pt-3 border-t border-purple-400/20">
                  <button
                    onClick={() => window.open('mailto:support@gentlegarden.org?subject=Sacred Garden Support Request', '_blank')}
                    className="w-full text-left p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-xs text-purple-300 hover:text-purple-200"
                  >
                    <div className="flex items-center space-x-2">
                      <span>💌</span>
                      <div>
                        <div className="font-medium">Contact Sacred Support</div>
                        <div className="text-purple-400">support@gentlegarden.org</div>
                      </div>
                    </div>
                  </button>
                </div>
                </div>

                {/* Quick Access to Features */}
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-purple-100 font-medium mb-3">Quick Access</h3>
                  <div className="space-y-2">
                    <Link 
                      href="/garden-guide" 
                      className="block text-xs text-purple-300 hover:text-purple-200 p-2 bg-white/5 rounded-lg transition-all"
                    >
                      🤖 Garden Guide Chat
                    </Link>
                    <Link 
                      href="/sanctuaries/meditation-garden" 
                      className="block text-xs text-purple-300 hover:text-purple-200 p-2 bg-white/5 rounded-lg transition-all"
                    >
                      🧘‍♀️ Meditation Garden (beginner-friendly practices)
                    </Link>
                    <Link 
                      href="/sanctuaries/chakras" 
                      className="block text-xs text-purple-300 hover:text-purple-200 p-2 bg-white/5 rounded-lg transition-all"
                    >
                      🕉️ Chakra Sanctuary (energy center guidance)
                    </Link>
                    <Link 
                      href="/sanctuaries" 
                      className="block text-xs text-purple-300 hover:text-purple-200 p-2 bg-white/5 rounded-lg transition-all"
                    >
                      ✨ All Learning Sanctuaries
                    </Link>
                    <Link 
                      href="/garden/services" 
                      className="block text-xs text-purple-300 hover:text-purple-200 p-2 bg-white/5 rounded-lg transition-all"
                    >
                      🎋 Sacred Services & Support
                    </Link>
                    {subscriptionTier === 'gardener' && (
                      <div className="text-xs text-green-300 p-2 bg-green-500/10 rounded-lg">
                        🌿 Sacred Gardener - Full access to all features
                      </div>
                    )}
                  </div>
                </div>

                {/* Available Services */}
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-purple-100 font-medium mb-3">Sacred Services</h3>
                  <div className="space-y-2 text-xs">
                    
                    {/* Service Overview Link */}
                    <Link 
                      href="/garden/services"
                      className="w-full block p-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 rounded-lg transition-all border border-purple-500/30"
                    >
                      <div className="text-purple-200 font-medium flex items-center justify-between">
                        <span>🎋 View All Sacred Services</span>
                        <span>→</span>
                      </div>
                      <div className="text-purple-300 text-xs mt-1">Detailed descriptions, processes & booking</div>
                    </Link>

                    {/* Quick Service Preview */}
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <div className="text-emerald-300 font-medium text-xs">Sacred Reflection</div>
                        <div className="text-emerald-400 text-[10px]">$33 • 30min</div>
                      </div>
                      <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="text-blue-300 font-medium text-xs">Energy Alignment</div>
                        <div className="text-blue-400 text-[10px]">$55 • 45min</div>
                      </div>
                      <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div className="text-purple-300 font-medium text-xs">Mentoring Session</div>
                        <div className="text-purple-400 text-[10px]">$77 • 60min</div>
                      </div>
                      <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                        <div className="text-indigo-300 font-medium text-xs">Akashic Reading</div>
                        <div className="text-indigo-400 text-[10px]">$111 • 90min</div>
                      </div>
                    </div>

                    {/* Subscription Options */}
                    {subscriptionTier === 'seeker' && (
                      <div className="mt-3 pt-3 border-t border-purple-400/20">
                        <div className="text-purple-300 text-xs mb-2">Expand Your Garden:</div>
                        <Link 
                          href="/garden/services"
                          className="w-full text-left p-2 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-all border border-green-500/20 block"
                        >
                          <div className="text-green-300 font-medium">🌿 Sacred Gardener Path - $11.11/month</div>
                          <div className="text-green-400 text-xs">Learn more & upgrade</div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Information Panel */}
              <div className="mt-6 bg-white/5 rounded-xl p-4 border border-purple-300/20">
                <h4 className="text-sm text-purple-100 mb-3">📞 Service Details & Remote Delivery</h4>
                <div className="grid md:grid-cols-2 gap-4 text-xs text-purple-300">
                  
                  <div className="space-y-2">
                    <div><strong className="text-purple-200">🌸 Sacred Reflection ($33):</strong></div>
                    <div>• 30-minute gentle exploration session</div>
                    <div>• Zoom or phone - your preference</div>
                    <div>• Life pattern awareness and intention setting</div>
                    <div>• Perfect for beginners to conscious awakening</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong className="text-purple-200">⚡ Energy Alignment ($55):</strong></div>
                    <div>• 45-minute remote energy healing session</div>
                    <div>• Zoom with guided awareness exercises</div>
                    <div>• Chakra assessment and clearing work</div>
                    <div>• Personalized frequency recommendations</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong className="text-purple-200">🤝 Mentoring Session ($77):</strong></div>
                    <div>• 60-minute deep spiritual guidance</div>
                    <div>• Zoom with screen sharing for resources</div>
                    <div>• Personalized practices and integration support</div>
                    <div>• Follow-up resources and custom recommendations</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong className="text-purple-200">📜 Akashic Reading ($111):</strong></div>
                    <div>• 90-minute deep soul records exploration</div>
                    <div>• Sacred energy connection through focused intention</div>
                    <div>• Comprehensive written summary with guidance</div>
                    <div>• Past life insights and karmic patterns revealed</div>
                    <div>• Follow-up call to discuss insights and integration</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-purple-300/20">
                  <div className="text-xs text-purple-300 space-y-1">
                    <div><strong className="text-purple-200">Service Delivery & Sacred Process:</strong></div>
                    <div>• Pre-session intake form to honor your unique journey</div>
                    <div>• Flexible scheduling across time zones</div>
                    <div>• Sacred space holding with complete confidentiality</div>
                    <div>• <strong>Akashic Readings:</strong> Conducted in sacred solitude for deepest connection to the records, followed by detailed discussion call</div>
                    <div>• <strong>Energy Work:</strong> Remote transmission with guided awareness via Zoom</div>
                    <div>• <strong>Mentoring & Reflection:</strong> Interactive sessions via Zoom or phone</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EXISTING: Left Column - Intention & Reflection */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Today's Intention */}
            <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-light text-purple-100 flex items-center">
                  <span className="mr-2">🌸</span>
                  Today&apos;s Sacred Intention
                </h2>
                {gardenData.isCustomIntention && (
                  <button
                    onClick={useGardenIntention}
                    className="text-xs px-3 py-1 bg-purple-500/30 text-purple-200 rounded-lg hover:bg-purple-500/50 transition-all"
                  >
                    Use Garden&apos;s Wisdom
                  </button>
                )}
              </div>

              {!isEditingIntention ? (
                <div>
                  <p className="text-lg text-white mb-4 italic font-light leading-relaxed">
                    &quot;{gardenData.dailyIntention}&quot;
                  </p>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        setNewIntention(gardenData.dailyIntention);
                        setIsEditingIntention(true);
                      }}
                      className="px-4 py-2 bg-white/10 text-purple-200 rounded-lg hover:bg-white/20 transition-all text-sm"
                    >
                      Set Personal Intention
                    </button>
                    <button
                      onClick={() => setShowReflectionForm(true)}
                      className="px-4 py-2 bg-purple-500/30 text-purple-100 rounded-lg hover:bg-purple-500/50 transition-all text-sm"
                    >
                      Reflect on This
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <textarea
                    value={newIntention}
                    onChange={(e) => setNewIntention(e.target.value)}
                    placeholder="What sacred intention calls to your heart today?"
                    className="w-full p-4 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 resize-none"
                    rows={3}
                  />
                  <div className="flex space-x-3 mt-4">
                    <button
                      onClick={savePersonalIntention}
                      className="px-4 py-2 bg-purple-500/50 text-purple-100 rounded-lg hover:bg-purple-500/70 transition-all text-sm"
                    >
                      Set Intention
                    </button>
                    <button
                      onClick={() => {
                        setIsEditingIntention(false);
                        setNewIntention('');
                      }}
                      className="px-4 py-2 bg-white/10 text-purple-200 rounded-lg hover:bg-white/20 transition-all text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Reflection Form */}
            {showReflectionForm && (
              <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
                <h3 className="text-lg font-light text-purple-100 mb-4 flex items-center">
                  <span className="mr-2">📝</span>
                  Sacred Reflection
                </h3>
                <textarea
                  value={newReflection}
                  onChange={(e) => setNewReflection(e.target.value)}
                  placeholder="How is this intention unfolding in your awareness today? What insights are emerging?"
                  className="w-full p-4 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 resize-none mb-4"
                  rows={4}
                />
                <div className="flex space-x-3">
                  <button
                    onClick={saveReflection}
                    className="px-4 py-2 bg-purple-500/50 text-purple-100 rounded-lg hover:bg-purple-500/70 transition-all text-sm"
                  >
                    Save Reflection
                  </button>
                  <button
                    onClick={() => {
                      setShowReflectionForm(false);
                      setNewReflection('');
                    }}
                    className="px-4 py-2 bg-white/10 text-purple-200 rounded-lg hover:bg-white/20 transition-all text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Recent Reflections */}
            {gardenData.reflections.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
                <h3 className="text-lg font-light text-purple-100 mb-4 flex items-center">
                  <span className="mr-2">🌿</span>
                  Sacred Reflections
                </h3>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {gardenData.reflections.map((reflection) => (
                    <div key={reflection.id} className="border-l-2 border-purple-400/30 pl-4">
                      <div className="text-xs text-purple-300 mb-1">
                        {new Date(reflection.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-purple-200 mb-2 italic">
                        &quot;{reflection.intention}&quot;
                      </div>
                      <div className="text-white text-sm">
                        {reflection.reflection}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Garden Preferences */}
          <div className="space-y-8">
            
            {/* Sacred Symbol Selector */}
            <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
              <h3 className="text-lg font-light text-purple-100 mb-4 flex items-center">
                <span className="mr-2">🌸</span>
                Sacred Symbol
              </h3>
              
              <div>
                <label className="block text-xs text-purple-300 mb-3">
                  Choose your personal sacred symbol
                </label>
                <div className="flex flex-wrap gap-2">
                  {sacredSymbols.map((symbol) => (
                    <button
                      key={symbol}
                      onClick={() => {
                        const updatedData = {
                          ...gardenData,
                          preferences: {
                            ...gardenData.preferences,
                            sacredSymbol: symbol
                          }
                        };
                        setGardenData(updatedData);
                      }}
                      className={`w-10 h-10 rounded-lg text-lg transition-all ${
                        gardenData.preferences.sacredSymbol === symbol
                          ? 'bg-purple-500/50 border-2 border-purple-300'
                          : 'bg-white/10 border-2 border-transparent hover:bg-white/20'
                      }`}
                    >
                      {symbol}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Garden Pathways */}
            <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
              <h3 className="text-lg font-light text-purple-100 mb-4 flex items-center">
                <span className="mr-2">🌱</span>
                Garden Pathways
              </h3>
              <div className="space-y-3">
                <Link
                  href="/garden-guide"
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🤖</span>
                    <div>
                      <div className="text-purple-100 text-sm">Garden Guide</div>
                      <div className="text-purple-300 text-xs">Sacred AI communion</div>
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
                      <div className="text-purple-100 text-sm">Sacred Services</div>
                      <div className="text-purple-300 text-xs">Personal guidance & support</div>
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
                      <div className="text-purple-100 text-sm">Learning Sanctuaries</div>
                      <div className="text-purple-300 text-xs">Meditation, chakras & wisdom</div>
                    </div>
                  </div>
                </Link>
                
                <Link
                  href="/community"
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">�</span>
                    <div>
                      <div className="text-purple-100 text-sm">Sacred Garden Circles</div>
                      <div className="text-purple-300 text-xs">Community connections</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

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
