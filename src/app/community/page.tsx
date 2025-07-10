'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CommunityCircle() {
  const [pulsePhase, setPulsePhase] = useState(0);
  
  const circleMembers = [
    { symbol: '🌻', name: 'Seekers of Light' },
    { symbol: '🦋', name: 'Gentle Awakeners' },
    { symbol: '🌿', name: 'Sacred Gardeners' },
    { symbol: '🕊️', name: 'Peace Carriers' },
    { symbol: '✨', name: 'Star Rememberers' },
    { symbol: '🌸', name: 'Soft Bloomers' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 3);
    }, 2000);

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
          
          {/* Sacred Circle Symbol */}
          <div className="text-6xl mb-6 animate-bounce">🌻</div>
          
          <h1 className="text-4xl font-light text-white mb-6">
            Community Circle
          </h1>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-8"></div>
          
          {/* Sacred Circle Visualization */}
          <div className="relative mb-12">
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Center Pulse */}
                <div 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full transition-all duration-2000 ${
                    pulsePhase === 0 ? 'scale-110 opacity-80' : pulsePhase === 1 ? 'scale-100 opacity-60' : 'scale-90 opacity-40'
                  }`}
                  style={{ 
                    boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
                    transition: 'all 2s ease-in-out'
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/20 animate-pulse"></div>
                </div>

                {/* Circle Members */}
                {circleMembers.map((member, index) => {
                  const angle = (index * 360) / circleMembers.length;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * 120;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * 120;
                  
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-2000"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        opacity: pulsePhase === index % 3 ? 1 : 0.6,
                        scale: pulsePhase === index % 3 ? 1.2 : 1
                      }}
                    >
                      <div className="text-3xl">{member.symbol}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sacred Names */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {circleMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-300/30 transition-all duration-500 ${
                  pulsePhase === index % 3 ? 'bg-white/20 border-purple-300/50' : ''
                }`}
              >
                <div className="text-2xl mb-2">{member.symbol}</div>
                <div className="text-purple-200 text-sm">{member.name}</div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
            <p className="text-purple-200 text-lg leading-relaxed mb-6">
              This sacred circle is being lovingly prepared as a gentle space for 
              awakening souls to connect, share, and support each other&apos;s journeys.
            </p>
            
            <div className="text-purple-300 text-sm italic mb-6">
              &ldquo;The circle exists in spirit already. Soon it will have form, 
              where seekers can gather in gentle communion and shared remembrance.&rdquo;
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-purple-100 font-light mb-2">✨ Gentle Sharing</div>
                <div className="text-purple-300 text-sm">Safe spaces for insights and reflections</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-purple-100 font-light mb-2">🤲 Mutual Support</div>
                <div className="text-purple-300 text-sm">Compassionate witnessing and encouragement</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-purple-100 font-light mb-2">🌱 Collective Growth</div>
                <div className="text-purple-300 text-sm">Growing together in wisdom and love</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-purple-100 font-light mb-2">🕊️ Sacred Boundaries</div>
                <div className="text-purple-300 text-sm">Mindful, respectful spiritual community</div>
              </div>
            </div>

            <div className="text-purple-400 text-xs">
              ✧ Opening when the circle calls us together ✧
            </div>
          </div>

          {/* Sacred Navigation */}
          <div className="flex justify-center space-x-4">
            <Link 
              href="/garden-guide"
              className="px-6 py-3 bg-purple-500/30 hover:bg-purple-500/50 text-purple-100 rounded-xl transition-all duration-300 text-sm"
            >
              Commune with Guide
            </Link>
            <Link 
              href="/garden/personal"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-purple-200 rounded-xl transition-all duration-300 text-sm"
            >
              Return to Personal Garden
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🤝</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>💝</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🌈</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>👥</div>
      
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
