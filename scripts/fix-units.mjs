// One-off transform: mark all 18 unit stat fields as 'Not documented'
// (no public source publishes per-unit stats for Anime Dice),
// rename 'Demon Slayer Prodigy' -> verified parody name 'Aizan',
// and mark Chrono/Divine Dice entries as unverified.
import { readFileSync, writeFileSync } from 'node:fs';

const p = new URL('../src/data/gameData.ts', import.meta.url);
let s = readFileSync(p, 'utf8');
const before = s;

// 1. Interface: numeric stat fields -> string
s = s.replace(/  incomePerSec: number;/, "  incomePerSec: string; // 'Not documented' - no public source publishes per-unit stats");
s = s.replace(/  baseDamage: number;/, "  baseDamage: string; // 'Not documented'");
s = s.replace(/  baseHealth: number;/, "  baseHealth: string; // 'Not documented'");
s = s.replace(/  dpsRating: number;/, "  dpsRating: string; // 'Not documented'");

// 2. Unit entries: numbers -> 'Not documented' (only inside UNITS_DATA block)
s = s.replace(/(UNITS_DATA: UnitItem\[\] = \[[\s\S]*?\n\];)/, (block) =>
  block
    .replace(/incomePerSec: \d+(\.\d+)?,/g, "incomePerSec: 'Not documented',")
    .replace(/baseDamage: \d+(\.\d+)?,/g, "baseDamage: 'Not documented',")
    .replace(/baseHealth: \d+(\.\d+)?,/g, "baseHealth: 'Not documented',")
    .replace(/dpsRating: \d+(\.\d+)?\n/g, "dpsRating: 'Not documented'\n")
);

// 3. 'Demon Slayer Prodigy' (anime:'Bleach' contradiction) -> verified parody name 'Aizan'
s = s.replace("id: 'demon-slayer-prodigy',", "id: 'aizan',");
s = s.replace("name: 'Demon Slayer Prodigy',", "name: 'Aizan',");
s = s.replace("skillName: 'Final Getsuga Mugetsu',", "skillName: 'Kyoka Suigetsu (Parody)',");
s = s.replace(
  "skillDescription: 'Unleashes an obsidian energy wave across the full battlefield line.',",
  "skillDescription: 'Bleach-parody illusion blade unit. Exact in-game stats are not documented - confirm in the in-game Index (roster changes each patch).',"
);

// 4. Chrono / Divine Dice: mark unverified (DICE_DATA + ACTIVE_CODES copies)
s = s.replaceAll("badge: 'Mythic (Verified)'", "badge: 'Unverified'");
s = s.replace(
  "specialEffect: 'Priced at 15 Sextillion Cash. Grants 250x luck to unlock Secret tier odds'",
  "specialEffect: 'Community-reported: 15 Sextillion Cash cost and 250x luck. Not verified against official sources'"
);
s = s.replace(
  "badge: 'Godly Secret', specialEffect: '500x omnipotent luck aura with maximum auto-roll velocity'",
  "badge: 'Unverified', specialEffect: 'Community-reported: 100 Septillion Cash cost and 500x luck. No public source confirms these stats'"
);

// 5. FAQ answer on Chrono Dice: add unverified caveat
s = s.replace(
  "It is currently the primary endgame dice for rolling Secret and Mythic units.",
  "Note: these figures are community-reported and currently unverified against official sources."
);

if (s === before) { console.error('ERROR: no changes applied'); process.exit(1); }
writeFileSync(p, s);
const hits = (s.match(/Not documented/g) || []).length;
console.log('OK. "Not documented" occurrences:', hits);
console.log('Remaining numeric stats in UNITS block:',
  (s.match(/(incomePerSec|baseDamage|baseHealth|dpsRating): \d/g) || []).length);
