"use client";

import Link from "next/link";
import React from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

type TrackedLinkProps = Omit<React.ComponentProps<typeof Link>, "onClick"> & {
  tracking?: {
    name: AnalyticsEventName;
    params?: Record<string, unknown>;
  };
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function TrackedLink({
  tracking,
  onClick,
  href,
  ...props
}: TrackedLinkProps) {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    if (!tracking) return;

    trackEvent(tracking.name, {
      ...(tracking.params || {}),
      link_url: typeof href === "string" ? href : String(href),
    });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
