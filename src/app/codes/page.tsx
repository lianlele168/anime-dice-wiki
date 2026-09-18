import React from 'react';
import type { Metadata } from 'next';
import CodesClient from './CodesClient';
import { ACTIVE_CODES } from '@/data/gameData';

export const metadata: Metadata = {
  title: 'Anime Dice Codes (September 2026) - 12 Working Codes for Free Spins & Gems',
  description:
    'All 12 working Roblox Anime Dice codes for September 2026, re-verified on September 18. Claim free Lucky Spins, Trait Rerolls, Gems and Tickets with exact reward values and redemption steps.',
  alternates: {
    canonical: '/codes/',
  },
  keywords: [
    'anime dice codes',
    'anime dice codes september 2026',
    'anime dice free spins',
    'anime dice lucky spins',
    'anime dice trait rerolls',
    'roblox anime dice codes',
  ],
  openGraph: {
    title: 'Anime Dice Codes (September 2026) - 12 Working Codes',
    description:
      'All 12 working Anime Dice codes for September 2026 with exact Lucky Spins, Trait Rerolls and Gems values.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'How do I redeem codes in Anime Dice?',
    answer:
      'Launch Anime Dice on Roblox, click the Shop icon on the left side of your screen, scroll all the way to the bottom of the Shop window, paste a code into the Enter Code box and press Redeem. Rewards land on your account immediately, so repeat the step for each code on the list above.',
  },
  {
    question: 'Why is my Anime Dice code not working?',
    answer:
      'Four usual reasons. First, a typo - enter each code exactly as shown, and use our copy button so no stray trailing space comes along. Second, the code has already been claimed: each code is limited to one redemption per Roblox account. Third, milestone codes such as 5KCCU or UPDATE3 get retired once the next milestone drops - check the expired list above. Fourth, you may be on a stale server: leave the game, join a fresh server and try again.',
  },
  {
    question: 'How many Anime Dice codes are working right now?',
    answer:
      'All 12 codes listed above were confirmed working on September 18, 2026 - the likes-milestone code 100KLIKES is the newest addition, and UPDATE4 is the only code that also pays out Tickets. Together the full list is worth well over 20 Lucky Spins and 80 Trait Rerolls for a fresh account.',
  },
  {
    question: 'When do new Anime Dice codes come out?',
    answer:
      'More & More Games drops codes around major updates, new character additions and community milestones (likes, CCU and visit counts). There is no fixed calendar - the 1KCCU / 5KCCU / 10KCCU / 20KCCU / 30KCCU / 40KCCU series shows new ones arrive as the CCU milestones keep climbing. New codes surface first in the Anime Dice Discord server. We re-verify this list daily.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-09-18',
  author: {
    '@type': 'Person',
    name: 'Jin "Lucky" Takahashi',
    jobTitle: 'RNG Mathematician & Mythic Dice Roller',
  },
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const codeListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Working Anime Dice Codes (September 2026)',
  numberOfItems: ACTIVE_CODES.length,
  itemListElement: ACTIVE_CODES.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: `${item.code} - ${item.reward}`,
  })),
};

export default function CodesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(codeListLd) }}
      />
      <CodesClient />
    </>
  );
}
