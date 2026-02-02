"use client";

import { useRef } from "react";
import { Section } from "@/components/layout/Section";
import { motion, useScroll } from "framer-motion";

// --- Types ---
interface ExperienceData {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

const experiences: ExperienceData[] = [
  {
    role: "Operational Lead",
    company: "Enterprise Systems",
    period: "2023 - Present",
    description:
      "Managed end-to-end billing operations including invoicing, vendor coordination, payment tracking, and documentation control.",
    tech: ["SAP", "Jira", "Excel"],
  },
  {
    role: "Site Coordinator",
    company: "Industrial Infra",
    period: "2021 - 2023",
    description:
      "Worked on-site for distillery plant construction projects, supporting execution, coordination, and critical reporting.",
    tech: ["AutoCAD", "Primavera", "Safety Ops"],
  },
  {
    role: "Strategic Consultant",
    company: "Advisory Board",
    period: "2019 - 2021",
    description:
      "Participated in strategic meetings with enterprise leadership across large industrial organizations to streamline workflows.",
    tech: ["Tableau", "PowerBI", "Visio"],
  },
  {
    role: "Project Engineer",
    company: "Tech Solutions",
    period: "2018 - 2019",
    description:
      "Coordinated engineers, contractors, and internal teams to maintain project timelines and reporting accuracy.",
    tech: ["MS Project", "Python", "SQL"],
  },
];

export function ProfessionalExperience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <Section
      id="professional-experience"
      className="bg-black py-24 md:py-32 overflow-hidden"
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto px-6 md:px-12"
      >
        {/* Header */}
        <div className="mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-neutral-100"
          >
            Track Record
          </motion.h2>
          <div className="w-24 h-px bg-amber-500/50" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-12 space-y-12">
          {/* Glowing Progress Line (Absolute) */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute -left-px top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-200 via-amber-500 to-transparent origin-top"
          />

          {experiences.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// --- Sub Component: Timeline Item ---
function TimelineItem({
  data,
  index,
}: {
  data: ExperienceData;
  index: number;
}) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      {/* Node (Dot) */}
      <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-amber-400 group-hover:border-amber-200 transition-colors duration-500 z-10 shadow-[0_0_10px_rgba(251,191,36,0.2)]" />

      {/* Connector Line (Horizontal) */}
      <div className="absolute left-0 top-3 w-6 md:w-8 h-px bg-neutral-800 group-hover:bg-amber-500/50 transition-colors duration-500" />

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="relative bg-neutral-900/40 border border-white/5 p-6 md:p-8 rounded-xl hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-300"
      >
        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <span className="font-mono text-xs text-amber-500/80 mb-1 block">
              {`// 0${index + 1}`}
            </span>
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-100">
              {data.role}
            </h3>
            <span className="text-sm text-neutral-400 font-mono">
              @ {data.company}
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full w-fit">
            {data.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed mb-6 max-w-2xl">
          {data.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {data.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded hover:text-neutral-300 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
