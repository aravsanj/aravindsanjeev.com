import Link from "next/link";

export default function Writings() {
  return (
    <section id="writings" className="mt-20 lg:mt-40 space-y-10">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#101820]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Writings
        </h2>
      </div>
      <div>
        <span className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 mb-20">
          Personal thoughts, learnings, and experiences.
        </span>
        <Link href="/blog" className="block text-slate-200 hover:underline">
          aravindsanjeev.com/blog
        </Link>
      </div>

      <div>
        <span className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 mb-20">
          My developer blog
        </span>
        <a
          href="https://dev.aravindsanjeev.com"
          target="_blank"
          className="block text-slate-200 hover:underline"
        >
          dev.aravindsanjeev.com
        </a>
      </div>
    </section>
  );
}
