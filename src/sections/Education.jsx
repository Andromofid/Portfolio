import React from "react";
import { education } from "../data.js";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Formation</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {education.map((ed) => (
          <div
            key={ed.school}
            className="group glass rounded-2xl p-5 shadow-soft border flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-20 h-20 mb-3 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden border">
              {ed.img ? (
                <img
                  src={ed.img}
                  alt={ed.school}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              ) : (
                <span className="text-slate-400 text-xs">Image à venir</span>
              )}
            </div>
            <h3 className="font-semibold text-lg">{ed.school}</h3>
            <p className="text-sm text-slate-500 mt-1">{ed.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
