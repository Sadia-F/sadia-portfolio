"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, techStack } from "../data";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "project" | "skill" | "section";
  href: string;
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search projects
    projects.forEach((project) => {
      if (
        project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery))
      ) {
        results.push({
          id: `project-${project.title}`,
          title: project.title,
          description: project.description,
          type: "project",
          href: "#projects",
        });
      }
    });

    // Search skills
    Object.entries(techStack).forEach(([category, data]) => {
      data.skills.forEach((skill: { name: string; icon: string }) => {
        if (
          skill.name.toLowerCase().includes(searchQuery) ||
          category.toLowerCase().includes(searchQuery)
        ) {
          results.push({
            id: `skill-${skill.name}`,
            title: skill.name,
            description: `Category: ${category}`,
            type: "skill",
            href: "#techstack",
          });
        }
      });
    });

    // Search sections
    const sections = [
      { id: "about", title: "About", description: "Learn about me" },
      { id: "experience", title: "Experience", description: "My work experience" },
      { id: "projects", title: "Projects", description: "My projects" },
      { id: "techstack", title: "Tech Stack", description: "My skills" },
      { id: "connect", title: "Contact", description: "Get in touch" },
    ];

    sections.forEach((section) => {
      if (
        section.title.toLowerCase().includes(searchQuery) ||
        section.description.toLowerCase().includes(searchQuery)
      ) {
        results.push({
          id: `section-${section.id}`,
          title: section.title,
          description: section.description,
          type: "section",
          href: `#${section.id}`,
        });
      }
    });

    setResults(results.slice(0, 8));
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleResultClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects, skills, sections..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200 text-lg"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="p-4 max-h-[60vh] overflow-y-auto">
              {results.length === 0 && query.length > 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                  No results found for "{query}"
                </p>
              )}
              {results.length === 0 && query.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                  Start typing to search...
                </p>
              )}
              <div className="space-y-2">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result.href)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-start gap-3"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {result.title}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            result.type === "project"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                              : result.type === "skill"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                          }`}
                        >
                          {result.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {result.description}
                      </p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}