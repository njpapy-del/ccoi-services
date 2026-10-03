'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { HiAcademicCap, HiUserGroup, HiTrendingUp, HiSparkles, HiArrowRight } from 'react-icons/hi'

const photos = [
  { src: '/team/nour-rouissi.webp', alt: 'Nour Rouissi, ingénieure IA & génie logiciel, à son poste chez CCOI SERVICES' },
  { src: '/team/nour-rouissi-2.webp', alt: 'Nour Rouissi au bureau de CCOI SERVICES à Tunis' },
]

const commitments = [
  {
    icon: HiAcademicCap,
    title: 'Premier emploi',
    body: 'Nous recrutons de jeunes diplômés et leur confions des responsabilités réelles sur des systèmes en production.',
  },
  {
    icon: HiUserGroup,
    title: 'Encadrement',
    body: 'Chaque nouvelle recrue et chaque stagiaire est accompagné au quotidien par nos ingénieurs seniors.',
  },
  {
    icon: HiTrendingUp,
    title: 'Du stage à l’emploi',
    body: 'Les stages de fin d’études (PFE) se font sur des projets clients réels, avec possibilité d’embauche à la clé.',
  },
]

export default function YoungTalent() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % photos.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="jeunes-talents" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(236,72,153,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label mb-6 inline-flex">
            <HiSparkles className="text-primary" /> Emploi des jeunes
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6">
            Nous misons sur les <span className="gradient-text">jeunes talents</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            CCOI SERVICES s’engage pour l’emploi des jeunes en Tunisie : nous recrutons de jeunes diplômés et
            accueillons des stagiaires que nous formons sur nos projets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Portrait */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-2 rounded-[28px] opacity-60"
                style={{ background: 'conic-gradient(from 0deg, #ec4899, #7C3AED, #00B4FF, #ec4899)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative w-72 h-[22rem] md:w-80 md:h-[25rem] rounded-3xl overflow-hidden bg-dark" style={{ border: '2px solid rgba(236,72,153,0.35)' }}>
                <AnimatePresence initial={false}>
                  <motion.img
                    key={photos[idx].src}
                    src={photos[idx].src}
                    alt={photos[idx].alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1 }}
                  />
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: 'linear-gradient(to top, #050508ee, transparent)' }} />
                <span
                  className="absolute top-4 left-4 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(236,72,153,0.2)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.4)' }}
                >
                  NOUVELLE RECRUE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Présentation */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="glass rounded-3xl p-8 mb-8" style={{ border: '1px solid rgba(236,72,153,0.25)' }}>
              <h3 className="text-3xl font-black text-white mb-1">Nour Rouissi</h3>
              <div className="text-sm font-semibold mb-4" style={{ color: '#f9a8d4' }}>
                Ingénieure Maintenance Backend
              </div>
              <p className="text-slate-300 leading-relaxed mb-5">
                Jeune diplômée ingénieure en <span className="text-white font-semibold">intelligence artificielle et génie logiciel</span>,
                Nour a rejoint CCOI SERVICES pour assurer la <span className="text-white font-semibold">maintenance et l’évolution des backends</span> de
                nos plateformes en production. Un exemple concret de notre engagement : donner leur chance aux jeunes
                ingénieurs et les faire monter en compétences sur des projets réels.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Jeune diplômée', 'IA', 'Génie logiciel', 'Maintenance backend'].map(t => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{ background: 'rgba(236,72,153,0.12)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.25)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {commitments.map(c => (
                <div key={c.title} className="glass rounded-2xl p-5">
                  <c.icon size={22} className="mb-3" style={{ color: '#f472b6' }} />
                  <div className="text-white font-bold text-sm mb-1">{c.title}</div>
                  <p className="text-slate-400 text-xs leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            <a href="#careers" className="btn-primary text-white font-semibold inline-flex items-center gap-2">
              Voir nos offres d’emploi et de stage <HiArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
