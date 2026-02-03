// src/lib/analytics.ts
export type AnalyticsEventName = "booking_click" | "hero_cta_click";

/**
 * Minimal GA4 gtag typing (enough for event + config calls).
 */
type GtagCommand = "js" | "config" | "event" | "consent";
type GtagFn = (
  command: GtagCommand,
  target: string | Date,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

function ensureGtag(): GtagFn {
  if (typeof window === "undefined") {
    // Server-side safeguard; returned function is never used.
    return () => undefined;
  }

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    // Queue commands until GA script is loaded (and/or if it never loads).
    window.gtag = (command, target, params) => {
      window.dataLayer!.push([command, target, params]);
    };
  }

  return window.gtag;
}

export function trackEvent(
  name: AnalyticsEventName,
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  const gtag = ensureGtag();
  gtag("event", name, params);
}
