export interface SanctuaryMeta {
  slug: string;
  title: string;
  icon: string;
  description: string;
  gradient: { from: string; to: string };
  invocation?: string;
  tone?: 'Grounding' | 'Expansive' | 'Reflective' | 'Integrative' | 'Healing';
  element?: 'Earth' | 'Air' | 'Water' | 'Fire' | 'Aether';
  access?: 'public' | 'gardener';
  cta?: { label: string; href: string };
  sections?: Array<{ id: string; title: string; summary: string }>;
}

// Core sanctuaries (initial 6). More can be appended without code changes elsewhere.
export const SANCTUARIES: SanctuaryMeta[] = [
  {
    slug: 'meditation-garden',
    title: 'Meditation Garden',
    icon: '🧘‍♀️',
    description: 'A gentle introduction to mindfulness and meditation practice, perfect for beginners seeking inner peace.',
    gradient: { from: 'from-teal-500', to: 'to-cyan-600' },
    tone: 'Grounding',
    element: 'Aether',
    access: 'public',
    sections: [
      { id: 'foundations', title: 'Gentle Beginnings', summary: 'Starting your meditation journey with compassion and patience.' },
      { id: 'breath', title: 'Breath Awareness', summary: 'Simple breathing practices for centering and calm.' },
      { id: 'mindfulness', title: 'Present Moment', summary: 'Cultivating awareness in daily life.' },
      { id: 'communion', title: 'Sacred Listening', summary: 'Meditation as communion with the deeper self.' }
    ]
  },
  {
    slug: 'chakras',
    title: 'Chakra Sanctuary',
    icon: '🕉️',
    description: 'Attune to the subtle centers that orchestrate physical and energetic well-being.',
    gradient: { from: 'from-purple-600', to: 'to-indigo-700' },
    tone: 'Integrative',
    element: 'Aether',
    access: 'public',
    sections: [
      { id: 'overview', title: 'Living Spectrum', summary: 'Feeling chakras as relational intelligence fields.' },
      { id: 'attunement', title: 'Gentle Attunement', summary: 'Breath, color, sound and mindful awareness.' },
      { id: 'healing', title: 'Healing Flow', summary: 'Working with blockages gently and compassionately.' }
    ]
  },
  {
    slug: 'light-work',
    title: 'Light Work Pavilion',
    icon: '💡',
    description: 'Answer the inner call to serve subtle healing and planetary uplift with integrity.',
    gradient: { from: 'from-amber-400', to: 'to-orange-500' },
    tone: 'Expansive',
    element: 'Fire',
    access: 'gardener',
    sections: [
      { id: 'calling', title: 'The Calling', summary: 'Discerning authentic service from ego impulse.' },
      { id: 'ethics', title: 'Energetic Ethics', summary: 'Sacred boundaries, consent, humility.' },
      { id: 'practice', title: 'Field Practices', summary: 'Core light sending & grounding forms.' }
    ]
  },
  {
    slug: 'sacred-geometries',
    title: 'Temple of Sacred Geometry',
    icon: '🔷',
    description: 'Contemplate the patterns that underlie form, consciousness and harmonic resonance.',
    gradient: { from: 'from-cyan-400', to: 'to-sky-600' },
    tone: 'Reflective',
    element: 'Air',
    access: 'public',
    sections: [
      { id: 'foundations', title: 'Foundations', summary: 'Flower of Life, Seed, Metatron, Vesica Pisces.' },
      { id: 'meditation', title: 'Meditative Use', summary: 'Gazing, tracing, breathing with pattern fields.' },
      { id: 'integration', title: 'Integration', summary: 'Applying geometric awareness to daily creation.' }
    ]
  },
  {
    slug: 'communion',
    title: 'Communion Circle',
    icon: '🤲',
    description: 'Learn to hold open, non-demanding sacred space for shared presence and listening.',
    gradient: { from: 'from-rose-400', to: 'to-pink-600' },
    tone: 'Integrative',
    element: 'Water',
    access: 'public',
    sections: [
      { id: 'principles', title: 'Principles', summary: 'Openness, non-coercion, gentle facilitation.' },
      { id: 'structure', title: 'A Circle Flow', summary: 'Opening, sharing, silence, closing.' },
      { id: 'facilitation', title: 'Facilitator Tips', summary: 'Staying neutral, trauma awareness basics.' }
    ]
  },
  {
    slug: 'healing',
    title: 'Healing Grove',
    icon: '🌿',
    description: 'Approach emotional and energetic healing with tenderness and grounded wisdom.',
    gradient: { from: 'from-emerald-400', to: 'to-green-600' },
    tone: 'Healing',
    element: 'Earth',
    access: 'gardener',
    sections: [
      { id: 'foundations', title: 'Gentle Foundations', summary: 'Self-compassion, pacing, integration windows.' },
      { id: 'methods', title: 'Methods', summary: 'Breath, somatic noticing, inner child dialogue.' },
      { id: 'aftercare', title: 'Aftercare', summary: 'Grounding, nourishment, community support.' }
    ]
  },
  {
    slug: 'morning-light',
    title: 'Morning Light Sanctuary',
    icon: '🌅',
    description: 'Begin your day aligned, intentional and heart-centered through a gentle ritual.',
    gradient: { from: 'from-yellow-400', to: 'to-orange-500' },
    tone: 'Grounding',
    element: 'Fire',
    access: 'public',
    sections: [
      { id: 'practice', title: 'Core Practice', summary: 'The 8-minute dawn alignment journey.' },
      { id: 'intention', title: 'Intention Craft', summary: 'Letting the day’s word or image arise.' },
      { id: 'reflection', title: 'Reflection', summary: 'Capturing subtle insights and feelings.' }
    ]
  }
];

export const getSanctuary = (slug: string) => SANCTUARIES.find(s => s.slug === slug);
