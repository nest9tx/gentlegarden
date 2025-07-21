'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SimpleAuthConfirm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('Verifying your sacred invitation...');

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Get all URL parameters
        const token_hash = searchParams.get('token_hash');
        const type = searchParams.get('type');
        const access_token = searchParams.get('access_token');
        const refresh_token = searchParams.get('refresh_token');

        console.log('Auth params received:', { token_hash, type, access_token, refresh_token });

        // Import Supabase client
        const { createClient } = await import('../../../../lib/supabase');
        const supabase = createClient();

        // If we have token_hash and type, verify OTP
        if (token_hash && type) {
          setStatus('Verifying magic link...');
          
          const { data, error } = await supabase.auth.verifyOtp({
            token_hash,
            type: type as 'email' | 'signup',
          });

          if (error) {
            console.error('OTP verification error:', error);
            setStatus('Magic link verification failed...');
            setTimeout(() => {
              router.push('/enter?message=' + encodeURIComponent('Magic link expired or invalid. Please request a new gentle invitation. 🌱'));
            }, 2000);
            return;
          }

          if (data.session) {
            setStatus('Welcome to your garden! 🌸');
            setTimeout(() => {
              router.push('/garden');
            }, 1500);
            return;
          }
        }

        // If we have access_token (implicit flow), set session
        if (access_token && refresh_token) {
          setStatus('Setting up your garden access...');
          
          const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });

          if (error) {
            console.error('Session setup error:', error);
            setStatus('Session setup failed...');
            setTimeout(() => {
              router.push('/enter?message=' + encodeURIComponent('Authentication failed. Please try again. 🌱'));
            }, 2000);
            return;
          }

          if (data.session) {
            setStatus('Sacred entry complete! 🌱');
            setTimeout(() => {
              router.push('/garden');
            }, 1500);
            return;
          }
        }

        // If no valid parameters, redirect to enter
        setStatus('Invalid magic link...');
        setTimeout(() => {
          router.push('/enter?message=' + encodeURIComponent('Invalid magic link. Please request a new gentle invitation. 🌱'));
        }, 2000);

      } catch (error) {
        console.error('Auth confirmation error:', error);
        setStatus('Something went gently wrong...');
        setTimeout(() => {
          router.push('/enter?message=' + encodeURIComponent('Authentication error. Please try again. 🌱'));
        }, 2000);
      }
    };

    handleAuth();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-4xl mb-4 animate-pulse">🌸</div>
        <h1 className="text-2xl mb-4">{status}</h1>
        <p className="text-purple-200">Please wait while we prepare your garden sanctuary...</p>
      </div>
    </div>
  );
}
