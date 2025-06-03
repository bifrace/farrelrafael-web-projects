// src/pages/portfolio.js
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/Projectcard";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import BackgroundEffect from "@/app/components/BackgroundEffect";
import Marquetag from "@/app/components/Marquetag";
import Worldmap from "@/app/components/Worldmap";

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
    title: "Repository Secure-WEB",
    description: "On Going",
    tags: ["Next.js", "Tailwind"],
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Marquetag />

      {/* Hero Section with Background GIF */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto px-6 text-center">
        <BackgroundEffect />
        <Hero />

      </section>

      <section id="about" className="bg-gray-100 dark:bg-gray-900 py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      Saya adalah seorang web developer yang juga tertarik dalam bidang keamanan siber.
      Fokus saya adalah membuat aplikasi web yang aman, modern, dan cepat.
    </p>
  </div>
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
