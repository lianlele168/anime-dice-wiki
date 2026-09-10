'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calculator, Dice5, Sparkles, Zap, Trophy, ArrowRight, 
  RotateCcw, ShieldCheck, Flame, Info, CheckCircle2 
} from 'lucide-react';
import { DICE_DATA, REBIRTH_MILESTONES, TRAITS_DATA } from '@/data/gameData';

export default function CalculatorPage() {
  const [selectedDiceId, setSelectedDiceId] = useState<string>('chrono');
  const [rebirthTier, setRebirthTier] = useState<number>(5);
  const [useLuckyPotion, setUseLuckyPotion] = useState<boolean>(true);
  const [useSuperPotion, setUseSuperPotion] = useState<boolean>(true);
  const [useUltraPotion, setUseUltraPotion] = useState<boolean>(false);
  const [useFriendBoost, setUseFriendBoost] = useState<boolean>(true);
  const [simulatedRollsCount, setSimulatedRollsCount] = useState<number>(1000);

  // Simulation State
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResult, setSimResult] = useState<{
    totalRolls: number;
    secrets: number;
    mythics: number;
    legendaries: number;
    epics: number;
  } | null>(null);

  const currentDice = useMemo(() => {
    return DICE_DATA.find(d => d.id === selectedDiceId) || DICE_DATA[0];
  }, [selectedDiceId]);

  const currentRebirth = useMemo(() => {
    return REBIRTH_MILESTONES.find(r => r.tier === rebirthTier) || REBIRTH_MILESTONES[0];
  }, [rebirthTier]);

  // Calculate Total Multiplier
  const potionMultiplier = useMemo(() => {
    let mult = 1.0;
    if (useLuckyPotion) mult += 0.5;
    if (useSuperPotion) mult += 1.0;
    if (useUltraPotion) mult += 2.0;
    if (useFriendBoost) mult += 0.2;
    return mult;
  }, [useLuckyPotion, useSuperPotion, useUltraPotion, useFriendBoost]);

  const totalLuckMultiplier = useMemo(() => {
    const diceLuck = currentDice.luckMultiplier;
    const rebirthLuck = currentRebirth.luckMultiplier;
    return diceLuck * rebirthLuck * potionMultiplier;
  }, [currentDice, currentRebirth, potionMultiplier]);

  // Odds calculation (Base chances: Secret = 1/2,000,000; Mythic = 1/50,000; Legendary = 1/2,500; Epic = 1/150)
  const odds = useMemo(() => {
    const baseSecretOdds = 1 / 2000000;
    const baseMythicOdds = 1 / 50000;
    const baseLegendaryOdds = 1 / 2500;
    const baseEpicOdds = 1 / 150;

    const effSecret = Math.min(baseSecretOdds * totalLuckMultiplier, 0.50);
    const effMythic = Math.min(baseMythicOdds * totalLuckMultiplier, 0.70);
    const effLegendary = Math.min(baseLegendaryOdds * totalLuckMultiplier, 0.90);
    const effEpic = Math.min(baseEpicOdds * totalLuckMultiplier, 0.98);

    // Expected rolls for 90% confidence: n = ln(0.1) / ln(1 - p)
    const rollsFor90Secret = effSecret > 0 ? Math.ceil(Math.log(0.10) / Math.log(1 - effSecret)) : 0;
    const rollsFor90Mythic = effMythic > 0 ? Math.ceil(Math.log(0.10) / Math.log(1 - effMythic)) : 0;

    return {
      secretChancePercent: (effSecret * 100).toFixed(4),
      secret1inX: Math.max(1, Math.round(1 / effSecret)),
      mythicChancePercent: (effMythic * 100).toFixed(3),
      mythic1inX: Math.max(1, Math.round(1 / effMythic)),
      legendaryChancePercent: (effLegendary * 100).toFixed(2),
      rollsFor90Secret,
      rollsFor90Mythic,
      rawSecret: effSecret,
      rawMythic: effMythic,
      rawLegendary: effLegendary,
      rawEpic: effEpic,
    };
  }, [totalLuckMultiplier]);

  // Live RNG Roll Simulator
  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      let secrets = 0;
      let mythics = 0;
      let legendaries = 0;
      let epics = 0;

      for (let i = 0; i < simulatedRollsCount; i++) {
        const rand = Math.random();
        if (rand < odds.rawSecret) {
          secrets++;
        } else if (rand < odds.rawMythic) {
          mythics++;
        } else if (rand < odds.rawLegendary) {
          legendaries++;
        } else if (rand < odds.rawEpic) {
          epics++;
        }
      }

      setSimResult({
        totalRolls: simulatedRollsCount,
        secrets,
        mythics,
        legendaries,
        epics,
      });
      setIsSimulating(false);
    }, 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-cyan-300 font-semibold">Luck & Odds Simulator</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <Calculator className="w-3.5 h-3.5" />
          <span>Update 3 & Chrono Dice RNG Matrix</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Luck & Odds Calculator
        </h1>
        <p className="text-sm text-slate-300">
          Compute real-time pull probabilities for Secret and Mythic characters. Combine Dice inherent Luck, Rebirth tiers, and active Potion stacks to calculate exact statistical odds.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Section 1: Choose Dice Tier */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <Dice5 className="w-4 h-4 text-cyan-400" />
                <span>1. Select Equipped Dice</span>
              </label>
              <span className="text-xs text-cyan-400 font-semibold">
                Base Luck: {currentDice.luckMultiplier}x
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {DICE_DATA.map((dice) => (
                <button
                  key={dice.id}
                  onClick={() => setSelectedDiceId(dice.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedDiceId === dice.id
                      ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-950/50'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold truncate text-white">{dice.name}</div>
                  <div className="text-[10px] text-cyan-400 font-semibold mt-0.5">{dice.luckMultiplier}x Luck</div>
                  <div className="text-[10px] text-slate-500 mt-1 truncate">{dice.cost}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Rebirth Tier Slider */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-purple-400" />
                <span>2. Rebirth Milestone: Tier {rebirthTier}</span>
              </label>
              <span className="text-xs text-purple-400 font-semibold">
                Rebirth Multiplier: {currentRebirth.luckMultiplier}x
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={8}
              step={1}
              value={rebirthTier}
              onChange={(e) => setRebirthTier(parseInt(e.target.value))}
              className="w-full"
            />

            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Tier 1 (+1.5x)</span>
              <span>Tier 4 (+7x)</span>
              <span>Tier 8 (+100x)</span>
            </div>

            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Required Cash for Tier {rebirthTier}:</span>
              <span className="font-bold text-slate-200">{currentRebirth.cashRequired}</span>
            </div>
          </div>

          {/* Section 3: Potions & Buffs */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>3. Active Potions & Buff Multipliers</span>
              </label>
              <span className="text-xs text-amber-400 font-semibold">
                Buff Stack: {potionMultiplier.toFixed(1)}x
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={useLuckyPotion}
                  onChange={(e) => setUseLuckyPotion(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-200">Lucky Potion (+50%)</div>
                  <div className="text-[10px] text-slate-500">Tier 1 consumable (+0.5x luck)</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={useSuperPotion}
                  onChange={(e) => setUseSuperPotion(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-200">Super Lucky Potion (+100%)</div>
                  <div className="text-[10px] text-slate-500">Tier 2 consumable (+1.0x luck)</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={useUltraPotion}
                  onChange={(e) => setUseUltraPotion(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-200">Ultra Lucky Potion (+200%)</div>
                  <div className="text-[10px] text-slate-500">Special event buff (+2.0x luck)</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={useFriendBoost}
                  onChange={(e) => setUseFriendBoost(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-200">Friend In-Server (+20%)</div>
                  <div className="text-[10px] text-slate-500">Passive party multiplayer boost</div>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* Right Column: Calculated Outputs & Simulator (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Total Luck Overview Banner */}
          <div className="glass-panel p-6 rounded-2xl border-cyan-500/30 bg-gradient-to-br from-[#0c142e] via-[#091024] to-[#070b19] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Effective Total Luck
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                ACTIVE MULTIPLIER
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {totalLuckMultiplier.toLocaleString(undefined, { maximumFractionDigits: 1 })}x
              </span>
              <span className="text-xs text-slate-400">Total Luck</span>
            </div>

            <div className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
              Formula: <code className="text-cyan-300 font-mono">{currentDice.luckMultiplier}x</code> (Dice) &times; <code className="text-purple-300 font-mono">{currentRebirth.luckMultiplier}x</code> (Rebirth) &times; <code className="text-amber-300 font-mono">{potionMultiplier.toFixed(1)}x</code> (Buffs)
            </div>
          </div>

          {/* Probabilities Breakdown */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Calculated Pull Probabilities (Per Roll)</span>
            </h3>

            {/* Secret Card */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/20 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Secret Rarity</span>
                <span className="text-xs font-mono font-bold text-cyan-400">{odds.secretChancePercent}%</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Estimated 1-in-X:</span>
                <span className="font-semibold text-slate-200">1 in {odds.secret1inX.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Rolls for 90% Confidence:</span>
                <span className="font-semibold text-cyan-300">{odds.rollsFor90Secret.toLocaleString()} rolls</span>
              </div>
            </div>

            {/* Mythic Card */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-purple-500/20 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Mythic Rarity</span>
                <span className="text-xs font-mono font-bold text-purple-400">{odds.mythicChancePercent}%</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Estimated 1-in-X:</span>
                <span className="font-semibold text-slate-200">1 in {odds.mythic1inX.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Rolls for 90% Confidence:</span>
                <span className="font-semibold text-purple-300">{odds.rollsFor90Mythic.toLocaleString()} rolls</span>
              </div>
            </div>

            {/* Legendary Card */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-500/20 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Legendary Rarity</span>
                <span className="text-xs font-mono font-bold text-amber-400">{odds.legendaryChancePercent}%</span>
              </div>
            </div>
          </div>

          {/* Real-Time Roll Simulator Engine */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Live Roll Batch Simulator</span>
            </h3>

            <div className="space-y-2">
              <label className="text-xs text-slate-400">Simulate Number of Rolls:</label>
              <div className="grid grid-cols-4 gap-2">
                {[100, 500, 1000, 5000].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSimulatedRollsCount(num)}
                    className={`py-1.5 text-xs font-bold rounded-lg border ${
                      simulatedRollsCount === num
                        ? 'bg-cyan-950 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {num.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 font-bold text-xs text-white shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Dice5 className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Simulating Rolls...' : `Simulate ${simulatedRollsCount.toLocaleString()} Rolls Now`}</span>
            </button>

            {simResult && (
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-slate-200 border-b border-slate-800 pb-1.5 flex justify-between">
                  <span>Simulation Results ({simResult.totalRolls.toLocaleString()} Rolls):</span>
                  <span className="text-cyan-400">RNG Test</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/20">
                    <div className="text-[10px] text-cyan-400 font-semibold">Secrets Pulled</div>
                    <div className="text-lg font-extrabold text-white">{simResult.secrets}</div>
                  </div>
                  <div className="p-2 rounded bg-purple-950/40 border border-purple-500/20">
                    <div className="text-[10px] text-purple-400 font-semibold">Mythics Pulled</div>
                    <div className="text-lg font-extrabold text-white">{simResult.mythics}</div>
                  </div>
                  <div className="p-2 rounded bg-amber-950/40 border border-amber-500/20">
                    <div className="text-[10px] text-amber-400 font-semibold">Legendaries</div>
                    <div className="text-lg font-extrabold text-white">{simResult.legendaries}</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-semibold">Epics</div>
                    <div className="text-lg font-extrabold text-white">{simResult.epics}</div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Strategic Recommendation Callout */}
      <div className="glass-card p-6 rounded-2xl border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400" />
            <span>Need Trait Rerolls to boost newly pulled units?</span>
          </div>
          <p className="text-xs text-slate-400">
            Check out the complete tier list and compare 15x Transcendent vs 8x Monarch traits.
          </p>
        </div>
        <Link
          href="/traits-tier-list/"
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-purple-500/30 hover:border-purple-500 text-purple-300 font-bold text-xs transition-all shrink-0 flex items-center gap-2"
        >
          <span>Traits Tier List</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
