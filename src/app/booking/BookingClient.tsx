"use client";

import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingClient() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "default",
        embedJsUrl: "https://cal.id/embed-link/embed.js",
      });

      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#007ee5" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Top Section */}
      <div className="max-w-5xl mx-auto w-full px-6 pt-28 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-semibold mt-8">
          Book a Strategy Call
        </h1>

        <p className="text-neutral-400 mt-4 max-w-2xl">
          Let’s discuss AI automation infrastructure, workflow systems, or
          operational optimization for your business.
        </p>
      </div>

      {/* Cal Embed */}
      <div className="grow px-6 pb-16">
        <div className="max-w-5xl mx-auto border border-neutral-800 rounded-xl p-4 min-h-175">
          <Cal
            namespace="default"
            calLink="faizan-khan/strategy"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
            calOrigin="https://cal.id"
            embedJsUrl="https://cal.id/embed-link/embed.js"
          />
        </div>
      </div>
    </div>
  );
}
