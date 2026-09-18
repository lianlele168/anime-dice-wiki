import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Dice Beginner Guide - 0 to 1B Roll Master Walkthrough',
  description: 'Complete progression guide for Anime Dice on Roblox. Learn Infinity Tower unlock, optimal potion stacking, and early rebirth routing.',
  alternates: {
    canonical: '/beginner-guide/',
  },
  keywords: ['anime dice beginner guide', 'anime dice progression', 'anime dice infinity tower'],
};



import React from 'react';
import Link from 'next/link';
import { 
  HelpCircle, Compass, Zap, ArrowRight, ShieldCheck, 
  AlertTriangle, Gift, Calculator, Sparkles 
} from 'lucide-react';

export default function BeginnerGuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-cyan-300 font-semibold">Beginner Guide</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>Complete 0 to 1B Roll Master Walkthrough</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Beginner Survival Guide
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          The ultimate walkthrough for new players in Anime Dice. Learn how to progress from your first roll to unlocking the Infinity Tower, executing seamless Rebirths, and rolling S-Tier anime units.
        </p>
      </div>

      {/* 4-Phase Progression Roadmap */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-cyan-400" />
          <span>4-Phase Master Progression Roadmap</span>
        </h2>

        <div className="space-y-4">
          
          {/* Phase 1 */}
          <div className="glass-panel p-6 rounded-2xl border-cyan-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">Phase 1: Minute 0 to 15</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">Immediate Priority</span>
            </div>
            <h3 className="text-base font-bold text-white">Redeem All Codes & Place Initial Plot Units</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upon spawning, immediately open the Shop menu and redeem all active codes (like <code>5KCCU</code>, <code>UPDATE3</code>, and <code>1KCCU</code>) to instantly claim 10+ Lucky Spins and Trait Rerolls. Use your starter Lucky Spins to roll your first Rare or Epic characters. Place them on your plot to start generating passive Cash per second.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="glass-panel p-6 rounded-2xl border-purple-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-purple-400 uppercase tracking-wider">Phase 2: First Rebirths</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-500/30">Hour 1</span>
            </div>
            <h3 className="text-base font-bold text-white">Reach Rebirth 1 (100k) and Rebirth 2 (2.5M)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Do not spend Cash on expensive dice early on. As soon as your plot reaches 100,000 Cash, click the Rebirth circle icon on your HUD. This grants an immediate permanent +50% Luck and 2x Cash boost. Repeat until you reach Rebirth 2 (2.5M), which unlocks the <strong>Hub Grades Station</strong> and a 2nd stationed plot slot.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="glass-panel p-6 rounded-2xl border-emerald-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">Phase 3: Gem Economy</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30">Infinity Tower</span>
            </div>
            <h3 className="text-base font-bold text-white">Climb the Infinity Tower for Infinite Gems</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Take your highest base Damage units (such as Nine Tails Sage or Sorcerer Killer) into the Infinity Tower. Clearing waves rewards Gems, which are mandatory for rolling Grades. Target at least <strong>Grade A (3x) or S (7x)</strong> on your highest-earning plot units.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="glass-panel p-6 rounded-2xl border-amber-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">Phase 4: Endgame Push</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-500/30">End-Game</span>
            </div>
            <h3 className="text-base font-bold text-white">Rebirth 6+ & The 15 Sextillion Chrono Dice</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Stack Rebirths up to Tier 6+ (+2,400% Luck) to prepare for pulling Secret units. Once your combined plot income reaches Trillions per second, purchase the <strong>Chrono Dice</strong> (250x luck) to achieve permanent Secret roll dominance.
            </p>
          </div>

        </div>
      </div>

      {/* 4 Fatal Beginner Mistakes */}
      <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-4">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
          <AlertTriangle className="w-5 h-5" />
          <span>Top 4 Fatal Beginner Mistakes to Avoid</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
            <div className="font-bold text-white">1. Over-saving Cash before Rebirthing</div>
            <p className="text-slate-400">Never stockpile cash beyond the milestone threshold. Excess cash is permanently deleted on Rebirth.</p>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
            <div className="font-bold text-white">2. Rerolling Grades on Common Units</div>
            <p className="text-slate-400">Save your Gems for Legendary or Mythic units. Spending 50 Gems to get a Z Grade on an Academy Ninja is a waste.</p>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
            <div className="font-bold text-white">3. Ignoring Trait Rerolls</div>
            <p className="text-slate-400">Traits multiply both combat and income. Even an A-tier Trait like Income III will double your unit's cash flow.</p>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
            <div className="font-bold text-white">4. Rolling Without Server Luck Buffs</div>
            <p className="text-slate-400">Always drink a Lucky Potion and play in a server with friends to get the passive +20% group multiplayer luck.</p>
          </div>
        </div>
      </div>

      {/* Fast Tools Link Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/codes/" className="glass-card p-4 flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="text-xs font-bold text-white">Active Codes</div>
              <div className="text-[10px] text-slate-400">Claim free spins</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link href="/calculator/" className="glass-card p-4 flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <Calculator className="w-5 h-5 text-purple-400" />
            <div>
              <div className="text-xs font-bold text-white">Luck Simulator</div>
              <div className="text-[10px] text-slate-400">Test Secret odds</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link href="/traits-tier-list/" className="glass-card p-4 flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-xs font-bold text-white">Traits Tier List</div>
              <div className="text-[10px] text-slate-400">13 Traits ranked</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
