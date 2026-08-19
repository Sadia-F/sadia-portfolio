"use client";

import { leadership } from "../data";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            Leadership
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-cream dark:bg-deep-slate rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-dark-brown dark:text-cream">
                {item.role}
              </h3>
              <p className="text-warm-brown dark:text-terracotta font-medium">
                {item.organization}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {item.duration}
              </p>
              <ul className="space-y-1">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-warm-brown dark:text-terracotta mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}