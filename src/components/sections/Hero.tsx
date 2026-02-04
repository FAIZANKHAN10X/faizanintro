// src/components/sections/Hero.tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { TrackedLink } from "@/components/TrackedLink";

// --- Utility: Ultra-Performant Text Reveal ---
// Replaces expensive Blur with simple Clip-Path (GPU friendly)
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

  // Lightweight Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth out the scroll value to prevent jitter
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Map scroll to transform
  const backgroundY = useTransform(smoothY, [0, 1], ["0%", "15%"]);
  const textY = useTransform(smoothY, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-dvh overflow-hidden bg-black flex flex-col justify-end pb-12 md:pb-24"
    >
      {/* --- Optimized Background Layer --- */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/hero-bg.avif"
          alt="Luxury interior"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/30" />
      </motion.div>

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 mx-auto">
        <motion.div
          style={{ y: textY }}
          className="max-w-5xl space-y-6 will-change-transform"
        >
          {/* 1. Identity Block */}
          <div className="space-y-2">
            <RevealText delay={0.1}>
              <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-neutral-100 tracking-tighter leading-none">
                Faizan Khan
              </h1>
            </RevealText>

            <RevealText delay={0.2} className="py-2">
              <h2 className="text-xl md:text-4xl font-light tracking-wide flex flex-wrap items-center gap-x-3">
                <span className="text-neutral-500">Architecting</span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-300 italic font-serif">
                  Intelligent Systems
                </span>
              </h2>
            </RevealText>
          </div>

          {/* 2. Mission Statement */}
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

          {/* 3. High Performance Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <TrackedLink
              href="#communication"
              tracking={{
                name: "hero_cta_click",
                params: {
                  location: "hero",
                  cta: "Initiate Project",
                  target: "#communication",
                },
              }}
              className="px-8 py-3 bg-neutral-100 text-black font-mono text-xs md:text-sm uppercase tracking-wider font-bold hover:bg-white transition-colors"
            >
              Initiate Project
            </TrackedLink>

            <TrackedLink
              href="#digital-automation"
              className="px-8 py-3 border border-white/10 text-neutral-300 font-mono text-xs md:text-sm uppercase tracking-wider hover:bg-white/5 hover:text-white transition-colors"
            >
              System Logs
            </TrackedLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
