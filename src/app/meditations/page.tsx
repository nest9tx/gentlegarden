'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SacredAuth from '../../components/SacredAuth';

export default function MeditationGarden() {
  const [breathingPhase, setBreathingPhase] = useState('inhale');

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathingPhase(prev => prev === 'inhale' ? 'exhale' : 'inhale');
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Sacred Auth Status */}
      <SacredAuth position="corner" />
      
      {/* Gentle Twinkling Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`, // Keep stars away from top nav area
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ✨
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
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="text-center max-w-2xl">
          
          {/* Breathing Mandala */}
          <div className="mb-8">
            <div 
              className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-4000 ${
                breathingPhase === 'inhale' ? 'scale-110 opacity-80' : 'scale-90 opacity-60'
              }`}
              style={{ 
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)',
                transition: 'all 4s ease-in-out'
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 animate-pulse"></div>
            </div>
          </div>

          {/* Sacred Space Message */}
          <div className="text-5xl mb-6 animate-bounce">🧘‍♀️</div>
          
          <h1 className="text-4xl font-light text-white mb-6">
            Meditation Garden
          </h1>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-8"></div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
            <p className="text-purple-200 text-lg leading-relaxed mb-6">
              This sacred space is being lovingly prepared with voice-guided meditations, 
              breathing journeys, and gentle pathways for inner peace.
            </p>
            
            <div className="text-purple-300 text-sm italic mb-6">
              &ldquo;In the meantime, breathe with the sacred pulse above. 
              Let your awareness settle into this very moment.&rdquo;
            </div>

            <div className="text-purple-400 text-xs">
              ✧ Opening soon ✧
            </div>
          </div>

          {/* Breathing Instructions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
            <h3 className="text-lg text-purple-100 mb-4">Sacred Breath Practice</h3>
            <div className="text-purple-200 text-sm space-y-2">
              <p>👁️ Gaze softly at the breathing mandala above</p>
              <p>🫁 {breathingPhase === 'inhale' ? 'Breathe in as it expands...' : 'Breathe out as it contracts...'}</p>
              <p>💜 Allow yourself to sync with its gentle rhythm</p>
            </div>
          </div>

          {/* Sacred Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/enter"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl transition-all duration-300 text-sm text-center"
            >
              Enter the Sacred Garden
            </Link>
            <Link 
              href="/wisdom"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-purple-200 rounded-xl transition-all duration-300 text-sm text-center"
            >
              Explore Wisdom Teachings
            </Link>
          </div>
          
          <div className="mt-4 text-center text-purple-300 text-sm">
            ✨ Free meditation available • Join the garden for personalized guidance
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🕊️</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🌸</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🧘‍♂️</div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
