'use client';

import { useState } from 'react';
import SacredFrequencies from '@/components/SacredFrequencies';
import SacredNavigation from '@/components/SacredNavigation';

interface SacredSharing {
  id: string;
  date: string;
  soul: string; // Anonymous soul identifier
  reflection: string;
  hearts: number;
  prayers: number;
}

interface WeeklyIntention {
  week: string;
  intention: string;
  contributors: number;
  energy: number; // 0-100
}

export default function MoonDaughters() {
  const [currentTab, setCurrentTab] = useState<'reflection' | 'sharing' | 'intention'>('reflection');
  const [personalReflection, setPersonalReflection] = useState('');
  const [sacredSharing, setSacredSharing] = useState('');
  const [showShareForm, setShowShareForm] = useState(false);
  const [hasReflectedToday, setHasReflectedToday] = useState(false);
  
  // Gentle interaction state tracking
  const [heartedSharings, setHeartedSharings] = useState<Set<string>>(new Set());
  const [prayedSharings, setPrayedSharings] = useState<Set<string>>(new Set());

  // Gentle interaction handlers
  const handleHeart = (sharingId: string) => {
    if (!heartedSharings.has(sharingId)) {
      setHeartedSharings(prev => new Set([...prev, sharingId]));
    }
  };

  const handlePrayer = (sharingId: string) => {
    if (!prayedSharings.has(sharingId)) {
      setPrayedSharings(prev => new Set([...prev, sharingId]));
    }
  };

  // Mock data for demonstration
  const todaysPrompt = "What is your inner wisdom calling you to release or embrace?";
  const circleEnergy = 91; // 0-100 collective energy level
  const participantCount = 211;

  const weeklyIntention: WeeklyIntention = {
    week: "July 18-24, 2025",
    intention: "May we honor the sacred cycles within us, trusting the wisdom of our intuitive knowing and divine feminine essence.",
    contributors: 134,
    energy: 89
  };

  const recentSharings: SacredSharing[] = [
    {
      id: '1',
      date: '30 minutes ago',
      soul: 'Moonlit Rose',
      reflection: 'The new moon is calling me to plant seeds of self-compassion. I feel the gentle pull to be softer with myself.',
      hearts: 16,
      prayers: 8
    },
    {
      id: '2',
      date: '2 hours ago',
      soul: 'Sacred Waters',
      reflection: 'My menstrual cycle taught me about release today. There is such wisdom in the body&apos;s natural rhythms.',
      hearts: 23,
      prayers: 11
    },
    {
      id: '3',
      date: '4 hours ago',
      soul: 'Intuitive Heart',
      reflection: 'I trusted my inner knowing today instead of overthinking. The feminine wisdom within me is becoming stronger.',
      hearts: 19,
      prayers: 6
    },
    {
      id: '4',
      date: '6 hours ago',
      soul: 'Luna&apos;s Daughter',
      reflection: 'Sitting under the moon last night, I felt held by generations of women who came before me. Such lineage love.',
      hearts: 28,
      prayers: 14
    },
    {
      id: '5',
      date: '9 hours ago',
      soul: 'Womb Wisdom',
      reflection: 'The goddess energy is stirring in me today. I can feel the creative force wanting to birth something beautiful.',
      hearts: 21,
      prayers: 9
    }
  ];

  const handlePersonalReflection = () => {
    if (personalReflection.trim()) {
      setHasReflectedToday(true);
      setPersonalReflection('');
      // In real app: save to database
    }
  };

  const handleSacredShare = () => {
    if (sacredSharing.trim()) {
      // In real app: add to database
      setSacredSharing('');
      setShowShareForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-violet-900 relative overflow-hidden">
      {/* Sacred Frequencies */}
      <SacredFrequencies defaultEnabled={false} />

      {/* Moon Elements Background */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Navigation */}
      <SacredNavigation currentPage="Moon Daughters" showBackToGarden={true} showSanctuaries={true} />

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Circle Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 animate-bounce">🌙</div>
          <h1 className="text-4xl font-light text-white mb-2">
            Moon Daughters Circle
          </h1>
          <p className="text-purple-200 mb-4">
            Divine Feminine & Cycles
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-6"></div>
          
          {/* Circle Vitality */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl text-purple-300 font-light">{participantCount}</div>
              <div className="text-xs text-purple-400">Divine Daughters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-purple-300 font-light">{circleEnergy}%</div>
              <div className="text-xs text-purple-400">Circle Energy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-purple-300 font-light">🌸</div>
              <div className="text-xs text-purple-400">Intuition & Cycles</div>
            </div>
          </div>
        </div>

        {/* Sacred Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-purple-300/30">
            <button
              onClick={() => setCurrentTab('reflection')}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                currentTab === 'reflection'
                  ? 'bg-purple-500/50 text-white'
                  : 'text-purple-200 hover:text-white hover:bg-white/10'
              }`}
            >
              🌙 Inner Wisdom
            </button>
            <button
              onClick={() => setCurrentTab('sharing')}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                currentTab === 'sharing'
                  ? 'bg-purple-500/50 text-white'
                  : 'text-purple-200 hover:text-white hover:bg-white/10'
              }`}
            >
              🌸 Sacred Sisterhood
            </button>
            <button
              onClick={() => setCurrentTab('intention')}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                currentTab === 'intention'
                  ? 'bg-purple-500/50 text-white'
                  : 'text-purple-200 hover:text-white hover:bg-white/10'
              }`}
            >
              🌺 Lunar Intention
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            
            {/* Inner Wisdom Tab */}
            {currentTab === 'reflection' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
                <h2 className="text-xl font-light text-purple-100 mb-4 flex items-center">
                  <span className="mr-2">🌙</span>
                  Inner Wisdom Reflection
                </h2>
                
                <div className="bg-purple-500/20 rounded-xl p-4 mb-6 border border-purple-400/30">
                  <p className="text-purple-100 italic text-lg leading-relaxed">
                    &quot;{todaysPrompt}&quot;
                  </p>
                </div>

                {!hasReflectedToday ? (
                  <div>
                    <textarea
                      value={personalReflection}
                      onChange={(e) => setPersonalReflection(e.target.value)}
                      placeholder="What is your feminine wisdom speaking to you today? What cycles, intuitions, or sacred knowings are emerging?"
                      className="w-full p-4 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 resize-none mb-4"
                      rows={4}
                    />
                    <button
                      onClick={handlePersonalReflection}
                      disabled={!personalReflection.trim()}
                      className="px-6 py-2 bg-purple-500/50 text-purple-100 rounded-lg hover:bg-purple-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Honor Inner Wisdom
                    </button>
                  </div>
                ) : (
                  <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-400/30">
                    <div className="flex items-center space-x-2 text-purple-300">
                      <span>🙏</span>
                      <span>Your wisdom has been received with reverence. The divine feminine honors your voice.</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Sacred Sisterhood Tab */}
            {currentTab === 'sharing' && (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-light text-purple-100 flex items-center">
                      <span className="mr-2">🌸</span>
                      Sacred Sisterhood Sharing
                    </h2>
                    <button
                      onClick={() => setShowShareForm(!showShareForm)}
                      className="px-4 py-2 bg-purple-500/30 text-purple-200 rounded-lg hover:bg-purple-500/50 transition-all text-sm"
                    >
                      {showShareForm ? 'Close' : 'Share Your Truth'}
                    </button>
                  </div>

                  {showShareForm && (
                    <div className="mb-6 bg-purple-500/10 rounded-xl p-4 border border-purple-400/20">
                      <textarea
                        value={sacredSharing}
                        onChange={(e) => setSacredSharing(e.target.value)}
                        placeholder="Share your feminine wisdom, moon musings, cycle awareness, or divine feminine awakening..."
                        className="w-full p-4 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 resize-none mb-4"
                        rows={3}
                      />
                      <div className="flex space-x-3">
                        <button
                          onClick={handleSacredShare}
                          disabled={!sacredSharing.trim()}
                          className="px-4 py-2 bg-purple-500/50 text-purple-100 rounded-lg hover:bg-purple-500/70 transition-all text-sm disabled:opacity-50"
                        >
                          Share with Sisters
                        </button>
                        <button
                          onClick={() => setShowShareForm(false)}
                          className="px-4 py-2 bg-white/10 text-purple-200 rounded-lg hover:bg-white/20 transition-all text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Recent Sharings */}
                <div className="space-y-4">
                  {recentSharings.map((sharing) => (
                    <div key={sharing.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-300/20">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-purple-400 font-medium text-sm">{sharing.soul}</span>
                          <span className="text-purple-500 text-xs">•</span>
                          <span className="text-purple-500 text-xs">{sharing.date}</span>
                        </div>
                      </div>
                      <p className="text-purple-100 mb-3 leading-relaxed">{sharing.reflection}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <button 
                          className={`flex items-center space-x-1 transition-colors ${
                            heartedSharings.has(sharing.id) 
                              ? 'text-purple-300 opacity-75 cursor-default' 
                              : 'text-purple-400 hover:text-purple-300'
                          }`}
                          onClick={() => handleHeart(sharing.id)}
                          disabled={heartedSharings.has(sharing.id)}
                          title={heartedSharings.has(sharing.id) ? 'Heart already sent with love' : 'Send gentle heart'}
                        >
                          <span>💖</span>
                          <span>{sharing.hearts + (heartedSharings.has(sharing.id) ? 1 : 0)}</span>
                        </button>
                        <button 
                          className={`flex items-center space-x-1 transition-colors ${
                            prayedSharings.has(sharing.id) 
                              ? 'text-purple-300 opacity-75 cursor-default' 
                              : 'text-purple-400 hover:text-purple-300'
                          }`}
                          onClick={() => handlePrayer(sharing.id)}
                          disabled={prayedSharings.has(sharing.id)}
                          title={prayedSharings.has(sharing.id) ? 'Prayer already offered with grace' : 'Offer gentle prayer'}
                        >
                          <span>🙏</span>
                          <span>{sharing.prayers + (prayedSharings.has(sharing.id) ? 1 : 0)}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lunar Intention Tab */}
            {currentTab === 'intention' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
                <h2 className="text-xl font-light text-purple-100 mb-6 flex items-center">
                  <span className="mr-2">🌺</span>
                  Circle&apos;s Lunar Intention
                </h2>
                
                <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30 mb-6">
                  <div className="text-sm text-purple-300 mb-2">{weeklyIntention.week}</div>
                  <p className="text-purple-100 text-lg italic leading-relaxed mb-4">
                    &quot;{weeklyIntention.intention}&quot;
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-300">{weeklyIntention.contributors} daughters contributing</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-300">Collective Energy:</span>
                      <div className="w-20 h-2 bg-purple-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-300 transition-all duration-1000"
                          style={{ width: `${weeklyIntention.energy}%` }}
                        ></div>
                      </div>
                      <span className="text-purple-300">{weeklyIntention.energy}%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg text-purple-200">Divine Feminine Practices This Week:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span>🌙</span>
                        <span className="text-purple-200 font-medium">Moon Gazing</span>
                      </div>
                      <p className="text-purple-300 text-sm">Spend time each night in communion with the moon, receiving her wisdom.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span>🌸</span>
                        <span className="text-purple-200 font-medium">Womb Wisdom</span>
                      </div>
                      <p className="text-purple-300 text-sm">Place hands on your womb space and listen to the deep feminine knowing within.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span>✨</span>
                        <span className="text-purple-200 font-medium">Intuitive Journaling</span>
                      </div>
                      <p className="text-purple-300 text-sm">Let your hand move across the page without thinking, allowing inner wisdom to flow.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span>🌺</span>
                        <span className="text-purple-200 font-medium">Goddess Meditation</span>
                      </div>
                      <p className="text-purple-300 text-sm">Connect with the divine feminine within, honoring your sacred feminine essence.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Circle Guidelines */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-300/30">
              <h3 className="text-purple-200 font-medium mb-3 flex items-center">
                <span className="mr-2">🌙</span>
                Moon Daughter Principles
              </h3>
              <div className="space-y-2 text-sm text-purple-300">
                <div>🌸 Honor all expressions of femininity</div>
                <div>🌙 Trust intuitive wisdom and cycles</div>
                <div>✨ Embrace sacred sisterhood</div>
                <div>🌺 Share feminine insights gently</div>
                <div>💜 Hold space for healing and growth</div>
                <div>🌟 Celebrate divine feminine power</div>
              </div>
            </div>

            {/* Moon Phase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-300/30">
              <h3 className="text-purple-200 font-medium mb-3">🌙 Current Moon Wisdom</h3>
              <div className="text-center mb-3">
                <div className="text-3xl mb-2">🌗</div>
                <div className="text-purple-300 text-sm">Waning Gibbous</div>
              </div>
              <div className="text-purple-300 text-sm">
                <p className="leading-relaxed">
                  Time for gentle release and gratitude. What are you ready to let go of with love? 
                  The moon invites you to honor what has served you and release what no longer aligns.
                </p>
              </div>
            </div>

            {/* Circle Energy */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-300/30">
              <h3 className="text-purple-200 font-medium mb-3">🌟 Divine Feminine Energy</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-300 text-sm">Intuition</span>
                  <div className="w-16 h-2 bg-purple-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-400 w-5/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-300 text-sm">Compassion</span>
                  <div className="w-16 h-2 bg-purple-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-400 w-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-300 text-sm">Creation</span>
                  <div className="w-16 h-2 bg-purple-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-400 w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goddess Wisdom Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-300/30">
              <div className="text-purple-300 text-sm italic leading-relaxed">
                &quot;The divine feminine in you is not weak, not broken, not incomplete. She is fierce, whole, and sacred. She is the creator, the nurturer, the wise woman.&quot;
              </div>
              <div className="text-purple-400 text-xs mt-2">- Moon Daughter Wisdom</div>
            </div>
          </div>
        </div>

        {/* Sacred Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20">
            <h3 className="text-purple-200 text-lg mb-4">🌙 Moon Daughter Practices</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="text-purple-300 font-medium">🌸 Daily Intuition</div>
                <div className="text-purple-400">Check in with your inner wisdom each morning before making decisions</div>
              </div>
              <div className="space-y-2">
                <div className="text-purple-300 font-medium">🌙 Lunar Awareness</div>
                <div className="text-purple-400">Track the moon phases and notice how they affect your energy and emotions</div>
              </div>
              <div className="space-y-2">
                <div className="text-purple-300 font-medium">💜 Sisterhood Support</div>
                <div className="text-purple-400">Offer gentle presence and witnessing to fellow daughters on their journeys</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌙</div>
      <div className="absolute top-40 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>✨</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🌸</div>
      <div className="absolute top-48 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🌺</div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
