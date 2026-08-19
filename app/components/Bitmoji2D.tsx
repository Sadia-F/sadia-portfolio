"use client";

import Image from "next/image";

interface Bitmoji2DProps {
  className?: string;
  size?: number;
}

export default function Bitmoji2D({ className = "", size = 400 }: Bitmoji2DProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Your Bitmoji Image — completely static */}
      <Image
        src="/images/bitmoji.png"
        alt="Sadia's Bitmoji"
        width={size}
        height={size}
        className="w-full h-auto max-w-[400px]"
        priority
        quality={100}
      />
    </div>
  );
}