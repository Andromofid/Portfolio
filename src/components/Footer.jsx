import React from 'react'
export default function Footer(){
  return (
    <footer className="py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Youssef El Mofid. Fait avec React + Tailwind.
    </footer>
  )
}