export default function About() {
  return (
    <section id="about">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#ffffff]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4">
        <p>
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
          If you need anything, feel free to reach out to me via my
          <a href="mailto:saravind436@gmail.com" className="text-fuchsia-600">
            {" "}
            email
          </a>{" "}
          or through my social media.
        </p>
      </div>
    </section>
  );
}
