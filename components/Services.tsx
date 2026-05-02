'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HiChip, HiDatabase, HiAcademicCap, HiCode,
  HiArrowRight,
} from 'react-icons/hi'
import { BiBrain } from 'react-icons/bi'
import { SiSalesforce } from 'react-icons/si'

const services = [
  {
    icon: HiCode,
    title: 'SaaS & CRM Development',
    tagline: 'From concept to production-ready platform',
    description:
      'We architect and build scalable SaaS products and custom CRM solutions tailored to your workflows. Our platforms handle millions of users with 99.99% uptime.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    color: '#00B4FF',
    gradient: 'from-[#00B4FF]/20 to-transparent',
  },
  {
    icon: BiBrain,
    title: 'AI & Proactive Systems',
    tagline: 'Intelligence that anticipates, not just responds',
    description:
      'We build proactive AI agents, NLP pipelines, recommendation engines and autonomous decision systems using the latest LLM and ML technologies.',
    tags: ['PyTorch', 'LangChain', 'OpenAI', 'Claude API', 'Vector DBs'],
    color: '#7C3AED',
    gradient: 'from-[#7C3AED]/20 to-transparent',
  },
  {
    icon: HiDatabase,
    title: 'Data Analytics & BI',
    tagline: 'Turn raw data into strategic intelligence',
    description:
      'End-to-end data engineering pipelines, real-time dashboards, predictive analytics and business intelligence platforms that drive measurable ROI.',
    tags: ['Python', 'Spark', 'dbt', 'Superset', 'Snowflake'],
    color: '#06B6D4',
    gradient: 'from-[#06B6D4]/20 to-transparent',
  },
  {
    icon: HiAcademicCap,
    title: 'Training & Education',
    tagline: 'Upskill your engineering teams fast',
    description:
      'Hands-on engineering bootcamps and corporate training programs in AI/ML, software architecture, DevOps and modern development practices.',
    tags: ['AI/ML', 'DevOps', 'Architecture', 'Python', 'Cloud'],
    color: '#a855f7',
    gradient: 'from-[#a855f7]/20 to-transparent',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] opacity-[0.06] rounded-full"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label mb-6 inline-flex">What We Build</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Four pillars of technological excellence, each engineered to deliver
            measurable business impact.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="group glass rounded-3xl p-8 card-hover shimmer-effect relative overflow-hidden"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i + 1}
              style={{
                border: `1px solid ${svc.color}20`,
              }}
              whileHover={{
                borderColor: `${svc.color}50`,
                boxShadow: `0 0 30px ${svc.color}15, 0 20px 60px rgba(0,0,0,0.4)`,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${svc.gradient} rounded-full -translate-y-32 translate-x-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `${svc.color}15`,
                  border: `1px solid ${svc.color}30`,
                  boxShadow: `0 0 20px ${svc.color}10`,
                }}
              >
                <svc.icon size={26} style={{ color: svc.color }} />
              </div>

              {/* Content */}
              <div className="text-xs font-mono text-slate-600 mb-2 tracking-wider uppercase">
                {svc.tagline}
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4 group-hover:transition-colors"
                style={{ '--hover-color': svc.color } as React.CSSProperties}
              >
                {svc.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">{svc.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {svc.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                    style={{
                      background: `${svc.color}10`,
                      border: `1px solid ${svc.color}25`,
                      color: svc.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all group/link"
                style={{ color: svc.color }}
              >
                Get a Quote
                <HiArrowRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
