"use client";

import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Globe, Mic, Terminal, Rss } from "lucide-react";

// --- Utility: Animated Bar for Voice ---
const VoiceBar = ({ delay }: { delay: number }) => (
  <motion.div
    animate={{ height: ["20%", "100%", "20%"] }}
    transition={{ duration: 1.5, repeat: Infinity, delay, ease: "easeInOut" }}
    className="w-2 bg-amber-400 rounded-full"
  />
);

export function Communication() {
  return (
    <Section id="communication" className="bg-black py-24 md:py-32">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-neutral-800 pb-6">
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-100">
            Signal & Protocol
          </h2>
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
            {"// 04. Soft Skills"}
          </span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Global Presence (Visual: Rotating Globe Placeholder) */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:col-span-2 min-h-[300px] flex flex-col justify-between">
            <div className="z-10 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-neutral-200">
                  Global Interface
                </h3>
              </div>
              <p className="text-neutral-400 max-w-sm leading-relaxed">
                Active participant in international business and technology
                communities. Regular engagement in English-based discussions and
                virtual conferences.
              </p>
            </div>

            {/* Background Effect: Abstract World Map */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none mix-blend-screen">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.5),transparent_60%)]" />
              <svg
                className="w-full h-full text-neutral-600"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Simplified Grid Lines */}
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          {/* Card 2: Voice/English (Visual: Audio Wave) */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                  <Mic className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-neutral-200">
                  Fluent English
                </h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Strong written and verbal communication protocols for
                cross-border operations.
              </p>
            </div>

            {/* Audio Visualization */}
            <div className="h-16 flex items-center justify-center gap-1.5 opacity-80 mt-6">
              {[0, 0.2, 0.4, 0.6, 0.8, 0.5, 0.3, 0.1].map((d, i) => (
                <VoiceBar key={i} delay={d} />
              ))}
            </div>
          </div>

          {/* Card 3: Continuous Learning (Visual: Terminal) */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800 p-6 font-mono text-xs md:col-span-1 border-l-4 border-l-green-500/50">
            <div className="flex items-center gap-2 mb-4 text-green-400">
              <Terminal className="w-4 h-4" />
              <span>bash ~ update-skills.sh</span>
            </div>

            <div className="space-y-2 text-neutral-400">
              <p>
                <span className="text-green-500 mr-2">$</span>
                initiating self_learning_module...
              </p>
              <p>
                <span className="text-green-500 mr-2">{">"}</span>
                analyzing trends: [AI, Automation]
              </p>
              <p>
                <span className="text-green-500 mr-2">{">"}</span>
                installing: <span className="text-neutral-200">Next.js_15</span>
              </p>
              <p className="animate-pulse">
                <span className="text-green-500 mr-2">{">"}</span>
                status: continuous_integration_active_
              </p>
            </div>
          </div>

          {/* Card 4: Community (Visual: Signal) */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:col-span-2 flex items-center gap-6">
            <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400 shrink-0">
              <Rss className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-200 mb-2">
                Community Node
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Active contributor to open-source discussions. Building in
                public and sharing insights on emerging tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
