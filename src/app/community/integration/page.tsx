'use client';

import SacredNavigation from '@/components/SacredNavigation';
import Link from 'next/link';

export default function IntegrationSanctuary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 relative overflow-hidden">
      <SacredNavigation currentPage="Integration Sanctuary" />
      
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute animate-pulse opacity-30" style={{
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`, animationDuration: `${3 + Math.random() * 2}s`
            }}>🔄</div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-6 rounded-full bg-gradient-to-br from-violet-200/50 to-purple-200/50 backdrop-blur-sm border border-purple-200/50 mb-6">
              <div className="text-6xl">🔄</div>
            </div>
            <h1 className="text-5xl font-light text-violet-100 mb-4">Integration Sanctuary</h1>
            <p className="text-xl text-violet-200 max-w-2xl mx-auto leading-relaxed">
              Sacred space for weaving insights into daily life
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-violet-300/30 text-center mb-8">
            <div className="text-4xl mb-4">✨</div>
            <h2 className="text-2xl font-light text-violet-100 mb-4">Integration Space Preparing</h2>
            <p className="text-violet-200 mb-6 leading-relaxed">
              This sanctuary is being prepared with practices for integrating spiritual insights into everyday life.
            </p>
            <Link href="/community" className="inline-block px-6 py-3 bg-violet-500/30 hover:bg-violet-500/50 text-violet-100 rounded-xl transition-all duration-300">
              Explore Other Sanctuaries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
