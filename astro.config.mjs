// @ts-nocheck
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import icon from "astro-icon";

export default defineConfig({
  site: "https://aravindsanjeev.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        if (pathname.startsWith('/og/')) return false;
        if (pathname.startsWith('/blog/') && pathname !== '/blog/') return false;
        return true;
      }
    }),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon(),
  ],
  build: {
    inlineStylesheets: "always",
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { properties: { className: ["anchor"] } }]],
    shikiConfig: {
      theme: "dracula",
    },
  },
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true,
  } ,
});
