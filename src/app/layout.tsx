import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { AnalyticsLoader } from "@/components/AnalyticsLoader";
import { ConsentProvider } from "@/context/ConsentContext";

export const metadata = {
  title: "Faizan | Digital Systems & Automation",
  description:
    "Digital systems, automation, operations, and AI workflow implementation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <ConsentProvider>
          <Navbar />
          <main className="scroll-smooth">{children}</main>
          <Footer />
          <CookieBanner />
          <AnalyticsLoader />
        </ConsentProvider>
      </body>
    </html>
  );
}
