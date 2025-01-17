import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/(others)/blog/utils";

export function BlogPreview() {
  const allBlogs = getBlogPosts();

  return (
    <div className="space-y-6">
      {allBlogs
        .sort((a, b) => {
          return (
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
          );
        })
        .slice(0, 3)
        .map((post, index) => (
          <div
            key={post.slug}
            className="flex relative items-center gap-4 justify-between w-full"
          >
            <div className="flex gap-4 items-center  justify-between">
              <span className="text-fuchsia-600">{index + 1}.</span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-gray-600  title text-sm sm:text-base tracking-tight group-hover:underline hover:underline"
              >
                {post.metadata.title}
              </Link>
            </div>
            <span className="text-gray-400 min-w-fit  text-xs sm:text-sm font-medium tabular-nums ">
              {formatDate(post.metadata.publishedAt, false)}
            </span>
          </div>
        ))}
    </div>
  );
}
