import React from 'react'
import { skillCategories } from '../constants'
import SectionHeader from './SectionHeader'
import {
  Code2,
  Server,
  Database,
  Terminal,
  Wrench,
  Cpu,
} from 'lucide-react'

const categoryIcons = {
  'Frontend': Code2,
  'Backend & APIs': Server,
  'Databases & ORM': Database,
  'Languages': Terminal,
  'Tools & Ecosystem': Wrench,
  'Core Computer Science': Cpu,
}

export default function Skills() {
  return (
    <SectionHeader id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((cat) => {
          const Icon = categoryIcons[cat.category] || Code2
          return (
            <div
              key={cat.category}
              className="p-4 rounded-xl border border-border/80 bg-surface/50 hover:bg-surface transition-colors duration-150"
            >
              {/* Category Title with Lucide Icon */}
              <div className="flex items-center gap-2 mb-3">
                <Icon className="size-4 text-accent" />
                <h3 className="mono-label text-foreground font-semibold">
                  {cat.category}
                </h3>
              </div>

              {/* Skill Badges */}
              <ul className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="mono-meta text-[0.75rem] rounded-md border border-border bg-elevated/60 px-2 py-0.5 text-muted-foreground transition-all duration-150 hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </SectionHeader>
  )
}
