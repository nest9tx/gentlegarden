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
        <header className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">Learning Sanctuaries</h1>
          <p className="text-purple-200 text-lg leading-relaxed mb-8">
            Each sanctuary is a gentle domain of focus—explore freely or follow what glows for your heart. Public sanctuaries are open to all Seekers. Gardener sanctuaries deepen practice and integration.
          </p>
          
          {/* Recommended Learning Path */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
            <h2 className="text-white text-lg font-medium mb-4">✨ Recommended Journey for New Seekers</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-purple-200 flex-wrap">
              <Link href="/sanctuaries/meditation-garden" className="hover:text-white transition-colors border-b border-dotted border-purple-300">
                Meditation Garden
              </Link>
              <span className="text-purple-400">→</span>
              <Link href="/sanctuaries/chakras" className="hover:text-white transition-colors border-b border-dotted border-purple-300">
                Chakra Sanctuary
              </Link>
              <span className="text-purple-400">→</span>
              <Link href="/sanctuaries/communion" className="hover:text-white transition-colors border-b border-dotted border-purple-300">
                Communion Circle
              </Link>
              <span className="text-purple-400">→</span>
              <span className="text-purple-300">Advanced Practices</span>
            </div>
            <p className="text-xs text-purple-300 mt-3">Start wherever feels right, but this path offers a gentle progression from foundational to advanced practices.</p>
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap text-xs text-purple-300">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">✨ Public - Free Access</span>
            <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">🌿 Gardener - Premium Content</span>
          </div>
        </header>

        {/* Foundational Practices */}
        <div className="mb-16">
          <h2 className="text-2xl text-white font-light mb-6 text-center">🌱 Foundational Practices</h2>
          <p className="text-purple-200/80 text-center mb-8 max-w-2xl mx-auto">
            Perfect for beginners or anyone seeking to deepen their connection to fundamental spiritual practices.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SANCTUARIES.filter(s => ['meditation-garden', 'chakras', 'morning-light', 'communion'].includes(s.slug)).map(s => (
              <Link
                key={s.slug}
                href={`/sanctuaries/${s.slug}`}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col transition-colors duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient.from} ${s.gradient.to} flex items-center justify-center text-3xl mb-4 shadow-lg shadow-black/40`}>
                  {s.icon}
                </div>
                <h3 className="text-xl text-white font-medium mb-2 tracking-wide">{s.title}</h3>
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
        </div>

        {/* Advanced & Specialized */}
        <div className="mb-16">
          <h2 className="text-2xl text-white font-light mb-6 text-center">✨ Advanced & Specialized</h2>
          <p className="text-purple-200/80 text-center mb-8 max-w-2xl mx-auto">
            Deeper explorations for those ready to expand their practice and service.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SANCTUARIES.filter(s => !['meditation-garden', 'chakras', 'morning-light', 'communion'].includes(s.slug)).map(s => (
              <Link
                key={s.slug}
                href={`/sanctuaries/${s.slug}`}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col transition-colors duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient.from} ${s.gradient.to} flex items-center justify-center text-3xl mb-4 shadow-lg shadow-black/40`}>
                  {s.icon}
                </div>
                <h3 className="text-xl text-white font-medium mb-2 tracking-wide">{s.title}</h3>
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
        </div>

        {/* Upgrade CTA */}
        <div className="text-center mb-24">
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
