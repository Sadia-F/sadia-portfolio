"use client";

import { useState } from "react";
import { personalInfo } from "../data";
import { motion } from "framer-motion";

export default function Connect() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name || "Anonymous"}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="connect" className="py-20 px-4 bg-cream/50 dark:bg-deep-slate/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
              Let&apos;s Build Something Meaningful
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              I&apos;m seeking backend engineering, AI engineering, and software engineering opportunities where thoughtful technology can make a meaningful impact. Currently based in New York, open to relocation and remote roles.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-start content-start gap-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group px-6 py-4 bg-warm-brown text-white rounded-xl hover:bg-[#6B4F10] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto"
            >
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <p className="font-medium">Email</p>
                <p className="text-xs opacity-80">I reply within 24 hours</p>
              </div>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-4 bg-terracotta text-white rounded-xl hover:bg-[#A06030] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto"
            >
              <span className="text-2xl">🔗</span>
              <div className="text-left">
                <p className="font-medium">LinkedIn</p>
                <p className="text-xs opacity-80">Connect professionally</p>
              </div>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-4 bg-gray-200 dark:bg-gray-700 text-dark-brown dark:text-cream rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto"
            >
              <span className="text-2xl">🐙</span>
              <div className="text-left">
                <p className="font-medium">GitHub</p>
                <p className="text-xs opacity-80">See my code</p>
              </div>
            </a>
            <a
              href="/resume.pdf"
              download
              className="group px-6 py-4 border-2 border-warm-brown dark:border-terracotta text-warm-brown dark:text-terracotta rounded-xl hover:bg-warm-brown hover:text-white dark:hover:bg-terracotta transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto"
            >
              <span className="text-2xl">📄</span>
              <div className="text-left">
                <p className="font-medium">Resume</p>
                <p className="text-xs opacity-80">Download PDF</p>
              </div>
            </a>
            {personalInfo.leetcode && (
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-xl hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto"
              >
                <span className="text-2xl">💻</span>
                <div className="text-left">
                  <p className="font-medium">LeetCode</p>
                  <p className="text-xs opacity-80">Problem solving</p>
                </div>
              </a>
            )}
          </motion.div>

          {/* Quick message form (mailto) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-dark-brown dark:text-cream mb-4">
              Send a quick message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-dark-brown dark:text-cream placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-warm-brown dark:focus:ring-terracotta"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your opportunity or say hello!"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-dark-brown dark:text-cream placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-warm-brown dark:focus:ring-terracotta resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-warm-brown text-white rounded-xl hover:bg-[#6B4F10] transition-colors font-medium"
              >
                Send message
              </button>
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                Opens your email app with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}