"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative h-px w-full max-w-4xl mx-auto px-6"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="absolute inset-0 origin-left h-px bg-gradient-to-r from-transparent via-warm-brown/70 to-sunset/70 dark:via-terracotta/70"
      />
      <motion.div
        initial={{ left: "0%", opacity: 0 }}
        whileInView={{ left: "calc(100% - 7px)", opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-sunset dark:bg-terracotta shadow-[0_0_8px_rgba(232,116,26,0.8)]"
      />
    </div>
  );
}