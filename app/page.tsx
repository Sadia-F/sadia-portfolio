"use client";

import { personalInfo, stats } from "./data";
import Bitmoji3D from "./components/Bitmoji3D";
import MovingGradient from "./components/MovingGradient";
import About from "./components/About";
import Photography from "./components/Photography";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <MovingGradient />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-brown dark:text-cream mb-4">
                Hi, I'm{" "}
                <span className="text-warm-brown dark:text-terracotta">
                  Sadia
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                {personalInfo.title}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                {personalInfo.headline}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-warm-brown text-white rounded-lg hover:bg-[#6B4F10] transition-colors">GitHub</a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-terracotta text-white rounded-lg hover:bg-[#A06030] transition-colors">LinkedIn</a>
                <a href={`mailto:${personalInfo.email}`} className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-dark-brown dark:text-cream rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Email</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <div className="w-full max-w-md aspect-square">
                <Bitmoji3D />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
              <p className="text-2xl font-bold text-warm-brown dark:text-terracotta">{stats.projects}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
              <p className="text-2xl font-bold text-warm-brown dark:text-terracotta">{stats.leadershipRoles}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Leadership Roles</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
              <p className="text-2xl font-bold text-warm-brown dark:text-terracotta">{stats.technologies}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Technologies</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
              <p className="text-2xl font-bold text-warm-brown dark:text-terracotta">{stats.studentsReached}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Students Reached</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      <About />
      <Photography />
      <Experience />
      <Projects />
      <Leadership />
      <Skills />
      <Education />
      <Chatbot />
      <Footer />
      <BackToTop />
    </div>
  );
}