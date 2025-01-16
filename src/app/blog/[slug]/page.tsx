import { notFound } from "next/navigation";
import { CustomMDX } from "src/components/mdx";
import { formatDate, getBlogPosts } from "src/app/blog/utils";
import { baseUrl } from "src/app/sitemap";
import Link from "next/link";
import SocialLinks from "@/components/social";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog(props) {
  const params = await props.params;
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  let tags = JSON.parse(post?.metadata.tags);

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      <section className="max-w-full  px-4 my-20 mb-16 ">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "Aravind Sanjeev",
              },
            }),
          }}
        />

        <div className="max-w-[800px] mx-auto">
          <div className="">
            <div className="mt-6 mb-20">
              <div className="mb-10 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
                <p className=" font-medium  text-gray-600">
                  {formatDate(post.metadata.publishedAt)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link key={tag} href={`/tag/${tag}`} scroll={false}>
                      <span
                        className="bg-fuchsia-100 text-fuchsia-600 cursor-pointer text-sm font-medium px-3 py-1 rounded-full 
    border-2 border-fuchsia-600 hover:bg-fuchsia-200  focus:outline-none focus:ring-2 focus:ring-fuchsia-500
    transition duration-300 ease-in-out shadow-sm"
                      >
                        {`#${tag}`}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <h1 className="title font-semibold text-5xl sm:text-6xl  text-slate-900 tracking-tighter">
                {post.metadata.title}
              </h1>
            </div>
          </div>
          <article className=" prose prose-xl font-semibold prose-zinc">
            <CustomMDX source={post.content} />
          </article>

          <div className="mt-16 border-t  border-neutral-700 pt-8">
            <div className="flex items-start space-x-4">
              <img
                src="/assets/avatar.png"
                alt="Aravind Sanjeev"
                className="w-16 h-16 rounded-full object-fit"
              />
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Aravind Sanjeev
                </h3>
                <p className="text-sm text-gray-800 mb-4">
                  Aravind Sanjeev is a software engineer and blogger who loves
                  sharing his thoughts on web development, programming, and
                  technology trends.
                </p>
                <SocialLinks
                  fillColor="#141414"
                  email="saravind436@gmail.com"
                  whatsapp={8848304872}
                  twitter="aravsanj"
                  instagram="aravsanj"
                  linkedIn="aravsanj"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
