import { educationData } from '../constants'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-strong">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium uppercase tracking-widest text-sm mb-2">{educationData.header}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-var">{educationData.title}</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block" style={{ backgroundColor: 'var(--accent)' }} />

          <div className="rounded-2xl border border-var bg-card-var p-6 sm:pl-16 relative hover:-translate-y-1 transition-all duration-300">
            {/* Circle on timeline */}
            <div className="absolute left-4 top-7 w-4 h-4 rounded-full bg-violet-500 border-2 border-[#0a0a1a] shadow-lg shadow-violet-500/50 hidden sm:block" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-primary-var font-bold text-xl">
                  {educationData.degree}
                </h3>
                <p className="text-violet-400 font-semibold text-base mt-0.5">
                  {educationData.major}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 self-start sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card-var border border-var text-green-500 text-sm font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {educationData.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card-var border border-var text-yellow-500 text-sm font-semibold">
                  {educationData.grade}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted mb-4">
              <span>🏛️</span>
              <span className="font-medium text-primary-var">{educationData.institution}</span>
              <span className="text-muted opacity-60">·</span>
              <span className="text-sm">{educationData.location}</span>
            </div>

            <p className="text-muted text-sm leading-relaxed">
              {educationData.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {educationData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-card-var border border-var text-muted text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
