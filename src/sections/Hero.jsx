import React from "react";
import { profile } from "../data.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] right-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:pt-20 md:pb-28 lg:grid-cols-[1fr_380px] lg:gap-16 lg:pt-28">
        {/* Main content */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            {profile.availability}
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
            {profile.title}
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-[0.96] tracking-[-0.035em] text-zinc-50 sm:text-6xl lg:text-7xl">
            Je développe des expériences web{" "}
            <span className="text-indigo-400">simples et performantes.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {profile.summary}
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Découvrir mes projets
              <ArrowRightIcon />
            </a>

            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
            >
              Télécharger mon CV
              <DownloadIcon />
            </a>
          </div>

          {/* Technologies */}
          <div className="mt-9 flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Profile card */}
        <aside className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-indigo-400/30 via-white/10 to-transparent"
          />

          <div className="relative overflow-hidden rounded-[27px] bg-zinc-900/95 p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl"
            />

            <div className="relative flex items-center gap-4">
              <span className="block h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-800 transition group-hover:border-indigo-400/50">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJFIoT7bAxIm_JGFpuP76aizKWkzvOxQfMcNS7ckRT7p3gKS7ef=s254-c-no"
                  alt="Photo de profil de Youssef El Mofid"
                  className="h-full w-full object-cover"
                  width="40"
                  height="40"
                />
              </span>

              <div className="min-w-0">
                <h2 className="font-serif text-2xl font-semibold text-zinc-50">
                  {profile.name}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  Développeur Web Full-Stack
                </p>
              </div>
            </div>

            <div className="my-7 h-px bg-white/10" />

            <dl className="space-y-5">
              <ProfileInformation
                icon={<LocationIcon />}
                label="Localisation"
                value={profile.location}
              />

              <ProfileInformation
                icon={<EmailIcon />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />

              <ProfileInformation
                icon={<PhoneIcon />}
                label="Téléphone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
              />
            </dl>

            <div className="mt-8 grid grid-cols-3 gap-2">
              <SocialLink href={profile.linkedin}>LinkedIn</SocialLink>
              <SocialLink href={profile.github}>GitHub</SocialLink>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-zinc-300 transition hover:border-indigo-400/30 hover:bg-indigo-400/10 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              >
                Contact
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ProfileInformation({ icon, label, value, href }) {
  const content = href ? (
    <a
      href={href}
      className="break-all text-sm font-medium text-zinc-200 transition hover:text-indigo-400"
    >
      {value}
    </a>
  ) : (
    <p className="text-sm font-medium text-zinc-200">{value}</p>
  );

  return (
    <div className="flex items-center gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-indigo-400">
        {icon}
      </div>

      <div className="min-w-0">
        <dt className="mb-1 text-xs font-medium text-zinc-500">{label}</dt>
        <dd>{content}</dd>
      </div>
    </div>
  );
}

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-zinc-300 transition hover:border-indigo-400/30 hover:bg-indigo-400/10 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
    >
      {children}
    </a>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
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

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M15 8c0 3.5-5 8-5 8s-5-4.5-5-8a5 5 0 1 1 10 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <rect
        x="3"
        y="5"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 6 6 5 6-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M6 3 4 5c0 5.5 4.5 10 10 10l2-2-3-3-2 2c-2-.8-3.2-2-4-4l2-2-3-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
