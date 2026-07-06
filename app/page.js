'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Video, MessageSquare, Bot, Radio, Users, Shield, Zap, Code2,
  Star, Check, ChevronDown, ArrowRight, Play, Menu, X, Server, Cloud,
  Lock, Database, BrainCircuit, Sparkles, Search, Languages, Wand2, BarChart3,
  PenTool, HeartPulse, Landmark, GraduationCap, ShoppingBag, Building2, Plane,
  Gamepad2, Truck, Factory, Github, Twitter, Linkedin, Youtube, Instagram, Facebook,
  UploadCloud, MapPin, PhoneCall, Share2, Globe2, Tag, Radio as RadioIcon, Link as LinkIcon,
  MessageCircle, MousePointer2, ClipboardList, FileText, Mic, ScanFace, Rocket, HeadphonesIcon,
  Award, TrendingUp, Layers
} from 'lucide-react'

const LOGO = 'https://customer-assets.emergentagent.com/job_3a995167-d953-410f-b92f-092c76b1d210/artifacts/ohiyrn57_kinetalk-logo.png'

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { label: 'Products', href: '#products' },
    { label: 'Enterprise IM', href: '#enterprise' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Developers', href: '#developers' },
    { label: 'Features', href: '#features' },
  ]
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur shadow-[0_1px_0_rgba(15,23,42,0.06)]' : 'bg-white'}`}>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={LOGO} alt="KineTalk" className="h-10 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-2">
            {links.map(l => (
              <a key={l.label} href={l.href} className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-slate-700 hover:text-brand transition rounded-lg">
                {l.label} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </a>
            ))}
            <button className="px-3 py-2 text-slate-700 hover:text-brand text-2xl leading-none font-bold">…</button>
          </nav>
          <div className="flex items-center gap-3">
            <button className="btn-red-outline hidden md:inline-flex items-center h-11 px-5 rounded-lg text-sm font-semibold">Contact Sales</button>
            <button className="btn-red-solid inline-flex items-center h-11 px-5 rounded-lg text-sm font-semibold">Request Demo</button>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-slate-700">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} className="lg:hidden overflow-hidden border-t border-slate-100">
            <div className="p-4 space-y-1">
              {links.map(l=>(
                <a key={l.label} href={l.href} onClick={()=>setOpen(false)} className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-lavender">{l.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-red-50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="inline-flex items-center gap-2 rounded-full bg-lavender-2 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-semibold text-brand">NEW · AI VOICE AGENT V2 IS LIVE</span>
            </motion.div>
            <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="font-display text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight text-slate-900">
              Build <span className="text-brand">AI-Powered</span> Conversations That Scale To <span className="highlight-yellow">Millions</span>
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.15}} className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              One communication platform. Infinite possibilities. Launch chat, voice, video, AI agents and customer engagement — faster than ever.
            </motion.p>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.3}} className="mt-8 flex flex-wrap gap-3">
              <button className="btn-red-solid inline-flex items-center h-12 px-7 rounded-lg text-base font-semibold">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></button>
              <button className="btn-red-outline inline-flex items-center h-12 px-7 rounded-lg text-base font-semibold">Contact Sales</button>
              <button className="inline-flex items-center h-12 px-6 rounded-lg text-base font-semibold text-brand hover:bg-lavender transition"><Play className="mr-2 h-4 w-4" /> Watch Video</button>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-sm font-semibold text-slate-900">4.5</span>
                <span className="text-xs text-slate-500">on G2</span>
              </div>
              <div className="text-sm text-slate-500">Based on <span className="font-semibold text-slate-900">100+ reviews</span></div>
              <div className="flex gap-2">
                {['Clutch','G2','Capterra'].map(x=><span key={x} className="h-8 w-8 rounded-full bg-lavender-2 grid place-items-center text-[10px] font-bold text-brand">{x[0]}</span>)}
              </div>
            </motion.div>
          </div>
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <div className="relative h-[560px] w-full">
      {/* Chat card */}
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:0.7}} className="absolute left-2 top-4 w-[56%] card-soft rounded-3xl p-5 animate-float">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white font-bold text-sm">AI</div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">KineTalk Agent</div>
            <div className="text-[11px] text-emerald-600 flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Active now</div>
          </div>
          <div className="ml-auto flex gap-1.5">
            <div className="h-8 w-8 rounded-lg bg-lavender grid place-items-center"><Phone className="h-3.5 w-3.5 text-brand" /></div>
            <div className="h-8 w-8 rounded-lg bg-lavender grid place-items-center"><Video className="h-3.5 w-3.5 text-brand" /></div>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { me:false, t:'Hi! I need to reset my card PIN.' },
            { me:true, t:'Sure! Verifying your identity now…' },
            { me:false, t:'Great, thanks!' },
            { me:true, t:'Done ✅ A secure link was sent to your phone.' },
          ].map((m,i)=>(
            <motion.div key={i} initial={{opacity:0, x: m.me?20:-20}} animate={{opacity:1, x:0}} transition={{delay:0.6 + i*0.15}} className={`flex ${m.me?'justify-end':'justify-start'}`}>
              <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${m.me?'bg-brand text-white rounded-br-md':'bg-lavender text-slate-800 rounded-bl-md'}`}>{m.t}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Live video call */}
      <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{delay:0.5, duration:0.7}} className="absolute right-0 top-0 w-[46%] card-soft rounded-3xl p-4 animate-float" style={{animationDelay:'1s'}}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 rounded-full pulse-ring bg-red-400/50" />
              <span className="relative h-2 w-2 rounded-full bg-brand-red block" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Live · Video Call</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">14:32</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {['from-blue-500 to-indigo-600','from-purple-500 to-pink-500','from-emerald-500 to-teal-500','from-amber-400 to-orange-500'].map((g,i)=>(
            <div key={i} className={`aspect-video rounded-lg bg-gradient-to-br ${g} relative overflow-hidden`}>
              <div className="absolute bottom-1 left-1.5 text-[9px] font-medium text-white/95">User {i+1}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="h-8 w-8 rounded-full bg-lavender grid place-items-center"><Mic className="h-3.5 w-3.5 text-slate-700" /></div>
          <div className="h-8 w-8 rounded-full bg-lavender grid place-items-center"><Video className="h-3.5 w-3.5 text-slate-700" /></div>
          <div className="h-8 w-8 rounded-full bg-brand-red grid place-items-center"><PhoneCall className="h-3.5 w-3.5 text-white" /></div>
        </div>
      </motion.div>

      {/* Analytics */}
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.8}} className="absolute right-4 bottom-8 w-[52%] card-soft rounded-3xl p-4 animate-float" style={{animationDelay:'2s'}}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Realtime Calls</div>
            <div className="font-display text-2xl font-bold text-slate-900">12,847</div>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold bg-emerald-50 px-2 py-1 rounded-md">
            <TrendingUp className="h-3 w-3" /> +24.6%
          </div>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-14">
          <defs>
            <linearGradient id="heroLine" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="#1E40FF"/><stop offset="100%" stopColor="#5B7BFF"/></linearGradient>
            <linearGradient id="heroFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#1E40FF" stopOpacity="0.2"/><stop offset="100%" stopColor="#1E40FF" stopOpacity="0"/></linearGradient>
          </defs>
          <path d="M0,45 C20,35 40,42 60,28 C80,18 100,32 120,22 C140,14 160,26 180,10 L200,8 L200,60 L0,60 Z" fill="url(#heroFill)"/>
          <path d="M0,45 C20,35 40,42 60,28 C80,18 100,32 120,22 C140,14 160,26 180,10 L200,8" fill="none" stroke="url(#heroLine)" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Small AI pill */}
      <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:1}} className="absolute left-0 bottom-0 w-[42%] card-soft rounded-2xl p-3.5 animate-float" style={{animationDelay:'0.5s'}}>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="h-6 w-6 rounded-lg bg-icon-chip grid place-items-center"><Sparkles className="h-3.5 w-3.5 text-brand" /></div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-brand">AI Summary</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">Customer resolved a PIN reset via secure link. Sentiment: <span className="font-semibold text-emerald-600">positive</span>.</p>
      </motion.div>
    </div>
  )
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const logos = ['Northwind','Vertex Bank','Helia Health','Orbital','Nova Labs','Meridian','Quantify','Loop','Sapien','Zeus Pay','Nimbus','Kinetic']
  return (
    <section className="py-12 border-y border-slate-100">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">Trusted by 5,000+ teams worldwide</p>
        <div className="relative overflow-hidden" style={{maskImage:'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}>
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l,i)=>(
              <div key={i} className="font-display text-2xl text-slate-400 hover:text-brand transition">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- 1000+ FEATURES GRID ---------------- */
function FeaturesGrid() {
  const features = [
    { icon: Users, t: 'Private and Group Chats' },
    { icon: UploadCloud, t: 'Upload Huge Files' },
    { icon: PhoneCall, t: 'Call Waiting/Queuing' },
    { icon: MessageCircle, t: 'Chat Moderation' },
    { icon: MapPin, t: 'Geolocation Sharing' },
    { icon: Phone, t: 'Call Recording' },
    { icon: Share2, t: 'Share Your Screen' },
    { icon: Languages, t: 'Multi-Language Support' },
    { icon: Tag, t: 'Custom Metadata & Tags' },
    { icon: RadioIcon, t: 'Public & Private Channels' },
    { icon: LinkIcon, t: 'Join Via Link' },
    { icon: Bot, t: 'AI Chatbot' },
    { icon: Mic, t: 'AI Voice Agent' },
    { icon: Wand2, t: 'Smart Replies' },
    { icon: MousePointer2, t: 'Click-to-Call' },
    { icon: Shield, t: 'AI Moderation' },
    { icon: BarChart3, t: 'Sentiment Analysis' },
    { icon: HeadphonesIcon, t: 'AI Voice Assistant' },
    { icon: FileText, t: 'Speech to Text' },
    { icon: ClipboardList, t: 'MCP Integration' },
    { icon: TrendingUp, t: 'AI Analytics & Insights' },
  ]
  return (
    <section id="features" className="bg-lavender py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            <span className="text-brand">1000+ AI CPaaS Features</span> to Build Any App
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Create a top-notch user experience with all the modern communication features, &amp; customize it exactly how you want with our flexible APIs and SDKs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((f,i)=>(
            <motion.div key={f.t}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-40px'}}
              transition={{delay: (i%3)*0.08}}
              className="card-soft card-soft-hover rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="h-11 w-11 rounded-xl bg-icon-chip grid place-items-center shrink-0">
                <f.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              </div>
              <div className="font-semibold text-slate-900">{f.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- WE BUILD & MANAGE (image cards) ---------------- */
function BuildManage() {
  const items = [
    { t: 'Activity Feeds & News Feed', d: 'Show what people post or share instantly on a user’s feed. Allow users to like, comment, or share content from others.', tag: 'from-blue-500 to-indigo-600', icon: Layers },
    { t: 'Custom AI Voice Agent', d: 'Create intelligent AI voice agents that understand intent, analyse sentiment and talk like a human agent to users on your platform.', tag: 'from-cyan-500 to-blue-600', icon: Mic },
    { t: 'AI Video KYC', d: 'Quickly and securely verify customer identities in minutes with KineTalk’s AI-powered, video-enabled KYC API to streamline onboarding.', tag: 'from-red-500 to-rose-600', icon: ScanFace },
    { t: 'Contact Center Cloud', d: 'Omnichannel contact center with AI copilots for agents, live monitoring, IVR flows and unified customer history.', tag: 'from-emerald-500 to-teal-600', icon: HeadphonesIcon },
    { t: 'Developer Console', d: 'Full-featured dashboard for API keys, environments, logs, metrics, webhooks and role-based access for your entire team.', tag: 'from-slate-700 to-slate-900', icon: Code2 },
    { t: 'AI Video Analytics', d: 'Extract topics, emotions and action items from every video meeting with automatic transcripts, summaries and insights.', tag: 'from-purple-500 to-fuchsia-600', icon: BrainCircuit },
  ]
  return (
    <section id="solutions" className="bg-lavender py-24 border-t border-slate-100">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            We <span className="text-brand">Build &amp; Manage</span> It All For You, <span className="text-slate-900">End-to-End!</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Looking for something beyond in-app communication capabilities? We’ve got you covered. Explore our extensively feature-rich CPaaS solution.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it,i)=>(
            <motion.div key={it.t}
              initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-40px'}}
              transition={{delay:(i%3)*0.08}}
              className="card-soft card-soft-hover rounded-3xl overflow-hidden"
            >
              <div className={`h-56 bg-gradient-to-br ${it.tag} relative overflow-hidden`}>
                <div className="absolute inset-0 grid-lines opacity-20" />
                <it.icon className="absolute right-6 top-6 h-8 w-8 text-white/80" strokeWidth={1.5} />
                <div className="absolute inset-0 grid place-items-center">
                  <it.icon className="h-24 w-24 text-white/25" strokeWidth={1.2} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{it.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{it.d}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:gap-2 transition-all border-b-2 border-brand pb-0.5">More info</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- DEPLOY ANYWHERE ---------------- */
function DeployAnywhere() {
  const cards = [
    { t: 'On-premise', d: 'Deploy your real-time communication infrastructure on your own on-prem server.', icon: Server },
    { t: 'Private Cloud', d: 'Keep the data and infrastructure in your control running on an isolated cloud environment.', icon: Cloud },
    { t: 'Third-Party DC', d: 'Run the app on dedicated servers hosted at an external co-location provider.', icon: Database },
    { t: 'Hybrid Cloud', d: 'Flexibly deploy messaging workloads across your own infrastructure or cloud.', icon: Lock },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Deploy Anywhere, <span className="text-brand">On Any Server</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">Host the solution on your preferred server or infrastructure and retain full control over your environment.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {cards.map((c,i)=>(
            <motion.div key={c.t}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
              transition={{delay:i*0.08}}
              className="bg-lavender rounded-3xl p-8 text-center hover:bg-lavender-2 transition"
            >
              <div className="h-24 w-24 mx-auto rounded-2xl bg-white grid place-items-center mb-5 shadow-sm">
                <c.icon className="h-11 w-11 text-brand" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{c.t}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 flex items-center justify-center gap-4 flex-wrap">
          <p className="text-slate-700">Ready to build an <span className="font-semibold">On-Premise Chat &amp; Call App</span> for enterprises?</p>
          <button className="inline-flex items-center gap-2 h-11 px-5 rounded-full border-2 border-brand text-brand font-semibold text-sm hover:bg-brand hover:text-white transition">
            Try Our Live Demo! <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ---------------- SECURITY ---------------- */
function Security() {
  return (
    <section id="enterprise" className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              The Globally Trusted CPaaS Solution For <span className="text-brand">Our Security</span> &amp; <span className="text-brand">Privacy</span> Standards
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Every user on your app deserves a safe and comfortable space where they can chat or call others without risking their personal info. That’s why your chat apps will have end-to-end encryption with KineTalk.
            </p>
            <ul className="mt-8 space-y-3">
              {['End-to-end encryption (TLS / SSL / AES)','SOC 2 Type II · HIPAA · GDPR compliant','ISO 27001 · PCI-DSS aligned infrastructure','Regional data residency across 12+ regions','Bring your own key (BYOK) support','24/7 security operations center'].map(x=>(
                <li key={x} className="flex items-start gap-3 text-slate-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 grid place-items-center shrink-0 mt-0.5"><Check className="h-3.5 w-3.5 text-emerald-600" /></div>
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <button className="btn-red-solid inline-flex items-center h-11 px-6 rounded-lg text-sm font-semibold">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></button>
              <button className="btn-red-outline inline-flex items-center h-11 px-6 rounded-lg text-sm font-semibold">Talk to Security</button>
            </div>
          </div>
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-lavender rounded-[3rem] rotate-3"></div>
            <div className="absolute inset-4 bg-white rounded-[2.75rem] card-soft grid place-items-center overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-40" />
              <div className="relative h-40 w-40 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center shadow-2xl shadow-blue-500/40">
                <Lock className="h-16 w-16 text-white" strokeWidth={1.5} />
              </div>
              {[{ x:'8%', y:'12%', t:'AES-256' },{ x:'75%', y:'18%', t:'TLS 1.3' },{ x:'12%', y:'75%', t:'SOC 2' },{ x:'72%', y:'78%', t:'HIPAA' }].map(b=>(
                <div key={b.t} className="absolute card-soft rounded-full px-3 py-1.5 text-xs font-semibold text-brand animate-float" style={{left:b.x, top:b.y, animationDelay:`${Math.random()*2}s`}}>
                  {b.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- AI SECTION ---------------- */
function AISection() {
  return (
    <section id="products" className="py-24 bg-lavender">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            An <span className="text-brand">AI Operating System</span> For Every Conversation
          </h2>
          <p className="mt-4 text-lg text-slate-600">Bring your own model or use ours. Deploy voice agents, chatbots, moderation and analytics through one unified API.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {[
            { i: Bot, t: 'AI Voice Agent', d: 'Human-quality voice with sub-500ms latency.' },
            { i: MessageSquare, t: 'AI Chatbot', d: 'Retrieval-augmented chat over your knowledge base.' },
            { i: PenTool, t: 'AI Call Summary', d: 'Auto notes, action items and sentiment for every call.' },
            { i: Search, t: 'AI Search', d: 'Semantic search across chat, voice and video history.' },
            { i: Wand2, t: 'AI Routing', d: 'Route conversations by intent, skill and mood.' },
            { i: BrainCircuit, t: 'BYO LLM', d: 'GPT-4o, Claude 3.5, Gemini, DeepSeek or custom.' },
          ].map((x,i)=>(
            <motion.div key={x.t}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
              className="card-soft card-soft-hover rounded-3xl p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-icon-chip grid place-items-center mb-4">
                <x.i className="h-6 w-6 text-brand" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">{x.t}</h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{x.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-slate-600 font-medium">Works with:</span>
          {['OpenAI GPT-4o','Anthropic Claude','Google Gemini','DeepSeek','Meta Llama','Mistral'].map(m=>(
            <span key={m} className="card-soft rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700">{m}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- INDUSTRIES ---------------- */
function Industries() {
  const items = [
    { i: HeartPulse, t: 'Healthcare' }, { i: Landmark, t: 'FinTech' },
    { i: GraduationCap, t: 'Education' }, { i: ShoppingBag, t: 'Ecommerce' },
    { i: Building2, t: 'Government' }, { i: Plane, t: 'Travel' },
    { i: Gamepad2, t: 'Gaming' }, { i: Truck, t: 'Logistics' },
    { i: Factory, t: 'Manufacturing' }, { i: Rocket, t: 'Startups' },
  ]
  return (
    <section id="developers" className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Powering <span className="text-brand">Every Industry</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">From telemedicine to gaming, KineTalk scales with your business.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {items.map((x,i)=>(
            <motion.div key={x.t}
              initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:(i%5)*0.05}}
              className="card-soft card-soft-hover rounded-2xl p-5 text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-icon-chip mx-auto grid place-items-center mb-3">
                <x.i className="h-6 w-6 text-brand" strokeWidth={1.5} />
              </div>
              <div className="font-semibold text-slate-900 text-sm">{x.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    { q: 'KineTalk cut our time-to-launch from 9 months to 6 weeks. The AI agent quality is genuinely a step change.', a: 'Priya S.', r: 'VP Engineering · Vertex Bank' },
    { q: 'We replaced three vendors with KineTalk. Chat, voice and video from a single API with insane reliability.', a: 'Marco D.', r: 'CTO · Helia Health' },
    { q: 'The dashboard is the first admin console engineers actually enjoy using. AI summaries are gold.', a: 'Nia W.', r: 'Head of Product · Northwind' },
  ]
  return (
    <section className="py-24 bg-lavender">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Loved By Teams <span className="text-brand">Shipping The Future</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {items.map((t,i)=>(
            <motion.div key={i}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="card-soft card-soft-hover rounded-3xl p-7"
            >
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_,j)=><Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>)}</div>
              <p className="text-slate-800 leading-relaxed">“{t.q}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white text-sm font-bold">{t.a[0]}</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.a}</div>
                  <div className="text-xs text-slate-500">{t.r}</div>
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
  const [open, setOpen] = useState(0)
  const faqs = [
    { q: 'Does KineTalk support AI agents?', a: 'Yes. KineTalk ships production-ready AI voice agents and AI chatbots with BYO-LLM support (GPT-4o, Claude 3.5, Gemini, DeepSeek, Llama and custom models).' },
    { q: 'Can I use KineTalk’s CPaaS for both Web and Mobile applications?', a: 'Absolutely. We offer first-class SDKs for React, React Native, Vue, Angular, iOS (Swift), Android (Kotlin) and Flutter — alongside Node, Python and Go backends.' },
    { q: 'How can KineTalk help you build an AI-powered voice agent?', a: 'Spin up a voice agent in minutes with our voice cloning, RAG, tool-use and telephony integrations. Sub-500ms latency across 12+ regions.' },
    { q: 'How much does KineTalk CPaaS solution cost?', a: 'Free tier for prototypes. Growth plan from $499/mo for scaling teams. Enterprise pricing is committed & customized — contact sales for a quote.' },
    { q: 'Is KineTalk’s CPaaS solution secure?', a: 'Yes. SOC 2 Type II, HIPAA, GDPR, ISO 27001 and PCI-DSS aligned. End-to-end encryption with AES-256 and TLS 1.3 across all channels.' },
    { q: 'Does KineTalk offer a Speech-to-Text API?', a: 'Yes. Realtime STT and TTS across 100+ languages, plus translation, summarization and moderation — all through unified endpoints.' },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            <span className="text-brand">Queries</span> You Might Want To Ask
          </h2>
          <p className="mt-3 text-slate-600">Solutions for frequently asked queries</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f,i)=>(
            <motion.div key={i}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:(i%2)*0.08}}
              className="card-soft rounded-2xl overflow-hidden"
            >
              <button onClick={()=>setOpen(open===i?-1:i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold text-slate-900">{f.q}</span>
                <span className={`h-8 w-8 rounded-full border border-slate-200 grid place-items-center transition ${open===i?'bg-brand border-brand':''}`}>
                  <ChevronDown className={`h-4 w-4 transition ${open===i?'rotate-180 text-white':'text-slate-500'}`} />
                </span>
              </button>
              <AnimatePresence>
                {open===i && (
                  <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}}>
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- BIG BLUE CTA ---------------- */
function BigCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="relative rounded-[2rem] overflow-hidden" style={{background:'linear-gradient(135deg, #1E40FF 0%, #2E4EF7 50%, #3B5BFF 100%)'}}>
          <div className="absolute inset-0 grid-lines opacity-20" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative p-10 md:p-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>)}
              </div>
              <span className="text-white font-bold">4.5</span>
              <span className="text-white/80 text-sm">Based on 100+ reviews on G2, Clutch &amp; Capterra</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready To Build Your Own 100% <span className="highlight-yellow">Customizable</span><br/>
              Video, Voice &amp; Chat <span className="highlight-yellow">Platform?</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className="btn-red-solid inline-flex items-center h-12 px-8 rounded-lg text-base font-semibold">Request Demo <ArrowRight className="ml-2 h-4 w-4"/></button>
              <button className="inline-flex items-center h-12 px-8 rounded-lg text-base font-semibold bg-white text-brand hover:bg-slate-100 transition">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    { t: 'PRODUCTS', l: ['HD Video Calling API','HQ Voice Calling SDK','In-app Chat API','Self Hosted Chat & Call','VoIP & SIP Calling','Live Streaming API','Build Video Chat App'] },
    { t: 'AI AGENTS', l: ['Conversational AI','Custom AI Voice Agent','Whitelabel Chatbot','Speech-to-Text API','AI Contact Center','Selfhosted AI Video KYC','On-Prem AI Consulting','AI Multi-Tenant Agents'] },
    { t: 'SOLUTIONS', l: ['Telecommunication','Healthcare','Banking & Finance','Social Community','E-Commerce','Online E-learning','Fitness & Wellness','Customer Support','AI Receptionist'] },
    { t: 'COMPARE', l: ['KineTalk vs Twilio','KineTalk vs Sendbird','KineTalk vs Agora','KineTalk vs Pubnub','KineTalk vs Rocketchat','KineTalk vs Vapi','Zoom Alternative'] },
  ]
  return (
    <footer style={{background:'#2A2A33'}} className="text-slate-300">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="text-sm font-bold text-white mb-4">ABOUT KINETALK</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              KineTalk is an AI-powered CPaaS provider offering customisable video, voice, chat, live streaming, SIP/VoIP and AI agent solutions for web &amp; mobile apps.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube, Twitter, Linkedin, Github].map((I,i)=>(
                <a key={i} href="#" className="h-9 w-9 rounded-lg border border-slate-700 grid place-items-center hover:bg-slate-800 hover:border-brand transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-white mb-3">KINETALK INC.</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                The Hive Workspaces, One Paramount Campus, Level 9, No. 110, Mount Road, San Francisco, CA – 94103, USA.
              </p>
            </div>
          </div>
          {cols.map(c=>(
            <div key={c.t}>
              <div className="text-sm font-bold text-white mb-5 tracking-wide">{c.t}</div>
              <ul className="space-y-3">
                {c.l.map(x=>(
                  <li key={x}><a href="#" className="text-sm text-slate-400 hover:text-white transition">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={LOGO} alt="" className="h-8 w-auto bg-white p-1 rounded" />
            <div className="flex gap-6 text-sm text-slate-400">
              {['About Company','Terms & Conditions','Privacy Policy','Refund Policy','Request Demo'].map(x=>(
                <a key={x} href="#" className="hover:text-white transition">{x}</a>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-slate-500">© KineTalk Inc, 2026. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

/* ---------------- MAIN APP ---------------- */
function App() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <TrustBar />
      <FeaturesGrid />
      <BuildManage />
      <DeployAnywhere />
      <Security />
      <AISection />
      <Industries />
      <Testimonials />
      <FAQ />
      <BigCTA />
      <Footer />
    </main>
  )
}

export default App
