"use client";

import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import {
  Workflow,
  Cpu,
  Layers,
  BarChart3,
  Bot,
  LucideIcon,
} from "lucide-react";

// --- Types ---
interface ProjectData {
  title: string;
  description: string;
  icon: React.ReactNode;
  stack: string[];
  metric: string;
}

const automationProjects: ProjectData[] = [
  {
    title: "Autonomous CMS Core",
    description:
      "Architected a performance-first CMS ecosystem focused on Core Web Vitals and zero-latency rendering.",
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    stack: ["Next.js", "Vercel", "Sanity"],
    metric: "99/100 Perf",
  },
  {
    title: "Meta Ads Orchestration",
    description:
      "Programmatic ad-scaling system using structured audience targeting algorithms.",
    icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
    stack: ["Meta API", "Pixel", "Python"],
    metric: "3x ROAS",
  },
  {
    title: "CRM Logic Pipelines",
    description:
      "Designed multi-stage lead intake workflows with automated scoring and routing.",
    icon: <Workflow className="w-5 h-5 text-green-400" />,
    stack: ["HubSpot", "Zapier", "SQL"],
    metric: "Automated",
  },
  {
    title: "n8n Agent Swarm",
    description:
      "Deployed self-hosting n8n workflows for cross-platform synchronization.",
    icon: <Cpu className="w-5 h-5 text-amber-400" />,
    stack: ["n8n", "Docker", "Webhooks"],
    metric: "Self-Hosted",
  },
  {
    title: "AI Sales Summarizer",
    description:
      "Integrated LLMs to transcribe calls, extract action items, and auto-draft follow-ups.",
    icon: <Bot className="w-5 h-5 text-pink-400" />,
    stack: ["OpenAI", "Whisper", "Edge Fn"],
    metric: "Time Saved",
  },
];

export function DigitalAutomation() {
  return (
    <Section
      id="digital-automation"
      className="bg-neutral-950 py-24 md:py-32 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Background Grid (Blueprint Look) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Header */}
        <div className="mb-16 md:mb-24 space-y-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-100">
            System Architecture
          </h2>
          <p className="text-neutral-500 max-w-xl text-lg">
            Designing the invisible logic that powers scalable enterprises.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {automationProjects.map((project, index) => (
            <BlueprintCard key={index} data={project} index={index} />
          ))}

          {/* Connector Decoration (Visual only) */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none hidden lg:block opacity-20">
            <path
              d="M 300 100 Q 500 100 600 300"
              stroke="white"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>
    </Section>
  );
}

// --- Sub Component: Blueprint Card ---
function BlueprintCard({ data, index }: { data: ProjectData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors duration-300 flex flex-col justify-between h-full min-h-70"
    >
      {/* Node Input Handle (Visual) */}
      <div className="absolute -left-1.25 top-8 w-2.5 h-2.5 bg-neutral-800 border border-neutral-600 rounded-full group-hover:bg-amber-400 transition-colors" />

      {/* Top Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-neutral-800/80 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
            {data.icon}
          </div>
          <span className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded">
            {data.metric}
          </span>
        </div>

        <h3 className="text-xl font-medium text-neutral-200 group-hover:text-white transition-colors">
          {data.title}
        </h3>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Bottom Section: Stack */}
      <div className="pt-6 mt-6 border-t border-neutral-800/50">
        <div className="flex flex-wrap gap-2">
          {data.stack.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 bg-neutral-950 px-2 py-1 rounded border border-neutral-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Node Output Handle (Visual) */}
      <div className="absolute -right-1.25 bottom-8 w-2.5 h-2.5 bg-neutral-800 border border-neutral-600 rounded-full group-hover:bg-amber-400 transition-colors" />
    </motion.div>
  );
}
