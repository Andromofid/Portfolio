import React from "react";
import { languages, skillGroups, softSkills } from "../data.js";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-b border-white/5 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-indigo-500/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
            Compétences
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-zinc-50 md:text-5xl">
            Une base full-stack construite sur{" "}
            <span className="text-indigo-400">le concret.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            Des technologies choisies et utilisées pour construire des
            applications complètes, maintenables et prêtes pour la production.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Technical skills */}
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="group rounded-[24px] border border-white/10 bg-zinc-900/60 p-6 transition duration-300 hover:border-indigo-400/25 hover:bg-zinc-900/90"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 font-serif text-sm font-semibold text-indigo-300 transition group-hover:bg-indigo-500 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-xs font-medium text-zinc-600">
                    {group.items.length} compétences
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-semibold text-zinc-100 transition group-hover:text-indigo-300">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-indigo-400/30 hover:bg-indigo-400/10 hover:text-indigo-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Languages and soft skills */}
          <div className="grid gap-6">
            <article className="rounded-[24px] border border-white/10 bg-zinc-900/60 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-400">
                  <LanguageIcon />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-zinc-100">
                  Langues
                </h3>
              </div>

              <div className="mt-6 divide-y divide-white/10">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-zinc-300">
                      {language.name}
                    </span>

                    <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[24px] border border-white/10 bg-zinc-900/60 p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-400">
                  <UserIcon />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-zinc-100">
                  Savoir-être
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 text-sm leading-7 text-zinc-400"
                  >
                    <CheckIcon />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-1.5 h-4 w-4 shrink-0 text-indigo-400"
    >
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M4 5h10M9 3v2m3 0c-1 5-4 8-8 10m2-6c2 3 4 5 7 6m2-7 4 11m-6 0 4-11 4 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}