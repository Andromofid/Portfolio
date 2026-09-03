import React from "react";
import { profile } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900/60 shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Contact information */}
            <div className="relative overflow-hidden border-b border-white/10 bg-zinc-900 px-6 py-9 md:px-9 md:py-12 lg:border-b-0 lg:border-r">
              <div
                aria-hidden="true"
                className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/15 blur-[90px]"
              />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
                  Contact
                </p>

                <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-zinc-50 md:text-5xl">
                  Construisons quelque chose{" "}
                  <span className="text-indigo-400">d’utile ensemble.</span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
                  Une mission, une opportunité ou un projet en tête ?
                  Envoyez-moi votre brief. Je réponds rapidement par email ou
                  LinkedIn.
                </p>

                <dl className="mt-9 space-y-5">
                  <ContactInformation
                    icon={<EmailIcon />}
                    label="Email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                  />

                  <ContactInformation
                    icon={<PhoneIcon />}
                    label="Téléphone"
                    value={profile.phone}
                    href={`tel:${profile.phone}`}
                  />

                  <ContactInformation
                    icon={<LocationIcon />}
                    label="Localisation"
                    value={profile.location}
                  />
                </dl>

                <div className="mt-9 flex flex-wrap gap-3">
                  <SocialLink href={profile.linkedin}>LinkedIn</SocialLink>
                  <SocialLink href={profile.github}>GitHub</SocialLink>

                  <a
                    href={profile.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                  >
                    CV PDF
                    <DownloadIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form
              className="grid gap-5 bg-zinc-950/30 px-6 py-9 md:grid-cols-2 md:px-9 md:py-12"
              action="https://formsubmit.co/ymofid18@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Nouveau message depuis le portfolio"
              />
              <input type="hidden" name="_template" value="box" />

              {/* Honeypot */}
              <input
                type="text"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />

              <FormField
                id="contact-name"
                label="Nom"
                name="name"
                type="text"
                placeholder="Votre nom"
                autoComplete="name"
              />

              <FormField
                id="contact-email"
                label="Email"
                name="email"
                type="email"
                placeholder="vous@example.com"
                autoComplete="email"
              />

              <div className="md:col-span-2">
                <FormField
                  id="contact-subject"
                  label="Sujet"
                  name="subject"
                  type="text"
                  placeholder="Sujet du message"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-zinc-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Décrivez votre besoin..."
                  className="min-h-40 resize-y rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-white/20 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/15"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:ring-offset-2 focus:ring-offset-zinc-950"
                >
                  Envoyer le message
                  <SendIcon />
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                >
                  Email direct
                </a>
              </div>

              <p className="text-xs leading-6 text-zinc-600 md:col-span-2">
                En envoyant ce formulaire, votre message sera transmis
                directement à mon adresse email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ id, label, name, type, placeholder, autoComplete }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-white/20 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/15"
      />
    </div>
  );
}

function ContactInformation({ icon, label, value, href }) {
  const valueElement = href ? (
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
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-400">
        {icon}
      </div>

      <div className="min-w-0">
        <dt className="mb-1 text-xs font-medium text-zinc-500">{label}</dt>
        <dd>{valueElement}</dd>
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
      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-indigo-400/30 hover:bg-indigo-400/10 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
    >
      {children}
    </a>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="m3 4 14 6-14 6 2-6-2-6Zm2 6h7"
        stroke="currentColor"
        strokeWidth="1.6"
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
