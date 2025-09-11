'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WisdomGroveRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main wisdom grove
    router.replace('/wisdom');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4 animate-pulse">🌳</div>
        <p className="text-emerald-200">Redirecting to Ancient Wisdom Grove...</p>
      </div>
    </div>
  );
}
