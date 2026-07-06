import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare, Phone, Video, Radio, Bot, Users, Globe2, Sparkles,
  Shield, Zap, Code2, Cpu, Braces, Rocket, ArrowRight, Check, Play,
  Mic, PhoneCall, TrendingUp, Activity,
  Github, Twitter, Linkedin, Youtube, Search, Wand2,
  Layers, Database, Cloud, BrainCircuit, Languages, PenTool,
  BarChart3, Lock, Star, Building2, HeartPulse, GraduationCap,
  Landmark, ShoppingBag, Plane, Gamepad2, Truck, Factory, Menu, X
} from 'lucide-react'
import {
  Button, Badge,
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from './components/ui.jsx'

const LOGO = 'https://customer-assets.emergentagent.com/job_3a995167-d953-410f-b92f-092c76b1d210/artifacts/ohiyrn57_kinetalk-logo.png'

/* ---------------- Cursor Glow ---------------- */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 })
  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])
  return (
    <div
      className="pointer-events-none fixed z-[100] h-[500px] w-[500px] rounded-full opacity-40 blur-3xl transition-transform duration-300"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background: 'radial-gradient(circle, rgba(139,92,246,0.35), rgba(59,130,246,0.15) 40%, transparent 70%)',
      }}
    />
  )
}

/* ---------------- Aurora Background ---------------- */
function Aurora() {
  return (
    <div className="aurora-bg">
      <div className="aurora-blob" style={{ width: 600, height: 600, background: '#3b82f6', top: '-10%', left: '-10%' }} />
      <div className="aurora-blob" style={{ width: 700, height: 700, background: '#8b5cf6', top: '20%', right: '-15%', animationDelay: '3s' }} />
      <div className="aurora-blob" style={{ width: 500, height: 500, background: '#22d3ee', bottom: '-10%', left: '30%', animationDelay: '6s' }} />
      <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
    </div>
  )
}

