export interface CodeItem {
  code: string;
  reward: string;
  status: 'Active' | 'Expired';

  source: string;
}

export interface TraitItem {
  id: string;
  name: string;
  tier: 'S+' | 'S' | 'A+' | 'A' | 'B' | 'C';
  incomeMultiplier: number;
  damageMultiplier: number;
  healthMultiplier: number;
  rollChance: string;
  description: string;
  recommendedUnits: string[];
}

export interface GradeItem {
  grade: string;
  tier: string;
  incomeMultiplier: number;
  rollChance: string;
  gemCost: number;
  description: string;
}

export interface DiceItem {
  id: string;
  name: string;
  cost: string;
  costNumeric: number;
  luckMultiplier: number;
  cooldown: string;
  tier: number;
  badge: string;
  specialEffect: string;
}

export interface UnitItem {
  id: string;
  name: string;
  anime: 'Solo Leveling' | 'One Piece' | 'Jujutsu Kaisen' | 'Dragon Ball' | 'Bleach' | 'Naruto' | 'Demon Slayer' | 'Hunter x Hunter';
  rarity: 'Secret' | 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Common';
  incomePerSec: string; // 'Not documented' - no public source publishes per-unit stats
  baseDamage: string; // 'Not documented'
  baseHealth: string; // 'Not documented'
  skillName: string;
  skillDescription: string;
  dpsRating: string; // 'Not documented'
}

