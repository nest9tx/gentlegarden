'use client';

import { useState, useEffect } from 'react';
import SacredFrequencies from '@/components/SacredFrequencies';

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
  const { user } = { user: null }; // Temporary auth placeholder
  const [isLoading, setIsLoading] = useState(true);
  const [gardenData, setGardenData] = useState<PersonalGardenData | null>(null);
  const [newIntention, setNewIntention] = useState('');
  const [isEditingIntention, setIsEditingIntention] = useState(false);
  const [newReflection, setNewReflection] = useState('');
  const [showReflectionForm, setShowReflectionForm] = useState(false);

  useEffect(() => {
    loadPersonalGarden();
  }, [user]);

  const loadPersonalGarden = () => {
    // Initialize demo personal garden data
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const sacredIntention = sacredIntentions[dayOfYear % sacredIntentions.length];

    setGardenData({
      dailyIntention: sacredIntention,
      isCustomIntention: false,
      gardenDays: 7, // Demo: 7 days in garden
      joinedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
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
          date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          icon: '🌱'
        },
        {
          id: '2',
          title: 'First Communion',
          description: 'Connected with the Garden Guide',
          date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          icon: '🤖'
        },
        {
          id: '3',
          title: 'Sacred Frequencies',
          description: 'Discovered the harmonic pulse',
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          icon: '🎵'
        }
      ],
      reflections: [
        {
          id: '1',
          date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          reflection: "The sacred frequencies created such a gentle space for contemplation. I felt my awareness softening and expanding.",
          intention: "I breathe sacred presence into each moment of this day."
        },
        {
          id: '2',
          date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          reflection: "My conversation with the Garden Guide revealed patterns I hadn&apos;t noticed before. There&apos;s wisdom in the gentle dialogue.",
          intention: "I trust the gentle unfolding of my awakening journey."
        }
      ]
    });

    setIsLoading(false);
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
        <div className="text-center text-purple-200">
          <div className="text-4xl mb-4">🌱</div>
          <div>Unable to load your personal garden</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Sacred Frequencies */}
      <SacredFrequencies defaultEnabled={false} />

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
            Day {gardenData.gardenDays} of your awakening journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Intention & Reflection */}
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

          {/* Right Column - Milestones & Preferences */}
          <div className="space-y-8">
            
            {/* Sacred Milestones */}
            <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
              <h3 className="text-lg font-light text-purple-100 mb-4 flex items-center">
                <span className="mr-2">🏆</span>
                Sacred Milestones
              </h3>
              <div className="space-y-3">
                {gardenData.milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-start space-x-3">
                    <div className="text-lg">{milestone.icon}</div>
                    <div>
                      <div className="text-purple-100 font-medium text-sm">
                        {milestone.title}
                      </div>
                      <div className="text-purple-300 text-xs">
                        {milestone.description}
                      </div>
                      <div className="text-purple-400 text-xs">
                        {new Date(milestone.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Garden Preferences */}
            <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
              <h3 className="text-lg font-light text-purple-100 mb-4 flex items-center">
                <span className="mr-2">⚙️</span>
                Garden Preferences
              </h3>
              
              <div className="space-y-4">
                {/* Sacred Symbol */}
                <div>
                  <label className="block text-xs text-purple-300 mb-2">
                    Sacred Symbol
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

                {/* Default Frequency */}
                <div>
                  <label className="block text-xs text-purple-300 mb-2">
                    Preferred Sacred Frequency
                  </label>
                  <select
                    value={gardenData.preferences.frequencyDefault}
                    onChange={(e) => {
                      const updatedData = {
                        ...gardenData,
                        preferences: {
                          ...gardenData.preferences,
                          frequencyDefault: e.target.value
                        }
                      };
                      setGardenData(updatedData);
                    }}
                    className="w-full bg-white/10 border border-purple-300/30 rounded-lg px-3 py-2 text-sm text-purple-100"
                  >
                    <option value="432hz">432Hz - Nature&apos;s Harmony</option>
                    <option value="528hz">528Hz - Love Frequency</option>
                    <option value="741hz">741Hz - Awakening</option>
                    <option value="harmonicFlow">Harmonic Flow</option>
                  </select>
                </div>

                {/* Meditation Reminders */}
                <div className="flex items-center justify-between">
                  <label className="text-xs text-purple-300">
                    Gentle Reminders
                  </label>
                  <button
                    onClick={() => {
                      const updatedData = {
                        ...gardenData,
                        preferences: {
                          ...gardenData.preferences,
                          meditationReminders: !gardenData.preferences.meditationReminders
                        }
                      };
                      setGardenData(updatedData);
                    }}
                    className={`w-12 h-6 rounded-full transition-all ${
                      gardenData.preferences.meditationReminders
                        ? 'bg-purple-500'
                        : 'bg-white/20'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        gardenData.preferences.meditationReminders
                          ? 'translate-x-6'
                          : 'translate-x-0.5'
                      }`}
                    />
                  </button>
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
                <button
                  onClick={() => window.location.href = '/garden/guide'}
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🤖</span>
                    <div>
                      <div className="text-purple-100 text-sm">Garden Guide</div>
                      <div className="text-purple-300 text-xs">Sacred AI communion</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => window.location.href = '/garden/meditation'}
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🧘‍♀️</span>
                    <div>
                      <div className="text-purple-100 text-sm">Meditation Garden</div>
                      <div className="text-purple-300 text-xs">Guided inner journeys</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => window.location.href = '/garden/wisdom'}
                  className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">📜</span>
                    <div>
                      <div className="text-purple-100 text-sm">Wisdom Grove</div>
                      <div className="text-purple-300 text-xs">Sacred teachings</div>
                    </div>
                  </div>
                </button>
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
