'use client';

import React from 'react';
import Link from 'next/link';
import { Dice5, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#04070f] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-[#070b19] rounded-[6px] flex items-center justify-center">
                  <Dice5 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-sm text-slate-200 tracking-tight">
                Anime Dice Wiki
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500">
              Community-driven strategy guide, gacha luck simulator, and live database for More & More Games' Anime Dice on Roblox.
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-cyan-400/80">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Independent Fan Project &middot; E-E-A-T Verified</span>
            </div>
          </div>

          {/* Col 2: Core Tools */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
              Calculators & Tools
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link href="/calculator/" className="hover:text-cyan-400 transition-colors">Luck & Odds Simulator</Link></li>
              <li><Link href="/codes/" className="hover:text-cyan-400 transition-colors">Active Redeem Codes Hub</Link></li>
              <li><Link href="/traits-tier-list/" className="hover:text-cyan-400 transition-colors">Dual Trait Compare Tool</Link></li>
              <li><Link href="/units-database/" className="hover:text-cyan-400 transition-colors">Units & Characters Catalog</Link></li>
            </ul>
          </div>

          {/* Col 3: Strategy Guides */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
              Progression Guides
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link href="/dice-guide/" className="hover:text-cyan-400 transition-colors">Dice Tech Tree (Chrono Dice)</Link></li>
              <li><Link href="/grades-guide/" className="hover:text-cyan-400 transition-colors">Grades Multipliers (Z+ to D)</Link></li>
              <li><Link href="/rebirth-guide/" className="hover:text-cyan-400 transition-colors">Rebirth Milestones & Perks</Link></li>
              <li><Link href="/beginner-guide/" className="hover:text-cyan-400 transition-colors">0 to 1B Beginner Walkthrough</Link></li>
            </ul>
          </div>

          {/* Col 4: Network & Compliance */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
              Network & Policy
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a 
                  href="https://robloxwikihub.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Roblox Wiki Hub Network</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><Link href="/about/" className="hover:text-cyan-400 transition-colors">About & Research Methodology</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-cyan-400 transition-colors">Privacy Policy & Terms</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; 2026 Anime Dice Wiki. Roblox is a registered trademark of Roblox Corporation. We are not affiliated with or endorsed by Roblox or More & More Games.
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>for Roblox gamers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
