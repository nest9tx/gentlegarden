'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SacredNavigation from '@/components/SacredNavigation';

export default function MorningLightSanctuary() {
  const [currentStep, setCurrentStep] = useState(0);
  const [practiceStarted, setPracticeStarted] = useState(false);
  const [reflectionText, setReflectionText] = useState('');
  const [practiceCompleted, setPracticeCompleted] = useState(false);

  const morningPractice = [
    {
      step: 1,
      title: "Sacred Awakening",
      duration: "2 minutes",
      instruction: "As you gently open your eyes to this new day, take three deep breaths. Feel gratitude for the gift of another sunrise, another opportunity for your soul to express itself in this beautiful world.",
      guidance: "Place your hand on your heart and whisper: 'Good morning, beautiful soul. What wants to be born through me today?'"
    },
    {
      step: 2,
      title: "Intention Setting",
      duration: "3 minutes", 
      instruction: "Connect with your deepest self and allow an intention for the day to arise naturally. This isn't about forcing or planning, but about listening to what your soul whispers it needs today.",
      guidance: "Breathe into your heart space and ask: 'What does my soul most need to experience today?' Trust the first feeling, word, or image that comes."
    },
    {
      step: 3,
      title: "Energy Alignment",
      duration: "2 minutes",
      instruction: "Visualize golden light flowing through your entire being, aligning you with your highest good and the sacred flow of this day. See this light connecting you to all awakening souls around the world.",
      guidance: "Feel yourself as part of a beautiful web of consciousness, each soul supporting the others in their gentle awakening."
    },
    {
      step: 4,
      title: "Sacred Commitment",
      duration: "1 minute",
      instruction: "Make a gentle commitment to yourself to stay connected to your heart throughout the day. This is not about perfection, but about remembering to return to love, again and again.",
      guidance: "Promise yourself: 'Today I will be gentle with myself and remember that I am loved, I am love, and I am loving.'"
    }
  ];

  const [practiceTimer, setPracticeTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && practiceTimer > 0) {
      interval = setInterval(() => {
        setPracticeTimer(timer => {
          if (timer <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return timer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, practiceTimer]);

  const startPracticeStep = (stepIndex: number) => {
    const step = morningPractice[stepIndex];
    const minutes = parseInt(step.duration.split(' ')[0]);
    setPracticeTimer(minutes * 60);
    setIsTimerRunning(true);
    setCurrentStep(stepIndex);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const completePractice = () => {
    setPracticeCompleted(true);
    setIsTimerRunning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Sacred Navigation */}
      <SacredNavigation currentPage="Morning Light Sanctuary" />
      
      {/* Gentle Morning Light Effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Rising Sun Effect */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-60 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-6 rounded-full bg-gradient-to-br from-yellow-200/50 to-orange-200/50 backdrop-blur-sm border border-orange-200/50 mb-6">
              <div className="text-6xl">🌅</div>
            </div>
            <h1 className="text-5xl font-light text-orange-900 mb-4">Morning Light Sanctuary</h1>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto leading-relaxed">
              Begin each day in gentle communion with your awakening soul
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent mx-auto mt-6"></div>
          </div>

          {!practiceStarted ? (
            /* Pre-Practice Introduction */
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light text-orange-900 mb-4">Sacred Dawn Practice</h2>
                <p className="text-orange-700 text-lg leading-relaxed max-w-3xl mx-auto">
                  This gentle 8-minute morning practice helps you align with the sacred energy of each new day. 
                  You&apos;ll set intentions, connect with your heart, and prepare your soul for whatever beauty wants to unfold.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-medium text-orange-800 mb-4">What You&apos;ll Experience:</h3>
                  <div className="space-y-3">
                    {morningPractice.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 flex items-center justify-center text-orange-800 text-sm font-medium">
                          {step.step}
                        </div>
                        <div>
                          <div className="text-orange-800 font-medium">{step.title}</div>
                          <div className="text-orange-600 text-sm">{step.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-100/50 to-orange-100/50 rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-orange-800 mb-4">Today&apos;s Sacred Invitation:</h3>
                  <p className="text-orange-700 italic text-lg leading-relaxed mb-4">
                    &ldquo;What wants to be born through you today?&rdquo;
                  </p>
                  <div className="text-orange-600 text-sm">
                    Allow this question to gently guide your morning practice. There&apos;s no right answer - 
                    only what your soul whispers in this sacred moment.
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setPracticeStarted(true)}
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Begin Sacred Practice
                </button>
                <div className="text-orange-600 text-sm mt-3">
                  Total duration: ~8 minutes • Practice at your own gentle pace
                </div>
              </div>
            </div>
          ) : !practiceCompleted ? (
            /* Active Practice */
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 mb-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="text-3xl">{morningPractice[currentStep]?.step || 1}</div>
                  <div>
                    <h2 className="text-2xl font-light text-orange-900">{morningPractice[currentStep]?.title || "Sacred Awakening"}</h2>
                    <div className="text-orange-600">{morningPractice[currentStep]?.duration || "2 minutes"}</div>
                  </div>
                </div>
                
                {isTimerRunning && (
                  <div className="text-4xl font-light text-orange-800 mb-4">
                    {formatTime(practiceTimer)}
                  </div>
                )}
              </div>

              <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 rounded-2xl p-6 mb-6">
                  <p className="text-orange-800 text-lg leading-relaxed">
                    {morningPractice[currentStep]?.instruction}
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-2xl p-6">
                  <div className="text-orange-700 font-medium mb-2">Gentle Guidance:</div>
                  <p className="text-orange-700 italic">
                    {morningPractice[currentStep]?.guidance}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                {!isTimerRunning && currentStep < morningPractice.length && (
                  <button
                    onClick={() => startPracticeStep(currentStep)}
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Start This Step
                  </button>
                )}
                
                {currentStep < morningPractice.length - 1 && (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="bg-white/70 hover:bg-white/90 text-orange-800 px-6 py-3 rounded-full font-medium transition-all duration-300 border border-orange-200"
                  >
                    Next Step
                  </button>
                )}
                
                {currentStep === morningPractice.length - 1 && (
                  <button
                    onClick={completePractice}
                    className="bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Complete Practice
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Post-Practice Reflection */
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 mb-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🙏</div>
                <h2 className="text-3xl font-light text-orange-900 mb-4">Sacred Practice Complete</h2>
                <p className="text-orange-700 text-lg">
                  Beautiful soul, you have honored yourself with this morning practice. 
                  Take a moment to capture any insights that arose.
                </p>
              </div>

              <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 rounded-2xl p-6 mb-6">
                  <label className="block text-orange-800 font-medium mb-3">
                    Sacred Reflection (Optional):
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="What arose for you during this practice? What wants to be born through you today? Let your heart speak..."
                    className="w-full h-32 p-4 bg-white/70 border border-orange-200 rounded-xl text-orange-800 placeholder-orange-500/70 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                  />
                </div>
                
                <div className="text-center">
                  <div className="text-orange-600 text-sm italic mb-4">
                    &ldquo;Carry this sacred energy with you throughout your day. 
                    Return to your heart whenever you need remembering.&rdquo;
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={() => {
                        setPracticeStarted(false);
                        setPracticeCompleted(false);
                        setCurrentStep(0);
                        setReflectionText('');
                      }}
                      className="bg-white/70 hover:bg-white/90 text-orange-800 px-6 py-3 rounded-full font-medium transition-all duration-300 border border-orange-200"
                    >
                      Practice Again
                    </button>
                    
                    <Link 
                      href="/community"
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                    >
                      Explore Other Sanctuaries
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sacred Practice Benefits */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/30">
            <h3 className="text-2xl font-light text-orange-900 text-center mb-6">
              The Sacred Gift of Morning Practice
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="text-orange-800 font-medium mb-2">Soul Alignment</h4>
                <p className="text-orange-600 text-sm">Connect with your deepest truth before the world awakens</p>
              </div>
              <div>
                <div className="text-3xl mb-3">💫</div>
                <h4 className="text-orange-800 font-medium mb-2">Sacred Intention</h4>
                <p className="text-orange-600 text-sm">Set the energetic tone for a day filled with purpose and grace</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🕊️</div>
                <h4 className="text-orange-800 font-medium mb-2">Inner Peace</h4>
                <p className="text-orange-600 text-sm">Cultivate a sense of centeredness that carries you through any challenge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
