"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on page load and route change
    window.scrollTo(0, 0);

    // Handle browser back/forward navigation
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

  return null;
}