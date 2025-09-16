'use client';

import React, { useState } from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import { getSanctuary } from '@/sacred/sanctuaries';
import TieredContent from '@/components/TieredContent';

interface ChakraData {
  name: string;
  color: string;
  colorClass: string;
  location: string;
  element: string;
  mantra: string;
  meaning: string;
  qualities: string[];
  balancedSigns: string[];
  imbalancedSigns: string[];
  clearingPractices: string[];
  deeperPractices?: string[];
}

const chakras: ChakraData[] = [
  {
    name: 'Root Chakra (Muladhara)',
    color: 'Deep Red',
    colorClass: 'from-red-800 to-red-600',
    location: 'Base of spine, pelvic floor',
    element: 'Earth',
    mantra: 'LAM',
    meaning: 'Foundation, survival, grounding, feeling safe and secure in the physical world',
    qualities: ['Stability', 'Security', 'Grounding', 'Physical vitality', 'Trust in life'],
    balancedSigns: ['Feeling secure and grounded', 'Healthy relationship with money', 'Strong physical vitality', 'Trust in life\'s abundance'],
    imbalancedSigns: ['Anxiety about survival', 'Financial fears', 'Physical restlessness', 'Feeling unsafe or ungrounded'],
    clearingPractices: ['Walk barefoot on earth', 'Breathing into the pelvic floor', 'Red light visualization', 'Grounding meditations'],
    deeperPractices: ['Root lock (Mula Bandha) breathing', 'Earth element attunements', 'Ancestral healing practices', 'Deep survival pattern release work']
  },
  {
    name: 'Sacral Chakra (Svadhisthana)',
    color: 'Vibrant Orange',
    colorClass: 'from-orange-600 to-orange-400',
    location: 'Lower belly, below navel',
    element: 'Water',
    mantra: 'VAM',
    meaning: 'Creativity, sexuality, emotions, pleasure, and healthy relationships',
    qualities: ['Creative flow', 'Emotional fluidity', 'Healthy sexuality', 'Joy and pleasure', 'Flexibility'],
    balancedSigns: ['Creative inspiration flows freely', 'Comfortable with emotions', 'Healthy sexual expression', 'Joy in simple pleasures'],
    imbalancedSigns: ['Creative blocks', 'Emotional numbness or overwhelm', 'Sexual shame or compulsion', 'Difficulty with intimacy'],
    clearingPractices: ['Hip opening movements', 'Emotional release through dance', 'Orange light meditation', 'Water element connection'],
    deeperPractices: ['Sacred sexuality teachings', 'Womb/hara healing practices', 'Creative manifestation work', 'Emotional alchemy techniques']
  },
  {
    name: 'Solar Plexus (Manipura)',
    color: 'Golden Yellow',
    colorClass: 'from-yellow-500 to-yellow-300',
    location: 'Upper belly, below ribcage',
    element: 'Fire',
    mantra: 'RAM',
    meaning: 'Personal power, confidence, willpower, and healthy boundaries',
    qualities: ['Personal power', 'Self-confidence', 'Clear boundaries', 'Willpower', 'Leadership'],
    balancedSigns: ['Strong sense of self-worth', 'Healthy assertiveness', 'Clear personal boundaries', 'Ability to make decisions'],
    imbalancedSigns: ['Low self-esteem', 'People-pleasing', 'Anger issues', 'Control problems', 'Digestive issues'],
    clearingPractices: ['Core strengthening practices', 'Sun gazing meditation', 'Boundary visualization', 'Fire breath (Kapalabhati)'],
    deeperPractices: ['Solar alchemy practices', 'Shadow work integration', 'Authority healing', 'Warrior archetype activation']
  },
  {
    name: 'Heart Chakra (Anahata)',
    color: 'Emerald Green',
    colorClass: 'from-green-600 to-green-400',
    location: 'Center of chest',
    element: 'Air',
    mantra: 'YAM',
    meaning: 'Love, compassion, connection, forgiveness, and emotional healing',
    qualities: ['Unconditional love', 'Compassion', 'Forgiveness', 'Connection', 'Empathy'],
    balancedSigns: ['Ability to give and receive love', 'Forgiveness comes naturally', 'Deep compassion for self and others', 'Healthy relationships'],
    imbalancedSigns: ['Difficulty with intimacy', 'Holding grudges', 'Codependency', 'Feeling isolated', 'Chest tightness'],
    clearingPractices: ['Heart-opening breathwork', 'Loving-kindness meditation', 'Green light visualization', 'Forgiveness practices'],
    deeperPractices: ['Heart-brain coherence training', 'Compassion cultivation', 'Relationship healing work', 'Divine love transmission practices']
  },
  {
    name: 'Throat Chakra (Vishuddha)',
    color: 'Sky Blue',
    colorClass: 'from-blue-500 to-blue-300',
    location: 'Throat, neck area',
    element: 'Space/Ether',
    mantra: 'HAM',
    meaning: 'Authentic expression, truth, communication, and creative voice',
    qualities: ['Authentic expression', 'Clear communication', 'Speaking truth', 'Creative voice', 'Listening'],
    balancedSigns: ['Speaking truth with kindness', 'Creative self-expression', 'Good listening skills', 'Clear communication'],
    imbalancedSigns: ['Fear of speaking up', 'Talking too much or too little', 'Throat tension', 'Feeling unheard', 'Creative blocks'],
    clearingPractices: ['Chanting and singing', 'Blue light meditation', 'Throat massage', 'Truth-telling practices'],
    deeperPractices: ['Sound healing techniques', 'Voice activation work', 'Truth transmission practices', 'Channeling pure expression']
  },
  {
    name: 'Third Eye (Ajna)',
    color: 'Indigo Purple',
    colorClass: 'from-indigo-700 to-indigo-500',
    location: 'Center of forehead, between eyebrows',
    element: 'Light',
    mantra: 'OM',
    meaning: 'Intuition, inner wisdom, psychic perception, and spiritual insight',
    qualities: ['Clear intuition', 'Inner wisdom', 'Spiritual insight', 'Mental clarity', 'Psychic perception'],
    balancedSigns: ['Strong intuitive guidance', 'Clear mental focus', 'Spiritual insights arise naturally', 'Balanced logic and intuition'],
    imbalancedSigns: ['Confusion and indecision', 'Overthinking', 'Lack of intuitive connection', 'Headaches', 'Eye strain'],
    clearingPractices: ['Third eye meditation', 'Indigo light visualization', 'Intuition development exercises', 'Mindfulness practices'],
    deeperPractices: ['Psychic development training', 'Vision quest practices', 'Astral projection techniques', 'Advanced meditation states']
  },
  {
    name: 'Crown Chakra (Sahasrara)',
    color: 'Violet to White',
    colorClass: 'from-purple-700 to-white',
    location: 'Top of head',
    element: 'Pure Consciousness',
    mantra: 'Silence (or OM)',
    meaning: 'Spiritual connection, divine consciousness, enlightenment, and unity',
    qualities: ['Spiritual connection', 'Divine consciousness', 'Unity awareness', 'Transcendence', 'Pure knowing'],
    balancedSigns: ['Sense of connection to the divine', 'Peace and serenity', 'Spiritual purpose clarity', 'Transcendent experiences'],
    imbalancedSigns: ['Spiritual disconnection', 'Materialism', 'Cynicism', 'Lack of life purpose', 'Depression'],
    clearingPractices: ['Meditation and prayer', 'Violet light visualization', 'Spiritual study', 'Service to others'],
    deeperPractices: ['Advanced meditation retreats', 'Mystical union practices', 'Divine consciousness transmission', 'Enlightenment pathways']
  }
];

