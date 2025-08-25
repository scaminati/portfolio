import React from 'react'
import { iconFor } from '../icons'

export function Projects({ projects }){
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="card p-6">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{p.period} · {p.company}</p>
              <div className='mt-4 flex flex-wrap gap-1'>
                {p.stack.map((s) => {
                  const Icon = iconFor(s) || (() => null)
                  return (
                    <span key={s} className="badge">
                      <Icon size={12} aria-hidden="true" /> <span className='text-xs'>{s}</span>
                    </span>
                  )
                })}
              </div>
              <ul className="mt-4 list-disc ps-5 space-y-2 text-sm leading-relaxed">
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
