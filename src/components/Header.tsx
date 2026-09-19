'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dice5, Calculator, Gift, Sparkles, Layers, ShieldCheck, HelpCircle, Menu, X, Search, ChevronRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const NAV_LINKS = [
    { label: 'Calculator', href: '/calculator/', icon: Calculator, badge: 'Simulator' },
    { label: 'Codes', href: '/codes/', icon: Gift, badge: 'Updated' },
    { label: 'Traits Tier', href: '/traits-tier-list/', icon: Sparkles },
    { label: 'Units DB', href: '/units-database/', icon: Layers },
    { label: 'Dice Guide', href: '/dice-guide/', icon: Dice5 },
    { label: 'Grades', href: '/grades-guide/', icon: ShieldCheck },
    { label: 'Rebirth', href: '/rebirth-guide/', icon: ChevronRight },
    { label: 'Beginner', href: '/beginner-guide/', icon: HelpCircle },
  ];

  const searchableItems = [
    { title: 'Luck & Odds Calculator', url: '/calculator/', desc: 'Simulate secret pull rates & trait rerolls' },
    { title: 'Active 2026 Redeem Codes', url: '/codes/', desc: 'Claim free Lucky Spins, Gems & Trait Rerolls' },
    { title: 'Traits Tier List', url: '/traits-tier-list/', desc: 'Transcendent (15x), Monarch (8x), Shogun (5x)' },
    { title: 'Units Database', url: '/units-database/', desc: 'Full anime roster: Solo Leveling, DBZ, One Piece, JJK' },
    { title: 'Dice Upgrades Guide', url: '/dice-guide/', desc: 'Chrono Dice (15 Sextillion, unverified), Void, Cosmic & Divine' },
    { title: 'Grades Multipliers', url: '/grades-guide/', desc: 'Z+ (25x), Z (15x), S+ (10x) multipliers & roll rates' },
    { title: 'Rebirth Progression Guide', url: '/rebirth-guide/', desc: 'Thresholds, permanent luck & optimal timing' },
    { title: '0 to 1B Beginner Guide', url: '/beginner-guide/', desc: 'Tower strategies, auto-roll macros & plot tips' },
  ];

  const filteredItems = searchQuery.trim() === ''
    ? searchableItems
    : searchableItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-cyan-500/20 bg-[#070b19]/80 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
                <div className="w-full h-full bg-[#070b19] rounded-[10px] flex items-center justify-center">
                  <Dice5 className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                    Anime Dice Wiki
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 rounded">
                    Roblox
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  Interactive Database & Tools
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/40 rounded-lg transition-colors border border-transparent hover:border-cyan-500/20"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400/70" />
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="ml-0.5 px-1 py-0.2 text-[9px] font-bold rounded bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Quick Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-cyan-500/30 text-xs transition-all"
                title="Search database (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden md:inline">Quick Search...</span>
                <kbd className="hidden md:inline-block text-[10px] bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-slate-400">
                  Ctrl+K
                </kbd>
              </button>

              <Link
                href="/calculator/"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulate Odds</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-b border-cyan-500/20 bg-[#070b19]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-1 animate-in slide-in-from-top-2 duration-200">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-cyan-500/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/calculator/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20"
              >
                <Calculator className="w-4 h-4" />
                <span>Launch Luck Simulator</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/80 overflow-hidden">
            <div className="flex items-center px-4 border-b border-slate-800 bg-[#0c132c]">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search traits, units, codes, dice tiers, calculators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-3.5 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded"
              >
                ESC
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/50">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item.url}
                    href={item.url}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-cyan-950/50 group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">
                        {item.desc}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 shrink-0" />
                  </Link>
                ))
              ) : (
                <div className="p-8 text-center text-sm text-slate-500">
                  No matching resources found for "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
