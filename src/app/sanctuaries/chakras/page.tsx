'use client';

import React from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import { getSanctuary } from '@/sacred/sanctuaries';

export default function ChakraSanctumPage() {
  const sanctuary = getSanctuary('chakras');
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white text-lg font-medium mb-3 tracking-wide">A Living Spectrum</h3>
          <p className="text-sm text-purple-200/80 leading-relaxed">
            Rather than rigid wheels, feel these centers as relational fields of intelligence. They respond to breath, awareness and compassionate witnessing. No forcing—just gentle listening and tending.
          </p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Practice Orientation</h3>
          <p className="text-sm text-purple-200/80 leading-relaxed">
            Begin with a simple vertical scan upon waking or before sleep: base → crown → heart → whole field. Note any textures, colors, emotions. Offer breath where constriction is felt.
          </p>
        </div>
      </div>
    </SanctuaryLayout>
  );
}
