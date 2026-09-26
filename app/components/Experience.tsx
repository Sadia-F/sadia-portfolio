"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="bg-white px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-dark-brown dark:text-cream">Experience</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-warm-brown to-sunset" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">Tap a card to flip it and see the work behind the role.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((exp, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <motion.article key={`${exp.company}-${exp.role}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.06 }} viewport={{ once: true }} className="min-h-[360px] [perspective:1200px]">
                <motion.div animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.55, ease: "easeInOut" }} style={{ transformStyle: "preserve-3d" }} className="relative h-full min-h-[360px]">
                  <button type="button" onClick={() => setFlippedIndex(isFlipped ? null : index)} aria-label={`Show details for ${exp.role} at ${exp.company}`} style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} className={`absolute inset-0 flex w-full flex-col justify-between overflow-hidden rounded-2xl border-l-4 bg-cream p-7 text-left shadow-md transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:bg-deep-slate ${exp.isFavorite ? "border-sunset" : "border-warm-brown"}`}>
                    <span>
                      <span className="block text-2xl font-bold text-dark-brown dark:text-cream">{exp.role}</span>
                      <span className="mt-2 block text-lg font-semibold text-warm-brown dark:text-terracotta">{exp.company}</span>
                      <span className="mt-3 block text-base text-gray-500 dark:text-gray-400">{exp.duration}</span>
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-warm-brown dark:text-terracotta">View role details</span>
                  </button>

                  <div style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }} className={`absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-l-4 bg-cream shadow-md dark:bg-deep-slate ${exp.isFavorite ? "border-sunset" : "border-warm-brown"}`}>
                    <div className="flex-1 overflow-y-auto p-6">
                      <p className="text-sm font-bold uppercase tracking-wide text-warm-brown dark:text-terracotta">{exp.role}</p>
                      <ul className="mt-4 space-y-3">
                        {exp.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-base leading-7 text-gray-700 dark:text-gray-300"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm-brown dark:bg-terracotta" aria-hidden="true" />{achievement}</li>)}
                      </ul>

                      {exp.technologies && (
                        <div className="mt-5">
                          <p className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Tools used</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => <span key={tech} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">{tech}</span>)}
                          </div>
                        </div>
                      )}

                      {exp.isFavorite && exp.favoriteReason && <p className="mt-5 rounded-xl border border-sunset/25 bg-sunset/10 p-4 text-base leading-7 text-gray-700 dark:bg-sunset/15 dark:text-gray-300"><span className="font-semibold text-sunset">Why this work mattered: </span>{exp.favoriteReason}</p>}
                    </div>
                    <button type="button" onClick={() => setFlippedIndex(null)} className="border-t border-warm-brown/10 px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-warm-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:border-white/10 dark:text-terracotta">Back to summary</button>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
