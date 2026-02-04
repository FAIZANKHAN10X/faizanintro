"use client";

import Script from "next/script";
import { useConsent } from "@/context/ConsentContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function AnalyticsLoader() {
  const { consent } = useConsent();

  if (consent !== "accepted") return null;
  if (!GA_ID) return null; // Prevent crash if env missing

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
