'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowRight, HiExternalLink } from 'react-icons/hi'

const projects = [
  {
    title: 'NexaFlow CRM',
    category: 'SaaS / CRM',
    description:
      'Enterprise CRM platform with AI-powered lead scoring, automated pipeline management and real-time analytics dashboard for 500+ concurrent users.',
    stack: ['Next.js', 'PostgreSQL', 'GPT-4', 'Redis'],
    color: '#00B4FF',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format',
  },
  {
    title: 'Sentinel AI',
    category: 'AI / Cybersecurity',
    description:
      'Real-time threat detection system using transformer-based anomaly detection on network traffic, reducing false positives by 87%.',
    stack: ['PyTorch', 'FastAPI', 'Kafka', 'Kubernetes'],
    color: '#7C3AED',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format',
  },
  {
    title: 'DataPulse Analytics',
    category: 'Data Engineering',
    description:
      'Unified data lakehouse platform ingesting 10TB/day from 40+ sources, with real-time BI dashboards and predictive revenue forecasting.',
    stack: ['Apache Spark', 'dbt', 'Snowflake', 'Superset'],
    color: '#06B6D4',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format',
  },
  {
    title: 'OmniAssist',
    category: 'AI / Chatbot',
    description:
      'Proactive AI assistant platform for enterprise customer service, handling 15,000 conversations/day with 94% resolution rate without human intervention.',
    stack: ['LangChain', 'Claude API', 'WebSocket', 'React'],
    color: '#a855f7',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format',
  },
  {
    title: 'EduForge LMS',
    category: 'SaaS / Education',
    description:
      'AI-adaptive learning management system with personalized learning paths, video streaming and progress analytics for 8,000 active learners.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'FFmpeg'],
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format',
  },
  {
    title: 'SmartEdge IoT',
    category: 'Embedded / IoT',
    description:
      'Edge AI inference system deployed on ARM microcontrollers for industrial predictive maintenance, reducing equipment downtime by 62%.',
    stack: ['C++', 'TensorFlow Lite', 'MQTT', 'Rust'],
    color: '#10b981',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="portfolio" className="relative py-32 px-6">
      {/* BG */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,180,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.1) 1px, transparent 1px)',
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
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A curated selection of systems we've engineered — each solving a real problem at scale.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp} custom={i + 1}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ border: `1px solid ${proj.color}15` }}
              whileHover={{ y: -6, borderColor: `${proj.color}40` }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, ${proj.color}20, #050508dd)`,
                  }}
                />
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    background: `${proj.color}20`,
                    border: `1px solid ${proj.color}40`,
                    color: proj.color,
                  }}
                >
                  {proj.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 glass" style={{ borderTop: `1px solid ${proj.color}10` }}>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.stack.map(t => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{ background: `${proj.color}10`, color: `${proj.color}cc` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-1.5 text-xs font-semibold transition-all"
                  style={{ color: proj.color }}
                >
                  <span>View Case Study</span>
                  <HiArrowRight size={12} className={`transition-transform ${hovered === i ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
