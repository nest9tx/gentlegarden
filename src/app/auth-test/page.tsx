'use client'

import { useEffect, useState } from 'react'

export default function AuthTest() {
  const [authStatus, setAuthStatus] = useState<{
    hasSession: boolean
    user: unknown
    error: string | null
    rawSession?: unknown
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { createClient } = await import('../../../lib/supabase')
        const supabase = createClient()
        
        // Get current session
        const { data: { session }, error } = await supabase.auth.getSession()
        
        setAuthStatus({
          hasSession: !!session,
          user: session?.user || null,
          error: error?.message || null,
          rawSession: session
        })
      } catch (error) {
        setAuthStatus({
          hasSession: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          user: null
        })
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (loading) {
    return <div className="p-8">Loading auth status...</div>
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Authentication Debug</h1>
      
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-semibold">Auth Status:</h2>
        <pre className="text-sm overflow-auto">
          {JSON.stringify(authStatus, null, 2)}
        </pre>
      </div>
      
      <div className="space-y-2">
        <div>Has Session: {authStatus?.hasSession ? '✅ Yes' : '❌ No'}</div>
        <div>User Email: {authStatus?.user && typeof authStatus.user === 'object' && 'email' in authStatus.user ? (authStatus.user as { email: string }).email : 'None'}</div>
        <div>Error: {authStatus?.error || 'None'}</div>
      </div>
      
      <div className="mt-4">
        <a href="/garden" className="text-blue-600 underline">Try Garden Page</a>
        {' | '}
        <a href="/enter" className="text-blue-600 underline">Try Enter Page</a>
      </div>
    </div>
  )
}
