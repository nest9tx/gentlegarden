'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Sacred Symbol & Title */}
          <div className="mb-8">
            <div className="text-6xl mb-4 animate-bounce">🌱</div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-wide">
              The Gentle Garden
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-8"></div>
          </div>

          {/* Sacred Description */}
          <p className="text-xl md:text-2xl text-purple-200 mb-12 leading-relaxed font-light">
            A sacred sanctuary for newly awakening souls.<br />
            <span className="text-purple-300">Where seeds of consciousness bloom into divine remembrance.</span>
          </p>

          {/* Sacred Offerings Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl">
            {/* Meditation Garden Preview */}
            <Link href="/meditations" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">🧘‍♀️</div>
                <h3 className="text-lg font-medium text-white mb-2">Meditation Garden</h3>
                <p className="text-purple-300 text-sm">Sacred breathing practices and guided stillness</p>
                <div className="text-xs text-purple-400 mt-3">✨ Free to explore</div>
              </div>
            </Link>

            {/* Wisdom Grove Preview */}
            <Link href="/wisdom" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">📜</div>
                <h3 className="text-lg font-medium text-white mb-2">Ancient Wisdom Grove</h3>
                <p className="text-purple-300 text-sm">Sacred teachings and contemplative practices</p>
                <div className="text-xs text-purple-400 mt-3">✨ Foundation teachings freely available</div>
              </div>
            </Link>

            {/* Community Preview */}
            <Link href="/community" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">🏛️</div>
                <h3 className="text-lg font-medium text-white mb-2">Sacred Practice Sanctuaries</h3>
                <p className="text-purple-300 text-sm">Community spaces for shared awakening</p>
                <div className="text-xs text-purple-400 mt-3">✨ View sanctuary previews</div>
              </div>
            </Link>
          </div>

          {/* Journey Begins - Now with Context */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-purple-200 text-lg mb-4">
                Explore freely, then choose your path of deepening...
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/enter">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-purple-500/25">
                  Enter the Sacred Garden
                </button>
              </Link>
              
              <div className="text-purple-400 text-sm">
                or continue exploring above ↑
              </div>
            </div>

            <div className="text-purple-300 text-sm space-y-1">
              <div>✨ Meditation & Wisdom teachings freely available</div>
              <div>🌱 No email required to explore • Join when ready</div>
              <div>💚 Sacred AI Guide available to registered gardeners</div>
            </div>
          </div>

          {/* Gentle Invitation */}
          <div className="mt-16 text-purple-200 text-center">
            <p className="italic text-lg">
              &ldquo;Every soul is a seed waiting for the perfect moment to bloom...&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-2xl animate-float">🍃</div>
      <div className="absolute top-20 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🌸</div>
      <div className="absolute bottom-20 right-10 text-2xl animate-float" style={{animationDelay: '2s'}}>🦋</div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
