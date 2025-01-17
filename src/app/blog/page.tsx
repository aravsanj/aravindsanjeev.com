import { BlogPosts } from "src/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <>
      <section className="max-w-xl  px-4 py-20 mx-auto">
        <h1 className="text-black text-3xl capitalize text-center font-semibold mb-24">
          All posts
        </h1>
        <BlogPosts />
      </section>
    </>
  );
}
