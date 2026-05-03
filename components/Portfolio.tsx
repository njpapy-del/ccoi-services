'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

// ─── Project data ────────────────────────────────────────────────────────────

interface Project {
  title: string
  category: string
  description: string
  features: string[]
  stack: string[]
  color: string
  images: { src: string; alt: string; type: 'img' | 'gradient' }[]
  gradientFrom: string
  gradientTo: string
  icon?: string
}

const projects: Project[] = [
  {
    title: 'LNAYCRM',
    category: 'SaaS / CRM',
    description:
      'Full-stack CRM SaaS platform built for sales teams. Cloud-native architecture on Supabase PostgreSQL (EU Central), with MinIO object storage for call recordings and exports, and Redis BullMQ for AI-powered async analytics queues.',
    features: [
      'AI lead scoring & pipeline automation',
      'Call recording storage with MinIO',
      'Redis BullMQ async analytics engine',
      'Supabase PostgreSQL (EU Central)',
      'REST API with Prisma ORM',
      'GDPR-compliant data residency',
    ],
    stack: ['Node.js', 'Prisma', 'Supabase', 'MinIO', 'Redis', 'React'],
    color: '#00B4FF',
    gradientFrom: '#00B4FF',
    gradientTo: '#0ea5e9',
    images: [
      { src: '/proj-lnaycrm-schema.png', alt: 'LNAYCRM architecture schema', type: 'img' },
      { src: '/proj-lnaycrm-db.png', alt: 'LNAYCRM database schema', type: 'img' },
    ],
  },
  {
    title: 'Strowger OS',
    category: 'AI / Voice Assistant',
    description:
      'Proactive AI operating system (Jarvis) with real-time voice interaction via WebSocket. Integrates Claude API with Ollama fallback, Whisper STT, streaming TTS, travel booking (flights + hotels), and offline face-recognition vision.',
    features: [
      'Claude API + Ollama LLM fallback',
      'Whisper STT — streaming TTS pipeline',
      'Travel search: flights & hotels',
      'Vision: offline face-recognition',
      'LangGraph conversation & travel graphs',
      'Supabase long-term memory',
    ],
    stack: ['Python', 'FastAPI', 'WebSocket', 'LangGraph', 'Claude API', 'Whisper'],
    color: '#7C3AED',
    gradientFrom: '#7C3AED',
    gradientTo: '#6d28d9',
    images: [
      { src: '/proj-strowger-ui.webp', alt: 'Strowger OS Jarvis UI', type: 'img' },
      { src: '/logo-strowger.png', alt: 'Strowger OS logo', type: 'img' },
    ],
  },
  {
    title: 'Scorpus',
    category: 'AI / Agent Platform',
    description:
      'Multi-LLM conversational agent platform with persistent contextual memory. Runs Qwen locally with Claude as a high-quality fallback, maintaining four memory types (conversation, preference, habit, fact) and a proactive background worker.',
    features: [
      'Multi-LLM: Qwen local + Claude fallback',
      'Persistent memory: 4 types (conversation, preference, habit, fact)',
      'Proactive background worker',
      'Session management with 30-min TTL',
      'Zod schema validation throughout',
      'Modular plugin architecture',
    ],
    stack: ['TypeScript', 'Node.js', 'Express', 'Zod', 'LangChain', 'Ollama'],
    color: '#a855f7',
    gradientFrom: '#a855f7',
    gradientTo: '#9333ea',
    images: [
      { src: '', alt: 'Scorpus platform', type: 'gradient' },
    ],
  },
  {
    title: 'Fiches Terrain — UCT',
    category: 'Web App / Education',
    description:
      'Field survey digitization app for UCT orientation advisors. Combines React voice input with a custom NLP service to auto-fill forms from spoken data, quality scoring, and bulk export to Excel/CSV — fully containerized with Docker.',
    features: [
      'Voice input with browser Web Speech API',
      'NLP auto-fill from spoken answers',
      'Quality score per completed form',
      'Excel / CSV bulk export',
      'Campaign management & JWT auth',
      'Docker + PostgreSQL + FastAPI backend',
    ],
    stack: ['React', 'Vite', 'TailwindCSS', 'FastAPI', 'PostgreSQL', 'Docker'],
    color: '#06B6D4',
    gradientFrom: '#06B6D4',
    gradientTo: '#0891b2',
    images: [
      { src: '', alt: 'Fiches terrain app', type: 'gradient' },
    ],
  },
]

