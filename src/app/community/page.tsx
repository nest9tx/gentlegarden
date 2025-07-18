'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CommunityCircle() {
  const [pulsePhase, setPulsePhase] = useState(0);
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);
  
  const sacredCircles = [
    { 
      id: 'seekers-light',
      symbol: '🌻', 
      name: 'Seekers of Light',
      title: 'First Steps & Gentle Beginnings',
      description: 'A tender space for those taking their first sacred steps into awakening',
      energy: 'Curiosity & Wonder',
      participants: 234,
      todaysPrompt: 'What first stirred your soul to seek something deeper?',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      id: 'gentle-awakeners',
      symbol: '🦋', 
      name: 'Gentle Awakeners',
      title: 'Transformation & Integration',
      description: 'Sacred support for souls experiencing shifts and spiritual emergence',
      energy: 'Transformation & Grace',
      participants: 189,
      todaysPrompt: 'How are you honoring the changes moving through you?',
      color: 'from-purple-400 to-pink-400'
    },
    { 
      id: 'sacred-gardeners',
      symbol: '🌿', 
      name: 'Sacred Gardeners',
      title: 'Tending Practice & Growth',
      description: 'Daily cultivation of spiritual practices and gentle growth',
      energy: 'Devotion & Nurturing',
      participants: 156,
      todaysPrompt: 'What seeds are you lovingly tending in your inner garden?',
      color: 'from-green-400 to-emerald-400'
    },
    { 
      id: 'peace-carriers',
      symbol: '🕊️', 
      name: 'Peace Carriers',
      title: 'Healing & Restoration',
      description: 'Gentle sanctuary for healing hearts and trauma-informed spiritual support',
      energy: 'Healing & Compassion',
      participants: 167,
      todaysPrompt: 'What small act of self-compassion can you offer yourself today?',
      color: 'from-blue-400 to-cyan-400'
    },
    { 
      id: 'star-rememberers',
      symbol: '✨', 
      name: 'Star Rememberers',
      title: 'Cosmic Consciousness & Mystery',
      description: 'For deeper spiritual experiences, dreams, and mystical awareness',
      energy: 'Mystery & Expansion',
      participants: 203,
      todaysPrompt: 'What messages is the universe whispering to you lately?',
      color: 'from-indigo-400 to-purple-400'
    },
    { 
      id: 'soft-bloomers',
      symbol: '🌸', 
      name: 'Soft Bloomers',
      title: 'Surrender & Divine Timing',
      description: 'Learning to trust the flow, embrace divine timing, and gentle surrender',
      energy: 'Trust & Flow',
      participants: 298,
      todaysPrompt: 'Where in your life are you being invited to soften and trust?',
      color: 'from-pink-400 to-rose-400'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Sacred Circle Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 border border-purple-300 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
        <div className="absolute w-80 h-80 border border-indigo-300 rounded-full animate-spin" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
        <div className="absolute w-64 h-64 border border-blue-300 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
      </div>

      {/* Floating Community Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            💫
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/garden"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-purple-200 hover:bg-white/20 transition-all duration-300"
        >
          <span>←</span>
          <span>Return to Garden</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl">
          
          {/* Sacred Garden Symbol */}
          <div className="text-6xl mb-6 animate-bounce">🌻</div>
          
          <h1 className="text-4xl font-light text-white mb-6">
            Sacred Garden Circles
          </h1>
          
          <p className="text-purple-200 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Gentle spaces for awakening souls to share, witness, and grow together in sacred communion.
          </p>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-8"></div>
          
          {/* Sacred Garden Circles Visualization */}
          <div className="relative mb-12">
            <div className="flex items-center justify-center">
              <div className="relative w-96 h-96">
                {/* Center Sacred Heart */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full transition-all duration-3000"
                  style={{ 
                    boxShadow: '0 0 60px rgba(139, 92, 246, 0.6)',
                    transition: 'all 3s ease-in-out'
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/20 animate-pulse flex items-center justify-center">
                    <div className="text-2xl">💝</div>
                  </div>
                </div>

                {/* Sacred Garden Circles */}
                {sacredCircles.map((circle, index) => {
                  const angle = (index * 360) / sacredCircles.length;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * 140;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * 140;
                  
                  return (
                    <div
                      key={circle.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 cursor-pointer group"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        opacity: pulsePhase === index ? 1 : 0.7,
                        scale: pulsePhase === index ? 1.3 : 1
                      }}
                      onClick={() => setSelectedCircle(circle.id)}
                    >
                      <div className="relative">
                        <div className="text-4xl group-hover:animate-bounce">{circle.symbol}</div>
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${circle.color} opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sacred Garden Circles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sacredCircles.map((circle, index) => (
              <div 
                key={circle.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 transition-all duration-500 hover:bg-white/15 cursor-pointer group ${
                  pulsePhase === index ? 'bg-white/20 border-purple-300/50 shadow-lg' : ''
                }`}
                onClick={() => setSelectedCircle(circle.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl group-hover:animate-pulse">{circle.symbol}</div>
                    <div>
                      <div className="text-purple-100 font-medium">{circle.name}</div>
                      <div className="text-purple-300 text-sm">{circle.title}</div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-400">
                    {circle.participants} seekers
                  </div>
                </div>
                
                <p className="text-purple-200 text-sm mb-4 leading-relaxed">
                  {circle.description}
                </p>
                
                <div className="border-t border-purple-300/20 pt-4">
                  <div className="text-xs text-purple-300 mb-2">Today&apos;s Sacred Reflection:</div>
                  <div className="text-sm text-purple-100 italic">
                    &ldquo;{circle.todaysPrompt}&rdquo;
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-purple-400">
                    Energy: {circle.energy}
                  </div>
                  <div className="text-xs text-purple-300 hover:text-purple-200 transition-colors">
                    Enter Circle →
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sacred Community Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-purple-100 font-medium mb-2">Sacred Witnessing</h3>
                <p className="text-purple-300 text-sm">Share your journey insights and receive gentle presence from fellow seekers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🙏</div>
                <h3 className="text-purple-100 font-medium mb-2">Circle Intentions</h3>
                <p className="text-purple-300 text-sm">Join weekly collective intentions and sacred energy holding</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💫</div>
                <h3 className="text-purple-100 font-medium mb-2">Gentle Guidance</h3>
                <p className="text-purple-300 text-sm">Daily reflection prompts and soft spiritual support</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-purple-300 text-sm italic mb-4">
                &ldquo;In sacred circles, we remember that we are not alone on this journey. 
                Each soul&apos;s light illuminates the path for all.&rdquo;
              </div>
              <div className="text-purple-400 text-xs">
                ✧ Opening in divine timing - when hearts are ready to gather ✧
              </div>
            </div>
          </div>

          {/* Selected Circle Details */}
          {selectedCircle && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
              {(() => {
                const circle = sacredCircles.find(c => c.id === selectedCircle);
                if (!circle) return null;
                
                return (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{circle.symbol}</div>
                        <div>
                          <h3 className="text-2xl font-light text-white">{circle.name}</h3>
                          <div className="text-purple-300">{circle.title}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedCircle(null)}
                        className="text-purple-300 hover:text-purple-200 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-purple-100 font-medium mb-3">Circle Energy</h4>
                        <p className="text-purple-200 mb-6">{circle.description}</p>
                        
                        <div className="bg-white/5 rounded-xl p-4 mb-4">
                          <div className="text-purple-300 text-sm mb-2">Today&apos;s Sacred Reflection:</div>
                          <div className="text-purple-100 italic">
                            &ldquo;{circle.todaysPrompt}&rdquo;
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-purple-400">
                            {circle.participants} awakening souls
                          </div>
                          <div className="text-purple-300">
                            Energy: {circle.energy}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-purple-100 font-medium mb-3">How This Circle Gathers</h4>
                        <div className="space-y-4 text-sm">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-200 font-medium mb-1">Daily Reflection</div>
                            <div className="text-purple-300">Gentle prompts for personal contemplation</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-200 font-medium mb-1">Sacred Sharing</div>
                            <div className="text-purple-300">Optional brief insights (no advice, just witnessing)</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-200 font-medium mb-1">Weekly Intention</div>
                            <div className="text-purple-300">Collective energy holding and prayer</div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-400/20">
                          <div className="text-purple-200 text-sm font-medium mb-2">
                            🌸 Sacred Circle Guidelines
                          </div>
                          <div className="text-purple-300 text-xs space-y-1">
                            <div>• Witness with love, respond with presence</div>
                            <div>• Share from the heart, not the mind</div>
                            <div>• Honor all paths and sacred timing</div>
                            <div>• Hold space without trying to fix</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Sacred Navigation */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/garden-guide"
              className="px-6 py-3 bg-purple-500/30 hover:bg-purple-500/50 text-purple-100 rounded-xl transition-all duration-300 text-sm"
            >
              Commune with Garden Guide
            </Link>
            <Link 
              href="/garden"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-purple-200 rounded-xl transition-all duration-300 text-sm"
            >
              Return to Sacred Garden
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Garden Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌻</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🦋</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>�</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🌸</div>
      <div className="absolute bottom-20 left-1/2 text-2xl animate-float" style={{animationDelay: '4s'}}>✨</div>
      <div className="absolute top-1/4 right-10 text-2xl animate-float" style={{animationDelay: '5s'}}>�️</div>
      
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
