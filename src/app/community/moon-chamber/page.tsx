'use client';

import SacredNavigation from '@/components/SacredNavigation';
import Link from 'next/link';

export default function MoonChamberSanctuary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <SacredNavigation currentPage="Moon Chamber Sanctuary" />
      
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute animate-pulse opacity-30" style={{
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`, animationDuration: `${3 + Math.random() * 2}s`
            }}>🌙</div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-6 rounded-full bg-gradient-to-br from-indigo-200/50 to-purple-200/50 backdrop-blur-sm border border-purple-200/50 mb-6">
              <div className="text-6xl">🌙</div>
            </div>
            <h1 className="text-5xl font-light text-indigo-100 mb-4">Moon Chamber Sanctuary</h1>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed">
              Sacred space for lunar practices and intuitive awakening
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-300/30 text-center mb-8">
            <div className="text-4xl mb-4">🌙</div>
            <h2 className="text-2xl font-light text-indigo-100 mb-4">Lunar Sanctuary Preparing</h2>
            <p className="text-indigo-200 mb-6 leading-relaxed">
              This sacred lunar space is being prepared with moon cycle practices, dream work, and intuitive guidance.
            </p>
            <Link href="/community" className="inline-block px-6 py-3 bg-indigo-500/30 hover:bg-indigo-500/50 text-indigo-100 rounded-xl transition-all duration-300">
              Explore Other Sanctuaries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
