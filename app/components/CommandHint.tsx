"use client";

import { motion } from "framer-motion";

export default function CommandHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
    >
      <span>Press</span>
      <kbd className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300 font-mono text-xs">
        ⌘K
      </kbd>
      <span>to navigate</span>
    </motion.div>
  );
}