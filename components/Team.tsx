'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'

const team = [
  {
    name: 'Ndzouakeu Jeannot Youssef',
    role: 'Founder & Chief AI Engineer',
    bio: 'Visionary behind CCOI SERVICES. Expert in AI systems, software architecture and scalable SaaS platforms.',
    skills: ['AI Strategy', 'System Design', 'Python', 'Cloud'],
    color: '#00B4FF',
    initials: 'NJ',
    isFounder: true,
    photo: '/ingenieurIA.png',
  },
  {
    name: 'Alexis Moreau',
    role: 'Senior Backend Engineer',
    bio: 'Distributed systems specialist with 8+ years building high-throughput APIs and microservices.',
    skills: ['Node.js', 'Rust', 'Kubernetes', 'PostgreSQL'],
    color: '#7C3AED',
    initials: 'AM',
  },
  {
    name: 'Chioma Okafor',
    role: 'AI/ML Engineer',
    bio: 'Deep learning researcher and applied ML engineer focused on NLP and computer vision systems.',
    skills: ['PyTorch', 'Transformers', 'MLOps', 'CUDA'],
    color: '#06B6D4',
    initials: 'CO',
  },
  {
    name: 'Lucas Fernandez',
    role: 'Full Stack Engineer',
    bio: 'Frontend-to-backend developer crafting pixel-perfect UIs and robust REST/GraphQL APIs.',
    skills: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
    color: '#a855f7',
    initials: 'LF',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Data Engineer',
    bio: 'Pipeline architect specializing in real-time data ingestion, warehousing and BI platforms.',
    skills: ['Spark', 'dbt', 'Airflow', 'Snowflake'],
    color: '#f59e0b',
    initials: 'YT',
  },
  {
    name: 'Kofi Asante',
    role: 'Embedded Systems Engineer',
    bio: 'Expert in edge AI, IoT firmware and hardware-software integration for industrial environments.',
    skills: ['C/C++', 'RTOS', 'TensorFlow Lite', 'FPGA'],
    color: '#10b981',
    initials: 'KA',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Avatar({ member }: { member: typeof team[0] }) {
  if (member.photo) {
    return (
      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2" style={{ borderColor: `${member.color}40` }}>
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
    )
  }
  return (
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black"
      style={{
        background: `linear-gradient(135deg, ${member.color}25, ${member.color}05)`,
        border: `1px solid ${member.color}30`,
        color: member.color,
      }}
    >
      {member.initials}
    </div>
  )
}

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] opacity-[0.04] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #00B4FF, transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp} custom={0}
        >
          <span className="section-label mb-6 inline-flex">The Team</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6">
            Six <span className="gradient-text">Elite Engineers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A tight-knit team of specialists who bring precision, creativity and technical depth to every mandate.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="glass rounded-3xl p-8 card-hover shimmer-effect group relative overflow-hidden"
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp} custom={i + 1}
              style={{ border: `1px solid ${member.color}15` }}
              whileHover={{ borderColor: `${member.color}40`, boxShadow: `0 0 30px ${member.color}10` }}
              transition={{ duration: 0.3 }}
            >
              {/* Founder badge */}
              {member.isFounder && (
                <span
                  className="absolute top-4 right-4 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${member.color}20`, color: member.color, border: `1px solid ${member.color}30` }}
                >
                  FOUNDER
                </span>
              )}

              {/* Avatar */}
              <div className="mb-5">
                <Avatar member={member} />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <div className="text-xs font-semibold mb-3" style={{ color: member.color }}>
                {member.role}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {member.skills.map(s => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-0.5 rounded-full"
                    style={{ background: `${member.color}10`, color: `${member.color}bb`, border: `1px solid ${member.color}20` }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[FaLinkedin, FaGithub, FaTwitter].map((Icon, j) => (
                  <button
                    key={j}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: `${member.color}15`, color: member.color }}
                    aria-label="Social link"
                  >
                    <Icon size={13} />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
