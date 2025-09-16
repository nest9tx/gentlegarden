"use client";

import React from 'react';
import SacredNavigation from './SacredNavigation';
import Link from 'next/link';
import { SanctuaryMeta } from '@/sacred/sanctuaries';

interface SectionContent {
  id: string;
  title: string;
  summary?: string;
  body?: React.ReactNode;
  icon?: string;
}

interface SanctuaryLayoutProps {
  sanctuary: SanctuaryMeta;
  sections?: SectionContent[]; // override or enrich config sections
  children?: React.ReactNode; // free-form custom content inserted after overview
  ctaOverride?: { label: string; href: string };
  showBackHub?: boolean;
}

export default function SanctuaryLayout({
  sanctuary,
  sections,
  children,
  ctaOverride,
  showBackHub = true
}: SanctuaryLayoutProps) {
  const mergedSections: SectionContent[] = sections || sanctuary.sections || [];
  const gradient = `${sanctuary.gradient.from} ${sanctuary.gradient.to}`;

  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black`}>      
      <SacredNavigation currentPage={sanctuary.title} />

      {/* Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${80 + Math.random() * 160}px`,
              height: `${80 + Math.random() * 160}px`,
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.4), transparent) ',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 pt-24 pb-24 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className={`inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br ${gradient} shadow-lg shadow-black/40 mb-6 border border-white/20`}>
            <span className="text-5xl drop-shadow-sm">{sanctuary.icon}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
            {sanctuary.title}
          </h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            {sanctuary.description}
          </p>
          {sanctuary.invocation && (
            <div className="mt-6 text-sm text-purple-300 italic">
              “{sanctuary.invocation}”
            </div>
          )}
          {showBackHub && (
            <div className="mt-8">
              <Link href="/sanctuaries" className="text-purple-300 hover:text-white text-sm underline-offset-4 hover:underline">
                ← Return to Sanctuaries Hub
              </Link>
            </div>
          )}
        </div>

        {/* Meta Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {sanctuary.tone && (
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-purple-200 tracking-wide">
              Tone: {sanctuary.tone}
            </span>
          )}
          {sanctuary.element && (
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-purple-200 tracking-wide">
              Element: {sanctuary.element}
            </span>
          )}
          {sanctuary.access && (
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-purple-200 tracking-wide">
              Access: {sanctuary.access === 'public' ? 'Public ✨' : 'Gardener Tier 🌿'}
            </span>
          )}
        </div>

        {/* Sections Grid */}
        {mergedSections.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {mergedSections.map(sec => (
              <div key={sec.id} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  {sec.icon && <span className="text-2xl">{sec.icon}</span>}
                  <h3 className="text-lg text-white font-medium tracking-wide">{sec.title}</h3>
                </div>
                {sec.summary && (
                  <p className="text-sm text-purple-200/80 leading-relaxed">
                    {sec.summary}
                  </p>
                )}
                <div className="mt-4">
                  <a href={`#${sec.id}`} className="text-xs text-purple-300 hover:text-white underline-offset-4 hover:underline tracking-wide">
                    Deepen →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Children Content */}
        {children && (
          <div className="mb-20">
            {children}
          </div>
        )}

        {/* Detailed Sections Rendering (anchor targets) */}
        {mergedSections.length > 0 && (
          <div className="space-y-24">
            {mergedSections.map(sec => (
              <section key={sec.id} id={sec.id} className="scroll-mt-36">
                <div className="max-w-3xl">
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-4 flex items-center gap-3">
                    {sec.icon && <span>{sec.icon}</span>}
                    <span>{sec.title}</span>
                  </h2>
                  {sec.body ? (
                    <div className="prose prose-invert prose-purple max-w-none">
                      {sec.body}
                    </div>
                  ) : sec.summary && (
                    <p className="text-purple-200/90 leading-relaxed">
                      {sec.summary}
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-28 text-center">
          <Link
            href={ctaOverride?.href || sanctuary.cta?.href || '/garden-guide'}
            className={`inline-flex px-10 py-4 rounded-full bg-gradient-to-r ${gradient} text-white font-medium tracking-wide shadow-lg shadow-black/40 hover:scale-[1.03] transition-transform`}
          >
            {ctaOverride?.label || sanctuary.cta?.label || 'Begin Sacred Dialogue'}
          </Link>
          <div className="mt-4 text-xs text-purple-300 tracking-wide">
            Follow what your heart highlights—return anytime.
          </div>
        </div>
      </div>
    </div>
  );
}
