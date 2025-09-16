'use client';

import SacredNavigation from '@/components/SacredNavigation';
import Link from 'next/link';

export default function HeartTempleSanctuary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-red-900 relative overflow-hidden">
      {/* Sacred Navigation */}
      <SacredNavigation currentPage="Heart Temple Sanctuary" />
      
      {/* Gentle Heart Effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Pulsing Heart Effect */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full opacity-60 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-6 rounded-full bg-gradient-to-br from-pink-200/50 to-rose-200/50 backdrop-blur-sm border border-rose-200/50 mb-6">
              <div className="text-6xl">💖</div>
            </div>
            <h1 className="text-5xl font-light text-rose-100 mb-4">Heart Temple Sanctuary</h1>
            <p className="text-xl text-rose-200 max-w-2xl mx-auto leading-relaxed">
              Gentle practices for healing, feeling, and opening to love
            </p>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-rose-300/30 text-center mb-8">
            <div className="text-4xl mb-4">🌸</div>
            <h2 className="text-2xl font-light text-rose-100 mb-4">Sacred Space Preparing</h2>
            <p className="text-rose-200 mb-6 leading-relaxed">
              This beautiful heart-centered sanctuary is being lovingly prepared with guided practices for emotional healing, 
              heart opening meditations, and compassion cultivation exercises.
            </p>
            <div className="bg-rose-500/20 rounded-lg p-4 mb-6">
              <div className="text-rose-100 font-medium mb-2">🌹 What&apos;s Coming</div>
              <ul className="text-rose-200 text-sm space-y-1 text-left max-w-md mx-auto">
                <li>• Heart opening meditation practices</li>
                <li>• Emotional healing journeys</li>
                <li>• Self-compassion cultivation</li>
                <li>• Loving-kindness meditation</li>
                <li>• Heart-centered breathwork</li>
              </ul>
            </div>
            <Link 
              href="/sanctuaries"
              className="inline-block px-6 py-3 bg-rose-500/30 hover:bg-rose-500/50 text-rose-100 rounded-xl transition-all duration-300"
            >
              Explore Other Sanctuaries
            </Link>
          </div>

          {/* Gentle Return Options */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/sanctuaries/morning-light"
              className="px-6 py-3 bg-yellow-500/30 hover:bg-yellow-500/50 text-yellow-100 rounded-xl transition-all duration-300 text-sm"
            >
              🌅 Visit Morning Light Sanctuary
            </Link>
            <Link 
              href="/garden"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-rose-200 rounded-xl transition-all duration-300 text-sm"
            >
              Return to Sacred Garden
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Heart Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🌹</div>
      <div className="absolute top-32 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>💕</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🌺</div>
      <div className="absolute top-40 left-20 text-2xl animate-float" style={{animationDelay: '3s'}}>💝</div>
      
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
