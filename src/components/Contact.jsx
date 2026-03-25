import { useState } from 'react'

import { contactData, socialLinks } from '../constants'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/mzdkpdok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-strong">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-rose-400 font-medium uppercase tracking-widest text-sm mb-2">{contactData.header}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-var">{contactData.title}</h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          {/* Left: Social Links */}
          <div className="space-y-4">
            <h3 className="text-primary-var font-semibold text-lg mb-6">Let's connect</h3>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-rose-500/30 group transition-all duration-200 hover:-translate-y-0.5 glow-hover"
              >
                <span className="text-gray-300 group-hover:text-rose-400 transition-colors">{link.icon}</span>
                <div>
                  <p className="text-muted text-sm font-semibold tracking-wider">{link.label}</p>
                </div>
                <span className="ml-auto text-gray-600 group-hover:text-rose-400 transition-colors">↗</span>
              </a>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div className="glass rounded-2xl p-6 border border-white/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-primary-var font-semibold text-lg">Message Sent!</p>
                <p className="text-muted text-sm mt-2">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-muted text-xs font-medium uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-card-var border border-var rounded-xl px-4 py-3 text-primary-var placeholder-[var(--text-muted)] text-sm outline-none focus:border-rose-500/60 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-muted text-xs font-medium uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-card-var border border-var rounded-xl px-4 py-3 text-primary-var placeholder-[var(--text-muted)] text-sm outline-none focus:border-rose-500/60 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Jatin, I'd like to connect about..."
                    className="w-full bg-card-var border border-var rounded-xl px-4 py-3 text-primary-var placeholder-[var(--text-muted)] text-sm outline-none focus:border-rose-500/60 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-rose-500/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message ✉️'}
                </button>
                {error && (
                  <p className="text-red-400 text-xs text-center mt-1">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
