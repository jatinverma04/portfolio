import React from 'react'
import coverImage from '../images/cover.jpg'

export default function Banner({ className = '' }) {
  return (
    <div
      className={`group relative h-32 sm:h-44 w-full overflow-hidden rounded-2xl border border-border bg-elevated shadow-soft ${className}`}
    >
      {/* Aesthetic Anime / Pixel Art Lo-Fi Cover Image */}
      <img
        src={coverImage}
        alt="Cover banner aesthetic landscape"
        className="size-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="eager"
        decoding="async"
      />

      {/* Subtle Gradient & Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-60 pointer-events-none" />
      
      {/* Light sheen effect on dark/light mode */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5 rounded-2xl pointer-events-none" />
    </div>
  )
}
