// src/pages/portfolio.js
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/Projectcard";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import BackgroundEffect from "@/app/components/BackgroundEffect";

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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Background GIF */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <BackgroundEffect />
        <Hero />
      </section>

      {/* Projectcard Section with dark background */}
      <section id="projects" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
          <p className="text-center text-gray-300 mb-10">
            Koleksi project saya dengan fitur keamanan terbaik.
            </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
