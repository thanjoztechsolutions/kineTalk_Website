'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Video, MessageSquare, Radio, Users, Shield, Zap, Code2,
  Star, Check, ChevronDown, ArrowRight, Play, Menu, X, Server, Cloud,
  Lock, Database, Sparkles, Search, Languages, BarChart3, Mail, MapPin,
  HeartPulse, Landmark, GraduationCap, ShoppingBag, Building2, Plane,
  Gamepad2, Truck, Factory, Github, Twitter, Linkedin, Youtube, Instagram, Facebook,
  UploadCloud, PhoneCall, Share2, Globe2, Tag, Link as LinkIcon,
  MessageCircle, MousePointer2, FileText, Mic, Rocket, Headphones,
  TrendingUp, Layers, Bell, Eye, Smartphone, ChevronRight, Send, Loader2, CheckCircle2,
  Wifi, PhoneIncoming, PhoneForwarded, VideoIcon, Volume2, Reply, AtSign, Paperclip,
  Hash, Pin, Edit, Trash2, MessageCircleReply, ShieldCheck, Bookmark
} from 'lucide-react'

const LOGO = 'https://customer-assets.emergentagent.com/job_3a995167-d953-410f-b92f-092c76b1d210/artifacts/ohiyrn57_kinetalk-logo.png'

/* ==================== GLOBAL LEAD MODAL ==================== */
const LeadModalContext = { open: () => {}, close: () => {} }

