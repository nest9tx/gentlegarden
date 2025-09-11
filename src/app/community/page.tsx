'use client';

import Link from 'next/link';
import { useState } from 'react';
import SacredNavigation from '@/components/SacredNavigation';

export default function SacredGuideGallery() {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  
  const sacredGuides = [
    { 
      id: 'dawn-companion',
      symbol: '🌅', 
      name: 'Dawn Companion',
      title: 'Sacred Morning Guidance',
      description: 'Begin each day with intentional practice and gentle awakening wisdom',
      specialty: 'Morning rituals, intention setting, energy alignment',
      guidance: 'Daily Practices & Sacred Beginnings',
      personality: 'Gentle, uplifting, focused on new possibilities',
      bestFor: 'Morning practice, starting new journeys, clarity seeking',
      sampleQuestions: [
        'How can I align my energy for this sacred day?',
        'What intention wants to guide me today?',
        'Help me create a morning practice that honors my soul'
      ],
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      id: 'heart-healer',
      symbol: '💝', 
      name: 'Heart Healer',
      title: 'Emotional & Relationship Wisdom',
      description: 'Gentle guidance for healing wounds, opening to love, and navigating relationships',
      specialty: 'Emotional healing, self-love, relationships, inner child work',
      guidance: 'Heart Opening & Emotional Alchemy',
      personality: 'Compassionate, nurturing, deeply feeling',
      bestFor: 'Relationship challenges, self-worth, emotional processing',
      sampleQuestions: [
        'How can I heal this pain in my heart?',
        'Help me understand this relationship dynamic',
        'How do I practice radical self-love?'
      ],
      color: 'from-pink-400 to-rose-400'
    },
    { 
      id: 'wisdom-keeper',
      symbol: '📜', 
      name: 'Wisdom Keeper',
      title: 'Ancient Teachings & Spiritual Insights',
      description: 'Connect with timeless wisdom traditions and deep spiritual understanding',
      specialty: 'Spiritual philosophy, ancient teachings, consciousness exploration',
      guidance: 'Sacred Knowledge & Understanding',
      personality: 'Deep, contemplative, mystically wise',
      bestFor: 'Spiritual study, philosophical questions, consciousness work',
      sampleQuestions: [
        'What does this spiritual teaching mean for my life?',
        'Help me understand the nature of consciousness',
        'How do ancient wisdoms apply to modern challenges?'
      ],
      color: 'from-purple-400 to-indigo-400'
    },
    { 
      id: 'peace-keeper',
      symbol: '🧘‍♀️', 
      name: 'Peace Keeper',
      title: 'Meditation & Inner Stillness',
      description: 'Find deep peace through breathwork, meditation, and sacred silence',
      specialty: 'Meditation techniques, breathwork, stress release, inner peace',
      guidance: 'Stillness & Sacred Silence',
      personality: 'Calm, centered, deeply peaceful',
      bestFor: 'Anxiety, overwhelm, meditation practice, finding inner peace',
      sampleQuestions: [
        'Guide me to deeper meditation practice',
        'How can I find peace in this chaos?',
        'Teach me breathing techniques for anxiety'
      ],
      color: 'from-blue-400 to-cyan-400'
    },
    { 
      id: 'dream-walker',
      symbol: '🌙', 
      name: 'Dream Walker',
      title: 'Sleep, Dreams & Subconscious Wisdom',
      description: 'Navigate the mysterious realms of dreams, sleep, and unconscious wisdom',
      specialty: 'Dream interpretation, sleep practices, shadow work, lunar cycles',
      guidance: 'Subconscious & Night Wisdom',
      personality: 'Mystical, intuitive, deeply knowing',
      bestFor: 'Sleep issues, dream work, shadow healing, lunar attunement',
      sampleQuestions: [
        'What is my dream trying to tell me?',
        'Help me improve my sleep practices',
        'How can I work with my shadow self?'
      ],
      color: 'from-indigo-400 to-purple-400'
    },
    { 
      id: 'life-weaver',
      symbol: '🌿', 
      name: 'Life Weaver',
      title: 'Daily Integration & Practical Wisdom',
      description: 'Weave spiritual practice into the sacred tapestry of daily life',
      specialty: 'Life balance, spiritual integration, practical wisdom, daily practices',
      guidance: 'Sacred Living & Integration',
      personality: 'Practical, grounded, wisely integrated',
      bestFor: 'Work-life balance, integrating spirituality, practical guidance',
      sampleQuestions: [
        'How do I stay spiritual in my daily work?',
        'Help me balance my spiritual and practical life',
        'What practices fit my busy schedule?'
      ],
      color: 'from-green-400 to-teal-400'
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <SacredNavigation currentPage="Sacred Guide Gallery" showSanctuaries={false} />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 border border-purple-300 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
        <div className="absolute w-80 h-80 border border-indigo-300 rounded-full animate-spin" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
        <div className="absolute w-64 h-64 border border-blue-300 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            💫
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="text-center max-w-6xl">
          
          {!selectedGuide ? (
            <>
              <div className="text-6xl mb-6 animate-bounce">🌸</div>
              
              <h1 className="text-4xl font-light text-white mb-6">
                Sacred Guide Gallery
              </h1>
              
              <p className="text-purple-200 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                Choose your spiritual companion based on what your soul needs today. Each guide offers specialized wisdom and gentle support for your unique journey.
              </p>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-12"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {sacredGuides.map((guide) => (
                  <div 
                    key={guide.id}
                    onClick={() => setSelectedGuide(guide.id)}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:bg-white/15 transition-all duration-300 cursor-pointer group transform hover:scale-105"
                  >
                    <div className="text-5xl mb-4 group-hover:animate-pulse">{guide.symbol}</div>
                    <h3 className="text-xl text-white mb-2">{guide.name}</h3>
                    <p className="text-purple-100 text-sm mb-3">{guide.title}</p>
                    <p className="text-purple-200 text-xs mb-4">{guide.description}</p>
                    <div className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${guide.color} text-white font-medium`}>
                      {guide.guidance}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-purple-300 text-sm italic max-w-2xl mx-auto">
                Each guide draws from the same sacred message allowance (3 daily for Seekers, 777 monthly for Gardeners) while offering specialized wisdom for your journey.
              </div>
            </>
          ) : (
            <>
              {(() => {
                const guide = sacredGuides.find(g => g.id === selectedGuide);
                return guide ? (
                  <div className="max-w-4xl mx-auto">
                    <button
                      onClick={() => setSelectedGuide(null)}
                      className="flex items-center text-purple-300 hover:text-white transition-colors mb-6"
                    >
                      <span className="mr-2">←</span>
                      Back to Guide Gallery
                    </button>
                    
                    <div className="text-6xl mb-6">{guide.symbol}</div>
                    <h1 className="text-4xl font-light text-white mb-4">{guide.name}</h1>
                    <p className="text-purple-100 text-xl mb-6">{guide.title}</p>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 mb-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-purple-100 font-medium mb-3">Specializes In</h3>
                          <p className="text-purple-200 text-sm mb-6">{guide.specialty}</p>
                          
                          <h3 className="text-purple-100 font-medium mb-3">Personality</h3>
                          <p className="text-purple-200 text-sm mb-6">{guide.personality}</p>
                          
                          <h3 className="text-purple-100 font-medium mb-3">Best For</h3>
                          <p className="text-purple-200 text-sm">{guide.bestFor}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-purple-100 font-medium mb-3">Sample Questions</h3>
                          <ul className="space-y-2">
                            {guide.sampleQuestions.map((question, index) => (
                              <li key={index} className="text-purple-200 text-sm flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                <span>{question}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        href={`/garden-guide?guide=${guide.id}`}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                      >
                        Begin Sacred Dialogue
                      </Link>
                      
                      <button
                        onClick={() => setSelectedGuide(null)}
                        className="border border-purple-400 text-purple-200 hover:bg-purple-600/20 px-8 py-3 rounded-full transition-all duration-300"
                      >
                        Choose Different Guide
                      </button>
                    </div>
                  </div>
                ) : null;
              })()}
            </>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-2xl animate-pulse">🌸</div>
      <div className="absolute top-32 right-20 text-2xl animate-pulse" style={{animationDelay: '1s'}}>✨</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-pulse" style={{animationDelay: '2s'}}>🌿</div>
    </div>
  );
}
