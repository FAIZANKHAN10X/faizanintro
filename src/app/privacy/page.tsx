import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 pt-28 pb-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p className="text-neutral-400">
          Add your privacy policy content here.
        </p>
      </div>
    </main>
  );
}
