import React from 'react'
import { projects } from '../constants'
import SectionHeader from './SectionHeader'
import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './icons/BrandIcons'

export default function Projects() {
  return (
    <SectionHeader id="projects" title="Selected Projects">
      <div className="space-y-8 sm:space-y-10">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-xl border border-border/80 bg-surface/60 hover:bg-surface p-5 sm:p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-soft"
          >
            {/* Header: Title, Tagline, Year & Action Links */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2.5">
              <div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-150 inline-flex items-center gap-1.5">
                  {project.title}
                  <span className="mono-meta text-xs text-muted-foreground font-normal">
                    · {project.year}
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {project.tagline}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 pt-1 sm:pt-0">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border border-border bg-elevated hover:bg-surface text-foreground hover:border-accent/40 transition-colors"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="size-3 text-muted-foreground" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border border-border bg-elevated hover:bg-surface text-foreground hover:border-accent/40 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GitHubIcon className="size-3 text-muted-foreground" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5 my-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent mt-1 select-none text-xs">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="mono-meta text-[0.7rem] px-2 py-0.5 rounded-md border border-border bg-elevated/70 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionHeader>
  )
}
