'use client';

import { useState } from 'react';
import Link from 'next/link';
import SacredFrequencies from '@/components/SacredFrequencies';

interface SacredSharing {
  id: string;
  date: string;
  soul: string; // Anonymous soul identifier
  reflection: string;
  hearts: number;
  prayers: number;
}

interface WeeklyIntention {
  week: string;
  intention: string;
  contributors: number;
  energy: number; // 0-100
}

export default function SacredGardeners() {
  const [currentTab, setCurrentTab] = useState<'reflection' | 'sharing' | 'intention'>('reflection');
  const [personalReflection, setPersonalReflection] = useState('');
  const [sacredSharing, setSacredSharing] = useState('');
  const [showShareForm, setShowShareForm] = useState(false);
  const [hasReflectedToday, setHasReflectedToday] = useState(false);

  // Mock data for demonstration
  const todaysPrompt = "What seeds are you lovingly tending in your inner garden today?";
  const circleEnergy = 87; // 0-100 collective energy level
  const participantCount = 156;

  const weeklyIntention: WeeklyIntention = {
    week: "July 18-24, 2025",
    intention: "May we tend our practices with the gentleness of morning dew, nurturing growth without forcing.",
    contributors: 89,
    energy: 92
  };

  const recentSharings: SacredSharing[] = [
    {
      id: '1',
      date: '2 hours ago',
      soul: 'Gentle Bloom',
      reflection: 'My morning meditation felt like watering the seeds of patience within me. Each breath, a gentle tending.',
      hearts: 12,
      prayers: 3
    },
    {
      id: '2',
      date: '4 hours ago',
      soul: 'Quiet Seeker',
      reflection: 'I noticed today how my anxious thoughts are like weeds - not bad, just growing where I need different plants. Gentle awareness is my gardening tool.',
      hearts: 18,
      prayers: 7
    },
    {
      id: '3',
      date: '6 hours ago',
      soul: 'Sacred Sprout',
      reflection: 'The frequency work is becoming my daily soil preparation. 432Hz feels like sunshine for my inner garden.',
      hearts: 15,
      prayers: 4
    }
  ];

  const saveReflection = () => {
    if (personalReflection.trim()) {
      setHasReflectedToday(true);
      setPersonalReflection('');
      // Here would be actual save to database
    }
  };

  const shareWithCircle = () => {
    if (sacredSharing.trim()) {
      // Here would be actual save to database
      setSacredSharing('');
      setShowShareForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative">
      {/* Sacred Frequencies */}
      <SacredFrequencies defaultEnabled={false} />

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          href="/community"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-green-300/30 rounded-xl text-green-200 hover:bg-white/20 transition-all duration-300"
        >
          <span>←</span>
          <span>Return to Sacred Circles</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Circle Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-6 animate-pulse">🌿</div>
          <h1 className="text-4xl font-light text-white mb-2">Sacred Gardeners</h1>
          <p className="text-green-200 text-lg mb-4">Tending Practice & Growth</p>
          <div className="flex justify-center items-center space-x-6 text-sm text-green-300">
            <div>{participantCount} souls tending together</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Circle Energy: {circleEnergy}%</span>
            </div>
          </div>
        </div>

        {/* Sacred Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-green-300/30">
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentTab('reflection')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  currentTab === 'reflection'
                    ? 'bg-green-500/30 text-green-100 border border-green-400/30'
                    : 'text-green-300 hover:text-green-200'
                }`}
              >
                🌱 Daily Reflection
              </button>
              <button
                onClick={() => setCurrentTab('sharing')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  currentTab === 'sharing'
                    ? 'bg-green-500/30 text-green-100 border border-green-400/30'
                    : 'text-green-300 hover:text-green-200'
                }`}
              >
                💫 Sacred Sharing
              </button>
              <button
                onClick={() => setCurrentTab('intention')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  currentTab === 'intention'
                    ? 'bg-green-500/30 text-green-100 border border-green-400/30'
                    : 'text-green-300 hover:text-green-200'
                }`}
              >
                🙏 Weekly Intention
              </button>
            </div>
          </div>
        </div>

        {/* Daily Reflection Tab */}
        {currentTab === 'reflection' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-300/30 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-light text-green-100 mb-4">Today&apos;s Sacred Reflection</h2>
                <div className="text-green-200 text-lg italic mb-6">
                  &ldquo;{todaysPrompt}&rdquo;
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent mx-auto"></div>
              </div>

              {!hasReflectedToday ? (
                <div>
                  <div className="mb-6">
                    <label className="block text-green-300 text-sm mb-3">
                      What arises in your heart as you contemplate this sacred prompt?
                    </label>
                    <textarea
                      value={personalReflection}
                      onChange={(e) => setPersonalReflection(e.target.value)}
                      placeholder="Let your soul speak through your fingers... this reflection is for you alone."
                      className="w-full h-32 p-4 bg-white/10 border border-green-300/30 rounded-xl text-green-100 placeholder-green-300/70 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-green-400 text-sm">
                      ✨ This reflection is private - yours alone to tend
                    </div>
                    <button
                      onClick={saveReflection}
                      disabled={!personalReflection.trim()}
                      className="px-6 py-3 bg-green-500/30 hover:bg-green-500/50 disabled:opacity-50 text-green-100 rounded-xl transition-all duration-300"
                    >
                      Tend This Seed
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <h3 className="text-xl text-green-100 mb-3">Your reflection has been planted</h3>
                  <p className="text-green-300 mb-6">
                    Thank you for tending your inner garden today. Your soul&apos;s wisdom is taking root.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setCurrentTab('sharing')}
                      className="px-6 py-3 bg-green-500/30 hover:bg-green-500/50 text-green-100 rounded-xl transition-all duration-300"
                    >
                      Share With Circle
                    </button>
                    <button
                      onClick={() => setCurrentTab('intention')}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-green-200 rounded-xl transition-all duration-300"
                    >
                      Join Weekly Intention
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Practice Suggestions */}
            <div className="bg-white/5 rounded-2xl p-6 border border-green-300/20">
              <h3 className="text-lg font-light text-green-100 mb-4 flex items-center">
                <span className="mr-2">🌿</span>
                Today&apos;s Gentle Practice Suggestions
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-200 font-medium mb-2">Morning Soil Preparation</div>
                  <div className="text-green-300 text-sm">5 minutes of conscious breathing to prepare your inner ground</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-200 font-medium mb-2">Sacred Frequency Watering</div>
                  <div className="text-green-300 text-sm">Let 432Hz nourish your practice like gentle rain</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-200 font-medium mb-2">Gratitude Harvesting</div>
                  <div className="text-green-300 text-sm">Notice 3 things your spiritual practice has grown</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-200 font-medium mb-2">Evening Reflection</div>
                  <div className="text-green-300 text-sm">What seeds did you tend today? How did they feel?</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sacred Sharing Tab */}
        {currentTab === 'sharing' && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-light text-green-100 mb-2">Sacred Sharing</h2>
                <p className="text-green-300 text-sm">
                  Brief insights from fellow gardeners • Witnessed with love • No advice, just presence
                </p>
              </div>

              {!showShareForm && (
                <div className="text-center mb-6">
                  <button
                    onClick={() => setShowShareForm(true)}
                    className="px-6 py-3 bg-green-500/30 hover:bg-green-500/50 text-green-100 rounded-xl transition-all duration-300"
                  >
                    Share a Sacred Insight
                  </button>
                </div>
              )}

              {showShareForm && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-300/30 mb-6">
                  <div className="mb-4">
                    <label className="block text-green-300 text-sm mb-3">
                      What gentle insight or experience would you like to share with your circle?
                    </label>
                    <textarea
                      value={sacredSharing}
                      onChange={(e) => setSacredSharing(e.target.value)}
                      placeholder="Share from your heart... keep it brief and authentic. Your soul family is listening."
                      className="w-full h-24 p-4 bg-white/10 border border-green-300/30 rounded-xl text-green-100 placeholder-green-300/70 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      maxLength={280}
                    />
                    <div className="text-right text-green-400 text-xs mt-1">
                      {280 - sacredSharing.length} characters remaining
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-green-400 text-sm">
                      🌸 Shared with love, received with presence
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => {
                          setShowShareForm(false);
                          setSacredSharing('');
                        }}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-green-200 rounded-lg transition-all duration-300"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={shareWithCircle}
                        disabled={!sacredSharing.trim()}
                        className="px-6 py-3 bg-green-500/30 hover:bg-green-500/50 disabled:opacity-50 text-green-100 rounded-xl transition-all duration-300"
                      >
                        Share with Circle
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Sharings */}
            <div className="space-y-4">
              {recentSharings.map((sharing) => (
                <div
                  key={sharing.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-300/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center">
                        <span className="text-green-200 text-sm">🌱</span>
                      </div>
                      <div>
                        <div className="text-green-200 font-medium">{sharing.soul}</div>
                        <div className="text-green-400 text-xs">{sharing.date}</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-green-100 leading-relaxed mb-4">
                    {sharing.reflection}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors">
                      <span>💝</span>
                      <span className="text-sm">{sharing.hearts}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors">
                      <span>🙏</span>
                      <span className="text-sm">{sharing.prayers}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Weekly Intention Tab */}
        {currentTab === 'intention' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-300/30 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-light text-green-100 mb-4">Weekly Circle Intention</h2>
                <div className="text-green-300 text-sm mb-6">{weeklyIntention.week}</div>
                <div className="text-green-200 text-lg italic mb-6 leading-relaxed">
                  &ldquo;{weeklyIntention.intention}&rdquo;
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent mx-auto"></div>
              </div>

              {/* Collective Energy Visualization */}
              <div className="mb-8">
                <div className="text-center mb-4">
                  <div className="text-green-300 text-sm mb-2">Collective Energy Holding</div>
                  <div className="text-3xl mb-2">✨</div>
                  <div className="text-green-200">
                    {weeklyIntention.contributors} souls contributing energy
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-300 text-sm">Energy Level</span>
                    <span className="text-green-200">{weeklyIntention.energy}%</span>
                  </div>
                  <div className="w-full bg-green-900/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${weeklyIntention.energy}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Add Your Energy */}
              <div className="text-center">
                <button className="px-8 py-4 bg-green-500/30 hover:bg-green-500/50 text-green-100 rounded-xl transition-all duration-300 mb-4">
                  Add Your Energy to This Intention
                </button>
                <div className="text-green-400 text-sm">
                  Your energy joins the collective field of loving intention
                </div>
              </div>
            </div>

            {/* Sacred Practices for Intention */}
            <div className="bg-white/5 rounded-2xl p-6 border border-green-300/20">
              <h3 className="text-lg font-light text-green-100 mb-4 flex items-center">
                <span className="mr-2">🌿</span>
                Ways to Tend This Week&apos;s Intention
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-200 font-medium mb-2">Morning Gentleness</div>
                  <div className="text-green-300 text-sm">Begin each practice with the softness of morning dew</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-200 font-medium mb-2">Patient Tending</div>
                  <div className="text-green-300 text-sm">Notice the urge to force growth, then breathe into allowing</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-200 font-medium mb-2">Sacred Pause</div>
                  <div className="text-green-300 text-sm">When you feel rushed, pause and reconnect with divine timing</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-200 font-medium mb-2">Collective Blessing</div>
                  <div className="text-green-300 text-sm">Send love to all gardeners tending their sacred practices</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sacred Quote */}
      <div className="text-center py-12">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-green-200 italic text-lg leading-relaxed">
            &ldquo;In the sacred garden of practice, we learn that growth happens not through force, 
            but through the gentle, consistent tending of our spiritual soil.&rdquo;
          </p>
          <div className="text-green-400 text-sm mt-4">✧ Sacred Gardeners Wisdom ✧</div>
        </div>
      </div>
    </div>
  );
}
