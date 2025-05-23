import About from "../components/about";
import Projects from "../components/projects";
import Side from "@/components/side";
import Experience from "@/components/experience";
import Closing from "@/components/closing";
import Writings from "@/components/writings";

export default function Page() {
  return (
    <div className="">
      <div className="mx-auto  min-h-screen max-w-[1280px] px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Side />
          <main className="lg:pt-24 lg:w-1/2 lg:py-24 min-h-screen">
            <About />
            <Experience />
            <Projects />
            <Writings />
            <Closing />
          </main>
        </div>
      </div>
    </div>
  );
}
