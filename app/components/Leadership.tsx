"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { leadership } from "../data";

export default function Leadership() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedRole = selectedIndex === null ? null : leadership[selectedIndex];

  return (
    <section id="leadership" className="bg-white px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-dark-brown dark:text-cream">Leadership</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-warm-brown to-sunset" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">Select a role to see the impact behind it.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((item, index) => (
            <motion.button key={`${item.role}-${item.organization}`} type="button" onClick={() => setSelectedIndex(index)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.05 }} viewport={{ once: true }} className="flex min-h-44 flex-col justify-between rounded-2xl bg-cream p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:bg-deep-slate">
              <span>
                <span className="block text-xl font-bold text-dark-brown dark:text-cream">{item.role}</span>
                <span className="mt-2 block text-base font-semibold text-warm-brown dark:text-terracotta">{item.organization}</span>
                <span className="mt-3 block text-sm font-medium text-gray-500 dark:text-gray-400">{item.duration}</span>
              </span>
              <span className="mt-6 text-sm font-semibold uppercase tracking-wide text-warm-brown dark:text-terracotta">View role details</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRole && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-brown/55 p-4 backdrop-blur-sm" onClick={() => setSelectedIndex(null)}>
            <motion.article initial={{ opacity: 0, scale: 0.8, rotateY: -90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.82, rotateY: 90 }} transition={{ duration: 0.45, ease: "easeOut" }} style={{ transformStyle: "preserve-3d" }} onClick={(event) => event.stopPropagation()} className="flex w-full max-w-3xl flex-col overflow-y-auto rounded-3xl bg-cream shadow-2xl dark:bg-deep-slate max-h-[calc(100dvh-2rem)]">
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-warm-brown dark:text-terracotta">Leadership</p>
                    <h3 className="mt-2 text-2xl font-bold text-dark-brown dark:text-cream sm:text-3xl">{selectedRole.role}</h3>
                    <p className="mt-2 text-lg font-semibold text-warm-brown dark:text-terracotta">{selectedRole.organization}</p>
                    <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">{selectedRole.duration}</p>
                  </div>
                  <button type="button" onClick={() => setSelectedIndex(null)} aria-label="Close role details" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl text-warm-brown shadow-sm transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:bg-gray-800 dark:text-terracotta dark:hover:bg-gray-700">×</button>
                </div>
                <ul className="mt-7 space-y-4">
                  {selectedRole.achievements.map((achievement) => <li key={achievement} className="rounded-xl border border-warm-brown/10 bg-white/70 p-5 text-base leading-7 text-gray-700 dark:border-white/10 dark:bg-gray-800/70 dark:text-gray-300">{achievement}</li>)}
                </ul>
              </div>
              <button type="button" onClick={() => setSelectedIndex(null)} className="border-t border-warm-brown/10 px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide text-warm-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown dark:border-white/10 dark:text-terracotta">Back to cards</button>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
