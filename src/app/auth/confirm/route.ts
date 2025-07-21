import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const token_hash = requestUrl.searchParams.get('token_hash')
  const type = requestUrl.searchParams.get('type')
  const code = requestUrl.searchParams.get('code')

  console.log('Auth confirm params:', { token_hash, type, code, url: request.url })
  console.log('Full request URL:', request.url)
  console.log('Request headers:', Object.fromEntries(request.headers.entries()))

  // Add detailed environment check
  console.log('Environment check:', {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Present' : 'Missing',
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Present' : 'Missing'
  })

  try {
    // Use the correct server-side client
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    console.log('Supabase client created successfully')

    // Handle code-based authentication (modern PKCE method)
    if (code) {
      console.log('Attempting PKCE code-based authentication with code:', code.substring(0, 10) + '...')
      try {
        // For PKCE flow, we need to exchange the code for a session
        const { data, error } = await supabase.auth.exchangeCodeForSession(code)
        
        console.log('PKCE Code exchange result:', { 
          sessionExists: !!data?.session, 
          userEmail: data?.session?.user?.email,
          errorMessage: error?.message,
          errorStatus: error?.status 
        })
        
        if (!error && data.session) {
          console.log('PKCE auth success:', data.session.user.email)
          return NextResponse.redirect(new URL('/garden', requestUrl.origin))
        } else {
          console.error('PKCE auth error:', error)
          // Fall through to try legacy method or redirect to callback
        }
      } catch (error) {
        console.error('PKCE exchange exception:', error)
        // Fall through to try legacy method or redirect to callback
      }
    }

    // Handle token_hash-based authentication (legacy method)
    if (token_hash && type) {
      console.log('Attempting token-based authentication with type:', type, 'and token hash:', token_hash.substring(0, 10) + '...')
      try {
        const { data, error } = await supabase.auth.verifyOtp({
          type: type as 'signup' | 'email',
          token_hash,
        })

        console.log('Token verification result:', { 
          sessionExists: !!data?.session, 
          userEmail: data?.session?.user?.email,
          errorMessage: error?.message,
          errorStatus: error?.status 
        })

        if (!error && data.session) {
          console.log('Token auth success:', data.session.user.email)
          return NextResponse.redirect(new URL('/garden', requestUrl.origin))
        } else {
          console.error('Token auth error:', error)
        }
      } catch (error) {
        console.error('Token verify exception:', error)
      }
    }

    // If no params or auth failed, redirect to callback for client-side handling
    console.log('No valid auth params found or auth failed, redirecting to callback')
    
    // Add helpful error message to callback
    const callbackUrl = new URL('/auth/callback', requestUrl.origin)
    if (!token_hash && !type && !code) {
      callbackUrl.searchParams.set('error', 'missing_params')
    } else {
      callbackUrl.searchParams.set('error', 'auth_failed')
    }
    
    return NextResponse.redirect(callbackUrl)
    
  } catch (error) {
    console.error('Auth confirm exception:', error)
    return NextResponse.redirect(
      new URL('/auth/callback?error=auth_failed', requestUrl.origin)
    )
  }
}
