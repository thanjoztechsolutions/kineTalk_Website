import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata = {
  title: 'KineTalk — AI-Powered CPaaS for Chat, Voice, Video & AI Agents',
  description: 'Build video, voice, chat, live streaming, SIP/VoIP and AI agent solutions with KineTalk. 1000+ CPaaS features, self-hosted or cloud, enterprise ready.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  )
}
