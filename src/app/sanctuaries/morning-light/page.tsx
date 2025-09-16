'use client';

import React, { useState } from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import TieredContent from '@/components/TieredContent';
import { getSanctuary } from '@/sacred/sanctuaries';

interface DawnPractice {
  name: string;
  symbol: string;
  description: string;
  timing: string;
  elements: string[];
  practice: {
    preparation: string[];
    steps: string[];
    integration: string[];
    variations: string[];
  };
  advancedWork?: {
    description: string;
    techniques: string[];
    mastery: string[];
  };
}

const morningPractices: DawnPractice[] = [
  {
    name: 'Sacred Awakening',
    symbol: '🌅',
    description: 'Gentle transition from sleep consciousness into awake presence, honoring the threshold between worlds.',
    timing: '2-5 minutes upon waking',
    elements: ['Breath awareness', 'Gratitude cultivation', 'Intention setting', 'Heart connection'],
    practice: {
      preparation: [
        'Before opening eyes, take three deep conscious breaths',
        'Feel your body\'s contact with bed and sheets',
        'Notice the quality of light and sound around you',
        'Set intention to wake with love and presence'
      ],
      steps: [
        'Place hand on heart and breathe into this sacred center',
        'Whisper: "Good morning, beautiful soul. Thank you for this new day"',
        'Feel gratitude for the gift of consciousness returning',
        'Ask: "What wants to be born through me today?"',
        'Listen deeply for your soul\'s response - feeling, word, or image',
        'Breathe this guidance into your heart to anchor it',
        'Gently open eyes when ready to receive the day'
      ],
      integration: [
        'Carry the morning\'s guidance as touchstone throughout day',
        'Return to breath and heart connection during transitions',
        'Honor the sacred nature of this daily rebirth',
        'Trust the wisdom that comes through morning receptivity'
      ],
      variations: [
        'Practice outdoors to connect with natural dawn rhythms',
        'Use gentle stretching or movement to awaken the body',
        'Include prayer or spiritual invocation for guidance',
        'Journal the insights that come through morning listening'
      ]
    },
    advancedWork: {
      description: 'Advanced practitioners can use dawn consciousness for prophetic dreaming and spiritual guidance.',
      techniques: [
        'Practice lucid dreaming and dream recall enhancement',
        'Work with hypnagogic states for creative downloads',
        'Use morning time for channeling and spiritual communication',
        'Develop consistency in dawn practice regardless of schedule'
      ],
      mastery: [
        'Maintain awareness through sleep-wake transitions',
        'Receive guidance for community and planetary healing',
        'Use morning consciousness to seed intentions for global benefit',
        'Become beacon of morning light for others seeking awakening'
      ]
    }
  },
  {
    name: 'Light Body Activation',
    symbol: '✨',
    description: 'Awakening and energizing the subtle energy body through light visualization and breath work.',
    timing: '5-10 minutes after initial awakening',
    elements: ['Energy circulation', 'Chakra activation', 'Aura expansion', 'Light transmission'],
    practice: {
      preparation: [
        'Sit comfortably with spine naturally erect',
        'Ground through base chakra connection to Earth',
        'Call upon spiritual guides and protection',
        'Set intention to activate your highest light body'
      ],
      steps: [
        'Visualize golden light entering through crown chakra',
        'Feel this light filling your entire head with warmth',
        'Let light flow down through throat, heart, solar plexus',
        'Continue through sacral chakra, root, and into Earth',
        'Now draw light up from Earth through all chakras to crown',
        'Expand light beyond body creating luminous egg around you',
        'Breathe light into every cell, awakening divine blueprint',
        'Rest in radiance, feeling yourself as embodied light'
      ],
      integration: [
        'Maintain awareness of light body throughout morning activities',
        'Send light ahead to places you\'ll visit during the day',
        'Use light body for protection and blessing others',
        'Remember your essential nature as spiritual light in form'
      ],
      variations: [
        'Work with specific chakra colors for targeted activation',
        'Include sound healing with toning or mantras',
        'Practice in nature to connect with natural light frequencies',
        'Coordinate with sunrise timing for maximum potency'
      ]
    },
    advancedWork: {
      description: 'Master practitioners can use light body work for healing transmission and consciousness expansion.',
      techniques: [
        'Project light body for remote healing and blessing',
        'Work with crystalline light grid for planetary healing',
        'Use light activation for psychic protection and clearing',
        'Teach light body practices to support others\' awakening'
      ],
      mastery: [
        'Maintain continuous light body awareness throughout day',
        'Transmit healing light through presence alone',
        'Work with galactic and cosmic light frequencies',
        'Become lighthouse of consciousness for collective awakening'
      ]
    }
  },
  {
    name: 'Intention Weaving',
    symbol: '🎯',
    description: 'Sacred practice of aligning with soul purpose and setting intentions that serve highest good.',
    timing: '5-15 minutes, preferably facing east',
    elements: ['Soul listening', 'Purpose alignment', 'Manifestation ethics', 'Service orientation'],
    practice: {
      preparation: [
        'Create sacred space with candle, crystal, or meaningful object',
        'Face east toward rising sun if possible',
        'Begin with gratitude for opportunities this day offers',
        'Ask for guidance in creating intentions aligned with highest good'
      ],
      steps: [
        'Drop from mind into heart space through conscious breathing',
        'Ask: "What does my soul most want to experience today?"',
        'Listen deeply for feeling, image, or knowing that arises',
        'Shape this into positive intention: "Today I am..." or "Today I create..."',
        'Check intention against service: "How does this serve the greater good?"',
        'Breathe intention into heart, feeling it as already true',
        'Offer intention to divine will: "This or something better for all"',
        'Seal with gratitude and trust in perfect unfolding'
      ],
      integration: [
        'Write intention in journal or speak aloud to anchor it',
        'Return to intention during decision points throughout day',
        'Notice how life supports your aligned intentions',
        'Adjust course gently when actions drift from intention'
      ],
      variations: [
        'Set intentions for specific relationships or projects',
        'Include intentions for personal healing and growth',
        'Weave intentions for community and planetary healing',
        'Use moon phases to deepen intention-setting power'
      ]
    },
    advancedWork: {
      description: 'Advanced intention work includes collective manifestation and timeline healing.',
      techniques: [
        'Set group intentions for community healing and growth',
        'Work with timeline healing and past-life integration',
        'Practice reality programming through aligned intention',
        'Coordinate intentions with others for collective impact'
      ],
      mastery: [
        'Align personal will completely with divine will',
        'Set intentions that serve multiple dimensions simultaneously',
        'Work with collective unconscious through intention setting',
        'Become clear channel for planetary healing intentions'
      ]
    }
  },
  {
    name: 'Dawn Communion',
    symbol: '🙏',
    description: 'Sacred conversation with the divine, guides, or higher self through prayer and meditation.',
    timing: '10-20 minutes in quiet contemplation',
    elements: ['Prayer and devotion', 'Spiritual communication', 'Guidance reception', 'Divine relationship'],
    practice: {
      preparation: [
        'Create altar space with items representing divine connection',
        'Light candle or incense to mark sacred time',
        'Begin with humility and openness to receive guidance',
        'Call upon whatever spiritual presence feels most supportive'
      ],
      steps: [
        'Offer gratitude for blessings, challenges, and opportunities',
        'Share honestly about current life circumstances and feelings',
        'Ask for guidance on specific questions or decisions',
        'Listen deeply in silence for response - words, images, feelings',
        'Express any prayers for others who need healing or support',
        'Ask how you can best serve the highest good today',
        'Receive any messages or downloads that come through',
        'Close with gratitude and commitment to follow guidance'
      ],
      integration: [
        'Record any guidance received in spiritual journal',
        'Look for signs and synchronicities throughout day',
        'Act on guidance received with faith and trust',
        'Maintain sense of divine partnership in all activities'
      ],
      variations: [
        'Use specific prayers from your spiritual tradition',
        'Include intercession for global healing and peace',
        'Work with oracle cards, runes, or other divination tools',
        'Practice in different locations to deepen connection'
      ]
    },
    advancedWork: {
      description: 'Master communion includes channeling guidance for others and prophetic service.',
      techniques: [
        'Channel guidance for community healing and direction',
        'Receive prophetic messages for collective awakening',
        'Work as intercessor for planetary healing and peace',
        'Develop clear channel abilities for spiritual transmission'
      ],
      mastery: [
        'Maintain continuous communion throughout all activities',
        'Become clear vessel for divine will expression',
        'Channel healing presence for all beings encountered',
        'Serve as bridge between spiritual and physical realms'
      ]
    }
  }
];

