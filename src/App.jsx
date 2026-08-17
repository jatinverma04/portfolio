import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import GithubActivity from './components/GithubActivity'
import Education from './components/Education'
import Contact from './components/Contact'
import Quotes from './components/Quotes'
import Piano from './components/Piano'
import { personalData } from './constants'
import { Heart } from 'lucide-react'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
        <Navbar />

        {/* Main single-column layout matching iabhinav.vercel.app */}
        <main className="max-w-portfolio mx-auto px-4 sm:px-6">
          <Hero />
          <Projects />
          <Skills />
          <GithubActivity />
          <Education />
          <Contact />
          <Quotes />
          <Piano />
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
          <div className="max-w-portfolio mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="mono-meta">
              Designed &amp; built by{' '}
              <span className="text-foreground font-medium">{personalData.name}</span>
            </p>
            <p className="mono-meta text-muted-foreground/70">
              {new Date().getFullYear()} · Craft &amp; Simplicity
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
