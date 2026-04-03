import { projects } from '../constants'


export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-strong">
      <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-violet-400 font-medium uppercase tracking-widest text-sm mb-2">Things I've built</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-var">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-2xl border border-var bg-card-var p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300`}
          >
            {/* Top */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg" style={{ backgroundColor: 'var(--accent-soft)' }}>
                  {project.emoji}
                </div>
                <div>
                  <h3 className="text-primary-var font-bold text-lg leading-tight">{project.name}</h3>
                  <p className="text-muted text-xs">{project.tagline}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {project.bullets.map((point, i) => (
                  <li key={i} className="flex gap-2 text-muted text-sm leading-relaxed">
                    <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-card-var border border-var text-muted text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={project.demo}
                className="flex-1 text-center py-2 rounded-lg bg-card-var border border-var text-muted hover:text-primary-var text-sm font-semibold transition-all"
              >
                Live Demo ↗
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-card-var border border-var text-muted hover:text-primary-var text-sm font-semibold transition-all"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
