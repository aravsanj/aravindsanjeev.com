import Link from "next/link";
import { formatDate, getBlogPosts } from "src/app/blog/utils";

export function BlogPosts() {
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
        .map((post, index) => (
          <div
            key={post.slug}
            className="flex items-center space-x-4 border-b border-neutral-200 pb-4"
          >
            <span className="text-fuchsia-600 text-lg font-medium">
              {index + 1}.
            </span>

            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              <Link
                href={`/blog/${post.slug}`}
                className="text-gray-600 sm:min-w-[400px]  font-semibold md:text-lg tracking-tight group-hover:underline hover:underline"
              >
                {post.metadata.title}
              </Link>

              <span className="text-gray-400 min-w-[100px] text-sm md:text-base font-medium tabular-nums ">
                {formatDate(post.metadata.publishedAt, false)}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
