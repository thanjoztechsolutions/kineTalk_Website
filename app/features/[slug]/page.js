'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowRight, Check, ChevronRight, Star, ChevronDown } from 'lucide-react'
import { Nav, Footer, LeadModal, useLead } from '@/components/site'
import { FEATURES } from '@/lib/features-data'

export default function FeaturePage() {
  const params = useParams()
  const slug = params?.slug
  const feature = FEATURES[slug]
  const lead = useLead()

  if (!feature) return <NotFoundState />

  return (
    <main className="min-h-screen bg-white">
      <Nav openLead={lead.open} />
      <FeatureHero feature={feature} openLead={lead.open} />
      <FeatureBenefits feature={feature} />
      <FeatureHowItWorks feature={feature} />
      <FeatureCode feature={feature} />
      <FeatureUseCases feature={feature} />
      <FeatureFAQ feature={feature} />
      <FeatureRelated feature={feature} />
      <FeatureCTA openLead={lead.open} />
      <Footer />
      <LeadModal state={lead.state} close={lead.close} />
    </main>
  )
}

function NotFoundState() {
  const lead = useLead()
  return (
    <main className="min-h-screen bg-white">
      <Nav openLead={lead.open} />
      <div className="pt-40 pb-24 mx-auto max-w-2xl px-6 text-center">
        <div className="text-8xl font-display font-bold text-brand mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-slate-900">Feature not found</h1>
        <p className="text-slate-600 mt-3">The feature you're looking for doesn't exist yet. Browse the full menu instead.</p>
        <Link href="/" className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-lg btn-blue text-sm font-semibold text-white">Back to home</Link>
      </div>
      <Footer />
      <LeadModal state={lead.state} close={lead.close} />
    </main>
  )
}

