"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Menu,
  X,
  Instagram,
  Twitter,
  MessageCircleMore,
} from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Kiri: Logo Home */}
        <Link href="/" passHref>
          <div className="flex items-center gap-2 text-gray-800 dark:text-white cursor-pointer hover:scale-110 transition-transform">
            <Home className="w-6 h-6" />
            <span className="text-xl font-bold">MyPortfolio</span>
          </div>
        </Link>

        {/* Kanan: Dark mode toggle & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 z-40">
          <div className="flex flex-col space-y-4">
            <Link href="#projects">
              <span className="text-gray-800 dark:text-white hover:underline cursor-pointer">Projects</span>
            </Link>
            <Link href="#about">
              <span className="text-gray-800 dark:text-white hover:underline cursor-pointer">About</span>
            </Link>
            <Link href="#contact">
              <span className="text-gray-800 dark:text-white hover:underline cursor-pointer">Contact</span>
            </Link>
            <div className="flex space-x-4 pt-2">
              <Link href="https://www.instagram.com/vahnellan/" target="_blank">
                <Instagram className="w-5 h-5 text-gray-800 dark:text-white hover:text-pink-500" />
              </Link>
              <Link href="https://x.com/Farrel0202" target="_blank">
                <Twitter className="w-5 h-5 text-gray-800 dark:text-white hover:text-sky-500" />
              </Link>
              <Link href="https://discord.com" target="_blank">
                <MessageCircleMore className="w-5 h-5 text-gray-800 dark:text-white hover:text-indigo-500" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
