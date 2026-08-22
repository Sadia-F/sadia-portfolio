"use client";

import { education, awards } from "../data";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-cream dark:bg-deep-slate">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            🎓 Education & Awards
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
        </motion.div>

        {/* Education Card */}
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT COLUMN */}
              <div>
                <h3 className="text-xl font-bold text-dark-brown dark:text-cream">
                  {edu.school}
                </h3>
                <p className="text-warm-brown dark:text-terracotta font-medium">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.concentration}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Expected Graduation: {edu.expectedGraduation}
                </p>
                {edu.gpa && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    GPA: {edu.gpa}
                  </p>
                )}

                {edu.honors && (
                  <div className="mb-3 mt-3">
                    <p className="text-sm font-medium text-dark-brown dark:text-cream">Honors:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {edu.honors.map((honor, i) => (
                        <li key={i}>{honor}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.certifications && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-dark-brown dark:text-cream">Certifications:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {edu.certifications.map((cert, i) => (
                        <li key={i}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.activities && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-dark-brown dark:text-cream">Activities:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {edu.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN — Coursework */}
              <div>
                <p className="text-sm font-medium text-dark-brown dark:text-cream">Relevant Coursework:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-dark-brown dark:text-cream mb-4 text-center">
            🏆 Awards & Recognitions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-cream dark:bg-deep-slate rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{award.icon}</span>
                <div>
                  <p className="font-medium text-dark-brown dark:text-cream text-sm">
                    {award.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {award.organization} • {award.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}