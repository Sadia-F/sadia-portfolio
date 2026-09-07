"use client";

import { motion } from "framer-motion";

export default function FeaturedBadminton() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-warm-brown dark:text-terracotta font-medium text-sm uppercase tracking-wider">
            Featured Project
          </span>
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            NYIT Badminton Team Manager
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
        </motion.div>

        <div className="bg-cream dark:bg-deep-slate rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-brown dark:text-cream mb-4">
                The Problem
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I co-founded the NYIT Badminton Team, we were running the entire club on group chats and spreadsheets. Attendance was tracked by memory, matches were arranged by text, and there was no way to see who was improving or which practice time actually worked for the team.
              </p>

              <h3 className="text-2xl font-bold text-dark-brown dark:text-cream mt-6 mb-4">
                The Solution
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I built a full-stack Flask web app with SQLite that brings players, captains, and admins onto one platform — with live roster management, one-tap check-ins, attendance streaks, match scoring, tournament brackets with auto-advancement, performance radar charts, leaderboards, weekly MVP voting, availability heatmaps, and PWA support.
              </p>

              <h3 className="text-2xl font-bold text-dark-brown dark:text-cream mt-6 mb-4">
                The Impact
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-warm-brown dark:text-terracotta font-bold">✓</span>
                  <span>12 active team members organized on one platform</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-warm-brown dark:text-terracotta font-bold">✓</span>
                  <span>30 unit tests keeping every feature reliable</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-warm-brown dark:text-terracotta font-bold">✓</span>
                  <span>Tournament brackets that auto-advance winners</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col justify-center">
              <h4 className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Flask", "SQLite", "SQLAlchemy", "Jinja2", "Chart.js", "PWA"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Sadia-F/Badminton-webapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-warm-brown dark:text-terracotta hover:text-[#6B4F10] dark:hover:text-[#A06030] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}