import { skillCategories } from '../constants'


// ─── Skill Pill ───────────────────────────────────────────────────────────────

function SkillPill({ name, icon }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-card-var border border-var hover:border-violet-500/40 hover:bg-theme transition-all duration-200 group">
      <span className="shrink-0">{icon}</span>
      <span className="text-muted group-hover:text-primary-var text-sm font-medium transition-colors">{name}</span>
    </div>
  )
}

// ─── Skills Section ───────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-strong">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium uppercase tracking-widest text-sm mb-2">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-var">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-2xl p-6 border hover:-translate-y-1 transition-all duration-300 glow-hover"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className={`flex items-center gap-2 mb-5 ${cat.headerColor}`}>
                {cat.headerIcon}
                <h3 className="text-base font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
