// src/pages/portfolio.js
import Navbar from "src\app\components\Navbar.jsx";
import ProjectCard from "src\app\components\Projectcard.jsx";
import Hero from "src\app\components\Hero.jsx";
import Projects from "src\app\components\Projects.jsx";

const projects = [
  {
    id: 1,
    title: "Secure Web App",
    description: "Aplikasi dengan proteksi XSS dan SQLi.",
    tags: ["React", "Node.js", "Security"],
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Generator",
    description: "Template ini sendiri!",
    tags: ["Next.js", "Tailwind"],
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Projects /> 
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Koleksi project saya dengan fitur keamanan terbaik.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}