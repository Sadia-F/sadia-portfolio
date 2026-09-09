"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareClassName?: string;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glareClassName = "rounded-xl",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const supportsTilt = useRef(
    typeof window !== "undefined" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !window.matchMedia("(pointer: coarse)").matches
  );

  const rotateX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 30%, transparent 70%)`;

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!supportsTilt.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * maxTilt);
    rotateY.set((px - 0.5) * maxTilt);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 ${glareClassName}`}
        style={{ background: glareBackground, opacity: glareOpacity }}
      />
    </motion.div>
  );
}