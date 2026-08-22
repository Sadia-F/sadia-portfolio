"use client";

import { personalInfo, stats } from "./data";
import Bitmoji2D from "./components/Bitmoji2D";
import MovingGradient from "./components/MovingGradient";
import FloatingBackground from "./components/FloatingBackground";
import AboutSection from "./components/AboutSection";
import Photography from "./components/Photography";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import ChatSection from "./components/ChatSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Timeline from "./components/Timeline";
import FeaturedProject from "./components/FeaturedProject";
import Connect from "./components/Connect";
import Testimonials from "./components/Testimonials";
import CommandPalette from "./components/CommandPalette";
import TourGuide from "./components/TourGuide";
import Now from "./components/Now";
import FloatingChat from "./components/FloatingChat";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div>
      <TourGuide />
      <CommandPalette />
      <FloatingBackground />
      <ScrollProgress />
      <Navbar />
      <MovingGradient />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
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

              <p className="text-xl md:text-2xl font-medium text-warm-brown dark:text-terracotta mb-2">
                {personalInfo.valueProposition}
              </p>

              <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 h-10">
                <Typewriter
                  options={{
                    strings: [
                      "Backend & AI Engineer",
                      "CS Student @ NYIT",
                      "Problem Solver",
                      "Photography Enthusiast",
                      "Building systems that make life easier",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30,
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-warm-brown text-white rounded-lg hover:bg-[#6B4F10] transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-terracotta text-white rounded-lg hover:bg-[#A06030] transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a href={`mailto:${personalInfo.email}`} className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-dark-brown dark:text-cream rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                <a href="/resume.pdf" download className="px-6 py-3 border-2 border-warm-brown text-warm-brown dark:border-terracotta dark:text-terracotta rounded-lg hover:bg-warm-brown hover:text-white dark:hover:bg-terracotta transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Resume
                </a>
              </div>

              {/* Stats — Now aligned left */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mt-8">
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <div className="w-full max-w-md aspect-square">
                <Bitmoji2D className="w-full h-full" />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
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

      {/* Sections */}
      <AboutSection />
      <Now />
      <Experience />
      <FeaturedProject />
      <Projects />
      <Leadership />
      <Timeline />
      <TechStack />
      <Education />
      <Testimonials />
      <Photography />
      <ChatSection />
      <Connect />
      <Footer />
      <BackToTop />
      <FloatingChat />
    </div>
  );
}