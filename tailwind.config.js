/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        elevated: 'var(--elevated)',
        foreground: 'var(--foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        hairline: 'var(--hairline)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
      },
      fontSize: {
        'display': ['clamp(1.875rem, 5vw, 2.35rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.5rem, 4vw, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['1.35rem', { lineHeight: '1.25' }],
        'lead': ['0.9375rem', { lineHeight: '1.7' }],
      },
      boxShadow: {
        'lift': '0 14px 34px -16px var(--shadow-tint-strong), 0 3px 10px -5px var(--shadow-tint)',
        'soft': '0 2px 8px -2px var(--shadow-tint)',
      },
      maxWidth: {
        'portfolio': '42rem', // 672px - exact container width of reference site
      },
    },
  },
  plugins: [],
}
