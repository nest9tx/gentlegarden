'use client';

import React from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import { getSanctuary } from '@/sacred/sanctuaries';

export default function SacredGeometryTemplePage() {
  const sanctuary = getSanctuary('sacred-geometries');
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-12">
        <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Gazing Practice</h3>
        <p className="text-sm text-purple-200/80 leading-relaxed">
          Choose one pattern. Soften the eyes. Receive rather than stare. Let breathing synchronize with perceived symmetry. When subtle pulsation or depth appears, gently close the session with gratitude.
        </p>
      </div>
    </SanctuaryLayout>
  );
}
