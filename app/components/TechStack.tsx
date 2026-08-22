"use client";

import { techStack, skills } from "../data";
import { motion } from "framer-motion";
import Image from "next/image";

// CDN Logo URLs (reliable sources from devicon)
const logoURLs: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
};

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            🛠️ Tech Stack & Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I work with — shown by proficiency level.
          </p>
        </motion.div>

        {/* Tech Stack with Percentage Bars */}
        <div className="space-y-4 mb-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {/* Logo from CDN */}
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src={logoURLs[tech.name] || tech.logo}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="object-contain dark:invert"
                  unoptimized
                />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-24">
                {tech.name}
              </span>
              <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-warm-brown to-sunset rounded-full"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12 text-right">
                {tech.level}%
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skills — No Percentages */}
        <div>
          <h3 className="text-2xl font-bold text-dark-brown dark:text-cream mb-4 text-center">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-cream dark:bg-deep-slate text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium hover:shadow-md transition-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}