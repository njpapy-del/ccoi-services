'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiLocationMarker, HiPhone, HiArrowRight } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import toast from 'react-hot-toast'

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'ccoiservice28@gmail.com', href: 'mailto:ccoiservice28@gmail.com' },
  { icon: HiPhone, label: 'Tél / WhatsApp', value: '+216 26 089 553', href: 'https://wa.me/21626089553' },
  { icon: HiLocationMarker, label: 'Adresse', value: 'Rue Omar Kaddeh, Montplaisir 1073, Tunis', href: 'https://maps.google.com/?q=Montplaisir+Tunis' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        toast.success('Message sent! We\'ll get back to you within 24h.')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all duration-300'

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.06] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #7C3AED, transparent)' }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp} custom={0}
        >
          <span className="section-label mb-6 inline-flex">Let's Talk</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6">
            Start Your <span className="gradient-text">Next Project</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Ready to build something extraordinary? Tell us about your vision and we'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp} custom={1}
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="glass rounded-2xl p-5 flex items-start gap-4 card-hover shimmer-effect group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm text-white font-medium">{item.value}</div>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-4">Connect with us</div>
              <div className="flex gap-3">
                {[
                  { Icon: FaLinkedin, label: 'LinkedIn', color: '#0077b5' },
                  { Icon: FaGithub, label: 'GitHub', color: '#888' },
                ].map(({ Icon, label, color }) => (
                  <button
                    key={label}
                    className="flex-1 py-2.5 rounded-xl glass flex items-center justify-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    style={{ borderColor: `${color}20` }}
                    aria-label={label}
                  >
                    <Icon size={14} style={{ color }} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp} custom={2}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-3xl p-8 flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                  Company / Organization
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project, challenges and goals..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary text-white font-semibold flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <HiArrowRight size={16} />
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-slate-600">
                We typically respond within <span className="text-slate-400">24 hours</span>.
                All inquiries are confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