export default function ChakraSanctumPage() {
  const sanctuary = getSanctuary('chakras');
  const [selectedChakra, setSelectedChakra] = useState<number | null>(null);

  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      {/* Overview Section */}
      <div className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3 tracking-wide">A Living Spectrum</h3>
            <p className="text-sm text-purple-200/80 leading-relaxed">
              Rather than rigid wheels, feel these centers as relational fields of intelligence. They respond to breath, 
              awareness and compassionate witnessing. Each chakra offers a different lens through which life energy flows 
              and expresses itself. No forcing—just gentle listening and tending.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Practice Orientation</h3>
            <p className="text-sm text-purple-200/80 leading-relaxed">
              Begin with a simple vertical scan upon waking or before sleep: base → crown → heart → whole field. 
              Note any textures, colors, emotions. Offer breath where constriction is felt. Trust what arises without judgment.
            </p>
          </div>
        </div>
      </div>

      {/* Chakra Overview Grid */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-light mb-8 text-center">The Seven Centers</h2>
        <div className="grid gap-4">
          {chakras.map((chakra, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r ${chakra.colorClass} rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${selectedChakra === index ? 'ring-2 ring-white/50' : ''}`}
              onClick={() => setSelectedChakra(selectedChakra === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium">{chakra.name}</h3>
                    <p className="text-white/80 text-sm">{chakra.location} • {chakra.color}</p>
                  </div>
                </div>
                <div className="text-white/60">
                  {selectedChakra === index ? '▲' : '▼'}
                </div>
              </div>
              
              {selectedChakra === index && (
                <div className="mt-6 space-y-6 border-t border-white/20 pt-6">
                  {/* Basic Information (Available to all) */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-2">Element & Mantra</h4>
                      <p className="text-white/90 text-sm">Element: {chakra.element}</p>
                      <p className="text-white/90 text-sm">Mantra: {chakra.mantra}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Core Meaning</h4>
                      <p className="text-white/90 text-sm">{chakra.meaning}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Key Qualities</h4>
                    <div className="flex flex-wrap gap-2">
                      {chakra.qualities.map((quality, idx) => (
                        <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-white/90 text-sm">
                          {quality}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Free Content for Seekers */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-2">When Balanced</h4>
                      <ul className="text-white/90 text-sm space-y-1">
                        {chakra.balancedSigns.map((sign, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-white/60 mr-2">•</span>
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">When Imbalanced</h4>
                      <ul className="text-white/90 text-sm space-y-1">
                        {chakra.imbalancedSigns.map((sign, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-white/60 mr-2">•</span>
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Basic Clearing Practices (Available to all) */}
                  <div>
                    <h4 className="text-white font-medium mb-2">Gentle Clearing Practices</h4>
                    <ul className="text-white/90 text-sm space-y-1">
                      {chakra.clearingPractices.map((practice, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-white/60 mr-2">•</span>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Premium Content for Gardeners */}
                  {chakra.deeperPractices && (
                    <div className="border-t border-white/20 pt-6">
                      <TieredContent 
                        requiredTier="gardener"
                        upgradeMessage="Unlock advanced chakra clearing techniques, energy transmission practices, and profound healing methodologies."
                      >
                        <div>
                          <h4 className="text-white font-medium mb-2">🌱 Deeper Practices (Gardeners)</h4>
                          <ul className="text-white/90 text-sm space-y-1">
                            {chakra.deeperPractices.map((practice, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-400 mr-2">✦</span>
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TieredContent>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Integration Practice */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-white text-xl font-light mb-4">Full Spectrum Integration</h3>
        <p className="text-purple-200/90 leading-relaxed mb-6">
          After exploring individual chakras, practice sensing them as a unified field. Breathe light down from crown to root, 
          then up from root to crown. Feel how each center communicates with the others, creating a harmonious symphony of energy.
        </p>
        
        <TieredContent 
          requiredTier="gardener"
          upgradeMessage="Access our guided Rainbow Bridge Meditation and other advanced integration practices."
        >
          <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400">
            <h4 className="text-green-300 font-medium mb-2">🌱 Gardener Practice: Rainbow Bridge Meditation</h4>
            <p className="text-white/90 text-sm">
              A 20-minute guided journey through all seven centers with color visualization, sound healing, 
              and energy transmission techniques for deep chakra activation and alignment.
            </p>
          </div>
        </TieredContent>
      </div>
    </SanctuaryLayout>
  );
}
