import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Dice Grades Multipliers & Upgrade Guide (September 2026)',
  description: 'Comprehensive breakdown of all 11 grade ranks from F to Z+ in Anime Dice. Grade stat multipliers and reroll strategies.',
  alternates: {
    canonical: '/grades-guide',
  },
  keywords: ['anime dice grades', 'anime dice z+ grade', 'anime dice grade multipliers'],
};



import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Gem, Sparkles, ArrowRight, HelpCircle, 
  ChevronRight, Trophy, Zap, Layers 
} from 'lucide-react';
import { GRADES_DATA } from '@/data/gameData';

export default function GradesGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-emerald-300 font-semibold">Grades Multipliers Guide</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Hub Grades Station & Multipliers</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Grades Multipliers Guide
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Master the Grades system in Anime Dice to supercharge your plot cash generation. Inspect exact income multipliers from Z+ (25x) to D, roll chances, gem costs, and how Grades stack with Traits.
        </p>
      </div>

      {/* High-Impact Stat Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-emerald-500/30 bg-gradient-to-br from-[#0c2419] via-[#0b1b24] to-[#070b19] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Pinnacle Income Multiplier</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Grade Z+ (25x Plot Income)</h2>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-bold shrink-0">
            Roll Chance: 0.007% &middot; 50 Gems / Reroll
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Grades in Anime Dice <strong>exclusively boost base plot income</strong> and do not modify combat damage or health. Stacking a high-tier Grade like Z or Z+ on your high-rarity units (such as Shadow Sovereign or Sun God Joyboy) creates an explosive cash compounding effect, allowing you to reach Rebirth thresholds in seconds.
        </p>
      </div>

      {/* Grades Hierarchy Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-emerald-400" />
          <span>All 9 Grades: Odds, Multipliers & Costs</span>
        </h2>

        <div className="glass-panel rounded-2xl overflow-hidden border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0c132c]/80 text-slate-400 font-semibold">
                  <th className="p-4">Grade</th>
                  <th className="p-4">Tier</th>
                  <th className="p-4">Income Multiplier</th>
                  <th className="p-4">Roll Chance</th>
                  <th className="p-4">Cost (Gems)</th>
                  <th className="p-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {GRADES_DATA.map((grade) => (
                  <tr key={grade.grade} className="hover:bg-emerald-950/20 transition-colors">
                    <td className="p-4 font-extrabold text-base text-white">
                      <span className={`px-2.5 py-1 rounded-lg border ${
                        grade.grade.startsWith('Z')
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/30'
                          : grade.grade.startsWith('S')
                          ? 'bg-purple-950 text-purple-300 border-purple-500/40'
                          : grade.grade.startsWith('A')
                          ? 'bg-cyan-950 text-cyan-300 border-cyan-500/40'
                          : 'bg-slate-900 text-slate-400 border-slate-700'
                      }`}>
                        {grade.grade}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-slate-200">{grade.tier}</td>
                    <td className="p-4 font-mono font-bold text-emerald-400 text-sm">{grade.incomeMultiplier}x</td>
                    <td className="p-4 font-mono text-amber-400 font-semibold">{grade.rollChance}</td>
                    <td className="p-4 font-mono text-cyan-300">{grade.gemCost} Gems</td>
                    <td className="p-4 text-slate-400 max-w-sm leading-relaxed">{grade.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* How to Roll & Farm Gems Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Step 1: Grades Station */}
        <div className="glass-panel p-6 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <HelpCircle className="w-4 h-4" />
            <span>How to Reroll Grades in the Hub</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            1. Reach <strong>Rebirth 2</strong> (requires 2,500,000 Cash) to unlock access to the Grades Station.<br />
            2. Teleport to the central Hub and walk up to the <strong>Grades Station</strong>.<br />
            3. Select the stationed unit you want to enhance and click <strong>Reroll Grade</strong>.<br />
            4. Each attempt costs <strong>50 Gems</strong>.
          </p>
        </div>

        {/* Step 2: Farming Gems */}
        <div className="glass-panel p-6 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Gem className="w-4 h-4" />
            <span>How to Farm Gems Efficiently</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            &bull; <strong>Infinity Tower Waves:</strong> Clear enemy waves in the Tower challenge to earn 5-25 Gems per milestone.<br />
            &bull; <strong>Active Codes:</strong> Codes like <code>UPDATE3</code> and <code>5KCCU</code> provide up to 7x Gems instantly.<br />
            &bull; <strong>Daily Login Streaks:</strong> Consistent daily play rewards ascending Gem bundles up to 100 Gems.
          </p>
        </div>

      </div>

      {/* Stacking Synergy Callout */}
      <div className="glass-card p-6 rounded-2xl border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-white">Combine with S-Tier Traits for 375x Compounding</h3>
          <p className="text-xs text-slate-400">
            Stack Grade Z+ (25x) with Trait Transcendent (15x) to reach maximum plot generation velocity.
          </p>
        </div>
        <Link
          href="/traits-tier-list/"
          className="px-5 py-2.5 rounded-xl bg-purple-900/80 hover:bg-purple-800 text-purple-200 border border-purple-500/40 text-xs font-bold flex items-center gap-2 shrink-0 transition-all"
        >
          <span>Traits Tier List</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
