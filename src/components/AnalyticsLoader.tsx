// src/components/AnalyticsLoader.tsx
"use client";

import Script from "next/script";
import { useConsent } from "@/context/ConsentContext";

export function AnalyticsLoader() {
  const { consent } = useConsent();

  // This ensures tracking only happens if the user clicks "Accept" on your banner
  if (consent !== "accepted") return null;

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E5LFB909SR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E5LFB909SR', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
