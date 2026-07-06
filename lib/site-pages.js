import {
  MessageSquare, Phone, Video, Radio, Users, Shield, Code2, Cloud, Server, Lock,
  Database, HeartPulse, Landmark, GraduationCap, ShoppingBag, Building2, Gamepad2,
  Truck, Headphones, Smartphone, FileText, Zap, Activity, GitBranch, BookOpen,
  Briefcase, Newspaper, Handshake, Mail, Scale, ShieldCheck, RefreshCw,
  Globe2, Sparkles, Layers, Wifi, PhoneForwarded, Bell
} from 'lucide-react'

// Utility to build page objects compactly
const make = (o) => o

export const SITE_PAGES = {
  /* ================ PRODUCTS ================ */
  products: {
    'chat-sdk': make({
      slug: 'chat-sdk', category: 'products', categoryLabel: 'Products',
      icon: MessageSquare, accent: 'from-blue-500 via-indigo-600 to-blue-700',
      badge: 'REALTIME MESSAGING', title: 'Chat SDK',
      heroKicker: 'In-app messaging,', heroHighlight: 'ready to ship.', heroSuffix: '',
      subtitle: 'Add production-ready 1:1 and group chat to your web and mobile apps. Presence, typing, receipts, media sharing and moderation — all through a single, cleanly-typed SDK.',
      stats: [{v:'50B+',l:'Messages/mo'},{v:'<100ms',l:'Global delivery'},{v:'99.99%',l:'Uptime SLA'}],
      benefits: [
        { icon: Users, t: '1:1 & group chat', d: 'Direct messages, group threads, channels and communities out of the box.' },
        { icon: Zap, t: 'Realtime everything', d: 'Presence, typing, receipts and reactions delivered over persistent websockets.' },
        { icon: Shield, t: 'Enterprise security', d: 'End-to-end encryption, GDPR / HIPAA compliance and BYOK support.' },
        { icon: Layers, t: 'Fully customisable', d: 'Bring your own UI or use our themable components. Zero lock-in.' },
      ],
      howItWorks: [
        { t: 'Install the SDK', d: 'Add the KineTalk package to your web or mobile project.' },
        { t: 'Authenticate the user', d: 'Exchange your app token for a scoped KineTalk session.' },
        { t: 'Join a channel', d: 'Subscribe to a channel and start sending / receiving messages.' },
        { t: 'Extend and moderate', d: 'Wire in webhooks for moderation, analytics and business logic.' },
      ],
      code: { lang: 'JavaScript', snippet: `import { KineTalk } from '@kinetalk/js'\nconst kt = new KineTalk({ appId: 'YOUR_APP_ID' })\n\nawait kt.connect({ userId: 'u_483', token })\n\nawait kt.channel('support').send({\n  text: 'Hey team, my order didn\\u2019t arrive.'\n})\n\nkt.channel('support').on('message', msg => renderMessage(msg))` },
      useCases: [
        { t: 'Customer support', d: 'Give every user instant access to your agents inside your product.' },
        { t: 'Community platforms', d: 'Public channels, private groups, moderation and rich media at scale.' },
        { t: 'Marketplaces', d: 'Buyer-seller chat with rich cards, offers and dispute resolution built in.' },
      ],
      faq: [
        { q: 'Which platforms are supported?', a: 'iOS, Android, Flutter, React Native, JavaScript, React, Angular and Vue — all first-class.' },
        { q: 'Can I bring my own auth?', a: 'Yes. Exchange your existing JWT / OAuth token for a KineTalk session.' },
        { q: 'How large can groups be?', a: 'Groups scale to tens of thousands of members with realtime delivery.' },
      ],
      related: [
        { t: 'Call SDK', href: '/products/call-sdk', icon: Phone, accent: 'from-fuchsia-500 via-red-500 to-rose-600', category: 'PRODUCTS' },
        { t: 'Enterprise IM', href: '/products/enterprise-im', icon: Building2, accent: 'from-slate-700 to-slate-900', category: 'PRODUCTS' },
        { t: 'SIP & VoIP', href: '/products/sip-voip', icon: PhoneForwarded, accent: 'from-emerald-500 to-teal-600', category: 'PRODUCTS' },
      ],
    }),
    'call-sdk': make({
      slug: 'call-sdk', category: 'products', categoryLabel: 'Products',
      icon: Phone, accent: 'from-fuchsia-500 via-red-500 to-rose-600',
      badge: 'HD VOICE & VIDEO', title: 'Call SDK',
      heroKicker: 'HD voice & video', heroHighlight: 'in a few lines.', heroSuffix: '',
      subtitle: 'WebRTC-powered voice, video and screen sharing with adaptive networking, noise suppression and cloud recording. Ship calling that feels magical on every network.',
      stats: [{v:'1000+',l:'Participants per room'},{v:'4K',l:'Recording resolution'},{v:'80kbps',l:'Min. bandwidth'}],
      benefits: [
        { icon: Phone, t: 'HD voice calls', d: 'Studio-grade Opus audio with echo cancellation and noise suppression.' },
        { icon: Video, t: 'Video up to 4K', d: 'Adaptive bitrate, simulcast and SVC for stunning quality on any network.' },
        { icon: Wifi, t: 'Resilient networking', d: 'Automatic reconnection, jitter buffering and FEC for lossy networks.' },
        { icon: Cloud, t: 'Cloud recording', d: 'Compliance-grade recording with transcripts and searchable archive.' },
      ],
      howItWorks: [
        { t: 'Grab media', d: 'The SDK requests mic and camera access with graceful fallbacks.' },
        { t: 'Signal peers', d: 'Room signalling is negotiated through our globally distributed edge.' },
        { t: 'Establish media', d: 'WebRTC connections form directly or via TURN for restrictive networks.' },
        { t: 'Manage the call', d: 'Publish, subscribe, mute, record and monitor quality in realtime.' },
      ],
      code: { lang: 'JavaScript', snippet: `const call = await kt.calls.create({\n  type: 'video',\n  participants: ['agent_sara'],\n  audio: { noiseSuppression: 'aggressive' }\n})\n\nawait call.join()\nawait call.recording.start({ transcribe: true })` },
      useCases: [
        { t: 'Telehealth', d: 'HIPAA-compliant video consults with recording and secure sharing.' },
        { t: 'Field service', d: 'Video calls between customers and technicians with screen sharing.' },
        { t: 'Live commerce', d: 'One-to-many product demos with realtime chat and reactions.' },
      ],
      faq: [
        { q: 'How many participants per call?', a: 'Up to 1000 in group video, unlimited in broadcast mode with sub-second latency.' },
        { q: 'Do you support SIP interop?', a: 'Yes — our SIP & VoIP module bridges to PSTN carriers and legacy PBX systems.' },
        { q: 'Is recording included?', a: 'Cloud recording is included on Growth and Enterprise plans, BYO-storage supported.' },
      ],
      related: [
        { t: 'Chat SDK', href: '/products/chat-sdk', icon: MessageSquare, accent: 'from-blue-500 via-indigo-600 to-blue-700', category: 'PRODUCTS' },
        { t: 'SIP & VoIP', href: '/products/sip-voip', icon: PhoneForwarded, accent: 'from-emerald-500 to-teal-600', category: 'PRODUCTS' },
        { t: 'Live Streaming', href: '/products/live-streaming', icon: Radio, accent: 'from-purple-500 to-pink-600', category: 'PRODUCTS' },
      ],
    }),
    'sip-voip': make({
      slug: 'sip-voip', category: 'products', categoryLabel: 'Products',
      icon: PhoneForwarded, accent: 'from-emerald-500 via-teal-600 to-cyan-700',
      badge: 'CARRIER-GRADE VOICE', title: 'SIP & VoIP',
      heroKicker: 'Bridge modern apps to', heroHighlight: 'legacy telephony.', heroSuffix: '',
      subtitle: 'Connect KineTalk to any SIP trunk, PSTN carrier or legacy PBX. Route calls between your app, mobile numbers and desk phones with a single unified API.',
      stats: [{v:'190+',l:'PSTN countries'},{v:'DID',l:'Numbers in 60+ countries'},{v:'BYOC',l:'Bring your own carrier'}],
      benefits: [
        { icon: PhoneForwarded, t: 'SIP trunking', d: 'Terminate SIP over TLS to any provider, with automatic failover.' },
        { icon: Globe2, t: 'Global DIDs', d: 'Provision numbers in 60+ countries or port your existing inventory.' },
        { icon: Zap, t: 'Low-latency media', d: 'Media servers in 12 regions keep round-trip below 120ms globally.' },
        { icon: Shield, t: 'Enterprise controls', d: 'Fraud protection, rate limiting, geoblocking and per-user quotas.' },
      ],
      faq: [
        { q: 'Can I keep my existing carrier?', a: 'Yes. BYOC lets you terminate SIP through any provider you already work with.' },
        { q: 'Is E911 / emergency dialing supported?', a: 'Yes, in supported jurisdictions with proper address registration.' },
        { q: 'Can I use my own phone numbers?', a: 'Absolutely — port existing DIDs or provision new numbers on demand.' },
      ],
      related: [
        { t: 'Call SDK', href: '/products/call-sdk', icon: Phone, accent: 'from-fuchsia-500 via-red-500 to-rose-600', category: 'PRODUCTS' },
        { t: 'Chat SDK', href: '/products/chat-sdk', icon: MessageSquare, accent: 'from-blue-500 to-indigo-700', category: 'PRODUCTS' },
      ],
    }),
    'live-streaming': make({
      slug: 'live-streaming', category: 'products', categoryLabel: 'Products',
      icon: Radio, accent: 'from-purple-500 via-pink-500 to-rose-600',
      badge: 'BROADCAST TO MILLIONS', title: 'Live Streaming',
      heroKicker: 'Broadcast live', heroHighlight: 'to millions.', heroSuffix: '',
      subtitle: 'Sub-second latency streaming with interactive chat, reactions and moderation baked in. Perfect for live commerce, sports, gaming, town halls and more.',
      stats: [{v:'<1s',l:'End-to-end latency'},{v:'HLS · DASH',l:'Adaptive delivery'},{v:'Millions',l:'Concurrent viewers'}],
      benefits: [
        { icon: Radio, t: 'Ultra-low latency', d: 'WebRTC + LL-HLS delivers sub-second glass-to-glass across regions.' },
        { icon: Users, t: 'Interactive by default', d: 'Chat, reactions and polls run alongside the stream with no extra plumbing.' },
        { icon: Shield, t: 'Moderation built-in', d: 'Rate limiting, keyword blocking and AI moderation keep streams safe.' },
        { icon: Cloud, t: 'DVR & recording', d: 'Instant replays, clip highlights and full VOD archive out of the box.' },
      ],
      faq: [
        { q: 'How many viewers can watch?', a: 'Streams scale to millions of concurrent viewers with adaptive delivery.' },
        { q: 'Can I monetise streams?', a: 'Yes — paywalls, subscriptions, tipping and merchandise widgets are all supported.' },
      ],
      related: [
        { t: 'Chat SDK', href: '/products/chat-sdk', icon: MessageSquare, accent: 'from-blue-500 to-indigo-700', category: 'PRODUCTS' },
        { t: 'Call SDK', href: '/products/call-sdk', icon: Phone, accent: 'from-fuchsia-500 to-rose-600', category: 'PRODUCTS' },
      ],
    }),
    'enterprise-im': make({
      slug: 'enterprise-im', category: 'products', categoryLabel: 'Products',
      icon: Building2, accent: 'from-slate-700 via-slate-800 to-slate-950',
      badge: 'INTERNAL COLLABORATION', title: 'Enterprise IM',
      heroKicker: 'A messenger', heroHighlight: 'your enterprise owns.', heroSuffix: '',
      subtitle: 'A branded, self-hosted Slack-style workspace for teams that need control. Channels, DMs, huddles, files and compliance — running on your infra, your domain.',
      stats: [{v:'Self-hosted',l:'On-prem, private cloud or hybrid'},{v:'SSO',l:'SAML, OIDC, SCIM'},{v:'Audit',l:'Every action logged'}],
      benefits: [
        { icon: Users, t: 'Team collaboration', d: 'Channels, threads, huddles, files and search — the tools your team actually uses.' },
        { icon: Server, t: 'Self-hosted option', d: 'Deploy on your Kubernetes, VMs or bare metal with BYO storage and keys.' },
        { icon: ShieldCheck, t: 'Compliance-first', d: 'Retention policies, legal hold, eDiscovery and DLP included.' },
        { icon: Lock, t: 'End-to-end encryption', d: 'AES-256 encrypted messages with optional customer-managed keys.' },
      ],
      faq: [
        { q: 'Is it Slack-compatible?', a: 'The UX is familiar but the code, data and encryption are entirely yours.' },
        { q: 'How does licensing work?', a: 'Per-active-user pricing on cloud; flat enterprise licenses for self-hosted deployments.' },
      ],
      related: [
        { t: 'On-Premise Deployment', href: '/products/on-premise-deployment', icon: Server, accent: 'from-slate-600 to-slate-900', category: 'PRODUCTS' },
        { t: 'Multi-Tenant Server', href: '/products/multi-tenant-server', icon: Layers, accent: 'from-indigo-600 to-purple-700', category: 'PRODUCTS' },
      ],
    }),
    'on-premise-deployment': make({
      slug: 'on-premise-deployment', category: 'products', categoryLabel: 'Products',
      icon: Server, accent: 'from-slate-600 via-slate-700 to-slate-900',
      badge: 'YOUR INFRA, OUR SDK', title: 'On-Premise Deployment',
      heroKicker: 'Run KineTalk', heroHighlight: 'entirely on your own infra.', heroSuffix: '',
      subtitle: 'Deploy the full messaging and calling stack on your Kubernetes cluster, VMs or bare metal. Air-gapped installs, BYOK, dedicated support engineers.',
      stats: [{v:'K8s',l:'Native Helm charts'},{v:'Air-gapped',l:'Offline install supported'},{v:'BYOK',l:'Your keys, your control'}],
      benefits: [
        { icon: Server, t: 'Full stack control', d: 'You own the servers, the storage, the network and the keys.' },
        { icon: ShieldCheck, t: 'Data sovereignty', d: 'Ideal for regulated markets, government and defence.' },
        { icon: Cloud, t: 'Hybrid ready', d: 'Split signalling and media between on-prem and cloud regions.' },
        { icon: Zap, t: 'Same SDK, same API', d: 'Zero code change between cloud and on-prem \u2014 flip a config flag.' },
      ],
      faq: [
        { q: 'What are the hardware requirements?', a: 'A minimum 3-node Kubernetes cluster with 8 vCPU / 32GB RAM per node for a 10k-user deployment.' },
        { q: 'Do you offer white-glove installation?', a: 'Yes. Enterprise packages include architect-led installation and 24/7 support.' },
      ],
      related: [
        { t: 'Enterprise IM', href: '/products/enterprise-im', icon: Building2, accent: 'from-slate-700 to-slate-950', category: 'PRODUCTS' },
        { t: 'Multi-Tenant Server', href: '/products/multi-tenant-server', icon: Layers, accent: 'from-indigo-600 to-purple-700', category: 'PRODUCTS' },
      ],
    }),
    'multi-tenant-server': make({
      slug: 'multi-tenant-server', category: 'products', categoryLabel: 'Products',
      icon: Layers, accent: 'from-indigo-600 via-purple-600 to-fuchsia-700',
      badge: 'BUILT FOR ISVs', title: 'Multi-Tenant Server',
      heroKicker: 'Ship SaaS on top of', heroHighlight: 'KineTalk.', heroSuffix: '',
      subtitle: 'Run isolated tenants on a shared control plane. Per-tenant branding, keys, storage and quotas — perfect for ISVs and white-label products.',
      stats: [{v:'1 \u2192 10k',l:'Tenants per cluster'},{v:'Isolated',l:'Data, keys and quotas'},{v:'Whitelabel',l:'Bring your own brand'}],
      benefits: [
        { icon: Layers, t: 'True tenancy', d: 'Every tenant has isolated data, keys, quotas and branding.' },
        { icon: Shield, t: 'Blast-radius controls', d: 'Rate limits and abuse detection scope per-tenant automatically.' },
        { icon: Zap, t: 'One control plane', d: 'Provision, meter and observe every tenant from a single dashboard.' },
        { icon: Sparkles, t: 'White-label ready', d: 'Custom domains, logos, colors and email templates per tenant.' },
      ],
      faq: [
        { q: 'How is billing metered?', a: 'Per-tenant metering by MAU, messages and minutes, exportable via webhook.' },
      ],
      related: [
        { t: 'On-Premise Deployment', href: '/products/on-premise-deployment', icon: Server, accent: 'from-slate-700 to-slate-900', category: 'PRODUCTS' },
        { t: 'Enterprise IM', href: '/products/enterprise-im', icon: Building2, accent: 'from-slate-700 to-slate-950', category: 'PRODUCTS' },
      ],
    }),
  },

  /* ================ SOLUTIONS ================ */
  solutions: buildSolutions(),

  /* ================ DEVELOPERS ================ */
  developers: buildDevelopers(),

  /* ================ COMPANY ================ */
  company: buildCompany(),

  /* ================ LEGAL ================ */
  legal: buildLegal(),
}

