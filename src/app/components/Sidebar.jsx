"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  X,
  Instagram,
  Twitter,
  MessageCircleMore,
  Github
} from "lucide-react";

export default function Sidebar({ open, onClose }) {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"></div>
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-700 dark:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-5 px-6 text-gray-800 dark:text-white">
          <Link href="/" onClick={onClose}>Home</Link>
          <Link href="#projects" onClick={onClose}>Projects</Link>
          <Link href="#about" onClick={onClose}>About</Link>
          <Link href="#contact" onClick={onClose}>Contact</Link>

          <hr className="border-gray-400 dark:border-gray-600 my-2" />

          {/* Socials */}
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
