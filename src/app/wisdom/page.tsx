'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WisdomGrove() {
  const [currentWisdom, setCurrentWisdom] = useState(0);
  
  const wisdomSeeds = [
    {
      text: "The garden grows not through force, but through gentle presence and patient tending.",
      source: "Garden Wisdom"
    },
    {
      text: "Every moment of awakening is both a remembering and a first breath.",
      source: "Sacred Teachings"
    },
    {
      text: "You are not broken and in need of fixing. You are whole and in the process of remembering.",
      source: "Gentle Guidance"
    },
    {
      text: "The path reveals itself one sacred step at a time. Trust the unfolding.",
      source: "Garden Wisdom"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWisdom(prev => (prev + 1) % wisdomSeeds.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [wisdomSeeds.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Ancient Scroll Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 10}s`
            }}
          >
            📜
          </div>
        ))}
      </div>

      {/* Floating Sacred Symbols */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            ✧
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
        <div className="text-center max-w-3xl">
          
          {/* Sacred Grove Symbol */}
          <div className="text-6xl mb-6 animate-bounce">📜</div>
          
          <h1 className="text-4xl font-light text-white mb-6">
            Wisdom Grove
          </h1>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-8"></div>
          
          {/* Current Wisdom Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8 min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-purple-100 text-xl italic leading-relaxed mb-4 transition-all duration-1000">
                &ldquo;{wisdomSeeds[currentWisdom].text}&rdquo;
              </div>
              <div className="text-purple-300 text-sm">
                — {wisdomSeeds[currentWisdom].source}
              </div>
            </div>
          </div>

          {/* Wisdom Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {wisdomSeeds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentWisdom(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentWisdom 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-purple-600/40 hover:bg-purple-500/60'
                }`}
              />
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20 mb-8">
            <p className="text-purple-200 text-lg leading-relaxed mb-4">
              This sacred grove is being carefully cultivated with gentle teachings, 
              wisdom transmissions, and insights for your awakening journey.
            </p>
            
            <div className="text-purple-300 text-sm italic mb-4">
              &ldquo;While you wait, let these rotating wisdom seeds 
              plant themselves gently in your awareness.&rdquo;
            </div>

            <div className="text-purple-400 text-xs">
              ✧ Opening with the next moon cycle ✧
            </div>
          </div>

          {/* Sacred Navigation */}
          <div className="flex justify-center space-x-4">
            <Link 
              href="/garden-guide"
              className="px-6 py-3 bg-purple-500/30 hover:bg-purple-500/50 text-purple-100 rounded-xl transition-all duration-300 text-sm"
            >
              Seek Guidance
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
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌿</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>📖</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>✨</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>🦋</div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
