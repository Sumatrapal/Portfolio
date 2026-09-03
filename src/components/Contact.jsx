const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Main Contact Card */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 p-8 md:p-14">

          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">

            {/* Heading */}
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-purple-500">
              Contact
            </p>

            <h2 className="mt-4 font-[Syne] text-4xl md:text-6xl font-bold max-w-3xl">
              Let's build something{" "}
              <span className="text-purple-500">
                meaningful.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I'm always open to discussing software development,
              interesting projects, collaborations, internships,
              and new opportunities.
            </p>

            {/* Email */}
            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="inline-block mt-8 text-xl md:text-2xl font-medium hover:text-purple-500 transition-colors"
            >
              sumatrapal10@gmail.com
            </a>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://github.com/Sumatrapal"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-gray-200 dark:border-gray-800 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sumatrapal/"
                className="px-5 py-3 rounded-full border border-gray-200 dark:border-gray-800 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:sumatrapal10@gmail.com"
                className="px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition-transform"
              >
                Email Me →
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;