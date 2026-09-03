const projects = [
  {
    title: "VedaSphere",
    category: "AI • Web Application",

    description:
      "A modern digital platform designed to make Vedic knowledge more accessible and relevant to everyday life through an interactive web experience and AI-powered conversation.",

    highlights: [
      "Built a modern and responsive interface for exploring Vedic knowledge.",
      "Developed an AI-powered conversational experience for interacting with Vedic content.",
      "Designed a user-friendly chat interface focused on accessible knowledge exploration.",
      "Refactored the application into reusable and modular React components.",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "AI",
      "JavaScript",
    ],

    github: "#",
    live: "#",

    featured: true,
  },

  {
    title: "CineMuse",
    category: "Full Stack • Movie Discovery",

    description:
      "A cinematic movie recommendation web application that helps users discover movies through mood-based recommendations and an immersive browsing experience.",

    highlights: [
      "Integrated the TMDB API to fetch movie information and recommendations.",
      "Implemented mood-based movie recommendation logic.",
      "Built an immersive cinematic interface with a dark visual theme.",
      "Implemented infinite scrolling for seamless movie discovery.",
      "Designed a responsive and product-focused user experience.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "TMDB API",
      "CSS",
      "Vercel",
    ],

    github: "https://github.com/Sumatrapal/CineMuse",
    live: "https://cine-muse-henna.vercel.app/",

    featured: false,
  },

  {
    title: "Expense Tracker",
    category: "Desktop Application",

    description:
      "A desktop-based expense management application built to help users record, organize, and manage their personal expenses through a simple graphical interface.",

    highlights: [
      "Built a desktop expense management interface using Tkinter.",
      "Implemented persistent data storage using SQLite.",
      "Created functionality for recording and managing expense information.",
      "Connected the user interface with a local database.",
      "Focused on creating a simple and practical expense management workflow.",
    ],

    technologies: [
      "Python",
      "Tkinter",
      "SQLite",
    ],

    github: "#",
    live: "#",

    featured: false,
  },

  {
    title: "Hospital Webpage",
    category: "Web Development",

    description:
      "A responsive hospital website designed to provide users with a clean interface for exploring hospital services and information.",

    highlights: [
      "Developed a responsive hospital website.",
      "Created structured sections for presenting hospital information and services.",
      "Implemented interactive functionality using JavaScript.",
      "Focused on clean layout, usability, and responsive design.",
      "Deployed the project using Vercel.",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
    ],

    github: "https://github.com/Sumatrapal/Hospital-webpage",
    live: "https://hospital-webpage-six.vercel.app/",

    featured: false,
  },

  {
    title: "Movie Recommendation System",
    category: "Machine Learning",

    description:
      "A machine learning based movie recommendation system that explores personalized recommendations using collaborative filtering and matrix factorization.",

    highlights: [
      "Worked with the MovieLens dataset for recommendation experiments.",
      "Implemented matrix factorization using Singular Value Decomposition (SVD).",
      "Explored user-item interaction data to generate personalized recommendations.",
      "Applied machine learning concepts to a real-world recommendation problem.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "SVD",
      "MovieLens",
    ],

    github: "#",
    live: "#",

    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-purple-500">
            Projects
          </p>

          <h2 className="mt-3 font-[Syne] text-4xl md:text-5xl font-bold">
            Things I've{" "}
            <span className="text-purple-500">built.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A selection of projects where I explore software
            development, modern web technologies, and machine
            learning.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">

          {projects.map((project, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Project Visual */}
              <div className="relative h-56 md:h-72 overflow-hidden bg-gray-100 dark:bg-gray-900">

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center px-6">

                    {project.featured && (
                      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-500">
                        Featured Project
                      </p>
                    )}

                    <h3 className="mt-3 font-[Syne] text-4xl md:text-6xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-500">
                      {project.category}
                    </p>

                  </div>

                </div>

              </div>

              {/* Project Content */}
              <div className="p-7 md:p-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

                  <div>
                    <p className="text-sm font-medium text-purple-500">
                      {project.category}
                    </p>

                    <h3 className="mt-2 font-[Syne] text-3xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">

                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:scale-105 transition-transform"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

                {/* Description */}
                <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-8">

                  <h4 className="font-semibold">
                    What I worked on
                  </h4>

                  <ul className="mt-4 space-y-3">

                    {project.highlights.map(
                      (highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-purple-500 mt-1">
                            ▹
                          </span>

                          <span>{highlight}</span>
                        </li>
                      )
                    )}

                  </ul>

                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-medium"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;