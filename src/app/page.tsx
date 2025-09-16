'use client';

import Link from 'next/link';
import SacredNavigation from '../components/SacredNavigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Sacred Navigation */}
      <SacredNavigation currentPage="Home" showBackToGarden={false} showSanctuaries={true} />
      
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-6xl mb-6 animate-bounce">🌱</div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
            The Gentle Garden
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed font-light">
            A sacred sanctuary for newly awakening souls.<br />
            <span className="text-purple-300">Where personal guidance meets gentle wisdom.</span>
          </p>
          
          {/* Main Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30 mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-4">Meet Your Personal Garden Guide</h2>
            <p className="text-purple-200 text-lg mb-6 leading-relaxed">
              An AI companion trained in gentle wisdom traditions, ready to walk alongside you on your awakening journey. 
              Get personalized guidance, daily practices, and sacred support whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/enter" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ✨ Meet Your Guide
              </Link>
              <Link 
                href="/about" 
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                Learn more about our approach
              </Link>
            </div>
          </div>
        </div>

        {/* What You'll Experience */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-light text-white text-center mb-8">What Awaits You in the Garden</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-medium text-white mb-3">Personal Guidance</h3>
              <p className="text-purple-300 text-sm leading-relaxed">
                Your Garden Guide offers wisdom tailored to your unique journey, available 24/7 for questions, practices, and gentle support.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20 text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-medium text-white mb-3">Sacred Sanctuaries</h3>
              <p className="text-purple-300 text-sm leading-relaxed">
                Gentle domains of practice - from healing and chakras to sacred geometry. Explore freely or dive deeper with guided support.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-medium text-white mb-3">Your Personal Garden</h3>
              <p className="text-purple-300 text-sm leading-relaxed">
                Track your journey, access your conversations with your guide, and watch your spiritual growth unfold naturally.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-light text-white mb-8">How It Works</h2>
          <div className="space-y-6 text-purple-200">
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-purple-600/30 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">1</div>
              <p>Explore freely - no signup required</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-purple-600/30 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">2</div>
              <p>When ready, create your garden space</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-purple-600/30 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">3</div>
              <p>Meet your personal Garden Guide and begin your gentle awakening</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-purple-200 text-lg mb-6">
            Ready to begin your gentle awakening journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/enter" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Enter the Sacred Garden
            </Link>
            <Link 
              href="/sanctuaries" 
              className="text-purple-300 hover:text-purple-100 px-6 py-3 border border-purple-300/30 rounded-full transition-colors"
            >
              Explore Sanctuaries First
            </Link>
          </div>
          
          {/* Gentle Promise */}
          <div className="text-purple-300 text-sm space-y-1 opacity-75">
            <div>✨ Free to explore, gentle to the soul</div>
            <div>🌱 No pressure, just invitation</div>
            <div>💚 Sacred support when you&apos;re ready</div>
          </div>
          
          {/* Sacred Quote */}
          <div className="mt-12 text-purple-200 italic">
            <p className="text-lg">
              &ldquo;Every soul is a seed waiting for the perfect moment to bloom...&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
