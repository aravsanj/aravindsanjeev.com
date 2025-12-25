import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export const GET = ({ params }: { params: { slug: string } }) => {
  const destination = `/${params.slug}`;
  return new Response(null, {
    status: 301,
    headers: {
      Location: destination,
    },
  });
};

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post: CollectionEntry<"blog">) => ({
    params: { slug: post.slug },
  }));
}
