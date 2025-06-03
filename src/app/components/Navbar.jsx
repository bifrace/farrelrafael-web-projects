"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Menu } from "lucide-react";
import Sidebar from "@/app/components/Sidebar";
import Marquetag from "@/app/components/Marquetag";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand */}
          <Link href="/" passHref>
            <div className="flex items-center gap-2 text-gray-800 dark:text-white cursor-pointer hover:scale-110 transition-transform">
              <Home className="w-6 h-6" />
              <span className="text-xl font-bold">MyPortfolio</span>
            </div>
          </Link>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
          <Marquetag />
          </div>

          
          {/* Right-side icons */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              title="Toggle Theme"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Sidebar Button (always visible on all screen sizes) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-800 dark:text-white"
              title="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
