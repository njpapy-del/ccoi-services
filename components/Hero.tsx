'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { BsStars } from 'react-icons/bs'

const slogans = [
  'Engineering the Future with AI',
  'Intelligent Systems at Scale',
  'SaaS & CRM Excellence',
  'Data-Driven Innovation',
]

/* ─── Particle canvas ─────────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const particles: {
      x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string
    }[] = []

    const colors = ['#00B4FF', '#7C3AED', '#06B6D4', '#a855f7']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Spawn particles
    const N = Math.min(Math.floor(window.innerWidth / 10), 120)
    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 180, 255, ${(1 - dist / 120) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0" />
}

/* ─── Typing indicator ─────────────────────────────────────────────────── */
function TypingText() {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = slogans[idx]
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed === target) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIdx(i => (i + 1) % slogans.length)
    }
  }, [displayed, deleting, idx])

  return (
    <div className="font-mono text-base md:text-lg text-primary/80 min-h-[1.8rem] flex items-center gap-1">
      <span>{displayed}</span>
      <span className="animate-blink text-primary">|</span>
    </div>
  )
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Particles */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #050508 100%)',
        }}
      />

      {/* Horizontal glow line */}
      <div
        className="absolute top-1/2 left-0 right-0 h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, #00B4FF 40%, #7C3AED 60%, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 pb-20">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <BsStars className="text-primary" />
            AI &amp; Intelligent Systems
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="block text-white">CCOI</span>
          <span className="block gradient-text">SERVICES</span>
        </motion.h1>

        {/* Typing slogan */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TypingText />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          We are a team of <span className="text-white font-semibold">6 elite software engineers</span>{' '}
          building next-generation AI systems, SaaS platforms and intelligent solutions for{' '}
          <span className="text-primary">enterprises across Europe and the USA</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <a href="#contact" className="btn-primary text-white font-semibold">
            Start a Project
          </a>
          <a href="#services" className="btn-outline font-semibold">
            Explore Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-20 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {[
            { value: '6+', label: 'Engineers' },
            { value: '50+', label: 'Projects' },
            { value: '2', label: 'Continents' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-primary transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <HiArrowDown size={16} />
      </motion.a>
    </section>
  )
}
