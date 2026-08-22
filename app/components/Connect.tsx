"use client";

import { personalInfo } from "../data";
import { motion } from "framer-motion";

export default function Connect() {
  return (
    <section id="connect" className="py-20 px-4 bg-cream/50 dark:bg-deep-slate/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            Let's Build Something Meaningful
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I'm interested in software engineering, AI, and automation opportunities where thoughtful technology can make a meaningful impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group px-8 py-4 bg-warm-brown text-white rounded-xl hover:bg-[#6B4F10] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <p className="font-medium">Email</p>
                <p className="text-xs opacity-80">I reply within 24 hours</p>
              </div>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-terracotta text-white rounded-xl hover:bg-[#A06030] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="text-2xl">🔗</span>
              <div className="text-left">
                <p className="font-medium">LinkedIn</p>
                <p className="text-xs opacity-80">Connect professionally</p>
              </div>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gray-200 dark:bg-gray-700 text-dark-brown dark:text-cream rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="text-2xl">🐙</span>
              <div className="text-left">
                <p className="font-medium">GitHub</p>
                <p className="text-xs opacity-80">See my code</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}