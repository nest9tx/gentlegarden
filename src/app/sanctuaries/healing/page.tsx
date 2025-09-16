'use client';

import React, { useState } from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import TieredContent from '@/components/TieredContent';
import { getSanctuary } from '@/sacred/sanctuaries';

interface HealingModality {
  name: string;
  symbol: string;
  description: string;
  approaches: string[];
  practice: {
    preparation: string[];
    steps: string[];
    integration: string[];
    safety: string[];
  };
  advancedWork?: {
    description: string;
    techniques: string[];
    cautions: string[];
  };
}

const healingModalities: HealingModality[] = [
  {
    name: 'Emotional Release & Flow',
    symbol: '💧',
    description: 'Gentle practices for processing and releasing stored emotional energy with safety and compassion.',
    approaches: ['Conscious breathing', 'Feeling witnessing', 'Somatic tracking', 'Energy movement'],
    practice: {
      preparation: [
        'Create a safe, private space where you can make sound',
        'Have water, blankets, and grounding objects nearby',
        'Set intention to welcome whatever wants to move through',
        'Begin with gentle breath work to settle the nervous system'
      ],
      steps: [
        'Place hand on heart and breathe into emotional sensation',
        'Name the feeling without trying to change it: "I notice anger"',
        'Follow the sensation in your body - where does it live?',
        'Breathe into that area with curiosity and compassion',
        'Allow natural expression: tears, sounds, movement, trembling',
        'Stay present with whatever arises without forcing or stopping',
        'When the wave completes, rest in stillness and breathe'
      ],
      integration: [
        'Drink water slowly and mindfully',
        'Place both hands on heart and offer gratitude',
        'Journal any insights or messages that came through',
        'Engage in gentle, nurturing self-care activities',
        'Avoid making major decisions for 24 hours'
      ],
      safety: [
        'Never force emotional release - follow your body\'s wisdom',
        'Stop if you feel overwhelmed and return to grounding',
        'Have support person available if working with trauma',
        'Trust your nervous system\'s capacity and timing'
      ]
    },
    advancedWork: {
      description: 'Advanced practitioners can work with collective emotional clearing and ancestral healing patterns.',
      techniques: [
        'Facilitate group emotional release circles',
        'Work with ancestral trauma patterns in family lineage',
        'Clear emotional imprints from spaces and objects',
        'Channel healing for collective grief and planetary healing'
      ],
      cautions: [
        'Requires proper training and supervision for group work',
        'Always maintain clear boundaries between your emotions and others',
        'Ancestral work needs spiritual protection and guidance'
      ]
    }
  },
  {
    name: 'Somatic Attunement',
    symbol: '🌿',
    description: 'Body-based healing that honors the wisdom of the nervous system and supports natural regulation.',
    approaches: ['Nervous system regulation', 'Trauma-informed movement', 'Embodied presence', 'Cellular listening'],
    practice: {
      preparation: [
        'Wear comfortable clothing that allows free movement',
        'Find a quiet space where you can lie down or move freely',
        'Turn off devices and minimize external distractions',
        'Begin with simple body scanning and breath awareness'
      ],
      steps: [
        'Lie down and notice your body\'s contact with the ground',
        'Scan slowly from head to toe, greeting each body part',
        'Notice areas of tension, numbness, or sensation without judgment',
        'Breathe into tense areas and invite gentle softening',
        'Follow impulses for small movements - stretching, curling, shaking',
        'Let your body lead the movement, following its natural wisdom',
        'Return to stillness when movement completes itself naturally'
      ],
      integration: [
        'Rest in stillness for several minutes after movement',
        'Notice any shifts in sensation, energy, or emotional state',
        'Drink water and eat something grounding if needed',
        'Move slowly back into normal activities',
        'Honor your body\'s need for rest or gentle activity'
      ],
      safety: [
        'Move slowly and gently - healing happens in micro-movements',
        'Never force movement or push through pain',
        'If flashbacks or intense emotions arise, slow down and ground',
        'Work with qualified somatic practitioner for trauma healing'
      ]
    },
    advancedWork: {
      description: 'Advanced somatic work includes nervous system co-regulation and trauma-informed bodywork.',
      techniques: [
        'Practice nervous system co-regulation with others',
        'Offer trauma-informed touch and presence',
        'Work with developmental trauma and attachment healing',
        'Integrate somatic practices with other healing modalities'
      ],
      cautions: [
        'Requires extensive training in trauma-informed approaches',
        'Always maintain appropriate boundaries in touch work',
        'Understand nervous system responses and safety protocols'
      ]
    }
  },
  {
    name: 'Energetic Clearing & Restoration',
    symbol: '✨',
    description: 'Working with the subtle energy body to clear blockages and restore natural flow and vitality.',
    approaches: ['Chakra balancing', 'Aura cleansing', 'Entity clearing', 'Cord cutting'],
    practice: {
      preparation: [
        'Smudge or cleanse your space with sage, palo santo, or intention',
        'Call upon protective guides, angels, or higher power',
        'Ground deeply by visualizing roots into the Earth',
        'Set clear intention for healing and protection'
      ],
      steps: [
        'Scan your energy field from crown to root, noticing density',
        'Visualize white light entering through your crown chakra',
        'Let this light flow through each chakra, clearing obstacles',
        'Notice any dark spots, hooks, or foreign energies',
        'Ask these energies to leave peacefully, replaced by light',
        'Seal your field with golden protective light',
        'Send any cleared energy to the light for transformation'
      ],
      integration: [
        'Thank your guides and helpers for their assistance',
        'Ground the new energy by eating, walking, or touching earth',
        'Drink plenty of water to support energetic integration',
        'Avoid crowded spaces for a few hours if possible',
        'Set healthy energetic boundaries going forward'
      ],
      safety: [
        'Always work from a place of love, never fear',
        'If you encounter resistant energies, seek experienced help',
        'Maintain strong grounding and protection throughout',
        'Trust your intuition about what feels safe to work with'
      ]
    },
    advancedWork: {
      description: 'Advanced energy work includes space clearing, psychic surgery, and dimensional healing.',
      techniques: [
        'Clear negative energies from homes and land',
        'Remove energetic implants and psychic attachments',
        'Work with past-life healing and soul retrieval',
        'Facilitate group energy healing and transmission circles'
      ],
      cautions: [
        'Requires strong psychic protection and spiritual guidance',
        'Never attempt to remove what you don\'t understand',
        'Always work with permission and highest good intention'
      ]
    }
  },
  {
    name: 'Soul Retrieval & Integration',
    symbol: '🕊️',
    description: 'Shamanic practices for reclaiming lost soul parts and integrating fragmented aspects of self.',
    approaches: ['Inner child healing', 'Shadow integration', 'Soul part dialogue', 'Spiritual wholeness'],
    practice: {
      preparation: [
        'Create sacred space with candles, crystals, or meaningful objects',
        'Journey to a time when you felt most whole and connected',
        'Set intention to welcome home any lost parts of yourself',
        'Call upon spiritual guides and allies for support and protection'
      ],
      steps: [
        'Enter light trance through drumming, breathing, or meditation',
        'Ask to be shown any parts of yourself that want to return',
        'Travel inwardly to meet these soul aspects with love',
        'Listen to their stories and acknowledge their pain or gifts',
        'Ask what they need to feel safe returning to wholeness',
        'Invite them home with promises of love and protection',
        'Feel them integrating back into your heart and energy field'
      ],
      integration: [
        'Journal about the parts that returned and their messages',
        'Make commitments to honor these aspects going forward',
        'Create art, movement, or ritual to anchor the integration',
        'Be patient with the adjustment process and any emotions',
        'Seek ongoing support for integration if needed'
      ],
      safety: [
        'Work with experienced shamanic practitioner for deep trauma',
        'Go slowly - integration happens over time, not instantly',
        'Don\'t retrieve more parts than you can lovingly integrate',
        'Maintain strong spiritual protection throughout the work'
      ]
    },
    advancedWork: {
      description: 'Master-level soul retrieval includes working with collective soul loss and ancestral healing.',
      techniques: [
        'Retrieve soul parts for others (with permission and training)',
        'Work with collective trauma and cultural soul loss',
        'Facilitate ancestral healing and lineage repair',
        'Bridge shamanic work with modern therapeutic approaches'
      ],
      cautions: [
        'Requires extensive shamanic training and initiation',
        'Working with others\' soul parts needs proper preparation',
        'Always maintain clear energetic boundaries and protection'
      ]
    }
  }
];

