import React from 'react'
import { experiences } from '../data.js'

export default function Experience(){
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Expériences</h2>
      <div className="grid gap-4">
        {experiences.map((e)=> (
          <article key={e.title} className="glass rounded-2xl p-5 shadow-soft border">
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-sm text-slate-500">{e.when}</p>
            <ul className="mt-2 list-disc list-inside text-sm space-y-1">
              {e.points.map((p,i)=> <li key={i} dangerouslySetInnerHTML={{__html:p}}/>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}