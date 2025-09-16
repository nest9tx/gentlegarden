'use client';

import React, { useState } from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import { getSanctuary } from '@/sacred/sanctuaries';

interface LightWorkPractice {
  title: string;
  description: string;
  steps: string[];
  guidance: string[];
  warnings?: string[];
}

const callingPractices: LightWorkPractice[] = [
  {
    title: 'The Sacred Pause',
    description: 'Learning to discern authentic calling from ego impulse through stillness.',
    steps: [
      'When impulse arises to "help" or "heal" someone, pause completely',
      'Place both hands on your heart and take three deep breaths', 
      'Ask internally: "Is this mine to serve, or am I projecting my own needs?"',
      'Feel for a deep "yes" that comes from stillness, not urgency',
      'If unclear, wait. Authentic service timing is rarely urgent.'
    ],
    guidance: [
      'Ego-driven service often feels urgent and necessary',
      'Authentic calling feels spacious and naturally timed',
      'Your own healing comes before serving others',
      'True service never diminishes your life force'
    ]
  },
  {
    title: 'Resource Assessment',
    description: 'Ensuring you have the energetic and emotional capacity for genuine service.',
    steps: [
      'Before any energy work, scan your own field honestly',
      'Notice your physical vitality, emotional state, mental clarity',
      'Ask: "Am I full enough to give without depleting myself?"',
      'Check if you seek validation, approval, or identity through service',
      'Only proceed when resourced and clear of personal agenda'
    ],
    guidance: [
      'Depletion creates dependency, not healing',
      'Your own cup must be full before pouring for others',
      'Rescuing patterns harm both giver and receiver',
      'Sustainable service flows from overflow, not emptiness'
    ]
  }
];

const ethicsPractices: LightWorkPractice[] = [
  {
    title: 'Consent & Permission',
    description: 'Establishing clear energetic boundaries and explicit agreement.',
    steps: [
      'Always ask explicit verbal permission before any energy work',
      'Explain what you sense and what you propose to do',
      'Allow the person to say no without pressure or persuasion',
      'Check in regularly during sessions: "How does this feel?"',
      'Stop immediately if they express discomfort or request cessation'
    ],
    guidance: [
      'Consent must be ongoing, not just initial agreement',
      'Energetic violation is real even if unintended',
      'Their "no" is sacred information, not resistance to overcome',
      'Permission protects both parties in the energy exchange'
    ],
    warnings: [
      'Never work on someone without clear verbal consent',
      'Avoid "stealth healing" - sending energy without permission',
      'Do not override someone\'s energetic boundaries "for their good"'
    ]
  },
  {
    title: 'Humility & Non-Attachment',
    description: 'Releasing outcome attachment and maintaining proper perspective.',
    steps: [
      'Acknowledge you are a conduit, not the source of healing',
      'Release all attachment to results or specific outcomes',
      'Hold space without trying to fix, change, or improve anyone',
      'Trust their own healing intelligence over your perceptions',
      'Remain in beginner\'s mind regardless of experience level'
    ],
    guidance: [
      'Healing belongs to the receiver, not the practitioner',
      'Your role is to hold space, not to heal or fix',
      'Attachment to outcome corrupts the energy exchange',
      'True healing often looks different than expected'
    ]
  }
];

