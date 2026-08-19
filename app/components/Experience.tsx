"use client";

import { experience } from "../data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            Experience & Leadership
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-cream dark:bg-deep-slate rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 ${
                exp.isFavorite ? "border-sunset" : "border-warm-brown"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dark-brown dark:text-cream">
                    {exp.role}
                  </h3>
                  <p className="text-warm-brown dark:text-terracotta font-medium">
                    {exp.company}
                  </p>
                  {exp.isFavorite && (
                    <span className="inline-block mt-1 text-xs font-medium bg-sunset/20 text-sunset dark:bg-sunset/30 px-3 py-1 rounded-full">
                      ⭐ Favorite Project
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-warm-brown dark:text-terracotta mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {exp.isFavorite && exp.favoriteReason && (
                <div className="mt-4 p-4 bg-sunset/10 dark:bg-sunset/20 rounded-lg border border-sunset/20">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium text-sunset">Why I loved this:</span>{" "}
                    {exp.favoriteReason}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}