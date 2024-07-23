import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import Side from "./components/side";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aravind Sanjeev",
    template: "%s | Aravind Sanjeev",
  },
  description: "My personal blog.",
  openGraph: {
    title: "Aravind Sanjeev",
    description: "My personal blog.",
    url: baseUrl,
    siteName: "Aravind Sanjeev",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-slate-400 bg-slate-900",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="mx-auto min-h-screen max-w-[1280px] px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Side />
            <main className="pt-24 lg:w-1/2 lg:py-24 min-h-screen">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
