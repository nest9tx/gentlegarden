"use client";
// Gentle redirect to Personal Garden dashboard
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SacredNavigation from '../../components/SacredNavigation';

export default function GardenPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/garden/personal');
  }, [router]);

  return (
    <div>
      <SacredNavigation currentPage="Garden" showBackToGarden={false} showSanctuaries={true} />
      {/* Existing content of the Garden page */}
    </div>
  );
}
