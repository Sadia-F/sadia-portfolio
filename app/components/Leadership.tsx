"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { leadership } from "../data";

export default function Leadership() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="leadership" className="bg-white px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-dark-brown dark:text-cream">Leadership</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-warm-brown to-sunset" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">Tap a card to flip it and learn about the impact behind the role.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((item, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <motion.article key={`${item.role}-${item.organization}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.05 }} viewport={{ once: true }} className="min-h-[300px] [perspective:1200px]">
                <motion.div animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.55, ease: "easeInOut" }} style={{ transformStyle: "preserve-3d" }} className="relative h-full min-h-[300px]">
                  <button type="button" onClick={() => setFlippedIndex(isFlipped ? null : index)} aria-label={`Show details for ${item.role} at ${item.organization}`} style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} className="absolute inset-0 flex w-full flex-col justify-between overflow-hidden rounded-2xl bg-cream p-7 text-left shadow-md transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:bg-deep-slate">
                    <span>
                      <span className="block text-xl font-bold text-dark-brown dark:text-cream">{item.role}</span>
                      <span className="mt-2 block text-base font-semibold text-warm-brown dark:text-terracotta">{item.organization}</span>
                      <span className="mt-3 block text-sm font-medium text-gray-500 dark:text-gray-400">{item.duration}</span>
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-warm-brown dark:text-terracotta">View role details</span>
                  </button>

                  <div style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }} className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl bg-cream shadow-md dark:bg-deep-slate">
                    <div className="flex-1 overflow-y-auto p-6">
                      <p className="text-sm font-bold uppercase tracking-wide text-warm-brown dark:text-terracotta">{item.role}</p>
                      <ul className="mt-4 space-y-3">
                        {item.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-base leading-7 text-gray-700 dark:text-gray-300"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm-brown dark:bg-terracotta" aria-hidden="true" />{achievement}</li>)}
                      </ul>
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
