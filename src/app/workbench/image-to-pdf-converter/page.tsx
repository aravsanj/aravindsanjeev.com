import { baseUrl } from "@/app/sitemap";
import ImageToPdfConverter from ".";
import type { Metadata } from "next";

const title = "Convert Images to PDF";
const description =
  "Upload multiple images and instantly convert them to a single PDF. Fast, private, and entirely in your browser.";
const url = `${baseUrl}/workbench/image-to-pdf-converter`;
const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "image to pdf converter",
    "convert png to pdf",
    "jpg to pdf",
    "merge images into pdf",
    "image pdf generator",
    "pdf from photos",
    "browser image to pdf tool",
    "online image converter",
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
        alt: "Convert Images to PDF",
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
      <ImageToPdfConverter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: title,
            description,
            applicationCategory: "UtilityApplication",
            operatingSystem: "All",
            url,
            image: ogImage,
            creator: {
              "@type": "Person",
              name: "Aravind Sanjeev",
              url: baseUrl,
            },
          }),
        }}
      />
    </>
  );
}
