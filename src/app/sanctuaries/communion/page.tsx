'use client';

import React, { useState } from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import TieredContent from '@/components/TieredContent';
import { getSanctuary } from '@/sacred/sanctuaries';

interface CirclePractice {
  name: string;
  symbol: string;
  description: string;
  elements: string[];
  guidance: {
    preparation: string[];
    facilitation: string[];
    closing: string[];
    challenges: string[];
  };
  advancedWork?: {
    description: string;
    techniques: string[];
    mastery: string[];
  };
}

const communionPractices: CirclePractice[] = [
  {
    name: 'Sacred Listening Circles',
    symbol: '👂',
    description: 'Creating safe containers for deep sharing and witnessing without judgment or advice-giving.',
    elements: ['Witnessing presence', 'Non-violent communication', 'Sacred confidentiality', 'Heart-centered sharing'],
    guidance: {
      preparation: [
        'Arrange seating in a circle with meaningful center piece',
        'Set clear container: time boundaries, confidentiality, sharing guidelines',
        'Begin with grounding practice - breath, meditation, or prayer',
        'Establish talking piece protocol for orderly, respectful sharing'
      ],
      facilitation: [
        'Model deep listening by receiving without responding or fixing',
        'Hold neutral, compassionate presence for all that\'s shared',
        'Gently redirect advice-giving toward witnessing and feeling',
        'Use silence as a tool - let pauses breathe and deepen',
        'Notice group energy and offer grounding when needed',
        'Keep timing awareness while allowing organic flow'
      ],
      closing: [
        'Invite gratitude sharing or moment of appreciation',
        'Remind participants of confidentiality commitment',
        'Offer blessing or closing prayer for integration',
        'Allow gentle re-entry to ordinary consciousness'
      ],
      challenges: [
        'When someone dominates: "Let\'s pause and invite other voices"',
        'For advice-giving: "Can we shift to witnessing and feeling?"',
        'Strong emotions: Ground the circle, breathe together, hold space',
        'Conflict: Return to guidelines, acknowledge all perspectives'
      ]
    },
    advancedWork: {
      description: 'Master facilitators can hold space for trauma processing and collective healing work.',
      techniques: [
        'Facilitate circles for specific healing themes (grief, trauma, etc.)',
        'Work with indigenous council practices and ceremonial forms',
        'Hold space for ancestral healing and family constellation work',
        'Lead community healing circles during crisis or collective grief'
      ],
      mastery: [
        'Become invisible facilitator - space holds itself',
        'Track multiple layers of energy and group dynamics',
        'Channel healing presence through your neutral witnessing',
        'Weave individual sharing into collective wisdom'
      ]
    }
  },
  {
    name: 'Council & Wisdom Sharing',
    symbol: '🔥',
    description: 'Ancient council practices for collective decision-making and wisdom emergence.',
    elements: ['Consensus building', 'Collective wisdom', 'Indigenous protocols', 'Sacred democracy'],
    guidance: {
      preparation: [
        'Honor the land and indigenous peoples of the area',
        'Create sacred center with elements representing nature',
        'Establish council guidelines: speak truth, listen deeply, be brief, speak spontaneously',
        'Begin with acknowledgment of ancestors and future generations'
      ],
      facilitation: [
        'Pass talking piece clockwise, allowing all voices equal weight',
        'Speak from heart truth, not prepared thoughts or arguments',
        'Listen for the wisdom trying to emerge through the group',
        'Allow silence between speakers for integration and reflection',
        'Track themes and insights without directing the conversation',
        'Trust the collective intelligence of the circle'
      ],
      closing: [
        'Reflect back themes and wisdom that emerged',
        'Check for any final offerings or unfinished business',
        'Appreciate the courage and vulnerability shared',
        'Close with gratitude to guides, ancestors, and circle'
      ],
      challenges: [
        'Monopolizing: "The talking piece reminds us all voices matter"',
        'Intellectualizing: "Can we drop into heart wisdom?"',
        'Urgency: "Let\'s breathe and trust the timing of emergence"',
        'Disagreement: "All perspectives add to our collective understanding"'
      ]
    },
    advancedWork: {
      description: 'Advanced council can be used for organizational decision-making and conflict resolution.',
      techniques: [
        'Facilitate organizational council for business decisions',
        'Use council for restorative justice and conflict healing',
        'Lead community councils during times of change or crisis',
        'Integrate council with other group processes and methodologies'
      ],
      mastery: [
        'Hold space for seemingly impossible conversations',
        'Track the soul of the group and its deepest needs',
        'Facilitate emergence of solutions no individual could conceive',
        'Weave diverse perspectives into unified understanding'
      ]
    }
  },
  {
    name: 'Healing & Integration Circles',
    symbol: '💚',
    description: 'Supportive circles for processing life transitions, grief, and collective healing.',
    elements: ['Trauma-informed practice', 'Somatic awareness', 'Ritual and ceremony', 'Community support'],
    guidance: {
      preparation: [
        'Screen participants to ensure readiness for group healing work',
        'Create extra safety measures: tissues, water, comfort objects',
        'Set clear boundaries about sharing trauma details vs. feelings',
        'Have co-facilitator or support person available if needed'
      ],
      facilitation: [
        'Begin with grounding and nervous system regulation',
        'Invite sharing of feelings and sensations rather than stories',
        'Use body awareness and breath to track group energy',
        'Offer movement, sound, or artistic expression for processing',
        'Hold space for tears, anger, or other emotional expression',
        'Weave individual healing into collective transformation'
      ],
      closing: [
        'Lead integration activity: drawing, writing, or movement',
        'Offer resources for continued healing and support',
        'Create closing ritual or blessing for participants',
        'Follow up individually with anyone who seemed triggered'
      ],
      challenges: [
        'Retraumatization: Slow down, ground, return to present moment',
        'Emotional overwhelm: Breathe together, use co-regulation',
        'Spiritual emergency: Clear boundaries, professional referrals',
        'Group contagion: Strong facilitation, individual check-ins'
      ]
    },
    advancedWork: {
      description: 'Master healing circle facilitators can work with complex trauma and systemic healing.',
      techniques: [
        'Facilitate circles for collective trauma (disasters, violence)',
        'Work with historical trauma and community healing',
        'Integrate somatic therapy principles into group work',
        'Co-facilitate with mental health professionals'
      ],
      mastery: [
        'Hold space for the unspeakable without being consumed',
        'Channel healing presence that transforms collective pain',
        'Work at the intersection of personal and planetary healing',
        'Create cultures of healing and post-traumatic growth'
      ]
    }
  },
  {
    name: 'Celebration & Gratitude Circles',
    symbol: '🌟',
    description: 'Joyful circles for celebrating milestones, successes, and cultivating appreciation.',
    elements: ['Positive psychology', 'Community celebration', 'Gratitude practices', 'Joy cultivation'],
    guidance: {
      preparation: [
        'Decorate space with beauty: flowers, lights, meaningful objects',
        'Prepare celebration elements: music, movement, food if appropriate',
        'Set intention to amplify joy and appreciation',
        'Create structure that allows for spontaneous celebration'
      ],
      facilitation: [
        'Begin with individual sharing of recent celebrations or gratitudes',
        'Use appreciation practices: verbal acknowledgments, gift exchange',
        'Include body-based celebration: dancing, singing, clapping',
        'Amplify positive emotions through group witness and reflection',
        'Create space for both personal and collective victories',
        'Weave individual celebrations into community joy'
      ],
      closing: [
        'Lead group gratitude practice or appreciation round',
        'Create lasting memory: group photo, shared art, or ritual',
        'Offer blessings for continued growth and celebration',
        'Plan follow-up or future celebration opportunities'
      ],
      challenges: [
        'Forced positivity: Allow authentic feelings, including complexity',
        'Comparison: Focus on individual journey and unique gifts',
        'Overwhelm: Balance celebration with grounding and integration',
        'Exclusion: Ensure all participants feel included and valued'
      ]
    },
    advancedWork: {
      description: 'Advanced celebration circles can be used for rites of passage and community building.',
      techniques: [
        'Design circles for major life transitions and initiations',
        'Create seasonal celebrations and community rituals',
        'Facilitate gratitude practices for organizations and groups',
        'Integrate celebration with social justice and activism work'
      ],
      mastery: [
        'Generate infectious joy that transforms community culture',
        'Create celebration practices that honor diversity and inclusion',
        'Use positive emotions strategically for community resilience',
        'Weave celebration into ongoing spiritual and social practice'
      ]
    }
  }
];

