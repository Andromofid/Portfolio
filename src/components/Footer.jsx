import React from "react";
import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}. Portfolio construit avec
        React et Tailwind CSS.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={`mailto:${profile.email}`} className="nav-link">
          {profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" className="nav-link">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" className="nav-link">
          GitHub
        </a>
      </div>
    </footer>
  );
}
