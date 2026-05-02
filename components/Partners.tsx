'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const partners = [
  {
    name: 'Powerline',
    tagline: 'Infrastructure & Power Solutions',
    color: '#f59e0b',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M26 4L8 28h16l-2 16 18-24H24L26 4z"
          stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          fill="rgba(245,158,11,0.15)" />
      </svg>
    ),
  },
  {
    name: 'YBA Solution',
    tagline: 'Digital & Business Consulting',
    color: '#00B4FF',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="15" height="15" rx="3"
          stroke="#00B4FF" strokeWidth="2.5" fill="rgba(0,180,255,0.12)" />
        <rect x="27" y="6" width="15" height="15" rx="3"
          stroke="#00B4FF" strokeWidth="2.5" fill="rgba(0,180,255,0.06)" />
        <rect x="6" y="27" width="15" height="15" rx="3"
          stroke="#00B4FF" strokeWidth="2.5" fill="rgba(0,180,255,0.06)" />
        <rect x="27" y="27" width="15" height="15" rx="3"
          stroke="#00B4FF" strokeWidth="2.5" fill="rgba(0,180,255,0.12)" />
      </svg>
    ),
  },
]

const perks = [
  'Collaboration stratégique sur des projets IT complexes',
  'Expertise complémentaire au service de vos besoins',
  'Réseau de confiance certifié en Tunisie et à l'international',
]

export default function Partners() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="partners" className="relative py-24 px-6 overflow-hidden">
      {/* Subtle BG line */}
      <div className="glow-line mb-0 absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-6 inline-flex">Partenaires de confiance</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-6 mb-4">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            CCOI SERVICES s'appuie sur un réseau de partenaires sélectionnés pour offrir
            des solutions complètes et performantes.
          </p>
        </motion.div>

        {/* Partner cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              className="glass rounded-3xl p-8 flex items-center gap-6 shimmer-effect card-hover group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.15 }}
              style={{ border: `1px solid ${p.color}20` }}
              whileHover={{
                borderColor: `${p.color}50`,
                boxShadow: `0 0 30px ${p.color}12, 0 16px 48px rgba(0,0,0,0.4)`,
              }}
            >
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                style={{
                  background: `${p.color}10`,
                  border: `1px solid ${p.color}25`,
                  boxShadow: `0 0 20px ${p.color}10`,
                }}
              >
                {p.icon}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <div
                  className="text-xs font-mono font-semibold tracking-widest uppercase mb-1"
                  style={{ color: `${p.color}99` }}
                >
                  Partenaire officiel
                </div>
                <h3 className="text-2xl font-black text-white mb-1 group-hover:transition-colors"
                  style={{ color: 'white' }}>
                  {p.name}
                </h3>
                <p className="text-slate-400 text-sm">{p.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Perks row */}
        <motion.div
          className="glass rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {perks.map((perk, i) => (
            <div key={i} className="flex items-start gap-3 flex-1">
              <HiCheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-slate-300 text-sm leading-snug">{perk}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  )
}
