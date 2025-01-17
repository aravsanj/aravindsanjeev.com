import { BlogPostsByTag } from "@/components/posts-by-tag";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default async function Page(props) {
  const params = await props.params;

  return (
    <>
      <section className=" max-w-fit px-4 py-20 mx-auto">
        <h1 className="text-black text-3xl capitalize text-center font-semibold mb-24">
          {params.tag}
        </h1>
        <BlogPostsByTag tag={params.tag} />
      </section>
    </>
  );
}
