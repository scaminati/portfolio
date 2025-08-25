import React from 'react'

export function Education({ items }){
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="grid gap-6">
          {items.map((e, idx) => (
            <div key={idx} className="card p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-semibold">{e.school}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{e.degree}</p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{e.period}</p>
              </div>
              {e.details && <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{e.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