export default function MorningLightSanctuary() {
  const sanctuary = getSanctuary('morning-light');
  const [selectedPractice, setSelectedPractice] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'elements' | 'practice' | 'advanced'>('elements');
  
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      {/* Welcome & Dawn Blessing */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-amber-900/40 to-yellow-900/40 rounded-3xl p-8 border border-amber-500/20">
          <h2 className="text-2xl text-amber-100 font-light mb-6 text-center">Morning Light Sanctuary</h2>
          <p className="text-amber-200/90 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Each dawn offers a sacred portal—a fresh beginning blessed with infinite potential. In the quiet 
            hours before the world awakens, we align with the natural rhythm of renewal and receive guidance 
            for conscious living. Morning practices weave intention with inspiration, grounding divine vision 
            in daily reality.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-300 text-xl">🌅</span>
              </div>
              <h3 className="text-amber-200 font-medium mb-2">Sacred Awakening</h3>
              <p className="text-amber-300/80 text-sm">Conscious threshold crossing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-300 text-xl">✨</span>
              </div>
              <h3 className="text-amber-200 font-medium mb-2">Light Body</h3>
              <p className="text-amber-300/80 text-sm">Energy activation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-300 text-xl">🎯</span>
              </div>
              <h3 className="text-amber-200 font-medium mb-2">Intention Setting</h3>
              <p className="text-amber-300/80 text-sm">Soul-aligned direction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-300 text-xl">🙏</span>
              </div>
              <h3 className="text-amber-200 font-medium mb-2">Dawn Communion</h3>
              <p className="text-amber-300/80 text-sm">Divine connection</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Sacred Dawn */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-light mb-6">The Sacred Dawn</h2>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Portal of Infinite Possibility</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-6">
            Dawn is the daily miracle of consciousness returning to form. Each morning we are reborn, given 
            another opportunity to choose love over fear, presence over unconsciousness, service over separation. 
            The early morning hours hold special potency—when the veil between worlds is thin and divine 
            guidance flows freely.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-medium mb-3">Natural Rhythms</h4>
              <ul className="text-white/80 text-sm space-y-2">
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Honor your body&apos;s natural sleep-wake cycles</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Work with sunrise timing when possible</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Adjust practices to season and location</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Trust your energy levels and capacity</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Sacred Preparation</h4>
              <ul className="text-white/80 text-sm space-y-2">
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Prepare space the night before</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Set intention to wake with awareness</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Minimize digital stimulation upon waking</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Create consistent morning ritual containers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Integration</h4>
              <ul className="text-white/80 text-sm space-y-2">
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Carry morning inspiration into daily activities</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Return to breath and presence during transitions</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Trust guidance received in morning communion</li>
                <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Share morning light through your presence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dawn Practices Selection */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-light mb-6">Sacred Dawn Practices</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {morningPractices.map((practice, index) => (
            <button
              key={index}
              onClick={() => setSelectedPractice(index)}
              className={`p-4 rounded-lg transition-all text-center ${
                selectedPractice === index 
                  ? 'bg-amber-500/30 border border-amber-400/50' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-2xl mb-2">{practice.symbol}</div>
              <div className={`text-sm font-medium mb-1 ${selectedPractice === index ? 'text-amber-200' : 'text-white/70'}`}>
                {practice.name}
              </div>
              <div className={`text-xs ${selectedPractice === index ? 'text-amber-300/80' : 'text-white/50'}`}>
                {practice.timing}
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
            <div className="bg-amber-500/20 p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{morningPractices[selectedPractice].symbol}</div>
                <div>
                  <h3 className="text-white text-xl font-medium">{morningPractices[selectedPractice].name}</h3>
                  <p className="text-amber-200/90 text-sm mt-1 mb-2">{morningPractices[selectedPractice].description}</p>
                  <p className="text-amber-300/80 text-xs">Timing: {morningPractices[selectedPractice].timing}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveTab('elements')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'elements' ? 'bg-amber-500/20 text-amber-200 border-b-2 border-amber-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Core Elements
              </button>
              <button 
                onClick={() => setActiveTab('practice')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'practice' ? 'bg-amber-500/20 text-amber-200 border-b-2 border-amber-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Practice Guide
              </button>
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'advanced' ? 'bg-amber-500/20 text-amber-200 border-b-2 border-amber-400' : 'text-white/70 hover:text-white'
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
                    {morningPractices[selectedPractice].elements.map((element, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-amber-400 mr-2">✦</span>
                        <span className="text-white/90 text-sm">{element}</span>
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
                      {morningPractices[selectedPractice].practice.preparation.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-400 mr-3 font-medium">{idx + 1}.</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Practice Steps</h4>
                    <ol className="space-y-2">
                      {morningPractices[selectedPractice].practice.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-400 mr-3 font-medium">{idx + 1}.</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Integration</h4>
                    <ul className="space-y-2">
                      {morningPractices[selectedPractice].practice.integration.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-400 mr-2">✦</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="text-blue-300 font-medium mb-3">Practice Variations</h4>
                    <ul className="space-y-2">
                      {morningPractices[selectedPractice].practice.variations.map((variation, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-2">🌟</span>
                          <span className="text-blue-200 text-sm">{variation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <TieredContent requiredTier="gardener">
                  {morningPractices[selectedPractice].advancedWork && (
                    <div className="space-y-6">
                      <div>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {morningPractices[selectedPractice].advancedWork!.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-3">Advanced Techniques</h4>
                        <ul className="space-y-2">
                          {morningPractices[selectedPractice].advancedWork!.techniques.map((technique, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-amber-400 mr-2">🌟</span>
                              <span className="text-white/90 text-sm">{technique}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-3">Mastery Levels</h4>
                        <ul className="space-y-2">
                          {morningPractices[selectedPractice].advancedWork!.mastery.map((mastery, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-amber-400 mr-2">💎</span>
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

      {/* Creating Your Morning Practice */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
        <h3 className="text-white text-xl font-light mb-4">Creating Your Sacred Morning</h3>
        <p className="text-white/90 leading-relaxed mb-6">
          The most powerful morning practice is one that feels authentic and sustainable for your life circumstances. 
          Start small and build gradually, focusing on consistency over duration. Even five minutes of conscious 
          morning practice can transform your entire day and, over time, your whole life.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-medium mb-3">Beginning Practice (5-10 minutes)</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Sacred Awakening: conscious breathing and gratitude</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Simple intention setting for the day</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Brief prayer or spiritual connection</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Gentle movement or stretching</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Intermediate Practice (10-20 minutes)</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Add Light Body Activation practice</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Deeper intention weaving and visualization</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Extended communion and guidance reception</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Journaling insights and guidance received</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Advanced Practice (20+ minutes)</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>All four practices in flowing sequence</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Planetary healing and service intentions</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Advanced energy work and light transmission</li>
              <li className="flex items-start"><span className="text-amber-400 mr-2">•</span>Channeling guidance for community service</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Dawn Keeper Path */}
      <TieredContent requiredTier="gardener">
        <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 rounded-xl p-6 border border-amber-500/20">
          <h3 className="text-amber-200 text-lg font-medium mb-3">The Dawn Keeper Path</h3>
          <p className="text-amber-200/90 text-sm leading-relaxed mb-4">
            Dawn Keepers are those who hold the morning light for their communities. Through consistent practice, 
            they become beacons of consciousness that help others remember their own awakening potential. 
            The Dawn Keeper serves not only their own evolution but the collective shift toward greater awareness 
            and love on Earth.
          </p>
          <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/20">
            <p className="text-amber-100/90 text-sm italic">
              &ldquo;Each morning you awaken consciously, you cast a vote for the kind of world you want to live in. 
              Your morning practice is not separate from planetary healing—it is planetary healing.&rdquo;
            </p>
          </div>
        </div>
      </TieredContent>
    </SanctuaryLayout>
  );
}