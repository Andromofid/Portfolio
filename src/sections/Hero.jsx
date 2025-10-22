import React from 'react'
import { profile } from '../data.js'

export default function Hero(){
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid md:grid-cols-12 items-center gap-8">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full border border-slate-200 dark:border-slate-700 mb-4">Disponible pour mission Freelance</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Développeur Web Full‑Stack<br/><span className="text-primary-700 dark:text-primary">Laravel · React</span></h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            Je conçois des APIs Laravel performantes, des interfaces React modernes et des solutions en temps réel.
            Expérience freelance avec la startup <b>FIXI</b>. Basé à {profile.location}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={profile.cvUrl} className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl shadow-soft hover:opacity-95">Télécharger CV (PDF)</a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">Me contacter</a>
            <a href={profile.github} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700">GitHub</a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="glass rounded-2xl p-5 shadow-soft border border-slate-200/60 dark:border-slate-700/60">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600"></div>
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{profile.location} • <a className="underline" href={"mailto:"+profile.email}>{profile.email}</a></p>
                <p className="text-sm text-slate-500 dark:text-slate-400"><a className="underline" href={profile.linkedin} target="_blank">LinkedIn</a> • <a className="underline" href={profile.github} target="_blank">GitHub</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}