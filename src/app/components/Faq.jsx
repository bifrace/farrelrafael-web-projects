// src/components/Faq.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Apa itu Secure Web App?",
    answer:
      "Ini adalah aplikasi web yang dirancang dengan praktik keamanan terbaik, seperti perlindungan terhadap XSS dan SQL Injection.",
  },
  {
    question: "Teknologi apa yang digunakan?",
    answer:
      "Stack teknologi antara lain Next.js, Tailwind CSS, dan Node.js dengan pendekatan modular dan UI modern.",
  },
  {
    question: "Apa arti status project seperti 'on-going' dan 'done'?",
    answer:
      "'on-going' artinya sedang dalam tahap awal, 'on-project' sedang dikembangkan aktif, dan 'done' berarti selesai dan siap pakai.",
  },
  {
    question: "Apakah saya bisa kontribusi di project ini?",
    answer:
      "Tentu! Kamu bisa cek GitHub masing-masing project dan memberikan pull request atau ide.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-black text-green-400 py-16 font-mono">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl text-center mb-8 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-green-400">
          
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-green-600 rounded-md">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-4 py-3 bg-green-900 hover:bg-green-800 transition-colors"
              >
                <span className="text-lg">$ {faq.question}</span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 py-2 bg-black border-t border-green-600 text-green-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
