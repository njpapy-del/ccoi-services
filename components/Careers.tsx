'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiX, HiCheckCircle, HiBriefcase, HiAcademicCap, HiChip, HiTrendingUp } from 'react-icons/hi'
import toast from 'react-hot-toast'

// ─── Job listings ─────────────────────────────────────────────────────────────

const jobs = [
  {
    title: 'Développeur Full Stack',
    type: 'CDI',
    typeColor: '#00B4FF',
    icon: HiChip,
    color: '#00B4FF',
    gradient: 'from-[#00B4FF]/10 to-transparent',
    location: 'Tunis (hybride)',
    description:
      'Rejoignez notre équipe pour concevoir et déployer des applications web modernes pour nos clients en Europe et aux USA. Vous travaillerez sur des projets SaaS, CRM et plateformes AI en production.',
    skills: ['React / Next.js', 'Node.js / FastAPI', 'PostgreSQL / Redis', 'Docker / CI-CD', 'TypeScript'],
    bonus: 'Expérience avec des LLM ou APIs Claude/OpenAI est un plus.',
  },
  {
    title: 'Développeur AI / ML',
    type: 'CDI',
    typeColor: '#7C3AED',
    icon: HiTrendingUp,
    color: '#7C3AED',
    gradient: 'from-[#7C3AED]/10 to-transparent',
    location: 'Tunis (hybride)',
    description:
      'Développez des systèmes intelligents — agents conversationnels, pipelines RAG, modèles de scoring et d\'analyse prédictive — intégrés directement dans les produits que nous livrons à nos clients.',
    skills: ['Python / LangChain', 'Claude API / Ollama', 'FastAPI / WebSocket', 'PyTorch / scikit-learn', 'LangGraph'],
    bonus: 'Connaissance en fine-tuning de LLMs (LoRA, QLoRA) fortement appréciée.',
  },
  {
    title: 'Stagiaire Développeur (PFE)',
    type: 'Stage',
    typeColor: '#06B6D4',
    icon: HiAcademicCap,
    color: '#06B6D4',
    gradient: 'from-[#06B6D4]/10 to-transparent',
    location: 'Tunis — 3 à 6 mois',
    description:
      'Stage de fin d\'études sur un projet réel et en production. Vous serez encadré par nos ingénieurs seniors et contribuerez à des fonctionnalités livrées à de vrais clients.',
    skills: ['React ou Python (au choix)', 'Bases SQL', 'Git / GitHub', 'Curiosité pour l\'IA', 'Esprit d\'équipe'],
    bonus: 'Possibilité d\'embauche CDI à l\'issue du stage selon les résultats.',
  },
  {
    title: 'Commercial / Business Developer',
    type: 'CDI / Freelance',
    typeColor: '#f59e0b',
    icon: HiBriefcase,
    color: '#f59e0b',
    gradient: 'from-[#f59e0b]/10 to-transparent',
    location: 'Tunis + Remote Europe/USA',
    description:
      'Développez notre portefeuille clients en Europe et aux États-Unis. Vous identifiez des prospects, présentez nos solutions AI/SaaS, gérez le cycle de vente de A à Z et construisez des partenariats durables.',
    skills: ['Prospection B2B', 'Négociation commerciale', 'Anglais courant', 'CRM & outils de vente', 'Réseau LinkedIn'],
    bonus: 'Expérience dans la vente de services IT ou logiciels SaaS est un vrai avantage.',
  },
]

// ─── Application modal ────────────────────────────────────────────────────────

