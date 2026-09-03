const experiences = [
  {
    role: "Software Development Intern",
    company: "SACARES Pharmaceuticals Pvt. Ltd.",
    duration: "May 2026 — July 2026",
    type: "On-site",

    description:
      "Worked on software development and digital solutions focused on improving the company's online presence and internal workflows.",

    points: [
      "Developed and maintained the company website.",
      "Worked on enhancing the company's digital presence and user experience.",
      "Contributed to an internal workflow management system.",
      "Collaborated with the team to understand requirements and implement solutions.",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
  },

  {
    role: "Web Development Intern",
    company: "DAS Solutions",
    duration: "May 2025 — May 2026",
    type: "Remote",

    description:
      "Completed a one-year web development internship focused on building modern web applications using JavaScript, TypeScript, Angular, and React.",

    points: [
      "Developed AdminPulse, an enterprise admin dashboard using Angular and TypeScript.",
      "Built reusable Angular components and services with RxJS and reactive forms.",
      "Developed QuizSpark, an interactive quiz and assessment platform using React, JavaScript, and TypeScript.",
      "Integrated REST APIs using Angular HttpClient and Axios.",
      "Implemented client-side navigation using Angular Router and React Router.",
      "Applied Git for version control and maintained clean, structured frontend code.",
    ],

    technologies: [
      "JavaScript",
      "TypeScript",
      "Angular",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Git",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-purple-500">
            Experience
          </p>

          <h2 className="mt-3 font-[Syne] text-4xl md:text-5xl font-bold">
            Where I've{" "}
            <span className="text-purple-500">worked.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            My experience building software, working with modern
            technologies, and turning requirements into working
            solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative md:pl-12 mb-10 last:mb-0"
            >

              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-black bg-purple-500" />

              {/* Experience Card */}
              <div className="p-7 md:p-9 rounded-2xl border border-gray-200 dark:border-gray-800">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-lg text-purple-500 font-medium">
                      {experience.company}
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="font-medium">
                      {experience.duration}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {experience.type}
                    </p>
                  </div>

                </div>

                {/* Description */}
                <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <ul className="mt-6 space-y-3">
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-purple-500 mt-1">
                        ▹
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-900 text-sm font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;