// ─── Gradient image placeholder ──────────────────────────────────────────────

function GradientCard({ from, to, icon }: { from: string; to: string; icon?: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}22 0%, ${to}44 100%)` }}
    >
      <span className="text-6xl opacity-30 select-none">{icon ?? '⬡'}</span>
    </div>
  )
}

// ─── Image carousel ──────────────────────────────────────────────────────────

function ImageCarousel({ images, color, from, to }: {
  images: Project['images']
  color: string
  from: string
  to: string
}) {
  const [idx, setIdx] = useState(0)
  const [direction, setDirection] = useState(0)
  const hasMultiple = images.length > 1 && images.some(i => i.type === 'img')

  // auto-play for multi-image cards
  useEffect(() => {
    if (!hasMultiple) return
    const t = setInterval(() => {
      setDirection(1)
      setIdx(p => (p + 1) % images.length)
    }, 3400)
    return () => clearInterval(t)
  }, [hasMultiple, images.length])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.4 } }),
  }

  const go = (dir: number) => {
    setDirection(dir)
    setIdx(p => (p + dir + images.length) % images.length)
  }

  const cur = images[idx]

  return (
    <div className="relative h-52 overflow-hidden bg-[#0a0a14]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={idx}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {cur.type === 'img' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cur.src} alt={cur.alt} className="w-full h-full object-cover object-top" />
          ) : (
            <GradientCard from={from} to={to} />
          )}
          {/* gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, ${color}18 0%, #050508cc 100%)` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Carousel controls */}
      {hasMultiple && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-black/50 text-white hover:bg-black/80 transition"
            aria-label="Previous"
          >
            <HiChevronLeft size={16} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-black/50 text-white hover:bg-black/80 transition"
            aria-label="Next"
          >
            <HiChevronRight size={16} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > idx ? 1 : -1); setIdx(i) }}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ background: i === idx ? color : `${color}44` }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState<number | null>(null)
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="portfolio" className="relative py-32 px-6">
      {/* BG grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,180,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp} custom={0}
        >
          <span className="section-label mb-6 inline-flex">Our Work</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6">
            Real <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Production systems we built from scratch — each solving a concrete problem with modern AI and cloud architecture.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp} custom={i + 1}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ border: `1px solid ${proj.color}18` }}
              whileHover={{ y: -4, borderColor: `${proj.color}45` }}
              transition={{ duration: 0.3 }}
            >
              {/* Image / Carousel */}
              <ImageCarousel
                images={proj.images}
                color={proj.color}
                from={proj.gradientFrom}
                to={proj.gradientTo}
              />

              {/* Category badge */}
              <span
                className="absolute top-3 left-3 z-10 text-xs font-mono px-3 py-1 rounded-full"
                style={{
                  background: `${proj.color}22`,
                  border: `1px solid ${proj.color}44`,
                  color: proj.color,
                }}
              >
                {proj.category}
              </span>

              {/* Content */}
              <div className="p-6 glass" style={{ borderTop: `1px solid ${proj.color}12` }}>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>

                {/* Feature list — toggle */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1, transition: { duration: 0.35 } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.25 } }}
                      className="mb-4 space-y-1 overflow-hidden"
                    >
                      {proj.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                          <span style={{ color: proj.color }} className="mt-0.5 shrink-0">▸</span>
                          {f}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.stack.map(t => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{ background: `${proj.color}12`, color: `${proj.color}cc` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions row */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="flex items-center gap-1.5 text-xs font-semibold transition-all"
                    style={{ color: proj.color }}
                  >
                    <span>{expanded === i ? 'Hide details' : 'View features'}</span>
                    <HiArrowRight
                      size={12}
                      className={`transition-transform ${hovered === i && expanded !== i ? 'translate-x-1' : ''} ${expanded === i ? 'rotate-90' : ''}`}
                    />
                  </button>

                  <span className="text-xs text-slate-600 font-mono">{proj.stack.length} technologies</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
