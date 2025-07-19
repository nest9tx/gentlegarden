'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SoftBloomersCircle() {
  const [activeTab, setActiveTab] = useState('reflection');
  const [newSharing, setNewSharing] = useState('');
  
  // Demo data for sacred sharing
  const [sharings] = useState([
    {
      id: 1,
      soulName: 'Gentle Surrender',
      content: 'Learning to release my need to control every outcome. Today I practiced saying &ldquo;I trust&rdquo; instead of &ldquo;I need to know.&rdquo;',
      hearts: 34,
      prayers: 28,
      timestamp: '1 hour ago'
    },
    {
      id: 2,
      soulName: 'Soft Petals',
      content: 'The most beautiful things in my life came when I stopped forcing them. Divine timing feels like a gentle river carrying me home.',
      hearts: 41,
      prayers: 32,
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      soulName: 'Tender Flow',
      content: 'Instead of pushing against closed doors, I&apos;m learning to feel for the ones that open effortlessly. What a difference it makes.',
      hearts: 38,
      prayers: 30,
      timestamp: '8 hours ago'
    }
  ]);

  const handleShare = () => {
    if (newSharing.trim()) {
      console.log('New sharing:', newSharing);
      setNewSharing('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-fuchsia-900 relative overflow-hidden">
      {/* Floating Blossom Elements */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-pink-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-pink-300/30 rounded-xl text-pink-200 hover:bg-white/20 transition-all duration-300"
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
            <div className="text-8xl mb-6 animate-bounce">🌸</div>
            <h1 className="text-5xl font-light text-white mb-4">
              Soft Bloomers Circle
            </h1>
            <p className="text-pink-200 text-xl mb-6">
              Surrender & Divine Timing
            </p>
            
            {/* Circle Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-white">298</div>
                <div className="text-pink-300 text-sm">Flowing Souls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white">94%</div>
                <div className="text-pink-300 text-sm">Circle Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🌊</div>
                <div className="text-pink-300 text-sm">Trust & Flow</div>
              </div>
            </div>
          </div>

          {/* Sacred Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-pink-300/30">
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'reflection' 
                    ? 'bg-pink-500/30 text-pink-100' 
                    : 'text-pink-300 hover:text-pink-200'
                }`}
              >
                🌸 Daily Reflection
              </button>
              <button
                onClick={() => setActiveTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'sharing' 
                    ? 'bg-pink-500/30 text-pink-100' 
                    : 'text-pink-300 hover:text-pink-200'
                }`}
              >
                🌊 Sacred Sharing
              </button>
              <button
                onClick={() => setActiveTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'intention' 
                    ? 'bg-pink-500/30 text-pink-100' 
                    : 'text-pink-300 hover:text-pink-200'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🌸</span>
                    Today&apos;s Gentle Flow
                  </h2>
                  
                  <div className="bg-pink-500/10 rounded-xl p-6 mb-6 border border-pink-400/20">
                    <div className="text-pink-200 text-lg italic mb-4">
                      &ldquo;Where in your life are you being invited to soften and trust?&rdquo;
                    </div>
                    <div className="text-pink-300 text-sm">
                      Reflect on areas where surrender might serve you better than pushing or forcing.
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-pink-100 font-medium mb-3">Sacred Surrender Space</h3>
                      <textarea
                        className="w-full h-32 bg-white/5 border border-pink-300/30 rounded-xl p-4 text-pink-100 placeholder-pink-300/50 focus:border-pink-300/50 focus:outline-none"
                        placeholder="What are you ready to release? Where can you practice trust over control?"
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-pink-200 font-medium mb-3">Divine Timing Practices</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-pink-400">•</span>
                          <span className="text-pink-200">Notice when you&apos;re forcing vs. allowing</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-pink-400">•</span>
                          <span className="text-pink-200">Practice the phrase &ldquo;I trust divine timing&rdquo;</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-pink-400">•</span>
                          <span className="text-pink-200">Feel for doors that open easily vs. those you must push</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-400/20">
                      <h4 className="text-pink-200 font-medium mb-3">🌸 Gentle Wisdom</h4>
                      <p className="text-pink-200 text-sm italic">
                        &ldquo;A flower does not force itself to bloom. It trusts the sun, the rain, the soil, and its own inner timing. 
                        Like the flower, you too have an innate wisdom about when to open, when to rest, when to reach toward the light.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Sharing Tab */}
              {activeTab === 'sharing' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🌊</span>
                    Sacred Flow Sharing
                  </h2>
                  
                  {/* Share Form */}
                  <div className="bg-pink-500/10 rounded-xl p-6 mb-6 border border-pink-400/20">
                    <div className="text-pink-200 text-sm mb-3">
                      🌸 Share your surrender victories, divine timing stories, or trust practices
                    </div>
                    <textarea
                      value={newSharing}
                      onChange={(e) => setNewSharing(e.target.value)}
                      className="w-full h-24 bg-transparent border-none text-pink-100 placeholder-pink-300/70 focus:outline-none resize-none"
                      placeholder="Share a moment of beautiful surrender or divine timing... (280 characters)"
                      maxLength={280}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-pink-400 text-xs">
                        {newSharing.length}/280 characters
                      </div>
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-pink-500/30 hover:bg-pink-500/50 text-pink-100 rounded-lg transition-all duration-300 text-sm"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                  
                  {/* Sacred Sharings */}
                  <div className="space-y-4">
                    {sharings.map((sharing) => (
                      <div key={sharing.id} className="bg-white/5 rounded-xl p-6 border border-pink-300/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-pink-200 font-medium">{sharing.soulName}</div>
                          <div className="text-pink-400 text-xs">{sharing.timestamp}</div>
                        </div>
                        <p className="text-pink-100 mb-4 leading-relaxed">{sharing.content}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-pink-300 hover:text-pink-200 transition-colors">
                            <span>💝</span>
                            <span className="text-sm">{sharing.hearts}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-pink-300 hover:text-pink-200 transition-colors">
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🙏</span>
                    Circle&apos;s Flow Light
                  </h2>
                  
                  <div className="bg-pink-500/10 rounded-xl p-6 mb-6 border border-pink-400/20">
                    <h3 className="text-pink-100 font-medium mb-3">This Week&apos;s Collective Intention</h3>
                    <div className="text-pink-200 text-lg italic mb-4">
                      &ldquo;May we trust the river of life to carry us exactly where we need to be&rdquo;
                    </div>
                    <div className="w-full bg-pink-500/20 rounded-full h-3 mb-4">
                      <div className="bg-pink-400 h-3 rounded-full" style={{width: '89%'}}></div>
                    </div>
                    <div className="text-pink-300 text-sm">
                      265 souls are holding this intention with you
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-pink-200 font-medium mb-3">Ways to Tend This Intention</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-pink-400">🌸</span>
                          <span className="text-pink-200">Release the need to control outcomes</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-pink-400">🌸</span>
                          <span className="text-pink-200">Trust your natural rhythms and cycles</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-pink-400">🌸</span>
                          <span className="text-pink-200">Allow things to unfold in perfect timing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Soft Bloomer Principles */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/30">
                <h3 className="text-pink-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌸</span>
                  Soft Bloomer Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-pink-400">🌊</span>
                    <span className="text-pink-200">Flow is stronger than force</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-pink-400">⏰</span>
                    <span className="text-pink-200">Divine timing is perfect timing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-pink-400">🌺</span>
                    <span className="text-pink-200">Surrender opens new possibilities</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-pink-400">🕊️</span>
                    <span className="text-pink-200">Trust is the highest vibration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-pink-400">🌙</span>
                    <span className="text-pink-200">Rest is part of the cycle</span>
                  </div>
                </div>
              </div>

              {/* Current Flow Energy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/30">
                <h3 className="text-pink-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌊</span>
                  Current Flow Energy
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-pink-200">Surrender</span>
                      <span className="text-pink-300">92%</span>
                    </div>
                    <div className="w-full bg-pink-500/20 rounded-full h-2">
                      <div className="bg-pink-400 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-pink-200">Trust</span>
                      <span className="text-pink-300">97%</span>
                    </div>
                    <div className="w-full bg-pink-500/20 rounded-full h-2">
                      <div className="bg-pink-400 h-2 rounded-full" style={{width: '97%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-pink-200">Flow</span>
                      <span className="text-pink-300">95%</span>
                    </div>
                    <div className="w-full bg-pink-500/20 rounded-full h-2">
                      <div className="bg-pink-400 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-pink-500/10 rounded-lg border border-pink-400/20">
                  <div className="text-pink-200 text-sm italic">
                    &ldquo;Life is like a river. When you fight the current, you exhaust yourself. When you surrender to the flow, you discover where it wants to take you.&rdquo;
                  </div>
                  <div className="text-pink-400 text-xs mt-2">
                    - Soft Bloomer Wisdom
                  </div>
                </div>
              </div>

              {/* Divine Timing Oracle */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/30">
                <h3 className="text-pink-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">⏰</span>
                  Divine Timing Oracle
                </h3>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌸</div>
                  <div className="text-pink-200 text-sm italic mb-3">
                    &ldquo;Perfect timing is unfolding&rdquo;
                  </div>
                  <div className="text-pink-300 text-xs">
                    Trust the process. What&apos;s meant for you will not pass you by.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Practices */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/30">
            <h2 className="text-2xl font-light text-white mb-6 text-center">
              🌸 Surrender & Flow Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌊</div>
                <h3 className="text-pink-100 font-medium mb-2">Sacred Release</h3>
                <p className="text-pink-300 text-sm">Practice letting go of outcomes and trusting life&apos;s natural flow</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="text-pink-100 font-medium mb-2">Divine Timing</h3>
                <p className="text-pink-300 text-sm">Align with natural rhythms and trust perfect unfolding</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🌺</div>
                <h3 className="text-pink-100 font-medium mb-2">Gentle Allowing</h3>
                <p className="text-pink-300 text-sm">Open to receiving what wants to come through you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌸</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🌊</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>⏰</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🌺</div>
      
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
