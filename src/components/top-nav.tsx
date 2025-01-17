// components/Navbar.js
import Link from "next/link";

export default function Topbar() {
  return (
    <nav className="bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-fuchsia-600 text-xl font-semibold hover:text-fuchsia-500"
            >
              Aravind Sanjeev
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/#about"
              className="text-gray-600 hover:text-fuchsia-600"
            >
              About
            </Link>
            <Link
              href="/#experience"
              className="text-gray-600 hover:text-fuchsia-600"
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              className="text-gray-600 hover:text-fuchsia-600"
            >
              Projects
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-fuchsia-600">
              Blog
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-fuchsia-600"
              aria-label="Open Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
