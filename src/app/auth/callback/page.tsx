'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthCallback() {
  const router = useRouter()
  const [status, setStatus] = useState('Preparing your garden...')

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Check for error parameters from confirm route
        const urlParams = new URLSearchParams(window.location.search)
        const error = urlParams.get('error')
        
        if (error === 'missing_params') {
          setStatus('Magic link appears incomplete...')
          setTimeout(() => {
            router.push('/enter?message=Please request a new magic link - this one seems incomplete.')
          }, 3000)
          return
        } else if (error === 'auth_failed') {
          setStatus('Magic link verification failed...')
          setTimeout(() => {
            router.push('/enter?message=Please request a new magic link - this one may have expired.')
          }, 3000)
          return
        }
        
        setStatus('Connecting to your sanctuary...')
        
        // Dynamic import to avoid SSR issues
        const { createClient } = await import('../../../../lib/supabase')
        const supabase = createClient()

        // First, try to get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Session error:', sessionError)
          setStatus('Garden connection interrupted...')
          setTimeout(() => {
            router.push('/enter?message=Please try signing in again')
          }, 2000)
          return
        }

        if (session) {
          console.log('Session found:', session.user.email)
          setStatus('Welcome back to your garden! 🌸')
          setTimeout(() => {
            router.push('/garden')
          }, 1500)
          return
        }

        // If no session, wait for auth state change
        setStatus('Listening for your gentle entry...')
        
        const authTimeout = setTimeout(() => {
          console.log('Auth timeout reached')
          setStatus('Taking longer than expected...')
          subscription.unsubscribe()
          setTimeout(() => {
            router.push('/enter?message=The magic link may have expired. Please try again.')
          }, 2000)
        }, 15000)
        
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
          console.log('Auth state change:', event, session?.user?.email)
          
          if (event === 'SIGNED_IN' && session) {
            setStatus('Sacred entry complete! 🌱')
            clearTimeout(authTimeout)
            setTimeout(() => {
              router.push('/garden')
            }, 1500)
          } else if (event === 'SIGNED_OUT') {
            setStatus('Garden connection lost...')
            clearTimeout(authTimeout)
            setTimeout(() => {
              router.push('/enter?message=Please try signing in again')
            }, 2000)
          }
        })

        // Set a timeout - if no auth after 8 seconds, redirect to enter

        // Cleanup function
        return () => {
          clearTimeout(authTimeout)
          subscription.unsubscribe()
        }
        
      } catch (error) {
        console.error('Callback error:', error)
        setStatus('Something went gently wrong...')
        setTimeout(() => {
          router.push('/enter?message=Please try again - the garden is waiting for you')
        }, 2000)
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
          {status}
        </h1>
        <p className="text-purple-200 text-lg">
          Please wait while we prepare your garden sanctuary...
        </p>
      </div>
    </div>
  )
}
