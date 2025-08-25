import React from 'react'

export function Contact({ profile }){
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card p-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Interested in working together or have a question? Reach out.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a className="badge" href={`mailto:${profile.contact.email}`}>✉️ {profile.contact.email}</a>
            <a className="badge" href={`tel:${profile.contact.phone.replace(/\s+/g,'')}`}>📞 {profile.contact.phone}</a>
            {profile.contact.github && <a className="badge" href={profile.contact.github} target="_blank" rel="noreferrer">🐙 GitHub</a>}
            {profile.contact.linkedin && <a className="badge" href={profile.contact.linkedin} target="_blank" rel="noreferrer">in LinkedIn</a>}
          </div>
        </div>
      </div>
    </section>
  )
}
