"use client";

import { useEffect } from "react";

// Adds .is-visible to every [data-reveal] element as it scrolls into view.
// Content stays visible without JS: the hidden state only applies under html.js.
export function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
