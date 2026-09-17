'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Gift, Copy, Check, Sparkles, ShieldCheck, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { ACTIVE_CODES } from '@/data/gameData';
import Toast from '@/components/Toast';

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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Gift className="w-3.5 h-3.5 text-cyan-400" />
          <span>September 2026 Verified Active Codes</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Codes & Rewards Hub
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Grab the latest working Anime Dice redeem codes for free Lucky Spins, Trait Rerolls, and Gems. All codes tested daily against More & More Games official servers.
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
                <span>Verified: {item.verifiedDate}</span>
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

      {/* Code FAQs & Tips */}
      <div className="glass-panel p-6 rounded-2xl space-y-4">
        <h3 className="text-base font-bold text-white">Why is my Anime Dice code not working?</h3>
        <ul className="space-y-2 text-xs text-slate-400 leading-relaxed list-disc list-inside">
          <li><strong>Case Sensitivity:</strong> Codes are strictly case-sensitive. Use our 1-click copy button above to avoid typing errors.</li>
          <li><strong>Trailing Whitespace:</strong> If copying manually, ensure no trailing blank space is pasted into the redemption box.</li>
          <li><strong>Expired Status:</strong> Codes expire when new update milestones are reached. Bookmark this page for daily verified lists.</li>
          <li><strong>Single Use:</strong> Codes can only be redeemed once per Roblox account.</li>
        </ul>
      </div>

      {/* Internal Navigation Callout */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-card rounded-2xl border-cyan-500/20">
        <div>
          <h3 className="text-sm font-bold text-white">Used your free Trait Rerolls?</h3>
          <p className="text-xs text-slate-400">
            Check the Traits Tier list to see if your roll ranks S-Tier (Transcendent 15x or Monarch 8x).
          </p>
        </div>
        <Link
          href="/traits-tier-list/"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center gap-2 shrink-0 hover:from-purple-500 hover:to-indigo-500 transition-all"
        >
          <span>Compare Traits</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
