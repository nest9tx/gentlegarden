'use client';

import React from 'react';
import Link from 'next/link';
import SacredNavigation from '@/components/SacredNavigation';
import { SANCTUARIES } from '@/sacred/sanctuaries';

export default function SanctuariesHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      <SacredNavigation currentPage="Learning Sanctuaries" />

      {/* Ambient shimmer */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[10px] animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <div className="relative z-10 px-6 pt-28 pb-32 max-w-7xl mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">Learning Sanctuaries</h1>
          <p className="text-purple-200 text-lg leading-relaxed">
            Each sanctuary is a gentle domain of focus—explore freely or follow what glows for your heart. Public sanctuaries are open to all Seekers. Gardener sanctuaries deepen practice and integration.
          </p>
          <div className="mt-6 text-xs text-purple-300 flex items-center justify-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">✨ Public</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">🌿 Gardener Tier</span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SANCTUARIES.map(s => (
            <Link
              key={s.slug}
              href={`/sanctuaries/${s.slug}`}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col transition-colors duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient.from} ${s.gradient.to} flex items-center justify-center text-3xl mb-4 shadow-lg shadow-black/40`}>
                {s.icon}
              </div>
              <h2 className="text-xl text-white font-medium mb-2 tracking-wide">{s.title}</h2>
              <p className="text-sm text-purple-200/80 leading-relaxed flex-1 mb-4">{s.description}</p>
              <div className="flex items-center gap-2 flex-wrap mb-4">
                {s.tone && <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-purple-300 tracking-wide">{s.tone}</span>}
                {s.access && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-purple-300 tracking-wide">
                    {s.access === 'public' ? 'Public ✨' : '🌿 Gardener'}
                  </span>
                )}
              </div>
              <div className="text-purple-300 text-xs tracking-wide group-hover:text-white transition-colors flex items-center gap-1">
                Enter <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-purple-300 text-sm mb-6">Ready for deeper integration & extended guidance?</p>
          <Link href="/enter" className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium tracking-wide shadow-lg shadow-black/40 transition-transform hover:scale-[1.03]">
            Upgrade to Gardener 🌿
          </Link>
          <div className="mt-3 text-xs text-purple-400 tracking-wide">Unlock healing, light work & extended sanctuaries</div>
        </div>
      </div>
    </div>
  );
}
