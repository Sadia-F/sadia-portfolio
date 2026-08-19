"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        // Using a free visitor counter API
        const response = await fetch(
          "https://api.countapi.xyz/hit/sadia-portfolio/visitors"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setVisitors(data.value);
        setLoading(false);
      } catch (err) {
        // Fallback to localStorage if API fails
        try {
          const stored = localStorage.getItem("visitorCount");
          if (stored) {
            setVisitors(parseInt(stored));
          } else {
            setVisitors(1);
            localStorage.setItem("visitorCount", "1");
          }
        } catch {
          setVisitors(0);
        }
        setError(true);
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <div className="w-4 h-4 border-2 border-warm-brown border-t-transparent rounded-full animate-spin" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <span className="text-lg">👁️</span>
      <span>
        {visitors !== null ? visitors.toLocaleString() : "0"} visitors
      </span>
      {!error && (
        <span className="text-xs text-green-500 dark:text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          live
        </span>
      )}
    </motion.div>
  );
}