import { aboutData } from '../constants'

export default function About() {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-rose-400 font-medium uppercase tracking-widest text-sm mb-2">{aboutData.header}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-var">{aboutData.title}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {aboutData.paragraphs.map((para, index) => (
          <p key={index} className="text-muted text-lg leading-relaxed text-justify">
            {para}
          </p>
        ))}

        <div className="flex gap-4 pt-2">
          <a
            href="mailto:jatinverma.cu@gmail.com"
            className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-rose-500/25"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/jatinverma04"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg glass border border-var hover:border-var text-muted hover:text-primary-var font-semibold text-sm transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
