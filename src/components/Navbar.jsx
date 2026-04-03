import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

import { navLinks } from '../constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'
      }`}
      style={{ border: 'none', outline: 'none' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold gradient-text tracking-tight">
          JV.
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: 'var(--accent)', boxShadow: '0 2px 12px var(--accent-glow)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              Hire Me
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-full glass border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ml-2"
              style={{
                borderColor: 'var(--border-accent)',
                color: 'var(--text-muted)',
                boxShadow: theme === 'dark' ? '0 0 16px var(--accent-glow)' : 'none',
              }}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full glass border transition-all duration-300"
            style={{
              borderColor: 'var(--border-accent)',
              color: 'var(--text-muted)',
            }}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="glass mx-4 mt-2 rounded-xl px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block py-2 text-sm font-medium transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block text-center px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
