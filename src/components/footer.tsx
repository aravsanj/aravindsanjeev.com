import SocialLinks from "./social";
import { MdDateRange } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mb-16">
      {/* <span className="flex items-center gap-2 p-2 rounded-lg bg-amber-200/20 w-max text-xs text-white mb-6">
        <MdDateRange />
        Last updated on Aug 8, 2024
      </span> */}
      <SocialLinks
        fillColor=""
        email="saravind436@gmail.com"
        twitter="aravsanj"
        instagram="aravsanj"
        linkedIn="aravsanj"
      />
      <p className="mt-2 text-sm">
        © {new Date().getFullYear()} Aravind Sanjeev
      </p>
    </footer>
  );
}
