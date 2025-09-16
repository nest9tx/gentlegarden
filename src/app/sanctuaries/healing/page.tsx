'use client';

import React from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import { getSanctuary } from '@/sacred/sanctuaries';

export default function HealingGrovePage() {
  const sanctuary = getSanctuary('healing');
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-12">
        <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Gentle Pace</h3>
        <p className="text-sm text-purple-200/80 leading-relaxed">
          Depth work grows in rings. After an emotional release or somatic tremor, insert nourishment: water, grounding touch, stepping outside. Integration is part of the healing—not an afterthought.
        </p>
      </div>
    </SanctuaryLayout>
  );
}
