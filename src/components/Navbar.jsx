import React, { useState } from "react";
import { profile } from "../data.js";

const links = [
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="block h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-zinc-800 transition group-hover:border-indigo-400/50">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJFIoT7bAxIm_JGFpuP76aizKWkzvOxQfMcNS7ckRT7p3gKS7ef=s254-c-no"
              alt="Photo de profil de Youssef El Mofid"
              className="h-full w-full object-cover"
              width="40"
              height="40"
            />
          </span>

          <span className="hidden flex-col sm:flex">
            <span className="font-serif text-lg font-semibold leading-tight text-zinc-50">
              {profile.name}
            </span>

            <span className="mt-0.5 text-xs text-zinc-500">
              Développeur Full-Stack
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CV button */}
        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2.5 text-sm font-semibold text-indigo-300 transition hover:border-indigo-400/50 hover:bg-indigo-400/20 hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 md:inline-flex"
        >
          Télécharger CV
          <DownloadIcon />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              >
                {link.label}
              </a>
            ))}

            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            >
              Télécharger mon CV
              <DownloadIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 16h12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