function LeadModal({ state, close }) {
  const { open: isOpen, mode } = state
  const [form, setForm] = useState({ name:'', email:'', company:'', phone:'', country:'', useCase:'both', message:'' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  useEffect(() => {
    if (isOpen) {
      setStatus('idle'); setError('')
      setForm({ name:'', email:'', company:'', phone:'', country:'', useCase:'both', message:'' })
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading'); setError('')
    try {
      const GOOGLE_FORM_ID = '1FAIpQLSeayT81yUO3-sD15Y_oLUpPf4HWXmmfBq-ngjCAiW5sWYc-UQ'
      const useCaseLabel = form.useCase === 'chat' ? 'Chat SDK'
        : form.useCase === 'call' ? 'Call SDK (Voice + Video)'
        : 'Both Chat & Call SDK'
      const requestType = mode === 'sales' ? 'Sales Enquiry' : 'Demo Request'
      const messageWithType = `[${requestType}] ${form.message || '-'}`

      const params = new URLSearchParams()
      params.append('entry.1063697731', form.name)
      params.append('entry.922969103', form.email)
      params.append('entry.2018270150', form.company)
      params.append('entry.160267611', form.phone)
      params.append('entry.79650993', form.country)
      params.append('entry.537894214', useCaseLabel)
      params.append('entry.2032335774', messageWithType)

      await fetch(`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      // no-cors returns opaque response — we assume success if fetch didn't throw
      setStatus('success')
    } catch (err) {
      setStatus('error'); setError(err.message || 'Could not submit. Please try again.')
    }
  }

  const title = mode === 'sales' ? 'Talk to Sales' : 'Book a Live Demo'
  const subtitle = mode === 'sales' ? 'Get pricing, custom quotes and a walkthrough tailored to your team.' : 'A 30-minute product tour with a KineTalk solutions engineer.'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', damping: 22, stiffness: 240 }}
            className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-lavender-2 px-3 py-1 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">{mode === 'sales' ? 'Sales Enquiry' : 'Product Demo'}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
                </div>
                <button onClick={close} className="h-9 w-9 rounded-full grid place-items-center hover:bg-slate-100">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {status === 'success' ? (
                <div className="py-10 text-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 grid place-items-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900">You’re all set.</h4>
                  <p className="text-slate-600 mt-2 max-w-sm mx-auto">Thanks {form.name.split(' ')[0]}! Our team will reach out to <span className="font-semibold">{form.email}</span> within one business day.</p>
                  <button onClick={close} className="mt-6 btn-blue h-11 px-6 rounded-lg text-sm font-semibold">Close</button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Full name*" value={form.name} onChange={v => setForm({...form, name:v})} placeholder="Ada Lovelace" required />
                    <Field label="Work email*" type="email" value={form.email} onChange={v => setForm({...form, email:v})} placeholder="you@company.com" required />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Company*" value={form.company} onChange={v => setForm({...form, company:v})} placeholder="Acme Inc." required />
                    <Field label="Phone" value={form.phone} onChange={v => setForm({...form, phone:v})} placeholder="+1 555 123 4567" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Country" value={form.country} onChange={v => setForm({...form, country:v})} placeholder="India" />
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">I’m interested in</label>
                      <select value={form.useCase} onChange={e => setForm({...form, useCase: e.target.value})} className="w-full h-11 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:border-brand focus:ring-2 focus:ring-blue-100 outline-none">
                        <option value="chat">Chat SDK</option>
                        <option value="call">Call SDK (Voice + Video)</option>
                        <option value="both">Both Chat &amp; Call SDK</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tell us about your use case</label>
                    <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="What are you building?" className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:border-brand focus:ring-2 focus:ring-blue-100 outline-none resize-none" />
                  </div>
                  {error && <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg p-2">{error}</div>}
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" disabled={status==='loading'} className="btn-red-solid inline-flex items-center h-11 px-6 rounded-lg text-sm font-semibold disabled:opacity-60">
                      {status === 'loading' ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending…</> : <>{mode==='sales'?'Send Enquiry':'Book Demo'} <Send className="ml-2 h-4 w-4" /></>}
                    </button>
                    <button type="button" onClick={close} className="text-sm text-slate-600 hover:text-slate-900 px-3">Cancel</button>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">By submitting, you agree to be contacted by KineTalk about products and services. We respect your inbox.</p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, value, onChange, placeholder, type='text', required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">{label}</label>
      <input type={type} required={required} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
        className="w-full h-11 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-blue-100 outline-none" />
    </div>
  )
}

/* ==================== NAVIGATION with MEGA-MENUS ==================== */
function Nav({ openLead }) {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menus = {
    Products: {
      cols: [
        {
          title: 'CHAT SDK',
          items: [
            { i: MessageSquare, t: 'In-App Chat', d: 'Realtime 1:1 &amp; group messaging for web and mobile apps.' },
            { i: Hash, t: 'Channels &amp; Threads', d: 'Public and private channels with threaded replies.' },
            { i: Bell, t: 'Push Notifications', d: 'Rich, deliverable notifications across iOS and Android.' },
            { i: Paperclip, t: 'Media &amp; File Sharing', d: 'Send images, videos, files up to 100MB per message.' },
          ],
        },
        {
          title: 'CALL SDK',
          items: [
            { i: Phone, t: 'Voice Calls', d: 'HD 1:1 and group voice calling via WebRTC.' },
            { i: Video, t: 'Video Calls', d: 'Up to 1000 participants with adaptive bitrate.' },
            { i: Share2, t: 'Screen Sharing', d: 'Share screen with annotations and low-latency delivery.' },
            { i: PhoneForwarded, t: 'SIP &amp; VoIP', d: 'Bridge to PSTN, SIP trunks and legacy voice infrastructure.' },
          ],
        },
      ],
    },
    'Enterprise IM': {
      cols: [
        {
          title: 'ENTERPRISE MESSAGING',
          items: [
            { i: Users, t: 'Team Collaboration', d: 'Slack-style workspace with channels, DMs and huddles.' },
            { i: ShieldCheck, t: 'Compliance &amp; Audit', d: 'Retention, legal hold, eDiscovery and SSO/SCIM.' },
            { i: Server, t: 'Self-Hosted Option', d: 'Deploy on your infra with Kubernetes and BYOK.' },
            { i: Lock, t: 'End-to-End Encryption', d: 'AES-256, TLS 1.3 and optional BYO key vault.' },
          ],
        },
      ],
    },
    Solutions: {
      cols: [
        {
          title: 'BY INDUSTRY',
          items: [
            { i: HeartPulse, t: 'Healthcare', d: 'Telemedicine, patient chat and secure care coordination.' },
            { i: Landmark, t: 'Banking &amp; Finance', d: 'KYC video, secure banking chat and fraud reduction.' },
            { i: GraduationCap, t: 'Education', d: 'Live classes, tutoring and cohort communities.' },
            { i: ShoppingBag, t: 'E-Commerce', d: 'Live shopping, seller chat and post-sale support.' },
          ],
        },
        {
          title: 'BY USE CASE',
          items: [
            { i: Headphones, t: 'Customer Support', d: 'Route conversations across chat, voice and video.' },
            { i: Building2, t: 'Enterprise Comms', d: 'Secure internal chat and calling for teams.' },
            { i: Gamepad2, t: 'Gaming &amp; Social', d: 'Voice rooms, guild chat and community moderation.' },
            { i: Truck, t: 'Logistics &amp; Dispatch', d: 'Driver chat, POD photos and status calls.' },
          ],
        },
      ],
    },
    Developers: {
      cols: [
        {
          title: 'SDK PLATFORMS',
          items: [
            { i: Smartphone, t: 'iOS · Swift', d: 'Native iOS SDK with SwiftUI and UIKit adapters.' },
            { i: Smartphone, t: 'Android · Kotlin', d: 'Jetpack Compose ready SDK for Android.' },
            { i: Code2, t: 'Flutter', d: 'Cross-platform Flutter plugin with widgets.' },
            { i: Code2, t: 'React Native', d: 'Turbo-module RN SDK for iOS and Android.' },
          ],
        },
        {
          title: 'WEB &amp; BACKEND',
          items: [
            { i: Code2, t: 'JavaScript / React', d: 'Framework-agnostic JS SDK with React hooks.' },
            { i: Code2, t: 'Angular / Vue', d: 'First-class integrations for major web frameworks.' },
            { i: FileText, t: 'REST &amp; WebSocket APIs', d: 'Language-agnostic HTTP API + realtime WS.' },
            { i: FileText, t: 'Documentation', d: 'Guides, references and copy-paste code samples.' },
          ],
        },
      ],
    },
    Features: {
      cols: [
        {
          title: 'CHAT FEATURES',
          items: [
            { i: MessageCircle, t: 'Typing &amp; Read Receipts', d: 'Live indicators, delivery and read states.' },
            { i: Reply, t: 'Reactions &amp; Threads', d: 'Emoji reactions, quote replies, threaded messages.' },
            { i: AtSign, t: 'Mentions &amp; Presence', d: '@mentions, custom status and online presence.' },
            { i: Search, t: 'Message Search', d: 'Full-text search across message history.' },
          ],
        },
        {
          title: 'CALL FEATURES',
          items: [
            { i: Volume2, t: 'Noise Suppression', d: 'Studio-grade audio with echo cancellation.' },
            { i: VideoIcon, t: 'Recording &amp; Playback', d: 'Cloud recording, transcripts and replay.' },
            { i: Wifi, t: 'Bandwidth Adaptation', d: 'Dynamic bitrate for spotty networks.' },
            { i: PhoneIncoming, t: 'Call Queuing', d: 'IVR, hold music, transfer and callback.' },
          ],
        },
      ],
    },
  }

  const keys = Object.keys(menus)

  return (
    <header
      onMouseLeave={() => setHovered(null)}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled || hovered ? 'bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)]' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center gap-2"><img src={LOGO} alt="KineTalk" className="h-16 md:h-20 w-auto" /></a>
          <nav className="hidden lg:flex items-center gap-1">
            {keys.map(k => (
              <button
                key={k}
                onMouseEnter={() => setHovered(k)}
                className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition ${hovered===k?'text-brand':'text-slate-700 hover:text-brand'}`}
              >
                {k} <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition ${hovered===k?'rotate-180':''}`} />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={()=>openLead('sales')} className="btn-red-outline hidden md:inline-flex items-center h-11 px-5 rounded-lg text-sm font-semibold">Contact Sales</button>
            <button onClick={()=>openLead('demo')} className="btn-red-solid inline-flex items-center h-11 px-5 rounded-lg text-sm font-semibold">Request Demo</button>
            <button onClick={()=>setMobile(!mobile)} className="lg:hidden p-2 text-slate-700">
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MEGA MENU PANEL */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            onMouseEnter={()=>setHovered(hovered)}
            className="absolute inset-x-0 top-full bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-8">
              <div className={`grid gap-8 ${menus[hovered].cols.length === 1 ? 'md:grid-cols-1 max-w-3xl' : 'md:grid-cols-2'}`}>
                {menus[hovered].cols.map(col => (
                  <div key={col.title}>
                    <div className="text-xs font-bold tracking-wider text-brand mb-4">{col.title}</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {col.items.map(it => (
                        <a key={it.t} href="#" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-lavender transition">
                          <div className="h-10 w-10 rounded-lg bg-icon-chip grid place-items-center shrink-0 group-hover:bg-brand transition">
                            <it.i className="h-5 w-5 text-brand group-hover:text-white transition" strokeWidth={1.75} />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm" dangerouslySetInnerHTML={{__html: it.t}} />
                            <div className="text-xs text-slate-500 mt-0.5" dangerouslySetInnerHTML={{__html: it.d}} />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobile && (
          <motion.div initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} className="lg:hidden overflow-hidden border-t border-slate-100">
            <div className="p-4 space-y-1">
              {keys.map(k=>(
                <div key={k} className="px-4 py-3 rounded-lg text-slate-700 font-medium">{k}</div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ==================== HERO ==================== */
function Hero({ openLead }) {
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
              <span className="text-xs font-semibold text-brand">CHAT SDK · CALL SDK · FOR EVERY PLATFORM</span>
            </motion.div>
            <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="font-display text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight text-slate-900">
              Add <span className="text-brand">Chat &amp; Calls</span> To Any App In <span className="highlight-yellow">Days</span>, Not Months.
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.15}} className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              KineTalk gives developers battle-tested Chat and Call SDKs — messaging, voice and video that drop into your product with a few lines of code. Ship faster. Scale calmly.
            </motion.p>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.3}} className="mt-8 flex flex-wrap gap-3">
              <button onClick={()=>openLead('demo')} className="btn-red-solid inline-flex items-center h-12 px-7 rounded-lg text-base font-semibold">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></button>
              <button onClick={()=>openLead('sales')} className="btn-red-outline inline-flex items-center h-12 px-7 rounded-lg text-base font-semibold">Contact Sales</button>
              <a href="#features" className="inline-flex items-center h-12 px-6 rounded-lg text-base font-semibold text-brand hover:bg-lavender transition"><Play className="mr-2 h-4 w-4" /> See Features</a>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                <span className="text-sm font-semibold text-slate-900">4.6</span>
                <span className="text-xs text-slate-500">on G2</span>
              </div>
              <div className="text-sm text-slate-500">Trusted by <span className="font-semibold text-slate-900">2,400+ product teams</span></div>
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
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:0.7}} className="absolute left-2 top-4 w-[56%] card-soft rounded-3xl p-5 animate-float">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white font-bold text-sm">SA</div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Sara · Support</div>
            <div className="text-[11px] text-emerald-600 flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Typing…</div>
          </div>
          <div className="ml-auto flex gap-1.5">
            <div className="h-8 w-8 rounded-lg bg-lavender grid place-items-center"><Phone className="h-3.5 w-3.5 text-brand" /></div>
            <div className="h-8 w-8 rounded-lg bg-lavender grid place-items-center"><Video className="h-3.5 w-3.5 text-brand" /></div>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { me:false, t:'Hi Sara, my order #4821 didn’t arrive today.' },
            { me:true, t:'Sorry about that! Let me pull it up quickly.' },
            { me:false, t:'Thanks 🙏' },
            { me:true, t:'Sent a new dispatch. ETA tomorrow 10 AM. Sound good?' },
          ].map((m,i)=>(
            <motion.div key={i} initial={{opacity:0, x: m.me?20:-20}} animate={{opacity:1, x:0}} transition={{delay:0.6 + i*0.15}} className={`flex ${m.me?'justify-end':'justify-start'}`}>
              <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${m.me?'bg-brand text-white rounded-br-md':'bg-lavender text-slate-800 rounded-bl-md'}`}>{m.t}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

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

      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.8}} className="absolute right-4 bottom-8 w-[52%] card-soft rounded-3xl p-4 animate-float" style={{animationDelay:'2s'}}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Concurrent Users</div>
            <div className="font-display text-2xl font-bold text-slate-900">184,206</div>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold bg-emerald-50 px-2 py-1 rounded-md">
            <TrendingUp className="h-3 w-3" /> +18.2%
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

      <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:1}} className="absolute left-0 bottom-0 w-[42%] card-soft rounded-2xl p-3.5 animate-float" style={{animationDelay:'0.5s'}}>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="h-6 w-6 rounded-lg bg-icon-chip grid place-items-center"><Sparkles className="h-3.5 w-3.5 text-brand" /></div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-brand">99.99% Uptime</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">Edge presence in <span className="font-semibold text-slate-900">14 regions</span>. Sub-100ms message delivery worldwide.</p>
      </motion.div>
    </div>
  )
}

