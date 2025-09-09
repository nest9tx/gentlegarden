'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SacredNavigation from '@/components/SacredNavigation';

export default function SacredSanctuaries() {
  const [pulsePhase, setPulsePhase] = useState(0);
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);
  
  const sacredSanctuaries = [
    { 
      id: 'morning-light',
      symbol: '🌅', 
      name: 'Morning Light Sanctuary',
      title: 'Sacred Dawn Practices',
      description: 'Begin each day in gentle communion with your awakening soul',
      energy: 'Clarity & New Beginnings',
      practiceType: 'Daily Morning Ritual',
      duration: '5-15 minutes',
      todaysInvitation: 'What wants to be born through you today?',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      id: 'heart-temple',
      symbol: '💖', 
      name: 'Heart Temple Sanctuary',
      title: 'Sacred Heart Opening',
      description: 'Gentle practices for healing, feeling, and opening to love',
      energy: 'Compassion & Healing',
      practiceType: 'Heart-Centered Meditation',
      duration: '10-20 minutes',
      todaysInvitation: 'What is your heart longing to feel today?',
      color: 'from-pink-400 to-rose-400'
    },
    { 
      id: 'wisdom-grove',
      symbol: '🌳', 
      name: 'Ancient Wisdom Grove',
      title: 'Timeless Spiritual Teachings',
      description: 'Connect with the eternal wisdom that flows through all awakening souls',
      energy: 'Ancient Knowledge & Understanding',
      practiceType: 'Contemplative Study',
      duration: '15-30 minutes',
      todaysInvitation: 'What ancient wisdom is calling to you?',
      color: 'from-green-400 to-emerald-400'
    },
    { 
      id: 'moon-chamber',
      symbol: '🌙', 
      name: 'Moon Chamber Sanctuary',
      title: 'Lunar Wisdom & Cycles',
      description: 'Align with natural rhythms and the sacred feminine wisdom of the moon',
      energy: 'Intuition & Sacred Timing',
      practiceType: 'Lunar Attunement',
      duration: '10-25 minutes',
      todaysInvitation: 'How is the moon\'s energy moving through you?',
      color: 'from-indigo-400 to-purple-400'
    },
    { 
      id: 'integration-space',
      symbol: '🦋', 
      name: 'Integration Sanctuary',
      title: 'Gentle Processing & Integration',
      description: 'Sacred space for processing spiritual experiences with tender care',
      energy: 'Integration & Understanding',
      practiceType: 'Gentle Integration Work',
      duration: '15-45 minutes',
      todaysInvitation: 'What spiritual experience wants gentle attention?',
      color: 'from-purple-400 to-blue-400'
    },
    { 
      id: 'evening-peace',
      symbol: '✨', 
      name: 'Evening Peace Sanctuary',
      title: 'Sacred Closure & Gratitude',
      description: 'End each day in peaceful reflection and gentle gratitude',
      energy: 'Peace & Completion',
      practiceType: 'Evening Reflection',
      duration: '5-20 minutes',
      todaysInvitation: 'What are you grateful for in your soul\'s journey today?',
      color: 'from-purple-500 to-indigo-600'
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
      {/* Sacred Navigation */}
      <SacredNavigation currentPage="Sacred Practice Sanctuaries" showSanctuaries={false} />
      
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
              top: `${20 + Math.random() * 70}%`, // Keep elements away from top nav area
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            💫
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="text-center max-w-4xl">
          
          {/* Sacred Garden Symbol */}
          <div className="text-6xl mb-6 animate-bounce">🌸</div>
          
          <h1 className="text-4xl font-light text-white mb-6">
            Sacred Practice Sanctuaries
          </h1>
          
          <p className="text-purple-200 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Sacred spaces for daily spiritual practice, gentle self-communion, and conscious awakening.
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
                {sacredSanctuaries.map((sanctuary, index) => {
                  const angle = (index * 360) / sacredSanctuaries.length;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * 140;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * 140;
                  
                  return (
                    <Link
                      key={sanctuary.id}
                      href={`/community/${sanctuary.id}`}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 cursor-pointer group"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        opacity: pulsePhase === index ? 1 : 0.7,
                        scale: pulsePhase === index ? 1.3 : 1
                      }}
                    >
                      <div className="relative">
                        <div className="text-4xl group-hover:animate-bounce group-hover:scale-110 transition-transform">{sanctuary.symbol}</div>
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${sanctuary.color} opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300`}></div>
                        
                        {/* Tooltip on hover */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {sanctuary.name}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sacred Garden Circles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sacredSanctuaries.map((sanctuary, index) => (
              <Link
                key={sanctuary.id}
                href={`/community/${sanctuary.id}`}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 transition-all duration-500 hover:bg-white/15 hover:scale-105 hover:shadow-xl cursor-pointer group block ${
                  pulsePhase === index ? 'bg-white/20 border-purple-300/50 shadow-lg' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl group-hover:animate-pulse group-hover:scale-110 transition-transform">{sanctuary.symbol}</div>
                    <div>
                      <div className="text-purple-100 font-medium group-hover:text-white transition-colors">{sanctuary.name}</div>
                      <div className="text-purple-300 text-sm">{sanctuary.title}</div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-400 group-hover:text-purple-300">
                    {sanctuary.practiceType}
                  </div>
                </div>
                
                <p className="text-purple-200 text-sm mb-4 leading-relaxed group-hover:text-purple-100 transition-colors">
                  {sanctuary.description}
                </p>
                
                <div className="border-t border-purple-300/20 pt-4">
                  <div className="text-xs text-purple-300 mb-2">Today&apos;s Sacred Invitation:</div>
                  <div className="text-sm text-purple-100 italic">
                    &ldquo;{sanctuary.todaysInvitation}&rdquo;
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-purple-400">
                    Duration: {sanctuary.duration} • Energy: {sanctuary.energy}
                  </div>
                  <div className="text-xs text-purple-200 group-hover:text-white transition-colors font-medium">
                    Enter Sacred Practice →
                  </div>
                </div>
                
                {/* Hover instruction */}
                <div className="mt-3 p-2 bg-purple-500/20 rounded-lg border border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-purple-200 text-center">
                    🌸 Click anywhere to enter this sacred practice space
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sacred Practice Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🕯️</div>
                <h3 className="text-purple-100 font-medium mb-2">Guided Practices</h3>
                <p className="text-purple-300 text-sm">Step-by-step spiritual practices designed for gentle awakening and integration</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-purple-100 font-medium mb-2">Personal Reflection</h3>
                <p className="text-purple-300 text-sm">Private journaling spaces and contemplation prompts for your sacred journey</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌙</div>
                <h3 className="text-purple-100 font-medium mb-2">Sacred Timing</h3>
                <p className="text-purple-300 text-sm">Practices aligned with natural rhythms, lunar cycles, and your soul&apos;s perfect timing</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-purple-300 text-sm italic mb-4">
                &ldquo;Each practice is a sacred doorway into deeper communion with your awakening soul. 
                Enter gently, with reverence for your unique journey.&rdquo;
              </div>
              <div className="text-purple-400 text-xs">
                ✧ Available to all Garden seekers - practice at your own sacred pace ✧
              </div>
            </div>
          </div>

          {/* Selected Sanctuary Details */}
          {selectedCircle && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
              {(() => {
                const sanctuary = sacredSanctuaries.find(s => s.id === selectedCircle);
                if (!sanctuary) return null;
                
                return (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{sanctuary.symbol}</div>
                        <div>
                          <h3 className="text-2xl font-light text-white">{sanctuary.name}</h3>
                          <div className="text-purple-300">{sanctuary.title}</div>
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
                        <h4 className="text-purple-100 font-medium mb-3">Sacred Practice Space</h4>
                        <p className="text-purple-200 mb-6">{sanctuary.description}</p>
                        
                        <div className="bg-white/5 rounded-xl p-4 mb-4">
                          <div className="text-purple-300 text-sm mb-2">Today&apos;s Sacred Invitation:</div>
                          <div className="text-purple-100 italic">
                            &ldquo;{sanctuary.todaysInvitation}&rdquo;
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-purple-400">
                            Duration: {sanctuary.duration}
                          </div>
                          <div className="text-purple-300">
                            Energy: {sanctuary.energy}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-purple-100 font-medium mb-3">How This Practice Unfolds</h4>
                        <div className="space-y-4 text-sm">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-200 font-medium mb-1">Guided Practice</div>
                            <div className="text-purple-300">Gentle instructions and sacred timing</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-purple-200 font-medium mb-1">Personal Reflection</div>
                            <div className="text-purple-300">Private journaling space for insights</div>
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
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🌙</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🌸</div>
      <div className="absolute bottom-20 left-1/2 text-2xl animate-float" style={{animationDelay: '4s'}}>✨</div>
      <div className="absolute top-1/4 right-10 text-2xl animate-float" style={{animationDelay: '5s'}}>🕯️</div>
      
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