/* ---------------- Navigation ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { label: 'Platform', href: '#platform' },
    { label: 'Products', href: '#products' },
    { label: 'AI', href: '#ai' },
    { label: 'Developers', href: '#developers' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
  ]
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1400px,95%)] rounded-2xl transition-all duration-500 ${scrolled ? 'glass-nav shadow-2xl shadow-purple-950/20' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2">
          <img src={LOGO} alt="KineTalk" className="h-8 w-auto rounded-md bg-white/95 p-1" />
          <span className="font-display text-lg font-bold tracking-tight hidden sm:block">KineTalk</span>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href} className="px-4 py-2 text-sm text-white/70 hover:text-white transition rounded-lg hover:bg-white/5">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:inline-flex">Sign in</Button>
          <Button className="btn-glow text-white border-0 px-5">
            Start Free <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-white/5">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="p-4 space-y-1">
              {links.map(l => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-white/80 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

/* ---------------- Hero Dashboard ---------------- */
function HeroDashboard() {
  return (
    <div className="relative w-full h-[560px]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-8 right-4 w-80 h-80 rounded-full bg-purple-500/30 blur-[100px]" />
        <div className="absolute bottom-8 left-4 w-72 h-72 rounded-full bg-cyan-400/25 blur-[100px]" />
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
        className="absolute left-2 top-6 w-[62%] rounded-3xl glass-strong p-5 glow-blue animate-float-slower"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-xs font-bold">AI</div>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#0a0a14]" />
            </div>
            <div>
              <div className="text-sm font-semibold">KineTalk Agent</div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg glass grid place-items-center"><Phone className="h-4 w-4" /></div>
            <div className="h-8 w-8 rounded-lg glass grid place-items-center"><Video className="h-4 w-4" /></div>
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            { me: false, t: 'Hi! I need to reset my card PIN.' },
            { me: true, t: 'Sure, I can help with that. Verifying identity…' },
            { me: false, t: 'Great, thanks!' },
            { me: true, t: 'Done. A secure link was sent to your phone ✨' },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: m.me ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.2 }}
              className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${m.me ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-br-sm' : 'glass rounded-bl-sm text-white/90'}`}>
                {m.t}
              </div>
            </motion.div>
          ))}
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-2xl glass">
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce" style={{animationDelay:'0ms'}} />
                <div className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce" style={{animationDelay:'150ms'}} />
                <div className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce" style={{animationDelay:'300ms'}} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="absolute right-2 top-0 w-[46%] rounded-3xl glass-strong p-4 glow-purple animate-float-slow"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 rounded-full pulse-ring bg-red-500/40" />
              <span className="relative h-2 w-2 rounded-full bg-red-500 block" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Live • Video</span>
          </div>
          <span className="text-xs text-white/60 font-mono">14:32</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {['from-blue-500 to-cyan-500','from-purple-500 to-pink-500','from-emerald-500 to-teal-500','from-amber-500 to-orange-500'].map((g,i)=>(
            <div key={i} className={`aspect-video rounded-xl bg-gradient-to-br ${g} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-1 left-1.5 text-[9px] font-medium">User {i+1}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          {[Mic,Video,PhoneCall].map((Icon,i)=>(
            <div key={i} className={`h-8 w-8 rounded-full grid place-items-center ${i===2?'bg-red-500':'glass'}`}>
              <Icon className="h-3.5 w-3.5" />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.9 }}
        className="absolute right-0 bottom-4 w-[48%] rounded-3xl glass-strong p-4 animate-float-slower"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/50">Realtime Calls</div>
            <div className="text-2xl font-display font-bold">12,847</div>
          </div>
          <div className="flex items-center gap-1 text-emerald-400 text-xs">
            <TrendingUp className="h-3 w-3" /> +24.6%
          </div>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-14">
          <defs>
            <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="gradFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,45 C20,35 40,42 60,28 C80,18 100,32 120,22 C140,14 160,26 180,10 L200,8 L200,60 L0,60 Z" fill="url(#gradFill)" />
          <path d="M0,45 C20,35 40,42 60,28 C80,18 100,32 120,22 C140,14 160,26 180,10 L200,8" fill="none" stroke="url(#gradLine)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute left-0 bottom-8 w-[44%] rounded-2xl glass-strong p-3.5 animate-float-slow"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          <span className="text-[10px] uppercase tracking-wider text-cyan-300 font-semibold">AI Summary</span>
        </div>
        <p className="text-xs text-white/80 leading-relaxed">Customer resolved a PIN reset via secure link. Sentiment: positive. Handoff: none.</p>
      </motion.div>

      {[...Array(14)].map((_,i)=>(
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/50"
          style={{ left: `${(i*7)%100}%`, top: `${(i*13)%100}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + i*0.2, repeat: Infinity, delay: i*0.15 }}
        />
      ))}
    </div>
  )
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <Aurora />
      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white/80">New · KineTalk AI Agent v2 is live</span>
              <ArrowRight className="h-3 w-3" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Build AI-Powered<br/>
              <span className="gradient-text animate-gradient-x">Conversations</span><br/>
              That Scale To Millions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed"
            >
              One communication platform. Infinite possibilities. Launch chat, voice, video, AI agents, and customer engagement — faster than ever.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button size="lg" className="btn-glow text-white border-0">
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-4 w-4" /> Book Demo
              </Button>
              <Button size="lg" variant="ghost">
                Explore APIs <Code2 className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-xl"
            >
              {[
                { v: '190+', l: 'Countries' },
                { v: '50B+', l: 'Messages/mo' },
                { v: '99.999%', l: 'Uptime SLA' },
              ].map(s=>(
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold gradient-text">{s.v}</div>
                  <div className="text-xs text-white/50 mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Social Proof ---------------- */
function SocialProof() {
  const logos = ['Northwind','Vertex Bank','Helia Health','Orbital','Nova Labs','Meridian','Quantify','Loop','Sapien','Zeus Pay','Nimbus','Kinetic']
  return (
    <section className="py-14 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40 mb-8">Trusted by teams shipping the next decade of communication</p>
        <div className="relative overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l,i)=>(
              <div key={i} className="font-display text-2xl text-white/40 hover:text-white/70 transition">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Feature Grid ---------------- */
function FeatureGrid() {
  const features = [
    { icon: MessageSquare, title: 'Chat SDK', desc: 'Realtime messaging with presence, typing, read receipts, threads and channels.', color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, title: 'Voice SDK', desc: 'Crystal-clear voice via WebRTC with SIP interop, IVR and call routing.', color: 'from-purple-500 to-pink-500' },
    { icon: Video, title: 'Video SDK', desc: 'HD group video calls, screen share, recording and 1000+ participant rooms.', color: 'from-cyan-500 to-blue-500' },
    { icon: Bot, title: 'AI Agents', desc: 'Deploy voice & chat agents powered by GPT, Claude, Gemini or your own LLM.', color: 'from-violet-500 to-purple-600' },
    { icon: Radio, title: 'Live Streaming', desc: 'Broadcast to millions with sub-second latency and HLS/DASH support.', color: 'from-fuchsia-500 to-pink-600' },
    { icon: Users, title: 'Contact Center', desc: 'Omnichannel routing, agent desktop, quality monitoring and AI copilots.', color: 'from-indigo-500 to-blue-600' },
    { icon: Languages, title: 'AI Translation', desc: 'Realtime translation across 100+ languages for chat, voice and video.', color: 'from-emerald-500 to-teal-500' },
    { icon: Shield, title: 'AI Moderation', desc: 'Detect and remove abuse, PII and toxicity across all media in realtime.', color: 'from-amber-500 to-orange-500' },
  ]
  return (
    <section id="platform" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="glass border border-white/10 text-cyan-300 mb-5">Platform</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Everything you need to build <span className="gradient-text">communication products</span></h2>
          <p className="mt-4 text-white/60 text-lg">A complete CPaaS with SDKs, APIs and AI baked in — from prototype to planet scale.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (i%4)*0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl glass p-6 hover:glass-strong transition-all overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />
              <div className={`relative h-12 w-12 rounded-2xl bg-gradient-to-br ${f.color} grid place-items-center mb-4 shadow-lg`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-white/40 group-hover:text-white transition-colors">
                Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- AI Section ---------------- */
function AISection() {
  return (
    <section id="ai" className="py-28 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-purple-600/15 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl" />
              <div className="absolute inset-8 rounded-full glass-strong grid place-items-center">
                <div className="absolute inset-4 rounded-full border border-white/10 animate-spin-slow" />
                <div className="absolute inset-10 rounded-full border border-white/10 animate-spin-slow" style={{animationDirection:'reverse', animationDuration:'25s'}}/>
                <div className="absolute inset-16 rounded-full border border-white/10 animate-spin-slow" style={{animationDuration:'30s'}} />
                <BrainCircuit className="h-24 w-24" style={{stroke:'url(#brainG)'}} />
                <svg width="0" height="0"><defs><linearGradient id="brainG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#60a5fa"/><stop offset="50%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#22d3ee"/></linearGradient></defs></svg>
              </div>
              {['GPT-4','Claude','Gemini','DeepSeek','Llama','Mistral'].map((m,i)=>{
                const angle = (i / 6) * Math.PI * 2
                const x = 50 + 42 * Math.cos(angle)
                const y = 50 + 42 * Math.sin(angle)
                return (
                  <motion.div
                    key={m}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="absolute glass-strong rounded-xl px-3 py-1.5 text-xs font-medium -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {m}
                  </motion.div>
                )
              })}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Badge className="glass border border-white/10 text-purple-300 mb-5"><Sparkles className="h-3 w-3 mr-1"/> KineTalk AI</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              An <span className="gradient-text">AI operating system</span> for every conversation
            </h2>
            <p className="mt-5 text-white/60 text-lg">Bring your model or use ours. Deploy voice agents, chatbots, knowledge assistants, moderation and call intelligence — all with a single API.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                { icon: Bot, t: 'AI Voice Agent', d: 'Human-quality voice, sub-500ms latency' },
                { icon: MessageSquare, t: 'AI Chatbot', d: 'RAG on your knowledge base' },
                { icon: PenTool, t: 'Call Summary', d: 'Auto notes, action items, sentiment' },
                { icon: Search, t: 'AI Search', d: 'Semantic search across all channels' },
                { icon: BarChart3, t: 'AI Analytics', d: 'Deep intent, topic and CSAT insights' },
                { icon: Wand2, t: 'AI Routing', d: 'Route by intent, skill and mood' },
              ].map(x => (
                <div key={x.t} className="glass rounded-2xl p-4 hover:glass-strong transition">
                  <x.icon className="h-4 w-4 text-cyan-300 mb-2" />
                  <div className="font-semibold text-sm">{x.t}</div>
                  <div className="text-xs text-white/50 mt-0.5">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Developer Experience ---------------- */
function DevExperience() {
  const snippets = {
    'Node.js': `import { KineTalk } from '@kinetalk/node'

const kt = new KineTalk({ apiKey: process.env.KT_KEY })

// Send a message
await kt.channels.messages.send({
  channel: 'support',
  user: 'u_483',
  text: 'Welcome to KineTalk 👋',
})

// Spin up an AI voice agent
const agent = await kt.ai.agents.create({
  voice: 'nova',
  model: 'gpt-4o',
  tools: ['crm.lookup', 'ticket.create'],
})`,
    'Python': `from kinetalk import KineTalk

kt = KineTalk(api_key=os.environ["KT_KEY"])

kt.channels.messages.send(
    channel="support",
    user="u_483",
    text="Welcome to KineTalk 👋",
)

agent = kt.ai.agents.create(
    voice="nova",
    model="claude-3-5-sonnet",
    tools=["crm.lookup"],
)`,
    'React': `import { useKineTalkChat } from '@kinetalk/react'

export default function Chat() {
  const { messages, send, typing } = useKineTalkChat({
    channel: 'support',
    aiAgent: 'agent_nova',
  })

  return (
    <ChatUI
      messages={messages}
      onSend={send}
      typing={typing}
    />
  )
}`,
    'Go': `package main

import "github.com/kinetalk/go-sdk"

func main() {
    kt := kinetalk.New(os.Getenv("KT_KEY"))

    kt.Channels.Send(&kinetalk.Message{
        Channel: "support",
        User:    "u_483",
        Text:    "Welcome to KineTalk",
    })
}`,
    'Swift': `import KineTalk

let kt = KineTalk(apiKey: Env.KT_KEY)

try await kt.channels.send(
  Message(channel: "support", user: "u_483",
          text: "Welcome to KineTalk"))`,
  }
  const [tab, setTab] = useState('Node.js')
  return (
    <section id="developers" className="py-24 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <Badge className="glass border border-white/10 text-emerald-300 mb-5"><Code2 className="h-3 w-3 mr-1"/> Developers</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">Built by developers, <br/>for <span className="gradient-text">developers</span></h2>
            <p className="mt-5 text-white/60 text-lg">First-class SDKs for every stack. REST, GraphQL, WebRTC and WebSocket APIs. Prototype in minutes, deploy in production.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['REST','GraphQL','WebSocket','WebRTC','SIP','CLI','GitHub'].map(t=>(
                <span key={t} className="px-3 py-1.5 rounded-full glass text-xs text-white/80">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Button className="btn-glow text-white border-0">View Docs <ArrowRight className="ml-2 h-4 w-4"/></Button>
              <Button variant="outline"><Github className="mr-2 h-4 w-4"/> GitHub</Button>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="rounded-3xl glass-strong p-4 glow-blue overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/70"/>
                  <div className="h-3 w-3 rounded-full bg-yellow-400/70"/>
                  <div className="h-3 w-3 rounded-full bg-green-400/70"/>
                </div>
                <div className="text-xs text-white/40 font-mono">kinetalk.sdk</div>
              </div>
              <div className="flex gap-1 mb-3 flex-wrap">
                {Object.keys(snippets).map(k=>(
                  <button key={k} onClick={()=>setTab(k)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${tab===k?'bg-white/10 text-white':'text-white/50 hover:text-white/80'}`}>{k}</button>
                ))}
              </div>
              <pre className="text-xs md:text-[13px] leading-relaxed p-4 rounded-2xl bg-black/40 overflow-x-auto max-h-[420px]">
                <code className="font-mono text-white/90">{snippets[tab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Architecture ---------------- */
function Architecture() {
  const layers = [
    { title: 'Client Apps', icon: Layers, color: 'from-blue-500 to-cyan-400' },
    { title: 'SDKs', icon: Braces, color: 'from-cyan-400 to-teal-400' },
    { title: 'Edge Gateway', icon: Zap, color: 'from-teal-400 to-emerald-400' },
    { title: 'Microservices', icon: Cpu, color: 'from-emerald-400 to-lime-400' },
    { title: 'Kafka + Redis', icon: Activity, color: 'from-lime-400 to-yellow-400' },
    { title: 'MongoDB · PG · Storage', icon: Database, color: 'from-yellow-400 to-orange-400' },
    { title: 'AI Engine', icon: BrainCircuit, color: 'from-orange-400 to-pink-500' },
    { title: 'Analytics & Admin', icon: BarChart3, color: 'from-pink-500 to-purple-500' },
  ]
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="glass border border-white/10 text-blue-300 mb-5">Architecture</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">A stack engineered for <span className="gradient-text">planet scale</span></h2>
          <p className="mt-4 text-white/60 text-lg">Every layer is horizontally scalable, multi-region and observable by default.</p>
        </div>
        <div className="relative rounded-3xl glass-strong p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
            {layers.map((l,i)=>(
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i*0.06 }}
                className="relative group"
              >
                <div className="rounded-2xl glass p-5 hover:glass-strong transition h-full">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${l.color} grid place-items-center mb-3`}>
                    <l.icon className="h-4 w-4 text-black"/>
                  </div>
                  <div className="text-sm font-semibold">{l.title}</div>
                  <div className="mt-2 flex items-center gap-1">
                    {[...Array(3)].map((_,j)=>(
                      <span key={j} className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden">
                        <span className="block h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 animate-shimmer"/>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Industries ---------------- */
function Industries() {
  const items = [
    { icon: HeartPulse, t: 'Healthcare', d: 'HIPAA-compliant telemedicine, patient messaging.', color: 'from-rose-500 to-pink-500' },
    { icon: Landmark, t: 'FinTech', d: 'KYC video calls, secure banking chat, fraud AI.', color: 'from-emerald-500 to-teal-500' },
    { icon: GraduationCap, t: 'Education', d: 'Live classes, tutoring, cohort communities.', color: 'from-amber-500 to-orange-500' },
    { icon: ShoppingBag, t: 'Ecommerce', d: 'Live shopping, WhatsApp commerce, AI CS.', color: 'from-purple-500 to-fuchsia-500' },
    { icon: Building2, t: 'Government', d: 'Citizen support, compliant recording, IVR.', color: 'from-blue-500 to-indigo-500' },
    { icon: Plane, t: 'Travel', d: 'Rebooking bots, itinerary chat, voice concierge.', color: 'from-cyan-500 to-sky-500' },
    { icon: Gamepad2, t: 'Gaming', d: 'Voice rooms, guild chat, live moderation.', color: 'from-violet-500 to-purple-600' },
    { icon: Truck, t: 'Logistics', d: 'Driver dispatch, delivery notifications, POD.', color: 'from-lime-500 to-emerald-500' },
    { icon: Factory, t: 'Manufacturing', d: 'Floor comms, safety alerts, shift handoffs.', color: 'from-orange-500 to-red-500' },
  ]
  return (
    <section id="industries" className="py-24 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="glass border border-white/10 text-fuchsia-300 mb-5">Industries</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Powering conversations across <span className="gradient-text">every industry</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i%3)*0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl glass p-6 hover:glass-strong transition relative overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br ${it.color} opacity-20 group-hover:opacity-40 blur-2xl transition`} />
              <div className={`relative h-11 w-11 rounded-2xl bg-gradient-to-br ${it.color} grid place-items-center mb-4`}>
                <it.icon className="h-5 w-5"/>
              </div>
              <div className="font-display text-lg font-semibold">{it.t}</div>
              <div className="text-sm text-white/60 mt-1">{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Why KineTalk ---------------- */
function WhyKineTalk() {
  const items = [
    { icon: Rocket, t: 'API First' }, { icon: Braces, t: 'SDK First' },
    { icon: Cloud, t: 'Cloud or Self-Hosted' }, { icon: Shield, t: 'Enterprise Ready' },
    { icon: Globe2, t: 'Global Infrastructure' }, { icon: Zap, t: 'Unlimited Scale' },
    { icon: Sparkles, t: 'AI Native' }, { icon: Lock, t: 'Security First' },
  ]
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="glass border border-white/10 text-cyan-300 mb-5">Why KineTalk</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">The advantage that <span className="gradient-text">compounds</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it,i)=>(
            <motion.div
              key={it.t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i*0.05 }}
              className="rounded-3xl glass p-6 flex items-center gap-3 hover:glass-strong transition"
            >
              <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center">
                <it.icon className="h-5 w-5 text-cyan-300"/>
              </div>
              <div className="font-medium text-sm">{it.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Dashboard Preview ---------------- */
function DashboardPreview() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="glass border border-white/10 text-purple-300 mb-5">Admin Console</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">A dashboard your ops team will <span className="gradient-text">actually love</span></h2>
        </div>
        <div className="rounded-3xl glass-strong p-3 glow-purple">
          <div className="rounded-2xl bg-[#0a0a14]/80 p-6 grid lg:grid-cols-4 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 px-3 py-2">
                <img src={LOGO} alt="" className="h-6 w-6 rounded bg-white/95 p-0.5"/>
                <span className="font-display font-bold text-sm">KineTalk</span>
              </div>
              {['Overview','Messages','Voice','Video','AI Agents','Analytics','Billing','Settings'].map((l,i)=>(
                <div key={l} className={`px-3 py-2 rounded-lg text-sm ${i===0?'bg-white/10 text-white':'text-white/50 hover:text-white'}`}>{l}</div>
              ))}
            </div>
            <div className="lg:col-span-3 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { l: 'Revenue', v: '$284,921', d: '+18.2%', c: 'from-blue-500 to-cyan-500' },
                  { l: 'Users', v: '48,214', d: '+12.4%', c: 'from-purple-500 to-pink-500' },
                  { l: 'Calls', v: '1.2M', d: '+22.9%', c: 'from-emerald-500 to-teal-500' },
                  { l: 'Messages', v: '38.4M', d: '+9.7%', c: 'from-amber-500 to-orange-500' },
                ].map(k=>(
                  <div key={k.l} className="glass rounded-2xl p-4">
                    <div className="text-[10px] uppercase tracking-wider text-white/50">{k.l}</div>
                    <div className="font-display text-2xl font-bold mt-1">{k.v}</div>
                    <div className={`text-xs mt-1 bg-gradient-to-r ${k.c} bg-clip-text text-transparent font-medium`}>{k.d}</div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-semibold">Traffic Overview</div>
                    <div className="text-xs text-white/50">Last 30 days · realtime</div>
                  </div>
                  <div className="flex gap-1">
                    {['24h','7d','30d','90d'].map((t,i)=>(
                      <span key={t} className={`px-2.5 py-1 rounded-md text-xs ${i===2?'bg-white/10':''} text-white/70`}>{t}</span>
                    ))}
                  </div>
                </div>
                <svg viewBox="0 0 400 120" className="w-full h-32">
                  <defs>
                    <linearGradient id="d1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#22d3ee"/>
                    </linearGradient>
                    <linearGradient id="d2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#ec4899"/>
                    </linearGradient>
                    <linearGradient id="d1f" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/><stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,90 C40,70 80,80 120,60 C160,45 200,55 240,35 C280,20 320,30 360,15 L400,10 L400,120 L0,120 Z" fill="url(#d1f)"/>
                  <path d="M0,90 C40,70 80,80 120,60 C160,45 200,55 240,35 C280,20 320,30 360,15 L400,10" fill="none" stroke="url(#d1)" strokeWidth="2"/>
                  <path d="M0,100 C40,95 80,88 120,80 C160,75 200,70 240,60 C280,55 320,48 360,40 L400,35" fill="none" stroke="url(#d2)" strokeWidth="2" strokeDasharray="4 3"/>
                </svg>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="glass rounded-2xl p-5">
                  <div className="text-sm font-semibold mb-3">Live Channels</div>
                  <div className="space-y-2">
                    {['#support','#sales','#onboarding','#vip-clients'].map((c,i)=>(
                      <div key={c} className="flex items-center justify-between text-sm">
                        <span className="text-white/80">{c}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/50">{[124,89,42,17][i]} active</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="text-sm font-semibold mb-3">Regional Latency</div>
                  <div className="space-y-2.5">
                    {[['US-East','32ms',95],['EU-West','48ms',85],['AP-South','61ms',75],['SA-East','88ms',65]].map(([r,ms,w])=>(
                      <div key={r}>
                        <div className="flex justify-between text-xs text-white/60 mb-1"><span>{r}</span><span>{ms}</span></div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" style={{width: `${w}%`}}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$0', d: 'For hobby projects & prototypes', feats: ['10k messages/mo','100 voice minutes','Community support','Basic analytics'], cta: 'Start Free', highlight: false },
    { name: 'Growth', price: '$499', d: 'For scaling products & teams', feats: ['5M messages/mo','50k voice minutes','AI Agents included','Priority support','SSO & audit logs'], cta: 'Start Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', d: 'For mission-critical workloads', feats: ['Unlimited scale','Dedicated infra','Self-hosted option','24/7 white-glove','Custom SLAs & compliance'], cta: 'Contact Sales', highlight: false },
  ]
  return (
    <section id="pricing" className="py-24 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="glass border border-white/10 text-emerald-300 mb-5">Pricing</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Simple pricing. <span className="gradient-text">Infinite scale.</span></h2>
          <p className="mt-4 text-white/60 text-lg">Start free. Pay only as you grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {tiers.map((t,i)=>(
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i*0.1 }}
              className={`relative rounded-3xl p-8 ${t.highlight ? 'gradient-border glass-strong glow-purple' : 'glass'}`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-600">Most Popular</div>
              )}
              <div className="font-display text-xl font-bold">{t.name}</div>
              <div className="text-sm text-white/50 mt-1">{t.d}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{t.price}</span>
                {t.price !== 'Custom' && <span className="text-white/50">/mo</span>}
              </div>
              <Button className={`w-full mt-6 h-11 ${t.highlight ? 'btn-glow border-0 text-white' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'}`}>{t.cta}</Button>
              <div className="mt-8 space-y-3">
                {t.feats.map(f=>(
                  <div key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0"/> {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    { q: 'KineTalk cut our time-to-launch from 9 months to 6 weeks. The AI agent quality is genuinely a step change.', a: 'Priya S.', r: 'VP Engineering · Vertex Bank' },
    { q: 'We replaced three vendors with KineTalk. Chat, voice and video from a single API with insane reliability.', a: 'Marco D.', r: 'CTO · Helia Health' },
    { q: 'The dashboard is the first admin console engineers actually enjoy using. AI summaries are gold.', a: 'Nia W.', r: 'Head of Product · Northwind' },
  ]
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="glass border border-white/10 text-yellow-300 mb-5">Customer Stories</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Loved by teams <span className="gradient-text">shipping the future</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((t,i)=>(
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i*0.1 }}
              className="rounded-3xl glass p-7 hover:glass-strong transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_,j)=><Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>)}
              </div>
              <p className="text-white/85 leading-relaxed">“{t.q}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"/>
                <div>
                  <div className="text-sm font-semibold">{t.a}</div>
                  <div className="text-xs text-white/50">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: 'What is KineTalk?', a: 'KineTalk is an AI-native Communication Platform (CPaaS) offering chat, voice, video, AI agents, moderation, translation, contact center and streaming — all through unified APIs and SDKs.' },
    { q: 'Can I self-host KineTalk?', a: 'Yes. KineTalk runs cloud-hosted or fully self-hosted on your infrastructure with Kubernetes-native deployment, private networking and BYO-cloud options.' },
    { q: 'Which AI models can I use?', a: 'Bring OpenAI GPT-4o, Claude 3.5, Gemini, DeepSeek, Llama, Mistral or your own custom LLM. Route intelligently with the KineTalk AI Gateway.' },
    { q: 'What SDKs do you support?', a: 'JavaScript, TypeScript, React, React Native, Vue, Angular, Node.js, Python, Go, Java, Kotlin, Swift and Flutter — all first-class.' },
    { q: 'How is KineTalk priced?', a: 'Usage-based per message, voice minute and video minute. Growth and Enterprise plans include AI, SSO and premium support with predictable committed pricing.' },
    { q: 'Do you have SOC2, HIPAA and GDPR compliance?', a: 'Yes. KineTalk is SOC 2 Type II, HIPAA, GDPR, ISO 27001 and PCI-DSS aligned, with regional data residency across 12+ regions.' },
  ]
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <Badge className="glass border border-white/10 text-blue-300 mb-5">FAQ</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Questions, <span className="gradient-text">answered</span></h2>
        </div>
        <div className="rounded-3xl glass p-2">
          <Accordion type="single">
            {faqs.map((f,i)=>(
              <AccordionItem key={i} value={`i-${i}`} className="border-b border-white/5 last:border-0 rounded-2xl px-5 data-[state=open]:bg-white/5">
                <AccordionTrigger className="font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-white/60 leading-relaxed pr-6">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="relative rounded-[2.5rem] glass-strong p-12 md:p-20 text-center overflow-hidden glow-purple">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/30 blur-[100px] animate-float-slow"/>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[100px] animate-float-slower"/>
            <div className="absolute inset-0 grid-pattern opacity-20"/>
          </div>
          <Badge className="glass border border-white/10 text-cyan-300 mb-6"><Sparkles className="h-3 w-3 mr-1"/> Ready to build?</Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight">Start building with <span className="gradient-text">KineTalk</span> today</h2>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">Free forever tier. No credit card. Prototype in minutes, deploy globally in an afternoon.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="btn-glow border-0 text-white">Start Free <ArrowRight className="ml-2 h-4 w-4"/></Button>
            <Button size="lg" variant="outline">Talk to Sales</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [
    { t: 'Platform', l: ['Overview','Chat SDK','Voice SDK','Video SDK','Live Streaming','AI Agents','Contact Center'] },
    { t: 'Developers', l: ['Documentation','API Reference','SDKs','Tutorials','GitHub','CLI','Status'] },
    { t: 'Solutions', l: ['Healthcare','FinTech','Education','Government','Ecommerce','Gaming'] },
    { t: 'Company', l: ['About','Careers','Partners','Blog','Press','Contact'] },
    { t: 'Legal', l: ['Security','Privacy','Terms','Compliance','DPA','SOC 2'] },
  ]
  return (
    <footer className="pt-24 pb-10 relative border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={LOGO} alt="KineTalk" className="h-9 w-auto rounded-md bg-white/95 p-1"/>
              <span className="font-display text-lg font-bold">KineTalk</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">AI-native communication for the enterprise.</p>
            <div className="flex gap-2 mt-5">
              {[Github,Twitter,Linkedin,Youtube].map((I,i)=>(
                <a key={i} href="#" className="h-9 w-9 rounded-lg glass grid place-items-center hover:glass-strong transition">
                  <I className="h-4 w-4"/>
                </a>
              ))}
            </div>
          </div>
          {cols.map(c=>(
            <div key={c.t}>
              <div className="text-sm font-semibold mb-4">{c.t}</div>
              <ul className="space-y-2.5">
                {c.l.map(x=>(
                  <li key={x}><a href="#" className="text-sm text-white/50 hover:text-white transition">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40">© 2026 KineTalk, Inc. All rights reserved.</div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/> All systems operational</span>
            <span>·</span>
            <span>SOC 2 Type II</span>
            <span>·</span>
            <span>HIPAA</span>
            <span>·</span>
            <span>GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------------- Main App ---------------- */
function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <Nav />
      <Hero />
      <SocialProof />
      <FeatureGrid />
      <AISection />
      <DevExperience />
      <Architecture />
      <Industries />
      <WhyKineTalk />
      <DashboardPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
