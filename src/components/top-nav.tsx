"use client";
import { useState } from "react";
import Link from "next/link";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="">
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
            <div className="hidden sm:flex space-x-4">
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
              <Link
                href="/blog"
                className="text-gray-600 hover:text-fuchsia-600"
              >
                Blog
              </Link>
            </div>
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
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

        <div
          className={`fixed inset-0 bg-white z-20 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
          <div className="flex justify-between items-center p-4 ">
            <Link
              href="/"
              className="text-fuchsia-600 text-xl font-semibold"
              onClick={toggleMenu}
            >
              Aravind Sanjeev
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-fuchsia-600"
              aria-label="Close Menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-8 pl-4 pt-8 pr-8">
            <Link
              href="/#about"
              className="block text-gray-600 text-lg hover:text-fuchsia-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/#experience"
              className="block text-gray-600 text-lg hover:text-fuchsia-600"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              className="block text-gray-600 text-lg hover:text-fuchsia-600"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="block text-gray-600 text-lg hover:text-fuchsia-600"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