export default function CommunionCirclePage() {
  const sanctuary = getSanctuary('communion');
  const [selectedPractice, setSelectedPractice] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'elements' | 'guidance' | 'advanced'>('elements');
  
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      {/* Welcome & Sacred Foundation */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-rose-900/40 to-pink-900/40 rounded-3xl p-8 border border-rose-500/20">
          <h2 className="text-2xl text-rose-100 font-light mb-6 text-center">Sacred Communion Circle</h2>
          <p className="text-rose-200/90 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            In circle, we remember our deepest nature as interconnected beings. Through sacred listening and 
            heart-centered sharing, we create containers for healing, wisdom, and celebration. Circle is both 
            ancient technology and future practice—a way of being together that honors every voice and cultivates 
            collective wisdom.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-rose-300 text-xl">👂</span>
              </div>
              <h3 className="text-rose-200 font-medium mb-2">Sacred Listening</h3>
              <p className="text-rose-300/80 text-sm">Witnessing without judgment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-rose-300 text-xl">🔥</span>
              </div>
              <h3 className="text-rose-200 font-medium mb-2">Wisdom Council</h3>
              <p className="text-rose-300/80 text-sm">Collective intelligence</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-rose-300 text-xl">💚</span>
              </div>
              <h3 className="text-rose-200 font-medium mb-2">Healing Circles</h3>
              <p className="text-rose-300/80 text-sm">Community support</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-rose-300 text-xl">🌟</span>
              </div>
              <h3 className="text-rose-200 font-medium mb-2">Celebration</h3>
              <p className="text-rose-300/80 text-sm">Joy and gratitude</p>
            </div>
          </div>
        </div>
      </div>

      {/* Foundation Principles */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-light mb-6">Sacred Circle Foundations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Holding Space</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Space holding is more about subtraction than addition—less fixing, more listening. Let silence do 
              part of the weaving. A gentle nod can be a profound blessing. Trust the intelligence of the circle.
            </p>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Listen with your whole being, not just your mind</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Hold neutral compassion for whatever arises</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Use silence as a sacred tool for deepening</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Trust the collective wisdom to emerge naturally</li>
            </ul>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Opening a Circle</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Begin with a breath together. Offer a simple shared intention. Invite consent for sacred presence. 
              Establish a closing moment before deep sharing begins. Honor the sacred nature of gathering.
            </p>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Ground the group with shared breathing or meditation</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Establish clear agreements and boundaries</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Set sacred intention for the gathering</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Create container for vulnerable sharing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Circle Practices Selection */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-light mb-6">Sacred Circle Practices</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {communionPractices.map((practice, index) => (
            <button
              key={index}
              onClick={() => setSelectedPractice(index)}
              className={`p-4 rounded-lg transition-all text-center ${
                selectedPractice === index 
                  ? 'bg-rose-500/30 border border-rose-400/50' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-2xl mb-2">{practice.symbol}</div>
              <div className={`text-sm font-medium ${selectedPractice === index ? 'text-rose-200' : 'text-white/70'}`}>
                {practice.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Practice Details */}
      {selectedPractice !== null && (
        <div className="mb-12">
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            {/* Practice Header */}
            <div className="bg-rose-500/20 p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{communionPractices[selectedPractice].symbol}</div>
                <div>
                  <h3 className="text-white text-xl font-medium">{communionPractices[selectedPractice].name}</h3>
                  <p className="text-rose-200/90 text-sm mt-1">{communionPractices[selectedPractice].description}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveTab('elements')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'elements' ? 'bg-rose-500/20 text-rose-200 border-b-2 border-rose-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Core Elements
              </button>
              <button 
                onClick={() => setActiveTab('guidance')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'guidance' ? 'bg-rose-500/20 text-rose-200 border-b-2 border-rose-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Facilitation Guide
              </button>
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'advanced' ? 'bg-rose-500/20 text-rose-200 border-b-2 border-rose-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Advanced Work
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'elements' && (
                <div>
                  <h4 className="text-white font-medium mb-4">Essential Elements</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {communionPractices[selectedPractice].elements.map((element, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-rose-400 mr-2">✦</span>
                        <span className="text-white/90 text-sm">{element}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'guidance' && (
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-medium mb-3">Preparation</h4>
                    <ul className="space-y-2">
                      {communionPractices[selectedPractice].guidance.preparation.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-rose-400 mr-3 font-medium">{idx + 1}.</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Facilitation</h4>
                    <ul className="space-y-2">
                      {communionPractices[selectedPractice].guidance.facilitation.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-rose-400 mr-2">✦</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Closing</h4>
                    <ul className="space-y-2">
                      {communionPractices[selectedPractice].guidance.closing.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-rose-400 mr-2">✦</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-500/30">
                    <h4 className="text-amber-300 font-medium mb-3">Common Challenges & Responses</h4>
                    <ul className="space-y-2">
                      {communionPractices[selectedPractice].guidance.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-400 mr-2">💡</span>
                          <span className="text-amber-200 text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <TieredContent requiredTier="gardener">
                  {communionPractices[selectedPractice].advancedWork && (
                    <div className="space-y-6">
                      <div>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {communionPractices[selectedPractice].advancedWork!.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-3">Advanced Techniques</h4>
                        <ul className="space-y-2">
                          {communionPractices[selectedPractice].advancedWork!.techniques.map((technique, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-rose-400 mr-2">🌟</span>
                              <span className="text-white/90 text-sm">{technique}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-3">Mastery Levels</h4>
                        <ul className="space-y-2">
                          {communionPractices[selectedPractice].advancedWork!.mastery.map((mastery, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-rose-400 mr-2">💎</span>
                              <span className="text-white/90 text-sm">{mastery}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </TieredContent>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Circle Preparation Essentials */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
        <h3 className="text-white text-xl font-light mb-4">Creating Sacred Container</h3>
        <p className="text-white/90 leading-relaxed mb-6">
          The physical and energetic preparation of circle space is as important as the facilitation itself. 
          Every element contributes to the sense of safety and sacredness that allows vulnerable sharing and 
          authentic communion to emerge.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-medium mb-3">Physical Space</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Arrange seating in perfect circle, all equal height</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Create meaningful center with candles, flowers, or sacred objects</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Ensure privacy and freedom from interruption</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Have tissues, water, and comfort items available</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Energetic Preparation</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Clear space with sage, sound, or intention</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Set protection and call in supportive guides</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Ground yourself as facilitator before others arrive</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Hold intention for highest good of all participants</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Agreements & Safety</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Establish confidentiality and consent agreements</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Create talking piece protocol for respectful sharing</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Set time boundaries and break schedules</li>
              <li className="flex items-start"><span className="text-rose-400 mr-2">•</span>Provide opt-out options for overwhelming moments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Art of Sacred Facilitation */}
      <TieredContent requiredTier="gardener">
        <div className="bg-gradient-to-r from-rose-900/30 to-pink-900/30 rounded-xl p-6 border border-rose-500/20">
          <h3 className="text-rose-200 text-lg font-medium mb-3">The Art of Invisible Facilitation</h3>
          <p className="text-rose-200/90 text-sm leading-relaxed mb-4">
            Master circle holders learn to become transparent vessels for the collective wisdom to emerge. 
            The highest skill is knowing when to speak and when to remain silent, when to guide and when 
            to trust. In perfect facilitation, the facilitator disappears and the circle holds itself.
          </p>
          <div className="bg-rose-500/10 rounded-lg p-4 border border-rose-500/20">
            <p className="text-rose-100/90 text-sm italic">
              &ldquo;In circle, we remember that we are not separate individuals sharing space, but 
              interconnected souls sharing one heart. The facilitator is simply the one who reminds 
              us of what we already know.&rdquo;
            </p>
          </div>
        </div>
      </TieredContent>
    </SanctuaryLayout>
  );
}
