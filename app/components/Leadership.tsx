"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { leadership } from "../data";

export default function Leadership() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="leadership" className="bg-white px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-dark-brown dark:text-cream">Leadership</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-warm-brown to-sunset" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">Select a role to learn more about the impact behind it.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {leadership.map((item, index) => {
            const isOpen = openIndex === index;
            const detailId = `leadership-detail-${index}`;

            return (
              <motion.article key={`${item.role}-${item.organization}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.05 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl bg-cream shadow-md transition-shadow hover:shadow-lg dark:bg-deep-slate">
                <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={detailId} className="flex w-full items-start justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-brown focus-visible:ring-inset">
                  <span>
                    <span className="block text-lg font-bold text-dark-brown dark:text-cream">{item.role}</span>
                    <span className="mt-1 block text-base font-semibold text-warm-brown dark:text-terracotta">{item.organization}</span>
                    <span className="mt-2 block text-sm font-medium text-gray-500 dark:text-gray-400">{item.duration}</span>
                  </span>
                  <span className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-warm-brown transition-transform dark:bg-gray-800 dark:text-terracotta ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" /></svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={detailId} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <ul className="space-y-3 border-t border-warm-brown/10 px-6 pb-6 pt-5 dark:border-white/10">
                        {item.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-base leading-7 text-gray-700 dark:text-gray-300"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm-brown dark:bg-terracotta" aria-hidden="true" />{achievement}</li>)}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
