import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started Computer Science Engineering",
    place: "Chandigarh University",
    description:
      "Started my journey in Computer Science Engineering, building a strong foundation in programming, computer science fundamentals, and software development.",
    tags: ["C++", "Java", "Programming", "Computer Science"],
  },
  {
    year: "2025",
    title: "Web Development Intern",
    place: "DAS Solutions",
    description:
      "Worked on real-world web applications using Angular, React, TypeScript, JavaScript, and REST APIs.",
    tags: ["Angular", "React", "TypeScript", "REST APIs"],
  },
  {
    year: "2026",
    title: "Software Development Intern",
    place: "SACARES Pharmaceuticals Pvt. Ltd.",
    description:
      "Worked on website development, digital presence improvements, and an internal workflow management system.",
    tags: ["JavaScript", "HTML", "CSS", "MySQL"],
  },
  {
    year: "2026",
    title: "Hackathons & Technical Projects",
    place: "Building • Learning • Experimenting",
    description:
      "Expanded into full-stack development, AI-based projects, machine learning, hackathons, and problem solving.",
    tags: ["Full Stack", "AI", "Machine Learning", "DSA"],
  },
  {
    year: "NOW",
    title: "Becoming a Better Software Engineer",
    place: "Currently",
    description:
      "Focused on strengthening full-stack development, data structures and algorithms, software engineering, and building meaningful products.",
    tags: ["React", "Node.js", "DSA", "Software Engineering"],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/3 -left-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-purple-500">
            My Journey
          </p>

          <h2 className="mt-3 font-[Syne] text-4xl md:text-6xl font-bold">
            From learning to building.
          </h2>

          <p className="mt-5 max-w-2xl text-gray-600 dark:text-gray-400">
            A timeline of the experiences, projects, and milestones
            that have shaped my journey as a software developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Vertical Line */}
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2" />

          <div className="space-y-16">
            {journey.map((item, index) => (
              <motion.div
                key={item.year + item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-[23px] h-[23px] rounded-full border-4 border-white dark:border-black bg-purple-500 md:-translate-x-1/2 z-10"
                  whileHover={{
                    scale: 1.35,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 w-full md:w-[45%] ${
                    index % 2 === 0
                      ? "md:pr-8"
                      : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group rounded-3xl border border-gray-200 dark:border-gray-800 p-6 md:p-7 bg-white/60 dark:bg-black/40 backdrop-blur-sm hover:border-purple-500/40 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Year */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-[Syne] text-2xl font-bold text-purple-500">
                        {item.year}
                      </span>

                      <span className="text-xs uppercase tracking-wider text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-[Syne] text-xl md:text-2xl font-bold group-hover:text-purple-500 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Place */}
                    <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {item.place}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ending */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            The journey continues
          </p>

          <p className="mt-3 font-[Syne] text-2xl md:text-3xl font-bold">
            Build. Learn. Repeat. 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;