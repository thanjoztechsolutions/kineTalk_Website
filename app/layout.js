import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'KineTalk — AI Communication Platform for the Enterprise',
  description: 'One communication platform. Infinite possibilities. Launch chat, voice, video, AI agents and customer engagement faster than ever with KineTalk CPaaS.',
  keywords: ['CPaaS', 'AI Communication', 'Chat SDK', 'Voice SDK', 'Video SDK', 'AI Agents', 'WebRTC', 'Contact Center'],
  openGraph: {
    title: 'KineTalk — AI Communication Platform',
    description: 'Build AI-powered conversations that scale to millions.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="font-sans antialiased bg-[#05060f] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
