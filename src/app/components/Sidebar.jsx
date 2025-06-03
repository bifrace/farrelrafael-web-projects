"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Instagram,
  Twitter,
  MessageCircleMore,
  Github,
  Home,
} from "lucide-react";

export default function Sidebar({ open, onClose }) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "sidebar-overlay") onClose();
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <>
      {/* Blur overlay */}
      {open && (
        <div
          id="sidebar-overlay"
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-700 dark:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-6 text-gray-800 dark:text-white">
          {/* Navigasi utama */}
          <Link href="/" onClick={onClose}>Home</Link>
          <Link href="#projects" onClick={onClose}>Projects</Link>
          <Link href="#about" onClick={onClose}>About</Link>
          <Link href="#contact" onClick={onClose}>Contact</Link>

          {/* Garis pemisah */}
          <hr className="border-gray-400 dark:border-gray-600 my-2" />

          {/* Social media */}
          <div className="flex space-x-4 pt-1">
            <Link href="https://github.com/bifrace" target="_blank">
              <Github className="hover:text-gray-500" />
            </Link>
            <Link href="https://www.instagram.com/vahnellan/" target="_blank">
              <Instagram className="hover:text-pink-500" />
            </Link>
            <Link href="https://x.com/Farrel0202" target="_blank">
              <Twitter className="hover:text-sky-500" />
            </Link>
            <Link href="https://discord.com" target="_blank">
              <MessageCircleMore className="hover:text-indigo-500" />
            </Link>
          </div>
        </nav>
      </aside>
      
    </>
  );
}
