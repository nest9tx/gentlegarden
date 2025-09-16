'use client';

import React, { useState } from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import { getSanctuary } from '@/sacred/sanctuaries';
import TieredContent from '@/components/TieredContent';

interface MeditationPractice {
  title: string;
  duration: string;
  description: string;
  instruction: string;
  benefits: string[];
  tips: string[];
  advanced?: string;
}

const practices: MeditationPractice[] = [
  {
    title: 'Breath Awareness',
    duration: '5-10 minutes',
    description: 'The foundation of all meditation - simply watching the natural rhythm of your breath.',
    instruction: 'Sit comfortably and close your eyes gently. Notice where you feel your breath most clearly - perhaps the nostrils, chest, or belly. Rest your attention there softly, like a feather on water. When your mind wanders (and it will), gently return to your breath without judgment.',
    benefits: ['Calms the nervous system', 'Improves focus', 'Reduces anxiety', 'Anchors you in the present moment'],
    tips: ['Start with just 5 minutes', 'Use a timer so you\'re not watching the clock', 'Don\'t try to change your breath, just observe it', 'Be patient with yourself'],
    advanced: 'Explore different breathing rhythms, count breaths in cycles of 10, or practice with extended exhales'
  },
  {
    title: 'Body Scan Meditation',
    duration: '10-20 minutes',
    description: 'A gentle journey through your body, cultivating awareness and releasing tension.',
    instruction: 'Lie down or sit comfortably. Start by taking three deep breaths. Then begin at the top of your head and slowly move your attention down through each part of your body - forehead, eyes, jaw, neck, shoulders, arms... Notice any sensations without trying to change them. Send breath and gentle kindness to any areas of tension.',
    benefits: ['Releases physical tension', 'Improves body awareness', 'Promotes relaxation', 'Helps with sleep'],
    tips: ['Go slowly - this isn\'t a race', 'Notice both tension and relaxation equally', 'Use gentle, loving attention', 'End by feeling your whole body as one unified field'],
    advanced: 'Practice sensing energy flows, work with specific areas needing healing, or combine with visualization'
  },
  {
    title: 'Loving-Kindness Meditation',
    duration: '10-15 minutes',
    description: 'Cultivating compassion for yourself and others through gentle, heartfelt wishes.',
    instruction: 'Sit quietly and bring to mind an image of yourself. Silently offer these phrases: "May I be happy. May I be healthy. May I be at peace. May I be free from suffering." Feel the intention behind the words. Then extend these wishes to a loved one, a neutral person, someone difficult, and finally all beings everywhere.',
    benefits: ['Opens the heart', 'Reduces self-criticism', 'Improves relationships', 'Increases compassion'],
    tips: ['Start with yourself - you can\'t give what you don\'t have', 'Use phrases that resonate with you', 'Feel the intention more than the words', 'Be patient if resistance arises'],
    advanced: 'Work with forgiveness practices, explore different categories of people, or practice for specific global situations'
  },
  {
    title: 'Walking Meditation',
    duration: '10-30 minutes',
    description: 'Bringing mindful awareness to the simple act of walking.',
    instruction: 'Choose a path 10-20 steps long, indoor or outdoor. Walk slower than normal, paying attention to the sensations in your feet and legs. Notice lifting, moving, placing each foot. When you reach the end, pause, turn mindfully, and walk back. If your mind wanders, gently return attention to the physical sensations of walking.',
    benefits: ['Integrates meditation with movement', 'Grounds you in your body', 'Can be done anywhere', 'Connects you with nature'],
    tips: ['Very slow is better than fast', 'Eyes can be open, looking down a few feet ahead', 'Coordinate with breathing if that helps', 'This is meditation, not exercise'],
    advanced: 'Practice with different terrains, coordinate with mantra or prayer, or extend to everyday walking'
  },
  {
    title: 'Sacred Listening',
    duration: '15-25 minutes',
    description: 'Opening to receive guidance and wisdom from your deeper knowing.',
    instruction: 'After settling into stillness with breath or body awareness, pose a gentle question to your heart: "What do I most need to know right now?" or "How can I serve today?" Then listen with your whole being - not just for words, but for images, feelings, or knowing that arises. Trust what comes without forcing or analyzing.',
    benefits: ['Develops intuition', 'Connects with inner wisdom', 'Provides guidance', 'Deepens spiritual connection'],
    tips: ['Trust the first thing that arises', 'Not every session will have dramatic insights', 'Write down what you receive', 'Ask open-ended questions'],
    advanced: 'Practice channeling guidance for others, work with specific life situations, or explore communion with nature spirits'
  }
];

