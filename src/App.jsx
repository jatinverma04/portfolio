import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen transition-colors duration-400"
        style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer
          className="text-center py-6 text-sm border-t"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <p>
            Designed &amp; Built by{' '}
            <span className="gradient-text font-semibold">Jatin Verma</span>
            {' '}· {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
