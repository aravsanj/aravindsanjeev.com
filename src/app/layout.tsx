import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { baseUrl } from "./sitemap";

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
      className={cx("scroll-smooth", GeistSans.variable, GeistMono.variable)}
    >
      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
      <body className="bg-[#101820] leading-relaxed text-slate-400 antialiased selection:bg-[#FEE715]/20 selection:text-[#FEE715]">
        {children}
      </body>
    </html>
  );
}
