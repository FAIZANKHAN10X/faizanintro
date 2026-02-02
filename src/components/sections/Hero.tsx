import { Section } from "@/components/layout/Section";
import Link from "next/link";

export function Hero() {
  return (
    <Section id="hero">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Digital Systems.
          <br />
          Automation.
          <br />
          Operations.
        </h1>

        <p className="text-neutral-400 max-w-2xl text-lg">
          Designing scalable systems, automation workflows, and operational
          frameworks that improve clarity, efficiency, and execution.
        </p>

        <div className="flex gap-4">
          <Link
            href="#professional-summary"
            className="px-6 py-3 bg-white text-black rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            View Experience
          </Link>

          <Link
            href="/booking"
            className="px-6 py-3 border border-neutral-700 rounded-md text-sm hover:border-neutral-500 transition"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </Section>
  );
}
