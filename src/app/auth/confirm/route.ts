import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const token_hash = requestUrl.searchParams.get('token_hash')
  const type = requestUrl.searchParams.get('type')

  if (token_hash && type) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    try {
      const { error } = await supabase.auth.verifyOtp({
        type: type as 'signup' | 'email',
        token_hash,
      })

      if (!error) {
        // Success! Redirect to garden
        return NextResponse.redirect(new URL('/garden', requestUrl.origin))
      }
    } catch (error) {
      console.error('Auth error:', error)
    }
  }

  // If we get here, something went wrong
  return NextResponse.redirect(new URL('/enter?message=Authentication failed, please try again', requestUrl.origin))
}
