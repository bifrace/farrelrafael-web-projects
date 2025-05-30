// src/components/ProjectCard.jsx
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={project.link}>
          <button className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            Lihat Detail
          </button>
        </Link>
      </div>
    </div>
  );
}