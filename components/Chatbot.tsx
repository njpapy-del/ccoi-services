'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiPaperAirplane, HiChevronDown } from 'react-icons/hi'
import { BsRobot } from 'react-icons/bs'
import Logo from './Logo'

interface Message {
  id: number
  role: 'bot' | 'user'
  text: string
  time: string
}

/* ── Réponses automatiques ───────────────────────────────────────────── */
const FAQ: { patterns: RegExp[]; answer: string }[] = [
  {
    patterns: [/bonjour|salut|hello|hi|hey/i],
    answer: `Bonjour ! Je suis **CCOI-AI**, l'assistant virtuel de CCOI SERVICES. 👋\n\nComment puis-je vous aider aujourd'hui ?\n\n• Nos services\n• Tarifs & devis\n• Contact\n• Notre équipe`,
  },
  {
    patterns: [/service|offre|proposez|faites/i],
    answer: `CCOI SERVICES propose **4 domaines d'expertise** :\n\n🔷 **SaaS & CRM** — Plateformes sur-mesure\n🧠 **IA & Systèmes Proactifs** — Agents intelligents\n📊 **Data Analytics** — Tableaux de bord & BI\n🎓 **Formation** — Bootcamps ingénierie logicielle\n\nQuel domaine vous intéresse ?`,
  },
  {
    patterns: [/saas|crm|logiciel|plateforme/i],
    answer: `Notre département **SaaS & CRM** conçoit des plateformes évolutives avec :\n\n✅ Architecture cloud-native\n✅ Intégration IA native\n✅ APIs REST/GraphQL\n✅ Dashboard temps réel\n✅ Support 99.99% uptime\n\n👉 Contactez-nous au **+216 26 089 553** pour un devis gratuit.`,
  },
  {
    patterns: [/ia|intelligence artificielle|ai|machine learning|ml|chatbot|agent/i],
    answer: `Notre pôle **IA & Systèmes Proactifs** développe :\n\n🤖 Agents conversationnels\n🔍 Moteurs de recommandation\n🧬 NLP & analyse de sentiment\n⚡ Systèmes de décision autonome\n📸 Vision par ordinateur\n\nTechnos : Claude API, PyTorch, LangChain, Vector DBs.`,
  },
  {
    patterns: [/data|analyse|analytics|tableau de bord|dashboard|bi/i],
    answer: `Notre pôle **Data Engineering** livre :\n\n📦 Pipelines ETL temps réel\n📊 Dashboards interactifs\n🔮 Analytics prédictif\n📈 Business Intelligence\n\nStack : Spark, dbt, Snowflake, Superset.\n\nUn projet data en tête ? Écrivez-nous !`,
  },
  {
    patterns: [/formation|cours|apprendre|bootcamp|enseign/i],
    answer: `Nos **programmes de formation** incluent :\n\n🎯 Bootcamp IA/ML (2 semaines)\n🏗️ Architecture logicielle\n☁️ DevOps & Cloud\n🐍 Python avancé\n\nFormations en présentiel à Tunis ou en distanciel.\nContactez **ccoiservice28@gmail.com** pour un programme personnalisé.`,
  },
  {
    patterns: [/prix|tarif|devis|coût|budget|combien/i],
    answer: `Nos tarifs sont adaptés à chaque projet.\n\n💡 **Devis gratuit** sous 24h après échange.\n\nPour démarrer :\n📞 **+216 26 089 553**\n📧 **ccoiservice28@gmail.com**\n\nOu utilisez le formulaire de contact sur cette page !`,
  },
  {
    patterns: [/contact|joindre|appel|téléphone|email|mail|whatsapp/i],
    answer: `Voici nos coordonnées :\n\n📞 **+216 26 089 553** (Appel & WhatsApp)\n📧 **ccoiservice28@gmail.com**\n📍 Rue Omar Kaddeh, Montplaisir 1073, Tunis\n\nHoraires : Lun–Ven, 9h–18h (GMT+1)\n\nRéponse garantie sous **24 heures** !`,
  },
  {
    patterns: [/adresse|localisation|où|tunis|bureau|siège/i],
    answer: `Notre siège social :\n\n📍 **Rue Omar Kaddeh, Montplaisir**\n🏙️ **1073 Tunis, Tunisie**\n\nMatricule fiscale : **1867691/N**\n\nNous travaillons également avec des clients en **Europe** et aux **USA** en full remote.`,
  },
  {
    patterns: [/équipe|ingénieur|team|fondateur|youssef|ndzouakeu/i],
    answer: `CCOI SERVICES est composé de **6 ingénieurs seniors** spécialisés :\n\n👨‍💻 IA & ML\n🏗️ Architecture SaaS\n📊 Data Engineering\n🔌 Systèmes Embarqués\n🌐 Full Stack\n\nFondé par **Ndzouakeu Jeannot Youssef**, expert en systèmes intelligents.`,
  },
  {
    patterns: [/délai|livraison|durée|temps|planning/i],
    answer: `Les délais varient selon la complexité :\n\n⚡ **MVP SaaS** : 4–8 semaines\n🤖 **Intégration IA** : 2–4 semaines\n📊 **Dashboard Data** : 1–3 semaines\n🎓 **Formation** : 2 jours à 2 semaines\n\nContactez-nous pour un planning précis !`,
  },
  {
    patterns: [/merci|thanks|parfait|super|excellent|top/i],
    answer: `Avec plaisir ! 😊\n\nN'hésitez pas si vous avez d'autres questions.\n\nPour démarrer votre projet :\n📞 **+216 26 089 553**\n📧 **ccoiservice28@gmail.com**`,
  },
]

