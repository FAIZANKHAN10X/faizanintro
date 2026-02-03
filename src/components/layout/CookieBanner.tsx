// src/components/layout/CookieBanner.tsx
"use client";

import { useConsent } from "@/context/ConsentContext";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const { consent, setConsent, isCookieBannerOpen, closeCookieSettings } =
    useConsent();

  if (!isCookieBannerOpen) return null;

  const currentLabel =
    consent === "accepted"
      ? "Accepted"
      : consent === "declined"
        ? "Declined"
        : "Not set";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-6 inset-x-0 z-100 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto bg-neutral-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl max-w-md w-full flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-xl h-fit">
              <Cookie className="w-6 h-6 text-white" />
            </div>

            <div className="space-y-1 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-white">Cookie Preferences</h3>
                <button
                  type="button"
                  onClick={closeCookieSettings}
                  aria-label="Close cookie settings"
                  className="p-2 -mr-2 -mt-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                We use cookies to enhance your experience and analyze traffic.
                You can change this anytime.
              </p>

              <p className="text-[11px] font-mono text-neutral-500">
                Current: {currentLabel}
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setConsent("declined")}
              className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => setConsent("accepted")}
              className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
            >
              Accept
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
