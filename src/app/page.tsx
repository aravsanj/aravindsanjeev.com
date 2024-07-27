import { BlogPosts } from "src/components/posts";
import About from "../components/about";
import Projects from "../components/projects";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <BlogPosts />
    </>
  );
}
