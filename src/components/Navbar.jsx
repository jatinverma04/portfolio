import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { navLinks } from '../constants'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-soft py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-portfolio mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#about"
          className="font-serif italic text-2xl tracking-tight text-foreground hover:text-accent transition-colors duration-200 font-bold"
        >
          Jv.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-elevated border border-transparent hover:border-border transition-all duration-150"
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <Sun className="size-4 stroke-[1.8]" />
            ) : (
              <Moon className="size-4 stroke-[1.8]" />
            )}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground border border-border bg-surface"
          >
            {theme === 'dark' ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground border border-border bg-surface"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-sm text-muted-foreground hover:text-foreground font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
