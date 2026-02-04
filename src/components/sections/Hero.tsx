"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { TrackedLink } from "@/components/TrackedLink";

// --- Ultra-Performant Text Reveal ---
const RevealText = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div className={`overflow-hidden ${className || ""}`}>
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  </div>
);

export function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const backgroundY = useTransform(smoothY, [0, 1], ["0%", "12%"]);
  const textY = useTransform(smoothY, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-dvh overflow-hidden bg-black flex flex-col justify-end pb-20 md:pb-32"
    >
      {/* Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/hero-bg.avif"
          alt="AI automation infrastructure and intelligent systems architecture"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover scale-105"
        />

        {/* Depth Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/60 to-black/40" />

        {/* Subtle Bronze Wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_45%,rgba(176,141,87,0.16),transparent_65%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12">
        <motion.div
          style={{ y: textY }}
          className="max-w-3xl space-y-10 will-change-transform ml-0 md:ml-10 lg:ml-16"
        >
          {/* Identity */}
          <div className="space-y-4">
            <RevealText delay={0.1}>
              <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-neutral-100 tracking-tighter leading-[1.05]">
                Faizan Khan
              </h1>
            </RevealText>

            <RevealText delay={0.2} className="py-3">
              <h2 className="text-xl md:text-4xl font-light tracking-wide flex flex-wrap items-center gap-x-3">
                <span className="text-neutral-500">Architecting</span>
                <span className="italic font-serif bg-clip-text text-transparent bg-linear-to-r from-[#7a5c2e] via-[#b08d57] to-[#4e3a1c]">
                  Intelligent Systems
                </span>
              </h2>
            </RevealText>
          </div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-xl"
          >
            <div className="flex gap-4 items-start pl-1">
              <div className="w-px h-12 bg-neutral-700 mt-1 hidden md:block" />
              <p className="text-sm md:text-base font-mono text-neutral-400 leading-relaxed">
                AI automation infrastructure & enterprise workflow
                orchestration. Designed for clarity, control, and scalable
                execution.
              </p>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6"
          >
            {/* Primary CTA - Pill */}
            <TrackedLink
              href="/booking"
              tracking={{
                name: "hero_cta_click",
                params: {
                  location: "hero",
                  cta: "Book Strategy Session",
                },
              }}
              className="px-10 py-4 rounded-full bg-linear-to-r from-[#6e5326] to-[#b08d57] text-black font-mono text-xs md:text-sm uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Strategy Session
            </TrackedLink>

            {/* Secondary Link */}
            <TrackedLink
              href="/journal"
              className="flex items-center gap-3 text-sm font-light text-neutral-400 hover:text-white transition-colors group"
            >
              <span className="w-6 h-px bg-neutral-500 group-hover:bg-white transition-colors" />
              Explore Journal
              <span className="translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </TrackedLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
