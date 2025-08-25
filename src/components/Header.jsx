import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export function Header({ profile }){
  const [dark, setDark] = React.useState(() => document.documentElement.classList.contains('dark'))
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  const nav = [
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="container flex items-center justify-between py-3">
        <a href="#top" className="font-semibold tracking-tight">{profile.name}<span className="text-sky-500">·</span><span className="text-slate-500 dark:text-slate-400">Portfolio</span></a>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map(n => <a key={n.href} href={n.href} className="hover:text-sky-600 dark:hover:text-sky-400">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-4">
          <a className="hidden sm:inline link" href={`mailto:${profile.contact.email}`}>Email</a>
          <button aria-label="Toggle dark mode" onClick={toggle} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            {dark ? <SunIcon className="h-5 w-5"/> : <MoonIcon className="h-5 w-5"/>}
          </button>
        </div>
      </div>
    </header>
  )
}
