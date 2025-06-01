"use client";

export default function Projects() {
  const projectList = [
    {
      title: "Portofolio Website",
      description: "Web portofolio dengan Next.js, Tailwind, dan App Router.",
      link: "https://github.com/bifrace/self-secure-portofolio",
    },
    {
      title: "Project Dummy Lainnya",
      description: "Contoh project lainnya (ganti sesuai nanti).",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Lihat Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
