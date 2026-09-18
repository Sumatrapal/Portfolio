import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "VedaSphere",
    category: "AI • Web Application",
    description:
      "A modern digital platform designed to make Vedic knowledge more accessible and relevant to everyday life through an interactive web experience and AI-powered conversation.",
    highlights: [
      "Modern responsive interface for Vedic knowledge",
      "AI-powered conversational experience",
      "User-friendly chat interface",
      "Reusable modular React components",
    ],
    technologies: ["React", "Tailwind CSS", "Gen AI", "JavaScript"],
    github: "https://github.com/Sumatrapal/VedaSphere",
    live: "https://veda-sphere.vercel.app/",
    image: "/vedasphere.png",
    featured: true,
  },

  {
    number: "02",
    title: "CineMuse",
    category: "Full Stack • Movie Discovery",
    description:
      "A cinematic movie recommendation web application that helps users discover movies through mood-based recommendations and an immersive browsing experience.",
    highlights: [
      "TMDB API integration",
      "Mood-based recommendation logic",
      "Dark cinematic interface",
      "Infinite scrolling",
      "Responsive product-focused UX",
    ],
    technologies: ["JavaScript", "TMDB API", "CSS", "Vercel"],
    github: "https://github.com/Sumatrapal/CineMuse",
    live: "https://cine-muse-henna.vercel.app/",
    image: "/cinemuse.png",
    featured: false,
  },

  {
    number: "03",
    title: "Expense Tracker",
    category: "Desktop Application",
    description:
      "A practical desktop expense management application designed to record, organize, and manage personal expenses with persistent local storage.",
    highlights: [
      "Desktop application using Tkinter",
      "SQLite database persistence",
      "Add and manage expense records",
      "Simple and practical user workflow",
    ],
    technologies: ["Python", "Tkinter", "SQLite"],
    github: "#",
    live: "#",
    image: null,
    featured: false,
  },

  {
    number: "04",
    title: "Hospital Webpage",
    category: "Web Development",
    description:
      "A responsive hospital website designed to present healthcare services and information through a clean and accessible web interface.",
    highlights: [
      "Responsive hospital website",
      "Structured hospital information and services",
      "JavaScript-based interactivity",
      "Clean layout and usability",
      "Deployed on Vercel",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    github: "https://github.com/Sumatrapal/Hospital-webpage",
    live: "https://hospital-webpage-six.vercel.app/",
    image: "/hospital.png",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-purple-500">
            Selected Work
          </p>

          <h2 className="font-[Syne] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Projects that{" "}
            <span className="text-purple-500">solve problems.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
            A collection of applications and experiments built while
            exploring software development, full-stack engineering, and
            AI-powered experiences.
          </p>
        </motion.div>

        {/* ================= PROJECTS ================= */}

        <div className="space-y-16">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="group"
            >

              <div
                className={`grid overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/60 md:grid-cols-2 ${
                  index % 2 !== 0 ? "md:grid-flow-dense" : ""
                }`}
              >

                {/* ================= IMAGE ================= */}

                <div
                  className={`relative min-h-[280px] overflow-hidden bg-gray-100 dark:bg-gray-900 md:min-h-[420px] ${
                    index % 2 !== 0 ? "md:col-start-2" : ""
                  }`}
                >

                  {project.image && project.live !== "#" ? (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="absolute inset-0 block cursor-pointer"
                    >

                      <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}

                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/45">

                        <span className="translate-y-4 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          View Project ↗
                        </span>

                      </div>

                    </a>

                  ) : (

                    /* ================= EXPENSE TRACKER VISUAL ================= */

                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

                      <div className="absolute h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

                      <div className="relative w-[75%] rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-950">

                        <div className="mb-5 flex items-center justify-between">

                          <div>
                            <div className="h-3 w-24 rounded-full bg-gray-200 dark:bg-gray-800" />

                            <div className="mt-2 h-2 w-16 rounded-full bg-gray-100 dark:bg-gray-900" />
                          </div>

                          <div className="h-8 w-8 rounded-full bg-purple-500/10" />

                        </div>

                        <div className="mb-5 h-20 rounded-xl bg-gray-100 dark:bg-gray-900" />

                        <div className="space-y-3">

                          <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-900" />

                          <div className="h-3 w-4/5 rounded-full bg-gray-100 dark:bg-gray-900" />

                          <div className="h-3 w-3/5 rounded-full bg-gray-100 dark:bg-gray-900" />

                        </div>

                        <p className="mt-6 text-center text-xs font-medium uppercase tracking-widest text-gray-400">
                          Desktop Application
                        </p>

                      </div>

                    </div>
                  )}

                  {/* Project Number */}

                  <div className="pointer-events-none absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-sm font-semibold text-white backdrop-blur-md">
                    {project.number}
                  </div>

                </div>

                {/* ================= CONTENT ================= */}

                <div
                  className={`flex flex-col justify-center p-7 sm:p-9 md:p-12 ${
                    index % 2 !== 0
                      ? "md:col-start-1 md:row-start-1"
                      : ""
                  }`}
                >

                  {/* Category */}

                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-purple-500">
                    {project.category}
                  </p>

                  {/* Title */}

                  <div className="mt-3 flex items-center justify-between gap-4">

                    <h3 className="font-[Syne] text-3xl font-bold sm:text-4xl">
                      {project.title}
                    </h3>

                    {project.featured && (
                      <span className="shrink-0 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-500">
                        Featured
                      </span>
                    )}

                  </div>

                  {/* Description */}

                  <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Highlights */}

                  <div className="mt-7 space-y-2">

                    {project.highlights.map((highlight) => (

                      <div
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                      >

                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />

                        <span>{highlight}</span>

                      </div>

                    ))}

                  </div>

                  {/* Technologies */}

                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* ================= PROJECT FOOTER ================= */}

                  {project.github !== "#" && (
                    <div className="mt-8 border-t border-gray-200 pt-5 dark:border-gray-800">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/github inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-purple-500 dark:text-gray-400"
                      >

                        <span className="relative">
                          GitHub Repository

                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-purple-500 transition-all duration-300 group-hover/github:w-full" />
                        </span>

                        <span className="transition-transform duration-300 group-hover/github:translate-x-1 group-hover/github:-translate-y-0.5">
                          ↗
                        </span>

                      </a>

                    </div>
                  )}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;