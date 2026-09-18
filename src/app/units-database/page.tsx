import React from 'react';
import type { Metadata } from 'next';
import UnitsDatabaseClient from './UnitsDatabaseClient';

export const metadata: Metadata = {
  title: 'Anime Dice Units Database - Stats, Odds & DPS Rankings (September 2026)',
  description: 'Searchable database of all Secret, Mythic, and Legendary units in Anime Dice with DPS scaling, passive abilities, and roll odds.',
  alternates: {
    canonical: '/units-database/',
  },
  keywords: ['anime dice units database', 'anime dice all units', 'anime dice secret units list'],
};

export default function UnitsDatabasePage() {
  return <UnitsDatabaseClient />;
}
