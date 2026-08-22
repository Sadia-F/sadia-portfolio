"use client";

import { personalInfo } from "../data";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Photography data is embedded directly since it's just for this section
  const photographyIntro = "Photography taught me to see the world differently. It's not just about taking pictures — it's about patience, timing, and finding beauty in everyday moments. Just like coding, it's about attention to detail and creating something meaningful.";
  
  const photos = [
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpg"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-cream/50 dark:bg-deep-slate/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.about}
            </p>
            <div className="mt-6 space-y-3">
              {personalInfo.funFacts.map((fact, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-warm-brown dark:text-terracotta text-xl">{fact.slice(0, 2)}</span>
                  <span>{fact.slice(3)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Photography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📸</span>
                <h3 className="text-xl font-bold text-dark-brown dark:text-cream">
                  Why Photography Matters to Me
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {photographyIntro}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {photos.slice(0, 2).map((photo, index) => (
                  <div key={index} className="rounded-lg overflow-hidden aspect-square">
                    <img
                      src={photo}
                      alt={`Sunset ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}