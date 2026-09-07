"use client";

import { personalInfo, photography } from "../data";
import { motion } from "framer-motion";

const highlights = [
  { icon: "🎓", label: "NYIT", value: "B.S. Computer Science, AI Concentration" },
  { icon: "📍", label: personalInfo.location, value: "Open to relocation & remote" },
  { icon: "💡", label: "Focus", value: "Backend, AI & Software Engineering" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-cream/50 dark:bg-deep-slate/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Intro */}
            <div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.about}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <p className="text-2xl mb-1">{item.icon}</p>
                  <p className="font-semibold text-dark-brown dark:text-cream text-sm">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Fun Facts */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-3">
                Beyond the Code
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/70 dark:bg-gray-800/70 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 text-sm shadow-sm"
                  >
                    <span className="text-xl shrink-0">{fact.slice(0, 2)}</span>
                    <span className="leading-snug">{fact.slice(3)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Photo + Photography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {personalInfo.photo && (
              <div className="rounded-2xl p-1.5 bg-gradient-to-br from-warm-brown to-sunset shadow-lg">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={personalInfo.photo}
                    alt={`${personalInfo.name} — headshot`}
                    className="w-full object-cover aspect-square"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📸</span>
                <div>
                  <h3 className="text-xl font-bold text-dark-brown dark:text-cream">
                    Photographer
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Sunsets, light & stories</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {personalInfo.photographyIntro}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {photography.photos.slice(0, 2).map((photo, index) => (
                  <div key={index} className="rounded-lg overflow-hidden aspect-square group">
                    <img
                      src={photo}
                      alt={`Sunset ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}