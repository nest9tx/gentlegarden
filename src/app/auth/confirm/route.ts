import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const token_hash = requestUrl.searchParams.get('token_hash')
  const type = requestUrl.searchParams.get('type')
  const code = requestUrl.searchParams.get('code')

  console.log('Auth confirm params:', { token_hash, type, code, url: request.url })

  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  // Handle code-based authentication (modern method)
  if (code) {
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (!error && data.session) {
        console.log('Code auth success:', data.session.user.email)
        return NextResponse.redirect(new URL('/garden', requestUrl.origin))
      } else {
        console.error('Code auth error:', error)
      }
    } catch (error) {
      console.error('Code exchange exception:', error)
    }
  }

  // Handle token_hash-based authentication (legacy method)
  if (token_hash && type) {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        type: type as 'signup' | 'email',
        token_hash,
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
  console.log('Redirecting to callback for client-side auth')
  return NextResponse.redirect(new URL('/auth/callback', requestUrl.origin))
}
