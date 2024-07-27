import Tag from "./ui/tag";

const skills = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Front-End",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Gatsby",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Express", "REST"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Design & Prototype",
    skills: ["Figma", "Webflow", "Inkscape"],
  },
  {
    title: "Devops",
    skills: ["Docker", "Kubernetes", "Kafka", "RabbitMQ", "Skaffold", "Helm"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "GitHub Actions", "VS Code", "Postman"],
  },
  {
    title: "Infrastructure",
    skills: ["AWS", "Google Cloud", "Netlify", "Vercel", "Hasura"],
  },
  {
    title: "Concepts",
    skills: ["Clean", "MVC", "SOLID", "Serverless", "Microservices"],
  },
  {
    title: "Other",
    skills: ["Socket.IO"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-40">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#101820]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Skills
        </h2>
      </div>
      <div className="w-full flex flex-col gap-2">
        {skills.map((skill) => (
          <div key={skill.title} className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">{skill.title}</h2>
            <div className="flex gap-2 flex-wrap">
              {skill.skills.map((item) => (
                <Tag key={item} title={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
