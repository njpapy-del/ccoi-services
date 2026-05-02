'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { BsStars } from 'react-icons/bs'
import Image from 'next/image'

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      <ParticleCanvas />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #050508 100%)' }}
      />
      <div
        className="absolute top-1/2 left-0 right-0 h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, #00B4FF 40%, #7C3AED 60%, transparent)' }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-14">

        {/* ── Left: text ── */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            className="flex justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">
              <BsStars className="text-primary" />
              AI &amp; Intelligent Systems
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-7xl font-black leading-none tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="block text-white">CCOI</span>
            <span className="block gradient-text">SERVICES</span>
          </motion.h1>

          <motion.div
            className="flex justify-center lg:justify-start mb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TypingText />
          </motion.div>

          <motion.p
            className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Équipe de <span className="text-white font-semibold">6 ingénieurs d'élite</span> basés
            à <span className="text-primary font-semibold">Tunis</span>, construisant des systèmes
            IA, plateformes SaaS et solutions intelligentes pour les entreprises{' '}
            <span className="text-white font-semibold">en Europe et aux USA</span>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <a href="#contact" className="btn-primary text-white font-semibold">
              Démarrer un Projet
            </a>
            <a href="#services" className="btn-outline font-semibold">
              Nos Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {[
              { value: '6+', label: 'Ingénieurs' },
              { value: '50+', label: 'Projets' },
              { value: '2', label: 'Continents' },
            ].map(stat => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: founder photo ── */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center gap-5"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Outer glow ring */}
          <div className="relative">
            {/* Animated rotating border */}
            <motion.div
              className="absolute -inset-2 rounded-3xl opacity-60"
              style={{
                background: 'conic-gradient(from 0deg, #00B4FF, #7C3AED, #06B6D4, #00B4FF)',
                borderRadius: '28px',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            {/* Blur mask for the rotating border */}
            <div
              className="absolute -inset-2 rounded-3xl"
              style={{
                background: 'conic-gradient(from 0deg, #00B4FF, #7C3AED, #06B6D4, #00B4FF)',
                borderRadius: '28px',
                filter: 'blur(8px)',
                opacity: 0.4,
              }}
            />
            {/* Photo container */}
            <div
              className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden"
              style={{ border: '2px solid rgba(0,180,255,0.3)' }}
            >
              <Image
                src="/ingenieurIA.png"
                alt="Ndzouakeu Jeannot Youssef — Founder, CCOI SERVICES"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, 288px"
                priority
              />
              {/* Bottom gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: 'linear-gradient(to top, #050508ee, transparent)' }}
              />
              {/* Name badge on photo */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl px-4 py-2.5">
                  <div className="text-white font-bold text-sm">Ndzouakeu Jeannot Youssef</div>
                  <div className="text-primary text-xs font-mono mt-0.5">Founder & Chief AI Engineer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact quick pills */}
          <div className="flex gap-2">
            <a
              href="https://wa.me/21626089553"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all hover:scale-105"
              style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366' }}
            >
              WhatsApp · +216 26 089 553
            </a>
          </div>
          <a
            href="mailto:ccoiservice28@gmail.com"
            className="text-xs text-slate-500 hover:text-primary transition-colors font-mono"
          >
            ccoiservice28@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <HiArrowDown size={16} />
      </motion.a>
    </section>
  )
}
