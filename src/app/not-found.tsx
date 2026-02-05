"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Fixed: Using 'const' instead of 'let' to satisfy ESLint prefer-const
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Divider Line expands first
      tl.fromTo(
        ".border-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "expo.inOut" },
      );

      // 2. The Counter (000 -> 404)
      const countObj = { val: 0 };
      tl.to(
        countObj,
        {
          val: 404,
          duration: 2,
          ease: "expo.out",
          onUpdate: () => {
            if (countRef.current) {
              countRef.current.innerText = Math.floor(countObj.val)
                .toString()
                .padStart(3, "0");
            }
          },
        },
        "-=0.5",
      );

      // 3. Staggered Text Reveal
      tl.fromTo(
        ".reveal",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        "-=1.5",
      );
    }, containerRef); // Scope selector to this component

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#080808] text-neutral-200 flex flex-col font-sans selection:bg-neutral-800 selection:text-white"
    >
      {/* --- Header --- */}
      <header className="px-6 py-6 md:px-12 md:py-8 flex justify-between items-start">
        <div className="reveal opacity-0 text-xs font-mono tracking-widest text-neutral-500">
          ERR_PROT_404
        </div>
        <div className="reveal opacity-0 text-xs font-mono tracking-widest text-neutral-500">
          SYSTEM_HALTED
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="grow flex flex-col justify-center px-6 md:px-12 relative">
        {/* The Giant Separator Line */}
        <div className="border-line w-full h-px bg-neutral-800 origin-left mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          {/* Left: The Message */}
          <div className="md:col-span-7 space-y-8">
            <h1 className="overflow-hidden">
              <span className="reveal block text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] text-white">
                Missing <br />
                <span className="font-serif italic text-neutral-400">
                  Coordinates.
                </span>
              </span>
            </h1>

            <div className="overflow-hidden">
              <p className="reveal block text-neutral-500 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                The requested URL was not found on this server. That’s all we
                know.
              </p>
            </div>

            <div className="reveal pt-4 opacity-0">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest transition-colors hover:text-white text-neutral-400"
              >
                <span className="w-2 h-2 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Back to Home
              </Link>
            </div>
          </div>

          {/* Right: The Big Number */}
          <div className="md:col-span-5 flex flex-col items-start md:items-end justify-end">
            <div className="relative overflow-hidden">
              {/* Decorative label next to number */}
              <span className="reveal absolute top-2 left-0 md:-left-8 -rotate-90 origin-bottom-right text-[10px] font-mono text-neutral-600 tracking-widest">
                STATUS_CODE
              </span>

              {/* The Counter */}
              <span
                ref={countRef}
                className="reveal block text-[10rem] md:text-[14rem] leading-[0.8] font-bold tracking-tighter text-white tabular-nums mix-blend-exclusion"
              >
                000
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="px-6 py-6 md:px-12 md:py-8">
        <div className="border-line w-full h-px bg-neutral-800 origin-right mb-4"></div>
        <div className="flex justify-between items-end">
          <div className="reveal opacity-0 text-[10px] text-neutral-600 font-mono max-w-50">
            The resource you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </div>
          <div className="reveal opacity-0 text-[10px] text-neutral-600 font-mono">
            © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}
