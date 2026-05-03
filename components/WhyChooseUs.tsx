'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HiLightningBolt, HiShieldCheck, HiChip, HiGlobeAlt,
  HiClock, HiStar,
} from 'react-icons/hi'

const reasons = [
  {
    icon: HiChip,
    title: 'AI-First Philosophy',
    body: 'Every solution we architect embeds intelligence at its core. From proactive AI agents to autonomous decision systems, AI is not an add-on — it is the foundation.',
    color: '#00B4FF',
  },
  {
    icon: HiLightningBolt,
    title: 'Fast SaaS Delivery',
    body: 'We ship production-grade SaaS MVPs in 4–8 weeks using battle-tested architectures. Speed without sacrificing quality, security or scalability.',
    color: '#7C3AED',
  },
  {
    icon: HiShieldCheck,
    title: 'Enterprise-Grade Quality',
    body: 'Our platforms handle millions of users with 99.99% uptime SLAs. Every line of code is reviewed, tested and built for long-term maintainability.',
    color: '#06B6D4',
  },
  {
    icon: HiGlobeAlt,
    title: 'Europe & USA Expertise',
    body: 'Deep understanding of European GDPR compliance and US market requirements. We build systems that meet international standards from day one.',
    color: '#a855f7',
  },
  {
    icon: HiClock,
    title: '24h Response Guarantee',
    body: 'Dedicated project managers ensure you always have visibility. We respond to every inquiry within 24 hours and deliver weekly progress reports.',
    color: '#f59e0b',
  },
  {
    icon: HiStar,
    title: '6 Senior Engineers',
    body: 'A tight-knit team of specialists — no juniors, no outsourcing. Every project is handled by senior engineers with 5+ years of domain expertise.',
    color: '#10b981',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      className="relative py-32 px-6 overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, #7C3AED, transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp} custom={0}
        >
          <span className="section-label mb-6 inline-flex">Notre avantage</span>
          <h2
            id="why-us-heading"
            className="text-4xl md:text-6xl font-black text-white mt-6 mb-6"
          >
            Why Choose <span className="gradient-text">CCOI SERVICES</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We are not a generic development agency. We are a{' '}
            <strong className="text-white">specialized AI and SaaS engineering firm</strong> that
            combines deep technical expertise with strategic business thinking to deliver solutions
            that create real, measurable competitive advantages for enterprises in{' '}
            <strong className="text-primary">Europe and the USA</strong>.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="glass rounded-2xl p-7 card-hover shimmer-effect group"
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp} custom={i + 1}
              style={{ border: `1px solid ${r.color}15` }}
              whileHover={{ borderColor: `${r.color}40`, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                style={{ background: `${r.color}15`, border: `1px solid ${r.color}25` }}
              >
                <r.icon size={22} style={{ color: r.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{r.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp} custom={7}
        >
          <p className="text-slate-400 mb-6 text-lg max-w-xl mx-auto">
            Ready to build your next competitive advantage with an{' '}
            <strong className="text-white">AI-first engineering team</strong>?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary text-white font-semibold">
              Start a Project
            </a>
            <a href="/ai-consulting" className="btn-outline font-semibold">
              Explore AI Consulting
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
