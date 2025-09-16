'use client';

import { useState } from 'react';
import Link from 'next/link';
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

export default function EarthKeepers() {
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
  const todaysPrompt = "How did nature speak to your soul today?";
  const circleEnergy = 94; // 0-100 collective energy level
  const participantCount = 142;

  const weeklyIntention: WeeklyIntention = {
    week: "July 18-24, 2025",
    intention: "May we walk gently upon the Earth, listening deeply to her wisdom and honoring our sacred connection.",
    contributors: 78,
    energy: 96
  };

  const recentSharings: SacredSharing[] = [
    {
      id: '1',
      date: '1 hour ago',
      soul: 'Forest Walker',
      reflection: 'The ancient oak in my garden seemed to whisper today about patience and deep roots. I felt held by its presence.',
      hearts: 18,
      prayers: 5
    },
    {
      id: '2',
      date: '3 hours ago',
      soul: 'River Stone',
      reflection: 'During my barefoot walk this morning, I could feel the Earth\'s heartbeat through the soles of my feet. Pure communion.',
      hearts: 24,
      prayers: 7
    },
    {
      id: '3',
      date: '5 hours ago',
      soul: 'Mountain Echo',
      reflection: 'The sunrise over the hills reminded me that we are never separate from nature - we ARE nature, awakening to itself.',
      hearts: 31,
      prayers: 9
    },
    {
      id: '4',
      date: '8 hours ago',
      soul: 'Gentle Rain',
      reflection: 'I spent time with my houseplants today, and I swear they were teaching me about unconditional love and care.',
      hearts: 15,
      prayers: 4
    },
    {
      id: '5',
      date: '12 hours ago',
      soul: 'Wildflower',
      reflection: 'The wind in the trees sounded like ancient prayers today. I joined in with my breath and felt so connected.',
      hearts: 22,
      prayers: 6
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
      const newSharing: SacredSharing = {
        id: Date.now().toString(),
        date: 'just now',
        soul: 'Sacred Soul', // Would be user's chosen circle name
        reflection: sacredSharing.trim(),
        hearts: 0,
        prayers: 0
      };
      // In real app: add to database and update state
      console.log('New sharing:', newSharing);
      setSacredSharing('');
      setShowShareForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 relative overflow-hidden">
      {/* Sacred Frequencies */}
      <SacredFrequencies defaultEnabled={false} />

      {/* Earth Elements Background */}
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
            🍃
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-green-300/30 rounded-xl text-green-200 hover:bg-white/20 transition-all duration-300"
        >
          <span>←</span>
          <span>Return to Sacred Circles</span>
        </Link>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Circle Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 animate-bounce">🌍</div>
          <h1 className="text-4xl font-light text-white mb-2">
            Earth Keepers Circle
          </h1>
          <p className="text-green-200 mb-4">
            Nature Connection & Grounding
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent mx-auto mb-6"></div>
          
          {/* Circle Vitality */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl text-green-300 font-light">{participantCount}</div>
              <div className="text-xs text-green-400">Earth Souls</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-green-300 font-light">{circleEnergy}%</div>
              <div className="text-xs text-green-400">Circle Energy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-green-300 font-light">🌱</div>
              <div className="text-xs text-green-400">Grounding & Connection</div>
            </div>
          </div>
        </div>

        {/* Sacred Navigation */}
        <SacredNavigation currentPage="Earth Keepers" showBackToGarden={true} showSanctuaries={true} />

        {/* Sacred Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-green-300/30">
            <button
              onClick={() => setCurrentTab('reflection')}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                currentTab === 'reflection'
                  ? 'bg-green-500/50 text-white'
                  : 'text-green-200 hover:text-white hover:bg-white/10'
              }`}
            >
              🌿 Daily Communion
            </button>
            <button
              onClick={() => setCurrentTab('sharing')}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                currentTab === 'sharing'
                  ? 'bg-green-500/50 text-white'
                  : 'text-green-200 hover:text-white hover:bg-white/10'
              }`}
            >
              🌊 Sacred Sharing
            </button>
            <button
              onClick={() => setCurrentTab('intention')}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                currentTab === 'intention'
                  ? 'bg-green-500/50 text-white'
                  : 'text-green-200 hover:text-white hover:bg-white/10'
              }`}
            >
              🌳 Weekly Intention
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            
            {/* Daily Communion Tab */}
            {currentTab === 'reflection' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-300/30">
                <h2 className="text-xl font-light text-green-100 mb-4 flex items-center">
                  <span className="mr-2">🌿</span>
                  Today&apos;s Earth Communion
                </h2>
                
                <div className="bg-green-500/20 rounded-xl p-4 mb-6 border border-green-400/30">
                  <p className="text-green-100 italic text-lg leading-relaxed">
                    &ldquo;{todaysPrompt}&rdquo;
                  </p>
                </div>

                {!hasReflectedToday ? (
                  <div>
                    <textarea
                      value={personalReflection}
                      onChange={(e) => setPersonalReflection(e.target.value)}
                      placeholder="Share how nature spoke to your soul today... What did you notice? How did you feel connected?"
                      className="w-full p-4 bg-white/10 border border-green-300/30 rounded-lg text-white placeholder-green-300 resize-none mb-4"
                      rows={4}
                    />
                    <button
                      onClick={handlePersonalReflection}
                      disabled={!personalReflection.trim()}
                      className="px-6 py-2 bg-green-500/50 text-green-100 rounded-lg hover:bg-green-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Offer Sacred Reflection
                    </button>
                  </div>
                ) : (
                  <div className="bg-green-500/20 rounded-xl p-4 border border-green-400/30">
                    <div className="flex items-center space-x-2 text-green-300">
                      <span>🙏</span>
                      <span>Your reflection has been received with gratitude. The Earth feels your presence.</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Sacred Sharing Tab */}
            {currentTab === 'sharing' && (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-300/30">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-light text-green-100 flex items-center">
                      <span className="mr-2">🌊</span>
                      Sacred Earth Sharings
                    </h2>
                    <button
                      onClick={() => setShowShareForm(!showShareForm)}
                      className="px-4 py-2 bg-green-500/30 text-green-200 rounded-lg hover:bg-green-500/50 transition-all text-sm"
                    >
                      {showShareForm ? 'Close' : 'Share Your Experience'}
                    </button>
                  </div>

                  {showShareForm && (
                    <div className="mb-6 bg-green-500/10 rounded-xl p-4 border border-green-400/20">
                      <textarea
                        value={sacredSharing}
                        onChange={(e) => setSacredSharing(e.target.value)}
                        placeholder="Share a sacred moment with nature, an insight from the Earth, or how you felt the connection today..."
                        className="w-full p-4 bg-white/10 border border-green-300/30 rounded-lg text-white placeholder-green-300 resize-none mb-4"
                        rows={3}
                      />
                      <div className="flex space-x-3">
                        <button
                          onClick={handleSacredShare}
                          disabled={!sacredSharing.trim()}
                          className="px-4 py-2 bg-green-500/50 text-green-100 rounded-lg hover:bg-green-500/70 transition-all text-sm disabled:opacity-50"
                        >
                          Share with Circle
                        </button>
                        <button
                          onClick={() => setShowShareForm(false)}
                          className="px-4 py-2 bg-white/10 text-green-200 rounded-lg hover:bg-white/20 transition-all text-sm"
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
                    <div key={sharing.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-300/20">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400 font-medium text-sm">{sharing.soul}</span>
                          <span className="text-green-500 text-xs">•</span>
                          <span className="text-green-500 text-xs">{sharing.date}</span>
                        </div>
                      </div>
                      <p className="text-green-100 mb-3 leading-relaxed">{sharing.reflection}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <button 
                          className={`flex items-center space-x-1 transition-colors ${
                            heartedSharings.has(sharing.id) 
                              ? 'text-green-300 opacity-75 cursor-default' 
                              : 'text-green-400 hover:text-green-300'
                          }`}
                          onClick={() => handleHeart(sharing.id)}
                          disabled={heartedSharings.has(sharing.id)}
                          title={heartedSharings.has(sharing.id) ? 'Heart already sent with love' : 'Send gentle heart'}
                        >
                          <span>�</span>
                          <span>{sharing.hearts + (heartedSharings.has(sharing.id) ? 1 : 0)}</span>
                        </button>
                        <button 
                          className={`flex items-center space-x-1 transition-colors ${
                            prayedSharings.has(sharing.id) 
                              ? 'text-green-300 opacity-75 cursor-default' 
                              : 'text-green-400 hover:text-green-300'
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

            {/* Weekly Intention Tab */}
            {currentTab === 'intention' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-300/30">
                <h2 className="text-xl font-light text-green-100 mb-6 flex items-center">
                  <span className="mr-2">🌳</span>
                  Circle&apos;s Weekly Intention
                </h2>
                
                <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30 mb-6">
                  <div className="text-sm text-green-300 mb-2">{weeklyIntention.week}</div>
                  <p className="text-green-100 text-lg italic leading-relaxed mb-4">
                    &ldquo;{weeklyIntention.intention}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-300">{weeklyIntention.contributors} souls contributing</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-300">Collective Energy:</span>
                      <div className="w-20 h-2 bg-green-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-300 transition-all duration-1000"
                          style={{ width: `${weeklyIntention.energy}%` }}
                        ></div>
                      </div>
                      <span className="text-green-300">{weeklyIntention.energy}%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg text-green-200">Ways to Connect with Earth This Week:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span>🌱</span>
                        <span className="text-green-200 font-medium">Morning Earth Greeting</span>
                      </div>
                      <p className="text-green-300 text-sm">Start each day by placing your hands on the earth (or a plant) and offering gratitude.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span>🌿</span>
                        <span className="text-green-200 font-medium">Barefoot Communion</span>
                      </div>
                      <p className="text-green-300 text-sm">Spend time with your feet touching the earth, feeling the connection and exchange of energy.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span>🍃</span>
                        <span className="text-green-200 font-medium">Nature Listening</span>
                      </div>
                      <p className="text-green-300 text-sm">Sit quietly in nature and listen deeply to what the natural world is communicating.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span>🌊</span>
                        <span className="text-green-200 font-medium">Element Meditation</span>
                      </div>
                      <p className="text-green-300 text-sm">Meditate with the four elements - earth, water, fire, and air - feeling your connection to each.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Circle Guidelines */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-300/30">
              <h3 className="text-green-200 font-medium mb-3 flex items-center">
                <span className="mr-2">🌿</span>
                Earth Keeper Principles
              </h3>
              <div className="space-y-2 text-sm text-green-300">
                <div>🌍 Honor all life as sacred</div>
                <div>🌱 Practice gentle environmental stewardship</div>
                <div>🍃 Listen to nature&apos;s wisdom</div>
                <div>🌊 Share earth connection experiences</div>
                <div>🌸 Support others&apos; nature relationships</div>
                <div>🌳 Approach with reverence and gratitude</div>
              </div>
            </div>

            {/* Circle Energy */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-300/30">
              <h3 className="text-green-200 font-medium mb-3">🌟 Current Circle Energy</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-300 text-sm">Grounding</span>
                  <div className="w-16 h-2 bg-green-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-5/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-300 text-sm">Connection</span>
                  <div className="w-16 h-2 bg-green-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-300 text-sm">Healing</span>
                  <div className="w-16 h-2 bg-green-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal Wisdom */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-300/30">
              <h3 className="text-green-200 font-medium mb-3">🌸 Seasonal Wisdom</h3>
              <div className="text-sm text-green-300 space-y-2">
                <div className="text-green-200 font-medium">Summer&apos;s Teaching:</div>
                <p className="leading-relaxed">
                  &ldquo;In the fullness of summer, nature teaches us about abundance, growth, and the power of sustained nurturing. 
                  Like the sun that gives generously each day, we too can shine our light consistently.&rdquo;
                </p>
              </div>
            </div>

            {/* Earth Wisdom Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-300/30">
              <div className="text-green-300 text-sm italic leading-relaxed">
                &ldquo;The Earth does not belong to us; we belong to the Earth. All things are connected like the blood that unites one family.&rdquo;
              </div>
              <div className="text-green-400 text-xs mt-2">- Chief Seattle</div>
            </div>
          </div>
        </div>

        {/* Sacred Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-green-300/20">
            <h3 className="text-green-200 text-lg mb-4">🌍 Earth Keeper Actions</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="text-green-300 font-medium">🌱 Daily Practice</div>
                <div className="text-green-400">Spend at least 10 minutes in conscious connection with nature each day</div>
              </div>
              <div className="space-y-2">
                <div className="text-green-300 font-medium">🌿 Earth Care</div>
                <div className="text-green-400">Take one small action daily to care for the environment</div>
              </div>
              <div className="space-y-2">
                <div className="text-green-300 font-medium">🌊 Circle Support</div>
                <div className="text-green-400">Hold space for others&apos; earth connection journeys with loving presence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌱</div>
      <div className="absolute top-40 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🍃</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🌍</div>
      <div className="absolute top-48 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🌿</div>
      
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
