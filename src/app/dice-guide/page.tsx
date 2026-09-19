import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Dice All Dice Tier & Stat Multipliers Guide ',
  description: 'Complete stats and roll speed multipliers for all 10+ dice in Anime Dice, including Chrono Dice and Void Walker.',
  alternates: {
    canonical: '/dice-guide/',
  },
  keywords: ['anime dice list', 'chrono dice anime dice', 'best dice anime dice'],
};



import React from 'react';
import Link from 'next/link';
import { 
  Dice5, Sparkles, Trophy, ArrowRight, ShieldCheck, 
  HelpCircle, ChevronRight, Zap, AlertTriangle 
} from 'lucide-react';
import { DICE_DATA } from '@/data/gameData';

export default function DiceGuidePage() {
  const chronoDice = DICE_DATA.find(d => d.id === 'chrono')!;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-pink-300 font-semibold">Dice Progression Guide</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-500/30 text-pink-300 text-xs font-semibold">
          <Dice5 className="w-3.5 h-3.5 text-pink-400" />
          <span>8 Dice Tiers & End-Game Costs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Progression & Chrono Dice Guide
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          The definitive roadmap to unlocking every die in Anime Dice. From the starter 1x die up to the 15 Sextillion Cash Chrono Dice, discover roll cooldown speeds, luck multipliers, and the optimal purchasing sequence.
        </p>
      </div>

      {/* Spotlight: The 15 Sextillion Chrono Dice */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-pink-500/30 bg-gradient-to-br from-[#180d24] via-[#0d142e] to-[#070b19] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-pink-950 border border-pink-500/40 flex items-center justify-center text-pink-400 shadow-lg shadow-pink-950/50">
              <Dice5 className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">Endgame Meta Breakthrough (Unverified)</span>
              <h2 className="text-2xl font-black text-white">Chrono Dice (15 Sextillion Cash)</h2>
            </div>
          </div>
          <span className="px-3 py-1 bg-pink-950 text-pink-300 border border-pink-500/40 rounded-full text-xs font-bold shrink-0">
            250x Luck (Community-reported)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400">Cash Investment</div>
            <div className="text-lg font-bold text-pink-400 mt-1">{chronoDice.cost}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Purchased at Hub Shop</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400">Roll Cooldown</div>
            <div className="text-lg font-bold text-cyan-400 mt-1">{chronoDice.cooldown}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Rapid auto-roll cycle</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400">Secret Pull Odds Impact</div>
            <div className="text-lg font-bold text-emerald-400 mt-1">+24,900% Odds Boost</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Community-reported — unverified</div>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Community sources describe the Chrono Dice as the primary endgame milestone, reportedly priced at 15 Sextillion Cash with a 250x luck multiplier. Because it reportedly scales multiplicatively with your Rebirth luck bonuses and server potions, combining the Chrono Dice with Rebirth 8 could push your total effective luck past <strong>25,000x</strong>. Note: these figures are community-reported and currently unverified against official sources — always confirm current pricing and stats in the in-game Hub Shop.
        </p>
      </div>

      {/* Complete Dice Hierarchy Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-pink-400" />
          <span>Full Dice Hierarchy & Stats Comparison</span>
        </h2>

        <div className="glass-panel rounded-2xl overflow-hidden border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0c132c]/80 text-slate-400 font-semibold">
                  <th className="p-4">Tier & Name</th>
                  <th className="p-4">Cash Cost</th>
                  <th className="p-4">Luck Multiplier</th>
                  <th className="p-4">Roll Speed</th>
                  <th className="p-4">Special Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {DICE_DATA.map((dice) => (
                  <tr key={dice.id} className="hover:bg-cyan-950/20 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center text-[10px] text-cyan-400 font-mono">
                          T{dice.tier}
                        </span>
                        <span>{dice.name}</span>
                        <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {dice.badge}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 font-mono font-semibold text-emerald-400">{dice.cost}</td>
                    <td className="p-4 font-bold text-cyan-300">{dice.luckMultiplier}x</td>
                    <td className="p-4 text-slate-400">{dice.cooldown}</td>
                    <td className="p-4 text-slate-400 max-w-xs">{dice.specialEffect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Strategic Tip: Don't Buy Dice Too Early */}
      <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>Pro Tip: Prioritize Rebirths Over Expensive Mid-Tier Dice!</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          New players often make the mistake of saving all their Cash for Void or Cosmic Dice before completing Rebirth 4. Remember that Rebirth resets your Cash to 0, but gives <strong>permanent Cash and Luck multipliers</strong> that stay forever! It is substantially faster to Rebirth first, which allows you to earn billions in seconds, rather than grinding slowly with a high-tier die.
        </p>
      </div>

      {/* Internal Link to Rebirth Guide */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-card rounded-2xl border-purple-500/20">
        <div>
          <h3 className="text-sm font-bold text-white">Wondering when to execute your next Rebirth?</h3>
          <p className="text-xs text-slate-400">
            Check the Rebirth roadmap to optimize your cash multipliers before buying the Chrono Dice.
          </p>
        </div>
        <Link
          href="/rebirth-guide/"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center gap-2 shrink-0 hover:from-purple-500 hover:to-indigo-500 transition-all"
        >
          <span>Rebirth Guide</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
