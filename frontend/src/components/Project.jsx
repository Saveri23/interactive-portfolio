import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error("Failed to fetch projects:", err));
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {projects.map(p => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 
              border border-gray-200 dark:border-gray-700 
              hover:border-blue-500 transition shadow hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {p.title} ({p.year})
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {Array.isArray(p.description) ? p.description.join(" ") : p.description}
            </p>

            <span className="text-blue-600 dark:text-blue-400 group-hover:underline">
              View Details →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
