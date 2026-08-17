import React from 'react'
import { educationData } from '../constants'
import SectionHeader from './SectionHeader'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

export default function Education() {
  return (
    <SectionHeader id="education" title="Education">
      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-border bg-surface p-5 sm:p-6 transition-all duration-150 hover:border-accent/30 shadow-soft"
          >
            {/* Header: Degree & Duration */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/90">
                    {edu.institution}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Badges: Duration & CGPA */}
              <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-0">
                <span className="mono-meta inline-flex items-center gap-1 text-[0.75rem] px-2.5 py-0.5 rounded-full border border-border bg-elevated text-muted-foreground">
                  <Calendar className="size-3" />
                  {edu.duration}
                </span>
                <span className="mono-meta inline-flex items-center gap-1 text-[0.75rem] px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  <Award className="size-3" />
                  {edu.grade}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
              {edu.description}
            </p>

            {/* Coursework Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/50">
              {edu.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono-meta text-[0.7rem] px-2 py-0.5 rounded-md border border-border bg-elevated/70 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionHeader>
  )
}
