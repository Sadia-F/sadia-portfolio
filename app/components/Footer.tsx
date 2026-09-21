"use client";

import { personalInfo } from "../data";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {currentYear} {personalInfo.name}.
        </p>
        <div className="flex gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-[#8B6914] dark:hover:text-[#C07C40] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-[#8B6914] dark:hover:text-[#C07C40] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-[#8B6914] dark:hover:text-[#C07C40] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
