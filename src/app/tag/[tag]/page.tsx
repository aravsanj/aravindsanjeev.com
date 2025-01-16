import { BlogPostsByTag } from "@/components/posts-by-tag";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default async function Page(props) {
  const params = await props.params;

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      <section className="max-w-xl  px-4 my-20 mx-auto">
        <h1 className="text-black text-3xl capitalize text-center font-semibold mb-24">
          {params.tag}
        </h1>
        <BlogPostsByTag tag={params.tag} />
      </section>
    </>
  );
}
