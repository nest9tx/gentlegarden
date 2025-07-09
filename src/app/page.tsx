'use client';

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

          {/* Journey Begins */}
          <div className="space-y-6">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-purple-500/25">
              Begin Your Sacred Journey
            </button>
            
            <div className="text-purple-300 text-sm">
              <p>✧ Voice-guided meditations ✧ Gentle awakening wisdom ✧ 24/7 AI companion ✧</p>
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
