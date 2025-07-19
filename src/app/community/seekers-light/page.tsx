'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SeekersLightCircle() {
  const [activeTab, setActiveTab] = useState('reflection');
  const [newSharing, setNewSharing] = useState('');
  
  // Demo data for sacred sharing with interactive state
  const [sharings, setSharings] = useState([
    {
      id: 1,
      soulName: 'Gentle Dawn',
      content: 'Just started my meditation practice and felt such peace today. Something inside me knows this is the beginning of something beautiful.',
      hearts: 12,
      prayers: 8,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      soulName: 'Quiet Seeker',
      content: 'Reading about chakras for the first time - the idea that we have energy centers feels so natural and true. My heart chakra tingles when I think about it.',
      hearts: 9,
      prayers: 6,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      soulName: 'Tender Bloom',
      content: 'I used to think spirituality was just religion, but I&apos;m discovering it&apos;s about connection - to myself, nature, and something greater.',
      hearts: 15,
      prayers: 11,
      timestamp: '1 day ago'
    }
  ]);

  const handleShare = () => {
    if (newSharing.trim()) {
      // In real implementation, this would post to backend
      console.log('New sharing:', newSharing);
      setNewSharing('');
    }
  };

  // Handle gentle heart giving
  const handleHeart = (sharingId: number) => {
    setSharings(prev => prev.map(sharing => 
      sharing.id === sharingId 
        ? { ...sharing, hearts: sharing.hearts + 1 }
        : sharing
    ));
    // Gentle haptic feedback for mobile users
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  // Handle gentle prayer support
  const handlePrayer = (sharingId: number) => {
    setSharings(prev => prev.map(sharing => 
      sharing.id === sharingId 
        ? { ...sharing, prayers: sharing.prayers + 1 }
        : sharing
    ));
    // Gentle haptic feedback for mobile users
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-amber-900 relative overflow-hidden">
      {/* Floating Sunlight Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ☀️
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-yellow-300/30 rounded-xl text-yellow-200 hover:bg-white/20 transition-all duration-300"
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
            <div className="text-8xl mb-6 animate-bounce">🌻</div>
            <h1 className="text-5xl font-light text-white mb-4">
              Seekers of Light Circle
            </h1>
            <p className="text-yellow-200 text-xl mb-6">
              First Steps & Gentle Beginnings
            </p>
            
            {/* Circle Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-white">234</div>
                <div className="text-yellow-300 text-sm">Gentle Souls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white">92%</div>
                <div className="text-yellow-300 text-sm">Circle Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🌱</div>
                <div className="text-yellow-300 text-sm">Curiosity & Wonder</div>
              </div>
            </div>
          </div>

          {/* Sacred Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-yellow-300/30">
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'reflection' 
                    ? 'bg-yellow-500/30 text-yellow-100' 
                    : 'text-yellow-300 hover:text-yellow-200'
                }`}
              >
                🌱 Daily Reflection
              </button>
              <button
                onClick={() => setActiveTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'sharing' 
                    ? 'bg-yellow-500/30 text-yellow-100' 
                    : 'text-yellow-300 hover:text-yellow-200'
                }`}
              >
                💫 Sacred Sharing
              </button>
              <button
                onClick={() => setActiveTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'intention' 
                    ? 'bg-yellow-500/30 text-yellow-100' 
                    : 'text-yellow-300 hover:text-yellow-200'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🌻</span>
                    Today&apos;s Light Communion
                  </h2>
                  
                  <div className="bg-yellow-500/10 rounded-xl p-6 mb-6 border border-yellow-400/20">
                    <div className="text-yellow-200 text-lg italic mb-4">
                      &ldquo;What first stirred your soul to seek something deeper?&rdquo;
                    </div>
                    <div className="text-yellow-300 text-sm">
                      Reflect on the moment your spiritual journey began - what called to you?
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-yellow-100 font-medium mb-3">Sacred Journal Space</h3>
                      <textarea
                        className="w-full h-32 bg-white/5 border border-yellow-300/30 rounded-xl p-4 text-yellow-100 placeholder-yellow-300/50 focus:border-yellow-300/50 focus:outline-none"
                        placeholder="Share your heart&apos;s whispers here... What first sparked your curiosity about the spiritual path?"
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-yellow-200 font-medium mb-3">Gentle Practices for New Seekers</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-yellow-400">•</span>
                          <span className="text-yellow-200">Spend 5 minutes in nature, simply observing</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-yellow-400">•</span>
                          <span className="text-yellow-200">Practice gentle breathing - in for 4, out for 6</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-yellow-400">•</span>
                          <span className="text-yellow-200">Ask yourself: &ldquo;What brings me peace?&rdquo;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Sharing Tab */}
              {activeTab === 'sharing' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">💫</span>
                    Sacred Circle Sharing
                  </h2>
                  
                  {/* Share Form */}
                  <div className="bg-yellow-500/10 rounded-xl p-6 mb-6 border border-yellow-400/20">
                    <textarea
                      value={newSharing}
                      onChange={(e) => setNewSharing(e.target.value)}
                      className="w-full h-24 bg-transparent border-none text-yellow-100 placeholder-yellow-300/70 focus:outline-none resize-none"
                      placeholder="Share a gentle insight from your awakening journey... (280 characters)"
                      maxLength={280}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-yellow-400 text-xs">
                        {newSharing.length}/280 characters
                      </div>
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-yellow-500/30 hover:bg-yellow-500/50 text-yellow-100 rounded-lg transition-all duration-300 text-sm"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                  
                  {/* Sacred Sharings */}
                  <div className="space-y-4">
                    {sharings.map((sharing) => (
                      <div key={sharing.id} className="bg-white/5 rounded-xl p-6 border border-yellow-300/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-yellow-200 font-medium">{sharing.soulName}</div>
                          <div className="text-yellow-400 text-xs">{sharing.timestamp}</div>
                        </div>
                        <p className="text-yellow-100 mb-4 leading-relaxed">{sharing.content}</p>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => handleHeart(sharing.id)}
                            className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 transition-all duration-200 hover:scale-110 transform active:scale-95"
                            title="Send gentle appreciation"
                          >
                            <span className="transition-transform duration-200 hover:animate-pulse">💝</span>
                            <span className="text-sm font-medium">{sharing.hearts}</span>
                          </button>
                          <button 
                            onClick={() => handlePrayer(sharing.id)}
                            className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 transition-all duration-200 hover:scale-110 transform active:scale-95"
                            title="Offer prayer support"
                          >
                            <span className="transition-transform duration-200 hover:animate-pulse">🙏</span>
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🙏</span>
                    Circle&apos;s Weekly Light
                  </h2>
                  
                  <div className="bg-yellow-500/10 rounded-xl p-6 mb-6 border border-yellow-400/20">
                    <h3 className="text-yellow-100 font-medium mb-3">This Week&apos;s Collective Intention</h3>
                    <div className="text-yellow-200 text-lg italic mb-4">
                      &ldquo;May we trust the gentle stirrings of our awakening hearts&rdquo;
                    </div>
                    <div className="w-full bg-yellow-500/20 rounded-full h-3 mb-4">
                      <div className="bg-yellow-400 h-3 rounded-full" style={{width: '78%'}}></div>
                    </div>
                    <div className="text-yellow-300 text-sm">
                      182 souls are holding this intention with you
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-yellow-200 font-medium mb-3">Ways to Tend This Intention</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-yellow-400">🌱</span>
                          <span className="text-yellow-200">Notice what draws your curiosity each day</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-yellow-400">🌱</span>
                          <span className="text-yellow-200">Trust your first spiritual instincts</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-yellow-400">🌱</span>
                          <span className="text-yellow-200">Be gentle with your awakening process</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Seeker Principles */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-300/30">
                <h3 className="text-yellow-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌻</span>
                  Seeker Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-400">✨</span>
                    <span className="text-yellow-200">Curiosity is sacred medicine</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-400">🌱</span>
                    <span className="text-yellow-200">Every question opens new doors</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-400">💫</span>
                    <span className="text-yellow-200">Trust your inner knowing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-400">🌞</span>
                    <span className="text-yellow-200">Seek with an open heart</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-400">🦋</span>
                    <span className="text-yellow-200">Honor your unique journey</span>
                  </div>
                </div>
              </div>

              {/* Current Light Energy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-300/30">
                <h3 className="text-yellow-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">☀️</span>
                  Current Light Energy
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-yellow-200">Wonder</span>
                      <span className="text-yellow-300">95%</span>
                    </div>
                    <div className="w-full bg-yellow-500/20 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-yellow-200">Openness</span>
                      <span className="text-yellow-300">88%</span>
                    </div>
                    <div className="w-full bg-yellow-500/20 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-yellow-200">Trust</span>
                      <span className="text-yellow-300">92%</span>
                    </div>
                    <div className="w-full bg-yellow-500/20 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
                  <div className="text-yellow-200 text-sm italic">
                    &ldquo;The light you seek is already within you. Trust the gentle stirrings of your awakening soul.&rdquo;
                  </div>
                  <div className="text-yellow-400 text-xs mt-2">
                    - Seeker Wisdom
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Frequencies */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-300/30">
            <h2 className="text-2xl font-light text-white mb-6 text-center">
              🌻 Seeker Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌅</div>
                <h3 className="text-yellow-100 font-medium mb-2">Morning Wonder</h3>
                <p className="text-yellow-300 text-sm">Start each day by asking: &ldquo;What wants to be discovered today?&rdquo;</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-yellow-100 font-medium mb-2">Gentle Seeking</h3>
                <p className="text-yellow-300 text-sm">Follow your curiosity with patience and trust your inner guidance</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="text-yellow-100 font-medium mb-2">Sacred Questions</h3>
                <p className="text-yellow-300 text-sm">Ask meaningful questions and listen deeply to the responses that arise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌻</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🌞</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>✨</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🌱</div>
      
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
