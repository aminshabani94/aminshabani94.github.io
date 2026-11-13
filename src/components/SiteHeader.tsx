"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, DownloadSimple, List, X } from "@phosphor-icons/react";
import { profile } from "@/content/profile";

const NAV = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "open-source", label: "Open source" },
  { id: "about", label: "About" },
];

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);

  // Highlight the section in view, and flip the header palette over dark bands.
  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
    const update = () => {
      const probe = 72;
      let current: HTMLElement | undefined;
      for (const s of sections) if (s.getBoundingClientRect().top <= probe) current = s;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = sections[sections.length - 1];
      setActive(current && NAV.some((n) => n.id === current!.id) ? current.id : null);
      setOnDark(!!current?.classList.contains("band-dark"));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${onDark ? " is-dark" : ""}${open ? " is-open" : ""}`}>
      <div className="wrap header-row">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          {profile.initials}
          <span>.</span>
        </a>
        <nav className="site-nav" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <div className="nav-actions-mobile">
            <a className="btn btn-secondary" href={profile.cv} target="_blank" rel="noopener">
              <DownloadSimple size={16} />
              Download CV
            </a>
            <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
        <div className="header-actions">
          <a className="btn btn-secondary btn-sm" href={profile.cv} target="_blank" rel="noopener">
            <DownloadSimple size={15} />
            CV
          </a>
          <a className="btn btn-primary btn-sm" href="#contact">
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>
        </div>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>
    </header>
  );
}
