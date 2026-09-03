const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "C",  "Java", "JavaScript", "Python", "Swift"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Firebase"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-purple-500">
            Skills
          </p>

          <h2 className="mt-3 font-[Syne] text-4xl md:text-5xl font-bold">
            My <span className="text-purple-500">tech stack.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I use to build, ship, and improve
            software applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-7 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;