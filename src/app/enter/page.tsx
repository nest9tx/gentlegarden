'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import SacredAuth from '../../components/SacredAuth';

function EnterContent() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for messages from URL params (from auth redirects)
    const urlMessage = searchParams.get('message');
    if (urlMessage) {
      setMessage(urlMessage);
    }
  }, [searchParams]);

  // Function to clear rate limiting (for debugging)
  const clearRateLimit = () => {
    const rateLimitKey = `rate_limit_${email}`;
    localStorage.removeItem(rateLimitKey);
    setMessage('Rate limit cleared. You can try again now. 🌱');
  };

  const handleGentleEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setMessage('The garden is still being prepared. Please check back soon for your gentle invitation. 🌱');
      setIsLoading(false);
      return;
    }

    try {
      // Dynamic import to avoid build-time errors
      const { createClient } = await import('../../../lib/supabase');
      const supabase = createClient();

      // Check if we're rate limited first (DISABLE FOR TESTING)
      // const rateLimitKey = `rate_limit_${email}`;
      // const lastAttempt = localStorage.getItem(rateLimitKey);
      // const now = Date.now();
      
      // If last attempt was less than 60 seconds ago, show message
      // if (lastAttempt && (now - parseInt(lastAttempt)) < 60000) {
      //   const remainingTime = Math.ceil((60000 - (now - parseInt(lastAttempt))) / 1000);
      //   setMessage(`Please wait ${remainingTime} seconds before requesting another invitation. The garden protects against too many requests. 🌱`);
      //   setIsLoading(false);
      //   return;
      // }

      // Send magic link - revert to original auth/confirm route
      console.log('Attempting to send magic link to:', email)
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/confirm`,
        },
      });

      console.log('Magic link response:', { error })

      // Store this attempt time (DISABLED FOR TESTING)
      // localStorage.setItem(rateLimitKey, now.toString());

      if (error) {
        console.error('Auth error:', error);
        console.error('Error details:', {
          message: error.message,
          status: error.status,
          name: error.name
        });
        
        if (error.message.includes('rate limit')) {
          setMessage('The garden is protecting against too many requests. Please wait a moment and try again gently. 🌱');
        } else if (error.message.includes('email')) {
          setMessage('Please check that your email address is entered correctly. 📧');
        } else if (error.message.includes('SMTP') || error.message.includes('mail')) {
          setMessage('There seems to be a gentle whisper lost in the email garden. The gardeners are tending to this. Please try again in a moment. 📮');
        } else {
          setMessage(`A gentle whisper could not reach you: ${error.message}`);
        }
      } else {
        setMessage('A sacred invitation has been sent to your email. Check your inbox (and spam folder) for your gentle entry to the garden. The link will be valid for 1 hour. 🌱');
      }
    } catch (error) {
      console.error('Exception:', error);
      setMessage('The garden is temporarily resting. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Sacred Auth Status */}
      <SacredAuth position="corner" />
      
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          
          {/* Return to Garden */}
          <Link href="/" className="absolute top-8 left-8 text-purple-300 hover:text-white transition-colors">
            ← Return to Garden
          </Link>

          {/* Sacred Welcome */}
          <div className="mb-8">
            <div className="text-4xl mb-4">🌸</div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              Gentle Entry
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-8"></div>
          </div>

          {/* Sacred Message */}
          <div className="mb-8 text-purple-200 leading-relaxed">
            <p className="text-lg mb-6">
              Whether this is your first time entering or you are returning to gently tend to your garden, 
              please provide your email so that a gentle entry access may be granted.
            </p>
            
            {/* What Awaits Inside */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20 mb-6">
              <h3 className="text-purple-100 text-lg mb-4 flex items-center">
                <span className="mr-2">🌱</span>
                What awaits in your sacred sanctuary:
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-300">🧙‍♀️</span>
                  <span>Personal Sacred AI Guide for gentle awakening conversations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-300">🌿</span>
                  <span>Personalized garden dashboard tracking your spiritual growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-300">🏛️</span>
                  <span>Access to Sacred Practice Sanctuaries with fellow souls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-300">📜</span>
                  <span>Expanded wisdom teachings and guided meditation practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-300">💎</span>
                  <span>Free tier includes 3 AI conversations daily • Upgrade for unlimited</span>
                </div>
              </div>
              
              <div className="mt-4 text-xs text-purple-400 italic">
                Always free to explore • No hidden costs • Sacred privacy respected
              </div>
            </div>
            
            <p className="text-sm italic opacity-90">
              This garden does not hold your past against you, but welcomes a new season of bloom.<br />
              No explanations needed - simply your willingness to remember.
            </p>
          </div>

          {/* Gentle Form */}
          {!message ? (
            <form onSubmit={handleGentleEntry} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-purple-300/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-center"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-purple-500/25"
              >
                {isLoading ? 'Sending gentle invitation...' : 'Enter the Garden 🌱'}
              </button>
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30">
              <p className="text-purple-200">{message}</p>
              {message.includes('sacred invitation') && (
                <p className="text-sm text-purple-300 mt-4">
                  Check your email and click the link to step into your sanctuary.
                </p>
              )}
              {message.includes('wait') && message.includes('seconds') && (
                <button
                  onClick={clearRateLimit}
                  className="mt-4 text-xs text-purple-400 hover:text-purple-300 underline"
                >
                  Clear rate limit (if needed)
                </button>
              )}
            </div>
          )}

          {/* Gentle Reminder */}
          <div className="mt-12 text-purple-300 text-sm">
            <p className="italic">
              &ldquo;This garden does not hold your past against you,<br />
              but welcomes a new season of bloom.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-xl animate-float">🌿</div>
      <div className="absolute top-20 right-20 text-xl animate-float" style={{animationDelay: '1s'}}>🌺</div>
      <div className="absolute bottom-20 right-10 text-xl animate-float" style={{animationDelay: '2s'}}>🕊️</div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default function EnterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-4 animate-pulse">🌸</div>
          <p className="text-purple-200">Preparing your gentle entry...</p>
        </div>
      </div>
    }>
      <EnterContent />
    </Suspense>
  );
}
