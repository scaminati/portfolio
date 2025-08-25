import React from 'react'

export function Experience({ roles }){
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <ol className="relative border-s border-slate-200 dark:border-slate-700 ml-3">
          {roles.map((role, idx) => (
            <li key={idx} className="mb-10 ms-6">
              <span className="absolute -start-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 ring-8 ring-white dark:ring-slate-900"></span>
              <div className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{role.title} · {role.company}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{role.location}</p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{role.period}</p>
                </div>
                <ul className="mt-4 list-disc ps-5 space-y-2 text-sm leading-relaxed">
                  {role.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
