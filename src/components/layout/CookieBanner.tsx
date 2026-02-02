"use client";

import { useConsent } from "@/context/ConsentContext";

export function CookieBanner() {
  const { consent, setConsent } = useConsent();

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl bg-neutral-900 border border-neutral-800 rounded-xl p-6 z-50 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-sm text-neutral-300 leading-relaxed">
          This website uses cookies to improve your experience and analyze
          traffic.
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => setConsent("declined")}
            className="px-4 py-2 text-sm border border-neutral-700 rounded-md hover:border-neutral-500"
          >
            Decline
          </button>

          <button
            onClick={() => setConsent("accepted")}
            className="px-4 py-2 text-sm bg-white text-black rounded-md hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
