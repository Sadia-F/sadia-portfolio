"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedRole = selectedIndex === null ? null : experience[selectedIndex];

  return (
    <section id="experience" className="bg-white px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-dark-brown dark:text-cream">Experience</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-warm-brown to-sunset" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">Select a role to see the full story.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((exp, index) => (
            <motion.button key={`${exp.company}-${exp.role}`} type="button" onClick={() => setSelectedIndex(index)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.06 }} viewport={{ once: true }} className={`flex min-h-48 flex-col justify-between rounded-2xl border-l-4 bg-cream p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:bg-deep-slate ${exp.isFavorite ? "border-sunset" : "border-warm-brown"}`}>
              <span>
                <span className="block text-xl font-bold text-dark-brown dark:text-cream">{exp.role}</span>
                <span className="mt-2 block text-base font-semibold text-warm-brown dark:text-terracotta">{exp.company}</span>
                <span className="mt-3 block text-sm font-medium text-gray-500 dark:text-gray-400">{exp.duration}</span>
              </span>
              <span className="mt-6 text-sm font-semibold uppercase tracking-wide text-warm-brown dark:text-terracotta">View role details</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRole && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-brown/55 p-4 backdrop-blur-sm" onClick={() => setSelectedIndex(null)}>
            <motion.article initial={{ opacity: 0, scale: 0.8, rotateY: -90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.82, rotateY: 90 }} transition={{ duration: 0.45, ease: "easeOut" }} style={{ transformStyle: "preserve-3d" }} onClick={(event) => event.stopPropagation()} className={`flex w-full max-w-4xl flex-col overflow-y-auto rounded-3xl border-l-4 bg-cream shadow-2xl dark:bg-deep-slate ${selectedRole.isFavorite ? "border-sunset" : "border-warm-brown"} max-h-[calc(100dvh-2rem)]`}>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-warm-brown dark:text-terracotta">Experience</p>
                    <h3 className="mt-2 text-2xl font-bold text-dark-brown dark:text-cream sm:text-3xl">{selectedRole.role}</h3>
                    <p className="mt-2 text-lg font-semibold text-warm-brown dark:text-terracotta">{selectedRole.company}</p>
                    <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">{selectedRole.duration}</p>
                  </div>
                  <button type="button" onClick={() => setSelectedIndex(null)} aria-label="Close role details" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl text-warm-brown shadow-sm transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:bg-gray-800 dark:text-terracotta dark:hover:bg-gray-700">×</button>
                </div>

                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {selectedRole.achievements.map((achievement) => <li key={achievement} className="rounded-xl border border-warm-brown/10 bg-white/70 p-4 text-[15px] leading-6 text-gray-700 dark:border-white/10 dark:bg-gray-800/70 dark:text-gray-300"><span className="font-semibold text-warm-brown dark:text-terracotta">Impact: </span>{achievement}</li>)}
                </ul>

                {selectedRole.technologies && (
                  <div className="mt-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Tools used</p>
                    <div className="mt-3 flex flex-wrap gap-2">{selectedRole.technologies.map((tech) => <span key={tech} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">{tech}</span>)}</div>
                  </div>
                )}

                {selectedRole.isFavorite && selectedRole.favoriteReason && <p className="mt-6 rounded-xl border border-sunset/25 bg-sunset/10 p-4 text-base leading-7 text-gray-700 dark:bg-sunset/15 dark:text-gray-300"><span className="font-semibold text-sunset">Why this work mattered: </span>{selectedRole.favoriteReason}</p>}
              </div>
              <button type="button" onClick={() => setSelectedIndex(null)} className="border-t border-warm-brown/10 px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide text-warm-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:border-white/10 dark:text-terracotta">Back to cards</button>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
