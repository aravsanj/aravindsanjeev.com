import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(_context: APIContext) {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.isDraft)
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt).getTime() -
        new Date(a.data.publishedAt).getTime()
    );

  const lines: string[] = [
    "# Aravind Sanjeev",
    "",
    "> Software engineer writing about web development, React, JavaScript, and AI. Based online at aravindsanjeev.com.",
    "",
    "## Blog",
    "",
    ...posts.map(
      (post) =>
        `- [${post.data.title}](https://aravindsanjeev.com/${post.slug}/): ${post.data.summary}`
    ),
    "",
    "## Pages",
    "",
    "- [Blog](https://aravindsanjeev.com/blog/): All writing",
    "- [Projects](https://aravindsanjeev.com/projects/): Side projects and open source work",
    "- [Experience](https://aravindsanjeev.com/experience/): Work history",
    "- [Contact](https://aravindsanjeev.com/contact/): Get in touch",
    "",
    "## Optional",
    "",
    "- [RSS Feed](https://aravindsanjeev.com/rss.xml)",
    "- [Sitemap](https://aravindsanjeev.com/sitemap-index.xml)",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