export default function MeditationGardenPage() {
  const sanctuary = getSanctuary('meditation-garden');
  const [selectedPractice, setSelectedPractice] = useState<number | null>(null);

  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      {/* Welcome Section */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-teal-900/40 to-cyan-900/40 rounded-3xl p-8 border border-teal-500/20">
          <h2 className="text-2xl text-teal-100 font-light mb-6 text-center">Welcome to Your Inner Garden</h2>
          <p className="text-teal-200/90 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Meditation is not about emptying the mind or achieving perfect stillness. It&apos;s about cultivating a gentle, 
            loving awareness of what is already here. Like tending a garden, we create conditions for natural growth 
            and flowering. Your meditation practice is unique to you - trust your own rhythm and pace.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-teal-300 text-xl">🌱</span>
              </div>
              <h3 className="text-teal-200 font-medium mb-2">Start Small</h3>
              <p className="text-teal-300/80 text-sm">5 minutes of gentle practice is more valuable than 30 minutes of struggle</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-teal-300 text-xl">💚</span>
              </div>
              <h3 className="text-teal-200 font-medium mb-2">Be Kind</h3>
              <p className="text-teal-300/80 text-sm">Treat yourself with the same gentleness you&apos;d offer a dear friend</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-teal-300 text-xl">🌸</span>
              </div>
              <h3 className="text-teal-200 font-medium mb-2">Trust Process</h3>
              <p className="text-teal-300/80 text-sm">Every meditation is perfect exactly as it is - there&apos;s no &ldquo;wrong&rdquo; way</p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Guide */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-light mb-6">Getting Started</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3">Creating Your Space</h3>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Choose a quiet corner where you won&apos;t be disturbed</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Sit on a cushion, chair, or whatever feels comfortable</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Keep your spine naturally upright but not rigid</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Set a gentle timer so you&apos;re not watching the clock</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3">Working with Thoughts</h3>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Thoughts arising is completely normal and natural</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Notice without judgment: &ldquo;Ah, thinking&rdquo;</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Gently return attention to your chosen focus</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Each return is a moment of awakening - celebrate it</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Meditation Practices */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-light mb-6">Gentle Practices</h2>
        <div className="space-y-4">
          {practices.map((practice, index) => (
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
                    <p className="text-white/70 text-sm mb-1">{practice.description}</p>
                    <span className="text-teal-400 text-sm font-medium">{practice.duration}</span>
                  </div>
                  <div className="text-white/50">
                    {selectedPractice === index ? '▲' : '▼'}
                  </div>
                </div>
              </div>
              
              {selectedPractice === index && (
                <div className="px-6 pb-6 space-y-6 border-t border-white/10 pt-6">
                  {/* Instructions */}
                  <div>
                    <h4 className="text-white font-medium mb-3">How to Practice</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{practice.instruction}</p>
                  </div>

                  {/* Benefits and Tips */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-3">Benefits</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        {practice.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-teal-400 mr-2">✦</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-3">Gentle Tips</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        {practice.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-teal-400 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Advanced Practice (for Gardeners) */}
                  {practice.advanced && (
                    <TieredContent 
                      requiredTier="gardener"
                      upgradeMessage="Unlock advanced meditation techniques and deeper exploration practices."
                    >
                      <div className="bg-white/5 rounded-lg p-4 border border-teal-500/20">
                        <h4 className="text-teal-300 font-medium mb-2">🌱 Deeper Explorations</h4>
                        <p className="text-white/90 text-sm">{practice.advanced}</p>
                      </div>
                    </TieredContent>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Integration */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
        <h3 className="text-white text-xl font-light mb-4">Weaving Meditation into Daily Life</h3>
        <p className="text-white/90 leading-relaxed mb-6">
          Meditation doesn&apos;t end when you open your eyes. The awareness you cultivate on the cushion can infuse 
          your entire day with greater presence, peace, and clarity.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-3">Micro-Meditations</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Three conscious breaths before meals</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Mindful pause at red lights</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Feeling feet on earth while walking</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Gratitude moment before sleep</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Mindful Activities</h4>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Washing dishes with full attention</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Really listening in conversations</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Eating first bites in silence</li>
              <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Noticing nature around you</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Community and Support */}
      <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl p-6 border border-teal-500/20">
        <h3 className="text-teal-200 text-lg font-medium mb-3">Growing Together</h3>
        <p className="text-teal-200/90 text-sm leading-relaxed mb-4">
          Meditation is both a deeply personal journey and something that flowers beautifully in community. 
          Consider joining our gentle meditation circles or connecting with other seekers on the path.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/community/gentle-awakeners" className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 px-4 py-2 rounded-lg text-sm transition-all border border-teal-500/30">
            Gentle Awakeners Circle
          </a>
          <a href="/community/morning-light" className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 px-4 py-2 rounded-lg text-sm transition-all border border-teal-500/30">
            Morning Light Practices
          </a>
        </div>
      </div>
    </SanctuaryLayout>
  );
}