const fieldPractices: LightWorkPractice[] = [
  {
    title: 'Grounding & Protection',
    description: 'Establishing energetic stability and appropriate boundaries.',
    steps: [
      'Root deeply into Earth before any energy work begins',
      'Visualize roots from your base chakra extending deep underground',
      'Call upon protective presence - guides, angels, or divine light',
      'Create energetic boundaries: "Only the highest good may flow through"',
      'Maintain awareness of your own energy throughout the session'
    ],
    guidance: [
      'Grounding prevents energetic overwhelm and confusion',
      'Protection ensures only beneficial energies flow through',
      'Your stability creates safety for the receiver',
      'Clear boundaries prevent energetic enmeshment'
    ]
  },
  {
    title: 'Heart-Centered Transmission',
    description: 'Channeling pure love and light through the heart center.',
    steps: [
      'Place awareness in your heart chakra and breathe into expansion',
      'Connect with the source of unconditional love within you',
      'Invite divine light to flow through your heart, not your will',
      'Allow energy to move at its own pace and intensity',
      'Rest in being a clear, empty vessel for love\'s expression'
    ],
    guidance: [
      'Heart energy is inherently healing and non-intrusive',
      'Love flows to where it\'s most needed without direction',
      'Your job is to get out of the way, not to direct energy',
      'Heart transmission creates no energetic debt or obligation'
    ]
  },
  {
    title: 'Light Pillar Practice',
    description: 'Establishing a column of pure light for healing transmission.',
    steps: [
      'Visualize brilliant white light entering through your crown chakra',
      'Feel this light filling your entire being from head to toe',
      'Extend roots of light deep into Earth for grounding',
      'Reach light crown upward connecting to Source/Divine',
      'Become a pillar of light bridging Heaven and Earth',
      'Allow light to radiate naturally without forcing or directing'
    ],
    guidance: [
      'You become a conduit for divine healing energy',
      'Light naturally flows where healing is needed',
      'No effort or strain should be involved in transmission',
      'The pillar creates a sacred healing field around you'
    ]
  }
];