/* ==================== TRUST BAR ==================== */
function TrustBar() {
  const logos = ['Northwind','Vertex Bank','Helia Health','Orbital','Nova Labs','Meridian','Quantify','Loop','Sapien','Zeus Pay','Nimbus','Kinetic']
  return (
    <section className="py-12 border-y border-slate-100">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">Powering messaging &amp; calling for teams worldwide</p>
        <div className="relative overflow-hidden" style={{maskImage:'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}>
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l,i)=>(<div key={i} className="font-display text-2xl text-slate-400 hover:text-brand transition">{l}</div>))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==================== TWO PRODUCTS: CHAT SDK + CALL SDK ==================== */
function TwoProducts({ openLead }) {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Two SDKs. <span className="text-brand">Every Conversation</span> Your App Needs.
          </h2>
          <p className="mt-4 text-lg text-slate-600">Composable, well-documented and framework-agnostic. Drop them in — keep your architecture yours.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <ProductCard
            tag="CHAT SDK"
            title="Realtime Messaging Built To Scale"
            desc="1:1 &amp; group chat, channels, threads, presence, typing, receipts, media and moderation — one SDK, every platform."
            feats={['1:1 &amp; group messaging','Channels, threads, mentions','Presence &amp; typing indicators','Read &amp; delivery receipts','File &amp; media sharing (up to 100MB)','Push notifications (iOS &amp; Android)','Message reactions &amp; replies','Search, retention &amp; moderation']}
            gradient="from-blue-500 via-blue-600 to-indigo-700"
            icon={MessageSquare}
            openLead={openLead}
          />
          <ProductCard
            tag="CALL SDK"
            title="HD Voice &amp; Video In A Few Lines Of Code"
            desc="WebRTC-powered voice, video and screen share with adaptive networking, noise suppression and enterprise reliability."
            feats={['1:1 &amp; group voice calls','HD video (up to 1000 participants)','Screen sharing with annotations','Bandwidth adaptation','Noise suppression &amp; echo cancel','Cloud recording &amp; playback','SIP &amp; VoIP bridging','Call queuing, transfer &amp; IVR']}
            gradient="from-fuchsia-500 via-red-500 to-rose-600"
            icon={Phone}
            openLead={openLead}
          />
        </div>
      </div>
    </section>
  )
}

function ProductCard({ tag, title, desc, feats, gradient, icon:Icon, openLead }) {
  return (
    <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-60px'}} transition={{duration:0.5}} className="card-soft rounded-3xl overflow-hidden">
      <div className={`h-40 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 grid place-items-center"><Icon className="h-24 w-24 text-white/30" strokeWidth={1.2} /></div>
        <div className="absolute top-5 left-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-white text-xs font-bold tracking-wider">{tag}</div>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl font-bold text-slate-900" dangerouslySetInnerHTML={{__html: title}} />
        <p className="text-slate-600 mt-2 leading-relaxed" dangerouslySetInnerHTML={{__html: desc}} />
        <div className="mt-6 grid sm:grid-cols-2 gap-2">
          {feats.map(f=>(
            <div key={f} className="flex items-start gap-2 text-sm text-slate-700">
              <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <span dangerouslySetInnerHTML={{__html:f}} />
            </div>
          ))}
        </div>
        <div className="mt-7 flex gap-3">
          <button onClick={()=>openLead('demo')} className="btn-red-solid inline-flex items-center h-11 px-5 rounded-lg text-sm font-semibold">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></button>
          <button onClick={()=>openLead('sales')} className="btn-red-outline inline-flex items-center h-11 px-5 rounded-lg text-sm font-semibold">Talk to Sales</button>
        </div>
      </div>
    </motion.div>
  )
}

/* ==================== FEATURE GRID ==================== */
function FeaturesGrid() {
  const features = [
    { icon: Users, t: '1:1 &amp; Group Chat' },
    { icon: Hash, t: 'Channels &amp; Threads' },
    { icon: Bell, t: 'Push Notifications' },
    { icon: UploadCloud, t: 'Media &amp; File Sharing' },
    { icon: Reply, t: 'Reactions &amp; Replies' },
    { icon: AtSign, t: 'Mentions &amp; Presence' },
    { icon: Eye, t: 'Read &amp; Typing Indicators' },
    { icon: Search, t: 'Full-Text Message Search' },
    { icon: Edit, t: 'Edit, Delete &amp; Pin' },
    { icon: Languages, t: 'Multi-Language Support' },
    { icon: Tag, t: 'Custom Metadata &amp; Tags' },
    { icon: ShieldCheck, t: 'Chat Moderation' },
    { icon: Phone, t: 'HD Voice Calls' },
    { icon: Video, t: 'HD Video Calls' },
    { icon: Users, t: 'Group Calls (1000+)' },
    { icon: Share2, t: 'Screen Sharing' },
    { icon: VideoIcon, t: 'Cloud Recording' },
    { icon: PhoneIncoming, t: 'Call Queuing / IVR' },
    { icon: Volume2, t: 'Noise Suppression' },
    { icon: Wifi, t: 'Bandwidth Adaptation' },
    { icon: PhoneForwarded, t: 'SIP / VoIP Bridging' },
  ]
  return (
    <section id="features" className="bg-lavender py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            <span className="text-brand">80+ SDK Features</span> To Ship Any Chat Or Call Experience
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">Everything you need in one drop-in library. Fully customisable, docs-first, and battle-tested in production.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((f,i)=>(
            <motion.div key={f.t} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-40px'}} transition={{delay:(i%3)*0.05}}
              className="card-soft card-soft-hover rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="h-11 w-11 rounded-xl bg-icon-chip grid place-items-center shrink-0">
                <f.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              </div>
              <div className="font-semibold text-slate-900" dangerouslySetInnerHTML={{__html: f.t}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==================== DEPLOY ==================== */
function DeployAnywhere({ openLead }) {
  const cards = [
    { t: 'On-Premise', d: 'Deploy the entire messaging &amp; calling stack on your own bare-metal servers.', icon: Server },
    { t: 'Private Cloud', d: 'Run on an isolated cloud environment with dedicated VPC and BYOK.', icon: Cloud },
    { t: 'Colocation DC', d: 'Bring your own data center and let us handle the operational runbooks.', icon: Database },
    { t: 'Hybrid Cloud', d: 'Split workloads across your infra and ours — signaling here, media there.', icon: Lock },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Deploy Anywhere, <span className="text-brand">On Any Server</span></h2>
          <p className="mt-4 text-lg text-slate-600">Cloud, self-hosted or hybrid — your data, your rules. Keep sovereignty without sacrificing developer velocity.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {cards.map((c,i)=>(
            <motion.div key={c.t} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="bg-lavender rounded-3xl p-8 text-center hover:bg-lavender-2 transition">
              <div className="h-24 w-24 mx-auto rounded-2xl bg-white grid place-items-center mb-5 shadow-sm"><c.icon className="h-11 w-11 text-brand" strokeWidth={1.5} /></div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{c.t}</h3>
              <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{__html:c.d}} />
            </motion.div>
          ))}
        </div>
        <div className="mt-14 flex items-center justify-center gap-4 flex-wrap">
          <p className="text-slate-700">Need a self-hosted deployment for your team?</p>
          <button onClick={()=>openLead('sales')} className="inline-flex items-center gap-2 h-11 px-5 rounded-full border-2 border-brand text-brand font-semibold text-sm hover:bg-brand hover:text-white transition">Get a Custom Quote <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  )
}

/* ==================== SECURITY ==================== */
function Security({ openLead }) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Enterprise <span className="text-brand">Security</span> &amp; <span className="text-brand">Privacy</span> Baked In From Day One
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">Every message and every call is end-to-end encrypted. Compliance-first architecture, regional data residency and a dedicated security team — so your users’ conversations stay private, always.</p>
            <ul className="mt-8 space-y-3">
              {['End-to-end encryption · TLS 1.3 · AES-256','SOC 2 Type II · HIPAA · GDPR compliant','ISO 27001 · PCI-DSS aligned infrastructure','Regional data residency across 14 regions','Bring your own encryption key (BYOK)','24/7 security operations &amp; incident response'].map(x=>(
                <li key={x} className="flex items-start gap-3 text-slate-700">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 grid place-items-center shrink-0 mt-0.5"><Check className="h-3.5 w-3.5 text-emerald-600" /></div>
                  <span dangerouslySetInnerHTML={{__html:x}} />
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <button onClick={()=>openLead('demo')} className="btn-red-solid inline-flex items-center h-11 px-6 rounded-lg text-sm font-semibold">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></button>
              <button onClick={()=>openLead('sales')} className="btn-red-outline inline-flex items-center h-11 px-6 rounded-lg text-sm font-semibold">Talk to Security</button>
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
                <div key={b.t} className="absolute card-soft rounded-full px-3 py-1.5 text-xs font-semibold text-brand animate-float" style={{left:b.x, top:b.y}}>{b.t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==================== SDK PLATFORMS ==================== */
function Platforms() {
  const platforms = [
    { t: 'iOS · Swift', d: 'Native SwiftUI &amp; UIKit adapters.', c: 'from-slate-800 to-slate-950' },
    { t: 'Android · Kotlin', d: 'Jetpack Compose ready.', c: 'from-emerald-600 to-teal-700' },
    { t: 'Flutter', d: 'Cross-platform plugin.', c: 'from-sky-500 to-cyan-600' },
    { t: 'React Native', d: 'Turbo module SDK.', c: 'from-cyan-500 to-blue-600' },
    { t: 'JavaScript', d: 'Framework-agnostic core.', c: 'from-yellow-400 to-amber-500' },
    { t: 'React', d: 'Hooks &amp; components.', c: 'from-blue-500 to-indigo-600' },
    { t: 'Angular', d: 'Injectable services &amp; RxJS.', c: 'from-red-500 to-rose-600' },
    { t: 'Vue', d: 'Composables &amp; SFCs.', c: 'from-emerald-500 to-green-600' },
    { t: 'Node.js', d: 'Server SDK &amp; webhooks.', c: 'from-lime-600 to-emerald-700' },
    { t: 'REST API', d: 'Language-agnostic HTTP API.', c: 'from-purple-500 to-fuchsia-600' },
  ]
  return (
    <section id="developers" className="py-24 bg-lavender">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">First-Class SDKs For <span className="text-brand">Every Stack</span></h2>
          <p className="mt-4 text-lg text-slate-600">Native performance, tiny footprint and copy-paste examples for every framework.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {platforms.map((p,i)=>(
            <motion.div key={p.t} initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:(i%5)*0.05}}
              className="card-soft card-soft-hover rounded-2xl p-5 text-center bg-white">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${p.c} mx-auto grid place-items-center mb-3 shadow-md`}>
                <Code2 className="h-6 w-6 text-white" strokeWidth={1.75} />
              </div>
              <div className="font-semibold text-slate-900 text-sm" dangerouslySetInnerHTML={{__html:p.t}} />
              <div className="text-xs text-slate-500 mt-1" dangerouslySetInnerHTML={{__html:p.d}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==================== CODE SAMPLE ==================== */
function CodeSample() {
  const snippets = {
    JavaScript: `import { KineTalk } from '@kinetalk/js'

const kt = new KineTalk({ appId: 'YOUR_APP_ID' })

// Connect the user
await kt.connect({ userId: 'u_483', token })

// Send a message
await kt.channel('support').send({
  text: 'Hey team, my order didn\u2019t arrive.',
})

// Start a video call
const call = await kt.calls.create({
  type: 'video',
  participants: ['u_483', 'agent_sara'],
})`,
    React: `import { useChannel, useCall } from '@kinetalk/react'

export default function Support() {
  const { messages, send } = useChannel('support')
  const { start } = useCall({ type: 'video' })

  return (
    <>
      <ChatUI messages={messages} onSend={send} />
      <button onClick={start}>Call agent</button>
    </>
  )
}`,
    Swift: `import KineTalk

let kt = KineTalk(appId: "YOUR_APP_ID")
try await kt.connect(userId: "u_483", token: token)

try await kt.channel("support").send(text: "Order missing")

let call = try await kt.calls.create(.video, with: ["agent_sara"])`,
    Kotlin: `val kt = KineTalk(appId = "YOUR_APP_ID")
kt.connect(userId = "u_483", token = token)

kt.channel("support").send("Order missing")

val call = kt.calls.create(type = CallType.VIDEO,
  participants = listOf("agent_sara"))`,
    Flutter: `final kt = KineTalk(appId: 'YOUR_APP_ID');
await kt.connect(userId: 'u_483', token: token);

await kt.channel('support').send('Order missing');

final call = await kt.calls.create(
  type: CallType.video,
  participants: ['agent_sara'],
);`,
  }
  const [tab, setTab] = useState('JavaScript')
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">Integrate In <span className="text-brand">Minutes</span>, Not Weeks</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">A clean, typed SDK across every language. Copy the snippet, paste it in and ship. No proprietary lock-in — our REST and WebSocket APIs are always yours.</p>
            <ul className="mt-6 space-y-2">
              {['Typed SDKs (TypeScript, Kotlin, Swift)','Rich error handling &amp; retries','Automatic reconnection &amp; offline queue','Framework-idiomatic APIs'].map(x=>(
                <li key={x} className="flex items-start gap-3 text-slate-700"><Check className="h-4 w-4 mt-1 text-brand shrink-0"/><span dangerouslySetInnerHTML={{__html:x}} /></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400"/>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"/>
                  <div className="h-3 w-3 rounded-full bg-green-400"/>
                </div>
                <div className="text-xs text-slate-400 font-mono">kinetalk.sdk</div>
                <div className="w-12" />
              </div>
              <div className="flex gap-1 px-2 py-2 bg-slate-800 flex-wrap">
                {Object.keys(snippets).map(k=>(
                  <button key={k} onClick={()=>setTab(k)} className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${tab===k?'bg-slate-700 text-white':'text-slate-400 hover:text-white'}`}>{k}</button>
                ))}
              </div>
              <pre className="bg-slate-950 text-slate-100 text-[13px] leading-relaxed p-6 overflow-x-auto max-h-[420px]"><code className="font-mono">{snippets[tab]}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==================== INDUSTRIES ==================== */
function Industries() {
  const items = [
    { i: HeartPulse, t: 'Healthcare' }, { i: Landmark, t: 'FinTech &amp; Banking' },
    { i: GraduationCap, t: 'Education' }, { i: ShoppingBag, t: 'E-Commerce' },
    { i: Building2, t: 'Enterprise IT' }, { i: Plane, t: 'Travel &amp; Hospitality' },
    { i: Gamepad2, t: 'Gaming &amp; Social' }, { i: Truck, t: 'Logistics' },
    { i: Factory, t: 'Manufacturing' }, { i: Rocket, t: 'Startups' },
  ]
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Built For <span className="text-brand">Every Industry</span></h2>
          <p className="mt-4 text-lg text-slate-600">From telehealth to gaming — KineTalk’s SDKs power millions of conversations every day.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {items.map((x,i)=>(
            <motion.div key={x.t} initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:(i%5)*0.05}} className="card-soft card-soft-hover rounded-2xl p-5 text-center">
              <div className="h-14 w-14 rounded-2xl bg-icon-chip mx-auto grid place-items-center mb-3"><x.i className="h-6 w-6 text-brand" strokeWidth={1.5} /></div>
              <div className="font-semibold text-slate-900 text-sm" dangerouslySetInnerHTML={{__html:x.t}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==================== TESTIMONIALS ==================== */
function Testimonials() {
  const items = [
    { q: 'We swapped our in-house chat for KineTalk and went live in a fortnight. Message delivery is faster and support is superb.', a: 'Priya S.', r: 'VP Engineering · Vertex Bank' },
    { q: 'Voice quality on rural networks is genuinely the best we’ve tested. The Call SDK just works, everywhere.', a: 'Marco D.', r: 'CTO · Helia Health' },
    { q: 'Docs are excellent, TypeScript types are pristine, and the support engineers actually understand our code.', a: 'Nia W.', r: 'Head of Product · Northwind' },
  ]
  return (
    <section className="py-24 bg-lavender">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Loved By The Teams <span className="text-brand">That Ship</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {items.map((t,i)=>(
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="card-soft card-soft-hover rounded-3xl p-7">
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

/* ==================== FAQ ==================== */
function FAQ() {
  const [open, setOpen] = useState(0)
  const faqs = [
    { q: 'What does KineTalk offer?', a: 'KineTalk provides two developer-first SDKs: a Chat SDK for realtime messaging and a Call SDK for voice &amp; video. Together they let you add complete in-app conversations to any web or mobile product.' },
    { q: 'Which platforms are supported?', a: 'iOS (Swift), Android (Kotlin), Flutter, React Native, JavaScript, React, Angular, Vue and Node.js. We also expose language-agnostic REST and WebSocket APIs.' },
    { q: 'Is the SDK self-hostable?', a: 'Yes. You can run KineTalk on your own infrastructure (Kubernetes, VMs or bare metal) with the exact same SDK. Cloud, self-hosted and hybrid are all first-class.' },
    { q: 'How is pricing calculated?', a: 'Predictable usage-based pricing per Monthly Active User for chat and per minute for calls. Committed Enterprise plans include volume discounts and SLAs. Contact sales for a custom quote.' },
    { q: 'Is the platform secure &amp; compliant?', a: 'Yes. SOC 2 Type II, HIPAA, GDPR and ISO 27001 aligned. Every message and call is end-to-end encrypted with AES-256 and TLS 1.3.' },
    { q: 'How long does integration take?', a: 'Most teams ship a working chat or call prototype within a day. Full production rollouts typically take 1–4 weeks depending on scope.' },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900"><span className="text-brand">Questions</span> Developers Ask Us Most</h2>
          <p className="mt-3 text-slate-600">Short, honest answers about how KineTalk fits your stack.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f,i)=>(
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:(i%2)*0.08}} className="card-soft rounded-2xl overflow-hidden">
              <button onClick={()=>setOpen(open===i?-1:i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold text-slate-900" dangerouslySetInnerHTML={{__html:f.q}} />
                <span className={`h-8 w-8 rounded-full border border-slate-200 grid place-items-center transition ${open===i?'bg-brand border-brand':''}`}>
                  <ChevronDown className={`h-4 w-4 transition ${open===i?'rotate-180 text-white':'text-slate-500'}`} />
                </span>
              </button>
              <AnimatePresence>
                {open===i && (
                  <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}}>
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4" dangerouslySetInnerHTML={{__html:f.a}} />
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

/* ==================== BIG CTA ==================== */
function BigCTA({ openLead }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="relative rounded-[2rem] overflow-hidden" style={{background:'linear-gradient(135deg, #1E40FF 0%, #2E4EF7 50%, #3B5BFF 100%)'}}>
          <div className="absolute inset-0 grid-lines opacity-20" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative p-10 md:p-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>)}</div>
              <span className="text-white font-bold">4.6</span>
              <span className="text-white/80 text-sm">Rated by developer teams worldwide</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Ship Your Own 100% <span className="highlight-yellow">Customizable</span><br/>
              Chat, Voice &amp; Video <span className="highlight-yellow">Experience</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button onClick={()=>openLead('demo')} className="btn-red-solid inline-flex items-center h-12 px-8 rounded-lg text-base font-semibold">Request Demo <ArrowRight className="ml-2 h-4 w-4"/></button>
              <button onClick={()=>openLead('sales')} className="inline-flex items-center h-12 px-8 rounded-lg text-base font-semibold bg-white text-brand hover:bg-slate-100 transition">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==================== FOOTER ==================== */
function Footer() {
  const cols = [
    { t: 'PRODUCTS', l: ['Chat SDK','Call SDK','SIP &amp; VoIP','Live Streaming','Enterprise IM','On-Premise Deployment','Multi-Tenant Server'] },
    { t: 'DEVELOPERS', l: ['Documentation','API Reference','iOS SDK','Android SDK','Flutter','React Native','JavaScript / React','Angular / Vue','Status Page','Changelog'] },
    { t: 'SOLUTIONS', l: ['Healthcare','FinTech &amp; Banking','Education','E-Commerce','Enterprise Comms','Gaming &amp; Social','Logistics','Customer Support'] },
    { t: 'COMPANY', l: ['About KineTalk','Careers','Partners','Blog','Press Kit','Contact','Terms of Service','Privacy Policy','Refund Policy'] },
  ]
  return (
    <footer style={{background:'#2A2A33'}} className="text-slate-300">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <img src={LOGO} alt="KineTalk" className="h-14 w-auto bg-white p-1.5 rounded-lg" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              KineTalk provides developer-first Chat and Call SDKs that drop into any web or mobile app. Ship messaging, voice and video in days — keep full control of your data.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Youtube, Twitter, Linkedin, Github].map((I,i)=>(
                <a key={i} href="#" className="h-9 w-9 rounded-lg border border-slate-700 grid place-items-center hover:bg-slate-800 hover:border-brand transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-white mb-3">A PRODUCT OF THANJO TECH</div>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-start gap-2"><Building2 className="h-4 w-4 mt-0.5 shrink-0"/> Thanjo Tech Private Limited</div>
                <a href="mailto:info@thanjoztech.com" className="flex items-start gap-2 hover:text-white transition"><Mail className="h-4 w-4 mt-0.5 shrink-0"/> info@thanjoztech.com</a>
                <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0"/> Global HQ · Serving 190+ countries</div>
              </div>
            </div>
          </div>
          {cols.map(c=>(
            <div key={c.t}>
              <div className="text-sm font-bold text-white mb-5 tracking-wide">{c.t}</div>
              <ul className="space-y-3">
                {c.l.map(x=>(<li key={x}><a href="#" className="text-sm text-slate-400 hover:text-white transition" dangerouslySetInnerHTML={{__html:x}} /></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              © 2026 <span className="text-slate-300 font-semibold">Thanjo Tech Pvt Ltd</span>. All Rights Reserved. KineTalk™ is a trademark of Thanjo Tech.
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              {['Terms','Privacy','Security','Refund','Contact'].map(x=>(<a key={x} href="#" className="hover:text-white transition">{x}</a>))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ==================== MAIN APP ==================== */
function App() {
  const [leadState, setLeadState] = useState({ open:false, mode:'demo' })
  const openLead = (mode='demo') => setLeadState({ open:true, mode })
  const closeLead = () => setLeadState(s => ({ ...s, open:false }))

  return (
    <main className="min-h-screen bg-white">
      <Nav openLead={openLead} />
      <Hero openLead={openLead} />
      <TrustBar />
      <TwoProducts openLead={openLead} />
      <FeaturesGrid />
      <Platforms />
      <CodeSample />
      <DeployAnywhere openLead={openLead} />
      <Security openLead={openLead} />
      <Industries />
      <Testimonials />
      <FAQ />
      <BigCTA openLead={openLead} />
      <Footer />
      <LeadModal state={leadState} close={closeLead} />
    </main>
  )
}

export default App
