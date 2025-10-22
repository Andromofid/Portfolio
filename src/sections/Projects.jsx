import React, { useState } from "react";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Projets</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const total = project.images?.length || 0;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  return (
    <article className="group rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-soft hover:shadow-xl transition-all">
      {/* Image carousel */}
      <div className="relative aspect-video overflow-hidden">
        {total > 0 ? (
          <>
            <img
              src={project.images[index]}
              alt={`${project.name} image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent"></div>
            {/* Year */}
            <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700">
              {project.year}
            </span>

            {/* Nav arrows */}
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-1 rounded-full hover:bg-white"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-1 rounded-full hover:bg-white"
                >
                  ›
                </button>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {project.images.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === index ? "bg-primary-600" : "bg-white/70"
                      }`}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="h-full w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 text-sm">
            Image à venir
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg">{project.name}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {project.desc}
        </p>

        {project.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {project.bullets?.length > 0 && (
          <ul className="mt-3 list-disc list-inside text-sm space-y-1">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
