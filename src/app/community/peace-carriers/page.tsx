'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PeaceCarriersCircle() {
  const [activeTab, setActiveTab] = useState('reflection');
  const [newSharing, setNewSharing] = useState('');
  
  // Track user interactions to prevent unlimited clicking
  const [userInteractions, setUserInteractions] = useState<{
    hearts: Set<number>;
    prayers: Set<number>;
  }>({
    hearts: new Set(),
    prayers: new Set()
  });
  
  // Demo data for sacred sharing with interactive state
  const [sharings, setSharings] = useState([
    {
      id: 1,
      soulName: 'Healing Heart',
      content: 'Today I chose to speak to my inner child with the same kindness I would offer a dear friend. Small steps, but my heart feels lighter.',
      hearts: 28,
      prayers: 22,
      timestamp: '3 hours ago'
    },
    {
      id: 2,
      soulName: 'Gentle River',
      content: 'Learning that healing isn&apos;t linear. Some days I feel whole, others broken. Both are sacred parts of my journey.',
      hearts: 31,
      prayers: 25,
      timestamp: '6 hours ago'
    },
    {
      id: 3,
      soulName: 'Soft Sanctuary',
      content: 'Boundaries are acts of love, not separation. Setting them gently but firmly has been my greatest healing practice.',
      hearts: 35,
      prayers: 28,
      timestamp: '1 day ago'
    }
  ]);

  const handleShare = () => {
    if (newSharing.trim()) {
      console.log('New sharing:', newSharing);
      setNewSharing('');
    }
  };

  // Handle gentle heart giving - one per user per sharing
  const handleHeart = (sharingId: number) => {
    // Check if user has already given a heart to this sharing
    if (userInteractions.hearts.has(sharingId)) {
      return; // Gentle prevention - no action if already given
    }

    setSharings(prev => prev.map(sharing => 
      sharing.id === sharingId 
        ? { ...sharing, hearts: sharing.hearts + 1 }
        : sharing
    ));

    // Mark this sharing as hearted by the user
    setUserInteractions(prev => ({
      ...prev,
      hearts: new Set([...prev.hearts, sharingId])
    }));

    // Gentle haptic feedback for mobile users
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  // Handle gentle prayer support - one per user per sharing
  const handlePrayer = (sharingId: number) => {
    // Check if user has already offered prayer to this sharing
    if (userInteractions.prayers.has(sharingId)) {
      return; // Gentle prevention - no action if already offered
    }

    setSharings(prev => prev.map(sharing => 
      sharing.id === sharingId 
        ? { ...sharing, prayers: sharing.prayers + 1 }
        : sharing
    ));

    // Mark this sharing as prayed for by the user
    setUserInteractions(prev => ({
      ...prev,
      prayers: new Set([...prev.prayers, sharingId])
    }));

    // Gentle haptic feedback for mobile users
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 relative overflow-hidden">
      {/* Floating Peace Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-blue-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            🕊️
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-xl text-blue-200 hover:bg-white/20 transition-all duration-300"
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
            <div className="text-8xl mb-6 animate-bounce">🕊️</div>
            <h1 className="text-5xl font-light text-white mb-4">
              Peace Carriers Circle
            </h1>
            <p className="text-blue-200 text-xl mb-6">
              Healing & Restoration
            </p>
            
            {/* Circle Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-white">167</div>
                <div className="text-blue-300 text-sm">Healing Souls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white">98%</div>
                <div className="text-blue-300 text-sm">Circle Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">💙</div>
                <div className="text-blue-300 text-sm">Healing & Compassion</div>
              </div>
            </div>
          </div>

          {/* Sacred Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-blue-300/30">
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'reflection' 
                    ? 'bg-blue-500/30 text-blue-100' 
                    : 'text-blue-300 hover:text-blue-200'
                }`}
              >
                💙 Daily Reflection
              </button>
              <button
                onClick={() => setActiveTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'sharing' 
                    ? 'bg-blue-500/30 text-blue-100' 
                    : 'text-blue-300 hover:text-blue-200'
                }`}
              >
                🕊️ Sacred Sharing
              </button>
              <button
                onClick={() => setActiveTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'intention' 
                    ? 'bg-blue-500/30 text-blue-100' 
                    : 'text-blue-300 hover:text-blue-200'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🕊️</span>
                    Today&apos;s Healing Harbor
                  </h2>
                  
                  <div className="bg-blue-500/10 rounded-xl p-6 mb-6 border border-blue-400/20">
                    <div className="text-blue-200 text-lg italic mb-4">
                      &ldquo;What small act of self-compassion can you offer yourself today?&rdquo;
                    </div>
                    <div className="text-blue-300 text-sm">
                      Reflect on gentle ways to nurture your healing heart and honor your sacred journey.
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-blue-100 font-medium mb-3">Sacred Sanctuary Space</h3>
                      <textarea
                        className="w-full h-32 bg-white/5 border border-blue-300/30 rounded-xl p-4 text-blue-100 placeholder-blue-300/50 focus:border-blue-300/50 focus:outline-none"
                        placeholder="What does your heart need today? How can you hold yourself with tender loving care?"
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-blue-200 font-medium mb-3">Trauma-Informed Healing Practices</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400">•</span>
                          <span className="text-blue-200">Honor your body&apos;s wisdom and need for safety</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400">•</span>
                          <span className="text-blue-200">Practice saying &ldquo;no&rdquo; as an act of self-love</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400">•</span>
                          <span className="text-blue-200">Breathe deeply and feel your feet on the earth</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                      <h4 className="text-blue-200 font-medium mb-3">💙 Gentle Reminder</h4>
                      <p className="text-blue-200 text-sm italic">
                        &ldquo;Healing is not about forgetting or getting over things. It&apos;s about learning to carry your experiences with grace, 
                        wisdom, and an open heart. You are safe to feel, safe to heal, and safe to be exactly where you are.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Sharing Tab */}
              {activeTab === 'sharing' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🕊️</span>
                    Sacred Healing Circle
                  </h2>
                  
                  {/* Share Form */}
                  <div className="bg-blue-500/10 rounded-xl p-6 mb-6 border border-blue-400/20">
                    <div className="text-blue-200 text-sm mb-3">
                      💙 This is a safe space for your heart. Share only what feels comfortable and honoring to you.
                    </div>
                    <textarea
                      value={newSharing}
                      onChange={(e) => setNewSharing(e.target.value)}
                      className="w-full h-24 bg-transparent border-none text-blue-100 placeholder-blue-300/70 focus:outline-none resize-none"
                      placeholder="Share a gentle healing insight, boundary victory, or self-compassion practice... (280 characters)"
                      maxLength={280}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-blue-400 text-xs">
                        {newSharing.length}/280 characters
                      </div>
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-blue-500/30 hover:bg-blue-500/50 text-blue-100 rounded-lg transition-all duration-300 text-sm"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                  
                  {/* Sacred Sharings */}
                  <div className="space-y-4">
                    {sharings.map((sharing) => (
                      <div key={sharing.id} className="bg-white/5 rounded-xl p-6 border border-blue-300/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-blue-200 font-medium">{sharing.soulName}</div>
                          <div className="text-blue-400 text-xs">{sharing.timestamp}</div>
                        </div>
                        <p className="text-blue-100 mb-4 leading-relaxed">{sharing.content}</p>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => handleHeart(sharing.id)}
                            disabled={userInteractions.hearts.has(sharing.id)}
                            className={`flex items-center space-x-2 transition-all duration-200 hover:scale-110 transform active:scale-95 ${
                              userInteractions.hearts.has(sharing.id)
                                ? 'text-pink-400 cursor-default opacity-75'
                                : 'text-blue-300 hover:text-blue-200 cursor-pointer'
                            }`}
                            title={userInteractions.hearts.has(sharing.id) ? "You've already sent love to this sharing" : "Send gentle appreciation"}
                          >
                            <span className={`transition-transform duration-200 ${
                              userInteractions.hearts.has(sharing.id) 
                                ? 'animate-pulse text-pink-400' 
                                : 'hover:animate-pulse'
                            }`}>
                              {userInteractions.hearts.has(sharing.id) ? '💝' : '💖'}
                            </span>
                            <span className="text-sm font-medium">{sharing.hearts}</span>
                          </button>
                          <button 
                            onClick={() => handlePrayer(sharing.id)}
                            disabled={userInteractions.prayers.has(sharing.id)}
                            className={`flex items-center space-x-2 transition-all duration-200 hover:scale-110 transform active:scale-95 ${
                              userInteractions.prayers.has(sharing.id)
                                ? 'text-cyan-300 cursor-default opacity-75'
                                : 'text-blue-300 hover:text-blue-200 cursor-pointer'
                            }`}
                            title={userInteractions.prayers.has(sharing.id) ? "You've already offered prayers for this sharing" : "Offer prayer support"}
                          >
                            <span className={`transition-transform duration-200 ${
                              userInteractions.prayers.has(sharing.id) 
                                ? 'animate-pulse text-cyan-300' 
                                : 'hover:animate-pulse'
                            }`}>
                              🙏
                            </span>
                            <span className="text-sm font-medium">{sharing.prayers}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Weekly Intention Tab */}
              {activeTab === 'intention' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🙏</span>
                    Circle&apos;s Healing Light
                  </h2>
                  
                  <div className="bg-blue-500/10 rounded-xl p-6 mb-6 border border-blue-400/20">
                    <h3 className="text-blue-100 font-medium mb-3">This Week&apos;s Collective Intention</h3>
                    <div className="text-blue-200 text-lg italic mb-4">
                      &ldquo;May we hold our healing hearts with infinite tenderness&rdquo;
                    </div>
                    <div className="w-full bg-blue-500/20 rounded-full h-3 mb-4">
                      <div className="bg-blue-400 h-3 rounded-full" style={{width: '91%'}}></div>
                    </div>
                    <div className="text-blue-300 text-sm">
                      152 souls are holding this intention with you
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-blue-200 font-medium mb-3">Ways to Tend This Intention</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400">🕊️</span>
                          <span className="text-blue-200">Practice speaking to yourself as you would a beloved friend</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400">🕊️</span>
                          <span className="text-blue-200">Honor your boundaries as sacred acts of self-love</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-blue-400">🕊️</span>
                          <span className="text-blue-200">Remember that healing happens in waves, not straight lines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Peace Carrier Principles */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/30">
                <h3 className="text-blue-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🕊️</span>
                  Peace Carrier Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400">💙</span>
                    <span className="text-blue-200">Your healing matters deeply</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400">🛡️</span>
                    <span className="text-blue-200">Boundaries are acts of love</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400">🌊</span>
                    <span className="text-blue-200">Healing flows in waves</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400">🌱</span>
                    <span className="text-blue-200">Growth happens in safe spaces</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400">🕯️</span>
                    <span className="text-blue-200">Your light is never diminished</span>
                  </div>
                </div>
              </div>

              {/* Current Healing Energy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/30">
                <h3 className="text-blue-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">💙</span>
                  Current Healing Energy
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-blue-200">Self-Compassion</span>
                      <span className="text-blue-300">96%</span>
                    </div>
                    <div className="w-full bg-blue-500/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-blue-200">Boundaries</span>
                      <span className="text-blue-300">87%</span>
                    </div>
                    <div className="w-full bg-blue-500/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-blue-200">Inner Peace</span>
                      <span className="text-blue-300">93%</span>
                    </div>
                    <div className="w-full bg-blue-500/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '93%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                  <div className="text-blue-200 text-sm italic">
                    &ldquo;You are not broken and in need of fixing. You are wounded and in need of healing. There is a profound difference.&rdquo;
                  </div>
                  <div className="text-blue-400 text-xs mt-2">
                    - Peace Carrier Wisdom
                  </div>
                </div>
              </div>

              {/* Crisis Support */}
              <div className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30">
                <h3 className="text-red-200 font-medium mb-4 flex items-center">
                  <span className="mr-2">🆘</span>
                  Crisis Support
                </h3>
                <div className="space-y-3 text-sm text-red-200">
                  <p>If you&apos;re in crisis, please reach out for immediate help:</p>
                  <div className="space-y-2">
                    <div>🇺🇸 Crisis Text Line: Text HOME to 741741</div>
                    <div>🇺🇸 Suicide Prevention: 988</div>
                    <div>🌍 International: befrienders.org</div>
                  </div>
                  <p className="text-xs italic mt-4">
                    Your life has immeasurable value. You are loved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Practices */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/30">
            <h2 className="text-2xl font-light text-white mb-6 text-center">
              🕊️ Healing Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">💙</div>
                <h3 className="text-blue-100 font-medium mb-2">Self-Compassion</h3>
                <p className="text-blue-300 text-sm">Treat yourself with the same kindness you&apos;d offer a dear friend</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-blue-100 font-medium mb-2">Sacred Boundaries</h3>
                <p className="text-blue-300 text-sm">Practice saying no as an act of love and self-preservation</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🌊</div>
                <h3 className="text-blue-100 font-medium mb-2">Gentle Breathing</h3>
                <p className="text-blue-300 text-sm">Use breath as an anchor to return to safety and presence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🕊️</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>💙</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🛡️</div>
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
