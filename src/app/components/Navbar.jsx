// src/components/Navbar.jsx
"use client";
  
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Efek untuk dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-gray-800 dark:text-white cursor-pointer">
            MyPortfolio
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/portfolio">
            <span className="text-gray-600 dark:text-gray-200 hover:text-blue-500 cursor-pointer">
              Portfolio
            </span>
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}