"use client";

import { createContext, useContext, useState } from "react";

type ConsentStatus = "accepted" | "declined" | null;

interface ConsentContextType {
  consent: ConsentStatus;
  setConsent: (value: ConsentStatus) => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentStatus>(() => {
    if (typeof window === "undefined") return null;
    return (localStorage.getItem("cookie-consent") as ConsentStatus) || null;
  });

  const setConsent = (value: ConsentStatus) => {
    if (value) {
      localStorage.setItem("cookie-consent", value);
    }
    setConsentState(value);
  };

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return context;
}
