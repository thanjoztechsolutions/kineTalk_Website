'use client'
import { useParams } from 'next/navigation'
import { Nav, Footer, LeadModal, useLead } from '@/components/site'
import { RichPage } from '@/components/rich-page'
import { SITE_PAGES } from '@/lib/site-pages'

export default function LegalPage() {
  const { slug } = useParams()
  const lead = useLead()
  const page = SITE_PAGES.legal?.[slug]
  if (!page) return (
    <main className="min-h-screen bg-white">
      <Nav openLead={lead.open} />
      <div className="pt-40 pb-24 text-center"><div className="text-8xl font-display font-bold text-brand mb-4">404</div><h1 className="font-display text-3xl font-bold text-slate-900">Page not found</h1></div>
      <Footer /><LeadModal state={lead.state} close={lead.close} />
    </main>
  )
  return (
    <main className="min-h-screen bg-white">
      <Nav openLead={lead.open} />
      <RichPage page={{ ...page, openLeadDemo: () => lead.open('demo'), openLeadSales: () => lead.open('sales') }} />
      <Footer />
      <LeadModal state={lead.state} close={lead.close} />
    </main>
  )
}
