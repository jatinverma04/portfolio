import React, { useState } from 'react'
import { personalData } from '../constants'
import SectionHeader from './SectionHeader'
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: false })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false })
    try {
      const res = await fetch('https://formspree.io/f/mzdkpdok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus({ loading: false, success: true, error: false })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ loading: false, success: false, error: true })
      }
    } catch {
      setStatus({ loading: false, success: false, error: true })
    }
  }

  return (
    <SectionHeader id="contact" title="Get In Touch">
      <div className="space-y-6">
        {/* Editorial lead */}
        <p className="text-lead text-muted-foreground">
          I'm currently available for full-time opportunities, freelance engineering, and interesting open-source collaborations. If you have a question, opportunity, or just want to connect, feel free to reach out.
        </p>

        {/* Big Email Link */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={personalData.social.email}
            className="group inline-flex items-center gap-2 font-serif text-xl sm:text-2xl text-foreground hover:text-accent transition-colors duration-150"
          >
            <span>{personalData.email}</span>
            <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs border border-border bg-surface hover:bg-elevated text-muted-foreground hover:text-foreground transition-all"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-500" />
                <span className="text-emerald-500 font-mono text-[0.7rem]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span className="font-mono text-[0.7rem]">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <a
            href={personalData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-medium text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
          >
            <GitHubIcon className="size-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={personalData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-medium text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
          >
            <LinkedInIcon className="size-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalData.social.email}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-medium text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
          >
            <Mail className="size-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Minimalist Message Form */}
        <div className="mt-8 pt-6 border-t border-border/60">
          <h3 className="mono-label text-xs text-muted-foreground mb-4">
            Send a quick message
          </h3>

          {status.success ? (
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2">
              <Check className="size-4 shrink-0" />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground/60 text-xs sm:text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground/60 text-xs sm:text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Your message or project details..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground/60 text-xs sm:text-sm outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {status.error && (
                <p className="text-xs text-rose-500 font-mono">
                  Could not send message. Please email directly at {personalData.email}
                </p>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-foreground text-background hover:opacity-90 transition-opacity disabled:opacity-50 shadow-soft"
              >
                <Send className="size-3.5" />
                <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionHeader>
  )
}
