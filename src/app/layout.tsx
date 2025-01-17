import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { baseUrl } from "./sitemap";
import { GoogleAnalytics } from "@next/third-parties/google";
import Providers from "../components/providers";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aravind Sanjeev",
    template: "%s | Aravind Sanjeev",
  },
  description:
    "This portfolio documents my journey as I learn, grow, and explore the ever-evolving world of software engineering.",
  openGraph: {
    title: "Aravind Sanjeev",
    description:
      "This portfolio documents my journey as I learn, grow, and explore the ever-evolving world of software engineering.",
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
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <body className="relative min-h-screen leading-relaxed text-slate-900 antialiased">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        {/* <Providers> */}
        {children}

        {/* </Providers> */}
      </body>
      <GoogleAnalytics gaId="G-BELR0CJR8V" />
    </html>
  );
}
