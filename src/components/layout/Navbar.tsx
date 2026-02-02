"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Summary", href: "/#professional-summary" },
    { label: "Skills", href: "/#core-competencies" },
    { label: "Experience", href: "/#professional-experience" },
    { label: "Automation", href: "/#digital-automation" },
    { label: "Booking", href: "/booking" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Faizan
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm text-neutral-400">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative group">
              <span className="group-hover:text-white transition-colors">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-300"
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Panel */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-6 space-y-6 text-neutral-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