/* ---------- Solutions ---------- */
function buildSolutions() {
  const S = (slug, icon, accent, title, subtitle, benefits, useCases) => ({
    slug, category: 'solutions', categoryLabel: 'Solutions', icon, accent,
    badge: 'INDUSTRY SOLUTION', title,
    heroKicker: 'Purpose-built for', heroHighlight: title + '.', heroSuffix: '',
    subtitle,
    stats: [{v:'Ship',l:'Prototypes in days'},{v:'Scale',l:'Millions of MAU'},{v:'Comply',l:'Every major standard'}],
    benefits,
    useCases,
    faq: [
      { q: `Is KineTalk compliant for ${title}?`, a: 'Yes. SOC 2, HIPAA, GDPR and ISO 27001 are supported with regional data residency across 14 regions.' },
      { q: 'Can I self-host?', a: 'Absolutely. Cloud, self-hosted or hybrid deployments are all first-class.' },
      { q: 'What integrations are supported?', a: 'CRMs, ticketing, analytics and identity providers via webhooks and prebuilt connectors.' },
    ],
    related: [],
  })
  return {
    'healthcare': S('healthcare', HeartPulse, 'from-rose-500 to-pink-500', 'Healthcare',
      'HIPAA-compliant telemedicine, patient chat and care coordination. Everything you need to run modern digital health inside your app.',
      [
        { icon: HeartPulse, t: 'Telemedicine video', d: 'HIPAA-grade video consults with recording and secure sharing.' },
        { icon: Shield, t: 'HIPAA & PHI', d: 'PHI is encrypted, audited and never leaves your BAA-covered region.' },
        { icon: FileText, t: 'Care team chat', d: 'Structured messaging for clinicians with @mentions and priority alerts.' },
        { icon: Lock, t: 'BYOK', d: 'Bring your own key vault for full data sovereignty.' },
      ],
      [
        { t: 'Telehealth apps', d: 'Consumer-facing video visits with e-prescriptions and follow-up chat.' },
        { t: 'Hospital operations', d: 'Bedside-to-clinician messaging and shift-handoff huddles.' },
        { t: 'Remote monitoring', d: 'Patient-doctor async chat with device data enrichment.' },
      ]),
    'fintech-banking': S('fintech-banking', Landmark, 'from-emerald-500 to-teal-600', 'FinTech & Banking',
      'Secure banking chat, KYC video and fraud-hardened messaging that meets the highest regulatory bar.',
      [
        { icon: ShieldCheck, t: 'PCI-DSS aligned', d: 'Card data is masked, audited and never touches conversation logs.' },
        { icon: Video, t: 'Video KYC', d: 'Verify customers with liveness checks in a single video session.' },
        { icon: Lock, t: 'Encryption + BYOK', d: 'AES-256 with regional keys and legal-hold controls.' },
        { icon: Users, t: 'Advisor chat', d: 'Compliant one-to-one messaging between customers and advisors.' },
      ],
      [
        { t: 'Retail banking', d: 'In-app chat with agents, video walk-throughs and secure document upload.' },
        { t: 'Wealth management', d: 'Advisor-client messaging with archived, regulator-ready transcripts.' },
        { t: 'Fraud & disputes', d: 'Prioritised chat queues for fraud, with case metadata routing.' },
      ]),
    'education': S('education', GraduationCap, 'from-amber-500 to-orange-500', 'Education',
      'Live classes, tutoring rooms, cohort communities and school-safe messaging built for classrooms and universities.',
      [
        { icon: Video, t: 'Live classrooms', d: 'Up to 1000 students per room with breakouts and screen share.' },
        { icon: MessageSquare, t: 'Cohort communities', d: 'Persistent chat channels per class, cohort or club.' },
        { icon: ShieldCheck, t: 'COPPA & FERPA', d: 'Safeguards, moderation and content filters designed for schools.' },
        { icon: Cloud, t: 'Recording & replay', d: 'Auto-record lectures with transcripts and chapters.' },
      ],
      [
        { t: 'K-12 platforms', d: 'Safe messaging with parent visibility and content moderation.' },
        { t: 'Higher-ed LMS', d: 'Cohort chat, office-hour video and TA support integrated with your LMS.' },
        { t: 'Ed-tech apps', d: 'Tutor-student live rooms with whiteboards and homework upload.' },
      ]),
    'ecommerce': S('ecommerce', ShoppingBag, 'from-purple-500 to-fuchsia-500', 'E-Commerce',
      'Live shopping, seller-buyer chat and post-sale support that turn browsers into buyers.',
      [
        { icon: Radio, t: 'Live commerce', d: 'One-to-many product showcases with realtime cart drops.' },
        { icon: MessageSquare, t: 'Buyer-seller chat', d: 'Rich product cards, offers and order status in-thread.' },
        { icon: Headphones, t: 'Post-sale support', d: 'Video calls for returns, sizing, unboxing and troubleshooting.' },
        { icon: Users, t: 'Community', d: 'Brand communities with UGC, moderation and creator tools.' },
      ],
      [
        { t: 'Live shopping apps', d: 'Broadcast product launches with interactive chat and reactions.' },
        { t: 'Marketplaces', d: 'Peer-to-peer messaging with dispute resolution and payment context.' },
        { t: 'D2C brands', d: 'Owned community channels with segmentation and campaign chat.' },
      ]),
    'enterprise-comms': S('enterprise-comms', Building2, 'from-blue-500 to-indigo-600', 'Enterprise Comms',
      'Secure internal chat, huddles and knowledge sharing for teams that need control over their conversations.',
      [
        { icon: Users, t: 'Company channels', d: 'Companywide, team and 1:1 with search, mentions and reactions.' },
        { icon: ShieldCheck, t: 'SSO & SCIM', d: 'Enforce identity via SAML/OIDC with automated provisioning.' },
        { icon: Server, t: 'Self-hosted', d: 'Deploy on your infra with regional isolation and BYOK.' },
        { icon: FileText, t: 'Legal hold', d: 'Retention, hold and eDiscovery to meet compliance needs.' },
      ],
      [
        { t: 'Regulated industries', d: 'Chat with audit and hold for banking, defence and pharma.' },
        { t: 'Global enterprises', d: 'Multi-region deployments with local data residency.' },
        { t: 'Field workforces', d: 'Mobile-first messaging for distributed frontline teams.' },
      ]),
    'gaming-social': S('gaming-social', Gamepad2, 'from-violet-500 to-purple-600', 'Gaming & Social',
      'Voice rooms, guild chat, live streams and in-game moderation to keep communities engaged and safe.',
      [
        { icon: Radio, t: 'Voice rooms', d: 'Low-latency voice for parties, raids, tournaments and hangouts.' },
        { icon: MessageSquare, t: 'Guild chat', d: 'Persistent multi-channel chat with roles and permissions.' },
        { icon: Shield, t: 'AI moderation', d: 'Realtime abuse detection tuned for gaming audiences.' },
        { icon: Users, t: 'Massive scale', d: 'Millions of concurrent connections handled by our edge network.' },
      ],
      [
        { t: 'MMO / battle royale', d: 'Squad voice and clan messaging embedded in your game client.' },
        { t: 'Social apps', d: 'Rooms, communities and voice-first experiences.' },
        { t: 'Creator platforms', d: 'Follower chat, live streams and monetisation baked in.' },
      ]),
    'logistics': S('logistics', Truck, 'from-lime-500 to-emerald-500', 'Logistics',
      'Driver dispatch, delivery chat and status calls that keep supply chains moving.',
      [
        { icon: Truck, t: 'Driver chat', d: 'Structured messaging between dispatch, drivers and customers.' },
        { icon: Phone, t: 'Voice dispatch', d: 'Push-to-talk and voice calls that work on poor cellular networks.' },
        { icon: FileText, t: 'Proof of delivery', d: 'Photos, signatures and location shared in-thread.' },
        { icon: Wifi, t: 'Offline resilience', d: 'Message queueing and delivery on reconnect.' },
      ],
      [
        { t: 'Last-mile delivery', d: 'Real-time driver / customer chat with ETA and order context.' },
        { t: 'Fleet operations', d: 'Dispatch to driver voice and messaging with call recording.' },
        { t: 'Warehousing', d: 'Floor comms, shift-handoff huddles and safety alerts.' },
      ]),
    'customer-support': S('customer-support', Headphones, 'from-indigo-500 to-blue-600', 'Customer Support',
      'Omnichannel routing, agent copilots and unified conversation history — a modern contact center inside your app.',
      [
        { icon: Headphones, t: 'Omnichannel routing', d: 'Chat, voice, video and email in one queue with skill-based routing.' },
        { icon: MessageSquare, t: 'Unified inbox', d: 'One conversation per customer across every channel and time zone.' },
        { icon: FileText, t: 'Case history', d: 'Full context, transcripts and recordings attached to every ticket.' },
        { icon: Bell, t: 'SLA & escalation', d: 'Priority queues, SLA timers and auto-escalation.' },
      ],
      [
        { t: 'SaaS support', d: 'In-app chat with agents, cobrowse and screen share for issue resolution.' },
        { t: 'E-commerce', d: 'Multi-channel post-sale support with order and shipment context.' },
        { t: 'BPOs', d: 'Programmable contact center on top of KineTalk primitives.' },
      ]),
  }
}

