import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

export function Hero({ profile }){
  return (
    <section id="top" className="section">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          {profile.title}
        </h1>
        <p className="mt-6 leading-relaxed text-slate-700 dark:text-slate-300">{profile.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a className="badge" href={`mailto:${profile.contact.email}`}><MdEmail /> {profile.contact.email}</a>
          {profile.contact.linkedin && <a className="badge" href={profile.contact.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>}
          {profile.location && <span className="badge"><SiGooglemaps /> {profile.location}</span>}
          {profile.contact.github && <a className="badge" href={profile.contact.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>}
          {profile.contact.github && <a className="badge" href={profile.contact.githubPagoPA} target="_blank" rel="noreferrer"><FaGithub /> GitHub PagoPA</a>}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a className="button inline-flex items-center justify-center" 
            href="https://github.com/scaminati/cv/raw/main/src/cv.pdf" 
            target='blank'>Download CV</a>
        </div>
      </div>
    </section>
  )
}
