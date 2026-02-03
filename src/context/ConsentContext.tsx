// src/context/ConsentContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

export type ConsentStatus = "accepted" | "declined" | null;

interface ConsentContextType {
  consent: ConsentStatus;
  setConsent: (value: ConsentStatus) => void;

  // Controls whether the banner is visible (lets you re-open it later)
  isCookieBannerOpen: boolean;
  openCookieSettings: () => void;
  closeCookieSettings: () => void;

  // Optional helper (handy in dev / audits)
  resetConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const initialConsent: ConsentStatus =
    typeof window === "undefined"
      ? null
      : (localStorage.getItem("cookie-consent") as ConsentStatus) || null;

  const [consent, setConsentState] = useState<ConsentStatus>(initialConsent);
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState<boolean>(
    initialConsent === null,
  );

  const setConsent = (value: ConsentStatus) => {
    if (typeof window !== "undefined") {
      if (value) localStorage.setItem("cookie-consent", value);
      else localStorage.removeItem("cookie-consent");
    }

    setConsentState(value);
    setIsCookieBannerOpen(false);
  };

  const openCookieSettings = () => setIsCookieBannerOpen(true);
  const closeCookieSettings = () => setIsCookieBannerOpen(false);

  const resetConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookie-consent");
    }
    setConsentState(null);
    setIsCookieBannerOpen(true);
  };

  return (
    <ConsentContext.Provider
      value={{
        consent,
        setConsent,
        isCookieBannerOpen,
        openCookieSettings,
        closeCookieSettings,
        resetConsent,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context)
    throw new Error("useConsent must be used within ConsentProvider");
  return context;
}
