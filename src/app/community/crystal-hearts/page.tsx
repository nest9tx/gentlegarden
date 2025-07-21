'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CrystalHeartsCircle() {
  const [activeTab, setActiveTab] = useState('reflection');
  const [newSharing, setNewSharing] = useState('');
  
  // Local state for heart/prayer interactions (gentle limits)
  const [userInteractions, setUserInteractions] = useState<Record<string, boolean>>({});
  
  // Demo data for sacred sharing
  const [sharings] = useState([
    {
      id: 1,
      soulName: 'Quartz Keeper',
      content: 'Been working with rose quartz for heart healing. The gentleness it brings to my self-talk has been profound. Crystals really do hold frequencies.',
      hearts: 31,
      prayers: 24,
      timestamp: '3 hours ago'
    },
    {
      id: 2,
      soulName: 'Sound Weaver',
      content: 'Did my first sound bath with singing bowls. The vibrations moved through me like liquid light, releasing what needed to go. Pure magic.',
      hearts: 27,
      prayers: 19,
      timestamp: '6 hours ago'
    },
    {
      id: 3,
      soulName: 'Energy Tender',
      content: 'Learning to feel the energy fields around plants and crystals. We&apos;re all connected in this beautiful web of vibration and consciousness.',
      hearts: 35,
      prayers: 28,
      timestamp: '10 hours ago'
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Floating Crystal Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-cyan-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            💎
          </div>
        ))}
      </div>

      {/* Crystalline Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-cyan-300/30 rounded-xl text-cyan-200 hover:bg-white/20 transition-all duration-300"
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
            <div className="text-8xl mb-6 animate-bounce">💎</div>
            <h1 className="text-5xl font-light text-white mb-4">
              Crystal Hearts Circle
            </h1>
            <p className="text-cyan-200 text-xl mb-6">
              Energy Healing & Vibrational Medicine
            </p>
            
            {/* Circle Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-white">156</div>
                <div className="text-cyan-300 text-sm">Crystal Keepers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white">95%</div>
                <div className="text-cyan-300 text-sm">Circle Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🔮</div>
                <div className="text-cyan-300 text-sm">Healing & Vibration</div>
              </div>
            </div>
          </div>

          {/* Sacred Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-cyan-300/30">
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'reflection' 
                    ? 'bg-cyan-500/30 text-cyan-100' 
                    : 'text-cyan-300 hover:text-cyan-200'
                }`}
              >
                💎 Daily Reflection
              </button>
              <button
                onClick={() => setActiveTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'sharing' 
                    ? 'bg-cyan-500/30 text-cyan-100' 
                    : 'text-cyan-300 hover:text-cyan-200'
                }`}
              >
                🔮 Sacred Sharing
              </button>
              <button
                onClick={() => setActiveTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'intention' 
                    ? 'bg-cyan-500/30 text-cyan-100' 
                    : 'text-cyan-300 hover:text-cyan-200'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">💎</span>
                    Today&apos;s Crystalline Frequency
                  </h2>
                  
                  <div className="bg-cyan-500/10 rounded-xl p-6 mb-6 border border-cyan-400/20">
                    <div className="text-cyan-200 text-lg italic mb-4">
                      &ldquo;What frequency is your heart calling you to tune into today?&rdquo;
                    </div>
                    <div className="text-cyan-300 text-sm">
                      Reflect on the energetic vibrations that want to move through you for healing and alignment.
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-cyan-100 font-medium mb-3">Crystal Resonance Space</h3>
                      <textarea
                        className="w-full h-32 bg-white/5 border border-cyan-300/30 rounded-xl p-4 text-cyan-100 placeholder-cyan-300/50 focus:border-cyan-300/50 focus:outline-none"
                        placeholder="What energies are you working with? Which crystals or sounds are calling to you?"
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-cyan-200 font-medium mb-3">Vibrational Healing Practices</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-cyan-400">•</span>
                          <span className="text-cyan-200">Hold crystals during meditation to amplify intention</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-cyan-400">•</span>
                          <span className="text-cyan-200">Use sound (bowls, chimes, voice) to shift energy</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-cyan-400">•</span>
                          <span className="text-cyan-200">Feel into the energy field around your body</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                      <h4 className="text-cyan-200 font-medium mb-3">💎 Crystal Wisdom</h4>
                      <p className="text-cyan-200 text-sm italic">
                        &ldquo;Everything is energy vibrating at different frequencies. Crystals hold stable, pure vibrations that can help 
                        us remember our own natural state of harmony. When we work with them consciously, we align with the Earth&apos;s 
                        ancient wisdom and our own crystalline nature.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Sharing Tab */}
              {activeTab === 'sharing' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🔮</span>
                    Sacred Frequency Sharing
                  </h2>
                  
                  {/* Share Form */}
                  <div className="bg-cyan-500/10 rounded-xl p-6 mb-6 border border-cyan-400/20">
                    <div className="text-cyan-200 text-sm mb-3">
                      💎 Share your crystal experiences, energy healing insights, or vibrational discoveries
                    </div>
                    <textarea
                      value={newSharing}
                      onChange={(e) => setNewSharing(e.target.value)}
                      className="w-full h-24 bg-transparent border-none text-cyan-100 placeholder-cyan-300/70 focus:outline-none resize-none"
                      placeholder="Share your energy healing experience or crystal wisdom... (280 characters)"
                      maxLength={280}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-cyan-400 text-xs">
                        {newSharing.length}/280 characters
                      </div>
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-cyan-500/30 hover:bg-cyan-500/50 text-cyan-100 rounded-lg transition-all duration-300 text-sm"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                  
                  {/* Sacred Sharings */}
                  <div className="space-y-4">
                    {sharings.map((sharing) => (
                      <div key={sharing.id} className="bg-white/5 rounded-xl p-6 border border-cyan-300/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-cyan-200 font-medium">{sharing.soulName}</div>
                          <div className="text-cyan-400 text-xs">{sharing.timestamp}</div>
                        </div>
                        <p className="text-cyan-100 mb-4 leading-relaxed">{sharing.content}</p>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => handleHeartClick(sharing.id)}
                            disabled={userInteractions[`heart_${sharing.id}`]}
                            className={`flex items-center space-x-2 transition-colors ${
                              userInteractions[`heart_${sharing.id}`]
                                ? 'text-cyan-400 cursor-default'
                                : 'text-cyan-300 hover:text-cyan-200 cursor-pointer'
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
                                ? 'text-cyan-400 cursor-default'
                                : 'text-cyan-300 hover:text-cyan-200 cursor-pointer'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🙏</span>
                    Circle&apos;s Crystalline Light
                  </h2>
                  
                  <div className="bg-cyan-500/10 rounded-xl p-6 mb-6 border border-cyan-400/20">
                    <h3 className="text-cyan-100 font-medium mb-3">This Week&apos;s Collective Intention</h3>
                    <div className="text-cyan-200 text-lg italic mb-4">
                      &ldquo;May we vibrate in harmony with our highest healing frequency&rdquo;
                    </div>
                    <div className="w-full bg-cyan-500/20 rounded-full h-3 mb-4">
                      <div className="bg-cyan-400 h-3 rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <div className="text-cyan-300 text-sm">
                      144 souls are holding this intention with you
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-cyan-200 font-medium mb-3">Ways to Tend This Intention</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-cyan-400">💎</span>
                          <span className="text-cyan-200">Work with crystals that resonate with your healing needs</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-cyan-400">💎</span>
                          <span className="text-cyan-200">Use sound and vibration to clear and align your energy</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-cyan-400">💎</span>
                          <span className="text-cyan-200">Trust your sensitivity to energy and honor what you feel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Crystal Heart Principles */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-300/30">
                <h3 className="text-cyan-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">💎</span>
                  Crystal Heart Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-cyan-400">🔮</span>
                    <span className="text-cyan-200">Everything is energy and vibration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-cyan-400">💎</span>
                    <span className="text-cyan-200">Crystals amplify intention</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-cyan-400">🎵</span>
                    <span className="text-cyan-200">Sound is medicine</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-cyan-400">🌊</span>
                    <span className="text-cyan-200">Energy flows where attention goes</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-cyan-400">🌟</span>
                    <span className="text-cyan-200">We are crystalline beings</span>
                  </div>
                </div>
              </div>

              {/* Current Crystalline Energy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-300/30">
                <h3 className="text-cyan-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🔮</span>
                  Current Crystalline Energy
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cyan-200">Clarity</span>
                      <span className="text-cyan-300">96%</span>
                    </div>
                    <div className="w-full bg-cyan-500/20 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cyan-200">Healing</span>
                      <span className="text-cyan-300">93%</span>
                    </div>
                    <div className="w-full bg-cyan-500/20 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{width: '93%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cyan-200">Vibration</span>
                      <span className="text-cyan-300">98%</span>
                    </div>
                    <div className="w-full bg-cyan-500/20 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-cyan-200 text-sm italic">
                    &ldquo;We are not separate from the crystal kingdom. We are crystalline beings remembering our geometric perfection and vibrational nature.&rdquo;
                  </div>
                  <div className="text-cyan-400 text-xs mt-2">
                    - Crystal Heart Wisdom
                  </div>
                </div>
              </div>

              {/* Sacred Stones Guide */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-300/30">
                <h3 className="text-cyan-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">💎</span>
                  Sacred Stones
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Rose Quartz</span>
                    <span className="text-cyan-300">Heart Healing 💗</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Clear Quartz</span>
                    <span className="text-cyan-300">Amplification ✨</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Amethyst</span>
                    <span className="text-cyan-300">Intuition 🔮</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Black Tourmaline</span>
                    <span className="text-cyan-300">Protection 🛡️</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Selenite</span>
                    <span className="text-cyan-300">Cleansing 🌙</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Practices */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
            <h2 className="text-2xl font-light text-white mb-6 text-center">
              💎 Crystalline Healing Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔮</div>
                <h3 className="text-cyan-100 font-medium mb-2">Crystal Meditation</h3>
                <p className="text-cyan-300 text-sm">Work with crystals to amplify intention and heal specific energy centers</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🎵</div>
                <h3 className="text-cyan-100 font-medium mb-2">Sound Healing</h3>
                <p className="text-cyan-300 text-sm">Use singing bowls, chimes, or voice to shift and align energy</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🌊</div>
                <h3 className="text-cyan-100 font-medium mb-2">Energy Sensing</h3>
                <p className="text-cyan-300 text-sm">Develop sensitivity to feel and work with subtle energy fields</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">💎</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🔮</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🎵</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🌊</div>
      
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
