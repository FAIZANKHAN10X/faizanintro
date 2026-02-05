"use client";

import { useReportWebVitals } from "next/web-vitals";

function classifyMetric(name: string, value: number) {
  switch (name) {
    case "LCP":
      if (value <= 2500) return "good";
      if (value <= 4000) return "needs_improvement";
      return "poor";

    case "CLS":
      if (value <= 0.1) return "good";
      if (value <= 0.25) return "needs_improvement";
      return "poor";

    case "INP":
      if (value <= 200) return "good";
      if (value <= 500) return "needs_improvement";
      return "poor";

    case "FCP":
      if (value <= 1800) return "good";
      if (value <= 3000) return "needs_improvement";
      return "poor";

    case "TTFB":
      if (value <= 800) return "good";
      if (value <= 1800) return "needs_improvement";
      return "poor";

    default:
      return "unknown";
  }
}

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (typeof window === "undefined") return;

    // Send only once per session per metric
    const key = `vital_sent_${metric.name}`;
    if (sessionStorage.getItem(key)) return;

    sessionStorage.setItem(key, "true");

    const rating = classifyMetric(metric.name, metric.value);

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "web_vital",
      metric_name: metric.name,
      metric_value: metric.name === "CLS" ? metric.value * 1000 : metric.value,
      metric_rating: rating,
      metric_id: metric.id,
    });
  });

  return null;
}