function getBotAnswer(input: string): string {
  const match = FAQ.find(f => f.patterns.some(p => p.test(input)))
  return (
    match?.answer ??
    `Je n'ai pas bien compris votre question. 🤔\n\nVoici ce que je peux vous dire :\n• Nos **services** (SaaS, IA, Data, Formation)\n• Nos **coordonnées** (téléphone, email)\n• Notre **équipe** et **localisation**\n\nOu contactez-nous directement :\n📞 **+216 26 089 553**`
  )
}

function now() {
  return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

/* ── Render message text (simple markdown bold) ─────────────────────── */
function MsgText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <span className="whitespace-pre-line text-sm leading-relaxed">
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
      )}
    </span>
  )
}

/* ── Chatbot component ───────────────────────────────────────────────── */
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'bot',
      text: `Bonjour ! Je suis **CCOI-AI** 👋\n\nComment puis-je vous aider ?\n\n• Nos services\n• Tarifs & devis\n• Contact & adresse\n• Notre équipe`,
      time: now(),
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = () => {
    const text = input.trim()
    if (!text) return
    const userMsg: Message = { id: Date.now(), role: 'user', text, time: now() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: getBotAnswer(text), time: now() },
      ])
    }, 900 + Math.random() * 400)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  const quickReplies = ['Nos services', 'Tarifs', 'Contact', 'Notre équipe']

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-[9000] w-14 h-14 rounded-full flex items-center justify-center shadow-neon-blue ${open ? 'hidden' : 'flex'}`}
        style={{ background: 'linear-gradient(135deg, #00B4FF, #7C3AED)' }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0,180,255,0.6)' }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: 'spring', stiffness: 300 }}
        aria-label="Ouvrir le chat"
      >
        <BsRobot size={22} className="text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: 'linear-gradient(135deg, #00B4FF, #7C3AED)' }} />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 right-6 z-[9001] w-[360px] max-w-[calc(100vw-24px)] flex flex-col rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
            style={{ height: 520, border: '1px solid rgba(0,180,255,0.2)' }}
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, rgba(0,180,255,0.15), rgba(124,58,237,0.15))', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Logo size={34} animated />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-dark" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">CCOI-AI Assistant</div>
                  <div className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    En ligne
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <HiX size={14} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-3"
              style={{ background: '#07070f' }}
            >
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'rounded-br-sm text-white'
                        : 'rounded-bl-sm text-slate-200'
                    }`}
                    style={
                      msg.role === 'user'
                        ? { background: 'linear-gradient(135deg, #00B4FF, #7C3AED)' }
                        : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }
                    }
                  >
                    <MsgText text={msg.text} />
                    <div className="text-[10px] mt-1.5 opacity-40 text-right">{msg.time}</div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div
                    className="rounded-2xl rounded-bl-sm px-5 py-3.5 flex gap-1.5 items-center"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {[0, 1, 2].map(i => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick replies */}
            <div
              className="px-3 pt-3 flex gap-2 flex-wrap"
              style={{ background: '#07070f', borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              {quickReplies.map(q => (
                <button
                  key={q}
                  onClick={() => { setInput(q); setTimeout(send, 50) }}
                  className="text-[11px] px-3 py-1.5 rounded-full transition-all hover:bg-primary/20 hover:border-primary/40"
                  style={{
                    background: 'rgba(0,180,255,0.07)',
                    border: '1px solid rgba(0,180,255,0.18)',
                    color: '#00B4FF',
                  }}
                  onMouseDown={e => { e.preventDefault(); setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: q, time: now() }]); setTyping(true); setTimeout(() => { setTyping(false); setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: getBotAnswer(q), time: now() }]) }, 900) }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div
              className="p-3 flex gap-2 flex-shrink-0"
              style={{ background: '#07070f' }}
            >
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary/40 transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              />
              <motion.button
                onClick={send}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-30"
                style={{ background: 'linear-gradient(135deg, #00B4FF, #7C3AED)' }}
                whileTap={{ scale: 0.9 }}
              >
                <HiPaperAirplane size={16} className="text-white rotate-90" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
