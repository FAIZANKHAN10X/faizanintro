import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a strategy call to discuss AI automation systems, digital architecture, and workflow optimization.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return <BookingClient />;
}
