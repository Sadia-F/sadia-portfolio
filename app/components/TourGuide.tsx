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

  // Tour script
  const tourSteps: Omit<TourStep, "element">[] = [
    {
      id: "hero",
      text: "Hi! I'm Sadia, a Computer Science student at New York Institute of Technology with a concentration in Artificial Intelligence. I build backend systems and AI-powered tools that make everyday life easier."
    },
    {
      id: "about",
      text: "I'm passionate about solving real-world problems — whether that's through code, leadership, or capturing the perfect sunset through my camera lens."
    },
    {
      id: "experience",
      text: "I've worked as a Backend and AI Engineer at NutriScan, a Tech Coach at NYIT, and I built the Campus Slate CMS from scratch, saving my team over two hundred dollars a year."
    },
    {
      id: "featured",
      text: "My favorite project is Campus Slate — I replaced a costly Wix website with a custom Flask app, cutting publishing time from days to minutes."
    },
    {
      id: "projects",
      text: "Here are some projects I've built — from a full-stack online store to a restaurant reservation system that uses five different data structures."
    },
    {
      id: "leadership",
      text: "Beyond coding, I lead as Vice President of the Bengali Student Association and Treasurer of the Society of Women Engineers."
    },
    {
      id: "timeline",
      text: "This is my Computer Science journey — from my first coding workshop in high school to graduating next year."
    },
    {
      id: "techstack",
      text: "Here's my tech toolkit — Python, Java, TypeScript, SQL, and more."
    },
    {
      id: "skills",
      text: "My core skills include backend development, REST APIs, AI integration, and system design."
    },
    {
      id: "education",
      text: "I'm pursuing my Bachelor's in Computer Science at NYIT with a concentration in AI, graduating in May 2027."
    },
    {
      id: "testimonials",
      text: "Here's what people have said about my work."
    },
    {
      id: "chatbot",
      text: "Feel free to ask me anything using the chatbot below — I'm here to help!"
    },
    {
      id: "photography",
      text: "I love capturing moments — especially sunsets. Photography taught me patience and attention to detail, just like coding."
    },
    {
      id: "connect",
      text: "That's all! If you'd like to work together, have a question, or just want to say hi, connect with me. Thanks for stopping by!"
    }
  ];

  useEffect(() => {
    // Check if user has seen the tour before
    const seen = localStorage.getItem("hasSeenTour");
    if (seen) {
      setHasSeenTour(true);
      return;
    }

    // Show the tour after 2.5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

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

      // Highlight the element
      element.classList.add("tour-highlight");
      setTimeout(() => {
        element.classList.remove("tour-highlight");
      }, 1500);
    }

    // Speak the text
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(step.text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.lang = "en-US";

    utterance.onend = () => {
      setIsSpeaking(false);
      // Move to next step after a pause
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        speakStep(index + 1);
      }, 800);
    };

    window.speechSynthesis.speak(utterance);
  };

  const endTour = () => {
    setIsTourActive(false);
    setHasSeenTour(true);
    localStorage.setItem("hasSeenTour", "true");

    // Final wave message
    const finalUtterance = new SpeechSynthesisUtterance(
      "Thanks for exploring my portfolio! Feel free to look around and connect with me. Have a great day!"
    );
    finalUtterance.rate = 0.9;
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

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <>
      {/* Initial Popup */}
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
                  Hi there! 👋
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Would you like a quick tour of my portfolio?
                </p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={startTour}
                    className="px-4 py-2 bg-warm-brown text-white rounded-lg hover:bg-[#6B4F10] transition-colors text-sm font-medium"
                  >
                    Yes, take me on a tour!
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

      {/* Tour Status Indicator */}
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

      {/* Replay Button - Bottom Right, MIDDLE (below chat) */}
      {!isTourActive && hasSeenTour && !isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={replayTour}
          className="fixed bottom-20 right-6 z-40 p-3 bg-warm-brown text-white rounded-full shadow-lg hover:bg-[#6B4F10] transition-colors"
          aria-label="Replay tour"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.button>
      )}
    </>
  );
}