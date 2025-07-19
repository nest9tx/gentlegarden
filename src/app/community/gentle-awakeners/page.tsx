'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GentleAwakenersCircle() {
  const [activeTab, setActiveTab] = useState('reflection');
  const [newSharing, setNewSharing] = useState('');
  
  // Demo data for sacred sharing
  const [sharings] = useState([
    {
      id: 1,
      soulName: 'Tender Butterfly',
      content: 'The shifts happening within me feel intense yet sacred. Learning to honor both the dissolving and the emerging with equal love.',
      hearts: 18,
      prayers: 12,
      timestamp: '1 hour ago'
    },
    {
      id: 2,
      soulName: 'Sacred Phoenix',
      content: 'Some days I don&apos;t recognize myself - in the most beautiful way. Integration is an art of patience and self-compassion.',
      hearts: 22,
      prayers: 15,
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      soulName: 'Gentle Storm',
      content: 'Grateful for this circle. The transformation process can feel isolating, but here I remember I&apos;m not alone in this sacred becoming.',
      hearts: 25,
      prayers: 19,
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 relative overflow-hidden">
      {/* Floating Transformation Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-purple-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            🦋
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 transition-all duration-300"
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
            <div className="text-8xl mb-6 animate-bounce">🦋</div>
            <h1 className="text-5xl font-light text-white mb-4">
              Gentle Awakeners Circle
            </h1>
            <p className="text-purple-200 text-xl mb-6">
              Transformation & Integration
            </p>
            
            {/* Circle Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-white">189</div>
                <div className="text-purple-300 text-sm">Transforming Souls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white">96%</div>
                <div className="text-purple-300 text-sm">Circle Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🌀</div>
                <div className="text-purple-300 text-sm">Transformation & Grace</div>
              </div>
            </div>
          </div>

          {/* Sacred Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-purple-300/30">
              <button
                onClick={() => setActiveTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'reflection' 
                    ? 'bg-purple-500/30 text-purple-100' 
                    : 'text-purple-300 hover:text-purple-200'
                }`}
              >
                🌀 Daily Reflection
              </button>
              <button
                onClick={() => setActiveTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'sharing' 
                    ? 'bg-purple-500/30 text-purple-100' 
                    : 'text-purple-300 hover:text-purple-200'
                }`}
              >
                🦋 Sacred Sharing
              </button>
              <button
                onClick={() => setActiveTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === 'intention' 
                    ? 'bg-purple-500/30 text-purple-100' 
                    : 'text-purple-300 hover:text-purple-200'
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🦋</span>
                    Today&apos;s Transformation Portal
                  </h2>
                  
                  <div className="bg-purple-500/10 rounded-xl p-6 mb-6 border border-purple-400/20">
                    <div className="text-purple-200 text-lg italic mb-4">
                      &ldquo;How are you honoring the changes moving through you?&rdquo;
                    </div>
                    <div className="text-purple-300 text-sm">
                      Reflect on the shifts, dissolutions, and emergences happening in your awakening journey.
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-purple-100 font-medium mb-3">Sacred Integration Space</h3>
                      <textarea
                        className="w-full h-32 bg-white/5 border border-purple-300/30 rounded-xl p-4 text-purple-100 placeholder-purple-300/50 focus:border-purple-300/50 focus:outline-none"
                        placeholder="What transformations are moving through you? How are you caring for yourself through the changes?"
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-purple-200 font-medium mb-3">Gentle Integration Practices</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-purple-400">•</span>
                          <span className="text-purple-200">Honor both what&apos;s dissolving and what&apos;s emerging</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-purple-400">•</span>
                          <span className="text-purple-200">Move slowly and rest often during intense shifts</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-purple-400">•</span>
                          <span className="text-purple-200">Journal about identity changes with compassion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sacred Sharing Tab */}
              {activeTab === 'sharing' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🦋</span>
                    Sacred Transformation Sharing
                  </h2>
                  
                  {/* Share Form */}
                  <div className="bg-purple-500/10 rounded-xl p-6 mb-6 border border-purple-400/20">
                    <textarea
                      value={newSharing}
                      onChange={(e) => setNewSharing(e.target.value)}
                      className="w-full h-24 bg-transparent border-none text-purple-100 placeholder-purple-300/70 focus:outline-none resize-none"
                      placeholder="Share about your transformation journey... What shifts are you experiencing? (280 characters)"
                      maxLength={280}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-purple-400 text-xs">
                        {newSharing.length}/280 characters
                      </div>
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-purple-500/30 hover:bg-purple-500/50 text-purple-100 rounded-lg transition-all duration-300 text-sm"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                  
                  {/* Sacred Sharings */}
                  <div className="space-y-4">
                    {sharings.map((sharing) => (
                      <div key={sharing.id} className="bg-white/5 rounded-xl p-6 border border-purple-300/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-purple-200 font-medium">{sharing.soulName}</div>
                          <div className="text-purple-400 text-xs">{sharing.timestamp}</div>
                        </div>
                        <p className="text-purple-100 mb-4 leading-relaxed">{sharing.content}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors">
                            <span>💝</span>
                            <span className="text-sm">{sharing.hearts}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors">
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
                  <h2 className="text-2xl font-light text-white mb-6 flex items-center">
                    <span className="mr-3">🙏</span>
                    Circle&apos;s Transformation Light
                  </h2>
                  
                  <div className="bg-purple-500/10 rounded-xl p-6 mb-6 border border-purple-400/20">
                    <h3 className="text-purple-100 font-medium mb-3">This Week&apos;s Collective Intention</h3>
                    <div className="text-purple-200 text-lg italic mb-4">
                      &ldquo;May we trust the sacred timing of our transformation&rdquo;
                    </div>
                    <div className="w-full bg-purple-500/20 rounded-full h-3 mb-4">
                      <div className="bg-purple-400 h-3 rounded-full" style={{width: '83%'}}></div>
                    </div>
                    <div className="text-purple-300 text-sm">
                      157 souls are holding this intention with you
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-purple-200 font-medium mb-3">Ways to Tend This Intention</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <span className="text-purple-400">🦋</span>
                          <span className="text-purple-200">Trust the dissolution as much as the emergence</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-purple-400">🦋</span>
                          <span className="text-purple-200">Practice patience with your integration process</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="text-purple-400">🦋</span>
                          <span className="text-purple-200">Honor your need for rest during transformation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Awakener Principles */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
                <h3 className="text-purple-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🦋</span>
                  Awakener Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-400">🌀</span>
                    <span className="text-purple-200">Transformation is sacred work</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-400">💎</span>
                    <span className="text-purple-200">Integration takes divine timing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-400">🕊️</span>
                    <span className="text-purple-200">Honor both death and rebirth</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-400">🌙</span>
                    <span className="text-purple-200">Rest is part of the process</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-400">🌸</span>
                    <span className="text-purple-200">Trust your becoming</span>
                  </div>
                </div>
              </div>

              {/* Current Transformation Energy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
                <h3 className="text-purple-100 font-medium mb-4 flex items-center">
                  <span className="mr-2">🌀</span>
                  Current Transformation Energy
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-purple-200">Integration</span>
                      <span className="text-purple-300">89%</span>
                    </div>
                    <div className="w-full bg-purple-500/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-purple-200">Grace</span>
                      <span className="text-purple-300">94%</span>
                    </div>
                    <div className="w-full bg-purple-500/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-purple-200">Trust</span>
                      <span className="text-purple-300">91%</span>
                    </div>
                    <div className="w-full bg-purple-500/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{width: '91%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                  <div className="text-purple-200 text-sm italic">
                    &ldquo;You are not becoming someone new. You are remembering who you have always been.&rdquo;
                  </div>
                  <div className="text-purple-400 text-xs mt-2">
                    - Awakener Wisdom
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Practices */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
            <h2 className="text-2xl font-light text-white mb-6 text-center">
              🦋 Transformation Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌀</div>
                <h3 className="text-purple-100 font-medium mb-2">Sacred Pause</h3>
                <p className="text-purple-300 text-sm">When feeling overwhelmed by change, pause and breathe into the transformation</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">💎</div>
                <h3 className="text-purple-100 font-medium mb-2">Integration Ritual</h3>
                <p className="text-purple-300 text-sm">Create sacred space to honor both what&apos;s ending and what&apos;s beginning</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🕊️</div>
                <h3 className="text-purple-100 font-medium mb-2">Gentle Release</h3>
                <p className="text-purple-300 text-sm">Practice letting go with love and trusting your natural unfolding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🦋</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🌀</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>💎</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🕊️</div>
      
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
