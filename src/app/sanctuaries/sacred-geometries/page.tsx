'use client';

import React, { useState } from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import TieredContent from '@/components/TieredContent';
import { getSanctuary } from '@/sacred/sanctuaries';

interface GeometryPattern {
  name: string;
  symbol: string;
  meaning: string;
  applications: string[];
  meditation: {
    preparation: string[];
    practice: string[];
    integration: string[];
  };
  advancedWork?: {
    description: string;
    techniques: string[];
  };
}

const sacredPatterns: GeometryPattern[] = [
  {
    name: 'Flower of Life',
    symbol: '🌸',
    meaning: 'The fundamental pattern of creation, containing all geometric forms and the blueprint of existence itself.',
    applications: ['Creation manifestation', 'Life force activation', 'Cellular regeneration', 'Sacred space blessing'],
    meditation: {
      preparation: [
        'Sit comfortably facing the Flower of Life pattern',
        'Take seven deep breaths to center your awareness',
        'Set intention to receive the pattern\'s wisdom and healing'
      ],
      practice: [
        'Soften your gaze upon the central flower',
        'Allow your eyes to naturally follow the interconnected circles',
        'Breathe into the pattern, letting it breathe into you',
        'Notice how the geometry creates a sense of wholeness',
        'Rest in the perfect symmetry and divine proportion',
        'Feel yourself as part of this infinite pattern of creation'
      ],
      integration: [
        'Place hands on heart and feel the pattern within your cells',
        'Carry this sense of perfect order into your day',
        'Trust that you are part of creation\'s perfect design'
      ]
    },
    advancedWork: {
      description: 'Advanced practitioners can use the Flower of Life for reality programming and dimensional healing.',
      techniques: [
        'Project the pattern into your auric field for protection',
        'Use as a template for manifestation work',
        'Activate the pattern in sacred sites and healing spaces',
        'Work with the 19 circles for timeline healing'
      ]
    }
  },
  {
    name: 'Sri Yantra',
    symbol: '🔯',
    meaning: 'The cosmic mother principle, representing the union of masculine and feminine divine energies in perfect harmony.',
    applications: ['Divine union', 'Abundance activation', 'Spiritual awakening', 'Consciousness expansion'],
    meditation: {
      preparation: [
        'Create sacred space with candle or incense',
        'Sit in meditation posture facing the Sri Yantra',
        'Honor the divine feminine and masculine within'
      ],
      practice: [
        'Begin at the outer square, the material world',
        'Let your awareness move inward through each layer',
        'Follow the triangles pointing up (Shiva) and down (Shakti)',
        'Notice the dynamic dance of creation and dissolution',
        'Rest in the central bindu point - pure consciousness',
        'Feel the union of all opposites within your being'
      ],
      integration: [
        'Bow to the divine union within yourself',
        'Carry this balance into all relationships',
        'See the Sri Yantra pattern in nature and life'
      ]
    },
    advancedWork: {
      description: 'The Sri Yantra serves as a powerful tool for consciousness transformation and abundance manifestation.',
      techniques: [
        'Trace the pattern with finger while chanting OM',
        'Visualize the yantra in your heart chakra',
        'Use for tantric meditation and energy raising',
        'Place under objects to energize and sanctify them'
      ]
    }
  },
  {
    name: 'Merkaba',
    symbol: '✨',
    meaning: 'The divine light vehicle, a three-dimensional star tetrahedron representing the union of spirit and matter.',
    applications: ['Interdimensional travel', 'Energy field activation', 'Spiritual protection', 'Consciousness elevation'],
    meditation: {
      preparation: [
        'Stand or sit with arms extended, forming a star shape',
        'Breathe deeply and ground yourself in present moment',
        'Invoke protection and guidance for this sacred work'
      ],
      practice: [
        'Visualize a tetrahedron of light around your upper body',
        'See another inverted tetrahedron around your lower body',
        'Breathe light into both pyramids simultaneously',
        'Feel them begin to spin in opposite directions',
        'Increase the speed until they become pure light',
        'Rest in the merkaba field of divine protection'
      ],
      integration: [
        'Ground the light body into your physical form',
        'Set intention for how this energy will serve',
        'Walk in awareness of your expanded light field'
      ]
    },
    advancedWork: {
      description: 'The Merkaba is a vehicle for consciousness travel and multidimensional healing work.',
      techniques: [
        'Practice merkaba breathing for field activation',
        'Use for astral travel and remote healing',
        'Create group merkabas for collective healing',
        'Integrate with chakra work for full-spectrum activation'
      ]
    }
  },
  {
    name: 'Metatron\'s Cube',
    symbol: '⬡',
    meaning: 'The container of all five Platonic solids, representing the building blocks of physical reality and divine order.',
    applications: ['Reality structuring', 'Energy clearing', 'Sacred architecture', 'Elemental balancing'],
    meditation: {
      preparation: [
        'Sit in a clean, organized space reflecting divine order',
        'Call upon Archangel Metatron for guidance and protection',
        'Set intention to align with divine geometric principles'
      ],
      practice: [
        'Gaze softly at the complex interwoven pattern',
        'Don\'t try to understand, simply receive the frequency',
        'Let the geometry reorganize any chaos in your field',
        'Feel the stability and perfection of divine structure',
        'Breathe into the spaces between the lines',
        'Allow the pattern to clear and align your energy'
      ],
      integration: [
        'Feel yourself as an expression of divine order',
        'Bring this organizational energy into your life',
        'Trust the perfect structure underlying all existence'
      ]
    },
    advancedWork: {
      description: 'Metatron\'s Cube is used for environmental clearing and reality structuring work.',
      techniques: [
        'Project the cube to clear negative energies from spaces',
        'Use for geometric healing and energy alignment',
        'Integrate with architectural and garden design',
        'Work with the five Platonic solids individually'
      ]
    }
  },
  {
    name: 'Vesica Piscis',
    symbol: '◯',
    meaning: 'The sacred portal created by two overlapping circles, representing the birth of consciousness and divine creativity.',
    applications: ['Portal opening', 'Manifestation work', 'Healing wounds', 'Sacred union'],
    meditation: {
      preparation: [
        'Draw two overlapping circles on paper or visualize them',
        'Sit quietly contemplating the lens-shaped intersection',
        'Breathe into your heart center and set creative intention'
      ],
      practice: [
        'Focus on the almond-shaped space where circles overlap',
        'See this as a portal between dimensions',
        'Breathe creative potential into this sacred space',
        'Feel the birth of new possibilities within you',
        'Rest in the fertility of this geometric womb',
        'Allow new insights and healing to emerge'
      ],
      integration: [
        'Honor what seeks to be born through you',
        'Trust the creative process in your life',
        'See portals of possibility everywhere'
      ]
    },
    advancedWork: {
      description: 'The Vesica Piscis is a powerful portal for manifestation and interdimensional communication.',
      techniques: [
        'Create physical vesica piscis for ritual work',
        'Use for couples healing and relationship work',
        'Apply to artistic creation and inspiration',
        'Work with as birth canal for new projects'
      ]
    }
  }
];

