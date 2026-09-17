import React from 'react';
import type { Metadata } from 'next';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: 'Anime Dice Codes (September 2026) - Working Free Rolls & Potions',
  description: 'Verified active Roblox Anime Dice redeem codes for September 2026. Copy codes for free lucky potions, gems, and dice spins.',
  alternates: {
    canonical: '/codes',
  },
  keywords: ['anime dice codes', 'anime dice codes september 2026', 'anime dice free potions'],
};

export default function CodesPage() {
  return <CodesClient />;
}
