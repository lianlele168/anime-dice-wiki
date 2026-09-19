'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Layers, Search, Star, Zap, Shield, Swords, 
  ArrowRight, Filter, ChevronRight, HelpCircle 
} from 'lucide-react';
import { UNITS_DATA } from '@/data/gameData';

export default function UnitsDatabaseClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnime, setSelectedAnime] = useState<string>('ALL');
  const [selectedRarity, setSelectedRarity] = useState<string>('ALL');

  const ANIME_LIST = ['ALL', 'Solo Leveling', 'One Piece', 'Jujutsu Kaisen', 'Dragon Ball', 'Bleach', 'Naruto', 'Demon Slayer', 'Hunter x Hunter'];
  const RARITY_LIST = ['ALL', 'Secret', 'Mythic', 'Legendary', 'Epic', 'Rare', 'Common'];

  const filteredUnits = useMemo(() => {
    return UNITS_DATA.filter((unit) => {
      const matchesSearch = 
        unit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.anime.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.skillName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesAnime = selectedAnime === 'ALL' || unit.anime === selectedAnime;
      const matchesRarity = selectedRarity === 'ALL' || unit.rarity === selectedRarity;

      return matchesSearch && matchesAnime && matchesRarity;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedAnime, selectedRarity]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-amber-300 font-semibold">Units Database</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>Complete Character Roster & Abilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Anime Dice Units & Characters Catalog
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Search all rollable anime characters in Anime Dice. Filter by franchise, evaluate rarity bands, and inspect abilities for Infinity Tower climbing.
          Per-unit stats (income / damage / health) are not publicly documented and the roster changes with each patch — always confirm in the in-game Index.
        </p>
      </div>

      {/* Characters Showcase Screenshot */}
      <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto my-6">
        <img
          src="/images/anime-dice-characters.webp"
          alt="Roblox Anime Dice Characters Catalog and Mythic Secret Units"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
          <div className="text-xs sm:text-sm text-slate-200 font-medium">
            <span className="text-purple-400 font-bold">Characters Catalog</span> — Secret & Mythic anime fighter scaling and synergy abilities
          </div>
          <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-[11px] rounded-lg border border-purple-500/30 font-mono">
            Roster: {UNITS_DATA.length} Units
          </span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="glass-panel p-6 rounded-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by character or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Anime Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedAnime}
              onChange={(e) => setSelectedAnime(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-400"
            >
              {ANIME_LIST.map((anime) => (
                <option key={anime} value={anime}>
                  {anime === 'ALL' ? 'All Anime Series' : anime}
                </option>
              ))}
            </select>
          </div>

          {/* Rarity Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-400"
            >
              {RARITY_LIST.map((rarity) => (
                <option key={rarity} value={rarity}>
                  {rarity === 'ALL' ? 'All Rarities' : `${rarity} Only`}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="md:col-span-2">
            <select
              value="name"
              onChange={() => {}}
              disabled
              className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-400"
            >
              <option value="name">Sort: Name (A-Z)</option>
            </select>
          </div>

        </div>

        <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-800">
          <span>Showing {filteredUnits.length} of {UNITS_DATA.length} units</span>
          <Link href="/calculator/" className="text-cyan-400 hover:text-cyan-300 font-semibold">
            Calculate odds for these units &rarr;
          </Link>
        </div>
      </div>

      {/* Units Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnits.map((unit) => (
          <div
            key={unit.id}
            className="glass-card p-6 border-slate-800 hover:border-cyan-500/40 relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Top Bar with Badges */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-cyan-400">{unit.anime}</span>
                <span className={`px-2 py-0.5 text-[10px] font-extrabold uppercase rounded ${
                  unit.rarity === 'Secret'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm shadow-cyan-500/50'
                    : unit.rarity === 'Mythic'
                    ? 'bg-purple-950 text-purple-300 border border-purple-500/40'
                    : unit.rarity === 'Legendary'
                    ? 'bg-amber-950 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-900 text-slate-300 border border-slate-700'
                }`}>
                  {unit.rarity}
                </span>
              </div>

              <h2 className="text-lg font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">
                {unit.name}
              </h2>

              {/* Stats Box */}
              <div className="mt-4 p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-center">
                <div className="text-[10px] text-slate-500">Income / Damage / Health</div>
                <div className="text-xs font-extrabold text-slate-400">Not documented</div>
                <div className="text-[10px] text-slate-500 mt-1">No public source publishes per-unit stats</div>
              </div>

              {/* Skill Details */}
              <div className="mt-4 space-y-1">
                <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{unit.skillName}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
                  {unit.skillDescription}
                </p>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500">Combat Power: <strong className="text-slate-200">{unit.dpsRating}</strong></span>
              <Link
                href="/calculator/"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-0.5 text-[11px]"
              >
                <span>Simulate Odds</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
