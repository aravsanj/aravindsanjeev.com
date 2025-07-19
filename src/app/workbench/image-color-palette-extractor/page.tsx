import { baseUrl } from "@/app/sitemap";
import ColorPaletteFromImage from "./ColorPaletteFromImage";
import type { Metadata } from "next";

const title = "Image to Color Palette Generator";
const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;
const paletteUrl = `${baseUrl}/workbench/image-color-palette-extractor`;

export const metadata: Metadata = {
  title: title,
  description:
    "Upload or paste an image to instantly extract a beautiful color palette. Copy Tailwind config, CSS variables, and JSON formats.",
  keywords: [
    "color palette generator",
    "extract colors from image",
    "Tailwind palette generator",
    "image color extractor",
    "CSS color palette",
    "UI design colors",
    "generate theme from image",
    "get hex codes from image",
  ],
  openGraph: {
    title: title,
    description:
      "Turn any image into a copy-paste-ready color palette. Great for Tailwind, CSS, and design systems.",
    url: paletteUrl,
    siteName: "Aravind Sanjeev",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Extract color palette from image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image to Color Palette Generator",
    description:
      "Upload or paste an image to instantly extract a beautiful color palette. Works great with Tailwind and CSS.",
    images: [ogImage],
    creator: "@aravsanj",
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: paletteUrl,
  },
};

export default function Page() {
  return (
    <>
      <ColorPaletteFromImage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Image to Color Palette Generator",
            description:
              "Upload or paste an image to instantly extract a beautiful color palette. Copy Tailwind config, CSS variables, and JSON formats.",
            applicationCategory: "DesignApplication",
            operatingSystem: "All",
            url: `${baseUrl}/workbench/image-color-palette-extractor`,
            image: `${baseUrl}/og?title=${encodeURIComponent(
              "Image to Color Palette Generator",
            )}`,
            creator: {
              "@type": "Person",
              name: "Aravind Sanjeev",
              url: `${baseUrl}`,
            },
          }),
        }}
      />
    </>
  );
}
