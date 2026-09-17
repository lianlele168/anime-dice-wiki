import React from 'react';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Anime Dice Wiki & Calculator - Codes, Traits Tier List, Units & Chrono Dice',
  description: 'Comprehensive guide for Anime Dice on Roblox. Interactive Luck & Odds Calculator, September 2026 Redeem Codes, 13 Traits Tier List, Units Database, Chrono Dice stats & Rebirth multipliers.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
