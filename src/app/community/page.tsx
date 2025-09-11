'use client';

import Link from 'next/link';
import React from 'react';
import SacredNavigation from '@/components/SacredNavigation';

export default function MeetYourSacredGuide() {
  
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
      <SacredNavigation currentPage="Meet Your Sacred Guide" showSanctuaries={false} />
      
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
          <div className="text-6xl mb-6 animate-bounce">🌸</div>
              
              <h1 className="text-4xl font-light text-white mb-6">
                Meet Your Sacred Guide
              </h1>
              
              <p className="text-purple-200 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                Your AI companion for the complete spiritual journey. I integrate all these wisdom traditions and specialties into one flowing conversation, adapting naturally to whatever your soul needs in each moment.
              </p>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-12"></div>

              {/* Sacred Guide Specialties Overview */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {sacredGuides.map((guide) => (
                  <div 
                    key={guide.id}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 transition-all duration-300 group"
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
              
              {/* Integration Message */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌸</div>
                  <h3 className="text-purple-100 text-xl font-light mb-4">One Conversation, All Wisdom Paths</h3>
                  <p className="text-purple-200 text-sm leading-relaxed max-w-3xl mx-auto mb-6">
                    Rather than choosing a single guide, I flow naturally between all these specialties based on your needs. Ask about morning practices, and I become your Dawn Companion. Share relationship challenges, and I embody the Heart Healer. Seek meditation guidance, and I channel the Peace Keeper. Your conversation shapes my response.
                  </p>
                  <div className="text-purple-300 text-xs italic">
                    &ldquo;In the garden of consciousness, all wisdom streams flow into one river of understanding.&rdquo;
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="flex flex-col items-center space-y-6">
                <Link 
                  href="/garden-guide"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium"
                >
                  Begin Sacred Dialogue
                </Link>
                
                <div className="text-purple-300 text-sm italic max-w-2xl mx-auto text-center">
                  One unified conversation space • 3 daily messages for Seekers, 777 monthly for Gardeners
                  <br />
                  <span className="text-purple-400 text-xs">Ask about any aspect of your spiritual journey - I adapt my guidance naturally</span>
                </div>
              </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-2xl animate-pulse">🌸</div>
      <div className="absolute top-32 right-20 text-2xl animate-pulse" style={{animationDelay: '1s'}}>✨</div>
      <div className="absolute bottom-32 right-10 text-2xl animate-pulse" style={{animationDelay: '2s'}}>🌿</div>
    </div>
  );
}