/* ---------- Developers ---------- */
function buildDevelopers() {
  const D = (slug, icon, accent, title, subtitle, badge, benefits, code, faq) => ({
    slug, category: 'developers', categoryLabel: 'Developers', icon, accent, badge, title,
    heroKicker: title + ' —', heroHighlight: 'built for developers.', heroSuffix: '',
    subtitle,
    stats: [{v:'Typed',l:'First-class types'},{v:'Small',l:'Tiny bundle size'},{v:'Fast',l:'Native performance'}],
    benefits, code, faq, related: [],
  })
  return {
    'documentation': D('documentation', BookOpen, 'from-blue-500 to-indigo-700', 'Documentation',
      'Comprehensive guides, quickstarts and how-tos for every KineTalk feature and platform. Everything you need to ship, in one place.',
      'GUIDES & QUICKSTARTS',
      [
        { icon: BookOpen, t: 'Quickstarts', d: 'Zero-to-message in under 10 minutes on every framework.' },
        { icon: Layers, t: 'Concepts', d: 'Understand channels, users, roles, presence, permissions.' },
        { icon: FileText, t: 'How-tos', d: 'Task-focused recipes for common product patterns.' },
        { icon: Sparkles, t: 'Sample apps', d: 'Full reference apps you can clone and adapt.' },
      ],
      null,
      [
        { q: 'Are the docs open source?', a: 'Yes — the docs are on GitHub and welcome PRs.' },
        { q: 'How often are they updated?', a: 'Continuously, tied to every SDK release.' },
      ]),
    'api-reference': D('api-reference', Code2, 'from-purple-500 to-fuchsia-700', 'API Reference',
      'Complete reference for the REST, GraphQL and WebSocket APIs. Every endpoint, every parameter, every event — searchable and try-it-live.',
      'REST · GRAPHQL · WEBSOCKET',
      [
        { icon: Code2, t: 'REST', d: 'Idempotent HTTP endpoints for every server-side action.' },
        { icon: Zap, t: 'WebSocket', d: 'Realtime events for chat, presence, calls and moderation.' },
        { icon: Layers, t: 'GraphQL', d: 'Type-safe schema for admin dashboards and rich clients.' },
        { icon: FileText, t: 'OpenAPI', d: 'Generate clients in any language from the OpenAPI spec.' },
      ],
      { lang: 'HTTP', snippet: `POST /v1/messages HTTP/1.1\nHost: api.kinetalk.io\nAuthorization: Bearer YOUR_TOKEN\nContent-Type: application/json\n\n{\n  "channel": "support",\n  "user": "u_483",\n  "text": "Hello, KineTalk!"\n}` },
      [
        { q: 'Are there rate limits?', a: 'Yes — generous defaults, raised for Enterprise plans.' },
      ]),
    'ios-sdk': D('ios-sdk', Smartphone, 'from-slate-700 to-slate-950', 'iOS SDK',
      'Native SwiftUI and UIKit SDK for iOS. Battle-tested on millions of devices, tiny binary and instant startup.',
      'SWIFTUI · UIKIT',
      [
        { icon: Smartphone, t: 'Swift-first', d: 'Concurrency, actors and structured error handling throughout.' },
        { icon: Zap, t: 'Small binary', d: 'Under 3 MB compressed, zero external native dependencies.' },
        { icon: Sparkles, t: 'SwiftUI + UIKit', d: 'Bindings and view components for both paradigms.' },
        { icon: Shield, t: 'Keychain-backed auth', d: 'Secure token storage and biometric session refresh.' },
      ],
      { lang: 'Swift', snippet: `import KineTalk\n\nlet kt = KineTalk(appId: "YOUR_APP_ID")\ntry await kt.connect(userId: "u_483", token: token)\n\ntry await kt.channel("support").send(text: "Hi from iOS")` },
      []),
    'android-sdk': D('android-sdk', Smartphone, 'from-emerald-600 to-teal-700', 'Android SDK',
      'Kotlin-first SDK with full Jetpack Compose support. Coroutines everywhere, Material 3 components included.',
      'KOTLIN · JETPACK COMPOSE',
      [
        { icon: Smartphone, t: 'Kotlin-first', d: 'Coroutines, Flow and null-safety across every API.' },
        { icon: Sparkles, t: 'Compose ready', d: 'Composable functions for every UI primitive.' },
        { icon: Zap, t: 'Small ProGuard-friendly', d: 'Aggressive R8 minification and single-DEX support.' },
        { icon: Shield, t: 'Encrypted storage', d: 'EncryptedSharedPreferences and BiometricPrompt integration.' },
      ],
      { lang: 'Kotlin', snippet: `val kt = KineTalk(appId = "YOUR_APP_ID")\nkt.connect(userId = "u_483", token = token)\n\nkt.channel("support").send("Hi from Android")` },
      []),
    'flutter': D('flutter', Code2, 'from-sky-500 to-cyan-600', 'Flutter',
      'Cross-platform plugin for Flutter iOS, Android and web. Pure Dart API with the same feature-set as our native SDKs.',
      'FLUTTER · DART',
      [
        { icon: Code2, t: 'Pure Dart API', d: 'Idiomatic streams and futures across every KineTalk feature.' },
        { icon: Sparkles, t: 'Prebuilt widgets', d: 'Drop-in ChatUI, CallUI and RoomView widgets.' },
        { icon: Zap, t: 'Platform-optimised', d: 'Native performance via method channels on iOS and Android.' },
        { icon: Shield, t: 'Web + mobile', d: 'One codebase, three platforms, identical API surface.' },
      ],
      { lang: 'Dart', snippet: `final kt = KineTalk(appId: 'YOUR_APP_ID');\nawait kt.connect(userId: 'u_483', token: token);\n\nawait kt.channel('support').send('Hi from Flutter');` },
      []),
    'react-native': D('react-native', Code2, 'from-cyan-500 to-blue-600', 'React Native',
      'Turbo-module SDK for React Native with hooks and prebuilt UI components. iOS, Android, Web — one codebase.',
      'REACT NATIVE · TURBO MODULES',
      [
        { icon: Code2, t: 'React hooks', d: 'useChannel, useCall, usePresence for idiomatic RN apps.' },
        { icon: Zap, t: 'Turbo modules', d: 'Fabric-ready native bridge for peak performance.' },
        { icon: Sparkles, t: 'Prebuilt UI', d: 'Themable Chat, Call and Video screens included.' },
        { icon: Shield, t: 'Expo compatible', d: 'Works in Expo dev builds and bare workflow.' },
      ],
      { lang: 'JavaScript', snippet: `import { useChannel } from '@kinetalk/react-native'\n\nconst { messages, send } = useChannel('support')` },
      []),
    'javascript-react': D('javascript-react', Code2, 'from-yellow-400 to-amber-500', 'JavaScript / React',
      'Framework-agnostic JS core plus React hooks and components. Works in every modern browser and Node.js server.',
      'BROWSER + NODE.JS',
      [
        { icon: Code2, t: 'Tiny core', d: 'Under 30KB gzipped, zero external dependencies.' },
        { icon: Sparkles, t: 'React components', d: 'Chat, Call, Video, Presence — as React components.' },
        { icon: Zap, t: 'SSR / RSC ready', d: 'Works with Next.js server components and Remix.' },
        { icon: Shield, t: 'Typed', d: 'Full TypeScript definitions with strict mode.' },
      ],
      { lang: 'JavaScript', snippet: `import { useChannel } from '@kinetalk/react'\n\nconst { messages, send } = useChannel('support')` },
      []),
    'angular-vue': D('angular-vue', Code2, 'from-red-500 to-rose-600', 'Angular / Vue',
      'First-class integrations for Angular and Vue with idiomatic services, composables and single-file components.',
      'ANGULAR · VUE',
      [
        { icon: Code2, t: 'Angular services', d: 'Injectable services and RxJS observables for every event.' },
        { icon: Code2, t: 'Vue composables', d: 'useChannel(), useCall() composables for Vue 3.' },
        { icon: Sparkles, t: 'Component libraries', d: 'Drop-in Chat and Call components for both frameworks.' },
        { icon: Zap, t: 'Standalone-friendly', d: 'Works with Angular standalone components and Nuxt.' },
      ],
      null,
      []),
    'status-page': D('status-page', Activity, 'from-emerald-500 to-green-600', 'Status Page',
      'Realtime uptime dashboard for every KineTalk service and region. Subscribe to incidents via RSS, email or webhook.',
      'REALTIME UPTIME',
      [
        { icon: Activity, t: '30-day uptime', d: 'Public 30-day history for every service, region and endpoint.' },
        { icon: Bell, t: 'Incident alerts', d: 'RSS, email and webhook subscriptions for incidents.' },
        { icon: Globe2, t: 'Regional health', d: 'Per-region status across all 14 KineTalk regions.' },
        { icon: Zap, t: 'Live metrics', d: 'p50/p99 latency and error rates published every minute.' },
      ],
      null,
      []),
    'changelog': D('changelog', GitBranch, 'from-purple-500 to-indigo-700', 'Changelog',
      'Every SDK release, API change and platform improvement — dated, categorised and searchable.',
      'RELEASES & CHANGES',
      [
        { icon: GitBranch, t: 'Semantic versioning', d: 'Predictable major, minor and patch releases across every SDK.' },
        { icon: FileText, t: 'Migration guides', d: 'Step-by-step upgrade instructions for every breaking change.' },
        { icon: Sparkles, t: 'RFCs', d: 'Public RFCs let the community shape upcoming features.' },
        { icon: Bell, t: 'Subscribe', d: 'RSS, email and Slack notifications for new releases.' },
      ],
      null,
      []),
  }
}

