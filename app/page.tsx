import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Welcome</h1>
      <p className="mb-4 ">
        I'm <b>Aravind Sanjeev</b>, a curious soul who loves diving deep into
        how things tick, especially when it comes to computers and code. But
        fear not, this space is for
        <i>
          <b> everyone</b>
        </i>
        . Here, you'll find blog posts that aim to be interesting and accessible
        , regardless of your technical background.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
