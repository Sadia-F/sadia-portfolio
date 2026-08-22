"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TourStep {
  id: string;
  element: HTMLElement | null;
  text: string;
}

export default function TourGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // SHORTER TOUR — 6 key sections only
  const tourSteps: Omit<TourStep, "element">[] = [
    {
      id: "hero",
      text: "Hi! I'm Sadia, a Computer Science student at NYIT with an AI concentration. I build backend systems and AI-powered tools that make everyday life easier."
    },
    {
      id: "about",
      text: "I'm passionate about solving real-world problems — whether that's through code, leadership, or capturing the perfect sunset through my camera lens."
    },
    {
      id: "experience",
      text: "I've worked as a Backend and AI Engineer at NutriScan, a Tech Coach at NYIT, and built the Campus Slate CMS from scratch — saving my team over $200 a year."
    },
    {
      id: "projects",
      text: "Here are some of the projects I've built, from full-stack applications to AI-powered tools. Each one solves a real problem."
    },
    {
      id: "techstack",
      text: "I work with Python, Java, TypeScript, and more — always learning and expanding my toolkit."
    },
    {
      id: "connect",
      text: "That's all! If you'd like to work together or just connect, I'd love to hear from you. Thanks for stopping by!"
    }
  ];

  useEffect(() => {
    const seen = localStorage.getItem("hasSeenTour");
    if (seen) {
      setHasSeenTour(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const startTour = () => {
    setIsOpen(false);
    setIsTourActive(true);
    setCurrentStep(0);
    speakStep(0);
  };

  const speakStep = (index: number) => {
    if (index >= tourSteps.length) {
      endTour();
      return;
    }

    const step = tourSteps[index];
    const element = document.getElementById(step.id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("tour-highlight");
      setTimeout(() => {
        element.classList.remove("tour-highlight");
      }, 1200);
    }

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(step.text);
    utterance.rate = 1.0;
    utterance.pitch = 1;
    utterance.lang = "en-US";

    utterance.onend = () => {
      setIsSpeaking(false);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        speakStep(index + 1);
      }, 600);
    };

    window.speechSynthesis.speak(utterance);
  };

  const endTour = () => {
    setIsTourActive(false);
    setHasSeenTour(true);
    localStorage.setItem("hasSeenTour", "true");

    const finalUtterance = new SpeechSynthesisUtterance(
      "Thanks for stopping by! Feel free to explore more or reach out. Have a great day!"
    );
    finalUtterance.rate = 1.0;
    window.speechSynthesis.speak(finalUtterance);
  };

  const skipTour = () => {
    window.speechSynthesis.cancel();
    setIsTourActive(false);
    setIsOpen(false);
    setHasSeenTour(true);
    localStorage.setItem("hasSeenTour", "true");
  };

  const replayTour = () => {
    if (isTourActive) return;
    setIsTourActive(true);
    setCurrentStep(0);
    speakStep(0);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && !hasSeenTour && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">👋</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-dark-brown dark:text-cream">
                  Quick Tour?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Take a 30-second tour of my portfolio.
                </p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={startTour}
                    className="px-4 py-2 bg-warm-brown text-white rounded-lg hover:bg-[#6B4F10] transition-colors text-sm font-medium"
                  >
                    Yes, show me!
                  </button>
                  <button
                    onClick={skipTour}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isTourActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-3 text-sm"
        >
          <span className="text-warm-brown dark:text-terracotta">
            {isSpeaking ? "🔊 Speaking..." : "⏳ Pausing..."}
          </span>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <span className="text-gray-600 dark:text-gray-400">
            Step {currentStep + 1} of {tourSteps.length}
          </span>
          <button
            onClick={skipTour}
            className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            ✕
          </button>
        </motion.div>
      )}

      {!isTourActive && hasSeenTour && !isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={replayTour}
          className="fixed bottom-20 right-6 z-40 w-12 h-12 bg-warm-brown text-white rounded-full shadow-lg hover:bg-[#6B4F10] transition-colors flex items-center justify-center"
          aria-label="Replay tour"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.button>
      )}
    </>
  );
}