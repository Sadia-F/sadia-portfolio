"use client";

import Image from "next/image";

interface ProjectImageProps {
  title: string;
  image?: string;
  technologies: string[];
  index: number;
}

const gradients = [
  "from-warm-brown/90 to-sunset/80",
  "from-terracotta/90 to-sunset/70",
  "from-[#5B7DB1]/90 to-warm-brown/70",
  "from-[#4A7C59]/90 to-warm-brown/70",
  "from-[#7B68EE]/80 to-terracotta/60",
];

const icons = ["🏸", "📰", "🍽️", "🛒", "🌐"];

export default function ProjectImage({ title, image, technologies, index }: ProjectImageProps) {
  const gradient = gradients[index % gradients.length];
  const icon = icons[index % icons.length];

  if (image) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={`${title} — project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={index === 0}
        />
      </div>
    );
  }

  return (
    <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
      <div className="relative z-10 flex flex-col items-center gap-1 text-white text-center px-4">
        <span className="text-4xl mb-2">{icon}</span>
        <span className="font-semibold text-sm sm:text-base leading-tight">{title}</span>
        <span className="text-xs opacity-80 mt-1">{technologies.slice(0, 4).join(" · ")}</span>
      </div>
      <span className="absolute bottom-2 right-3 text-white/40 text-[10px] uppercase tracking-wider font-medium">
        Screenshot coming soon
      </span>
    </div>
  );
}