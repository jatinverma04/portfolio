import React, { useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

// Color interpolation helper
const lerp = (a, b, t) => a + (b - a) * t
const lerpColor = (c1, c2, t) => [
  Math.round(lerp(c1[0], c2[0], t)),
  Math.round(lerp(c1[1], c2[1], t)),
  Math.round(lerp(c1[2], c2[2], t)),
]

export default function Banner({ className = '' }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const { isDark } = useTheme()
  const isDarkRef = useRef(isDark)

  useEffect(() => {
    isDarkRef.current = isDark
  }, [isDark])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = 0
    let height = 0
    let dpr = 1
    let transitionProgress = isDarkRef.current ? 1 : 0 // 0 = Light (Day), 1 = Dark (Night)

    // Handle canvas resizing with retina DPR support
    const handleResize = () => {
      if (!containerRef.current || !canvas) return
      const rect = containerRef.current.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    handleResize()
    const resizeObserver = new ResizeObserver(handleResize)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // ─── STARS (Night sky) ─────────────────────────────────────────────
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.72,
      radius: Math.random() * 1.3 + 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.03 + 0.015,
      twinklePhase: Math.random() * Math.PI * 2,
    }))

    // ─── SHOOTING STAR ────────────────────────────────────────────────
    let shootingStar = null
    const createShootingStar = () => ({
      x: Math.random() * width * 0.75,
      y: Math.random() * height * 0.3,
      length: Math.random() * 55 + 35,
      speed: Math.random() * 4 + 7,
      angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
      opacity: 1,
    })

    // ─── DRIFTING CLOUDS (Day & Night) ────────────────────────────────
    const clouds = [
      { x: 0.05, y: 0.35, r: 28, speed: 0.06 },
      { x: 0.32, y: 0.52, r: 38, speed: 0.04 },
      { x: 0.68, y: 0.28, r: 32, speed: 0.05 },
      { x: 0.92, y: 0.48, r: 42, speed: 0.035 },
    ]

    // ─── HOT AIR BALLOONS (7 Balloons across multiple depth layers) ───
    const balloonPresets = [
      {
        id: 1,
        relX: 0.12,
        relY: 0.38,
        size: 34, // Foreground large
        vx: 0.24,
        swaySpeed: 0.018,
        bobPhase: 0,
        burnerTimer: 0,
        burnerFlame: 0.7,
        burnerTarget: 0.7,
        dayPalette: {
          main: '#3b82f6',
          stripe: '#fef08a',
          accent: '#1d4ed8',
          basket: '#92400e',
        },
      },
      {
        id: 2,
        relX: 0.48,
        relY: 0.22,
        size: 26, // Mid-depth
        vx: 0.17,
        swaySpeed: 0.014,
        bobPhase: Math.PI * 0.6,
        burnerTimer: 50,
        burnerFlame: 0.6,
        burnerTarget: 0.6,
        dayPalette: {
          main: '#f97316',
          stripe: '#fed7aa',
          accent: '#ea580c',
          basket: '#78350f',
        },
      },
      {
        id: 3,
        relX: 0.78,
        relY: 0.16,
        size: 18, // High altitude distant
        vx: 0.12,
        swaySpeed: 0.02,
        bobPhase: Math.PI * 1.3,
        burnerTimer: 95,
        burnerFlame: 0.5,
        burnerTarget: 0.5,
        dayPalette: {
          main: '#8b5cf6',
          stripe: '#ede9fe',
          accent: '#6d28d9',
          basket: '#78350f',
        },
      },
      {
        id: 4,
        relX: -0.08,
        relY: 0.48,
        size: 28, // Left-drifting mid-foreground
        vx: 0.21,
        swaySpeed: 0.016,
        bobPhase: Math.PI * 0.9,
        burnerTimer: 130,
        burnerFlame: 0.65,
        burnerTarget: 0.65,
        dayPalette: {
          main: '#10b981',
          stripe: '#d1fae5',
          accent: '#047857',
          basket: '#92400e',
        },
      },
      {
        id: 5,
        relX: 0.32,
        relY: 0.44,
        size: 22, // Mid-sky
        vx: 0.15,
        swaySpeed: 0.017,
        bobPhase: Math.PI * 0.4,
        burnerTimer: 30,
        burnerFlame: 0.55,
        burnerTarget: 0.55,
        dayPalette: {
          main: '#ec4899',
          stripe: '#fce7f3',
          accent: '#db2777',
          basket: '#78350f',
        },
      },
      {
        id: 6,
        relX: 0.92,
        relY: 0.32,
        size: 14, // Distant small
        vx: 0.09,
        swaySpeed: 0.022,
        bobPhase: Math.PI * 1.7,
        burnerTimer: 80,
        burnerFlame: 0.45,
        burnerTarget: 0.45,
        dayPalette: {
          main: '#06b6d4',
          stripe: '#cffafe',
          accent: '#0891b2',
          basket: '#78350f',
        },
      },
      {
        id: 7,
        relX: 0.64,
        relY: 0.49,
        size: 12, // Far horizon tiny
        vx: 0.07,
        swaySpeed: 0.019,
        bobPhase: Math.PI * 0.2,
        burnerTimer: 110,
        burnerFlame: 0.4,
        burnerTarget: 0.4,
        dayPalette: {
          main: '#f59e0b',
          stripe: '#fef3c7',
          accent: '#d97706',
          basket: '#78350f',
        },
      },
    ]

    // Initialize real positions
    const balloons = balloonPresets.map((b) => ({
      ...b,
      x: b.relX * width,
      y: b.relY * height,
      targetY: b.relY * height,
      swayAngle: 0,
    }))

    let time = 0

    // ─── RENDER BALLOON ────────────────────────────────────────────────
    const drawBalloon = (b, nightFactor) => {
      ctx.save()
      ctx.translate(b.x, b.y)
      ctx.rotate(b.swayAngle)

      const s = b.size
      const h = s * 1.35
      const burnerGlow = b.burnerFlame

      // ── 1. Yellow Ambient Halo (Intense at night, subtle in daylight) ──
      const haloOpacity = lerp(0.12 * burnerGlow, 0.5 * burnerGlow, nightFactor)
      if (haloOpacity > 0.01) {
        const haloGrad = ctx.createRadialGradient(0, s * 0.3, s * 0.2, 0, s * 0.3, s * 2.5)
        haloGrad.addColorStop(0, `rgba(250, 204, 21, ${haloOpacity})`)
        haloGrad.addColorStop(0.4, `rgba(234, 179, 8, ${haloOpacity * 0.45})`)
        haloGrad.addColorStop(1, 'rgba(250, 204, 21, 0)')

        ctx.fillStyle = haloGrad
        ctx.beginPath()
        ctx.arc(0, s * 0.3, s * 2.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // ── 2. Balloon Envelope Path ──
      ctx.beginPath()
      ctx.moveTo(0, -h * 0.7)
      ctx.bezierCurveTo(s * 1.25, -h * 0.7, s * 1.1, s * 0.3, s * 0.28, s * 0.75)
      ctx.lineTo(-s * 0.28, s * 0.75)
      ctx.bezierCurveTo(-s * 1.1, s * 0.3, -s * 1.25, -h * 0.7, 0, -h * 0.7)
      ctx.closePath()

      // Gradient for Day vs Night
      // Day: Vibrant palette with sun highlight on left / shadow on right
      // Night: Deep midnight blue envelope (#0f172a / #1e293b)
      if (nightFactor > 0.01) {
        // Night Dark Blue Gradient
        const nightGrad = ctx.createLinearGradient(-s * 0.5, -h * 0.7, s * 0.5, s * 0.75)
        nightGrad.addColorStop(0, '#1e293b')
        nightGrad.addColorStop(0.45, '#0f172a')
        nightGrad.addColorStop(1, '#080d1a')
        ctx.fillStyle = nightGrad
        ctx.globalAlpha = nightFactor
        ctx.fill()
      }

      if (nightFactor < 0.99) {
        // Day Vibrant Palette Gradient
        const dayGrad = ctx.createLinearGradient(-s * 0.8, -h * 0.7, s * 0.8, s * 0.75)
        dayGrad.addColorStop(0, '#ffffff')
        dayGrad.addColorStop(0.2, b.dayPalette.main)
        dayGrad.addColorStop(1, b.dayPalette.accent)
        ctx.fillStyle = dayGrad
        ctx.globalAlpha = 1 - nightFactor
        ctx.fill()
      }

      ctx.globalAlpha = 1
      ctx.strokeStyle = nightFactor > 0.5 ? '#334155' : 'rgba(0,0,0,0.2)'
      ctx.lineWidth = Math.max(0.7, s * 0.03)
      ctx.stroke()

      // ── 3. Vertical Balloon Rib Stripes ──
      ctx.save()
      ctx.clip() // Clip stripes inside envelope

      // Daytime decorative stripe
      if (nightFactor < 0.9) {
        ctx.fillStyle = b.dayPalette.stripe
        ctx.globalAlpha = (1 - nightFactor) * 0.95
        ctx.beginPath()
        ctx.moveTo(-s * 0.35, -h * 0.7)
        ctx.bezierCurveTo(-s * 0.15, -h * 0.2, -s * 0.1, s * 0.3, -s * 0.08, s * 0.75)
        ctx.lineTo(s * 0.08, s * 0.75)
        ctx.bezierCurveTo(s * 0.1, s * 0.3, s * 0.15, -h * 0.2, s * 0.35, -h * 0.7)
        ctx.closePath()
        ctx.fill()
        ctx.globalAlpha = 1
      }

      // Rib lines (Dark navy at night, subtle shade in day)
      ctx.strokeStyle = nightFactor > 0.5 ? '#1e293b' : 'rgba(0,0,0,0.15)'
      ctx.lineWidth = Math.max(0.6, s * 0.025)

      ctx.beginPath()
      ctx.moveTo(0, -h * 0.7)
      ctx.lineTo(0, s * 0.75)
      ctx.moveTo(0, -h * 0.7)
      ctx.bezierCurveTo(s * 0.6, -h * 0.7, s * 0.5, s * 0.3, s * 0.15, s * 0.75)
      ctx.moveTo(0, -h * 0.7)
      ctx.bezierCurveTo(-s * 0.6, -h * 0.7, -s * 0.5, s * 0.3, -s * 0.15, s * 0.75)
      ctx.stroke()

      // ── 4. Glowing Yellow Interior illumination (Burner Lantern Effect) ──
      // Always shines, glowing brightly at night and warm in day
      const innerGlow = ctx.createRadialGradient(0, s * 0.45, 0, 0, s * 0.2, s * 0.95)
      const innerAlpha = lerp(0.45 * burnerGlow, 0.95 * burnerGlow, nightFactor)
      innerGlow.addColorStop(0, `rgba(254, 240, 138, ${innerAlpha})`)
      innerGlow.addColorStop(0.3, `rgba(250, 204, 21, ${innerAlpha * 0.75})`)
      innerGlow.addColorStop(0.65, `rgba(234, 179, 8, ${innerAlpha * 0.35})`)
      innerGlow.addColorStop(1, 'rgba(234, 179, 8, 0)')

      ctx.fillStyle = innerGlow
      ctx.fill()
      ctx.restore()

      // ── 5. Golden Top Rim Light Accent ──
      ctx.beginPath()
      ctx.arc(0, -h * 0.62, s * 0.75, Math.PI * 0.8, Math.PI * 0.2, true)
      ctx.strokeStyle = `rgba(253, 224, 71, ${lerp(0.3, 0.65 * burnerGlow, nightFactor)})`
      ctx.lineWidth = Math.max(0.8, s * 0.04)
      ctx.stroke()

      // ── 6. Burner Collar & Glowing Yellow Flame ──
      const burnerY = s * 0.75
      ctx.fillStyle = '#ca8a04'
      ctx.fillRect(-s * 0.28, burnerY, s * 0.56, s * 0.08)

      // Flame core
      const flameHeight = s * 0.28 * burnerGlow
      const flameGrad = ctx.createRadialGradient(0, burnerY + s * 0.08, 0, 0, burnerY + s * 0.08, flameHeight)
      flameGrad.addColorStop(0, '#ffffff')
      flameGrad.addColorStop(0.25, '#fef08a')
      flameGrad.addColorStop(0.6, '#facc15')
      flameGrad.addColorStop(1, 'rgba(234, 179, 8, 0)')

      ctx.fillStyle = flameGrad
      ctx.beginPath()
      ctx.ellipse(0, burnerY + s * 0.08, s * 0.15 * burnerGlow, flameHeight, 0, 0, Math.PI * 2)
      ctx.fill()

      // ── 7. Suspension Ropes ──
      const basketY = s * 1.15
      const basketW = s * 0.32
      const basketH = s * 0.24

      ctx.strokeStyle = `rgba(250, 204, 21, ${lerp(0.4, 0.85, nightFactor)})`
      ctx.lineWidth = Math.max(0.6, s * 0.02)
      ctx.beginPath()
      ctx.moveTo(-s * 0.24, burnerY + s * 0.08)
      ctx.lineTo(-basketW * 0.45, basketY)
      ctx.moveTo(s * 0.24, burnerY + s * 0.08)
      ctx.lineTo(basketW * 0.45, basketY)
      ctx.moveTo(-s * 0.1, burnerY + s * 0.08)
      ctx.lineTo(-basketW * 0.2, basketY)
      ctx.moveTo(s * 0.1, burnerY + s * 0.08)
      ctx.lineTo(basketW * 0.2, basketY)
      ctx.stroke()

      // ── 8. Wicker Basket ──
      ctx.fillStyle = nightFactor > 0.5 ? '#78350f' : b.dayPalette.basket
      ctx.strokeStyle = '#b45309'
      ctx.lineWidth = Math.max(0.6, s * 0.02)
      ctx.fillRect(-basketW / 2, basketY, basketW, basketH)
      ctx.strokeRect(-basketW / 2, basketY, basketW, basketH)

      // ── 9. Warm Bounce Light ──
      const bounceGrad = ctx.createRadialGradient(0, basketY + basketH + 2, 0, 0, basketY + basketH + 2, s * 0.4)
      bounceGrad.addColorStop(0, `rgba(250, 204, 21, ${0.45 * burnerGlow * nightFactor + 0.15})`)
      bounceGrad.addColorStop(1, 'rgba(250, 204, 21, 0)')
      ctx.fillStyle = bounceGrad
      ctx.beginPath()
      ctx.ellipse(0, basketY + basketH + 2, s * 0.3, s * 0.08, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    // ─── MAIN ANIMATION LOOP ───────────────────────────────────────────
    const animate = () => {
      time += 0.016

      // Smoothly transition between Day (0) and Night (1) on theme change
      const targetMode = isDarkRef.current ? 1 : 0
      transitionProgress += (targetMode - transitionProgress) * 0.06
      const nf = transitionProgress

      ctx.clearRect(0, 0, width, height)

      // ── 1. SKY GRADIENT (Smooth Day to Night Transition) ──
      // Day: Cerulean blue top -> Soft sky cyan -> Warm golden morning horizon
      // Night: Midnight navy top -> Deep indigo -> Warm dusk purple horizon
      const topColor = lerpColor([125, 211, 252], [4, 7, 20], nf)
      const midColor = lerpColor([186, 230, 253], [11, 17, 44], nf)
      const horizonColor = lerpColor([254, 243, 199], [49, 27, 71], nf)
      const groundColor = lerpColor([253, 230, 138], [30, 17, 42], nf)

      const skyGrad = ctx.createLinearGradient(0, 0, 0, height)
      skyGrad.addColorStop(0, `rgb(${topColor.join(',')})`)
      skyGrad.addColorStop(0.48, `rgb(${midColor.join(',')})`)
      skyGrad.addColorStop(0.85, `rgb(${horizonColor.join(',')})`)
      skyGrad.addColorStop(1, `rgb(${groundColor.join(',')})`)

      ctx.fillStyle = skyGrad
      ctx.fillRect(0, 0, width, height)

      // ── 2. CELESTIAL BODIES (Sun vs Crescent Moon) ──
      // Sun (Daylight)
      if (nf < 0.98) {
        const sunAlpha = 1 - nf
        const sunX = width * 0.22
        const sunY = height * 0.32
        const sunR = 18

        const sunHalo = ctx.createRadialGradient(sunX, sunY, sunR * 0.6, sunX, sunY, sunR * 4.5)
        sunHalo.addColorStop(0, `rgba(254, 240, 138, ${0.45 * sunAlpha})`)
        sunHalo.addColorStop(0.4, `rgba(253, 224, 71, ${0.18 * sunAlpha})`)
        sunHalo.addColorStop(1, 'rgba(253, 224, 71, 0)')

        ctx.fillStyle = sunHalo
        ctx.beginPath()
        ctx.arc(sunX, sunY, sunR * 4.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(255, 253, 231, ${sunAlpha})`
        ctx.beginPath()
        ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2)
        ctx.fill()
      }

      // Crescent Moon (Night)
      if (nf > 0.02) {
        const moonAlpha = nf
        const moonX = width * 0.78
        const moonY = height * 0.22
        const moonR = 15

        // Moon halo
        const moonHalo = ctx.createRadialGradient(moonX, moonY, moonR * 0.8, moonX, moonY, moonR * 3.8)
        moonHalo.addColorStop(0, `rgba(254, 240, 138, ${0.28 * moonAlpha})`)
        moonHalo.addColorStop(0.5, `rgba(250, 204, 21, ${0.08 * moonAlpha})`)
        moonHalo.addColorStop(1, 'rgba(250, 204, 21, 0)')
        ctx.fillStyle = moonHalo
        ctx.beginPath()
        ctx.arc(moonX, moonY, moonR * 3.8, 0, Math.PI * 2)
        ctx.fill()

        // Crescent shape
        ctx.save()
        ctx.fillStyle = `rgba(254, 240, 138, ${moonAlpha})`
        ctx.beginPath()
        ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalCompositeOperation = 'destination-out'
        ctx.beginPath()
        ctx.arc(moonX - moonR * 0.45, moonY - moonR * 0.25, moonR * 0.9, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // ── 3. STARS & SHOOTING STARS (Fading in at Night) ──
      if (nf > 0.05) {
        stars.forEach((star) => {
          const twinkle = Math.sin(time * 2.2 + star.twinklePhase) * 0.35 + 0.65
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * twinkle * nf})`
          ctx.beginPath()
          ctx.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2)
          ctx.fill()
        })

        // Shooting Star
        if (!shootingStar && Math.random() < 0.008 && nf > 0.7) {
          shootingStar = createShootingStar()
        }

        if (shootingStar) {
          ctx.save()
          ctx.strokeStyle = `rgba(254, 240, 138, ${shootingStar.opacity * nf})`
          ctx.lineWidth = 1.4
          ctx.beginPath()
          ctx.moveTo(shootingStar.x, shootingStar.y)
          ctx.lineTo(
            shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
            shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
          )
          ctx.stroke()
          ctx.restore()

          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed
          shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed
          shootingStar.opacity -= 0.02
          if (shootingStar.opacity <= 0) {
            shootingStar = null
          }
        }
      }

      // ── 4. DRIFTING CUMULUS CLOUDS (Soft white in day, subtle mist at night) ──
      clouds.forEach((c) => {
        c.x += c.speed * 0.002
        if (c.x > 1.2) c.x = -0.2

        const cx = c.x * width
        const cy = c.y * height
        const cloudColor = lerpColor([255, 255, 255], [30, 27, 75], nf)
        const cloudAlpha = lerp(0.35, 0.16, nf)

        ctx.fillStyle = `rgba(${cloudColor.join(',')}, ${cloudAlpha})`
        ctx.beginPath()
        ctx.arc(cx, cy, c.r, 0, Math.PI * 2)
        ctx.arc(cx + c.r * 0.7, cy - c.r * 0.3, c.r * 0.8, 0, Math.PI * 2)
        ctx.arc(cx + c.r * 1.4, cy, c.r * 0.9, 0, Math.PI * 2)
        ctx.arc(cx - c.r * 0.7, cy, c.r * 0.7, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      })

      // ── 5. DISTANT MOUNTAINS & HORIZON RIDGES ──
      // Distant ridge
      const mtnColor1 = lerpColor([147, 197, 253], [9, 13, 31], nf)
      ctx.fillStyle = `rgb(${mtnColor1.join(',')})`
      ctx.beginPath()
      ctx.moveTo(0, height)
      ctx.lineTo(0, height * 0.72)
      ctx.bezierCurveTo(width * 0.25, height * 0.65, width * 0.45, height * 0.78, width * 0.68, height * 0.69)
      ctx.bezierCurveTo(width * 0.82, height * 0.64, width * 0.92, height * 0.74, width, height * 0.67)
      ctx.lineTo(width, height)
      ctx.closePath()
      ctx.fill()

      // Near ridge / hills
      const mtnColor2 = lerpColor([187, 247, 208], [6, 8, 20], nf)
      ctx.fillStyle = `rgb(${mtnColor2.join(',')})`
      ctx.beginPath()
      ctx.moveTo(0, height)
      ctx.lineTo(0, height * 0.84)
      ctx.bezierCurveTo(width * 0.3, height * 0.79, width * 0.7, height * 0.86, width, height * 0.81)
      ctx.lineTo(width, height)
      ctx.closePath()
      ctx.fill()

      // Night distant city lights
      if (nf > 0.3) {
        for (let i = 0; i < 24; i++) {
          const lx = (i / 24) * width + Math.sin(i * 99) * 12
          const ly = height * 0.82 + (Math.cos(i * 37) * 0.5 + 0.5) * height * 0.12
          const glow = Math.sin(time * 3 + i) * 0.3 + 0.7
          ctx.fillStyle = `rgba(250, 204, 21, ${0.5 * glow * nf})`
          ctx.beginPath()
          ctx.arc(lx, ly, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // ── 6. UPDATE & DRAW 7 HOT AIR BALLOONS ──
      // Sort balloons by size so smaller distant balloons are drawn behind larger foreground ones
      balloons.forEach((b) => {
        // Continuous horizontal drift
        b.x += b.vx
        if (b.x - b.size * 2 > width) {
          b.x = -b.size * 2.5
          b.y = Math.random() * (height * 0.42) + height * 0.12
          b.targetY = b.y
        }

        // Sinusoidal vertical bobbing
        b.bobPhase += 0.02
        b.y = b.targetY + Math.sin(b.bobPhase) * (b.size * 0.2)

        // Gentle angular sway
        b.swayAngle = Math.sin(time * 1.5 + b.bobPhase) * 0.035

        // Burner flame pulse cycle
        b.burnerTimer++
        if (b.burnerTimer > 115) {
          b.burnerTarget = 0.95 + Math.random() * 0.15
          if (b.burnerTimer > 155) {
            b.burnerTarget = 0.45 + Math.random() * 0.15
            b.burnerTimer = 0
          }
        }
        b.burnerFlame += (b.burnerTarget - b.burnerFlame) * 0.08

        drawBalloon(b, nf)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`group relative h-36 sm:h-48 w-full overflow-hidden rounded-2xl border border-border shadow-soft ${className}`}
    >
      {/* 60FPS Dynamic Day & Night Animated Canvas with 7 Hot Air Balloons */}
      <canvas
        ref={canvasRef}
        className="size-full block transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
      />

      {/* Subtle edge highlight and ambient vignette */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5 rounded-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
