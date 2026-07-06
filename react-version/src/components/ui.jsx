import { createContext, useContext, useState } from 'react'
import { ChevronDown } from 'lucide-react'

/* ---- Button ---- */
export function Button({ children, className = '', variant = 'default', size = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-xl transition-all disabled:opacity-50 disabled:pointer-events-none'
  const sizes = { default: 'h-10 px-4 text-sm', lg: 'h-12 px-7 text-base', sm: 'h-8 px-3 text-xs' }
  const variants = {
    default: 'bg-white text-black hover:bg-white/90',
    outline: 'border border-white/15 bg-white/5 hover:bg-white/10 text-white backdrop-blur',
    ghost: 'text-white/80 hover:text-white hover:bg-white/5',
  }
  return <button className={`${base} ${sizes[size]} ${variants[variant] ?? ''} ${className}`} {...props}>{children}</button>
}

/* ---- Badge ---- */
export function Badge({ children, className = '' }) {
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}>{children}</span>
}

/* ---- Accordion ---- */
const AccContext = createContext(null)
export function Accordion({ children, type = 'single' }) {
  const [open, setOpen] = useState(null)
  return <AccContext.Provider value={{ open, setOpen }}>{children}</AccContext.Provider>
}
export function AccordionItem({ value, children, className = '' }) {
  const { open } = useContext(AccContext)
  const isOpen = open === value
  return (
    <div data-state={isOpen ? 'open' : 'closed'} className={className}>
      {typeof children === 'function' ? children(isOpen) : children.map ? children.map((c, i) =>
        c && c.type && (c.type.displayName === 'AccordionTrigger' || c.type.displayName === 'AccordionContent')
          ? { ...c, props: { ...c.props, __value: value, __isOpen: isOpen } }
          : c
      ) : children}
    </div>
  )
}
export function AccordionTrigger({ children, __value, __isOpen, className = '' }) {
  const { setOpen } = useContext(AccContext)
  return (
    <button
      onClick={() => setOpen(__isOpen ? null : __value)}
      className={`flex w-full items-center justify-between py-4 text-left ${className}`}
    >
      <span>{children}</span>
      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${__isOpen ? 'rotate-180' : ''}`} />
    </button>
  )
}
AccordionTrigger.displayName = 'AccordionTrigger'
export function AccordionContent({ children, __isOpen, className = '' }) {
  return (
    <div className={`grid transition-all duration-300 ${__isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
      <div className={`overflow-hidden ${className}`}>{children}</div>
    </div>
  )
}
AccordionContent.displayName = 'AccordionContent'
