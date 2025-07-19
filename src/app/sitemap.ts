import { getBlogPosts } from "@/app/(others)/blog/utils";

export const baseUrl = "https://aravindsanjeev.com";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    "",
    "/blog",
    "/workbench",
    "/workbench/image-color-pallete-extractor",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
