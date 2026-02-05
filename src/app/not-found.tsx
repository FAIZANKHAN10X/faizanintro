"use client";

import Link from "next/link";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function NotFound() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toString().padStart(3, "0"),
  );

  useEffect(() => {
    const controls = animate(count, 404, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count]);

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-200 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      {/* Header */}
      <header className="px-6 py-6 md:px-12 md:py-8 flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-widest text-neutral-500"
        >
          ERR_PROT_404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-mono tracking-widest text-neutral-500"
        >
          SYSTEM_HALTED
        </motion.div>
      </header>

      {/* Main */}
      <main className="grow flex flex-col justify-center px-6 md:px-12 relative">
        {/* Expanding divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full h-px bg-neutral-800 origin-left mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          {/* Left side */}
          <div className="md:col-span-7 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] text-white"
            >
              Missing <br />
              <span className="font-serif italic text-neutral-400">
                Coordinates.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-neutral-500 text-lg md:text-xl font-light max-w-lg leading-relaxed"
            >
              The requested URL was not found on this server. That’s all we
              know.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest transition-colors hover:text-white text-neutral-400"
              >
                <span className="w-2 h-2 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Back to Home
              </Link>
            </motion.div>
          </div>

          {/* Right side counter */}
          <div className="md:col-span-5 flex flex-col items-start md:items-end justify-end">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="block text-[10rem] md:text-[14rem] leading-[0.8] font-bold tracking-tighter text-white tabular-nums mix-blend-exclusion"
            >
              {rounded}
            </motion.span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 md:px-12 md:py-8">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full h-px bg-neutral-800 origin-right mb-4"
        />

        <div className="flex justify-between items-end text-[10px] text-neutral-600 font-mono">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-50"
          >
            The resource you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            © {new Date().getFullYear()}
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
