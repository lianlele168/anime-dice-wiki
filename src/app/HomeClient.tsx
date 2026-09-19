'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Dice5, Calculator, Gift, Sparkles, Layers, ShieldCheck, 
  ChevronRight, ArrowRight, Copy, Check, Star, Zap, Trophy, HelpCircle 
} from 'lucide-react';
import { ACTIVE_CODES, TRAITS_DATA, GRADES_DATA, UNITS_DATA, DICE_DATA, FAQS_DATA } from '@/data/gameData';
import Toast from '@/components/Toast';
import AuthorCard from '@/components/AuthorCard';

export default function HomeClient() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    author: {
      '@type': 'Person',
      name: 'Jin "Lucky" Takahashi',
      jobTitle: 'RNG Mathematician & Mythic Dice Roller',
    },
    mainEntity: FAQS_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setToastMessage(`Copied "${code}" to clipboard!`);
    setToastVisible(true);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const secretUnits = UNITS_DATA.filter(u => u.rarity === 'Secret');
  const sTierTraits = TRAITS_DATA.filter(t => t.tier.startsWith('S'));

  return (
    <div className="space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Toast 
        message={toastMessage} 
        visible={toastVisible} 
        onClose={() => setToastVisible(false)} 
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden border-b border-cyan-500/10 bg-gradient-to-b from-[#0c142e]/60 via-[#070b19] to-[#070b19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-cyan-950/50">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Update 3 Verified &middot; 6 Working Codes &middot; Chrono Dice Meta (Unverified)</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Master the Odds in <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                Anime Dice Roblox
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              The premier interactive encyclopedia and gacha simulator for Anime Dice. Calculate exact roll odds, copy verified codes, optimize 15x Transcendent traits, and aim for the community-reported 15 Sextillion Chrono Dice.
            </p>

            {/* Author Card */}
            <div className="max-w-2xl mx-auto text-left">
              <AuthorCard
                authorName='Jin "Lucky" Takahashi'
                role="RNG Mathematician & Mythic Dice Roller"
                experience="Grade 10 Rebirth & 100M+ Rolls Simulated"
                patchVersion="Update 2 Meta Verified"
                editorialNote="All dice luck multipliers, trait roll drop percentages, and grade ascension thresholds are verified through empirical probability logging."
              />
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/calculator/"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Calculator className="w-4 h-4" />
                <span>Launch Luck Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/codes/"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm transition-all"
              >
                <Gift className="w-4 h-4 text-cyan-400" />
                <span>Claim Active Codes ({ACTIVE_CODES.length})</span>
              </Link>

              <Link
                href="/traits-tier-list/"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/50 text-slate-200 font-semibold text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Traits Tier List</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xl font-bold text-cyan-400">15x</div>
                <div className="text-[11px] text-slate-400">Transcendent Trait</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xl font-bold text-purple-400">25x</div>
                <div className="text-[11px] text-slate-400">Z+ Grade Multiplier</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xl font-bold text-amber-400">15 Sextillion</div>
                <div className="text-[11px] text-slate-400">Chrono Dice Cost (Unverified)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xl font-bold text-emerald-400">0.05%</div>
                <div className="text-[11px] text-slate-400">Secret Base Chance</div>
              </div>
            </div>

            {/* Hero Screenshot Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto mt-8">
              <img
                src="/images/anime-dice-hero.webp"
                alt="Roblox Anime Dice Tycoon Simulator and Chrono Dice Rolling Arena"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
                <div className="text-xs sm:text-sm text-slate-200 font-medium">
                  <span className="text-cyan-400 font-bold">Chrono Dice Arena</span> — community-reported 15 Sextillion roll multiplier & Transcendent trait rolling
                </div>
                <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-[11px] rounded-lg border border-cyan-500/30 font-mono">
                  Update 2 Live
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Active Codes Fast Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold text-white">Active Redeem Codes</h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Redeem in the in-game Shop menu to receive free Lucky Spins, Trait Rerolls, and Gems.
              </p>
            </div>
            <Link 
              href="/codes/" 
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0"
            >
              <span>View All Codes & Guide</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ACTIVE_CODES.slice(0, 3).map((item) => (
              <div 
                key={item.code} 
                className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 flex items-center justify-between hover:border-cyan-500/50 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-bold text-cyan-300">{item.code}</span>
                    <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded">
                      VERIFIED
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-1">{item.reward}</div>
                </div>
                <button
                  onClick={() => handleCopy(item.code)}
                  className="p-2.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-400 border border-cyan-500/30 transition-all"
                  title="Copy code"
                  aria-label={`Copy code ${item.code}`}
                >
                  {copiedCode === item.code ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Interactive Tools & Wiki Databases
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Engineered to eliminate gacha guesswork and maximize your base income velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Calculator */}
          <Link href="/calculator/" className="glass-card p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Simulator</span>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  Luck & Odds Simulator
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Interactive gacha engine. Adjust your dice tier, Rebirth level, and luck potions to calculate exact secret pull probabilities.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-cyan-400">
              <span>Run Simulation</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Traits Tier List */}
          <Link href="/traits-tier-list/" className="glass-card p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Meta Analysis</span>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                  Traits Tier & Compare
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Complete breakdown of all 13 Traits. Features an interactive side-by-side comparison tool to evaluate DPS and plot income deltas.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-purple-400">
              <span>Explore 13 Traits</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Units Database */}
          <Link href="/units-database/" className="glass-card p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Catalog</span>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  Full Units Roster
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Search anime characters across Solo Leveling, DBZ, One Piece, and JJK with filterable base damage, health, and skill mechanics.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-amber-400">
              <span>Browse All Units</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Dice Tech Tree */}
          <Link href="/dice-guide/" className="glass-card p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pink-950/80 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                <Dice5 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">Economy</span>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-pink-300 transition-colors">
                  Dice Tech Tree
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Cash prices, roll cooldowns, and luck multipliers for all 8 dice tiers, including the community-reported 15 Sextillion Chrono Dice (unverified).
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-pink-400">
              <span>View Dice Hierarchy</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* Secret Rarity Units Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Star className="w-4 h-4 fill-cyan-400" />
              <span>Pinnacle Gacha Tiers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Top Secret & Mythic Units Showcase
            </h2>
          </div>
          <Link 
            href="/units-database/" 
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>View Full 20+ Unit Database</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secretUnits.slice(0, 3).map((unit) => (
            <div key={unit.id} className="glass-card p-6 border-cyan-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-cyan-500 to-indigo-600 text-white text-[10px] font-extrabold uppercase rounded-bl-xl tracking-wider">
                {unit.rarity}
              </div>
              <div className="text-[11px] font-semibold text-cyan-400">{unit.anime}</div>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                {unit.name}
              </h3>
              <div className="mt-4 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400">Income / Damage / Health</div>
                <div className="text-xs font-bold text-slate-400">Not documented</div>
                <div className="text-[10px] text-slate-500 mt-1">Per-unit stats are not publicly documented</div>
              </div>
              <div className="mt-4 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                <span className="font-semibold text-slate-300">{unit.skillName}:</span> {unit.skillDescription}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* S-Tier Traits Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Reroll Meta Tier 1</span>
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">
                Highest Value Traits Overview
              </h2>
            </div>
            <Link 
              href="/traits-tier-list/" 
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              <span>View All 13 Traits</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sTierTraits.map((t) => (
              <div key={t.id} className="p-4 rounded-xl bg-slate-900/60 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-white">{t.name}</span>
                  <span className="px-2 py-0.5 text-xs font-extrabold bg-purple-950 text-purple-300 border border-purple-500/40 rounded">
                    Tier {t.tier}
                  </span>
                </div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Income Boost:</span>
                    <span className="font-bold text-emerald-400">{t.incomeMultiplier}x</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Damage Boost:</span>
                    <span className="font-bold text-cyan-400">{t.damageMultiplier}x</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Health Boost:</span>
                    <span className="font-bold text-purple-400">{t.healthMultiplier}x</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Roll Chance:</span>
                    <span className="font-bold text-amber-400">{t.rollChance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Anime Dice Strategy & Mechanics FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-800 rounded-xl bg-slate-900/60 overflow-hidden transition-colors hover:border-cyan-500/30"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-200 text-sm focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${openFaq === index ? 'rotate-90 text-cyan-400' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
