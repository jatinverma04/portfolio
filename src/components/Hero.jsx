import React from 'react'
import { motion } from 'framer-motion'
import { personalData } from '../constants'
import Banner from './Banner'
import { LinkPreview } from './ui/LinkPreview'
import photo from '../images/photo.webp'
import { FileText, Mail, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-20 pt-20 pb-10 sm:pt-24 sm:pb-14">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Banner />
      </motion.div>

      {/* Avatar & Header details */}
      <div className="-mt-8 sm:-mt-10 flex items-start gap-4 px-1">
        {/* Avatar with status indicator */}
        <div className="relative shrink-0">
          <img
            src={photo}
            alt={personalData.name}
            className="size-16 sm:size-20 rounded-full border-4 border-background bg-elevated object-cover shadow-soft"
          />
          <span
            className="absolute bottom-1 right-1 size-3 rounded-full bg-emerald-500 ring-2 ring-background animate-pulse-subtle"
            title={personalData.status}
          />
        </div>

        {/* Name and Role */}
        <div className="min-w-0 pt-9 sm:pt-11 flex-1">
          <h1 className="font-serif text-display text-foreground leading-none">
            <LinkPreview
              url={personalData.social.linkedin}
              isStatic={true}
              imageSrc={photo}
              className="hover:text-accent transition-colors duration-200"
            >
              {personalData.name}
            </LinkPreview>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {personalData.role}
          </p>
        </div>
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-lead text-muted-foreground space-y-3"
      >
        <p>{personalData.bio}</p>
      </motion.div>

      {/* Quick Action Links */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 flex flex-wrap items-center gap-2 pt-1"
      >
        {/* Resume */}
        <a
          href={personalData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-foreground text-background hover:opacity-90 transition-all duration-150 shadow-soft"
        >
          <FileText className="size-3.5" />
          <span>Resume</span>
          <ArrowUpRight className="size-3 opacity-70" />
        </a>

        {/* GitHub */}
        <a
          href={personalData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-surface text-foreground hover:bg-elevated hover:border-accent/40 transition-all duration-150"
        >
          <GitHubIcon className="size-3.5 text-muted-foreground" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href={personalData.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-surface text-foreground hover:bg-elevated hover:border-accent/40 transition-all duration-150"
        >
          <LinkedInIcon className="size-3.5 text-muted-foreground" />
          <span>LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href={personalData.social.email}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-surface text-foreground hover:bg-elevated hover:border-accent/40 transition-all duration-150"
        >
          <Mail className="size-3.5 text-muted-foreground" />
          <span>Email</span>
        </a>
      </motion.div>
    </section>
  )
}
