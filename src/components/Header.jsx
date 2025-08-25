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
  ]
  const menuBar = (isMobile) =>
    nav.map(n => (
      <a key={n.href} href={n.href}
        className={`${!isMobile && 'max-sm:hidden'} hover:text-sky-600 dark:hover:text-sky-400`}
      >
        {n.label}
      </a>
    ));

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="container flex items-center justify-between py-3">
          <a href="#top" className="font-semibold tracking-tight">{profile.name}</a>
          <div className="flex items-center gap-4">
            {menuBar(false)}
            <button aria-label="Toggle dark mode" onClick={toggle} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
              {dark ? <SunIcon className="h-5 w-5"/> : <MoonIcon className="h-5 w-5"/>}
            </button>
          </div>
        </div>
      </header>
      <footer className="sm:hidden fixed bottom-0 left-0 w-full container flex justify-center items-center p-3 gap-4 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
          {menuBar(true)}
      </footer>
    </>
  )
}
