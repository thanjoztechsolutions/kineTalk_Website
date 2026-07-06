'use client'
import { useParams } from 'next/navigation'
import { Nav, Footer, LeadModal, useLead } from '@/components/site'
import { RichPage } from '@/components/rich-page'
import { SITE_PAGES } from '@/lib/site-pages'

export default function ProductPage() {
  const { slug } = useParams()
  const lead = useLead()
  const page = SITE_PAGES.products?.[slug]
  if (!page) return <NotFound lead={lead} />
  return (
    <main className="min-h-screen bg-white">
      <Nav openLead={lead.open} />
      <RichPage page={{ ...page, openLeadDemo: () => lead.open('demo'), openLeadSales: () => lead.open('sales') }} />
      <Footer />
      <LeadModal state={lead.state} close={lead.close} />
    </main>
  )
}
function NotFound({ lead }) {
  return (
    <main className="min-h-screen bg-white">
      <Nav openLead={lead.open} />
      <div className="pt-40 pb-24 mx-auto max-w-2xl px-6 text-center">
        <div className="text-8xl font-display font-bold text-brand mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-slate-900">Product not found</h1>
      </div>
      <Footer />
      <LeadModal state={lead.state} close={lead.close} />
    </main>
  )
}
