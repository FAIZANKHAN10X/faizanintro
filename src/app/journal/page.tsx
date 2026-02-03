import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Updates and notes.",
  alternates: { canonical: "/journal" },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-28 pb-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-semibold">Journal</h1>
        <p className="text-neutral-400">Coming soon.</p>
      </div>
    </main>
  );
}
