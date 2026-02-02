"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

// --- Utility: Live Clock ---
const TimeDisplay = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono">{time} IST</span>;
};

// --- Utility: Magnetic Link ---
const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
  >
    <span className="relative overflow-hidden">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-amber-200">
        {label}
      </span>
    </span>
    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
  </Link>
);

export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-8 border-t border-neutral-900 overflow-hidden relative">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-350 mx-auto px-6 md:px-12 relative z-10">
        {/* 1. Main CTA (The "Big Type") */}
        <div className="mb-24 md:mb-32 group">
          <Link href="/booking" className="block relative overflow-hidden">
            <h2 className="text-[12vw] leading-[0.8] font-serif font-medium text-neutral-800 transition-colors duration-500 group-hover:text-neutral-700">
              Let&apos;s Build
            </h2>

            {/* Overlay Text (Reveals on Hover) */}
            <h2 className="absolute top-0 left-0 text-[12vw] leading-[0.8] font-serif font-medium text-amber-200/90 clip-path-inset-0 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:polygon(0_100%,100%_100%,100%_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
              Let&apos;s Build
            </h2>
          </Link>

          <div className="flex justify-between items-end mt-4 md:mt-8">
            <p className="hidden md:block text-neutral-500 max-w-sm font-mono text-sm">
              Initiating this protocol will result in optimized workflows and
              scalable infrastructure.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-black font-mono text-sm font-bold uppercase tracking-wider hover:scale-105 hover:bg-amber-200 transition-all duration-300"
            >
              Start Project
              <div className="w-2 h-2 bg-black rounded-full" />
            </Link>
          </div>
        </div>

        {/* 2. Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-neutral-900">
          {/* Column 1: Identity */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800">
              <span className="font-serif italic text-xl text-neutral-200">
                F.
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-50">
              Systems Architect & Automation Consultant.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <SocialLink
                  href="#professional-experience"
                  label="Experience"
                />
              </li>
              <li>
                <SocialLink href="#core-competencies" label="Competencies" />
              </li>
              <li>
                <SocialLink href="#digital-automation" label="Automation" />
              </li>
              <li>
                <SocialLink href="/booking" label="Booking" />
              </li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <SocialLink href="https://linkedin.com" label="LinkedIn" />
              </li>
              <li>
                <SocialLink href="https://twitter.com" label="Twitter / X" />
              </li>
              <li>
                <SocialLink href="https://github.com" label="GitHub" />
              </li>
              <li>
                <SocialLink href="mailto:hello@faizan.com" label="Email" />
              </li>
            </ul>
          </div>

          {/* Column 4: Status */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
              Status
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Systems Operational
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <div className="w-2 h-2 rounded-full border border-neutral-600" />
                <TimeDisplay />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-mono">
          <p>© {new Date().getFullYear()} Faizan Khan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-neutral-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
