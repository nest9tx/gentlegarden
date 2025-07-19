'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DreamWeaversCircle() {
  const [activeTab, setActiveTab] = useState('reflection');
  const [newSharing, setNewSharing] = useState('');
  
  // Demo data for sacred sharing
  const [sharings] = useState([
    {
      id: 1,
      soulName: 'Night Swimmer',
      content: 'Dreamed of golden keys floating in a starry ocean. Woke knowing they represent opportunities I haven&apos;t yet recognized. Dreams are such wise teachers.',
      hearts: 26,
      prayers: 18,
      timestamp: '4 hours ago'
    },
    {
      id: 2,
      soulName: 'Moon Walker',
      content: 'Been practicing lucid dreaming. Last night I became aware I was dreaming and asked my subconscious what I needed to know. The answer was simply: &ldquo;Trust.&rdquo;',
      hearts: 32,
      prayers: 24,
      timestamp: '8 hours ago'
    },
    {
      id: 3,
      soulName: 'Symbol Keeper',
      content: 'Keep seeing spirals everywhere - in dreams, in nature, in art. Feeling called to explore what this sacred geometry is trying to tell me.',
      hearts: 29,
      prayers: 21,
      timestamp: '12 hours ago'
    }
  ]);

  const handleShare = () => {
    if (newSharing.trim()) {
      console.log('New sharing:', newSharing);
      setNewSharing('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Floating Dream Elements */}
      <div className="absolute inset-0">
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-violet-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 4}s`
            }}
          >
            🌟
          </div>
        ))}
      </div>

      {/* Dreamy Mist Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-violet-500 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-violet-300/30 rounded-xl text-violet-200 hover:bg-white/20 transition-all duration-300"
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
            <div className="text-8xl mb-6 animate-bounce">🌟</div>
            <h1 className="text-5xl font-light text-white mb-4">
              Dream Weavers Circle
            </h1>
            <p className="text-violet-200 text-xl mb-6">
              Dreams & Subconscious Wisdom
            </p>
            
            {/* Circle Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-white">134</div>
                <div className="text-violet-300 text-sm">Dream Weavers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white">96%</div>
                <div className="text-violet-300 text-sm">Circle Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🌙</div>
                <div className="text-violet-300 text-sm">Mystery & Insight</div>
              </div>
            </div>
          </div>

          {/* Sacred Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-violet-300/30">
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'reflection' 
                    ? 'bg-violet-500/30 text-violet-100' 
                    : 'text-violet-300 hover:text-violet-200'
                }`}
              >
                🌟 Daily Reflection
              </button>
              <button
                onClick={() => setActiveTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'sharing' 
                    ? 'bg-violet-500/30 text-violet-100' 
                    : 'text-violet-300 hover:text-violet-200'
                }`}
              >
                🌙 Sacred Sharing
              </button>
              <button
                onClick={() => setActiveTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'intention' 
                    ? 'bg-violet-500/30 text-violet-100' 
                    : 'text-violet-300 hover:text-violet-200'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-violet-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🌟</span>
                    Today&apos;s Dream Portal
                  </h2>
                  
                  <div className="bg-violet-500/10 rounded-xl p-6 mb-6 border border-violet-400/20">
                    <div className="text-violet-200 text-lg italic mb-4">
                      &ldquo;What symbols or messages have been appearing in your dreamscape?&rdquo;
                    </div>
                    <div className="text-violet-300 text-sm">
                      Reflect on the dreams, symbols, and subconscious wisdom that have been visiting you.
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-violet-100 font-medium mb-3">Dream Journal Space</h3>
                      <textarea
                        className="w-full h-32 bg-white/5 border border-violet-300/30 rounded-xl p-4 text-violet-100 placeholder-violet-300/50 focus:border-violet-300/50 focus:outline-none"
                        placeholder="Record your dreams, symbols, or subconscious insights... What is your inner wisdom revealing?"
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-violet-200 font-medium mb-3">Dream Work Practices</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-violet-400">•</span>
                          <span className="text-violet-200">Keep a dream journal by your bedside</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-violet-400">•</span>
                          <span className="text-violet-200">Set intention before sleep to remember dreams</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-violet-400">•</span>
                          <span className="text-violet-200">Notice recurring symbols and themes</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-400/20">
                      <h4 className="text-violet-200 font-medium mb-3">🌟 Dream Wisdom</h4>
                      <p className="text-violet-200 text-sm italic">
                        &ldquo;Dreams are letters from our unconscious, written in the language of symbols and metaphor. 
                        They offer guidance, healing, and wisdom that our waking mind cannot access. 
                        Every dream is a sacred gift from the depths of your being.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Sharing Tab */}
              {activeTab === 'sharing' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-violet-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🌙</span>
                    Sacred Dream Sharing
                  </h2>
                  
                  {/* Share Form */}
                  <div className="bg-violet-500/10 rounded-xl p-6 mb-6 border border-violet-400/20">
                    <div className="text-violet-200 text-sm mb-3">
                      🌟 Share your dreams, lucid experiences, symbols, or subconscious insights
                    </div>
                    <textarea
                      value={newSharing}
                      onChange={(e) => setNewSharing(e.target.value)}
                      className="w-full h-24 bg-transparent border-none text-violet-100 placeholder-violet-300/70 focus:outline-none resize-none"
                      placeholder="Share a dream, symbol, or subconscious wisdom that's emerged... (280 characters)"
                      maxLength={280}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-violet-400 text-xs">
                        {newSharing.length}/280 characters
                      </div>
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-violet-500/30 hover:bg-violet-500/50 text-violet-100 rounded-lg transition-all duration-300 text-sm"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                  
                  {/* Sacred Sharings */}
                  <div className="space-y-4">
                    {sharings.map((sharing) => (
                      <div key={sharing.id} className="bg-white/5 rounded-xl p-6 border border-violet-300/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-violet-200 font-medium">{sharing.soulName}</div>
                          <div className="text-violet-400 text-xs">{sharing.timestamp}</div>
                        </div>
                        <p className="text-violet-100 mb-4 leading-relaxed">{sharing.content}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-violet-300 hover:text-violet-200 transition-colors">
                            <span>💝</span>
                            <span className="text-sm">{sharing.hearts}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-violet-300 hover:text-violet-200 transition-colors">
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-violet-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🙏</span>
                    Circle&apos;s Dream Light
                  </h2>
                  
                  <div className="bg-violet-500/10 rounded-xl p-6 mb-6 border border-violet-400/20">
                    <h3 className="text-violet-100 font-medium mb-3">This Week&apos;s Collective Intention</h3>
                    <div className="text-violet-200 text-lg italic mb-4">
                      &ldquo;May we be open to the wisdom that dreams through us&rdquo;
                    </div>
                    <div className="w-full bg-violet-500/20 rounded-full h-3 mb-4">
                      <div className="bg-violet-400 h-3 rounded-full" style={{width: '88%'}}></div>
                    </div>
                    <div className="text-violet-300 text-sm">
                      118 souls are holding this intention with you
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-violet-200 font-medium mb-3">Ways to Tend This Intention</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-violet-400">🌟</span>
                          <span className="text-violet-200">Honor your dreams as sacred guidance</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-violet-400">🌟</span>
                          <span className="text-violet-200">Practice lucid dreaming and dream recall</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-violet-400">🌟</span>
                          <span className="text-violet-200">Trust the symbols and messages that emerge</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Dream Weaver Principles */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-violet-300/30">
                <h3 className="text-violet-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌟</span>
                  Dream Weaver Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-violet-400">🌙</span>
                    <span className="text-violet-200">Dreams are sacred guidance</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-violet-400">🔮</span>
                    <span className="text-violet-200">Symbols speak soul language</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-violet-400">🌊</span>
                    <span className="text-violet-200">Subconscious holds wisdom</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-violet-400">✨</span>
                    <span className="text-violet-200">Lucidity expands consciousness</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-violet-400">🗝️</span>
                    <span className="text-violet-200">Dreams unlock inner mysteries</span>
                  </div>
                </div>
              </div>

              {/* Current Dream Energy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-violet-300/30">
                <h3 className="text-violet-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌙</span>
                  Current Dream Energy
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-violet-200">Lucidity</span>
                      <span className="text-violet-300">89%</span>
                    </div>
                    <div className="w-full bg-violet-500/20 rounded-full h-2">
                      <div className="bg-violet-400 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-violet-200">Recall</span>
                      <span className="text-violet-300">94%</span>
                    </div>
                    <div className="w-full bg-violet-500/20 rounded-full h-2">
                      <div className="bg-violet-400 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-violet-200">Insight</span>
                      <span className="text-violet-300">97%</span>
                    </div>
                    <div className="w-full bg-violet-500/20 rounded-full h-2">
                      <div className="bg-violet-400 h-2 rounded-full" style={{width: '97%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-violet-500/10 rounded-lg border border-violet-400/20">
                  <div className="text-violet-200 text-sm italic">
                    &ldquo;In dreams, we remember what the waking world has forgotten. We are infinite beings, limitless and eternal.&rdquo;
                  </div>
                  <div className="text-violet-400 text-xs mt-2">
                    - Dream Weaver Wisdom
                  </div>
                </div>
              </div>

              {/* Moon Phase & Dream Guide */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-violet-300/30">
                <h3 className="text-violet-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌙</span>
                  Dream Guidance
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-violet-200">Moon Phase</span>
                    <span className="text-violet-300">Waning Gibbous 🌖</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-violet-200">Dream Energy</span>
                    <span className="text-violet-300">Release & Insight</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-violet-200">Best for</span>
                    <span className="text-violet-300">Shadow Work Dreams</span>
                  </div>
                  <div className="mt-4 p-3 bg-violet-500/10 rounded-lg">
                    <div className="text-violet-200 text-xs italic">
                      &ldquo;Waning moon dreams often bring clarity about what needs to be released or transformed.&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Practices */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-violet-300/30">
            <h2 className="text-2xl font-light text-white mb-6 text-center">
              🌟 Dream Weaving Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌙</div>
                <h3 className="text-violet-100 font-medium mb-2">Dream Journaling</h3>
                <p className="text-violet-300 text-sm">Record dreams immediately upon waking to strengthen recall and decode symbols</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-violet-100 font-medium mb-2">Lucid Dreaming</h3>
                <p className="text-violet-300 text-sm">Practice becoming conscious within dreams to explore and receive guidance</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🔮</div>
                <h3 className="text-violet-100 font-medium mb-2">Symbol Work</h3>
                <p className="text-violet-300 text-sm">Study and interpret the symbolic language of your subconscious mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌟</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🌙</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🔮</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>✨</div>
      
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
