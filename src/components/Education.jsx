const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "Chandigarh University",
    duration: "2024 — 2028",
    subtitle: "Computer Science Engineering",
    description:
      "Pursuing Computer Science Engineering with a focus on software development, full-stack technologies, data structures and algorithms, and problem solving.",
    tags: [
      "Software Development",
      "Full Stack Development",
      "Computer Networks",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Software Engineering",
      "Machine Learning",
    ],
  },

  {
    degree: "Class XII",
    institution: "Sri Sri Ravishankar Vidya Mandir",
    duration: "2022 — 2024",
    subtitle: "Science",
    description:
      "Higher secondary education with a Science stream.",
    tags: ["Science", "Physics", "Chemistry", "Mathematics", "Biology"],
  },

  {
    degree: "Class X",
    institution: "Holy Cross School, Agartala",
    duration: "2023 — 2024",
    subtitle: "Secondary Education",
    description:
      "Secondary school education.",
    tags: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-purple-500">
            Education
          </p>

          <h2 className="mt-3 font-[Syne] text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="text-purple-500">
              Academic journey.
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

          <div className="space-y-10">

            {education.map((item, index) => (
              <div
                key={index}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-black bg-purple-500" />

                {/* Education Card */}
                <div className="p-7 md:p-9 rounded-2xl border border-gray-200 dark:border-gray-800">

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-lg text-purple-500 font-medium">
                        {item.institution}
                      </p>
                    </div>

                    <div className="md:text-right">
                      <p className="font-medium">
                        {item.duration}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.subtitle}
                      </p>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-3">

                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>
                  )}

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;