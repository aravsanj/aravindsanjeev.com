import Tag from "./ui/tag";

const exp = [
  {
    duration: "2023 — 2024",
    title: "MERN Stack Developer",
    company: "Brototype",
    companyUrl: "https://brototype.com/",
    description:
      "Gained hands-on experience building robust web applications through intensive, project-based learning. Developed full-stack web applications including a social media platform and a microservices-based article sharing platform. Benefited from weekly code reviews and mentorship to enhance coding and problem-solving skills.",
    technologies: ["JavaScript", "React", "Next", "Node", "Express", "MongoDB"],
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
];

type ExpItem = {
  duration: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
};

function ExpItem(props: ExpItem) {
  const { duration, title, company, companyUrl, description, technologies } =
    props;

  return (
    <div>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-yellow-100/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          {duration}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200  hover:text-[#FEE715]/80 focus-visible:text-[#FEE715]/80   group/link text-base"
                href={companyUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {`${title} · `}
                  <span className="inline-block">
                    {company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap">
            {technologies.map((tech) => {
              return (
                <li key={tech} className="mr-1.5 mt-2">
                  <Tag title={tech} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mt-20 lg:mt-40">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#101820]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="flex flex-col gap-y-10">
        {exp.map((item) => (
          <ExpItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
