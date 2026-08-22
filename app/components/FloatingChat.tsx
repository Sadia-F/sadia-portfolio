"use client";

import { motion } from "framer-motion";

export default function FloatingChat() {
  const scrollToChat = () => {
    const chatSection = document.getElementById("chat-section");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToChat}
      className="fixed bottom-34 right-6 z-50 w-12 h-12 bg-warm-brown text-white rounded-full shadow-lg hover:bg-[#6B4F10] transition-colors flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </motion.button>
  );
}