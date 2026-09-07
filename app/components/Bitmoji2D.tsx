"use client";

import Image from "next/image";

interface Bitmoji2DProps {
  className?: string;
}

export default function Bitmoji2D({ className = "" }: Bitmoji2DProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-br from-warm-brown/20 via-terracotta/10 to-transparent dark:from-terracotta/30 dark:via-amber-500/10 blur-2xl"
      />
      <Image
        src="/images/bitmoji.PNG"
        alt="Sadia's Bitmoji"
        width={284}
        height={784}
        className="relative w-auto h-auto max-h-[470px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
        priority
      />
    </div>
  );
}