"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    document.title = "404 | Sadia Ferdous";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cream dark:bg-deep-slate">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-warm-brown dark:text-terracotta mb-4">
          404
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          This page seems to have wandered off. Let me get you back on track.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-warm-brown dark:bg-terracotta text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to Home
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 border-2 border-warm-brown dark:border-terracotta text-warm-brown dark:text-terracotta rounded-lg hover:bg-warm-brown hover:text-white dark:hover:bg-terracotta transition-colors"
          >
            Refresh
          </button>
        </div>
      </motion.div>
    </div>
  );
}
