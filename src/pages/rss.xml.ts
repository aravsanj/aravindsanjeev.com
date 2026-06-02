import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.isDraft)
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt).getTime() -
        new Date(a.data.publishedAt).getTime()
    );

  return rss({
    title: "Aravind Sanjeev",
    description:
      "Engineering blog posts on web development, React, JavaScript, and AI.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.summary,
      link: `/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
