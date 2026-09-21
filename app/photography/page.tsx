import type { Metadata } from "next";
import Link from "next/link";
import DarkModeToggle from "../components/DarkModeToggle";
import Photography from "../components/Photography";

export const metadata: Metadata = {
  title: "Photography | Sadia Ferdous",
  description: "Photography by Sadia Ferdous — sunsets, light, and the stories found in small moments.",
};

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-cream dark:bg-deep-slate">
      <header className="sticky top-0 z-20 border-b border-warm-brown/10 bg-cream/90 backdrop-blur-md dark:border-white/10 dark:bg-deep-slate/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-xl font-bold text-warm-brown dark:text-terracotta">
            SF<span className="text-sunset">.</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-warm-brown dark:text-gray-300 dark:hover:text-terracotta">
              Personal portfolio
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </header>
      <Photography />
    </main>
  );
}
