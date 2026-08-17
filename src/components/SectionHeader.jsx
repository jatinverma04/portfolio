import React from 'react'

export default function SectionHeader({
  id,
  title,
  aside,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-10 sm:py-14 border-t border-border/60 ${className}`}
    >
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="section-heading text-foreground">{title}</h2>
        {aside && <div className="text-sm text-muted-foreground">{aside}</div>}
      </div>
      {children}
    </section>
  )
}
