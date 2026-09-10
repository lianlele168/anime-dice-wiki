'use client';

import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-cyan-950 to-slate-900 border border-cyan-500/40 text-cyan-200 px-5 py-3.5 rounded-xl shadow-2xl shadow-cyan-950/80 backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-200">
      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
      <span className="text-sm font-medium tracking-wide">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 text-cyan-400/60 hover:text-cyan-300 p-0.5 rounded transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
