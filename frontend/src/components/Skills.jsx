export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
    "Git & GitHub",
    "REST APIs"
  ];

 return (
    <section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-blue-500 rounded-full text-sm
                hover:bg-blue-500 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


