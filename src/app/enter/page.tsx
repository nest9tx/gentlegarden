'use client';

import { useState } from 'react';
import { createClient } from '../../../lib/supabase';
import Link from 'next/link';

export default function EnterPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const supabase = createClient();

  const handleGentleEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Send magic link - no password needed, gentle entry
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/garden`,
        },
      });

      if (error) {
        setMessage('A gentle whisper could not reach you. Please try again.');
      } else {
        setMessage('A sacred invitation has been sent to your email. Check your inbox for your gentle entry to the garden. 🌱');
      }
    } catch {
      setMessage('The garden is temporarily resting. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
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
            <p className="text-lg mb-4">
              The garden welcomes you as you are.
            </p>
            <p className="text-sm italic opacity-90">
              No explanations needed. No past required.<br />
              Simply share your email to receive a gentle invitation.
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
