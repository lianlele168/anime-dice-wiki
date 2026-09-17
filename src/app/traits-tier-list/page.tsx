import React from 'react';
import type { Metadata } from 'next';
import TraitsTierListClient from './TraitsTierListClient';

export const metadata: Metadata = {
  title: 'Anime Dice 13 Traits Tier List & Dual Compare (September 2026)',
  description: 'Official ranking of all 13 traits in Anime Dice. Compare Transcendent, Monarch, and Sovereign with grade bonus multipliers.',
  alternates: {
    canonical: '/traits-tier-list',
  },
  keywords: ['anime dice traits tier list', 'anime dice best traits', 'anime dice transcendent trait'],
};

export default function TraitsTierListPage() {
  return <TraitsTierListClient />;
}
