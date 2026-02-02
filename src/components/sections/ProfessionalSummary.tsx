"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

// --- Utility: Text Reveal ---
const Reveal = ({
  children,
  width = "fit-content",
}: {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}) => (
  <div style={{ width }} className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

// --- Utility: Divider Line ---
const Divider = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="w-full h-px bg-neutral-800 origin-left my-8"
  />
);

export function ProfessionalSummary() {
  const container = useRef(null);

  return (
    <section
      ref={container}
      id="professional-summary"
      className="relative bg-black py-24 md:py-32 px-6 md:px-12 w-full overflow-hidden"
    >
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24">
          <Reveal>
            <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-500">
              {"// 01. Profile"}
            </h2>
          </Reveal>
        </div>

        <Divider />

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Left Column: Big Statement (Hook) */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 sticky top-32">
            <Reveal width="100%">
              <h3 className="text-3xl md:text-5xl font-serif text-neutral-100 leading-[1.1] mb-6">
                Engineering{" "}
                <span className="text-neutral-500 italic">clarity</span> from
                chaos.
              </h3>
            </Reveal>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-px bg-amber-200/50" />
              <span className="font-mono text-xs text-amber-200 uppercase tracking-wider">
                Systems Architect
              </span>
            </div>
          </div>

          {/* Right Column: Detail & Metrics */}
          <div className="col-span-1 md:col-span-7 lg:col-span-8 space-y-12">
            {/* The Main Copy */}
            <div className="space-y-6">
              <Reveal>
                <p className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl">
                  Results-driven digital systems professional with a focus on
                  <span className="text-white font-medium">
                    {" "}
                    high-impact infrastructure
                  </span>
                  .
                </p>
              </Reveal>

              <Reveal>
                <p className="text-neutral-400 leading-relaxed max-w-2xl">
                  Specializing in the intersection of industrial coordination,
                  CRM architecture, and AI workflow automation. I build systems
                  that don&apos;t just function—they scale, adapt, and drive
                  measurable operational efficiency.
                </p>
              </Reveal>
            </div>

            {/* Metrics Grid (Bento Style) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              <Card label="Experience" value="7+" sub="Years Active" />
              <Card label="Focus" value="AI" sub="Workflow Automation" />
              <Card label="Domain" value="360°" sub="Systems Operations" />
            </div>

            {/* Tech Stack / Keywords */}
            <div className="pt-8">
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-4">
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Industrial Coordination",
                  "Billing Systems",
                  "CRM Architecture",
                  "Digital Marketing",
                  "Workflow Orchestration",
                ].map((tag, i) => (
                  <Tag key={i} text={tag} delay={i * 0.1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub Components ---

const Card = ({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) => (
  <div className="group border border-neutral-800 p-6 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors duration-500">
    <div className="flex flex-col h-full justify-between gap-4">
      <span className="font-mono text-xs text-neutral-500 uppercase">
        {label}
      </span>
      <div>
        <span className="block text-4xl md:text-5xl font-serif text-neutral-200 mb-1 group-hover:text-amber-100 transition-colors duration-300">
          {value}
        </span>
        <span className="text-sm text-neutral-400">{sub}</span>
      </div>
    </div>
  </div>
);

const Tag = ({ text, delay }: { text: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm hover:border-neutral-600 hover:text-neutral-200 transition-colors duration-300 cursor-default"
  >
    {text}
  </motion.span>
);
