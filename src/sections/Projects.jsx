import React, { useState } from "react";
import { projects } from "../data.js";

function trackProjectClick(project, clickArea = "project_card") {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "project_click",
    project_name: project.name,
    project_year: project.year,
    click_area: clickArea,
  });
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-b border-white/5 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
              Projets sélectionnés
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-zinc-50 md:text-5xl">
              Des solutions concrètes, pensées pour{" "}
              <span className="text-indigo-400">de vrais usages.</span>
            </h2>
          </div>

          <p className="text-base leading-8 text-zinc-400 lg:max-w-xl lg:justify-self-end">
            Une sélection de produits en production et de projets personnels
            mettant en valeur mon travail avec Laravel, React et la création
            d’interfaces modernes.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 space-y-8">
          {projects.map((project, projectIndex) => (
            <ProjectCard
              key={project.name}
              project={project}
              projectIndex={projectIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, projectIndex }) {
  const [imageIndex, setImageIndex] = useState(0);
  const total = project.images?.length ?? 0;

  const showPreviousImage = () => {
    if (total <= 1) return;

    setImageIndex((current) => (current - 1 + total) % total);
    trackProjectClick(project, "previous_image");
  };

  const showNextImage = () => {
    if (total <= 1) return;

    setImageIndex((current) => (current + 1) % total);
    trackProjectClick(project, "next_image");
  };

  const selectImage = (newIndex) => {
    setImageIndex(newIndex);
    trackProjectClick(project, "image_indicator");
  };

  return (
    <article
      className={`group grid overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900/60 shadow-xl shadow-black/10 transition duration-300 hover:border-indigo-400/25 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-black/20 lg:grid-cols-2 ${
        projectIndex % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Project preview */}
      <div className="relative min-h-[280px] overflow-hidden bg-zinc-900 sm:min-h-[360px] lg:min-h-[440px]">
        {total > 0 ? (
          <>
            <img
              src={project.images[imageIndex]}
              alt={`${project.name} — aperçu ${imageIndex + 1}`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/5 to-transparent" />

            <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-zinc-950/75 px-3 py-1.5 text-xs font-semibold text-zinc-200 backdrop-blur">
              {project.year}
            </span>

            {total > 1 && (
              <>
                <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
                  <CarouselButton
                    direction="previous"
                    onClick={showPreviousImage}
                    label={`Image précédente de ${project.name}`}
                  />

                  <CarouselButton
                    direction="next"
                    onClick={showNextImage}
                    label={`Image suivante de ${project.name}`}
                  />
                </div>

                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-zinc-950/65 p-2 backdrop-blur">
                  {project.images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => selectImage(index)}
                      aria-label={`Afficher l’image ${index + 1}`}
                      aria-current={imageIndex === index ? "true" : undefined}
                      className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                        imageIndex === index
                          ? "w-7 bg-indigo-400"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="relative grid h-full min-h-[280px] place-items-center">
            <div
              aria-hidden="true"
              className="absolute h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl"
            />

            <div className="relative text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-indigo-400">
                <CodeIcon />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Aperçu bientôt disponible
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Project information */}
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Projet {String(projectIndex + 1).padStart(2, "0")}
            </p>

            {project.link && (
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                En ligne
              </span>
            )}
          </div>

          <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl">
            {project.name}
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-400">{project.desc}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
            {project.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-7 text-zinc-400"
              >
                <CheckIcon />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackProjectClick(project, "project_link")}
            className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-100 transition hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
          >
            Voir le projet
            <ArrowRightIcon />
          </a>
        )}
      </div>
    </article>
  );
}

function CarouselButton({ direction, onClick, label }) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-zinc-950/65 text-zinc-100 backdrop-blur transition hover:scale-105 hover:border-indigo-400/40 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="h-5 w-5"
      >
        <path
          d={isPrevious ? "m12 5-5 5 5 5" : "m8 5 5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
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

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
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

function CodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
