"use client";

import Link from "next/link";
import {
  Mail,
  Instagram,
  Linkedin,
  Github,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <footer className="bg-[#0f0f0f] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-12">

        {/* About Me */}
        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-4 text-white">About Me</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            I'm Farrel Rafael — a web developer and cybersecurity learner with a passion for crafting secure, elegant websites.
            Focused on modern, responsive, and safe user experiences in every line of code I write.
          </p>
        </div>

        {/* Navigation */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/#about" className="flex items-center gap-2 hover:text-white transition">
                <ChevronRight className="w-4 h-4" /> About
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="flex items-center gap-2 hover:text-white transition">
                <ChevronRight className="w-4 h-4" /> Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="flex items-center gap-2 hover:text-white transition">
                <ChevronRight className="w-4 h-4" /> Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="flex items-center gap-2 hover:text-white transition">
                <ChevronRight className="w-4 h-4" /> FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
          <p className="text-sm mb-3 text-gray-400">
            Reach out via email or find me on socials:
          </p>
          <div className="flex items-center gap-5 mt-2">
            <a href="mailto://farrelrafael123@gmail.com" className="hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/bifrace" target="_blank" className="hover:text-white transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/farrel-rafael-bifrace02/" target="_blank" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/vahnellan/" target="_blank" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center pt-6 text-sm text-gray-500" data-aos="fade-up" data-aos-delay="500">
        &copy; {new Date().getFullYear()} Farrel Rafael. Built with 💻 & 🔒 — All rights reserved.
      </div>
    </footer>
  );
}
