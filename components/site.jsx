'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Phone, Video, MessageSquare, Users, Code2, ArrowRight, Menu, X,
  ChevronDown, Send, Loader2, CheckCircle2, Mail, Building2, MapPin,
  Github, Twitter, Linkedin, Youtube, Instagram, Facebook,
  Search, Volume2, Wifi, PhoneIncoming, MessageCircle, Reply, AtSign,
  HeartPulse, Landmark, GraduationCap, ShoppingBag, Gamepad2, Truck, Headphones,
  Server, Cloud, Lock, Smartphone, FileText, ShieldCheck, Bell, Paperclip,
  Hash, PhoneForwarded, Share2, Video as VideoIcon
} from 'lucide-react'
import { FEATURES, FEATURE_MENU } from '@/lib/features-data'

const LOGO = 'https://customer-assets.emergentagent.com/job_3a995167-d953-410f-b92f-092c76b1d210/artifacts/ohiyrn57_kinetalk-logo.png'

export function useLead() {
  const [state, setState] = useState({ open: false, mode: 'demo' })
  const open = (mode = 'demo') => setState({ open: true, mode })
  const close = () => setState(s => ({ ...s, open: false }))
  return { state, open, close }
}

export function LeadModal({ state, close }) {
  const { open: isOpen, mode } = state
  const [form, setForm] = useState({ name:'', email:'', company:'', phone:'', country:'', useCase:'both', message:'' })
  const [status, setStatus] = useState('idle')
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
      const useCaseLabel = form.useCase === 'chat' ? 'Chat SDK' : form.useCase === 'call' ? 'Call SDK (Voice + Video)' : 'Both Chat & Call SDK'
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
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={close} />
          <motion.div initial={{opacity:0, y:30, scale:0.96}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:30, scale:0.96}} transition={{type:'spring', damping:22, stiffness:240}}
            className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-lavender-2 px-3 py-1 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">{mode==='sales'?'Sales Enquiry':'Product Demo'}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
                </div>
                <button onClick={close} className="h-9 w-9 rounded-full grid place-items-center hover:bg-slate-100"><X className="h-4 w-4" /></button>
              </div>

              {status === 'success' ? (
                <div className="py-10 text-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 grid place-items-center mx-auto mb-4"><CheckCircle2 className="h-8 w-8 text-emerald-500" /></div>
                  <h4 className="font-display text-xl font-bold text-slate-900">You're all set.</h4>
                  <p className="text-slate-600 mt-2 max-w-sm mx-auto">Thanks {form.name.split(' ')[0]}! Our team will reach out to <span className="font-semibold">{form.email}</span> within one business day.</p>
                  <button onClick={close} className="mt-6 btn-blue h-11 px-6 rounded-lg text-sm font-semibold">Close</button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Full name*" value={form.name} onChange={v=>setForm({...form, name:v})} placeholder="Ada Lovelace" required />
                    <Field label="Work email*" type="email" value={form.email} onChange={v=>setForm({...form, email:v})} placeholder="you@company.com" required />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Company*" value={form.company} onChange={v=>setForm({...form, company:v})} placeholder="Acme Inc." required />
                    <Field label="Phone" value={form.phone} onChange={v=>setForm({...form, phone:v})} placeholder="+1 555 123 4567" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Country" value={form.country} onChange={v=>setForm({...form, country:v})} placeholder="India" />
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">I'm interested in</label>
                      <select value={form.useCase} onChange={e=>setForm({...form, useCase:e.target.value})} className="w-full h-11 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:border-brand focus:ring-2 focus:ring-blue-100 outline-none">
                        <option value="chat">Chat SDK</option>
                        <option value="call">Call SDK (Voice + Video)</option>
                        <option value="both">Both Chat &amp; Call SDK</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tell us about your use case</label>
                    <textarea rows={3} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="What are you building?" className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:border-brand focus:ring-2 focus:ring-blue-100 outline-none resize-none" />
                  </div>
                  {error && <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg p-2">{error}</div>}
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" disabled={status==='loading'} className="btn-red-solid inline-flex items-center h-11 px-6 rounded-lg text-sm font-semibold disabled:opacity-60">
                      {status==='loading' ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending…</> : <>{mode==='sales'?'Send Enquiry':'Book Demo'} <Send className="ml-2 h-4 w-4" /></>}
                    </button>
                    <button type="button" onClick={close} className="text-sm text-slate-600 hover:text-slate-900 px-3">Cancel</button>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">By submitting, you agree to be contacted by KineTalk about products and services.</p>
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

export function Nav({ openLead }) {
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
        { title: 'CHAT SDK', items: [
          { i: MessageSquare, t: 'In-App Chat', d: 'Realtime 1:1 & group messaging.', href: '/#products' },
          { i: Hash, t: 'Channels & Threads', d: 'Public and private channels.', href: '/#products' },
          { i: Bell, t: 'Push Notifications', d: 'Rich, deliverable notifications.', href: '/#products' },
          { i: Paperclip, t: 'Media & File Sharing', d: 'Images, videos, files up to 100MB.', href: '/#products' },
        ]},
        { title: 'CALL SDK', items: [
          { i: Phone, t: 'Voice Calls', d: 'HD 1:1 and group voice calling.', href: '/#products' },
          { i: Video, t: 'Video Calls', d: 'Up to 1000 participants.', href: '/#products' },
          { i: Share2, t: 'Screen Sharing', d: 'Share screen with annotations.', href: '/#products' },
          { i: PhoneForwarded, t: 'SIP & VoIP', d: 'Bridge to PSTN and SIP trunks.', href: '/#products' },
        ]},
      ],
    },
    'Enterprise IM': {
      cols: [{ title: 'ENTERPRISE MESSAGING', items: [
        { i: Users, t: 'Team Collaboration', d: 'Slack-style workspace with huddles.', href: '/#products' },
        { i: ShieldCheck, t: 'Compliance & Audit', d: 'Retention, eDiscovery, SSO/SCIM.', href: '/#products' },
        { i: Server, t: 'Self-Hosted Option', d: 'Kubernetes-native deployment.', href: '/#products' },
        { i: Lock, t: 'End-to-End Encryption', d: 'AES-256 with optional BYOK.', href: '/#products' },
      ]}],
    },
    Solutions: {
      cols: [
        { title: 'BY INDUSTRY', items: [
          { i: HeartPulse, t: 'Healthcare', d: 'Telemedicine and patient chat.', href: '/#solutions' },
          { i: Landmark, t: 'Banking & Finance', d: 'KYC video and secure chat.', href: '/#solutions' },
          { i: GraduationCap, t: 'Education', d: 'Live classes and communities.', href: '/#solutions' },
          { i: ShoppingBag, t: 'E-Commerce', d: 'Live shopping and seller chat.', href: '/#solutions' },
        ]},
        { title: 'BY USE CASE', items: [
          { i: Headphones, t: 'Customer Support', d: 'Omnichannel support workflows.', href: '/#solutions' },
          { i: Building2, t: 'Enterprise Comms', d: 'Secure internal chat and calls.', href: '/#solutions' },
          { i: Gamepad2, t: 'Gaming & Social', d: 'Voice rooms and guild chat.', href: '/#solutions' },
          { i: Truck, t: 'Logistics & Dispatch', d: 'Driver chat and status calls.', href: '/#solutions' },
        ]},
      ],
    },
    Developers: {
      cols: [
        { title: 'SDK PLATFORMS', items: [
          { i: Smartphone, t: 'iOS · Swift', d: 'Native SwiftUI and UIKit SDK.', href: '/#developers' },
          { i: Smartphone, t: 'Android · Kotlin', d: 'Jetpack Compose ready.', href: '/#developers' },
          { i: Code2, t: 'Flutter', d: 'Cross-platform plugin.', href: '/#developers' },
          { i: Code2, t: 'React Native', d: 'Turbo-module SDK.', href: '/#developers' },
        ]},
        { title: 'WEB & BACKEND', items: [
          { i: Code2, t: 'JavaScript / React', d: 'Framework-agnostic core.', href: '/#developers' },
          { i: Code2, t: 'Angular / Vue', d: 'First-class integrations.', href: '/#developers' },
          { i: FileText, t: 'REST & WebSocket APIs', d: 'Language-agnostic HTTP + WS.', href: '/#developers' },
          { i: FileText, t: 'Documentation', d: 'Guides and code samples.', href: '/#developers' },
        ]},
      ],
    },
    Features: {
      cols: FEATURE_MENU.map(col => ({
        title: col.title,
        items: col.slugs.map(slug => {
          const f = FEATURES[slug]
          return { i: f.icon, t: f.title, d: f.subtitle.slice(0, 62) + '…', href: `/features/${slug}` }
        }),
      })),
    },
  }

  const keys = Object.keys(menus)

  return (
    <header onMouseLeave={()=>setHovered(null)} className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled||hovered ? 'bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)]' : 'bg-white'}`}>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-2"><img src={LOGO} alt="KineTalk" className="h-16 md:h-20 w-auto" /></Link>
          <nav className="hidden lg:flex items-center gap-1">
            {keys.map(k => (
              <button key={k} onMouseEnter={()=>setHovered(k)} className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition ${hovered===k?'text-brand':'text-slate-700 hover:text-brand'}`}>
                {k} <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition ${hovered===k?'rotate-180':''}`} />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={()=>openLead('sales')} className="btn-red-outline hidden md:inline-flex items-center h-11 px-5 rounded-lg text-sm font-semibold">Contact Sales</button>
            <button onClick={()=>openLead('demo')} className="btn-red-solid inline-flex items-center h-11 px-5 rounded-lg text-sm font-semibold">Request Demo</button>
            <button onClick={()=>setMobile(!mobile)} className="lg:hidden p-2 text-slate-700">{mobile?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{opacity:0, y:-6}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-6}} transition={{duration:0.15}}
            onMouseEnter={()=>setHovered(hovered)} className="absolute inset-x-0 top-full bg-white border-t border-slate-100 shadow-xl">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-8">
              <div className={`grid gap-8 ${menus[hovered].cols.length === 1 ? 'md:grid-cols-1 max-w-3xl' : 'md:grid-cols-2'}`}>
                {menus[hovered].cols.map(col => (
                  <div key={col.title}>
                    <div className="text-xs font-bold tracking-wider text-brand mb-4">{col.title}</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {col.items.map(it => (
                        <Link key={it.t} href={it.href || '#'} onClick={()=>setHovered(null)} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-lavender transition">
                          <div className="h-10 w-10 rounded-lg bg-icon-chip grid place-items-center shrink-0 group-hover:bg-brand transition">
                            <it.i className="h-5 w-5 text-brand group-hover:text-white transition" strokeWidth={1.75} />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">{it.t}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{it.d}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobile && (
          <motion.div initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} className="lg:hidden overflow-hidden border-t border-slate-100">
            <div className="p-4 space-y-1">
              {keys.map(k => <div key={k} className="px-4 py-3 rounded-lg text-slate-700 font-medium">{k}</div>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Footer() {
  const featureLinks = Object.values(FEATURES).map(f => ({ t: f.title, href: `/features/${f.slug}` }))
  const cols = [
    { t: 'PRODUCTS', links: [
      { t: 'Chat SDK', href: '/#products' },
      { t: 'Call SDK', href: '/#products' },
      { t: 'SIP & VoIP', href: '/#products' },
      { t: 'Enterprise IM', href: '/#products' },
      { t: 'Self-Hosted', href: '/#products' },
    ]},
    { t: 'FEATURES', links: featureLinks },
    { t: 'SOLUTIONS', links: [
      { t: 'Healthcare', href: '/#solutions' },
      { t: 'FinTech & Banking', href: '/#solutions' },
      { t: 'Education', href: '/#solutions' },
      { t: 'E-Commerce', href: '/#solutions' },
      { t: 'Customer Support', href: '/#solutions' },
      { t: 'Gaming & Social', href: '/#solutions' },
    ]},
    { t: 'DEVELOPERS', links: [
      { t: 'Documentation', href: '/#developers' },
      { t: 'API Reference', href: '/#developers' },
      { t: 'iOS SDK', href: '/#developers' },
      { t: 'Android SDK', href: '/#developers' },
      { t: 'Flutter', href: '/#developers' },
      { t: 'React Native', href: '/#developers' },
    ]},
  ]
  return (
    <footer style={{background:'#2A2A33'}} className="text-slate-300">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5"><img src={LOGO} alt="KineTalk" className="h-14 w-auto bg-white p-1.5 rounded-lg" /></div>
            <p className="text-sm text-slate-400 leading-relaxed">KineTalk provides developer-first Chat and Call SDKs that drop into any web or mobile app. Ship messaging, voice and video in days.</p>
            <div className="mt-6 flex gap-2">{[Instagram, Facebook, Youtube, Twitter, Linkedin, Github].map((I,i)=>(
              <a key={i} href="#" className="h-9 w-9 rounded-lg border border-slate-700 grid place-items-center hover:bg-slate-800 hover:border-brand transition"><I className="h-4 w-4" /></a>
            ))}</div>
            <div className="mt-8">
              <div className="text-sm font-bold text-white mb-3">A PRODUCT OF THANJO TECH</div>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-start gap-2"><Building2 className="h-4 w-4 mt-0.5 shrink-0"/> Thanjo Tech Private Limited</div>
                <a href="mailto:info@thanjoztech.com" className="flex items-start gap-2 hover:text-white transition"><Mail className="h-4 w-4 mt-0.5 shrink-0"/> info@thanjoztech.com</a>
                <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0"/> Global HQ · Serving 190+ countries</div>
              </div>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.t}>
              <div className="text-sm font-bold text-white mb-5 tracking-wide">{c.t}</div>
              <ul className="space-y-3">
                {c.links.map(x => (<li key={x.t}><Link href={x.href} className="text-sm text-slate-400 hover:text-white transition">{x.t}</Link></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">© 2026 <span className="text-slate-300 font-semibold">Thanjo Tech Pvt Ltd</span>. All Rights Reserved. KineTalk™ is a trademark of Thanjo Tech.</div>
            <div className="flex gap-6 text-sm text-slate-400">{['Terms','Privacy','Security','Refund','Contact'].map(x=>(<a key={x} href="#" className="hover:text-white transition">{x}</a>))}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
