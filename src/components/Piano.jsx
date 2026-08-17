import React, { useState, useEffect, useCallback, useRef } from 'react'
import SectionHeader from './SectionHeader'
import { Volume2, VolumeX, Sparkles } from 'lucide-react'

// MIDI Note to Frequency helper
const midiToFreq = (midi) => 440 * Math.pow(2, (midi - 69) / 12)

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const WHITE_KEY_INDICES = new Set([0, 2, 4, 5, 7, 9, 11])

// Keyboard mapping
const KEY_MAP = {
  z: 60, // C4
  s: 61, // C#4
  x: 62, // D4
  d: 63, // D#4
  c: 64, // E4
  v: 65, // F4
  g: 66, // F#4
  b: 67, // G4
  h: 68, // G#4
  n: 69, // A4
  j: 70, // A#4
  m: 71, // B4
  q: 72, // C5
  2: 73, // C#5
  w: 74, // D5
  3: 75, // D#5
  e: 76, // E5
  r: 77, // F5
  5: 78, // F#5
  t: 79, // G5
  6: 80, // G#5
  y: 81, // A5
  7: 82, // A#5
  u: 83, // B5
}

const MIDI_TO_KEY = new Map(Object.entries(KEY_MAP).map(([k, v]) => [v, k]))

// Generate piano key definitions from MIDI 60 (C4) to 83 (B5)
const PIANO_KEYS = Array.from({ length: 24 }, (_, i) => {
  const midi = 60 + i
  const noteIndex = midi % 12
  const isWhite = WHITE_KEY_INDICES.has(noteIndex)
  const octave = Math.floor(midi / 12) - 1
  return {
    midi,
    isWhite,
    name: `${NOTE_NAMES[noteIndex]}${octave}`,
    keyChar: MIDI_TO_KEY.get(midi) || '',
  }
})

const WHITE_KEYS = PIANO_KEYS.filter((k) => k.isWhite)
const BLACK_KEYS = PIANO_KEYS.filter((k) => !k.isWhite)

// Calculate horizontal position for black keys
const getBlackKeyLeft = (midi) => {
  const whiteKeysBefore = WHITE_KEYS.filter((k) => k.midi < midi).length
  return (whiteKeysBefore / WHITE_KEYS.length) * 100
}

