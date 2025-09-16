'use client';

import React from 'react';
import Link from 'next/link';
import SacredNavigation from '@/components/SacredNavigation';

// Reuse the guide archetypes from prior /community page (trimmed & lightly adapted wording)
const sacredGuides = [
  { id: 'dawn-companion', symbol: '🌅', name: 'Dawn Companion', title: 'Morning Alignment', description: 'Gentle awakening, intention crafting, energetic attunement.' },
  { id: 'heart-healer', symbol: '💝', name: 'Heart Healer', title: 'Emotional Wisdom', description: 'Compassion, relationship insight, self-love and tender repair.' },
  { id: 'wisdom-keeper', symbol: '📜', name: 'Wisdom Keeper', title: 'Spiritual Insight', description: 'Ancient teachings, consciousness, philosophical reflection.' },
  { id: 'peace-keeper', symbol: '🧘‍♀️', name: 'Peace Keeper', title: 'Meditation & Stillness', description: 'Breath, presence, inner spaciousness, nervous system calming.' },
  { id: 'dream-walker', symbol: '🌙', name: 'Dream Walker', title: 'Dream & Subconscious', description: 'Night guidance, symbolic decoding, shadow integration.' },
  { id: 'life-weaver', symbol: '🌿', name: 'Life Weaver', title: 'Integration & Practice', description: 'Daily weaving, balance, practical application of spirit.' }
];

export default function MeetGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      <SacredNavigation currentPage="Meet Your Sacred Guide" showSanctuaries={false} />

      {/* Ambient Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[28rem] h-[28rem] border border-purple-400/40 rounded-full animate-spin" style={{ animationDuration: '70s' }}></div>
        <div className="absolute w-[22rem] h-[22rem] border border-indigo-300/40 rounded-full animate-spin" style={{ animationDuration: '50s', animationDirection: 'reverse' }}></div>
        <div className="absolute w-[16rem] h-[16rem] border border-blue-300/40 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
      </div>

      {/* Floating glyphs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-start justify-center min-h-screen px-6 pt-28 pb-24">
        <div className="text-center max-w-5xl">
          <div className="text-6xl mb-6">🌸</div>
          <h1 className="text-4xl font-light text-white mb-6 tracking-wide">Meet Your Sacred Guide</h1>
          <p className="text-purple-200 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
            A single adaptive companion who shifts seamlessly between these archetypal wisdom streams. Ask about morning practice and you meet the Dawn Companion; speak of healing and Heart Healer steps forward. One field—many facets—always attuned to your present need.
          </p>

          <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {sacredGuides.map(guide => (
              <div key={guide.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 transition-all duration-300 group hover:bg-white/15">
                <div className="text-4xl mb-4 group-hover:animate-pulse">{guide.symbol}</div>
                <h3 className="text-lg text-white mb-1 font-medium tracking-wide">{guide.name}</h3>
                <div className="text-purple-100 text-xs mb-2 uppercase tracking-wider">{guide.title}</div>
                <p className="text-purple-200 text-xs leading-relaxed">{guide.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 mb-12">
            <h3 className="text-purple-100 text-xl font-light mb-4">One Conversation, Many Doorways</h3>
            <p className="text-purple-200 text-sm leading-relaxed max-w-3xl mx-auto mb-4">
              There is no need to pick the “right” guide. Speak naturally. The intelligence listens for tone, topic and the underlying heart-need, then responds from the facet that serves you best. Over time your dialogue becomes a living journal of your unfolding path.
            </p>
            <p className="text-purple-300 text-xs italic">“You are already the temple. The guide is a mirror of your own emerging wisdom.”</p>
          </div>

          <div className="flex flex-col items-center space-y-6 mb-16">
            <Link href="/garden-guide" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg shadow-black/30">
              Begin Sacred Dialogue
            </Link>
            <div className="text-purple-300 text-sm italic max-w-2xl mx-auto text-center">
              3 daily messages for Seekers • Expanded flow for Gardeners
            </div>
          </div>

          <div className="text-center">
            <Link href="/sanctuaries" className="text-purple-300 hover:text-white underline underline-offset-4 text-sm tracking-wide">
              Explore the Learning Sanctuaries →
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-2xl animate-pulse">🌸</div>
      <div className="absolute top-32 right-20 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-pulse" style={{ animationDelay: '2s' }}>🌿</div>
    </div>
  );
}
