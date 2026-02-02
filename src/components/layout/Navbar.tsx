"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Experience", href: "#professional-experience" },
  { name: "Stack", href: "#core-competencies" },
  { name: "Work", href: "#digital-automation" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 inset-x-0 z-100 flex justify-center pointer-events-none px-6">
      <motion.div
        layout
        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
        className={cn(
          "pointer-events-auto relative bg-neutral-950/70 border border-white/8 backdrop-blur-xl transition-all duration-500",
          "ring-1 ring-white/5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]",
          mobileMenuOpen
            ? "rounded-4xl w-full max-w-md flex-col p-4"
            : "rounded-full w-fit items-center flex px-2 py-2",
        )}
      >
        {/* --- Main Content --- */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-1 text-sm font-medium tracking-tighter text-white z-20 pl-4 pr-6"
          >
            <span className="text-neutral-400 group-hover:text-white transition-colors duration-300">
              Faizan
            </span>
            <span className="font-serif italic text-neutral-200">Khan.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/3 rounded-full p-1 border border-white/5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className={cn(
                  "relative px-4 py-2 text-[13px] font-medium transition-colors duration-500 z-10",
                  pathname === item.href
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-200",
                )}
              >
                {hoveredPath === item.href && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/8 rounded-full -z-10 backdrop-blur-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/booking"
            className="hidden md:flex items-center gap-2 ml-6 bg-white hover:bg-neutral-200 text-black text-[11px] font-bold uppercase tracking-[0.15em] px-6 py-2.5 rounded-full transition-all group"
          >
            Inquire
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={3}
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-neutral-400 hover:text-white transition-colors z-20"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* --- Mobile Menu --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="md:hidden w-full pt-6 pb-2"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-6 py-4 text-lg font-light text-neutral-300 hover:text-white hover:bg-white/3 rounded-2xl transition-all group"
                    >
                      {item.name}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 px-2"
                >
                  <Link
                    href="/booking"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-5 rounded-2xl shadow-xl active:scale-[0.98] transition-transform"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
