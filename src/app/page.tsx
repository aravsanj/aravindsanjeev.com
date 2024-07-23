import { BlogPosts } from "src/app/components/posts";
import Project from "./components/project";

const projects = [
  {
    title: "Project 1",
    description: "This is a project I worked on.",
    imageUrl: "/assets/spotify.gif",
    tags: ["React", "TailwindCSS"],
  },
];

export default function Page() {
  return (
    <>
      {/* <Notification /> */}
      <section className="space-y-4" id="about">
        <p className="">
          I graduated with a Mechanical Engineering degree in 2019. For the
          better or the worse, 2020 happened. I began working as a technical
          content writer online. Eventually, I started learning web development
          and I've been hooked ever since.
        </p>
        <p>
          The projects I worked on ranges from simple static websites to
          full-blown applications. My goal is to create a seamless user
          experience that is both intuitive and visually appealing.
        </p>
        <p>
          I'm currently working as a full-stack engineer. I'm open to
          collaborating on new projects. Feel free to reach out to me via my
          <a href="mailto:saravind436@gmail.com" className="text-slate-200">
            {" "}
            email
          </a>{" "}
          or through my social media.
        </p>
      </section>
      <section id="projects" className="my-8">
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </section>

      <section id="blog" className="my-8">
        <BlogPosts />
      </section>
    </>
  );
}
