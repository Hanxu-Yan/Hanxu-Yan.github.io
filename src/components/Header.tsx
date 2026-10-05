"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { academic } from "@/resources/academic";
import { person } from "@/resources/content";

const navigation = [
  { id: "about", label: "About", visible: true },
  { id: "news", label: "News", visible: academic.news.length > 0 },
  { id: "publications", label: "Publications", visible: academic.publications.length > 0 },
  { id: "internship", label: "Internship", visible: academic.experience.length > 0 },
  { id: "education", label: "Education", visible: academic.education.length > 0 },
  { id: "awards", label: "Awards", visible: academic.awards.length > 0 },
  { id: "more", label: "More", visible: academic.service.length > 0 },
].filter((item) => item.visible);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  function navigate(id: string) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`header-wrapper ${menuOpen ? "menu-open" : ""}`} onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          toggle.current?.focus();
        }
      }}>
        <div className="header-container">
          <a className="header-name" href="#about" onClick={() => setMenuOpen(false)}>
            <Image src="/images/header-cat.png" alt="" width={36} height={36} className="header-logo" />
            <span className="name-main">{person.name}</span>
          </a>
          <button ref={toggle} type="button" className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="main-navigation">
            <span className="bar bar1" /><span className="bar bar2" /><span className="bar bar3" />
          </button>
          <nav id="main-navigation" className={`header-nav ${menuOpen ? "show" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => <button key={item.id} type="button" className="nav-item" onClick={() => navigate(item.id)}>{item.label}</button>)}
          </nav>
        </div>
      </header>
    </>
  );
}
