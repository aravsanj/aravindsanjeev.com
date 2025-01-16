import Link from "next/link";
import { BlogPosts } from "./posts";
import { BlogPreview } from "./blog-preview";

export default function Writings() {
  return (
    <section id="blog" className="mt-20 lg:mt-40 space-y-10">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#ffffff]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 lg:sr-only">
          Blog
        </h2>
      </div>
      <div className="flex flex-col items-start">
        <span className="relative w-full">
          <BlogPreview />
        </span>
        <Link
          href="/blog"
          className="block text-slate-600 my-10 text-sm hover:underline self-end uppercase"
        >
          View all
        </Link>
      </div>
    </section>
  );
}
