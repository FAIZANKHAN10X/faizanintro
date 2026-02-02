"use client";

import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Workflow, Cpu, Layers, BarChart3, Bot } from "lucide-react";

// --- Types ---
interface ProjectData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stack: string[];
}

const automationProjects: ProjectData[] = [
  {
    id: "SYS_01",
    title: "Autonomous CMS Core",
    description:
      "Zero-latency rendering ecosystem optimized for Core Web Vitals.",
    icon: <Layers className="w-5 h-5" />,
    stack: ["Next.js", "Vercel", "Sanity"],
  },
  {
    id: "SYS_02",
    title: "Meta Ads Logic",
    description:
      "Programmatic scaling algorithms with automated audience segmentation.",
    icon: <BarChart3 className="w-5 h-5" />,
    stack: ["Meta API", "Python", "Pixel"],
  },
  {
    id: "SYS_03",
    title: "CRM Pipelines",
    description: "Multi-stage lead intake workflows with automated scoring.",
    icon: <Workflow className="w-5 h-5" />,
    stack: ["HubSpot", "Zapier", "SQL"],
  },
  {
    id: "SYS_04",
    title: "Agent Swarm",
    description:
      "Self-hosted n8n worker nodes for cross-platform synchronization.",
    icon: <Cpu className="w-5 h-5" />,
    stack: ["n8n", "Docker", "Webhooks"],
  },
  {
    id: "SYS_05",
    title: "Sales Intelligence",
    description: "LLM-based call transcription and action-item extraction.",
    icon: <Bot className="w-5 h-5" />,
    stack: ["OpenAI", "Whisper", "Edge"],
  },
];

export function DigitalAutomation() {
  return (
    <Section
      id="digital-automation"
      className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* --- Header: Aligned with 'Luxury Architect' Theme --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20 md:mb-24 border-b border-neutral-800/50 pb-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-100 tracking-tight">
              System{" "}
              <span className="italic text-neutral-500">Architecture</span>
            </h2>
            <p className="text-neutral-400 text-sm font-mono leading-relaxed max-w-lg">
              Designing the invisible logic that powers scalable enterprises.
              Focusing on modularity, uptime, and automated execution.
            </p>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-3 font-mono text-xs text-neutral-500 uppercase tracking-widest">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </div>
            <span>Workflow_Active</span>
          </div>
        </div>

        {/* --- Grid: Technical Nodes --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {automationProjects.map((project, index) => (
            <BlueprintCard key={index} data={project} index={index} />
          ))}
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
      className="group relative bg-neutral-900/20 border border-white/5 hover:border-amber-500/30 transition-all duration-500 flex flex-col justify-between h-full min-h-70"
    >
      {/* Node Input Handle (Visual - represents data flowing IN) */}
      <div className="absolute -left-1.25 top-12 w-2.25 h-2.25 bg-black border border-neutral-700 rounded-full group-hover:bg-amber-400 group-hover:border-amber-400 transition-colors z-20" />

      <div className="p-8 space-y-6">
        {/* Top: Icon + System ID */}
        <div className="flex justify-between items-start">
          <div className="p-3 bg-white/5 rounded-full text-amber-200/80 group-hover:text-amber-200 group-hover:bg-amber-500/10 transition-colors">
            {data.icon}
          </div>
          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400 transition-colors">
            {data.id}
          </span>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-serif text-neutral-200 group-hover:text-white transition-colors mb-3">
            {data.title}
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed font-mono">
            {data.description}
          </p>
        </div>
      </div>

      {/* Bottom: Tech Stack */}
      <div className="px-8 pb-8 pt-0">
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-white/5 pt-4">
          {data.stack.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-wider text-neutral-600 group-hover:text-neutral-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Node Output Handle (Visual - represents data flowing OUT) */}
      <div className="absolute -right-1.25 bottom-12 w-2.25 h-2.25 bg-black border border-neutral-700 rounded-full group-hover:bg-amber-400 group-hover:border-amber-400 transition-colors z-20" />
    </motion.div>
  );
}
