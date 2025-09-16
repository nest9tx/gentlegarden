'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function StarRemeberersCircle() {
  const [activeTab, setActiveTab] = useState('reflection');
  const [newSharing, setNewSharing] = useState('');
  
  // Local state for heart/prayer interactions (gentle limits)
  const [userInteractions, setUserInteractions] = useState<Record<string, boolean>>({});
  
  // Demo data for sacred sharing
  const [sharings] = useState([
    {
      id: 1,
      soulName: 'Cosmic Voyager',
      content: 'Had the most profound dream about golden spirals and heard &ldquo;You are the bridge between worlds.&rdquo; Still integrating what this means.',
      hearts: 42,
      prayers: 33,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      soulName: 'Starlight Weaver',
      content: 'The synchronicities this week have been extraordinary. Numbers, animals, songs - the universe is speaking in such clear language.',
      hearts: 38,
      prayers: 29,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      soulName: 'Infinite Observer',
      content: 'During meditation, I felt my consciousness expand beyond my body. For a moment, I was everything and nothing simultaneously. Pure love.',
      hearts: 47,
      prayers: 41,
      timestamp: '12 hours ago'
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Floating Cosmic Elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-indigo-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 4}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Cosmic Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/sanctuaries"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-indigo-300/30 rounded-xl text-indigo-200 hover:bg-white/20 transition-all duration-300"
        >
          <span>←</span>
          <span>Return to Sanctuaries</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Circle Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-bounce">✨</div>
            <h1 className="text-5xl font-light text-white mb-4">
              Star Rememberers Circle
            </h1>
            <p className="text-indigo-200 text-xl mb-6">
              Cosmic Consciousness & Mystery
            </p>
            
            {/* Circle Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-white">203</div>
                <div className="text-indigo-300 text-sm">Cosmic Souls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white">97%</div>
                <div className="text-indigo-300 text-sm">Circle Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🌌</div>
                <div className="text-indigo-300 text-sm">Mystery & Expansion</div>
              </div>
            </div>
          </div>

          {/* Sacred Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-indigo-300/30">
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'reflection' 
                    ? 'bg-indigo-500/30 text-indigo-100' 
                    : 'text-indigo-300 hover:text-indigo-200'
                }`}
              >
                🌌 Daily Reflection
              </button>
              <button
                onClick={() => setActiveTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'sharing' 
                    ? 'bg-indigo-500/30 text-indigo-100' 
                    : 'text-indigo-300 hover:text-indigo-200'
                }`}
              >
                ✨ Sacred Sharing
              </button>
              <button
                onClick={() => setActiveTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'intention' 
                    ? 'bg-indigo-500/30 text-indigo-100' 
                    : 'text-indigo-300 hover:text-indigo-200'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">✨</span>
                    Today&apos;s Cosmic Gateway
                  </h2>
                  
                  <div className="bg-indigo-500/10 rounded-xl p-6 mb-6 border border-indigo-400/20">
                    <div className="text-indigo-200 text-lg italic mb-4">
                      &ldquo;What messages is the universe whispering to you lately?&rdquo;
                    </div>
                    <div className="text-indigo-300 text-sm">
                      Reflect on synchronicities, dreams, mystical experiences, and cosmic connections you&apos;ve been receiving.
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-indigo-100 font-medium mb-3">Cosmic Journal Space</h3>
                      <textarea
                        className="w-full h-32 bg-white/5 border border-indigo-300/30 rounded-xl p-4 text-indigo-100 placeholder-indigo-300/50 focus:border-indigo-300/50 focus:outline-none"
                        placeholder="Record your cosmic experiences... dreams, visions, synchronicities, mystical moments..."
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-indigo-200 font-medium mb-3">Cosmic Awareness Practices</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-indigo-400">•</span>
                          <span className="text-indigo-200">Observe number patterns and repeated sequences</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-indigo-400">•</span>
                          <span className="text-indigo-200">Keep a dream journal by your bedside</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-indigo-400">•</span>
                          <span className="text-indigo-200">Meditate under starlight when possible</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20">
                      <h4 className="text-indigo-200 font-medium mb-3">🌌 Cosmic Remember</h4>
                      <p className="text-indigo-200 text-sm italic">
                        &ldquo;You are not a human being having a spiritual experience. You are a spiritual being having a human experience. 
                        The cosmos lives within you, and you within it. Every star, every galaxy, every quantum particle - 
                        all are part of your infinite nature.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Sharing Tab */}
              {activeTab === 'sharing' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">✨</span>
                    Cosmic Consciousness Sharing
                  </h2>
                  
                  {/* Share Form */}
                  <div className="bg-indigo-500/10 rounded-xl p-6 mb-6 border border-indigo-400/20">
                    <div className="text-indigo-200 text-sm mb-3">
                      🌌 Share your mystical experiences, cosmic downloads, or interdimensional insights
                    </div>
                    <textarea
                      value={newSharing}
                      onChange={(e) => setNewSharing(e.target.value)}
                      className="w-full h-24 bg-transparent border-none text-indigo-100 placeholder-indigo-300/70 focus:outline-none resize-none"
                      placeholder="Share a cosmic experience, synchronicity, dream, or mystical insight... (280 characters)"
                      maxLength={280}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-indigo-400 text-xs">
                        {newSharing.length}/280 characters
                      </div>
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-indigo-500/30 hover:bg-indigo-500/50 text-indigo-100 rounded-lg transition-all duration-300 text-sm"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                  
                  {/* Sacred Sharings */}
                  <div className="space-y-4">
                    {sharings.map((sharing) => (
                      <div key={sharing.id} className="bg-white/5 rounded-xl p-6 border border-indigo-300/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-indigo-200 font-medium">{sharing.soulName}</div>
                          <div className="text-indigo-400 text-xs">{sharing.timestamp}</div>
                        </div>
                        <p className="text-indigo-100 mb-4 leading-relaxed">{sharing.content}</p>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => handleHeartClick(sharing.id)}
                            disabled={userInteractions[`heart_${sharing.id}`]}
                            className={`flex items-center space-x-2 transition-colors ${
                              userInteractions[`heart_${sharing.id}`]
                                ? 'text-indigo-400 cursor-default'
                                : 'text-indigo-300 hover:text-indigo-200 cursor-pointer'
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
                                ? 'text-indigo-400 cursor-default'
                                : 'text-indigo-300 hover:text-indigo-200 cursor-pointer'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🙏</span>
                    Circle&apos;s Cosmic Light
                  </h2>
                  
                  <div className="bg-indigo-500/10 rounded-xl p-6 mb-6 border border-indigo-400/20">
                    <h3 className="text-indigo-100 font-medium mb-3">This Week&apos;s Collective Intention</h3>
                    <div className="text-indigo-200 text-lg italic mb-4">
                      &ldquo;May we remain open to the infinite mysteries revealing through us&rdquo;
                    </div>
                    <div className="w-full bg-indigo-500/20 rounded-full h-3 mb-4">
                      <div className="bg-indigo-400 h-3 rounded-full" style={{width: '94%'}}></div>
                    </div>
                    <div className="text-indigo-300 text-sm">
                      191 souls are holding this intention with you
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-indigo-200 font-medium mb-3">Ways to Tend This Intention</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-indigo-400">✨</span>
                          <span className="text-indigo-200">Stay curious about synchronicities and cosmic signs</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-indigo-400">✨</span>
                          <span className="text-indigo-200">Trust your intuitive downloads and mystical experiences</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-indigo-400">✨</span>
                          <span className="text-indigo-200">Practice seeing the sacred in the seemingly ordinary</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Star Rememberer Principles */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-indigo-300/30">
                <h3 className="text-indigo-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">✨</span>
                  Star Rememberer Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-indigo-400">🌌</span>
                    <span className="text-indigo-200">Everything is interconnected</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-indigo-400">🔮</span>
                    <span className="text-indigo-200">Mystery is sacred teacher</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-indigo-400">👁️</span>
                    <span className="text-indigo-200">Intuition is cosmic compass</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-indigo-400">🌟</span>
                    <span className="text-indigo-200">You are made of star stuff</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-indigo-400">∞</span>
                    <span className="text-indigo-200">Consciousness is infinite</span>
                  </div>
                </div>
              </div>

              {/* Current Cosmic Energy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-indigo-300/30">
                <h3 className="text-indigo-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌌</span>
                  Current Cosmic Energy
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-indigo-200">Expansion</span>
                      <span className="text-indigo-300">98%</span>
                    </div>
                    <div className="w-full bg-indigo-500/20 rounded-full h-2">
                      <div className="bg-indigo-400 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-indigo-200">Intuition</span>
                      <span className="text-indigo-300">95%</span>
                    </div>
                    <div className="w-full bg-indigo-500/20 rounded-full h-2">
                      <div className="bg-indigo-400 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-indigo-200">Synchronicity</span>
                      <span className="text-indigo-300">99%</span>
                    </div>
                    <div className="w-full bg-indigo-500/20 rounded-full h-2">
                      <div className="bg-indigo-400 h-2 rounded-full" style={{width: '99%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-400/20">
                  <div className="text-indigo-200 text-sm italic">
                    &ldquo;The universe is not only queerer than we suppose, but queerer than we can suppose. Open to the infinite mystery.&rdquo;
                  </div>
                  <div className="text-indigo-400 text-xs mt-2">
                    - Star Rememberer Wisdom
                  </div>
                </div>
              </div>

              {/* Cosmic Calendar */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-indigo-300/30">
                <h3 className="text-indigo-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌙</span>
                  Cosmic Calendar
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Moon Phase</span>
                    <span className="text-indigo-300">Waning Gibbous 🌖</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Mercury</span>
                    <span className="text-indigo-300">Direct ➡️</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Portal Day</span>
                    <span className="text-indigo-300">7/18 (9) ⚡</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Energy</span>
                    <span className="text-indigo-300">High Frequency 🔥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Practices */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-300/30">
            <h2 className="text-2xl font-light text-white mb-6 text-center">
              ✨ Cosmic Consciousness Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌌</div>
                <h3 className="text-indigo-100 font-medium mb-2">Stargazing Meditation</h3>
                <p className="text-indigo-300 text-sm">Connect with cosmic consciousness under the infinite sky</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🔮</div>
                <h3 className="text-indigo-100 font-medium mb-2">Synchronicity Tracking</h3>
                <p className="text-indigo-300 text-sm">Record meaningful coincidences and cosmic messages</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">👁️</div>
                <h3 className="text-indigo-100 font-medium mb-2">Third Eye Activation</h3>
                <p className="text-indigo-300 text-sm">Develop intuitive sight and inner cosmic vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">✨</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🌌</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🔮</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🌟</div>
      
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
