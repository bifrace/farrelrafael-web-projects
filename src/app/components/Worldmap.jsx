"use client";

const phases = [
  {
    quarter: "Q1 2024",
    completed: true,
    items: [
      "Tentukan fitur utama",
      "Tentukan stack teknologi",
      "Desain wireframe (Figma/Whimsical)",
      "Setup repositori GitHub",
      "Struktur awal Next.js",
    ],
  },
  {
    quarter: "Q2 2024",
    completed: false,
    items: [
      "Landing Page + Hero",
      "Halaman Profil & Project",
      "Admin Panel (Login & CRUD)",
      "Contact Form + Validasi",
      "Dark/Light Mode",
    ],
  },
  {
    quarter: "Q3 2024",
    completed: false,
    items: [
      "Implementasi Keamanan (Helmet.js, XSS, Route Guard)",
      "Audit Form dan Input",
      "Simulasi XSS & SQLi",
      "Integrasi OWASP ZAP / Nikto",
    ],
  },
  {
    quarter: "Q4 2024",
    completed: false,
    items: [
      "Deployment ke Vercel / VPS",
      "Fitur Bonus: AI Resume Generator",
      "Blog & Dokumentasi",
      "Monetisasi (Gumroad)",
      "Publikasi ke GitHub & LinkedIn",
    ],
  },
];

export default function HorizontalRoadmap() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-3xl font-bold text-center text-yellow-700 dark:text-yellow-300 mb-12">
        🗺 Roadmap & Milestones
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10 relative">
        {phases.map((phase, idx) => (
          <div
            key={phase.quarter}
            className="relative bg-white dark:bg-gray-900 border border-yellow-300 dark:border-yellow-600 shadow-lg rounded-xl p-6 w-full md:w-1/4 text-sm"
          >
            {/* Timeline marker */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  phase.completed ? "bg-yellow-500" : "bg-yellow-300"
                }`}
              >
                {phase.completed ? "✔" : idx + 1}
              </div>
            </div>
            {/* Quarter title */}
            <h3 className="text-center text-lg font-bold text-yellow-600 dark:text-yellow-200 mb-4 mt-6">
              {phase.quarter}
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              {phase.items.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Timeline Line */}
        <div className="absolute top-5 md:top-8 left-0 right-0 h-1 bg-yellow-200 dark:bg-yellow-700 z-0 hidden md:block" />
      </div>
    </section>
  );
}