export default function LightWorkPavilionPage() {
  const sanctuary = getSanctuary('light-work');
  const [activeSection, setActiveSection] = useState<'calling' | 'ethics' | 'practices' | null>('calling');
  const [selectedPractice, setSelectedPractice] = useState<number | null>(null);

  if (!sanctuary) return null;

  const getCurrentPractices = () => {
    switch(activeSection) {
      case 'calling': return callingPractices;
      case 'ethics': return ethicsPractices;
      case 'practices': return fieldPractices;
      default: return [];
    }
  };

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      {/* Welcome Section */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 rounded-3xl p-8 border border-amber-500/20">
          <h2 className="text-2xl text-amber-100 font-light mb-6 text-center">Sacred Service & Light Transmission</h2>
          <p className="text-amber-200/90 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Light work is the sacred art of becoming a clear conduit for divine healing energy. It requires deep discernment, 
            impeccable ethics, and humble surrender to serve the highest good. This path calls for both spiritual maturity 
            and practical wisdom, always prioritizing consent, integrity, and the receiver&apos;s own healing authority.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-300 text-xl">🔥</span>
              </div>
              <h3 className="text-amber-200 font-medium mb-2">Sacred Discernment</h3>
              <p className="text-amber-300/80 text-sm">Learning to distinguish authentic calling from ego impulse</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-300 text-xl">🤲</span>
              </div>
              <h3 className="text-amber-200 font-medium mb-2">Energetic Ethics</h3>
              <p className="text-amber-300/80 text-sm">Maintaining consent, boundaries, and humble service</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-300 text-xl">✨</span>
              </div>
              <h3 className="text-amber-200 font-medium mb-2">Pure Transmission</h3>
              <p className="text-amber-300/80 text-sm">Becoming a clear vessel for divine healing light</p>
            </div>
          </div>
        </div>
      </div>

      {/* Foundation Principles */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-light mb-6">Foundation Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3">Sacred Integrity</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              True light work is quiet, humble and consent-based. Before offering energy, attune to: Is this mine to serve? 
              Am I resourced? Is support requested? Discernment protects both giver and receiver.
            </p>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Always ask explicit permission</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Work only when resourced and clear</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Honor the receiver&apos;s healing authority</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3">Conduit Consciousness</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              You are not the healer - you are the vessel through which divine love flows. Release attachment to outcomes 
              and trust the infinite intelligence that moves through authentic service.
            </p>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Surrender personal agenda and ego</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Trust the receiver&apos;s inner wisdom</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Allow energy to flow at its own pace</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => { setActiveSection('calling'); setSelectedPractice(null); }}
            className={`px-6 py-3 rounded-lg transition-all ${activeSection === 'calling' ? 'bg-amber-500/30 text-amber-200 border border-amber-500/50' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
          >
            🔥 The Calling
          </button>
          <button 
            onClick={() => { setActiveSection('ethics'); setSelectedPractice(null); }}
            className={`px-6 py-3 rounded-lg transition-all ${activeSection === 'ethics' ? 'bg-amber-500/30 text-amber-200 border border-amber-500/50' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
          >
            🤲 Energetic Ethics
          </button>
          <button 
            onClick={() => { setActiveSection('practices'); setSelectedPractice(null); }}
            className={`px-6 py-3 rounded-lg transition-all ${activeSection === 'practices' ? 'bg-amber-500/30 text-amber-200 border border-amber-500/50' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
          >
            ✨ Field Practices
          </button>
        </div>
      </div>

      {/* Section Content */}
      {activeSection && (
        <div className="mb-12">
          <div className="space-y-4">
            {getCurrentPractices().map((practice, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-white/5 transition-all"
                  onClick={() => setSelectedPractice(selectedPractice === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-lg font-medium mb-2">{practice.title}</h3>
                      <p className="text-white/70 text-sm">{practice.description}</p>
                    </div>
                    <div className="text-white/50">
                      {selectedPractice === index ? '▲' : '▼'}
                    </div>
                  </div>
                </div>
                
                {selectedPractice === index && (
                  <div className="px-6 pb-6 space-y-6 border-t border-white/10 pt-6">
                    {/* Steps */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Practice Steps</h4>
                      <ol className="text-white/90 text-sm space-y-2">
                        {practice.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-400 mr-3 font-medium">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Guidance */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Essential Guidance</h4>
                      <ul className="text-white/90 text-sm space-y-2">
                        {practice.guidance.map((guide, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-400 mr-2">✦</span>
                            <span>{guide}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Warnings (if applicable) */}
                    {practice.warnings && (
                      <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                        <h4 className="text-red-300 font-medium mb-3">Important Cautions</h4>
                        <ul className="text-red-200 text-sm space-y-2">
                          {practice.warnings.map((warning, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-red-400 mr-2">⚠️</span>
                              <span>{warning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Integration & Advanced Work */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
        <h3 className="text-white text-xl font-light mb-4">Integration & Daily Service</h3>
        <p className="text-white/90 leading-relaxed mb-6">
          Light work extends beyond formal sessions into every moment of conscious living. Practice becoming 
          a blessing presence wherever you go - offering prayer for strangers, sending love to difficult 
          situations, and holding space for healing in your daily interactions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-3">Subtle Service</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Silent blessings for everyone you encounter</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Holding healing intention during meditation</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Sending love to places of suffering in the world</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Offering your life force to planetary healing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Embodied Presence</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Maintaining heart-centered awareness throughout the day</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Being a calming presence in chaotic situations</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Listening deeply without trying to fix or advise</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Radiating peace and love through your very being</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Advanced Mastery */}
      <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-500/20">
        <h3 className="text-amber-200 text-lg font-medium mb-3">The Path of Mastery</h3>
        <p className="text-amber-200/90 text-sm leading-relaxed mb-4">
          True mastery in light work means becoming so transparent that divine love flows through you effortlessly. 
          It requires continuous inner work, deep surrender, and the courage to serve even when it&apos;s inconvenient 
          or uncomfortable. The greatest light workers are often unknown, serving quietly behind the scenes.
        </p>
        <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/20">
          <p className="text-amber-100/90 text-sm italic">
            &quot;The light that burns twice as bright burns half as long. But true light workers burn steadily, 
            sustainably, becoming beacons of hope that guide others home to their own inner radiance.&quot;
          </p>
        </div>
      </div>
    </SanctuaryLayout>
  );
}