function ApplyModal({ job, onClose }: { job: typeof jobs[0]; onClose: () => void }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', linkedin: '', motivation: '',
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, position: job.title }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur')
      setSent(true)
      toast.success('Candidature envoyée !')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Erreur'
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  const inputCls =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-opacity-80 transition-all'

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-lg glass-strong rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{ border: `1px solid ${job.color}30` }}
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-1"
          aria-label="Fermer"
        >
          <HiX size={20} />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <HiCheckCircle size={56} style={{ color: job.color }} />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">Candidature envoyée !</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Merci pour votre intérêt. Notre équipe étudiera votre profil et vous répondra sous <strong className="text-white">5 jours ouvrés</strong>.
            </p>
            <button
              onClick={onClose}
              className="btn-primary text-white px-8 py-3"
              style={{ background: `linear-gradient(135deg, ${job.color}, ${job.color}99)` }}
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <span
                className="text-xs font-mono px-3 py-1 rounded-full mb-3 inline-block"
                style={{ background: `${job.color}20`, border: `1px solid ${job.color}40`, color: job.color }}
              >
                {job.type} · {job.location}
              </span>
              <h3 className="text-2xl font-black text-white">
                Postuler — {job.title}
              </h3>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                    Nom complet <span style={{ color: job.color }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={set('name')}
                    required
                    className={inputCls}
                    style={{ '--tw-ring-color': job.color } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                    Email <span style={{ color: job.color }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={set('email')}
                    required
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+216 XX XXX XXX"
                    value={form.phone}
                    onChange={set('phone')}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Profil LinkedIn</label>
                  <input
                    type="url"
                    placeholder="linkedin.com/in/..."
                    value={form.linkedin}
                    onChange={set('linkedin')}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                  Lettre de motivation <span style={{ color: job.color }}>*</span>
                </label>
                <textarea
                  placeholder="Présentez-vous, votre expérience et pourquoi vous voulez rejoindre CCOI SERVICES..."
                  value={form.motivation}
                  onChange={set('motivation')}
                  required
                  rows={5}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <p className="text-xs text-slate-500">
                Vous pouvez également joindre votre CV en répondant à l&apos;email de confirmation que vous recevrez.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background: loading
                    ? `${job.color}60`
                    : `linear-gradient(135deg, ${job.color}, ${job.color}bb)`,
                }}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>Envoyer ma candidature <HiArrowRight /></>
                )}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function Careers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [applying, setApplying] = useState<typeof jobs[0] | null>(null)

  return (
    <>
      <section id="careers" className="relative py-32 px-6">
        {/* BG accent */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 50%, rgba(124,58,237,0.4) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0,180,255,0.3) 0%, transparent 50%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative" ref={ref}>
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp} custom={0}
          >
            <span className="section-label mb-6 inline-flex">Rejoindre l&apos;équipe</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6">
              Carrières chez{' '}
              <span className="gradient-text">CCOI SERVICES</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Nous construisons des systèmes intelligents pour des clients en Europe et aux USA.
              Rejoignez une équipe de 6 ingénieurs passionnés basée à Tunis.
            </p>
          </motion.div>

          {/* Job cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, i) => {
              const Icon = job.icon
              return (
                <motion.div
                  key={job.title}
                  className="group relative rounded-2xl p-6 glass cursor-default"
                  style={{ border: `1px solid ${job.color}15` }}
                  initial="hidden" animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp} custom={i + 1}
                  whileHover={{ y: -4, borderColor: `${job.color}40` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient bg glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: `${job.color}18`, border: `1px solid ${job.color}30` }}
                      >
                        <Icon size={22} style={{ color: job.color }} />
                      </div>
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: `${job.color}18`, color: job.color, border: `1px solid ${job.color}30` }}
                      >
                        {job.type}
                      </span>
                    </div>

                    {/* Title & location */}
                    <h3 className="text-xl font-black text-white mb-1 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mb-3">📍 {job.location}</p>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{job.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {job.skills.map(s => (
                        <span
                          key={s}
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{ background: `${job.color}10`, color: `${job.color}cc` }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Bonus */}
                    <p className="text-xs text-slate-500 italic mb-5">✦ {job.bonus}</p>

                    {/* CTA */}
                    <button
                      onClick={() => setApplying(job)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:gap-3"
                      style={{
                        background: `linear-gradient(135deg, ${job.color}cc, ${job.color}66)`,
                        boxShadow: `0 4px 20px ${job.color}25`,
                      }}
                    >
                      Postuler <HiArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom note */}
          <motion.p
            className="text-center text-slate-500 text-sm mt-12"
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp} custom={jobs.length + 1}
          >
            Vous ne trouvez pas votre profil ?{' '}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Envoyez-nous une candidature spontanée
            </a>{' '}
            — nous sommes toujours ouverts aux talents.
          </motion.p>
        </div>
      </section>

      {/* Apply modal */}
      <AnimatePresence>
        {applying && (
          <ApplyModal job={applying} onClose={() => setApplying(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
