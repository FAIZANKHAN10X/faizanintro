"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react if missing

const navItems = [
  { name: "Experience", href: "#professional-experience" },
  { name: "Stack", href: "#core-competencies" }, // Shortened for mobile fit
  { name: "Work", href: "#digital-automation" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for compact mode
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.div
        layout
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        className={cn(
          "pointer-events-auto relative bg-neutral-900/80 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden",
          mobileMenuOpen
            ? "rounded-4xl w-full max-w-sm flex-col"
            : "rounded-full w-fit items-center flex",
          scrolled && !mobileMenuOpen ? "py-2 px-3" : "py-3 px-5", // Compact mode on scroll
        )}
      >
        {/* --- Top Bar (Logo + Actions) --- */}
        <div className="flex items-center justify-between w-full gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tighter text-white z-20 hover:text-neutral-300 transition-colors pl-2"
          >
            Faizan<span className="text-amber-200">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 z-10",
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-neutral-200",
                  )}
                >
                  {hoveredPath === item.href && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/booking"
            className={cn(
              "hidden md:inline-flex items-center justify-center bg-white text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all active:scale-95",
              scrolled && "py-2",
            )}
          >
            Book
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors z-20"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* --- Mobile Menu (Expandable) --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden w-full pt-4 pb-2 px-2"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-neutral-300 hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <Link
                    href="/booking"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center bg-white text-black text-sm font-bold uppercase tracking-wider py-3 rounded-xl"
                  >
                    Book Call
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