export default function HealingGrovePage() {
  const sanctuary = getSanctuary('healing');
  const [selectedModality, setSelectedModality] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'practice' | 'advanced'>('overview');
  
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      {/* Welcome & Sacred Approach */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-3xl p-8 border border-emerald-500/20">
          <h2 className="text-2xl text-emerald-100 font-light mb-6 text-center">Sacred Healing Grove</h2>
          <p className="text-emerald-200/90 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Healing is a sacred return to wholeness - not something we do to ourselves, but a remembering of our 
            innate capacity for wellness and integration. This grove honors trauma-informed, consent-based approaches 
            that work with your nervous system&apos;s wisdom and natural healing intelligence.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-300 text-xl">💧</span>
              </div>
              <h3 className="text-emerald-200 font-medium mb-2">Emotional Flow</h3>
              <p className="text-emerald-300/80 text-sm">Safe release and processing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-300 text-xl">🌿</span>
              </div>
              <h3 className="text-emerald-200 font-medium mb-2">Somatic Wisdom</h3>
              <p className="text-emerald-300/80 text-sm">Body-based healing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-300 text-xl">✨</span>
              </div>
              <h3 className="text-emerald-200 font-medium mb-2">Energy Clearing</h3>
              <p className="text-emerald-300/80 text-sm">Subtle body restoration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-300 text-xl">🕊️</span>
              </div>
              <h3 className="text-emerald-200 font-medium mb-2">Soul Integration</h3>
              <p className="text-emerald-300/80 text-sm">Wholeness restoration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Pace Foundation */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-light mb-6">Foundation: The Gentle Pace</h2>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Healing Grows in Rings</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-6">
            Depth work grows in rings, like trees. After an emotional release or somatic tremor, insert nourishment: 
            water, grounding touch, stepping outside. Integration is part of the healing—not an afterthought. 
            Your nervous system knows its capacity. Trust the wisdom of going slow.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-medium mb-3">Before Healing Work</h4>
              <ul className="text-white/80 text-sm space-y-2">
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Ensure you feel resourced and grounded</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Create physical and energetic safety</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Set realistic intentions for the session</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Have support available if needed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">During the Process</h4>
              <ul className="text-white/80 text-sm space-y-2">
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Follow your body&apos;s natural rhythm</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Take breaks when you need them</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Stay present without forcing outcomes</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Honor whatever arises with compassion</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">After Integration</h4>
              <ul className="text-white/80 text-sm space-y-2">
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Drink water and nourish your body</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Rest and avoid overstimulation</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Journal insights and experiences</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Be patient with integration process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Healing Modalities Selection */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-light mb-6">Sacred Healing Approaches</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {healingModalities.map((modality, index) => (
            <button
              key={index}
              onClick={() => setSelectedModality(index)}
              className={`p-4 rounded-lg transition-all text-center ${
                selectedModality === index 
                  ? 'bg-emerald-500/30 border border-emerald-400/50' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-2xl mb-2">{modality.symbol}</div>
              <div className={`text-sm font-medium ${selectedModality === index ? 'text-emerald-200' : 'text-white/70'}`}>
                {modality.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Modality Details */}
      {selectedModality !== null && (
        <div className="mb-12">
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            {/* Modality Header */}
            <div className="bg-emerald-500/20 p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{healingModalities[selectedModality].symbol}</div>
                <div>
                  <h3 className="text-white text-xl font-medium">{healingModalities[selectedModality].name}</h3>
                  <p className="text-emerald-200/90 text-sm mt-1">{healingModalities[selectedModality].description}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'overview' ? 'bg-emerald-500/20 text-emerald-200 border-b-2 border-emerald-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Overview & Approaches
              </button>
              <button 
                onClick={() => setActiveTab('practice')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'practice' ? 'bg-emerald-500/20 text-emerald-200 border-b-2 border-emerald-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Practice Guide
              </button>
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'advanced' ? 'bg-emerald-500/20 text-emerald-200 border-b-2 border-emerald-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Advanced Work
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h4 className="text-white font-medium mb-4">Healing Approaches</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {healingModalities[selectedModality].approaches.map((approach, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-emerald-400 mr-2">✦</span>
                        <span className="text-white/90 text-sm">{approach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'practice' && (
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-medium mb-3">Preparation</h4>
                    <ul className="space-y-2">
                      {healingModalities[selectedModality].practice.preparation.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-emerald-400 mr-3 font-medium">{idx + 1}.</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Practice Steps</h4>
                    <ol className="space-y-2">
                      {healingModalities[selectedModality].practice.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-emerald-400 mr-3 font-medium">{idx + 1}.</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Integration</h4>
                    <ul className="space-y-2">
                      {healingModalities[selectedModality].practice.integration.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-emerald-400 mr-2">✦</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-500/30">
                    <h4 className="text-amber-300 font-medium mb-3">Safety Guidelines</h4>
                    <ul className="space-y-2">
                      {healingModalities[selectedModality].practice.safety.map((safety, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-400 mr-2">⚠️</span>
                          <span className="text-amber-200 text-sm">{safety}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <TieredContent requiredTier="gardener">
                  {healingModalities[selectedModality].advancedWork && (
                    <div className="space-y-6">
                      <div>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {healingModalities[selectedModality].advancedWork!.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-3">Advanced Techniques</h4>
                        <ul className="space-y-2">
                          {healingModalities[selectedModality].advancedWork!.techniques.map((technique, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-emerald-400 mr-2">🌟</span>
                              <span className="text-white/90 text-sm">{technique}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                        <h4 className="text-red-300 font-medium mb-3">Professional Cautions</h4>
                        <ul className="space-y-2">
                          {healingModalities[selectedModality].advancedWork!.cautions.map((caution, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-red-400 mr-2">⚠️</span>
                              <span className="text-red-200 text-sm">{caution}</span>
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

      {/* Integration Resources */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
        <h3 className="text-white text-xl font-light mb-4">Supporting Your Healing Journey</h3>
        <p className="text-white/90 leading-relaxed mb-6">
          Healing is not a destination but a continuous flowering into greater wholeness. These resources support 
          your ongoing integration and provide guidance for navigating the waves of transformation.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-medium mb-3">Daily Integration</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Morning body check-ins and gratitude</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Gentle movement and stretching</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Emotional regulation breathing practices</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Evening reflection and acknowledgment</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Crisis Support</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Emergency grounding techniques</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Professional therapist contacts</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Crisis hotline numbers</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Trusted friend support network</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Long-term Growth</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Regular healing practice schedule</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Ongoing therapy or coaching support</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Community connection and sharing</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Creative expression and artistic flow</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Master Healer Path */}
      <TieredContent requiredTier="gardener">
        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-6 border border-emerald-500/20">
          <h3 className="text-emerald-200 text-lg font-medium mb-3">The Master Healer Path</h3>
          <p className="text-emerald-200/90 text-sm leading-relaxed mb-4">
            The deepest healing work involves becoming a healing presence in the world. This means embodying 
            such wholeness and compassion that others naturally feel safe to heal in your presence. 
            The master healer knows that their own healing is their greatest gift to humanity.
          </p>
          <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
            <p className="text-emerald-100/90 text-sm italic">
              &ldquo;Healed people heal people. Whole people inspire wholeness. Your healing journey is not 
              selfish—it is the most generous gift you can offer the world.&rdquo;
            </p>
          </div>
        </div>
      </TieredContent>
    </SanctuaryLayout>
  );
}
