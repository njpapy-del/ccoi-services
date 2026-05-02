'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = [
    'INITIALIZING SYSTEMS...',
    'LOADING AI MODULES...',
    'CONNECTING NEURAL NETWORKS...',
    'SYSTEMS ONLINE',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        const increment = prev < 60 ? Math.random() * 8 + 3 : Math.random() * 4 + 1
        return Math.min(prev + increment, 100)
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 30) setPhase(0)
    else if (progress < 60) setPhase(1)
    else if (progress < 90) setPhase(2)
    else setPhase(3)
  }, [progress])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: '#050508' }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-50" />

        {/* Corner decorations */}
        {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} w-8 h-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`w-3 h-3 border-primary ${
              i === 0 ? 'border-t-2 border-l-2' :
              i === 1 ? 'border-t-2 border-r-2' :
              i === 2 ? 'border-b-2 border-l-2' : 'border-b-2 border-r-2'
            }`} />
          </motion.div>
        ))}

        {/* Animated rings */}
        <div className="absolute">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary/10"
              style={{ width: i * 160, height: i * 160, top: -(i * 80), left: -(i * 80) }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 8 + i * 4, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>

        {/* Logo */}
        <motion.div
          className="relative z-10 mb-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="flex items-center gap-4">
            <Logo size={64} animated />
            <div>
              <div className="text-2xl font-black tracking-widest text-white">CCOI</div>
              <div className="text-xs font-light tracking-[0.3em] text-primary/80">SERVICES</div>
            </div>
          </div>
        </motion.div>

        {/* Phase text */}
        <motion.div
          key={phase}
          className="relative z-10 mb-10 font-mono text-xs tracking-[0.3em] text-primary/60"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {phases[phase]}
        </motion.div>

        {/* Progress bar */}
        <div className="relative z-10 w-64 md:w-80">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono text-xs text-slate-500">LOADING</span>
            <span className="font-mono text-xs text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00B4FF, #7C3AED)',
                boxShadow: '0 0 10px rgba(0,180,255,0.6)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          {/* Scan line */}
          <motion.div
            className="absolute top-5 left-0 w-[60px] h-[2px] opacity-50"
            style={{ background: 'linear-gradient(90deg, transparent, #00B4FF, transparent)' }}
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Bottom tech text */}
        <motion.div
          className="absolute bottom-8 font-mono text-xs text-slate-700 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          v2.4.1 — CCOI OS KERNEL
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
