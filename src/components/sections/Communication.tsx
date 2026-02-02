"use client";

import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Globe, Mic, Radio, Command } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Utility: Sophisticated Audio Visualizer ---
const AudioWave = () => (
  <div className="flex items-center gap-1 h-8">
    {[1, 2, 3, 4, 5, 4, 3, 2].map((height, i) => (
      <motion.div
        key={i}
        animate={{ height: [8, height * 4, 8] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: i * 0.1,
          ease: "easeInOut",
        }}
        className="w-0.5 bg-amber-200/80 rounded-full"
      />
    ))}
  </div>
);

// --- Utility: Reusable Card Container ---
const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "group relative overflow-hidden bg-neutral-900/30 border border-white/5 p-8 transition-colors duration-500 hover:border-white/10 hover:bg-neutral-900/50",
      className,
    )}
  >
    {children}
  </div>
);

export function Communication() {
  return (
    <Section id="communication" className="bg-black py-24 md:py-32">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 space-y-16">
        {/* --- Header: Aligned with Hero Typography --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-neutral-800/50 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-100 tracking-tight">
            Signal & <span className="text-neutral-500 italic">Protocol</span>
          </h2>
          <div className="flex items-center gap-3 font-mono text-xs text-neutral-500 uppercase tracking-widest">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span>Human_Interface</span>
          </div>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Global Presence (Span 7) */}
          <Card className="md:col-span-7 flex flex-col justify-between min-h-70">
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-neutral-300">
                <Globe className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-neutral-200">
                Global Operations
              </h3>
              <p className="text-neutral-400 text-sm font-mono leading-relaxed max-w-sm">
                / EST / GMT / IST
                <br />
                Asynchronous synchronization across multiple time zones. Active
                engagement in international tech ecosystems.
              </p>
            </div>

            {/* Abstract Map Decoration */}
            <div className="absolute right-0 bottom-0 opacity-10">
              <Globe className="w-64 h-64 text-white -mb-12 -mr-12 stroke-[0.5]" />
            </div>
          </Card>

          {/* 2. Language/Voice (Span 5) */}
          <Card className="md:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-neutral-300">
                  <Mic className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <AudioWave />
              </div>
              <h3 className="text-2xl font-serif text-neutral-200">
                Native Fluency
              </h3>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-neutral-400 text-sm font-mono">
                English (C2) :: Professional
              </p>
              <div className="h-px w-full bg-neutral-800" />
              <p className="text-neutral-500 text-xs leading-relaxed">
                Precision in technical documentation and stakeholder
                communication.
              </p>
            </div>
          </Card>

          {/* 3. System Logs / Learning (Span 5) */}
          <Card className="md:col-span-5 relative group-hover:border-amber-500/20 transition-colors">
            <div className="absolute inset-0 bg-neutral-950/50" />
            <div className="relative z-10 font-mono text-xs space-y-3">
              <div className="flex items-center gap-2 text-neutral-500 border-b border-neutral-800 pb-2 mb-4">
                <Command className="w-3 h-3" />
                <span>KERNEL_UPDATE_LOG</span>
              </div>

              <div className="flex gap-3 text-neutral-400">
                <span className="text-neutral-600">09:41:22</span>
                <span>Fetching [Next.js_15]...</span>
              </div>
              <div className="flex gap-3 text-neutral-400">
                <span className="text-neutral-600">09:41:45</span>
                <span>Optimizing AI_Agents...</span>
              </div>
              <div className="flex gap-3 text-amber-200/90">
                <span className="text-amber-500/50">09:42:01</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  System_Knowledge_Expanded
                </span>
              </div>
            </div>
          </Card>

          {/* 4. Community Node (Span 7) */}
          <Card className="md:col-span-7 flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 rounded-full border border-white/5 bg-neutral-900/50 relative shrink-0">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
              <Radio className="w-6 h-6 text-neutral-300" strokeWidth={1.5} />
            </div>

            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-serif text-neutral-200">
                Network Node
              </h3>
              <p className="text-neutral-400 text-sm font-mono leading-relaxed">
                Contributing to open protocols and public discourse. Building
                transparency through shared knowledge and open-source
                contributions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
