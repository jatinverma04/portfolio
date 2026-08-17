import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quotes } from '../constants'

export default function Quotes() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (quotes.length < 2) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  if (!quotes || quotes.length === 0) return null
  const currentQuote = quotes[index]

  return (
    <section aria-label="Rotating thoughts" className="py-12 sm:py-16 border-t border-border/60">
      <figure className="flex min-h-36 sm:min-h-40 flex-col items-center justify-center text-center max-w-lg mx-auto px-4">
        <span
          aria-hidden="true"
          className="font-serif text-3xl sm:text-4xl leading-none text-muted-foreground/30 select-none"
        >
          ”
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3"
          >
            <blockquote className="font-serif text-lg sm:text-xl italic text-foreground leading-snug">
              {currentQuote.text}
            </blockquote>
            <figcaption className="mono-label mt-3 text-muted-foreground text-[0.6875rem]">
              <span>{currentQuote.author}</span>
              {currentQuote.source && (
                <span className="text-muted-foreground/60 font-normal">
                  {' '}· {currentQuote.source}
                </span>
              )}
            </figcaption>
          </motion.div>
        </AnimatePresence>
      </figure>
    </section>
  )
}
