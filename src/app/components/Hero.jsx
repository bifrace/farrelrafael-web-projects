"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundEffect from "@/app/components/BackgroundEffect";

export default function Hero() {
  return (
    
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      
      {/* Background Effect */}
      <BackgroundEffect />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Farrel Rafael
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
      >
        Web Developer & Cybersecurity Learner passionate about building secure and elegant web apps.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="#projects">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Lihat Project Saya
          </button>
        </Link>
      </motion.div>
    </section>
  );
}