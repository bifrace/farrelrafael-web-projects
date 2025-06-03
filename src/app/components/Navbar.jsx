"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
        <div className="container mx-auto px-1 py-3 flex justify-between items-center">
          {/* Brand */}
          <Link href="/" passHref>
            <div className="flex items-center gap-2 text-gray-800 dark:text-white cursor-pointer hover:scale-110 transition-transform">
              <Home className="w-6 h-6" />
              <span className="text-xl font-bold">MyPortfolio</span>
            </div>
          </Link>

          {/* Navigation Links (visible on medium and up) */}
          <div className="hidden md:flex gap-6 text-gray-800 dark:text-white font-medium items-center ">
            <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>

          {/* Right-side icons */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              title="Toggle Theme"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Sidebar Menu Button (mobile only) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-800 dark:text-white md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar component */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
