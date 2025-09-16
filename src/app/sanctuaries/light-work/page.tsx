'use client';

import React from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import { getSanctuary } from '@/sacred/sanctuaries';

export default function LightWorkPavilionPage() {
  const sanctuary = getSanctuary('light-work');
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-12">
        <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Sacred Integrity</h3>
        <p className="text-sm text-purple-200/80 leading-relaxed">
          True light work is quiet, humble and consent-based. Before offering energy, attune to: Is this mine to serve? Am I resourced? Is support requested? Discernment protects both giver and receiver.
        </p>
      </div>
    </SanctuaryLayout>
  );
}
