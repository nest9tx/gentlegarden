'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GentleWarriorsCircle() {
  const [activeTab, setActiveTab] = useState('reflection');
  const [newSharing, setNewSharing] = useState('');
  
  // Local state for heart/prayer interactions (gentle limits)
  const [userInteractions, setUserInteractions] = useState<Record<string, boolean>>({});
  
  // Demo data for sacred sharing
  const [sharings] = useState([
    {
      id: 1,
      soulName: 'Fierce Grace',
      content: 'Said no to something that didn&apos;t align with my values today. It felt scary and empowering at the same time. My boundaries are acts of love.',
      hearts: 29,
      prayers: 21,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      soulName: 'Sacred Sword',
      content: 'Learning that being a warrior doesn&apos;t mean fighting everyone. Sometimes the greatest courage is in choosing peace over being right.',
      hearts: 33,
      prayers: 26,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      soulName: 'Gentle Strength',
      content: 'Spoke my truth with love today even though my voice shook. The gentlest warriors are often the bravest ones.',
      hearts: 37,
      prayers: 30,
      timestamp: '7 hours ago'
    }
  ]);

  const handleShare = () => {
    if (newSharing.trim()) {
      console.log('New sharing:', newSharing);
      setNewSharing('');
    }
  };

  // Handle heart/prayer interactions with gentle limits
  const handleHeartClick = (sharingId: number) => {
    const key = `heart_${sharingId}`;
    if (!userInteractions[key]) {
      setUserInteractions(prev => ({ ...prev, [key]: true }));
      // In a real app, this would send to backend
      console.log(`Sending heart to sharing ${sharingId}`);
    }
  };

  const handlePrayerClick = (sharingId: number) => {
    const key = `prayer_${sharingId}`;
    if (!userInteractions[key]) {
      setUserInteractions(prev => ({ ...prev, [key]: true }));
      // In a real app, this would send to backend
      console.log(`Sending prayer to sharing ${sharingId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900 relative overflow-hidden">
      {/* Floating Warrior Elements */}
      <div className="absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-amber-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ⚖️
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-amber-300/30 rounded-xl text-amber-200 hover:bg-white/20 transition-all duration-300"
        >
          <span>←</span>
          <span>Return to Sacred Circles</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Circle Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-bounce">⚖️</div>
            <h1 className="text-5xl font-light text-white mb-4">
              Gentle Warriors Circle
            </h1>
            <p className="text-amber-200 text-xl mb-6">
              Courage & Sacred Boundaries
            </p>
            
            {/* Circle Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-white">178</div>
                <div className="text-amber-300 text-sm">Gentle Warriors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white">93%</div>
                <div className="text-amber-300 text-sm">Circle Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🛡️</div>
                <div className="text-amber-300 text-sm">Courage & Balance</div>
              </div>
            </div>
          </div>

          {/* Sacred Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-amber-300/30">
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'reflection' 
                    ? 'bg-amber-500/30 text-amber-100' 
                    : 'text-amber-300 hover:text-amber-200'
                }`}
              >
                ⚖️ Daily Reflection
              </button>
              <button
                onClick={() => setActiveTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'sharing' 
                    ? 'bg-amber-500/30 text-amber-100' 
                    : 'text-amber-300 hover:text-amber-200'
                }`}
              >
                🛡️ Sacred Sharing
              </button>
              <button
                onClick={() => setActiveTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'intention' 
                    ? 'bg-amber-500/30 text-amber-100' 
                    : 'text-amber-300 hover:text-amber-200'
                }`}
              >
                🙏 Weekly Intention
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              
              {/* Daily Reflection Tab */}
              {activeTab === 'reflection' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">⚖️</span>
                    Today&apos;s Warrior Path
                  </h2>
                  
                  <div className="bg-amber-500/10 rounded-xl p-6 mb-6 border border-amber-400/20">
                    <div className="text-amber-200 text-lg italic mb-4">
                      &ldquo;Where are you being called to stand in your truth with love?&rdquo;
                    </div>
                    <div className="text-amber-300 text-sm">
                      Reflect on opportunities to express courage through gentle strength and loving boundaries.
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-amber-100 font-medium mb-3">Sacred Courage Space</h3>
                      <textarea
                        className="w-full h-32 bg-white/5 border border-amber-300/30 rounded-xl p-4 text-amber-100 placeholder-amber-300/50 focus:border-amber-300/50 focus:outline-none"
                        placeholder="Where do you need to practice courage? What boundaries want to be honored?"
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-amber-200 font-medium mb-3">Gentle Warrior Practices</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-amber-400">•</span>
                          <span className="text-amber-200">Speak truth with compassion, not aggression</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-amber-400">•</span>
                          <span className="text-amber-200">Set boundaries from love, not fear or anger</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-amber-400">•</span>
                          <span className="text-amber-200">Choose your battles wisely - not every hill is worth dying on</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-400/20">
                      <h4 className="text-amber-200 font-medium mb-3">⚖️ Warrior Wisdom</h4>
                      <p className="text-amber-200 text-sm italic">
                        &ldquo;The strongest warriors are not those who win every battle, but those who know when to fight, 
                        when to yield, and when to walk away with grace. True courage is standing in your truth with love, 
                        even when your voice shakes.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Sharing Tab */}
              {activeTab === 'sharing' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🛡️</span>
                    Sacred Courage Sharing
                  </h2>
                  
                  {/* Share Form */}
                  <div className="bg-amber-500/10 rounded-xl p-6 mb-6 border border-amber-400/20">
                    <div className="text-amber-200 text-sm mb-3">
                      ⚖️ Share your courage victories, boundary successes, or truth-speaking moments
                    </div>
                    <textarea
                      value={newSharing}
                      onChange={(e) => setNewSharing(e.target.value)}
                      className="w-full h-24 bg-transparent border-none text-amber-100 placeholder-amber-300/70 focus:outline-none resize-none"
                      placeholder="Share a moment of gentle courage or boundary setting... (280 characters)"
                      maxLength={280}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-amber-400 text-xs">
                        {newSharing.length}/280 characters
                      </div>
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-amber-500/30 hover:bg-amber-500/50 text-amber-100 rounded-lg transition-all duration-300 text-sm"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                  
                  {/* Sacred Sharings */}
                  <div className="space-y-4">
                    {sharings.map((sharing) => (
                      <div key={sharing.id} className="bg-white/5 rounded-xl p-6 border border-amber-300/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-amber-200 font-medium">{sharing.soulName}</div>
                          <div className="text-amber-400 text-xs">{sharing.timestamp}</div>
                        </div>
                        <p className="text-amber-100 mb-4 leading-relaxed">{sharing.content}</p>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => handleHeartClick(sharing.id)}
                            disabled={userInteractions[`heart_${sharing.id}`]}
                            className={`flex items-center space-x-2 transition-colors ${
                              userInteractions[`heart_${sharing.id}`]
                                ? 'text-amber-400 cursor-default'
                                : 'text-amber-300 hover:text-amber-200 cursor-pointer'
                            }`}
                            title={userInteractions[`heart_${sharing.id}`] ? 'You\'ve already sent love to this sharing' : 'Send love'}
                          >
                            <span>�</span>
                            <span className="text-sm">{sharing.hearts}</span>
                          </button>
                          <button 
                            onClick={() => handlePrayerClick(sharing.id)}
                            disabled={userInteractions[`prayer_${sharing.id}`]}
                            className={`flex items-center space-x-2 transition-colors ${
                              userInteractions[`prayer_${sharing.id}`]
                                ? 'text-amber-400 cursor-default'
                                : 'text-amber-300 hover:text-amber-200 cursor-pointer'
                            }`}
                            title={userInteractions[`prayer_${sharing.id}`] ? 'You\'ve already sent prayers to this sharing' : 'Send prayers'}
                          >
                            <span>🙏</span>
                            <span className="text-sm">{sharing.prayers}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Weekly Intention Tab */}
              {activeTab === 'intention' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🙏</span>
                    Circle&apos;s Courage Light
                  </h2>
                  
                  <div className="bg-amber-500/10 rounded-xl p-6 mb-6 border border-amber-400/20">
                    <h3 className="text-amber-100 font-medium mb-3">This Week&apos;s Collective Intention</h3>
                    <div className="text-amber-200 text-lg italic mb-4">
                      &ldquo;May we find courage to speak our truth with love and grace&rdquo;
                    </div>
                    <div className="w-full bg-amber-500/20 rounded-full h-3 mb-4">
                      <div className="bg-amber-400 h-3 rounded-full" style={{width: '86%'}}></div>
                    </div>
                    <div className="text-amber-300 text-sm">
                      153 souls are holding this intention with you
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-amber-200 font-medium mb-3">Ways to Tend This Intention</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-amber-400">⚖️</span>
                          <span className="text-amber-200">Practice speaking truth with compassion, not judgment</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-amber-400">⚖️</span>
                          <span className="text-amber-200">Set boundaries that honor both you and others</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-amber-400">⚖️</span>
                          <span className="text-amber-200">Choose courage over comfort when love calls</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Gentle Warrior Principles */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-300/30">
                <h3 className="text-amber-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">⚖️</span>
                  Gentle Warrior Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-400">🛡️</span>
                    <span className="text-amber-200">Strength in gentleness</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-400">💖</span>
                    <span className="text-amber-200">Boundaries are love in action</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-400">🗣️</span>
                    <span className="text-amber-200">Truth spoken with compassion</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-400">🏔️</span>
                    <span className="text-amber-200">Choose your battles wisely</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-amber-400">🕊️</span>
                    <span className="text-amber-200">Peace through strength</span>
                  </div>
                </div>
              </div>

              {/* Current Warrior Energy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-300/30">
                <h3 className="text-amber-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🛡️</span>
                  Current Warrior Energy
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-amber-200">Courage</span>
                      <span className="text-amber-300">91%</span>
                    </div>
                    <div className="w-full bg-amber-500/20 rounded-full h-2">
                      <div className="bg-amber-400 h-2 rounded-full" style={{width: '91%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-amber-200">Balance</span>
                      <span className="text-amber-300">88%</span>
                    </div>
                    <div className="w-full bg-amber-500/20 rounded-full h-2">
                      <div className="bg-amber-400 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-amber-200">Truth</span>
                      <span className="text-amber-300">94%</span>
                    </div>
                    <div className="w-full bg-amber-500/20 rounded-full h-2">
                      <div className="bg-amber-400 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-400/20">
                  <div className="text-amber-200 text-sm italic">
                    &ldquo;A gentle warrior fights not for dominance, but for justice. Not for victory, but for truth. Not for power, but for love.&rdquo;
                  </div>
                  <div className="text-amber-400 text-xs mt-2">
                    - Gentle Warrior Wisdom
                  </div>
                </div>
              </div>

              {/* Sacred Boundaries Reminder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-300/30">
                <h3 className="text-amber-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🛡️</span>
                  Sacred Boundaries
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="text-amber-200">
                    &ldquo;No&rdquo; is a complete sentence
                  </div>
                  <div className="text-amber-200">
                    Your energy is sacred
                  </div>
                  <div className="text-amber-200">
                    Boundaries protect your peace
                  </div>
                  <div className="text-amber-200">
                    You can be kind and firm
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Practices */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/30">
            <h2 className="text-2xl font-light text-white mb-6 text-center">
              ⚖️ Gentle Warrior Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-amber-100 font-medium mb-2">Boundary Setting</h3>
                <p className="text-amber-300 text-sm">Practice saying no with love and yes with intention</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🗣️</div>
                <h3 className="text-amber-100 font-medium mb-2">Truth Speaking</h3>
                <p className="text-amber-300 text-sm">Express your authentic self with courage and compassion</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-amber-100 font-medium mb-2">Sacred Balance</h3>
                <p className="text-amber-300 text-sm">Find equilibrium between strength and gentleness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">⚖️</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🛡️</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🗣️</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>💖</div>
      
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
