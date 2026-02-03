"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, Command } from "lucide-react";

// --- Utility: Live Clock (Optimized) ---
const TimeDisplay = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono tabular-nums tracking-tighter">{time} IST</span>
  );
};

// --- Utility: Social Link ---
const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group flex items-center justify-between py-2 border-b border-neutral-800/50 hover:border-neutral-100 transition-colors duration-500"
  >
    <span className="text-neutral-500 group-hover:text-neutral-100 transition-colors duration-500 font-light tracking-tight">
      {label}
    </span>
    <div className="overflow-hidden w-4 h-4">
      <ArrowUpRight className="w-4 h-4 text-neutral-500 transition-transform duration-500 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-neutral-100" />
    </div>
  </Link>
);

export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 overflow-hidden relative border-t border-neutral-900">
      {/* Refined Background Grid */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mask-[radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#444_1px,transparent_1px),linear-gradient(to_bottom,#444_1px,transparent_1px)] bg-size-[64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 1. Main CTA */}
        <div className="mb-32">
          <Link href="/booking" className="group relative inline-block w-full">
            <div className="flex flex-col">
              <span className="text-xs font-mono text-neutral-500 mb-4 tracking-[0.2em] uppercase">
                Available for Q3-Q4 2026
              </span>
              <h2 className="text-[14vw] leading-[0.75] font-serif font-light text-neutral-800 tracking-tighter transition-colors duration-700 group-hover:text-neutral-700">
                Let&apos;s Build
              </h2>
            </div>

            {/* Premium Hover Reveal */}
            <div className="absolute top-0 left-0 flex flex-col pointer-events-none">
              <span className="text-xs font-mono text-transparent mb-4 tracking-[0.2em] uppercase whitespace-nowrap">
                Available for Q3-Q4 2026
              </span>
              <h2 className="text-[14vw] leading-[0.75] font-serif font-light text-neutral-100 tracking-tighter [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-all duration-[0.8s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Let&apos;s Build
              </h2>
            </div>
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8">
            <p className="text-neutral-500 max-w-xs font-light leading-relaxed">
              Merging technical architecture with human-centric design.
              Establishing protocols for the next generation of digital
              infrastructure.
            </p>
            <Link
              href="/booking"
              className="group relative px-12 py-5 bg-white overflow-hidden rounded-full transition-transform active:scale-95"
            >
              <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-black font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                Initialize Project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* 2. Navigation Grid */}
        <div className="grid grid-cols-12 gap-y-16 md:gap-y-0 md:gap-x-12 pb-20 border-b border-neutral-900">
          {/* Identity */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 group hover:border-neutral-600 transition-colors">
                <Command
                  className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-serif italic text-2xl text-neutral-200">
                Faizan Khan.
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-60">
              Independent Systems Architect specializing in high-performance
              automation and digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-6 md:col-span-3 space-y-8">
            <h4 className="font-mono text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
              Sitemap
            </h4>
            <div className="flex flex-col gap-1">
              <SocialLink href="#professional-experience" label="Experience" />
              <SocialLink href="#core-competencies" label="Capabilities" />
              <SocialLink href="#digital-automation" label="Digital Lab" />
              <SocialLink href="/journal" label="Journal" />
            </div>
          </div>

          {/* Socials */}
          <div className="col-span-6 md:col-span-3 space-y-8">
            <h4 className="font-mono text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
              Network
            </h4>
            <div className="flex flex-col gap-1">
              <SocialLink href="#" label="LinkedIn" />
              <SocialLink href="#" label="GitHub" />
              <SocialLink href="#" label="Layers" />
              <SocialLink href="#" label="Email" />
            </div>
          </div>

          {/* System Status */}
          <div className="col-span-12 md:col-span-2 space-y-8">
            <h4 className="font-mono text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
              System
            </h4>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-neutral-600 uppercase">
                  Status
                </span>
                <div className="flex items-center gap-2 text-xs text-emerald-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Operational
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-neutral-600 uppercase">
                  Local Time
                </span>
                <div className="text-xs text-neutral-400">
                  <TimeDisplay />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pt-10 flex flex-col md:row justify-between items-center gap-6 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Faizan Khan — All rights reserved</p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-neutral-100 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-neutral-100 transition-colors"
            >
              Terms
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-neutral-100 transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
