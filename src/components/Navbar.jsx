import React, { useState, useEffect } from 'react'
import { profile } from '../data.js'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(()=>{
    const stored = localStorage.getItem('theme')
    if(stored === 'dark'){ document.documentElement.classList.add('dark'); setDark(true) }
  }, [])

  const toggleDark = () => {
    const root = document.documentElement
    root.classList.toggle('dark')
    const isDark = root.classList.contains('dark')
    setDark(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200/60 dark:border-slate-700/50">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-primary-700 dark:text-primary">{profile.name}</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-primary-700">À propos</a>
          <a href="#skills" className="hover:text-primary-700">Compétences</a>
          <a href="#experience" className="hover:text-primary-700">Expériences</a>
          <a href="#projects" className="hover:text-primary-700">Projets</a>
          <a href="#education" className="hover:text-primary-700">Formation</a>
          <a href="#contact" className="hover:text-primary-700">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          {/* <button onClick={toggleDark} className="rounded-xl px-3 py-2 text-xs border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">{dark ? 'Light' : 'Dark'}</button> */}
          <button onClick={()=>setOpen(!open)} className="md:hidden rounded-xl px-3 py-2 text-xs border border-slate-200 dark:border-slate-700">Menu</button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#about" onClick={()=>setOpen(false)} className="hover:text-primary-700">À propos</a>
            <a href="#skills" onClick={()=>setOpen(false)} className="hover:text-primary-700">Compétences</a>
            <a href="#experience" onClick={()=>setOpen(false)} className="hover:text-primary-700">Expériences</a>
            <a href="#projects" onClick={()=>setOpen(false)} className="hover:text-primary-700">Projets</a>
            <a href="#education" onClick={()=>setOpen(false)} className="hover:text-primary-700">Formation</a>
            <a href="#contact" onClick={()=>setOpen(false)} className="hover:text-primary-700">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
