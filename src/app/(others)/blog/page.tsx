import Topbar from "@/components/top-nav";
import { BlogPosts } from "src/components/posts";

export const metadata = {
  title: "Blog",
  description:
    "My journey through the ever-evolving tech landscape. I share my coding projects, learning experiences, and reflections on the software engineering world.",
};

export default function Page() {
  return (
    <>
      <section className="max-w-xl  px-4 py-12 sm:py-20 mx-auto">
        <h1 className="text-black text-3xl capitalize text-center font-semibold mb-16 sm:mb-24">
          All posts
        </h1>
        <BlogPosts />
      </section>
    </>
  );
}
