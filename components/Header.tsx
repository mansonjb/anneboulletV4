"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./ui";

const liens = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/#missions", label: "Missions" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/studio", label: "Le studio" },
  ];

export default function Header() {
  const [open, setOpen] = useState(false);
  const accueil = usePathname() === "/";
  return (
    <>
      <header className={`hd hd4${accueil ? " hd-home" : ""}`}>
        <Logo />
        <nav aria-label="Navigation principale">
          <ul className="nav-links">
            {liens.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hd-right">
          <a className="hd-cta" href="/contact">
            Prendre rendez-vous
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>
      <nav id="menu-mobile" className={`mnav${open ? " open" : ""}`} aria-label="Navigation mobile">
        <ul>
          {liens.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
