import { iconFor } from '../icons'

export function Skills({ skills }){
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div className="card p-6" key={group}>
              <h3 className="font-semibold mb-3">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => {
                    const Icon = iconFor(s)
                  return (
                    <span key={s} className="badge">
                      <Icon size={16} aria-hidden="true" className="shrink-0" /> {s}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
