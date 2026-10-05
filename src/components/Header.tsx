"use client";

import { useState, useRef } from "react";
import { FaCat } from "react-icons/fa6";
import { person } from "@/resources/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const links = ["About", "Publications", "Education", "Contact"];

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner" onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            toggle.current?.focus();
          }
        }}>
          <a className="wordmark" href="#about" onClick={() => setOpen(false)}>
            <FaCat aria-hidden="true" />
            <span>{person.name}</span>
          </a>
          <button ref={toggle} type="button" className="menu-toggle" aria-controls="main-navigation" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
          <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
            {links.map((label) => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}</a>)}
          </nav>
        </div>
      </header>
    </>
  );
}
