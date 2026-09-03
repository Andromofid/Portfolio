import React from "react";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-b border-white/5 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-indigo-500/5 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        {/* Section introduction */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
            Expérience principale
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-zinc-50 md:text-5xl">
            Une expérience produit complète autour de{" "}
            <span className="text-indigo-400">FIXI.MA</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
            {experience.intro}
          </p>

          <a
            href="#projects"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 transition hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
          >
            Découvrir mes projets
            <ArrowRightIcon />
          </a>
        </div>

        {/* Experience details */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900/60 p-6 shadow-2xl shadow-black/10 sm:p-8">
          {/* Experience heading */}
          <div className="border-b border-white/10 pb-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">
                  {experience.company}
                </p>

                <h3 className="mt-3 font-serif text-3xl leading-tight text-zinc-50 sm:text-4xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-sm font-medium text-zinc-500">
                  {experience.type}
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-xs font-semibold text-indigo-300">
                <CalendarIcon />
                {experience.when}
              </span>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            {experience.pillars.map((pillar, index) => {
              const isLast = index === experience.pillars.length - 1;

              return (
                <article
                  key={pillar.title}
                  className={`group relative grid gap-4 py-7 sm:grid-cols-[52px_1fr] ${
                    !isLast ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="relative">
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 font-serif text-base font-semibold text-indigo-300 transition duration-200 group-hover:border-indigo-400 group-hover:bg-indigo-500 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl font-semibold text-zinc-100 transition group-hover:text-indigo-300">
                      {pillar.title}
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-7 text-zinc-400"
                        >
                          <CheckIcon />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
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

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <rect
        x="3"
        y="4.5"
        width="14"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 3v3M13.5 3v3M3 8h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
    >
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
