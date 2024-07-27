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
      <div className="w-full flex flex-col gap-2">
        {skills.map((skill) => (
          <div key={skill.title} className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">{skill.title}</h2>
            <div className="flex gap-2">
              {skill.skills.map((item) => (
                <span
                  className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
