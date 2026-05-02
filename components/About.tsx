'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiChip, HiGlobeAlt, HiLightningBolt, HiUsers } from 'react-icons/hi'

const stats = [
  { icon: HiUsers, value: '6', label: 'Expert Engineers', color: '#00B4FF' },
  { icon: HiChip, value: '50+', label: 'Projects Delivered', color: '#7C3AED' },
  { icon: HiGlobeAlt, value: '2', label: 'Continents Served', color: '#06B6D4' },
  { icon: HiLightningBolt, value: '98%', label: 'Client Satisfaction', color: '#a855f7' },
]

const pillars = [
  {
    num: '01',
    title: 'AI-First Philosophy',
    body: 'Every solution we build embeds intelligence at its core — from predictive analytics to autonomous decision systems.',
  },
  {
    num: '02',
    title: 'Engineering Excellence',
    body: 'Six senior engineers with deep expertise in software architecture, embedded systems and cloud-native development.',
  },
  {
    num: '03',
    title: 'Global Reach',
    body: 'Serving enterprises across Europe and North America with scalable, production-grade technology platforms.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 rounded-full"
        style={{ background: 'radial-gradient(circle, #00B4FF, transparent)' }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label mb-6 inline-flex">About CCOI SERVICES</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6">
            Built by Engineers,<br />
            <span className="gradient-text">Driven by Intelligence</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Founded by <span className="text-white font-semibold">Ndzouakeu Jeannot Youssef</span>,
            CCOI SERVICES is a boutique technology firm specializing in AI-powered solutions
            that transform how enterprises operate, compete, and grow in the digital era.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center card-hover shimmer-effect"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i + 1}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
              >
                <stat.icon size={22} style={{ color: stat.color }} />
              </div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              className="glass rounded-2xl p-8 card-hover shimmer-effect group"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i + 5}
            >
              <div className="font-mono text-4xl font-black gradient-text mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                {p.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="glow-line mt-24" />
      </div>
    </section>
  )
}
