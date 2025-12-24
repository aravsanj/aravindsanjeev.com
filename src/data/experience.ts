export interface ExperienceItem {
  duration: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    duration: "2024 — present",
    title: "Frontend Engineer",
    company: "UXBERT Labs",
    companyUrl: "https://uxbert.com/",
    description:
      "I am currently working as the Frontend Engineer for multiple projects under the Saudi General Entertainment Ministry.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next",
      "Contentful",
      "Strapi",
    ],
  },
  {
    duration: "2023 — 2024",
    title: "MERN Stack Developer",
    company: "Brototype",
    companyUrl: "https://brototype.com/",
    description:
      "Gained hands-on experience building robust web applications through intensive, project-based learning. Developed full-stack web applications including a social media platform and a microservices-based article sharing platform. Benefited from weekly code reviews and mentorship to enhance coding and problem-solving skills.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next",
      "Node",
      "Express",
      "MongoDB",
      "Kafka",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    duration: "2022 — 2023",
    title: "React Developer Intern",
    company: "RaftLabs",
    companyUrl: "https://www.raftlabs.com/",
    description:
      "Worked for a hybrid remote working app, and a scalable decision-making platform. Integrated Agora, Google Drive, Microsoft Graph, and Dropbox APIs to enhance the app's functionality. Developed reusable components and implemented responsive design to improve the user experience.",
    technologies: ["JavaScript", "TypeScript", "React", "Next", "Urql"],
  },
  {
    duration: "2020 — 2022",
    title: "Technical Content Writer",
    company: "Freelance",
    companyUrl: "",
    description:
      "During this time, I worked as a freelance content writer for various parties and blogs.",
    technologies: ["Writing", "Documentation"],
  },
];
