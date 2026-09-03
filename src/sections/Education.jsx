import React from "react";
import { education } from "../data.js";

export default function Education() {
  return (
    <section
      id="education"
      className="relative border-b border-white/5 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-indigo-500/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
            Formation
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-zinc-50 md:text-5xl">
            Un parcours orienté développement web et{" "}
            <span className="text-indigo-400">montée en autonomie.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            Une formation technique complétée par une pratique continue sur des
            applications et des problématiques réelles.
          </p>
        </div>

        {/* Education timeline */}
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent md:block"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {education.map((item, index) => (
              <article
                key={`${item.school}-${item.years}`}
                className="group relative flex flex-col rounded-[24px] border border-white/10 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/25 hover:bg-zinc-900/90 hover:shadow-2xl hover:shadow-black/20"
              >
                {/* Timeline marker */}
                <div className="absolute left-6 top-0 hidden -translate-y-1/2 items-center gap-2 md:flex">
                  <span className="h-3 w-3 rounded-full border-2 border-zinc-950 bg-indigo-400 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />
                </div>

                <div className="flex items-start justify-between gap-4">
                  {/* School logo */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={`Logo ${item.school}`}
                        className="h-full w-full object-contain p-2"
                        loading="lazy"
                      />
                    ) : (
                      <EducationIcon />
                    )}
                  </div>

                  <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
                    {item.years}
                  </span>
                </div>

                <div className="mt-7 flex flex-1 flex-col">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Formation {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-zinc-100 transition group-hover:text-indigo-300">
                    {item.school}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7 text-indigo-400"
    >
      <path
        d="m3 9 9-5 9 5-9 5-9-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M7 12v5c3 2 7 2 10 0v-5M21 9v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}