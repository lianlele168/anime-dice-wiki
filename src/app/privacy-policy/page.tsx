'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-cyan-300 font-semibold">Privacy Policy</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Lock className="w-3.5 h-3.5 text-cyan-400" />
          <span>Privacy & Cookie Disclosures</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy & Terms
        </h1>
        <p className="text-xs text-slate-400">
          Last updated: September 2026 &middot; Compliant with Google AdSense & GDPR Standards
        </p>
      </div>

      <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>1. Information We Collect</span>
          </h2>
          <p>
            Anime Dice Wiki does not require registration, personal accounts, or passwords. We do not collect personally identifiable information (PII) such as your real name, physical address, or phone number. Standard web server log files automatically record anonymous technical information including your IP address, browser type, referring/exit pages, operating system, and date/time stamps.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400" />
            <span>2. Cookies & Web Beacons</span>
          </h2>
          <p>
            We use standard session cookies to store your client-side preferences (such as your active calculator parameters and notification dismissals). You can easily instruct your browser to refuse all cookies or to indicate when a cookie is being sent via your browser settings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>3. Google AdSense & DoubleClick Dart Cookie</span>
          </h2>
          <p>
            Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based on their visit to our website and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>4. Children&apos;s Privacy (COPPA Compliance)</span>
          </h2>
          <p>
            Protecting the privacy of young children is especially important. Anime Dice Wiki is a general gaming information website and does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child provided this kind of information on our website, please contact us immediately.
          </p>
        </section>

      </div>

    </div>
  );
}
