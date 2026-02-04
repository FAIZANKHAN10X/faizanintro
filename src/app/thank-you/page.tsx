import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your strategy call has been successfully scheduled.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold">
          You are Confirmed.
        </h1>

        <p className="text-neutral-400">
          Your strategy call has been scheduled successfully. You’ll receive a
          confirmation email shortly with meeting details.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-8 py-3 bg-white text-black font-mono text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
