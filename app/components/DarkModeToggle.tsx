"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      if (saved === null) {
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleDark = () => {
    const newState = !isDark;
    setIsDark(newState);

    if (newState) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleDark}
      className="relative flex items-center gap-3 p-2 rounded-full bg-cream dark:bg-deep-slate border-2 border-warm-brown/30 dark:border-terracotta/30 transition-colors duration-300 shadow-sm"
      aria-label="Toggle dark mode"
    >
      <span className={`text-lg transition-opacity duration-300 ${isDark ? "opacity-40" : "opacity-100"}`}>
        ☀️
      </span>
      <div className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 flex items-center">
        <div
          className={`absolute w-5 h-5 bg-white dark:bg-gray-200 rounded-full shadow-md transition-all duration-300 ${
            isDark ? "translate-x-6" : "translate-x-0.5"
          }`}
        />
      </div>
      <span className={`text-lg transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-40"}`}>
        🌙
      </span>
    </button>
  );
}