/* ---------- Company ---------- */
function buildCompany() {
  const C = (slug, icon, accent, badge, title, kicker, hl, subtitle, benefits, faq) => ({
    slug, category: 'company', categoryLabel: 'Company', icon, accent, badge, title,
    heroKicker: kicker, heroHighlight: hl, heroSuffix: '',
    subtitle,
    stats: [{v:'2024',l:'Founded in Chennai'},{v:'190+',l:'Countries served'},{v:'Global',l:'Distributed team'}],
    benefits, faq, related: [],
  })
  return {
    'about': C('about', Building2, 'from-blue-500 to-indigo-700', 'ABOUT', 'About KineTalk',
      'We build the', 'conversation layer of the internet.',
      'KineTalk is a developer-first Chat and Call SDK platform, built by Thanjo Tech. Our mission is to make world-class real-time communication as easy to ship as sending an HTTP request.',
      [
        { icon: Sparkles, t: 'Developer obsessed', d: 'We believe great APIs unlock better products. Every design decision starts there.' },
        { icon: Globe2, t: 'Global by default', d: 'Regional deployments, currency support and localisation for 190+ countries.' },
        { icon: Shield, t: 'Trust-first', d: 'Compliance, encryption and reliability are non-negotiable primitives.' },
        { icon: Users, t: 'Customer-led roadmap', d: 'Every quarter, the loudest customer signal shapes what we build.' },
      ],
      [
        { q: 'Who owns KineTalk?', a: 'KineTalk is a product of Thanjo Tech Private Limited — a privately held technology company.' },
        { q: 'Where are you located?', a: 'HQ in Chennai, with distributed engineering across India, EU and North America.' },
      ]),
    'careers': C('careers', Briefcase, 'from-emerald-500 to-teal-600', 'CAREERS', 'Careers',
      'Come build the', 'next decade of communication.',
      'We\u2019re hiring across engineering, design, developer relations and sales. Remote-first, high-agency, high-craft. If you love shipping, you\u2019ll love it here.',
      [
        { icon: Sparkles, t: 'Craft over process', d: 'Small teams, tight feedback loops, ambitious quality bars.' },
        { icon: Globe2, t: 'Remote-first', d: 'Work from anywhere with quarterly in-person offsites.' },
        { icon: Zap, t: 'Learning budget', d: 'Books, courses, conferences \u2014 whatever helps you grow.' },
        { icon: Users, t: 'Meaningful equity', d: 'Every full-timer is an owner from day one.' },
      ],
      [
        { q: 'How do I apply?', a: 'Send your CV and a short intro to careers@thanjoztech.com. We reply to every application.' },
        { q: 'Do you sponsor visas?', a: 'For senior roles in specific regions, yes. Reach out and we\u2019ll discuss.' },
      ]),
    'partners': C('partners', Handshake, 'from-purple-500 to-pink-600', 'PARTNERS', 'Partners',
      'Build with us,', 'grow together.',
      'We work with system integrators, agencies, technology vendors and resellers who help customers ship communication faster. Partner with KineTalk and earn together.',
      [
        { icon: Handshake, t: 'SI & agencies', d: 'Delivery certification, co-marketing and revenue share.' },
        { icon: Sparkles, t: 'Technology alliances', d: 'Deep integrations with CRM, ticketing and identity vendors.' },
        { icon: Globe2, t: 'Regional resellers', d: 'Local presence in emerging markets with pricing autonomy.' },
        { icon: Users, t: 'Independent developers', d: 'Refer customers and earn commission for two years.' },
      ],
      [
        { q: 'How do I become a partner?', a: 'Apply via partners@thanjoztech.com — we onboard qualified partners within 10 business days.' },
      ]),
    'blog': C('blog', Newspaper, 'from-orange-500 to-red-500', 'BLOG', 'Blog',
      'Product deep-dives,', 'engineering write-ups and news.',
      'Tutorials, architecture notes, customer stories and product announcements from the KineTalk team. New posts every week.',
      [
        { icon: BookOpen, t: 'Tutorials', d: 'Step-by-step guides for real product patterns.' },
        { icon: Zap, t: 'Engineering', d: 'How we build and scale realtime communication.' },
        { icon: Sparkles, t: 'Product', d: 'Launches, roadmap notes and design principles.' },
        { icon: Users, t: 'Customers', d: 'How teams ship faster with KineTalk.' },
      ],
      []),
    'press-kit': C('press-kit', Newspaper, 'from-slate-600 to-slate-900', 'PRESS', 'Press Kit',
      'Everything you need', 'to write about KineTalk.',
      'Logos, brand assets, product screenshots, boilerplate copy and executive bios \u2014 all in one place. For media enquiries, email press@thanjoztech.com.',
      [
        { icon: Sparkles, t: 'Logos & marks', d: 'SVG and PNG assets in every colour combination.' },
        { icon: Newspaper, t: 'Boilerplate', d: 'Short, medium and long-form company descriptions.' },
        { icon: Users, t: 'Leadership bios', d: 'Photos and bios for founders and leadership.' },
        { icon: Globe2, t: 'Product shots', d: 'High-res screenshots and mockups for editorial use.' },
      ],
      []),
    'contact': C('contact', Mail, 'from-blue-500 to-cyan-600', 'CONTACT', 'Contact',
      'Talk to a human.', 'Fast.',
      'For sales, support, partnerships or press — reach out and a real person will get back to you. We reply to every message.',
      [
        { icon: Mail, t: 'Sales', d: 'info@thanjoztech.com \u2014 pricing, custom quotes and demos.' },
        { icon: Headphones, t: 'Support', d: 'support@thanjoztech.com \u2014 always-on help for customers.' },
        { icon: Handshake, t: 'Partners', d: 'partners@thanjoztech.com \u2014 SI, agency and reseller enquiries.' },
        { icon: Newspaper, t: 'Press', d: 'press@thanjoztech.com \u2014 media enquiries and interviews.' },
      ],
      []),
  }
}

