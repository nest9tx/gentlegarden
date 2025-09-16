
"use client";
// Gentle redirect to Personal Garden dashboard
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GardenRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/garden/personal');
  }, [router]);
  return null;
}
