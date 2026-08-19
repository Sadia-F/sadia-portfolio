"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandItem {
  id: string;
  label: string;
  icon: string;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: CommandItem[] = [
    { id: "home", label: "Home", icon: "🏠", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { id: "about", label: "About", icon: "👤", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "experience", label: "Experience", icon: "💼", action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "projects", label: "Projects", icon: "📁", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "skills", label: "Skills", icon: "🛠️", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "education", label: "Education", icon: "🎓", action: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "photography", label: "Photography", icon: "📸", action: () => document.getElementById("photography")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "chatbot", label: "Chat with AI", icon: "💬", action: () => document.getElementById("chatbot")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "connect", label: "Connect", icon: "📬", action: () => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" }) },
    { id: "resume", label: "Download Resume", icon: "📄", action: () => window.open("/resume.pdf", "_blank") },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
        setSearch("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowDown" && isOpen) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      }
      if (e.key === "ArrowUp" && isOpen) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }
      if (e.key === "Enter" && isOpen && filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-3">
                <span className="text-gray-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200"
                  autoFocus
                />
                <kbd className="text-xs text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  ⌘K
                </kbd>
              </div>

              <div className="mt-3 max-h-64 overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-4 text-sm">
                    No results found
                  </p>
                ) : (
                  filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={() => {
                        cmd.action();
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        index === selectedIndex
                          ? "bg-warm-brown/10 dark:bg-terracotta/20 text-warm-brown dark:text-terracotta"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }`}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <span>{cmd.icon}</span>
                      <span>{cmd.label}</span>
                    </button>
                  ))
                )}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3 flex justify-between text-xs text-gray-400 dark:text-gray-500">
                <span>⌘K to open</span>
                <span>↵ to select</span>
                <span>esc to close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}