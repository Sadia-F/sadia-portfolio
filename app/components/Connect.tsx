"use client";

import { personalInfo } from "../data";
import { motion } from "framer-motion";

export default function Connect() {
  return (
    <section id="connect" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I'm interested in software engineering, AI, and automation opportunities where thoughtful technology can make a meaningful impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 bg-warm-brown text-white rounded-lg hover:bg-[#6B4F10] transition-colors"
            >
              📧 Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-terracotta text-white rounded-lg hover:bg-[#A06030] transition-colors"
            >
              🔗 LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-dark-brown dark:text-cream rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              🐙 GitHub
            </a>
          </div>

          <p className="text-sm text-gray-400 dark:text-gray-500 mt-6">
            Or use the chat below to ask me anything! 💬
          </p>
        </motion.div>
      </div>
    </section>
  );
}