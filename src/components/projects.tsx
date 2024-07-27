import Project from "./project";
const projects = [
  {
    title: "Music Streaming App",
    description:
      "A simple music app built on Jamendo API. The design is inspired by Spotify. The app is built using Next.js and follows three-layer architecture.",
    imageUrl: "/assets/spotify.gif",
    url: "https://github.com/aravsanj/Spotify",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Jamendo API",
      "SWR",
    ],
  },
  {
    title: "Article Sharing Platform",
    description:
      "An app built following micros-service architecture. The app contains 8 different services communicating with each other using Kafka. MongoDB is used as the database. The backend follows clean architecture.",
    imageUrl: "/assets/dashboard.png",
    url: "https://github.com/orgs/Opine-official/repositories",
    tags: [
      "Kubernetes",
      "Docker",
      "Kafka",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clean Architecture",
    ],
  },
  {
    title: "Social Media App",
    description:
      "A social media app built using MERN stack. The app is built following RESTful API design. The app has chat, group chat, notifications, and other features. The app is built following MVC architecture.",
    imageUrl: "/assets/social-media.png",
    url: "https://github.com/aravsanj/hackerconnect-backend",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "RESTful API",
      "MVC Architecture",
    ],
  },
  {
    title: "Simple E-commerce App",
    description:
      "A simple e-commerce app built using React. The app use Fake store API.",
    imageUrl: "/assets/ecom.png",
    url: "https://github.com/aravsanj/Ecommerce",
    tags: ["React", "Redux", "Fake Store API"],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="mt-40">
      <div className="flex flex-col gap-y-10">
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </section>
  );
}
