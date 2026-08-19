"use client";

import { useState } from "react";
import { skills } from "../data";
import { motion, AnimatePresence } from "framer-motion";

type SkillCategory = "all" | "languages" | "backend" | "databases" | "tools" | "aiMl";

const categoryLabels: Record<SkillCategory, string> = {
  all: "All",
  languages: "Languages",
  backend: "Backend",
  databases: "Databases",
  tools: "Tools",
  aiMl: "AI/ML",
};

const categoryColors: Record<SkillCategory, string> = {
  all: "bg-warm-brown text-white",
  languages: "bg-blue-500 text-white",
  backend: "bg-green-500 text-white",
  databases: "bg-purple-500 text-white",
  tools: "bg-orange-500 text-white",
  aiMl: "bg-pink-500 text-white",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return [
        ...skills.languages.map(skill => ({ name: skill, category: "languages" as const })),
        ...skills.backend.map(skill => ({ name: skill, category: "backend" as const })),
        ...skills.databases.map(skill => ({ name: skill, category: "databases" as const })),
        ...skills.tools.map(skill => ({ name: skill, category: "tools" as const })),
        ...skills.aiMl.map(skill => ({ name: skill, category: "aiMl" as const })),
      ];
    }
    return skills[activeCategory].map(skill => ({
      name: skill,
      category: activeCategory,
    }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 px-4 bg-cream dark:bg-deep-slate">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            🛠️ Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with — filter by category to explore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {(Object.keys(categoryLabels) as SkillCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? categoryColors[category]
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filteredSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-sm font-medium"
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6"
        >
          {filteredSkills.length} skills {activeCategory !== "all" && `in ${categoryLabels[activeCategory]}`}
        </motion.p>
      </div>
    </section>
  );
}