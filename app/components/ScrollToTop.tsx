"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);

    // Also try after a tiny delay (for any layout shifts)
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    // And again after everything loads
    const onLoad = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}