import { useMemo, useState } from 'react'
import { iconFor } from '../icons'

/**
 * @param {{ skills: Record<string, string[]> }} props
 */
export function Skills({ skills }) {
  const [q, setQ] = useState('')

  const allCount = useMemo(
    () => Object.values(skills).reduce((sum, arr) => sum + arr.length, 0),
    [skills]
  )

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return skills

    const result = Object.fromEntries(
      Object.entries(skills)
        .map(([group, items]) => {
          const filteredItems = items.filter((s) =>
            s.toLowerCase().includes(query)
          )
          return [group, filteredItems]
        })
        .filter(([, items]) => items.length > 0)
    )

    return result
  }, [q, skills])

  const matchCount = useMemo(
    () => Object.values(filtered).reduce((sum, arr) => sum + arr.length, 0),
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
    <section id="skills" className="section">
      <div className="container">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
           <h2 className="text-2xl font-bold">Skills</h2>
            <div
              className="text-sm text-neutral-600 dark:text-neutral-400"
              aria-live="polite"
            >
              {q.trim()
                ? `Showing ${matchCount} of ${allCount} skills`
                : `Showing all ${allCount} skills`}
            </div>
          </div>
          <div className="relative w-full max-w-xs">
            <input
              type="search"
              inputMode="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter skills…"
              aria-label="Filter skills"
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
            {Object.entries(filtered).map(([group, items]) => (
              <div className="card p-6" key={group}>
                <h3 className="font-semibold mb-3">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => {
                    const Icon = iconFor(s) || (() => null)
                    return (
                      <span key={`${group}:${s}`} className="badge inline-flex items-center gap-1">
                        <Icon size={16} aria-hidden="true" className="shrink-0" />
                        {highlight(s, q)}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded border border-dashed p-8 text-center text-neutral-600 dark:text-neutral-400">
            No skills match “{q}”.
          </div>
        )}
      </div>
    </section>
  )
}
