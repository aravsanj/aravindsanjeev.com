"use client";

import { useEffect, useState } from "react";
import SocialShareButtons from "./SocialShareButtons";

export default function SocialShare({ post }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition >= 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isFixed
          ? "fixed top-40 opacity-100 visible"
          : "opacity-0 hidden duration-0"
      } flex flex-col gap-1 -ml-20 transition-all duration-300`}
    >
      <SocialShareButtons size={40} post={post} />
    </div>
  );
}
