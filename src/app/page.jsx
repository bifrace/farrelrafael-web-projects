"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/Projectcard";
import Hero from "@/app/components/Hero";
import BackgroundEffect from "@/app/components/BackgroundEffect";
import Marquetag from "@/app/components/Marquetag";
import Worldmap from "@/app/components/Worldmap";
import Footer from "@/app/components/Footer";
import Faq from "@/app/components/Faq";

const allProjects = [
  {
    id: 1,
    title: "Secure Web App",
    description: "Aplikasi dengan proteksi XSS dan SQLi.",
    tags: ["React", "Node.js", "Security"],
    status: "done",
    link: "#",
  },
  {
    id: 2,
    title: "Repository Secure-WEB",
    description: "On Going",
    tags: ["Next.js", "Tailwind"],
    status: "on-going",
    link: "https://github.com/bifrace/self-secure-portofolio",
  },
  {
    id: 3,
    title: "UI Design System",
    description: "Membuat komponen UI reusable.",
    tags: ["Figma", "Design", "UI"],
    status: "on-project",
    link: "#",
  },
];

const allTags = Array.from(new Set(allProjects.flatMap(p => p.tags)));

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredProjects = selectedTag
    ? allProjects.filter((p) => p.tags.includes(selectedTag))
    : allProjects;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Marquetag />

      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden ">
        <BackgroundEffect />
        <Hero />
      </section>

      <section id="projects" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
          <p className="text-center text-gray-300 mb-10">
            Koleksi project saya dengan fitur keamanan terbaik.
          </p>

          {/* Filter Tag */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-800 text-white border-gray-600 hover:bg-blue-700"
                }`}
                onClick={() =>
                  setSelectedTag(selectedTag === tag ? null : tag)
                }
              >
                {tag}
              </button>
            ))}
            {selectedTag && (
              <button
                className="ml-2 px-4 py-1 rounded-full border text-sm font-medium bg-red-600 text-white border-red-600"
                onClick={() => setSelectedTag(null)}
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-black text-green-400 border-t border-gray-700 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8 animate-pulse font-mono">
            &gt; Frequently Asked Questions
          </h2>
          <Faq />
        </div>
      </section>

      <div className="border-t border-gray-700" />

      <Footer />
    </div>
  );
}
