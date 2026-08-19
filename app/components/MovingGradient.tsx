"use client";

import { motion } from "framer-motion";

export default function MovingGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cream via-[#FDF6EE] to-[#E8D5B7] dark:from-deep-slate dark:via-[#1A1A2E] dark:to-[#2D1B0F]"
        animate={{
          background: [
            "linear-gradient(135deg, #FDF6EE 0%, #E8D5B7 50%, #FDF6EE 100%)",
            "linear-gradient(135deg, #E8D5B7 0%, #FDF6EE 50%, #E8D5B7 100%)",
            "linear-gradient(135deg, #FDF6EE 0%, #E8D5B7 50%, #FDF6EE 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-deep-slate via-[#1A1A2E] to-[#2D1B0F] opacity-0 dark:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            "linear-gradient(135deg, #1A1A2E 0%, #2D1B0F 50%, #1A1A2E 100%)",
            "linear-gradient(135deg, #2D1B0F 0%, #1A1A2E 50%, #2D1B0F 100%)",
            "linear-gradient(135deg, #1A1A2E 0%, #2D1B0F 50%, #1A1A2E 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}