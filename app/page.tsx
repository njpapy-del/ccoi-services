'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <main className="relative bg-dark min-h-screen">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #00B4FF 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Partners />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </main>
  )
}
