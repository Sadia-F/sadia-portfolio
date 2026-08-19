"use client";

import { skills } from "../data";
import { motion } from "framer-motion";

const iconMap: Record<string, string> = {
  Python: "🐍",
  Java: "☕",
  TypeScript: "🟦",
  HTML: "🌐",
  CSS: "🎨",
  SQL: "🗄️",
  "REST APIs": "🔗",
  Flask: "🌶️",
  "Data Pipelines": "📊",
  FastAPI: "⚡",
  MySQL: "🐬",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
  Supabase: "🔥",
  Git: "📦",
  GitHub: "🐙",
  Docker: "🐳",
  Vercel: "⚡",
  "VS Code": "💻",
  LLMs: "🤖",
  "Prompt Engineering": "✍️",
  "Google Gemini": "🧠",
  "Computer Vision": "👁️",
};

const categoryIcons: Record<string, string> = {
  languages: "💻",
  backend: "⚙️",
  databases: "🗄️",
  tools: "🛠️",
  aiMl: "🤖",
};

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 px-4 bg-cream dark:bg-deep-slate">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            🛠️ Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I work with — categorized by domain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md"
            >
              <h3 className="text-sm font-bold text-warm-brown dark:text-terracotta mb-3 text-center uppercase tracking-wide">
                {categoryIcons[category]} {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all flex items-center gap-1"
                  >
                    {iconMap[skill] && <span>{iconMap[skill]}</span>}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}