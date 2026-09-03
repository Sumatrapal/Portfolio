const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-purple-500">
            About Me
          </p>

          <h2 className="mt-3 font-[Syne] text-4xl md:text-5xl font-bold">
            Building ideas into
            <span className="text-purple-500"> real products.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I'm a Computer Science Engineering student passionate
              about software development and building meaningful
              digital products.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I enjoy working across the stack — from designing
              intuitive interfaces to building APIs, working with
              databases, and exploring intelligent systems.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Currently, I'm focused on strengthening my skills in
              full-stack development, data structures & algorithms,
              and software engineering.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4">

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <p className="text-3xl font-bold">10+</p>
              <p className="mt-2 text-gray-500">
                Projects Built
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <p className="text-3xl font-bold">2+</p>
              <p className="mt-2 text-gray-500">
                Hackathons
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <p className="text-3xl font-bold">Full Stack</p>
              <p className="mt-2 text-gray-500">
                Development
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <p className="text-3xl font-bold">DSA</p>
              <p className="mt-2 text-gray-500">
                Problem Solving
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;