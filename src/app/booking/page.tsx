import Link from "next/link";

export default function BookingPage() {
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
          Let’s discuss digital systems, automation architecture, or operational
          optimization for your business.
        </p>
      </div>

      {/* Calendar Container */}
      <div className="grow px-6 pb-16">
        <div className="max-w-5xl mx-auto border border-neutral-800 rounded-xl p-4">
          <div className="h-150 flex items-center justify-center text-neutral-500">
            Calendar Embed Placeholder
          </div>

          {/* Later replace with:
          <iframe
            src="https://cal.com/YOUR-ID"
            className="w-full h-[600px]"
            loading="lazy"
          />
          */}
        </div>
      </div>
    </div>
  );
}
