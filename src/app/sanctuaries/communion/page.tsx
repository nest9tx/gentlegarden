'use client';

import React from 'react';
import SanctuaryLayout from '@/components/SanctuaryLayout';
import { getSanctuary } from '@/sacred/sanctuaries';

export default function CommunionCirclePage() {
  const sanctuary = getSanctuary('communion');
  if (!sanctuary) return null;

  return (
    <SanctuaryLayout sanctuary={sanctuary}>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Holding Space</h3>
          <p className="text-sm text-purple-200/80 leading-relaxed">
            Space holding is more about subtraction than addition—less fixing, more listening. Let silence do part of the weaving. A gentle nod can be a profound blessing.
          </p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-medium mb-3 tracking-wide">Opening a Circle</h3>
            <p className="text-sm text-purple-200/80 leading-relaxed">
              Begin with a breath together. Offer a simple shared intention. Invite consent for sacred presence. Establish a closing moment before deep sharing begins.
            </p>
        </div>
      </div>
    </SanctuaryLayout>
  );
}
