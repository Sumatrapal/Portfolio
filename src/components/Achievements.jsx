const achievements = [
  {
    title: "AI for Social Good Hackathon",
    organization: "IIT Ropar",
    description:
      "Selected for the AI for Social Good Hackathon, a pre-summit activity associated with the India AI Impact Summit 2026.",
    highlight: "Selected Participant",
  },

  {
    title: "Tekathon 3.0",
    organization: "Internal Hackathon",
    description:
      "Secured a position among the Top 10 teams out of 100 participating teams in the internal hackathon.",
    highlight: "Top 10 / 100",
  },

  {
    title: "SIH Tech Team",
    organization: "Smart India Hackathon",
    description:
      "Contributed as part of the technical team, supporting technical activities and collaborative problem-solving.",
    highlight: "Technical Team",
  },

  {
    title: "C Square Club",
    organization: "Chandigarh University",
    description:
      "Contributed to technical activities, events, and workshops as part of the student technical community.",
    highlight: "Technical Community",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-purple-500">
            Achievements
          </p>

          <h2 className="mt-3 font-[Syne] text-4xl md:text-5xl font-bold">
            Beyond the{" "}
            <span className="text-purple-500">
              classroom.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Hackathons, technical communities, and experiences
            that have helped me grow beyond academics.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {achievements.map((achievement, index) => (
            <article
              key={index}
              className="group p-7 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >

              {/* Highlight */}
              <div className="flex items-center justify-between gap-4">

                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-xs font-semibold uppercase tracking-wider">
                  {achievement.highlight}
                </span>

                <span className="text-purple-500 text-xl">
                  ↗
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-6 font-[Syne] text-2xl font-bold">
                {achievement.title}
              </h3>

              {/* Organization */}
              <p className="mt-2 text-purple-500 font-medium">
                {achievement.organization}
              </p>

              {/* Description */}
              <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;