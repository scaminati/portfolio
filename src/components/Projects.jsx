import React from 'react'

export function Projects({ projects }){
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Selected projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{p.period} · {p.company}</p>
                </div>
                <span className="badge">{p.stack.join(' · ')}</span>
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