function FeatureHero({ feature, openLead }) {
  const Icon = feature.icon
  return (
    <section className="relative pt-36 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-red-50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span>Features</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-900 font-medium">{feature.title}</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}}
              className="inline-flex items-center gap-2 rounded-full bg-lavender-2 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-semibold text-brand">{feature.category} · {feature.badge}</span>
            </motion.div>
            <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}}
              className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight text-slate-900">
              {feature.heroKicker} <span className="text-brand">{feature.heroHighlight}</span> {feature.heroSuffix}
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.15}}
              className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">{feature.subtitle}</motion.p>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.3}}
              className="mt-8 flex flex-wrap gap-3">
              <button onClick={()=>openLead('demo')} className="btn-red-solid inline-flex items-center h-12 px-7 rounded-lg text-base font-semibold">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></button>
              <button onClick={()=>openLead('sales')} className="btn-red-outline inline-flex items-center h-12 px-7 rounded-lg text-base font-semibold">Contact Sales</button>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {feature.stats.map(s => (
                <div key={s.l} className="card-soft rounded-2xl p-4">
                  <div className="font-display text-xl font-bold text-brand">{s.v}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.7}}
            className="relative aspect-square max-w-lg mx-auto w-full">
            <div className="absolute inset-0 bg-lavender rounded-[3rem] rotate-3" />
            <div className="absolute inset-4 bg-white rounded-[2.75rem] card-soft grid place-items-center overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-40" />
              <div className={`relative h-40 w-40 rounded-3xl bg-gradient-to-br ${feature.accent} grid place-items-center shadow-2xl shadow-blue-500/30`}>
                <Icon className="h-20 w-20 text-white" strokeWidth={1.5} />
              </div>
              {feature.stats.map((s, i) => {
                const positions = [{ x:'8%', y:'12%' },{ x:'72%', y:'18%' },{ x:'12%', y:'78%' }]
                const p = positions[i]
                if (!p) return null
                return (
                  <div key={s.l} className="absolute card-soft rounded-2xl px-4 py-2 animate-float" style={{ left: p.x, top: p.y, animationDelay: `${i*0.5}s` }}>
                    <div className="text-brand font-display text-base font-bold">{s.v}</div>
                    <div className="text-[10px] text-slate-500 font-medium">{s.l}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureBenefits({ feature }) {
  return (
    <section className="py-24 bg-lavender">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Why teams choose <span className="text-brand">{feature.title.split(' ').slice(0,3).join(' ')}</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">Built for scale, obsessed with detail, and dead-simple to integrate.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {feature.benefits.map((b, i) => (
            <motion.div key={b.t} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-40px'}} transition={{delay:i*0.06}}
              className="card-soft card-soft-hover rounded-3xl p-6 bg-white">
              <div className="h-12 w-12 rounded-2xl bg-icon-chip grid place-items-center mb-4">
                <b.icon className="h-6 w-6 text-brand" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">{b.t}</h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureHowItWorks({ feature }) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender-2 px-3 py-1 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand">HOW IT WORKS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            The <span className="text-brand">flow</span>, end-to-end
          </h2>
        </div>
        <div className="relative max-w-5xl mx-auto space-y-6">
          {feature.howItWorks.map((s, i) => (
            <motion.div key={s.t} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true, margin:'-40px'}} transition={{delay:i*0.08}}
              className="flex gap-6 items-start">
              <div className={`relative shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.accent} grid place-items-center font-display text-2xl font-bold text-white shadow-lg`}>
                {i+1}
              </div>
              <div className="card-soft rounded-2xl p-6 flex-1">
                <h3 className="font-display text-lg font-bold text-slate-900">{s.t}</h3>
                <p className="text-slate-600 mt-1.5 leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCode({ feature }) {
  return (
    <section className="py-24 bg-lavender">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand">CODE SAMPLE</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">Copy, paste, ship.</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">Wire this feature up in a few lines of code. Language-idiomatic APIs, typed everywhere, and always framework-native.</p>
            <ul className="mt-6 space-y-2">
              {['Fully typed TypeScript SDK','Zero-config authentication','Framework hooks & components','Complete API reference in docs'].map(x=>(
                <li key={x} className="flex items-start gap-2 text-slate-700 text-sm"><Check className="h-4 w-4 mt-0.5 text-brand shrink-0"/>{x}</li>
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
                <div className="text-xs text-slate-400 font-mono">{feature.slug}.{feature.code.lang.toLowerCase()}</div>
                <div className="w-12" />
              </div>
              <div className="flex gap-1 px-2 py-2 bg-slate-800">
                <span className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-700 text-white">{feature.code.lang}</span>
              </div>
              <pre className="bg-slate-950 text-slate-100 text-[13px] leading-relaxed p-6 overflow-x-auto max-h-[420px]"><code className="font-mono">{feature.code.snippet}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureUseCases({ feature }) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Real teams. <span className="text-brand">Real results.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">Here's where {feature.title.toLowerCase()} makes the biggest difference.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {feature.useCases.map((u, i) => (
            <motion.div key={u.t} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="card-soft card-soft-hover rounded-3xl p-7">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${feature.accent} grid place-items-center mb-4`}>
                <feature.icon className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">{u.t}</h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{u.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureFAQ({ feature }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-24 bg-lavender">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            <span className="text-brand">FAQ</span> — {feature.category}
          </h2>
        </div>
        <div className="space-y-3">
          {feature.faq.map((f, i) => (
            <div key={i} className="card-soft rounded-2xl overflow-hidden bg-white">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureRelated({ feature }) {
  const related = feature.related.map(s => FEATURES[s]).filter(Boolean)
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Pairs beautifully with</h2>
          <p className="mt-4 text-lg text-slate-600">Combine features to build the exact conversation experience your product needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {related.map((r, i) => (
            <motion.div key={r.slug} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
              <Link href={`/features/${r.slug}`} className="block card-soft card-soft-hover rounded-3xl overflow-hidden group">
                <div className={`h-32 bg-gradient-to-br ${r.accent} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-lines opacity-20" />
                  <div className="absolute inset-0 grid place-items-center">
                    <r.icon className="h-14 w-14 text-white/60 group-hover:scale-110 transition" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-brand mb-1">{r.category}</div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{r.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">Explore <ArrowRight className="h-4 w-4" /></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCTA({ openLead }) {
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
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">See it live in your product.</h2>
            <p className="mt-4 text-white/85 text-lg max-w-2xl mx-auto">Book a 30-minute demo and we'll wire this feature into a working prototype tailored to your use case.</p>
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
