'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Sparkles, Zap, ArrowRight, ShieldCheck, Scale, 
  ChevronRight, HelpCircle, Trophy, Check, Layers 
} from 'lucide-react';
import { TRAITS_DATA, GRADES_DATA, UNITS_DATA } from '@/data/gameData';

export default function TraitsTierListPage() {
  const [tierFilter, setTierFilter] = useState<string>('ALL');
  
  // Dual Compare State
  const [traitAId, setTraitAId] = useState<string>('transcendent');
  const [gradeAVal, setGradeAVal] = useState<string>('Z+');
  const [traitBId, setTraitBId] = useState<string>('monarch');
  const [gradeBVal, setGradeBVal] = useState<string>('S');

  const traitA = useMemo(() => TRAITS_DATA.find(t => t.id === traitAId) || TRAITS_DATA[0], [traitAId]);
  const traitB = useMemo(() => TRAITS_DATA.find(t => t.id === traitBId) || TRAITS_DATA[1], [traitBId]);
  const gradeA = useMemo(() => GRADES_DATA.find(g => g.grade === gradeAVal) || GRADES_DATA[0], [gradeAVal]);
  const gradeB = useMemo(() => GRADES_DATA.find(g => g.grade === gradeBVal) || GRADES_DATA[3], [gradeBVal]);

  // Combined Multipliers
  const totalIncomeA = traitA.incomeMultiplier * gradeA.incomeMultiplier;
  const totalIncomeB = traitB.incomeMultiplier * gradeB.incomeMultiplier;

  const filteredTraits = tierFilter === 'ALL'
    ? TRAITS_DATA
    : TRAITS_DATA.filter(t => t.tier.startsWith(tierFilter));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-purple-300 font-semibold">Traits Tier List & Dual Compare</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Update 3 Verified Stat Multipliers</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Traits Tier List & Synergy Tool
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Comprehensive ranking of all 13 Traits in Anime Dice. From the game-breaking 15x Transcendent to specialized Damage III modifiers, evaluate exact roll odds and test dual Trait + Grade synergies.
        </p>
      </div>

      {/* Dual Trait & Grade Synergy Comparison Tool */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-purple-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-400" />
              <span>Interactive Dual Build Comparator</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Simulate how different Trait + Grade combinations multiply your unit’s total Income, Damage, and Health.
            </p>
          </div>
          <span className="px-2.5 py-1 text-xs font-bold bg-purple-950 text-purple-300 border border-purple-500/30 rounded-lg shrink-0">
            Multiplicative Stacking
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Build A Card */}
          <div className="p-5 rounded-xl bg-slate-950/70 border border-cyan-500/30 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Build Configuration A</span>
              <span className="text-xs text-slate-400">Total Mult: <strong className="text-cyan-300">{totalIncomeA.toFixed(1)}x Income</strong></span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 font-semibold block mb-1">Select Trait:</label>
                <select
                  value={traitAId}
                  onChange={(e) => setTraitAId(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-cyan-400"
                >
                  {TRAITS_DATA.map(t => (
                    <option key={t.id} value={t.id}>{t.name} (Tier {t.tier})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 font-semibold block mb-1">Select Grade:</label>
                <select
                  value={gradeAVal}
                  onChange={(e) => setGradeAVal(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-cyan-400"
                >
                  {GRADES_DATA.map(g => (
                    <option key={g.grade} value={g.grade}>{g.grade} ({g.incomeMultiplier}x Income)</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Income Multiplier</div>
                <div className="text-base font-extrabold text-emerald-400">{totalIncomeA.toFixed(1)}x</div>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Combat Damage</div>
                <div className="text-base font-extrabold text-cyan-400">{traitA.damageMultiplier}x</div>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Total Health</div>
                <div className="text-base font-extrabold text-purple-400">{traitA.healthMultiplier}x</div>
              </div>
            </div>
          </div>

          {/* Build B Card */}
          <div className="p-5 rounded-xl bg-slate-950/70 border border-purple-500/30 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Build Configuration B</span>
              <span className="text-xs text-slate-400">Total Mult: <strong className="text-purple-300">{totalIncomeB.toFixed(1)}x Income</strong></span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 font-semibold block mb-1">Select Trait:</label>
                <select
                  value={traitBId}
                  onChange={(e) => setTraitBId(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-purple-400"
                >
                  {TRAITS_DATA.map(t => (
                    <option key={t.id} value={t.id}>{t.name} (Tier {t.tier})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 font-semibold block mb-1">Select Grade:</label>
                <select
                  value={gradeBVal}
                  onChange={(e) => setGradeBVal(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-purple-400"
                >
                  {GRADES_DATA.map(g => (
                    <option key={g.grade} value={g.grade}>{g.grade} ({g.incomeMultiplier}x Income)</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Income Multiplier</div>
                <div className="text-base font-extrabold text-emerald-400">{totalIncomeB.toFixed(1)}x</div>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Combat Damage</div>
                <div className="text-base font-extrabold text-cyan-400">{traitB.damageMultiplier}x</div>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Total Health</div>
                <div className="text-base font-extrabold text-purple-400">{traitB.healthMultiplier}x</div>
              </div>
            </div>
          </div>

        </div>

        {/* Delta Comparison Verdict */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <strong>Comparative Verdict:</strong> Build A generates{' '}
            <span className="text-cyan-400 font-bold">
              {totalIncomeA >= totalIncomeB 
                ? `${(totalIncomeA / Math.max(1, totalIncomeB)).toFixed(2)}x more`
                : `${(totalIncomeB / Math.max(1, totalIncomeA)).toFixed(2)}x less`
              }
            </span>{' '}
            income than Build B.
          </div>
          <Link
            href="/calculator/"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0"
          >
            <span>Simulate Reroll Odds</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Tier Filter Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-semibold">Filter by Tier:</span>
          {['ALL', 'S', 'A', 'B', 'C'].map((tier) => (
            <button
              key={tier}
              onClick={() => setTierFilter(tier)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                tierFilter === tier
                  ? 'bg-purple-950 border-purple-400 text-purple-300 shadow-md shadow-purple-950/50'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tier === 'ALL' ? 'All (13)' : `Tier ${tier}`}
            </button>
          ))}
        </div>
        <span className="text-xs text-slate-500">
          Showing {filteredTraits.length} of {TRAITS_DATA.length} Traits
        </span>
      </div>

      {/* Traits Full Tier List Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredTraits.map((t) => (
          <div 
            key={t.id} 
            className="glass-card p-6 border-slate-800 hover:border-purple-500/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-white">{t.name}</span>
                <span className={`px-2.5 py-0.5 text-xs font-extrabold rounded border ${
                  t.tier.startsWith('S')
                    ? 'bg-purple-950/80 text-purple-300 border-purple-500/40'
                    : t.tier.startsWith('A')
                    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                    : 'bg-slate-900 text-slate-300 border-slate-700'
                }`}>
                  Tier {t.tier}
                </span>
                <span className="text-xs text-amber-400 font-mono font-semibold">
                  Roll Chance: {t.rollChance}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.description}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-slate-500 font-medium">Recommended On:</span>
                {t.recommendedUnits.map((u, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-300 border border-slate-800">
                    {u}
                  </span>
                ))}
              </div>
            </div>

            {/* Multiplier Pills */}
            <div className="grid grid-cols-3 gap-2 w-full md:w-auto shrink-0 text-center">
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 min-w-[80px]">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Income</div>
                <div className="text-base font-extrabold text-emerald-400">{t.incomeMultiplier}x</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 min-w-[80px]">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Damage</div>
                <div className="text-base font-extrabold text-cyan-400">{t.damageMultiplier}x</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 min-w-[80px]">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Health</div>
                <div className="text-base font-extrabold text-purple-400">{t.healthMultiplier}x</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Guide Callout */}
      <div className="glass-panel p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-purple-400" />
          <span>How to Reroll Traits in Anime Dice</span>
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          To reroll your unit&apos;s trait, walk to the <strong>Traits Station</strong> located on the main Plaza. Open the interaction menu, select the unit you want to modify, and click the blue <strong>Roll</strong> button. Each roll consumes 1 Trait Reroll item. Trait Rerolls are obtained by redeeming codes, clearing Tower floors, or opening Daily Milestone chests.
        </p>
      </div>

    </div>
  );
}
