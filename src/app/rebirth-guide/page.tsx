import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Dice Rebirth Milestones & Multipliers Guide (September 2026)',
  description: 'Detailed Rebirth milestone requirements, luck multipliers, and unlock perks across all 15 rebirth tiers in Anime Dice.',
  alternates: {
    canonical: '/rebirth-guide/',
  },
  keywords: ['anime dice rebirth milestones', 'anime dice rebirth multipliers', 'anime dice rebirth 15'],
};



import React from 'react';
import Link from 'next/link';
import { 
  RotateCcw, Sparkles, ArrowRight, ShieldCheck, 
  CheckCircle2, AlertTriangle, Trophy, Zap 
} from 'lucide-react';
import { REBIRTH_MILESTONES } from '@/data/gameData';

export default function RebirthGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-purple-300 font-semibold">Rebirth Guide</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold">
          <RotateCcw className="w-3.5 h-3.5 text-purple-400" />
          <span>Permanent Luck & Cash Compounding</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Rebirth Guide & Milestones
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Learn how to execute optimal Rebirth timing in Anime Dice. Review the exact Cash requirements for Tiers 1 through 8, understand permanent multipliers, and unlock additional unit plot slots.
        </p>
      </div>

      {/* Rebirth Core Principle Alert */}
      <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-cyan-400" />
          <span>The Golden Rule: Never Hoard Cash Beyond the Rebirth Threshold!</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          In Anime Dice, executing a Rebirth resets your unspent Cash to zero. Any money collected past the requirement is completely wiped. Therefore, you should Rebirth the exact second you reach the milestone to claim your permanent <strong>Cash and Luck multipliers</strong>. Because your previous units and Grades remain intact, earning back the cash takes a fraction of the time!
        </p>
      </div>

      {/* Rebirth Milestones Full Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-purple-400" />
          <span>Rebirth Tiers & Permanent Multipliers</span>
        </h2>

        <div className="glass-panel rounded-2xl overflow-hidden border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0c132c]/80 text-slate-400 font-semibold">
                  <th className="p-4">Rebirth Tier</th>
                  <th className="p-4">Required Cash</th>
                  <th className="p-4">Permanent Luck</th>
                  <th className="p-4">Permanent Cash</th>
                  <th className="p-4">Unlocked Perks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {REBIRTH_MILESTONES.map((r) => (
                  <tr key={r.tier} className="hover:bg-purple-950/20 transition-colors">
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-950 text-purple-300 border border-purple-500/40 flex items-center justify-center text-xs">
                        {r.tier}
                      </span>
                      <span>Tier {r.tier}</span>
                    </td>
                    <td className="p-4 font-mono font-bold text-emerald-400">{r.cashRequired}</td>
                    <td className="p-4 font-bold text-cyan-400">+{r.luckMultiplier}x Luck</td>
                    <td className="p-4 font-bold text-amber-400">+{r.cashMultiplier}x Cash</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1.5">
                        {r.unlockedPerks.map((perk, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                            {perk}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* What You Keep vs What You Lose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Retained Card */}
        <div className="glass-panel p-6 rounded-2xl border-emerald-500/30 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Items Retained Across Rebirths (100% Safe)</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>All collected Units in your inventory and plot</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Equipped Traits (Transcendent, Monarch, etc.)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Equipped Grades (Z+, Z, S+, etc.)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Purchased Dice (Void, Cosmic, Chrono Dice)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>All Gems, Lucky Spins, and Trait Rerolls</span>
            </li>
          </ul>
        </div>

        {/* Reset Card */}
        <div className="glass-panel p-6 rounded-2xl border-rose-500/30 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            <span>Items Reset on Rebirth</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>Unspent Cash balance (resets to $0)</span>
            </li>
          </ul>
          <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
            Because unspent cash is the <em>only</em> asset that resets, never hesitate to rebirth immediately.
          </p>
        </div>

      </div>

      {/* Simulator CTA */}
      <div className="glass-card p-6 rounded-2xl border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-white">Curious about your new Secret pull rates?</h3>
          <p className="text-xs text-slate-400">
            Plug your latest Rebirth Luck Multiplier into our interactive odds simulator.
          </p>
        </div>
        <Link
          href="/calculator/"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs flex items-center gap-2 shrink-0 hover:from-cyan-400 hover:to-indigo-500 transition-all"
        >
          <span>Calculate Secret Odds</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
