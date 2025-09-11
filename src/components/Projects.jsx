import { useMemo, useState } from 'react'
import { iconFor } from '../icons'
import { FaGithub } from 'react-icons/fa'

export function Projects({ projects }){
  const [q, setQ] = useState('')
  
  const allCount = useMemo(
    () => projects.length,
    [projects]
  )

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return projects

    const result = projects.filter(
      (p) => p.stack.find((stack) => stack.toLowerCase().includes(query)) != null
    );
    return result
  }, [q, projects])

  const matchCount = useMemo(
    () => filtered.length,
    [filtered]
  )

  const clear = () => setQ('')

  const highlight = (text, query) => {
    if (!query) return text
    const qLower = query.toLowerCase()
    const tLower = text.toLowerCase()
    const idx = tLower.indexOf(qLower)
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <mark>{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    )
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
           <h2 className="text-2xl font-bold">Projects</h2>
            <div
              className="text-sm text-neutral-600 dark:text-neutral-400"
              aria-live="polite"
            >
              {q.trim()
                ? `Showing ${matchCount} of ${allCount} projects`
                : `Showing all ${allCount} projects`}
            </div>
          </div>
          <div className="relative w-full max-w-xs">
            <input
              type="search"
              inputMode="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter projects skills…"
              aria-label="Filter projects skills"
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 pr-10 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-neutral-700 dark:bg-neutral-900"
            />
            {q && (
              <button
                type="button"
                onClick={clear}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:hover:text-neutral-300"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {matchCount > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p, idx) => (
              <article key={idx} className="card p-6">
                <div className='flex items-center'>
                  <h3 className="font-semibold text-lg flex-grow">{p.name}</h3>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 px-3 py-1.5 rounded"
                    >
                      <FaGithub className="w-4 h-4" /> GitHub
                    </a>
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{p.period} · {p.company}</p>
                <div className='mt-4 flex flex-wrap gap-1'>
                  {p.stack.map((s) => {
                    const Icon = iconFor(s) || (() => null)
                    return (
                      <span key={s} className="badge">
                        <Icon size={12} aria-hidden="true" /> <span className='text-xs'>
                          {highlight(s, q)}
                        </span>
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
        ) : (
          <div className="rounded border border-dashed p-8 text-center text-neutral-600 dark:text-neutral-400">
            No projects skills match “{q}”.
          </div>
        )}
      </div>
    </section>
  )
}