export interface RebirthMilestone {
  tier: number;
  cashRequired: string;
  cashNumeric: number;
  luckMultiplier: number;
  cashMultiplier: number;
  unlockedPerks: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const ACTIVE_CODES: CodeItem[] = [
  { code: '100KLIKES', reward: '2x Lucky Spins, 10x Trait Rerolls, 10x Gems', status: 'Active', source: '100,000 Likes Community Milestone' },
  { code: '40KCCU', reward: '2x Lucky Spins, 10x Trait Rerolls, 10x Gems', status: 'Active', source: '40,000 CCU Community Milestone' },
  { code: '30KCCU', reward: '2x Lucky Spins, 10x Trait Rerolls, 10x Gems', status: 'Active', source: '30,000 CCU Community Milestone' },
  { code: '20KCCU', reward: '2x Lucky Spins, 10x Trait Rerolls, 10x Gems', status: 'Active', source: '20,000 CCU Community Milestone' },
  { code: '10KCCU', reward: '2x Lucky Spins, 10x Trait Rerolls, 7x Gems', status: 'Active', source: '10,000 CCU Community Milestone' },
  { code: 'UPDATE4', reward: '2x Lucky Spins, 10x Trait Rerolls, 10x Tickets, 3x Gems', status: 'Active', source: 'Update 4 Major Release' },
  { code: '5KCCU', reward: '2x Lucky Spins, 5x Trait Rerolls, 5x Gems', status: 'Active', source: '5,000 CCU Community Milestone' },
  { code: '1KCCU', reward: '2x Lucky Spins, 5x Trait Rerolls, 5x Gems', status: 'Active', source: '1,000 CCU Milestone' },
  { code: 'UPDATE3', reward: '2x Lucky Spins, 7x Trait Rerolls, 7x Gems', status: 'Active', source: 'Update 3 Major Release' },
  { code: 'UPDATE2', reward: '2x Lucky Spins, 5x Trait Rerolls, 5x Gems', status: 'Active', source: 'Update 2 Balance Patch' },
  { code: 'UPDATE1', reward: '2x Lucky Spins, 3x Trait Rerolls, 3x Gems', status: 'Active', source: 'Update 1 Release' },
  { code: 'RELEASE', reward: '1x Lucky Spin, 2x Trait Rerolls, 2x Gems', status: 'Active', source: 'Global Launch Celebration' },
];

export const EXPIRED_CODES: CodeItem[] = [
  { code: '2MVISITS', reward: 'Milestone code — no longer redeemable', status: 'Expired', source: '2,000,000 Visits Milestone' },
  { code: 'UPDATE12', reward: 'Update code — no longer redeemable', status: 'Expired', source: 'Update 12 Release' },
  { code: '50LIKES', reward: 'Milestone code — no longer redeemable', status: 'Expired', source: '50,000 Likes Milestone' },
  { code: '15KLIKES', reward: 'Milestone code — no longer redeemable', status: 'Expired', source: '15,000 Likes Milestone' },
  { code: 'RESTART1', reward: 'Event code — no longer redeemable', status: 'Expired', source: 'Restart Event' },
];

export const TRAITS_DATA: TraitItem[] = [
  {
    id: 'transcendent',
    name: 'Transcendent',
    tier: 'S+',
    incomeMultiplier: 15.0,
    damageMultiplier: 15.0,
    healthMultiplier: 15.0,
    rollChance: '< 1% (0.05%)',
    description: 'The indisputable pinnacle trait in Anime Dice. Multiplies all three core attributes by 15x, creating both an unbeatable plot cash generator and a one-shot boss clearer.',
    recommendedUnits: ['Shadow Sovereign', 'Sun God Joyboy', 'Limitless Sorcerer', 'Curse King']
  },
  {
    id: 'monarch',
    name: 'Monarch',
    tier: 'S',
    incomeMultiplier: 8.0,
    damageMultiplier: 8.0,
    healthMultiplier: 8.0,
    rollChance: '< 1% (0.15%)',
    description: 'Sovereign domination aura providing an 8x all-stat boost. Highly sought after for high-floor Infinity Tower pushes and exponential cash compounding.',
    recommendedUnits: ['Shadow Sovereign', 'Ant King Berserker', 'Ultra Ego Destroyer']
  },
  {
    id: 'shogun',
    name: 'Shogun',
    tier: 'S',
    incomeMultiplier: 5.0,
    damageMultiplier: 5.0,
    healthMultiplier: 5.0,
    rollChance: '< 1% (0.35%)',
    description: 'Supreme military commander enhancement granting 5x multipliers to Income, Damage, and Health. Perfect all-rounder for mid-to-endgame units.',
    recommendedUnits: ['Three Sword Pirate', 'Sorcerer Killer', 'Nine Tails Sage']
  },
  {
    id: 'samurai',
    name: 'Samurai',
    tier: 'A+',
    incomeMultiplier: 3.0,
    damageMultiplier: 3.0,
    healthMultiplier: 3.0,
    rollChance: '< 1% (0.75%)',
    description: 'Elite balanced combat boost giving a 3x multiplier across all stats. Outstanding bridge trait while saving Trait Rerolls for S-Tier rolls.',
    recommendedUnits: ['Demon Slayer Prodigy', 'Sun Breath Swordsman', 'Flame Hashira']
  },
  {
    id: 'damage-3',
    name: 'Damage III',
    tier: 'A',
    incomeMultiplier: 1.0,
    damageMultiplier: 2.0,
    healthMultiplier: 1.0,
    rollChance: '4.2%',
    description: 'Doubles combat DPS exclusively. Highly effective when assigned to tower climbing teams where income generation is secondary.',
    recommendedUnits: ['Limitless Sorcerer', 'Ultra Instinct Saiyan', 'Nine Tails Sage']
  },
  {
    id: 'income-3',
    name: 'Income III',
    tier: 'A',
    incomeMultiplier: 2.0,
    damageMultiplier: 1.0,
    healthMultiplier: 1.0,
    rollChance: '4.2%',
    description: 'Doubles base cash generation. Ideal for stationing on idle plot units to accelerate Rebirth cash thresholds.',
    recommendedUnits: ['Any Stationed Plot Unit', 'Sun God Joyboy']
  },
  {
    id: 'health-3',
    name: 'Health III',
    tier: 'A',
    incomeMultiplier: 1.0,
    damageMultiplier: 1.0,
    healthMultiplier: 2.0,
    rollChance: '4.2%',
    description: 'Doubles unit HP pool. Acts as a meat shield for survival against heavy hitting Tower Bosses.',
    recommendedUnits: ['Ant King Berserker', 'Curse King']
  },
  {
    id: 'damage-2',
    name: 'Damage II',
    tier: 'B',
    incomeMultiplier: 1.0,
    damageMultiplier: 1.5,
    healthMultiplier: 1.0,
    rollChance: '8.5%',
    description: 'Grants +50% bonus damage in combat. Solid progression trait for early and mid game.',
    recommendedUnits: ['Three Sword Pirate', 'Lightning Assassin']
  },
  {
    id: 'income-2',
    name: 'Income II',
    tier: 'B',
    incomeMultiplier: 1.5,
    damageMultiplier: 1.0,
    healthMultiplier: 1.0,
    rollChance: '8.5%',
    description: 'Grants +50% bonus cash per second. Reliable early economy booster.',
    recommendedUnits: ['Early Plot Units']
  },
  {
    id: 'health-2',
    name: 'Health II',
    tier: 'B',
    incomeMultiplier: 1.0,
    damageMultiplier: 1.0,
    healthMultiplier: 1.5,
    rollChance: '8.5%',
    description: 'Grants +50% bonus health for extended boss encounters.',
    recommendedUnits: ['Frontline Tank Units']
  },
  {
    id: 'damage-1',
    name: 'Damage I',
    tier: 'C',
    incomeMultiplier: 1.0,
    damageMultiplier: 1.2,
    healthMultiplier: 1.0,
    rollChance: '15.0%',
    description: 'Entry-level offensive modifier providing +20% damage.',
    recommendedUnits: ['Starter Units']
  },
  {
    id: 'income-1',
    name: 'Income I',
    tier: 'C',
    incomeMultiplier: 1.2,
    damageMultiplier: 1.0,
    healthMultiplier: 1.0,
    rollChance: '15.0%',
    description: 'Entry-level economic modifier providing +20% cash generation.',
    recommendedUnits: ['Starter Units']
  },
  {
    id: 'health-1',
    name: 'Health I',
    tier: 'C',
    incomeMultiplier: 1.0,
    damageMultiplier: 1.0,
    healthMultiplier: 1.2,
    rollChance: '15.0%',
    description: 'Entry-level vitality modifier providing +20% health.',
    recommendedUnits: ['Starter Units']
  }
];

export const GRADES_DATA: GradeItem[] = [
  { grade: 'Z+', tier: 'SSS', incomeMultiplier: 25.0, rollChance: '0.007%', gemCost: 50, description: 'The absolute holy grail of plot economy. Multiplying unit income by 25x, stacking multiplicatively with Trait multipliers.' },
  { grade: 'Z', tier: 'SS', incomeMultiplier: 15.0, rollChance: '0.007%', gemCost: 50, description: 'God-tier income grade. Boosts cash generation by 15x, allowing players to reach Sextillions in minutes.' },
  { grade: 'S+', tier: 'S', incomeMultiplier: 10.0, rollChance: '0.010%', gemCost: 50, description: 'Elite income tier with a 10x multiplier. High-value target for endgame players.' },
  { grade: 'S', tier: 'S', incomeMultiplier: 7.0, rollChance: '0.089%', gemCost: 50, description: 'Outstanding 7x multiplier. Strong keeper for non-Secret high rarity units.' },
  { grade: 'A+', tier: 'A', incomeMultiplier: 4.5, rollChance: '2.900%', gemCost: 50, description: 'Excellent 4.5x multiplier with accessible odds for mid-game players.' },
  { grade: 'A', tier: 'A', incomeMultiplier: 3.0, rollChance: '7.900%', gemCost: 50, description: 'Triples cash output. The minimum target before pushing for Rebirth 4.' },
  { grade: 'B', tier: 'B', incomeMultiplier: 1.6, rollChance: '14.900%', gemCost: 50, description: '1.6x multiplier. Budget grade for early stage progression.' },
  { grade: 'C', tier: 'C', incomeMultiplier: 1.2, rollChance: '27.900%', gemCost: 50, description: '1.2x multiplier. Common upgrade from default base stats.' },
  { grade: 'D', tier: 'D', incomeMultiplier: 1.0, rollChance: '46.200%', gemCost: 50, description: 'Baseline default grade. Has no bonus multiplier.' }
];

export const DICE_DATA: DiceItem[] = [
  { id: 'basic', name: 'Basic Dice', cost: 'Free', costNumeric: 0, luckMultiplier: 1.0, cooldown: '1.5s', tier: 1, badge: 'Starter', specialEffect: 'Standard default roll speed with 1x baseline luck' },
  { id: 'iron', name: 'Iron Dice', cost: '50,000 Cash', costNumeric: 50000, luckMultiplier: 2.5, cooldown: '1.4s', tier: 2, badge: 'Common', specialEffect: '+150% luck boost to filter out Common fodder' },
  { id: 'golden', name: 'Golden Dice', cost: '500,000 Cash', costNumeric: 500000, luckMultiplier: 5.0, cooldown: '1.3s', tier: 3, badge: 'Rare', specialEffect: '5x luck multiplier, unlocks first guaranteed Epic pity' },
  { id: 'diamond', name: 'Diamond Dice', cost: '10,000,000 Cash', costNumeric: 10000000, luckMultiplier: 12.0, cooldown: '1.2s', tier: 4, badge: 'Epic', specialEffect: '12x luck multiplier, dramatically improves Legendary pull rates' },
  { id: 'void', name: 'Void Dice', cost: '1,000,000,000 Cash', costNumeric: 1000000000, luckMultiplier: 35.0, cooldown: '1.0s', tier: 5, badge: 'Legendary', specialEffect: '35x luck multiplier with dark gravity speed roll animation' },
  { id: 'cosmic', name: 'Cosmic Dice', cost: '500,000,000,000 Cash', costNumeric: 500000000000, luckMultiplier: 100.0, cooldown: '0.9s', tier: 6, badge: 'Cosmic', specialEffect: '100x luck multiplier, essential for pulling Mythic tier units' },
  { id: 'chrono', name: 'Chrono Dice', cost: '15 Sextillion Cash', costNumeric: 1.5e22, luckMultiplier: 250.0, cooldown: '0.8s', tier: 7, badge: 'Unverified', specialEffect: 'Community-reported: 15 Sextillion Cash cost and 250x luck. Not verified against official sources' },
  { id: 'divine', name: 'Divine Dice', cost: '100 Septillion Cash', costNumeric: 1.0e26, luckMultiplier: 500.0, cooldown: '0.6s', tier: 8, badge: 'Unverified', specialEffect: 'Community-reported: 100 Septillion Cash cost and 500x luck. No public source confirms these stats' }
];

export const UNITS_DATA: UnitItem[] = [
  {
    id: 'shadow-sovereign',
    name: 'Shadow Sovereign',
    anime: 'Solo Leveling',
    rarity: 'Secret',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Arise: Monarch Domain',
    skillDescription: 'Summons an army of shadow soldiers that deal 300% AoE damage every 5 seconds and boost plot income by +25%.',
    dpsRating: 'Not documented'
  },
  {
    id: 'sun-god-joyboy',
    name: 'Sun God Joyboy',
    anime: 'One Piece',
    rarity: 'Secret',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Bajrang Drum of Liberation',
    skillDescription: 'Strikes the ground with a massive fist, stunning all enemies for 3 seconds and doubling plot cash tick speed for 10 seconds.',
    dpsRating: 'Not documented'
  },
  {
    id: 'limitless-sorcerer',
    name: 'Limitless Sorcerer',
    anime: 'Jujutsu Kaisen',
    rarity: 'Secret',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Hollow Purple Singularity',
    skillDescription: 'Deletes incoming wave boss shields with true piercing damage. Highest single-target burst DPS in the game.',
    dpsRating: 'Not documented'
  },
  {
    id: 'ultra-ego-destroyer',
    name: 'Ultra Ego Destroyer',
    anime: 'Dragon Ball',
    rarity: 'Secret',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Hakai Sphere of Annihilation',
    skillDescription: 'Gains +10% attack damage each time health drops below 50%. Immune to boss crowd control.',
    dpsRating: 'Not documented'
  },
  {
    id: 'curse-king',
    name: 'Curse King',
    anime: 'Jujutsu Kaisen',
    rarity: 'Mythic',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Malevolent Shrine Cleave',
    skillDescription: 'Dismantles surrounding enemies in a 360-degree perimeter, applying stacking bleed damage.',
    dpsRating: 'Not documented'
  },
  {
    id: 'aizan',
    name: 'Aizan',
    anime: 'Bleach',
    rarity: 'Mythic',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Kyoka Suigetsu (Parody)',
    skillDescription: 'Bleach-parody illusion blade unit. Exact in-game stats are not documented - confirm in the in-game Index (roster changes each patch).',
    dpsRating: 'Not documented'
  },
  {
    id: 'ultra-instinct-saiyan',
    name: 'Ultra Instinct Saiyan',
    anime: 'Dragon Ball',
    rarity: 'Mythic',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Autonomous Silver Rush',
    skillDescription: 'Passively evades 30% of incoming boss attacks and counters with instant critical strikes.',
    dpsRating: 'Not documented'
  },
  {
    id: 'ant-king-berserker',
    name: 'Ant King Berserker',
    anime: 'Solo Leveling',
    rarity: 'Mythic',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Gluttonous Predator',
    skillDescription: 'Heals for 15% of all damage dealt and emits a screech that lowers enemy defense by 25%.',
    dpsRating: 'Not documented'
  },
  {
    id: 'nine-tails-sage',
    name: 'Nine Tails Sage',
    anime: 'Naruto',
    rarity: 'Legendary',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Planetary Rasenshuriken',
    skillDescription: 'Launches a dual spinning vortex that shreds high-defense armored mobs.',
    dpsRating: 'Not documented'
  },
  {
    id: 'sorcerer-killer',
    name: 'Sorcerer Killer',
    anime: 'Jujutsu Kaisen',
    rarity: 'Legendary',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Inverted Spear Thrust',
    skillDescription: 'Nullifies magic barriers and deals 200% bonus critical damage to elite enemies.',
    dpsRating: 'Not documented'
  },
  {
    id: 'three-sword-pirate',
    name: 'Three Sword Pirate',
    anime: 'One Piece',
    rarity: 'Legendary',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'King of Hell Three-Dragon',
    skillDescription: 'Charges forward slashing all targets in a wide frontal cone.',
    dpsRating: 'Not documented'
  },
  {
    id: 'sun-breath-swordsman',
    name: 'Sun Breath Swordsman',
    anime: 'Demon Slayer',
    rarity: 'Legendary',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Hinokami Sun Dance',
    skillDescription: 'Continuous fire wheel slashes causing burn damage over time.',
    dpsRating: 'Not documented'
  },
  {
    id: 'lightning-assassin',
    name: 'Lightning Assassin',
    anime: 'Hunter x Hunter',
    rarity: 'Epic',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Godspeed Lightning Palm',
    skillDescription: 'Rapid electrical dashes that stun enemies for 1.5 seconds.',
    dpsRating: 'Not documented'
  },
  {
    id: 'shadow-shinobi',
    name: 'Shadow Shinobi',
    anime: 'Naruto',
    rarity: 'Epic',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Chidori Stream',
    skillDescription: 'Discharges lightning through ground tiles shocking nearby targets.',
    dpsRating: 'Not documented'
  },
  {
    id: 'flame-hashira',
    name: 'Flame Hashira',
    anime: 'Demon Slayer',
    rarity: 'Epic',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Ninth Form: Purgatory',
    skillDescription: 'High-impact dash leaving behind a wall of flame.',
    dpsRating: 'Not documented'
  },
  {
    id: 'rubber-pirate',
    name: 'Rubber Pirate',
    anime: 'One Piece',
    rarity: 'Rare',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Gatling Punch',
    skillDescription: 'Fast multi-hit barrage on single targets.',
    dpsRating: 'Not documented'
  },
  {
    id: 'martial-turtle',
    name: 'Martial Turtle',
    anime: 'Dragon Ball',
    rarity: 'Rare',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Destructo Disc',
    skillDescription: 'Spinning energy disc with armor penetration.',
    dpsRating: 'Not documented'
  },
  {
    id: 'academy-ninja',
    name: 'Academy Ninja',
    anime: 'Naruto',
    rarity: 'Common',
    incomePerSec: 'Not documented',
    baseDamage: 'Not documented',
    baseHealth: 'Not documented',
    skillName: 'Kunai Throw',
    skillDescription: 'Basic ranged weapon toss.',
    dpsRating: 'Not documented'
  }
];

export const REBIRTH_MILESTONES: RebirthMilestone[] = [
  { tier: 1, cashRequired: '100,000 Cash', cashNumeric: 100000, luckMultiplier: 1.5, cashMultiplier: 2.0, unlockedPerks: ['Auto-Roll Toggle Slot', '+50% Permanent Luck Boost', '+100% Cash Multiplier'] },
  { tier: 2, cashRequired: '2,500,000 Cash', cashNumeric: 2500000, luckMultiplier: 2.5, cashMultiplier: 4.0, unlockedPerks: ['Unlock Hub Grades Station', '+150% Permanent Luck Boost', '2nd Stationed Plot Slot'] },
  { tier: 3, cashRequired: '50,000,000 Cash', cashNumeric: 50000000, luckMultiplier: 4.0, cashMultiplier: 8.0, unlockedPerks: ['Unlock Infinity Tower Floor 20+', 'Diamond Dice Purchase Eligibility', '+300% Permanent Luck'] },
  { tier: 4, cashRequired: '1,000,000,000 Cash', cashNumeric: 1000000000, luckMultiplier: 7.0, cashMultiplier: 15.0, unlockedPerks: ['3rd Stationed Plot Slot', 'Void Dice Purchase Eligibility', '+600% Permanent Luck'] },
  { tier: 5, cashRequired: '25,000,000,000 Cash', cashNumeric: 25000000000, luckMultiplier: 12.0, cashMultiplier: 30.0, unlockedPerks: ['S-Tier Trait Rate-Up Event Access', 'Auto-Sell Rarity Filter', '+1,100% Permanent Luck'] },
  { tier: 6, cashRequired: '500,000,000,000 Cash', cashNumeric: 500000000000, luckMultiplier: 25.0, cashMultiplier: 75.0, unlockedPerks: ['4th Stationed Plot Slot', 'Cosmic Dice Purchase Eligibility', '+2,400% Permanent Luck'] },
  { tier: 7, cashRequired: '10 Trillion Cash', cashNumeric: 10000000000000, luckMultiplier: 50.0, cashMultiplier: 200.0, unlockedPerks: ['Infinity Tower Floor 50+ Boss Rush', 'Z+ Grade 2x Chance Window', '+4,900% Permanent Luck'] },
  { tier: 8, cashRequired: '500 Trillion Cash', cashNumeric: 500000000000000, luckMultiplier: 100.0, cashMultiplier: 500.0, unlockedPerks: ['Chrono Dice Purchase Eligibility (15 Sextillion)', 'Max Speed Auto-Roll', '+9,900% Permanent Luck'] },
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: 'Progression',
    question: 'Do I lose my Units, Gems, or Dice when I Rebirth in Anime Dice?',
    answer: 'No! When you perform a Rebirth in Anime Dice, only your Cash resets to zero. You keep 100% of your collected Units, equipped Traits, Grades, Gems, Lucky Spins, Trait Rerolls, and purchased Dice. This is why early Rebirths are strictly recommended.'
  },
  {
    category: 'Traits & Builds',
    question: 'What is the best Trait in Anime Dice and how do I roll it?',
    answer: 'The best Trait is Transcendent (S+ Tier), granting an immense 15x Income, 15x Damage, and 15x Health multiplier. It has a roll chance below 1%. Monarch (8x all stats) and Shogun (5x all stats) are the next best S-tier alternatives. You roll traits at the Traits station in the Plaza using Trait Reroll items.'
  },
  {
    category: 'Grades & Income',
    question: 'How do Grades stack with Traits on my stationed units?',
    answer: 'Grades and Traits stack MULTIPLICATIVELY on your base plot cash generation. For example, if your Shadow Sovereign has a Z+ Grade (25x Income) and a Transcendent Trait (15x Income), your unit will produce 25 * 15 = 375x its base cash per second!'
  },
  {
    category: 'Dice Mechanics',
    question: 'How much does the Chrono Dice cost and is it worth buying?',
    answer: 'The Chrono Dice costs 15 Sextillion Cash in the game shop and provides an enormous 250x luck multiplier with a 0.8s roll cooldown. Note: these figures are community-reported and currently unverified against official sources.'
  },
  {
    category: 'Codes & Freebies',
    question: 'How do I redeem active codes in Anime Dice?',
    answer: 'Launch Anime Dice in Roblox, click the Shop icon on the left side of your screen, scroll down to the bottom to find the Codes text box, enter the code exactly as shown (such as 5KCCU or UPDATE3), and press Redeem.'
  }
];
