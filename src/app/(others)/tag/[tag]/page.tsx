import { BlogPostsByTag } from "@/components/posts-by-tag";
import { getBlogPosts } from "../../blog/utils";

export async function generateStaticParams() {
  const allTags = await getAllTags();

  return allTags.map((tag: string) => ({
    params: {
      tag: tag.toLowerCase(),
    },
  }));
}
export default async function Page(props) {
  const params = await props.params;
  return (
    <>
      <section className="max-w-xl  px-4 py-12 sm:py-20 mx-auto">
        <h1 className="text-black text-3xl capitalize text-center font-semibold mb-24">
          {decodeURIComponent(params.tag)
            .replace(/[-_]/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h1>
        <BlogPostsByTag tag={params.tag} />
      </section>
    </>
  );
}
async function getAllTags() {
  const allPosts = await getBlogPosts();
  const allTags = new Set();
  for (const post of allPosts) {
    for (const tag of JSON.parse(post.metadata.tags)) {
      allTags.add(tag);
    }
  }
  return Array.from(allTags);
}
