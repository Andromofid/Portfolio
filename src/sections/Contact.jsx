import React, { useMemo } from "react";
import { profile } from "../data.js";

export default function Contact() {
  // After redirect (?success=1), show success banner
  const sent = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("success") === "1";
  }, []);

  const nextUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}?success=1#contact`
      : "";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <div className="glass rounded-2xl p-6 shadow-soft border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Discutons de votre projet</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">
              Je réponds rapidement. Contact par email ou LinkedIn.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="bg-primary text-white px-4 py-2 rounded-xl shadow-soft"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              className="border px-4 py-2 rounded-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Success banner */}
        {sent && (
          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 dark:border-green-700/40 dark:bg-green-900/30 dark:text-green-200">
            ✅ Message envoyé ! Merci, je vous répondrai très vite.
          </div>
        )}

        {/* Contact form */}
        <form
          className="mt-6 grid gap-4 md:grid-cols-2"
          action="https://formsubmit.co/ymofid18@gmail.com"
          method="POST"
        >
          {/* FormSubmit options */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Nouveau message depuis le portfolio"
          />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_next" value={nextUrl} />
          {/* Honeypot anti-spam */}
          <input type="text" name="_honey" className="hidden" />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Votre nom"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="vous@example.com"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-medium">Sujet</label>
            <input
              type="text"
              name="subject"
              required
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Sujet du message"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Décrivez votre besoin…"
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              className="bg-primary text-white px-5 py-2 rounded-xl shadow-soft hover:opacity-95 transition"
            >
              Envoyer le message
            </button>
            <span className="text-xs text-slate-500">
              Vous pouvez aussi écrire directement à{" "}
              <a className="underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              .
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
