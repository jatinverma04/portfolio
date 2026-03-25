import { useTheme } from '../context/ThemeContext'
import { heroData } from '../constants'
import { LinkPreview } from './ui/LinkPreview'
import photo from '../images/photo.webp'
import Starfield from 'react-starfield'

export default function Hero() {
  const { theme, toggleTheme } = useTheme()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding bg-strong"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none [&_canvas]:!absolute [&_canvas]:!z-0">
        {theme === 'dark' && (
          <Starfield
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.05}
            backgroundColor="black"
          />
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-var bg-card-var"
          style={{ color: 'var(--accent)' }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {heroData.badge}
        </div>

        {/* Name */}
        <p
          className="text-lg font-medium mb-3 tracking-widest uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          {heroData.greeting}
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          <LinkPreview url="#" isStatic={true} imageSrc={photo} width={250} height={350} className="gradient-text">
            {heroData.name}
          </LinkPreview>
        </h1>

        {/* Role */}
        <h2
          className="text-2xl md:text-3xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)', opacity: 0.85 }}
        >
          {heroData.role}
        </h2>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {heroData.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={heroData.actions.primary.href}
            className="px-8 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            style={{
              backgroundColor: 'var(--accent)',
              boxShadow: '0 4px 20px var(--accent-glow)',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            {heroData.actions.primary.label}
          </a>
          <a
            href={heroData.actions.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl glass border font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2"
            style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            {heroData.actions.resume.label}
          </a>
          <a
            href={heroData.actions.connect.href}
            className="px-8 py-3.5 rounded-xl glass border font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
          >
            {heroData.actions.connect.label}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-xs animate-float" style={{ color: 'var(--text-muted)' }}>
          <span>Scroll down</span>
          <div className="w-px h-8 bg-gradient-to-b from-current to-transparent" />
        </div>
      </div>
    </section>
  )
}
