import Link from "next/link";
import { BlogPosts } from "src/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="max-w-xl px-4 my-8 mx-auto">
        <Link
          href="/"
          scroll={false}
          className="block text-slate-200 hover:underline mb-10"
        >
          ← Back to home
        </Link>
        <h1 className="text-slate-200 font-semibold text-2xl mb-8 tracking-tighter">
          My Blog
        </h1>
        <BlogPosts />
    </section>
  );
}