export default function Piano() {
  const [activeKeys, setActiveKeys] = useState(new Set())
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [soundMode, setSoundMode] = useState('acoustic') // 'acoustic' | 'rhodes'
  const audioCtxRef = useRef(null)
  const masterGainRef = useRef(null)
  const activeVoicesRef = useRef(new Map())

  // Initialize Web Audio Context with Dynamics Compressor
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) {
        const ctx = new AudioCtx()
        
        // Studio dynamics compressor to prevent clipping and add warmth
        const compressor = ctx.createDynamicsCompressor()
        compressor.threshold.setValueAtTime(-12, ctx.currentTime)
        compressor.knee.setValueAtTime(12, ctx.currentTime)
        compressor.ratio.setValueAtTime(6, ctx.currentTime)
        compressor.attack.setValueAtTime(0.004, ctx.currentTime)
        compressor.release.setValueAtTime(0.2, ctx.currentTime)
        compressor.connect(ctx.destination)

        const masterGain = ctx.createGain()
        masterGain.gain.setValueAtTime(0.85, ctx.currentTime)
        masterGain.connect(compressor)

        audioCtxRef.current = ctx
        masterGainRef.current = masterGain
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
    return audioCtxRef.current
  }, [])

  // Synthesize rich, warm acoustic piano sound
  const playNote = useCallback((midi) => {
    if (!soundEnabled) return
    const ctx = getAudioContext()
    const master = masterGainRef.current
    if (!ctx || !master) return

    const now = ctx.currentTime
    const freq = midiToFreq(midi)
    const nyquist = ctx.sampleRate / 2

    // Duration scales naturally with pitch
    const decayDuration = Math.min(3.8, Math.max(1.2, 750 / freq))

    // Note master gain node
    const noteGain = ctx.createGain()
    noteGain.gain.setValueAtTime(1, now)

    // Dynamic lowpass filter to mimic wooden acoustic resonance
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.Q.setValueAtTime(0.6, now)
    
    if (soundMode === 'rhodes') {
      // Warm mellow electric piano timbre
      filter.frequency.setValueAtTime(Math.min(nyquist * 0.7, freq * 8), now)
      filter.frequency.exponentialRampToValueAtTime(Math.max(250, freq * 1.8), now + decayDuration * 0.9)
    } else {
      // Realistic acoustic grand piano resonance
      filter.frequency.setValueAtTime(Math.min(nyquist * 0.9, freq * 14), now)
      filter.frequency.exponentialRampToValueAtTime(Math.max(300, freq * 2.2), now + decayDuration * 0.8)
    }
    
    filter.connect(noteGain).connect(master)

    const oscillators = []

    if (soundMode === 'rhodes') {
      // Warm FM / Rhodes style harmonics
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now)

      const oscHarmonic = ctx.createOscillator()
      oscHarmonic.type = 'triangle'
      oscHarmonic.frequency.setValueAtTime(freq * 2, now)

      const g1 = ctx.createGain()
      g1.gain.setValueAtTime(0.001, now)
      g1.gain.exponentialRampToValueAtTime(0.24, now + 0.008)
      g1.gain.exponentialRampToValueAtTime(0.0001, now + decayDuration)

      const g2 = ctx.createGain()
      g2.gain.setValueAtTime(0.001, now)
      g2.gain.exponentialRampToValueAtTime(0.08, now + 0.006)
      g2.gain.exponentialRampToValueAtTime(0.0001, now + decayDuration * 0.6)

      osc.connect(g1).connect(filter)
      oscHarmonic.connect(g2).connect(filter)

      osc.start(now)
      oscHarmonic.start(now)
      osc.stop(now + decayDuration + 0.05)
      oscHarmonic.stop(now + decayDuration + 0.05)
      oscillators.push(osc, oscHarmonic)
    } else {
      // Multi-harmonic acoustic piano string physical model with micro-detuning
      for (const detuneRatio of [-1.2, 1.2]) {
        const pitchMultiplier = Math.pow(2, detuneRatio / 1200)

        // 6 inharmonic acoustic partials
        for (let partial = 1; partial <= 6; partial++) {
          const inharmonicFreq = freq * pitchMultiplier * partial * Math.sqrt(1 + 0.0006 * partial * partial)
          if (inharmonicFreq >= nyquist * 0.92) break

          const osc = ctx.createOscillator()
          osc.type = partial === 1 ? 'sine' : 'triangle'
          osc.frequency.setValueAtTime(inharmonicFreq, now)

          const gain = ctx.createGain()
          const partialAmplitude = 0.16 * Math.pow(partial, -1.35)
          const partialDecay = Math.max(0.25, decayDuration / (1 + 0.45 * partial))

          gain.gain.setValueAtTime(0.0001, now)
          // Fast acoustic hammer strike attack
          gain.gain.exponentialRampToValueAtTime(partialAmplitude, now + 0.005)
          // Exponential string vibration decay
          gain.gain.exponentialRampToValueAtTime(0.0001, now + partialDecay)

          osc.connect(gain).connect(filter)
          osc.start(now)
          osc.stop(now + partialDecay + 0.05)
          oscillators.push(osc)
        }
      }
    }

    activeVoicesRef.current.set(midi, {
      gain: noteGain,
      oscillators,
      stopTime: now + decayDuration,
    })
  }, [getAudioContext, soundEnabled, soundMode])

  // Clean note release when key is lifted
  const stopNote = useCallback((midi) => {
    const voice = activeVoicesRef.current.get(midi)
    if (voice && audioCtxRef.current) {
      const now = audioCtxRef.current.currentTime
      voice.gain.gain.cancelScheduledValues(now)
      voice.gain.gain.setValueAtTime(voice.gain.gain.value, now)
      // Gentle damping release
      voice.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18)
      setTimeout(() => {
        voice.oscillators?.forEach((osc) => {
          try { osc.stop() } catch {}
        })
        activeVoicesRef.current.delete(midi)
      }, 200)
    }
  }, [])

  const handleKeyDown = useCallback((midi) => {
    playNote(midi)
    setActiveKeys((prev) => {
      const next = new Set(prev)
      next.add(midi)
      return next
    })
  }, [playNote])

  const handleKeyUp = useCallback((midi) => {
    stopNote(midi)
    setActiveKeys((prev) => {
      const next = new Set(prev)
      next.delete(midi)
      return next
    })
  }, [stopNote])

  // Listen to physical keyboard events
  useEffect(() => {
    const isEditing = (e) => {
      const tag = e.target?.tagName
      return tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable
    }

    const onKeyDown = (e) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey || isEditing(e)) return
      const midi = KEY_MAP[e.key.toLowerCase()]
      if (midi !== undefined) {
        handleKeyDown(midi)
      }
    }

    const onKeyUp = (e) => {
      if (isEditing(e)) return
      const midi = KEY_MAP[e.key.toLowerCase()]
      if (midi !== undefined) {
        handleKeyUp(midi)
      }
    }

    const onBlur = () => {
      setActiveKeys(new Set())
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', onBlur)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', onBlur)
    }
  }, [handleKeyDown, handleKeyUp])

  return (
    <SectionHeader
      id="piano"
      title="Play Something"
      aside={
        <div className="flex items-center gap-3">
          {/* Sound Timbre Switcher */}
          <button
            onClick={() => setSoundMode(m => m === 'acoustic' ? 'rhodes' : 'acoustic')}
            className="mono-meta text-[0.6875rem] px-2 py-0.5 rounded-md border border-border bg-surface hover:bg-elevated text-muted-foreground hover:text-foreground transition-colors"
            title="Switch piano timbre"
          >
            {soundMode === 'acoustic' ? 'Grand Piano' : 'Rhodes Electric'}
          </button>

          {/* Sound toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            aria-label={soundEnabled ? 'Mute audio' : 'Enable audio'}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            title={soundEnabled ? 'Mute audio' : 'Unmute audio'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="size-3.5" />
                <span>Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="size-3.5" />
                <span>Muted</span>
              </>
            )}
          </button>
        </div>
      }
    >
      <div className="rounded-xl border border-border bg-surface p-3.5 sm:p-5 shadow-soft">
        {/* Keyboard container */}
        <div className="relative flex h-28 sm:h-36 w-full touch-none select-none rounded-lg overflow-hidden border border-border">
          {/* White keys */}
          {WHITE_KEYS.map((k) => {
            const isActive = activeKeys.has(k.midi)
            return (
              <button
                key={k.midi}
                type="button"
                aria-label={`Note ${k.name}`}
                onPointerDown={() => handleKeyDown(k.midi)}
                onPointerUp={() => handleKeyUp(k.midi)}
                onPointerLeave={() => handleKeyUp(k.midi)}
                className={`relative flex-1 flex flex-col items-center justify-end pb-2 border-r last:border-r-0 border-border/50 transition-colors duration-75 ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'bg-zinc-50 hover:bg-white text-zinc-600 dark:bg-zinc-200 dark:hover:bg-zinc-100 dark:text-zinc-700'
                }`}
              >
                <span className="mono-meta text-[0.625rem] uppercase font-medium">
                  {k.keyChar}
                </span>
              </button>
            )
          })}

          {/* Black keys */}
          {BLACK_KEYS.map((k) => {
            const isActive = activeKeys.has(k.midi)
            const leftPercent = getBlackKeyLeft(k.midi)
            const widthPercent = (100 / WHITE_KEYS.length) * 0.64
            return (
              <button
                key={k.midi}
                type="button"
                aria-label={`Note ${k.name}`}
                onPointerDown={() => handleKeyDown(k.midi)}
                onPointerUp={() => handleKeyUp(k.midi)}
                onPointerLeave={() => handleKeyUp(k.midi)}
                style={{
                  left: `${leftPercent}%`,
                  width: `${widthPercent}%`,
                }}
                className={`absolute top-0 z-10 h-[60%] -translate-x-1/2 flex flex-col items-center justify-end pb-1.5 rounded-b-[4px] border border-black transition-colors duration-75 ${
                  isActive
                    ? 'bg-accent text-white border-accent'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-zinc-500'
                }`}
              >
                <span className="mono-meta text-[0.5625rem] uppercase font-bold">
                  {k.keyChar}
                </span>
              </button>
            )
          })}
        </div>

        {/* Footer helper note */}
        <p className="mono-meta mt-3 text-center sm:text-left text-xs text-muted-foreground/80">
          Click the piano keys or play notes directly from your keyboard.
        </p>
      </div>
    </SectionHeader>
  )
}