/* ---------- Legal ---------- */
function buildLegal() {
  const L = (slug, icon, badge, title, kicker, hl, subtitle, benefits, faq) => ({
    slug, category: 'legal', categoryLabel: 'Legal', icon,
    accent: 'from-slate-600 via-slate-700 to-slate-900',
    badge, title,
    heroKicker: kicker, heroHighlight: hl, heroSuffix: '',
    subtitle,
    benefits, faq, related: [],
  })
  return {
    'terms': L('terms', Scale, 'LEGAL', 'Terms of Service',
      'The terms that', 'govern your use of KineTalk.',
      'Effective from 6 July 2026. By using KineTalk services, you agree to these terms. Please read them carefully — they set out the relationship between Thanjo Tech and you.',
      [
        { icon: Scale, t: 'Acceptance of terms', d: 'By using KineTalk, you agree to be bound by these terms and all applicable laws.' },
        { icon: FileText, t: 'Account & usage', d: 'You are responsible for the security and use of your account credentials.' },
        { icon: Shield, t: 'Service limits', d: 'Fair-use limits apply. Enterprise plans include committed capacity.' },
        { icon: RefreshCw, t: 'Changes to terms', d: 'We may update these terms. We\u2019ll notify you of material changes by email.' },
      ],
      [
        { q: 'How do I terminate my account?', a: 'You can cancel any time from the dashboard. Data is retained for 30 days after cancellation, then permanently deleted.' },
      ]),
    'privacy': L('privacy', Shield, 'LEGAL', 'Privacy Policy',
      'How we handle', 'your data \u2014 in plain English.',
      'Effective from 6 July 2026. KineTalk (a product of Thanjo Tech Private Limited) is committed to protecting your privacy. This policy explains what we collect, why, and your rights.',
      [
        { icon: Shield, t: 'Data we collect', d: 'Account, usage and communication data necessary to operate the service.' },
        { icon: Lock, t: 'How we protect it', d: 'AES-256 at rest, TLS 1.3 in transit, and regional data residency.' },
        { icon: Users, t: 'Your rights', d: 'Access, portability, correction and deletion \u2014 all self-serve or via support.' },
        { icon: FileText, t: 'Third parties', d: 'We use a small number of vetted sub-processors, published on our trust portal.' },
      ],
      [
        { q: 'Is my chat data used for training AI?', a: 'No. Customer conversation data is never used to train models unless you explicitly opt in.' },
        { q: 'Where is data stored?', a: 'You can choose your primary region (US, EU, IN, SG). Data does not leave the region without your permission.' },
      ]),
    'refund': L('refund', RefreshCw, 'LEGAL', 'Refund Policy',
      'Fair refunds,', 'plainly explained.',
      'We stand behind KineTalk. If we don\u2019t deliver, we\u2019ll make it right. This policy explains when and how refunds are processed.',
      [
        { icon: RefreshCw, t: '30-day guarantee', d: 'New paid subscriptions can be refunded within 30 days, no questions asked.' },
        { icon: FileText, t: 'Prorated refunds', d: 'Enterprise annual contracts can be prorated on early termination for cause.' },
        { icon: Zap, t: 'Fast processing', d: 'Refunds are processed within 5 business days to your original payment method.' },
        { icon: Users, t: 'Contact us', d: 'Email billing@thanjoztech.com to request a refund or dispute a charge.' },
      ],
      [
        { q: 'Are usage overages refundable?', a: 'Usage charges are non-refundable, but we\u2019ll happily waive first-time accidental overages.' },
      ]),
  }
}
