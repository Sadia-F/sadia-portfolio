"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { title: "Languages", skills: ["Python", "Java", "TypeScript", "SQL", "HTML", "CSS"] },
  { title: "Backend & APIs", skills: ["Flask", "FastAPI", "REST API Development", "API Integration", "SQLAlchemy", "Data Pipelines"] },
  { title: "Databases & Cloud", skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Supabase", "Vercel"] },
  { title: "Tools & Practices", skills: ["Git & GitHub", "Docker", "PWA Development", "System Design", "Testing", "AI Pipeline Development"] },
];

export default function TechStack() {
  return (
    <section id="techstack" className="bg-white px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-dark-brown dark:text-cream">Tech Stack & Skills</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-warm-brown to-sunset" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">A focused set of technologies and practices I use to build reliable products.</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.06 }} viewport={{ once: true }} className="rounded-2xl border border-warm-brown/10 bg-cream p-6 shadow-sm dark:border-white/10 dark:bg-deep-slate">
              <h3 className="text-xl font-bold text-dark-brown dark:text-cream">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => <span key={skill} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
