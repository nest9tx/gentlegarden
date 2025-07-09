'use client';

import { useEffect, useState } from 'react';

export default function AuthDebugPage() {
  const [urlInfo, setUrlInfo] = useState<Record<string, unknown>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      setUrlInfo({
        fullUrl: window.location.href,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        searchParams: Object.fromEntries(url.searchParams.entries()),
        hashParams: window.location.hash ? Object.fromEntries(new URLSearchParams(window.location.hash.substring(1)).entries()) : {}
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-4">🔍 Authentication Debug</h1>
        <pre className="text-white text-sm overflow-auto">
          {JSON.stringify(urlInfo, null, 2)}
        </pre>
      </div>
    </div>
  );
}
