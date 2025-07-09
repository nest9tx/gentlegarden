'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Dynamic import to avoid SSR issues
        const { createClient } = await import('../../../../lib/supabase')
        const supabase = createClient()

        // Handle the auth state change - this will process the URL fragments
        const { data: { session } } = await supabase.auth.getSession()
        
        // Set up an auth listener to catch the callback
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_IN' && session) {
            // Successfully authenticated, redirect to garden
            router.push('/garden')
          } else if (event === 'SIGNED_OUT' || !session) {
            // No session or signed out, redirect back to enter
            router.push('/enter?message=Please check your email and click the magic link')
          }
        })

        // If we already have a session, go to garden immediately
        if (session) {
          router.push('/garden')
        } else {
          // Give it a moment for the auth callback to process
          setTimeout(async () => {
            const { data: { session: updatedSession } } = await supabase.auth.getSession()
            if (!updatedSession) {
              router.push('/enter?message=Authentication link may have expired, please try again')
            }
          }, 3000)
        }

        // Cleanup subscription
        return () => {
          subscription.unsubscribe()
        }
      } catch (error) {
        console.error('Callback error:', error)
        router.push('/enter?message=Something went wrong, please try again')
      }
    }

    handleAuth()
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Twinkling stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="text-6xl mb-6 animate-spin">🌱</div>
        <h1 className="text-3xl font-light text-white mb-4">
          Completing Your Sacred Entry...
        </h1>
        <p className="text-purple-200 text-lg">
          Please wait while we prepare your garden sanctuary...
        </p>
      </div>
    </div>
  )
}
