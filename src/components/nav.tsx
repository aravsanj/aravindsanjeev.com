"use client";
import useIntersectionObserver from "@/services/hooks/useIntersectionObserver";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const navItems = {
  "#about": {
    name: "about",
  },

  "#skills": {
    name: "skills",
  },
  "#projects": {
    name: "projects",
  },
  "#blog": {
    name: "blog",
  },
};

const targets = ["about", "skills", "projects", "blog"];

export function Navbar() {
  const { activeSection } = useIntersectionObserver({
    targets,
  });

  return (
    <aside className="tracking-tight mt-10">
      <div className="">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-col space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <a
                  href={path}
                  key={path}
                  className={`group flex items-center py-3 cursor-pointer ${activeSection === name && "active"}`}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-[#FEE715] group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === name ? "text-[#FEE715]" : "text-slate-500"} group-hover:text-[#FEE715] group-focus-visible:text-[#FEE715]`}
                  >
                    {name}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
