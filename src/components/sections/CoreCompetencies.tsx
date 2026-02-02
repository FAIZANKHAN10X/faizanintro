"use client";

import { useRef, useState, MouseEvent } from "react";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Workflow, Database, Receipt, Globe, Megaphone } from "lucide-react";

// --- Data ---
const competencies = [
  {
    id: "01",
    title: "AI Workflow Automation",
    description:
      "Building autonomous agents with n8n, Make, and Zapier. Orchestrating complex logic flows for enterprise efficiency.",
    icon: <Workflow className="w-6 h-6" />,
    className: "md:col-span-2 min-h-[300px]",
    highlight: true, // Special styling for the main skill
  },
  {
    id: "02",
    title: "CRM Architecture",
    description: "Designing structured lead management and data pipelines.",
    icon: <Database className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    id: "03",
    title: "Financial Ops",
    description: "Billing automation, invoicing logic, and audit control.",
    icon: <Receipt className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    id: "04",
    title: "CMS Development",
    description: "High-performance Next.js builds with headless architecture.",
    icon: <Globe className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    id: "05",
    title: "Meta Acquisition",
    description: "Algorithmic audience targeting & ad-spend scaling.",
    icon: <Megaphone className="w-6 h-6" />,
    className: "md:col-span-1",
  },
];

// --- Utility: Spotlight Card ---
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative border border-neutral-800 bg-neutral-900/50 overflow-hidden rounded-xl",
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content Container */}
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export function CoreCompetencies() {
  return (
    <Section id="core-competencies" className="bg-black py-24 md:py-32">
      <div className="w-full max-w-350 mx-auto px-6 md:px-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-neutral-800 pb-8">
          <div className="space-y-2">
            <h2 className="text-sm font-mono uppercase tracking-widest text-amber-200/70">
              {"// 02. Stack"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-neutral-100">
              Core Competencies
            </h3>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm md:text-right font-mono">
            Deployed across 50+ enterprise environments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competencies.map((item) => (
            <SpotlightCard key={item.id} className={item.className}>
              <div className="p-8 flex flex-col h-full justify-between gap-8 relative z-10">
                {/* Icon & ID Row */}
                <div className="flex justify-between items-start">
                  <div
                    className={cn(
                      "p-3 rounded-lg border backdrop-blur-md transition-colors duration-300",
                      item.highlight
                        ? "bg-amber-500/10 border-amber-500/20 text-amber-200"
                        : "bg-neutral-800/50 border-white/5 text-neutral-400 group-hover:text-neutral-200",
                    )}
                  >
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-neutral-600 group-hover:text-neutral-500 transition-colors">
                    [{item.id}]
                  </span>
                </div>

                {/* Text Content */}
                <div>
                  <h3
                    className={cn(
                      "text-xl font-medium mb-2 transition-colors",
                      item.highlight ? "text-white" : "text-neutral-200",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Tech Lines for Highlight Card */}
                {item.highlight && (
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent" />
                  </div>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
