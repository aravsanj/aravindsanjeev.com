import type { Metadata } from "next";
import list from "./list";
import Item from "./item";
import { baseUrl } from "@/app/sitemap";

const title = "Free Online Tools by Aravind Sanjeev";
const description =
  "A collection of fast, privacy-first tools that run entirely in your browser. No uploads. No tracking. Just useful utilities for everyone.";
const url = `${baseUrl}/workbench`;
const ogImage = `${baseUrl}/og?title=${encodeURIComponent("Free Online Tools")}`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "free online tools",
    "developer utilities",
    "privacy tools",
    "image tools",
    "pdf tools",
    "tailwind tools",
    "color palette generator",
    "image to pdf converter",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "Aravind Sanjeev",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Free Online Tools by Aravind Sanjeev",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
    creator: "@aravsanj",
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: url,
  },
};

export default function Page() {
  return (
    <>
      <section className="max-w-xl px-4 py-12 sm:py-20 mx-auto">
        <h1 className="text-black text-3xl capitalize text-center font-semibold mb-16 sm:mb-24">
          Tools
        </h1>
        <div className="space-y-6">
          {list.map((item, index) => (
            <Item key={item.slug} item={item} index={index} />
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Free Online Tools by Aravind Sanjeev",
            description,
            url,
            numberOfItems: list.length,
            itemListElement: list.map((tool, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: tool.title,
              description: tool.description,
              url: `${baseUrl}${tool.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
