import React from 'react';
import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Anime Dice Luck & Secret Pull Simulator (September 2026)',
  description: 'Simulate roll odds with dice multipliers, potions, friend boosts, and rebirth tiers in Anime Dice. Calculate exact Secret unit drop rates.',
  alternates: {
    canonical: '/calculator',
  },
  keywords: ['anime dice calculator', 'anime dice luck odds', 'anime dice secret drop rate'],
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
