import Link from "next/link";

export default function Item({ item, index }) {
  return (
    <Link href={item.slug} className="group block px-2 -mx-2">
      <div className="flex flex-col space-y-2 pb-6 border-b border-neutral-200 relative overflow-hidden">
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-fuchsia-600 transition-all duration-300 group-hover:w-full" />

        <div className="flex items-start space-x-4">
          <span className="text-fuchsia-600 text-lg font-medium">
            {index + 1}.
          </span>

          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <span className="text-gray-800 font-semibold md:text-lg tracking-tight">
              {item.title}
            </span>
          </div>
        </div>

        <p className="pl-8 text-sm text-gray-500 leading-snug md:max-w-3xl">
          {item.description}
        </p>
      </div>
    </Link>
  );
}
