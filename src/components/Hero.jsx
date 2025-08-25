import React from 'react'

export function Hero({ profile }){
  return (
    <section id="top" className="section">
      <div className="container grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{profile.title}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-slate-700 dark:text-slate-300">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a className="badge" href={`mailto:${profile.contact.email}`}>✉️ {profile.contact.email}</a>
            <a className="badge" href={`tel:${profile.contact.phone.replace(/\s+/g,'')}`}>📞 {profile.contact.phone}</a>
            {profile.contact.github && <a className="badge" href={profile.contact.github} target="_blank" rel="noreferrer">🐙 GitHub</a>}
            {profile.contact.linkedin && <a className="badge" href={profile.contact.linkedin} target="_blank" rel="noreferrer">in LinkedIn</a>}
            {profile.location && <span className="badge">📍 {profile.location}</span>}
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="card p-6">
            <h2 className="font-semibold mb-3">Core stack</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
              {profile.coreStack.map(item => <li key={item} className="">• {item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
