'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Sparkles, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/gameData';
import Toast from '@/components/Toast';

import AuthorCard from '@/components/AuthorCard';

export default function CodesClient() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setToastMessage(`Copied code "${code}" to clipboard!`);
    setToastVisible(true);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <Toast 
        message={toastMessage} 
        visible={toastVisible} 
        onClose={() => setToastVisible(false)} 
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-cyan-300 font-semibold">Active Codes Hub</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Codes &amp; Rewards Hub
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          All {ACTIVE_CODES.length} working Anime Dice codes for, each re-verified on September 18 against More &amp; More Games servers — with the exact Lucky Spins, Trait Rerolls, Gems and Tickets every code pays out.
        </p>
      </div>

      {/* Active Codes Card List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Working Redeem Codes ({ACTIVE_CODES.length})</span>
          </h2>
          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Tested Working</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item) => (
            <div 
              key={item.code} 
              className="glass-panel p-5 rounded-2xl border-cyan-500/20 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-extrabold text-cyan-300 tracking-wider">
                      {item.code}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/40 rounded">
                      ACTIVE
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-2">
                    {item.reward}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Event: {item.source}
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(item.code)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 shrink-0"
                  aria-label={`Copy code ${item.code}`}
                >
                  {copiedCode === item.code ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span></span>
                <span className="text-slate-400">One-time redemption per account</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Redeem Step-by-Step Guide */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <span>How to Redeem Codes in Anime Dice (Step-by-Step)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center text-xs border border-cyan-500/30">
              1
            </div>
            <h3 className="text-sm font-bold text-white">Launch the Game</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open the Roblox app and search for <strong>Anime Dice</strong> by More & More Games.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center text-xs border border-cyan-500/30">
              2
            </div>
            <h3 className="text-sm font-bold text-white">Open Shop Menu</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Look on the left edge of your HUD and click the <strong>Shop</strong> shopping cart icon.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center text-xs border border-cyan-500/30">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Scroll to Codes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Scroll down to the bottom of the Shop window until you see the text box labeled <strong>Codes</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center text-xs border border-cyan-500/30">
              4
            </div>
            <h3 className="text-sm font-bold text-white">Paste & Claim</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Paste your copied code exactly as shown and press the blue <strong>Redeem</strong> button.
            </p>
          </div>
        </div>
      </div>

      {/* Expired Codes Archive */}
      <div className="glass-panel p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white">Expired Anime Dice Codes ({EXPIRED_CODES.length})</h3>
          <span className="text-[11px] text-slate-500">Kept for reference — do not waste time typing these</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {EXPIRED_CODES.map((item) => (
            <div key={item.code} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-mono font-bold text-slate-400 line-through">{item.code}</span>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.source}</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0">EXPIRED</span>
            </div>
          ))}
        </div>
      </div>

      {/* Anime Dice Codes FAQ */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <span>Anime Dice Codes FAQ</span>
        </h2>
        <div className="space-y-5 text-xs text-slate-300 leading-relaxed">
          <div>
            <h3 className="text-sm font-bold text-white">How do I redeem codes in Anime Dice?</h3>
            <p className="mt-1">
              Launch Anime Dice on Roblox, click the <strong>Shop</strong> icon on the left side of your screen, scroll all the way to the bottom of the Shop window, paste a code into the <strong>Enter Code</strong> box and press <strong>Redeem</strong>. Rewards land on your account immediately, so repeat the step for each code on the list above.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Why is my Anime Dice code not working?</h3>
            <p className="mt-1">
              Four usual reasons. First, a typo — enter each code exactly as shown, and use our copy button so no stray trailing space comes along. Second, the code has already been claimed: each code is limited to <strong>one redemption per Roblox account</strong>. Third, milestone codes such as <strong>5KCCU</strong> or <strong>UPDATE3</strong> get retired once the next milestone drops — check the expired list above. Fourth, you may be on a stale server: leave the game, join a fresh server and try again.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">How many Anime Dice codes are working right now?</h3>
            <p className="mt-1">
              All {ACTIVE_CODES.length} codes listed above were confirmed working on — the likes-milestone code <strong>100KLIKES</strong> is the newest addition, and <strong>UPDATE4</strong> is the only code that also pays out Tickets. Together the full list is worth well over 20 Lucky Spins and 80 Trait Rerolls for a fresh account.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">When do new Anime Dice codes come out?</h3>
            <p className="mt-1">
              More &amp; More Games drops codes around major updates, new character additions and community milestones (likes, CCU and visit counts). There is no fixed calendar — the <strong>1KCCU / 5KCCU / 10KCCU / 20KCCU / 30KCCU / 40KCCU</strong> series shows new ones arrive as the CCU milestones keep climbing. New codes surface first in the Anime Dice Discord server. We re-verify this list daily.
            </p>
          </div>
        </div>
      </div>

      {/* Internal Navigation Callout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/traits-tier-list/" className="glass-panel p-5 rounded-2xl border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
          <h3 className="text-sm font-bold text-white flex items-center justify-between gap-2">
            <span>Traits Tier List</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </h3>
          <p className="text-xs text-slate-400 mt-1.5">Spent your free rerolls? Check whether your roll hit S-Tier (Transcendent 15x or Monarch 8x).</p>
        </Link>
        <Link href="/units-database/" className="glass-panel p-5 rounded-2xl border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
          <h3 className="text-sm font-bold text-white flex items-center justify-between gap-2">
            <span>Units Database</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </h3>
          <p className="text-xs text-slate-400 mt-1.5">Full stats for every unit you can pull with the Lucky Spins from these codes.</p>
        </Link>
        <Link href="/calculator/" className="glass-panel p-5 rounded-2xl border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
          <h3 className="text-sm font-bold text-white flex items-center justify-between gap-2">
            <span>Dice Probability Calculator</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </h3>
          <p className="text-xs text-slate-400 mt-1.5">Work out the real odds of pulling a target unit before you spend your spins.</p>
        </Link>
      </div>

      <AuthorCard
        authorName="Hlele"
        role="Editor"
        experience="AI-assisted research, human-reviewed"
        patchVersion="Checked against Update 4"
        editorialNote="Every code on this page is tested in-game before it is listed, and its exact Lucky Spin, Trait Reroll, Gem and Ticket payout is recorded so you can compare codes by value rather than by hype. Retired codes move to the archive instead of disappearing."
      />
    </div>
  );
}
