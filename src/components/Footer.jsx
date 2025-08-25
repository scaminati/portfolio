import React from 'react'

export function Footer(){
  return (
    <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
      <p>© {new Date().getFullYear()} · Simone Caminati</p>
    </footer>
  )
}
