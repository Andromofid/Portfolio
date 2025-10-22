import React from 'react'
import { skills } from '../data.js'

export default function Skills(){
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Compétences</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-5 shadow-soft border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="font-semibold mb-3">Tech</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {skills.tech.map((s)=> <span key={s} className="px-3 py-1 rounded-full border">{s}</span>)}
          </div>
        </div>
        <div className="glass rounded-2xl p-5 shadow-soft border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="font-semibold mb-3">Soft skills & Langues</h3>
          <div className="flex flex-wrap gap-2 text-sm mb-3">
            {skills.soft.map((s)=> <span key={s} className="px-3 py-1 rounded-full border">{s}</span>)}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">{skills.languages.join(' • ')}</p>
        </div>
      </div>
    </section>
  )
}