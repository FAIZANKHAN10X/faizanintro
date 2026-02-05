"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-serif">500</h1>

        <p className="text-neutral-400 text-sm">
          Something went wrong on our end.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-white text-black font-mono text-xs uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-colors"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-8 py-3 border border-white/20 text-white font-mono text-xs uppercase tracking-widest rounded-full hover:border-white/40 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
