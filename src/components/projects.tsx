import Project from "./project";
const projects = [
  {
    title: "Golden Pen Award",
    description:
      "The Golden Pen Award aims to celebrate the most influential literary works in the Arab world, supporting writers who enrich Arabic literature with their unique contributions.",
    imageUrl: "/assets/golden_pen.png",
    url: "https://www.goldenpenaward.com/ar",
    tags: ["Next.js", "Typescript", "TailwindCSS", "Strapi"],
  },
  {
    title: "Joy Awards",
    description:
      "The Joy Awards is an annual ceremony in Riyadh, Saudi Arabia that honors the artistic achievements of Arab celebrities.",
    imageUrl: "/assets/joy_awards.png",
    url: "https://joyawards.sa/en",
    tags: ["Next.js", "Typescript", "TailwindCSS", "Strapi"],
  },
  {
    title: "Saudi Arabian Grand Prix",
    description:
      "The Saudi Arabian Grand Prix is a Formula One motor racing event which took place for the first time in 2021. The inaugural edition of the race was held in Jeddah, in Saudi Arabia.",
    imageUrl: "/assets/saudi_grand_prix.png",
    url: "https://saudiarabiangp.com/en",
    tags: ["Next.js", "Typescript", "TailwindCSS", "Contentful", "GraphQL"],
  },
  {
    title: "People Supported Intelligence",
    description:
      "People Supported Intelligence (PSi) is a platform for a new type of online dialogue that fosters consensus from opposing views.",
    imageUrl: "/assets/psi.png",
    url: "https://psi.tech/",
    tags: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Hasura",
      "GraphQL",
      "Figma",
    ],
  },
  {
    title: "Worx Remotely",
    description: "All in one digital workplace for enterprise productivity.",
    imageUrl: "/assets/worx.png",
    url: "https://worxsquad.com/",
    tags: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Hasura",
      "GraphQL",
      "Figma",
    ],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="mt-20 lg:mt-40">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#ffffff]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="flex flex-col gap-y-10">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
}
