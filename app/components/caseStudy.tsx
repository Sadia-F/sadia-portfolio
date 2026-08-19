"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface CaseStudyProps {
  project: {
    title: string;
    description: string;
    problem: string;
    solution: string;
    impact: string[];
    technologies: string[];
    github: string;
    image?: string;
    learnings?: string[];
  };
  isOpen: boolean;
  onToggle: () => void;
}

export default function CaseStudy({ project, isOpen, onToggle }: CaseStudyProps) {
  return (
    <motion.div
      layout
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-4"
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div>
          <h3 className="text-xl font-bold text-dark-brown dark:text-cream">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <span className="text-2xl text-warm-brown dark:text-terracotta">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Content */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6 space-y-4"
        >
          {/* Problem */}
          <div>
            <h4 className="text-sm font-bold text-warm-brown dark:text-terracotta uppercase tracking-wider">
              The Problem
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-1">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-sm font-bold text-warm-brown dark:text-terracotta uppercase tracking-wider">
              The Solution
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-1">{project.solution}</p>
          </div>

          {/* Impact */}
          <div>
            <h4 className="text-sm font-bold text-warm-brown dark:text-terracotta uppercase tracking-wider">
              The Impact
            </h4>
            <ul className="mt-1 space-y-1">
              {project.impact.map((item, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-warm-brown dark:text-terracotta">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          {project.learnings && (
            <div>
              <h4 className="text-sm font-bold text-warm-brown dark:text-terracotta uppercase tracking-wider">
                What I Learned
              </h4>
              <ul className="mt-1 space-y-1">
                {project.learnings.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-warm-brown dark:text-terracotta">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-warm-brown dark:text-terracotta hover:underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}