export default function SacredGeometryTemplePage() {
  const sanctuary = getSanctuary('sacred-geometries');
  const [selectedPattern, setSelectedPattern] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'meaning' | 'meditation' | 'advanced'>('meaning');
  
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      {/* Welcome & Introduction */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-3xl p-8 border border-indigo-500/20">
          <h2 className="text-2xl text-indigo-100 font-light mb-6 text-center">Sacred Geometry Temple</h2>
          <p className="text-indigo-200/90 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Sacred geometry reveals the divine blueprint underlying all creation. These patterns are the language through which 
            the universe structures itself, from the spiral of galaxies to the formation of crystals. By meditating with these 
            forms, we align with the fundamental harmonies of existence and activate their transformative power within our being.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-300 text-xl">🌸</span>
              </div>
              <h3 className="text-indigo-200 font-medium mb-2">Divine Patterns</h3>
              <p className="text-indigo-300/80 text-sm">Ancient geometric forms that structure reality</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-300 text-xl">👁️</span>
              </div>
              <h3 className="text-indigo-200 font-medium mb-2">Contemplative Gazing</h3>
              <p className="text-indigo-300/80 text-sm">Soft receptive practice with sacred forms</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-300 text-xl">⚡</span>
              </div>
              <h3 className="text-indigo-200 font-medium mb-2">Energetic Activation</h3>
              <p className="text-indigo-300/80 text-sm">Integrating geometric frequencies into your field</p>
            </div>
          </div>
        </div>
      </div>

      {/* Foundation Practice */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-light mb-6">Foundation Practice</h2>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Sacred Gazing Method</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Choose one pattern below. Soften your eyes and receive rather than stare. Let your breathing naturally 
            synchronize with the perceived symmetry. When subtle pulsation, depth, or movement appears in the pattern, 
            you are entering resonance. Gently close the session with gratitude when complete.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-white font-medium mb-2">Preparation</h4>
              <ul className="text-white/80 space-y-1">
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Sit comfortably with spine naturally straight</li>
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Ensure the pattern is at comfortable eye level</li>
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Take several deep breaths to center</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Integration</h4>
              <ul className="text-white/80 space-y-1">
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Close eyes and feel the pattern within</li>
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Place hands on heart to anchor the frequency</li>
                <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Carry the harmony into your day</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sacred Patterns Selection */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-light mb-6">Sacred Patterns</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {sacredPatterns.map((pattern, index) => (
            <button
              key={index}
              onClick={() => setSelectedPattern(index)}
              className={`p-4 rounded-lg transition-all text-center ${
                selectedPattern === index 
                  ? 'bg-indigo-500/30 border border-indigo-400/50' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-2xl mb-2">{pattern.symbol}</div>
              <div className={`text-sm font-medium ${selectedPattern === index ? 'text-indigo-200' : 'text-white/70'}`}>
                {pattern.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Pattern Details */}
      {selectedPattern !== null && (
        <div className="mb-12">
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            {/* Pattern Header */}
            <div className="bg-indigo-500/20 p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{sacredPatterns[selectedPattern].symbol}</div>
                <div>
                  <h3 className="text-white text-xl font-medium">{sacredPatterns[selectedPattern].name}</h3>
                  <p className="text-indigo-200/90 text-sm mt-1">{sacredPatterns[selectedPattern].meaning}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveTab('meaning')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'meaning' ? 'bg-indigo-500/20 text-indigo-200 border-b-2 border-indigo-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Sacred Meaning
              </button>
              <button 
                onClick={() => setActiveTab('meditation')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'meditation' ? 'bg-indigo-500/20 text-indigo-200 border-b-2 border-indigo-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Meditation Practice
              </button>
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === 'advanced' ? 'bg-indigo-500/20 text-indigo-200 border-b-2 border-indigo-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Advanced Work
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'meaning' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Applications & Uses</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {sacredPatterns[selectedPattern].applications.map((app, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="text-indigo-400 mr-2">✦</span>
                          <span className="text-white/90 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'meditation' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Preparation</h4>
                    <ol className="space-y-2">
                      {sacredPatterns[selectedPattern].meditation.preparation.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-indigo-400 mr-3 font-medium">{idx + 1}.</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Core Practice</h4>
                    <ol className="space-y-2">
                      {sacredPatterns[selectedPattern].meditation.practice.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-indigo-400 mr-3 font-medium">{idx + 1}.</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Integration</h4>
                    <ol className="space-y-2">
                      {sacredPatterns[selectedPattern].meditation.integration.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-indigo-400 mr-3 font-medium">{idx + 1}.</span>
                          <span className="text-white/90 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <TieredContent requiredTier="gardener">
                  {sacredPatterns[selectedPattern].advancedWork && (
                    <div className="space-y-6">
                      <div>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {sacredPatterns[selectedPattern].advancedWork!.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-3">Advanced Techniques</h4>
                        <ul className="space-y-2">
                          {sacredPatterns[selectedPattern].advancedWork!.techniques.map((technique, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-indigo-400 mr-2">⚡</span>
                              <span className="text-white/90 text-sm">{technique}</span>
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

      {/* Living Geometry */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
        <h3 className="text-white text-xl font-light mb-4">Living Geometry in Daily Life</h3>
        <p className="text-white/90 leading-relaxed mb-6">
          Sacred geometry is not confined to meditation practice - it lives in every flower, crystal, and natural form. 
          Begin to notice these patterns in nature, architecture, and art. Let your awareness of divine proportion 
          transform how you see and interact with the world around you.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-medium mb-3">In Nature</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Flower spirals and petal arrangements</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Crystal formations and mineral structures</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Honeycomb patterns and cellular growth</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Wave patterns and water formations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">In Art & Architecture</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Cathedral rose windows and mandalas</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Islamic geometric patterns</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Ancient temple proportions</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Modern fractal art expressions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">In Your Space</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Create geometric altars and arrangements</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Use sacred ratios in garden design</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Place geometric art for energetic harmony</li>
              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span>Arrange crystals in sacred patterns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Master Practice */}
      <TieredContent requiredTier="gardener">
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-indigo-200 text-lg font-medium mb-3">Master Practice: Geometric Transmission</h3>
          <p className="text-indigo-200/90 text-sm leading-relaxed mb-4">
            Advanced practitioners can learn to transmit geometric frequencies for healing and space clearing. 
            This involves visualizing and projecting sacred patterns into environments, people (with permission), 
            and situations that need divine order and harmony.
          </p>
          <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
            <p className="text-indigo-100/90 text-sm italic">
              &ldquo;Become a living mandala - let the sacred patterns structure your thoughts, emotions, and actions. 
              When you embody divine geometry, you become a transmission point for cosmic harmony.&rdquo;
            </p>
          </div>
        </div>
      </TieredContent>
    </SanctuaryLayout>
  );
}
