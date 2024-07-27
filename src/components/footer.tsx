import SocialLinks from "./social";
import { MdOutlineWarningAmber } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mb-16">
      <span className="flex gap-2 p-2 rounded-lg bg-amber-200/20 w-max text-xs text-white mb-6">
        <MdOutlineWarningAmber />
        Under Heavy Development
      </span>
      <SocialLinks
        email="saravind436@gmail.com"
        whatsapp={8848304872}
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
