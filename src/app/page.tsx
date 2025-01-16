import About from "../components/about";
import Projects from "../components/projects";
import Skills from "@/components/skills";
import Side from "@/components/side";
import Experience from "@/components/experience";
import Closing from "@/components/closing";
import Writings from "@/components/writings";
import LinkedInBadge from "@/components/linkedin_badge";

export default function Page() {
  return (
    <div className="bg-[#101820]">
      <div className="mx-auto  min-h-screen max-w-[1280px] px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Side />
          <main className="lg:pt-24 lg:w-1/2 lg:py-24 min-h-screen">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Writings />
            <LinkedInBadge />
            <Closing />
          </main>
        </div>
      </div>
    </div>
  );
}
