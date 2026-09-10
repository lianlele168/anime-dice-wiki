'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Users, Sparkles, ExternalLink, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-cyan-300 font-semibold">About Anime Dice Wiki</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>E-E-A-T Compliant & Community Driven</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About Anime Dice Wiki
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          The mission, methodology, and editorial standards behind the definitive Roblox Anime Dice strategy portal.
        </p>
      </div>

      {/* Core Mission */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-cyan-400" />
          <span>Our Mission & Editorial Standards</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Anime Dice Wiki was created to solve a persistent frustration in the Roblox community: outdated, auto-generated code blogs and unverified hearsay regarding pull rates. We provide <strong>player-tested, mathematically modeled guides</strong>, real-time code verification, and responsive simulators to give gamers transparent control over their progression.
        </p>
      </div>

      {/* Testing Methodology */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span>Empirical Testing & Statistical Modeling</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          All stat multipliers—from the 15x Transcendent trait to the 250x Chrono Dice—are directly tested inside active game servers and benchmarked against millions of simulated RNG rolls. We ensure that our math adheres to standard binomial distribution formulas, providing accurate confidence thresholds for Secret and Mythic pulls.
        </p>
      </div>

      {/* Legal & Trademark Disclaimer */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-slate-200">Trademark & Fan Project Disclaimer</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Anime Dice Wiki is an independent fan-created publication. Roblox and the Roblox logo are registered trademarks of Roblox Corporation. Anime Dice is developed by More & More Games. This website is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by Roblox Corporation or More & More Games. All anime characters and franchise names referenced are intellectual property of their respective copyright holders.
        </p>
      </div>

      {/* Network Backlink */}
      <div className="glass-card p-6 rounded-2xl border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-sm font-bold text-white">Part of the Roblox Wiki Hub Network</div>
          <p className="text-xs text-slate-400">
            Discover dozens of high-performance strategy portals across the top Roblox games.
          </p>
        </div>
        <a
          href="https://robloxwikihub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs flex items-center gap-2 shrink-0 hover:from-cyan-400 hover:to-indigo-500 transition-all"
        >
          <span>Explore Network</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
