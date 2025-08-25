import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import profile from './data/profile.js'

export default function App(){
  return (
    <>
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <Skills skills={profile.skills} />
        <Experience roles={profile.experience} />
        <Projects projects={profile.projects} />
        <Education items={profile.education} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
