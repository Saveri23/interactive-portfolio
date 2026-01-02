import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => {
        const proj = res.data.find(p => p.id == id);
        setProject(proj);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!project) return <p className="text-center mt-20">Loading...</p>;

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Project Title */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        {/* Project Year */}
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Year: {project.year}
        </p>

        {/* Project Description */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Description:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {project.description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Uses */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Uses:</h3>
          <div className="flex flex-wrap gap-2">
            {project.uses.map((use, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-400 rounded-full text-sm">
                {use}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
