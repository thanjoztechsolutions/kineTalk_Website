import {
  MessageCircle, Reply, AtSign, Search, Volume2, Video, Wifi, PhoneIncoming,
  Eye, Zap, Users, Bell, Shield, Sparkles, Clock, TrendingUp,
  Cloud, FileText, Heart, MessageSquare, Signal, Radio, Headphones,
  ListChecks, Database, Play, Mic, PhoneForwarded
} from 'lucide-react'

export const FEATURE_MENU = [
  { title: 'CHAT FEATURES', slugs: ['typing-read-receipts', 'reactions-threads', 'mentions-presence', 'message-search'] },
  { title: 'CALL FEATURES', slugs: ['noise-suppression', 'recording-playback', 'bandwidth-adaptation', 'call-queuing'] },
]

export const FEATURES = {
  'typing-read-receipts': {
    slug: 'typing-read-receipts',
    category: 'Chat SDK',
    icon: MessageCircle,
    accent: 'from-blue-500 via-indigo-600 to-blue-700',
    badge: 'REALTIME PRESENCE',
    title: 'Typing Indicators & Read Receipts',
    heroKicker: 'Bring every conversation',
    heroHighlight: 'to life',
    heroSuffix: 'with realtime signals your users can feel.',
    subtitle: 'Show when someone is typing, when a message is delivered, and when it\u2019s seen \u2014 the tiny cues that make a chat feel alive. Enable one-line-of-code presence for every conversation in your app.',
    stats: [
      { v: '<50ms', l: 'Signal latency worldwide' },
      { v: '3 states', l: 'Sent \u00b7 delivered \u00b7 read' },
      { v: '99.99%', l: 'Delivery uptime' },
    ],
    benefits: [
      { icon: Eye, t: 'Real-time visibility', d: 'Users always know if their message was seen, keeping conversations moving forward.' },
      { icon: Heart, t: 'Human, expressive UX', d: 'Typing bubbles make chats feel warm and personal, boosting engagement.' },
      { icon: Zap, t: 'Sub-50ms updates', d: 'Signals travel over persistent WebSocket connections in every region.' },
      { icon: Shield, t: 'Privacy controls', d: 'Per-user, per-channel toggles for receipts. Fully GDPR compliant.' },
    ],
    howItWorks: [
      { t: 'Subscribe to a channel', d: 'Your SDK opens a low-latency WebSocket and joins the conversation.' },
      { t: 'Emit typing events', d: 'On keypress, the SDK debounces and sends a lightweight typing signal.' },
      { t: 'Update UI in realtime', d: 'Other participants receive the state instantly and render the indicator.' },
      { t: 'Mark as read', d: 'When a message enters the viewport, the SDK auto-fires a read receipt.' },
    ],
    code: {
      lang: 'JavaScript',
      snippet: `channel.on('typing:start', ({ user }) => {
  showTypingBubble(user.name)
})
channel.on('typing:stop', ({ user }) => {
  hideTypingBubble(user.name)
})

input.addEventListener('input', () => {
  channel.startTyping()
})

// Auto-mark as read on view
observer.observe(messageEl, () => {
  channel.markAsRead(messageId)
})`,
    },
    useCases: [
      { t: 'Customer support', d: 'Reassure customers their agent is responding in real time.' },
      { t: 'Dating & social', d: 'Add the anticipation of \u201ctyping\u2026\u201d to every conversation.' },
      { t: 'Team collaboration', d: 'See exactly when teammates have caught up on important channels.' },
    ],
    faq: [
      { q: 'Can I disable read receipts for privacy?', a: 'Yes. Per-user privacy settings let members opt out of sending read receipts globally or per channel. Delivery receipts remain active.' },
      { q: 'Do typing indicators auto-timeout?', a: 'Yes. Typing state auto-expires after 5 seconds of inactivity to avoid stuck indicators. This timeout is configurable.' },
      { q: 'How do receipts work in group chats?', a: 'You receive a granular map of which members have seen each message, so you can render \u201cSeen by 4 of 8\u201d style UI.' },
    ],
    related: ['reactions-threads', 'mentions-presence', 'message-search'],
  },

  'reactions-threads': {
    slug: 'reactions-threads',
    category: 'Chat SDK',
    icon: Reply,
    accent: 'from-fuchsia-500 via-purple-600 to-indigo-700',
    badge: 'RICH CONVERSATIONS',
    title: 'Reactions, Replies & Threads',
    heroKicker: 'Cut the noise.',
    heroHighlight: 'Focus the chat.',
    heroSuffix: '',
    subtitle: 'Emoji reactions, quote replies and threaded conversations that let large channels stay organised. Ship Slack-quality messaging in a few lines of code.',
    stats: [
      { v: '50+', l: 'Emoji reactions' },
      { v: 'Unlimited', l: 'Nested reply depth' },
      { v: '\u221e', l: 'Threads per channel' },
    ],
    benefits: [
      { icon: Sparkles, t: 'Expressive reactions', d: 'Any Unicode or custom emoji. Perfect for lightweight acknowledgement.' },
      { icon: MessageSquare, t: 'Contextual replies', d: 'Quote-reply keeps context clear even in busy channels.' },
      { icon: ListChecks, t: 'Threaded chat', d: 'Split conversations into focused sub-threads without polluting the main feed.' },
      { icon: TrendingUp, t: 'Higher engagement', d: 'Teams using reactions see 3\u00d7 more message activity per user.' },
    ],
    howItWorks: [
      { t: 'React with any emoji', d: 'Users tap a message to open a reaction picker with your custom set.' },
      { t: 'Reply in-line or start a thread', d: 'Choose quote-reply or create a nested thread from any message.' },
      { t: 'Get realtime updates', d: 'Reaction counts and thread messages update instantly for everyone.' },
      { t: 'Notify smartly', d: 'Thread participants get notifications; the main channel stays quiet.' },
    ],
    code: {
      lang: 'JavaScript',
      snippet: `await message.react('\ud83d\udd25')

const thread = await message.createThread({
  title: 'Design review'
})

await thread.send({
  text: 'Loving the new hero layout \ud83c\udfa8'
})

channel.on('reaction:added', ({ message, emoji, user }) => {
  updateReactionCount(message.id, emoji)
})`,
    },
    useCases: [
      { t: 'Team channels', d: 'Reactions replace \u201c+1\u201d spam; threads keep off-topic side chats contained.' },
      { t: 'Community forums', d: 'Turn every question into a thread with a clear resolved state.' },
      { t: 'Live-event chat', d: 'Reactions light up a stream chat while threads capture deeper conversations.' },
    ],
    faq: [
      { q: 'Can I use custom emojis?', a: 'Yes. Upload your own emoji set per app, per organisation or per channel. Great for team culture and branded reactions.' },
      { q: 'Do threads support media & files?', a: 'Fully. Threads support the same rich content as main channel messages: files, media, code blocks and reactions.' },
      { q: 'How deep can replies nest?', a: 'Quote-reply supports unlimited nesting visually while keeping database queries flat and fast.' },
    ],
    related: ['typing-read-receipts', 'mentions-presence', 'message-search'],
  },

  'mentions-presence': {
    slug: 'mentions-presence',
    category: 'Chat SDK',
    icon: AtSign,
    accent: 'from-emerald-500 via-teal-600 to-cyan-700',
    badge: 'ATTENTION & AWARENESS',
    title: 'Mentions & User Presence',
    heroKicker: 'Get the right person\u2019s attention.',
    heroHighlight: 'Instantly.',
    heroSuffix: '',
    subtitle: '@mention teammates, entire groups or channels. Show online / offline / away / custom status \u2014 so your users always know who\u2019s reachable and who\u2019s heads-down.',
    stats: [
      { v: '4', l: 'Presence states built-in' },
      { v: '<100ms', l: 'Status propagation' },
      { v: 'Custom', l: 'Status messages' },
    ],
    benefits: [
      { icon: AtSign, t: '@mentions', d: 'Mention individuals, groups, roles or entire channels with smart autocomplete.' },
      { icon: Signal, t: 'Live presence', d: 'Online, offline, away and custom status \u2014 all synced across devices.' },
      { icon: Bell, t: 'Smart notifications', d: 'Mentions trigger high-priority push, even in muted channels.' },
      { icon: Users, t: 'Group mentions', d: '@channel, @here, @team \u2014 with rate-limiting to prevent notification spam.' },
    ],
    howItWorks: [
      { t: 'Type @', d: 'Autocomplete opens instantly with users, groups and channel options.' },
      { t: 'Send the message', d: 'Mentioned users are stored as structured metadata in the message payload.' },
      { t: 'Notify with priority', d: 'Push notifications with high priority ring through DND on mobile.' },
      { t: 'Broadcast presence', d: 'Every client subscribes to presence updates for members it cares about.' },
    ],
    code: {
      lang: 'JavaScript',
      snippet: `await channel.send({
  text: 'Hey @sara and @dev-team, ready for review?',
  mentions: ['user_sara', 'group_dev_team'],
})

channel.on('presence:change', ({ user, status }) => {
  updateAvatarStatus(user.id, status)
})

await client.setPresence({
  status: 'busy',
  message: 'On a call \ud83c\udfa7',
  expiresAt: '2026-07-06T18:00:00Z',
})`,
    },
    useCases: [
      { t: 'Enterprise chat', d: 'See at a glance who\u2019s reachable across time zones before pinging.' },
      { t: 'Support & helpdesks', d: 'Route @mentions to on-call engineers automatically.' },
      { t: 'Community platforms', d: 'Custom statuses let members share what they\u2019re up to.' },
    ],
    faq: [
      { q: 'Can I create custom presence states?', a: 'Yes. Beyond the four built-in states, you can define any custom status with a label, emoji and auto-expiry timestamp.' },
      { q: 'How is @channel rate-limited?', a: 'Broadcast mentions in channels above 50 members require explicit permission. This prevents notification storms.' },
      { q: 'Do mentions work in threads?', a: 'Absolutely. Mentions in threads notify only thread participants and the mentioned user, keeping the main channel quiet.' },
    ],
    related: ['typing-read-receipts', 'reactions-threads', 'call-queuing'],
  },

  'message-search': {
    slug: 'message-search',
    category: 'Chat SDK',
    icon: Search,
    accent: 'from-amber-500 via-orange-600 to-red-600',
    badge: 'INSTANT DISCOVERY',
    title: 'Full-Text Message Search',
    heroKicker: 'Find anything.',
    heroHighlight: 'In milliseconds.',
    heroSuffix: '',
    subtitle: 'Blazing-fast full-text search across every message, channel and thread \u2014 with filters, faceting and typo tolerance. Built on a distributed inverted index that scales to billions of messages.',
    stats: [
      { v: '<80ms', l: 'p95 search latency' },
      { v: '10B+', l: 'Messages indexed' },
      { v: '25+', l: 'Filter dimensions' },
    ],
    benefits: [
      { icon: Search, t: 'Full-text search', d: 'Search message bodies, filenames and channel names in a single query.' },
      { icon: FileText, t: 'File & attachment search', d: 'OCR + text extraction on PDFs, images and documents.' },
      { icon: ListChecks, t: 'Rich filters', d: 'Filter by channel, sender, date range, has-attachment, mention, and more.' },
      { icon: Zap, t: 'Instant results', d: 'Distributed inverted index returns results in under 100ms globally.' },
    ],
    howItWorks: [
      { t: 'Index on write', d: 'Every new message is asynchronously indexed with typo-tolerant tokens.' },
      { t: 'Query with filters', d: 'Combine free-text with structured filters for surgical precision.' },
      { t: 'Highlight matches', d: 'Results include highlighted snippets with matched terms.' },
      { t: 'Rank by relevance', d: 'BM25 + recency + interaction signals surface the best result first.' },
    ],
    code: {
      lang: 'JavaScript',
      snippet: `const { results } = await kt.search.messages({
  query: 'contract renewal',
  limit: 20,
})

const { results } = await kt.search.messages({
  query: 'invoice',
  filters: {
    channelId: 'support',
    senderId: 'user_ada',
    hasAttachment: true,
    from: '2025-01-01',
    to: '2025-12-31',
  },
  sort: 'relevance',
})`,
    },
    useCases: [
      { t: 'Customer support', d: 'Retrieve historical conversations instantly during a live ticket.' },
      { t: 'Compliance & audit', d: 'Discovery queries with date-range and sender filters, all logged.' },
      { t: 'Knowledge retrieval', d: 'Turn team chat into a searchable second brain.' },
    ],
    faq: [
      { q: 'Is search encrypted at rest?', a: 'Yes. The index is stored encrypted with AES-256 and access is scoped to your workspace. Optional BYOK is available for Enterprise plans.' },
      { q: 'Can I search inside PDFs and images?', a: 'Yes. OCR and text extraction run automatically on uploaded documents and images so their contents are searchable.' },
      { q: 'Are there per-channel search permissions?', a: 'Yes. Search respects channel membership and role-based access, so users only see results they\u2019re allowed to read.' },
    ],
    related: ['reactions-threads', 'mentions-presence', 'recording-playback'],
  },

  'noise-suppression': {
    slug: 'noise-suppression',
    category: 'Call SDK',
    icon: Volume2,
    accent: 'from-cyan-500 via-blue-600 to-indigo-700',
    badge: 'STUDIO-GRADE AUDIO',
    title: 'Noise Suppression & Echo Cancellation',
    heroKicker: 'Crystal-clear calls,',
    heroHighlight: 'anywhere your users are.',
    heroSuffix: '',
    subtitle: 'Neural noise suppression removes background chatter, keyboard clatter, dogs barking, traffic and wind \u2014 leaving only human voice. Full-duplex echo cancellation for seamless conversations.',
    stats: [
      { v: '-40dB', l: 'Noise attenuation' },
      { v: '48kHz', l: 'Studio-grade sampling' },
      { v: '10ms', l: 'End-to-end latency' },
    ],
    benefits: [
      { icon: Volume2, t: 'Neural noise removal', d: 'Deep learning models isolate voice from any background environment.' },
      { icon: Radio, t: 'Full-duplex echo cancel', d: 'Both parties can talk simultaneously without cutouts or feedback.' },
      { icon: Mic, t: 'Auto gain control', d: 'Normalises loud and quiet speakers automatically.' },
      { icon: Zap, t: 'On-device processing', d: 'Runs in the browser and on mobile \u2014 no server round-trip.' },
    ],
    howItWorks: [
      { t: 'Capture the mic', d: 'The SDK grabs the raw audio stream via WebRTC.' },
      { t: 'Denoise on device', d: 'A tiny neural network processes each frame in under 10ms.' },
      { t: 'Cancel echo', d: 'Full-duplex AEC removes the far-end signal from the near-end mic.' },
      { t: 'Encode & transmit', d: 'Opus at 48kHz sends studio-grade audio to remote participants.' },
    ],
    code: {
      lang: 'JavaScript',
      snippet: `const call = await kt.calls.create({
  type: 'video',
  participants: ['agent_sara'],
  audio: {
    noiseSuppression: 'aggressive',
    echoCancellation: true,
    autoGainControl: true,
  },
})

await call.updateAudio({
  noiseSuppression: 'off',
})`,
    },
    useCases: [
      { t: 'Field agents', d: 'Insurance and support reps calling from noisy sites still sound crisp.' },
      { t: 'Telehealth', d: 'Doctors can rely on clean audio even when patients call from coffee shops.' },
      { t: 'Remote work', d: 'Home offices with pets, kids and traffic sound like studios.' },
    ],
    faq: [
      { q: 'Will noise suppression add latency?', a: 'The neural denoiser adds under 10ms of end-to-end latency \u2014 imperceptible to the human ear.' },
      { q: 'Does it work on mobile?', a: 'Yes. Optimised inference runs on Apple Silicon and Android NNAPI, so battery life is preserved.' },
      { q: 'Can I ship my own model?', a: 'Enterprise customers can bring a custom audio processing pipeline and register it as a plugin in the SDK.' },
    ],
    related: ['recording-playback', 'bandwidth-adaptation', 'call-queuing'],
  },

  'recording-playback': {
    slug: 'recording-playback',
    category: 'Call SDK',
    icon: Video,
    accent: 'from-rose-500 via-red-600 to-red-700',
    badge: 'CLOUD ARCHIVE',
    title: 'Cloud Recording & Playback',
    heroKicker: 'Every call.',
    heroHighlight: 'Every meeting.',
    heroSuffix: 'Ready to review, always.',
    subtitle: 'Record 1:1, group and screen-share calls to your own cloud storage. Automatic transcripts, chapter markers and speaker labels. Perfect for compliance, training and coaching.',
    stats: [
      { v: '4K', l: 'Recording resolution' },
      { v: '100+', l: 'Languages transcribed' },
      { v: '99.99%', l: 'Playback availability' },
    ],
    benefits: [
      { icon: Cloud, t: 'Cloud & BYO storage', d: 'Store recordings in our cloud or your own S3, GCS or Azure bucket.' },
      { icon: FileText, t: 'Auto transcripts', d: 'Speaker-labelled transcripts with timestamps in 100+ languages.' },
      { icon: Play, t: 'Instant playback', d: 'HLS streaming with adaptive bitrate for zero-buffer replay.' },
      { icon: Shield, t: 'Retention controls', d: 'Configurable retention policies, legal hold and one-click purge.' },
    ],
    howItWorks: [
      { t: 'Start recording', d: 'Trigger recording via API, admin dashboard or automatically on call start.' },
      { t: 'Compose in the cloud', d: 'Streams are mixed and encoded into a single MP4 with speaker overlay.' },
      { t: 'Transcribe & index', d: 'ASR runs on the composed track for searchable transcripts.' },
      { t: 'Deliver playback', d: 'Signed URLs give scoped, time-boxed access to authorized users only.' },
    ],
    code: {
      lang: 'JavaScript',
      snippet: `const call = await kt.calls.create({ type: 'video' })

await call.recording.start({
  layout: 'grid',
  transcribe: true,
  language: 'auto',
  storage: 's3://my-bucket/recordings',
})

const rec = await call.recording.stop()
console.log(rec.playbackUrl, rec.transcript.url)`,
    },
    useCases: [
      { t: 'Compliance & KYC', d: 'Regulated industries can retain every customer conversation with retention rules.' },
      { t: 'Sales coaching', d: 'Review real customer calls with searchable transcripts and highlight reels.' },
      { t: 'Online education', d: 'Auto-record lectures with transcripts for later student review.' },
    ],
    faq: [
      { q: 'Can I record only audio?', a: 'Yes. Recordings can be audio-only, video-only or composite with any layout (grid, active speaker, custom).' },
      { q: 'How long are recordings kept?', a: 'Configurable per app or per call. Default is 90 days; Enterprise supports unlimited retention and legal hold.' },
      { q: 'Do transcripts support diarisation?', a: 'Yes. Every line is labelled with the speaker and includes millisecond-accurate timestamps.' },
    ],
    related: ['noise-suppression', 'call-queuing', 'message-search'],
  },

  'bandwidth-adaptation': {
    slug: 'bandwidth-adaptation',
    category: 'Call SDK',
    icon: Wifi,
    accent: 'from-lime-500 via-green-600 to-emerald-700',
    badge: 'NETWORK RESILIENCE',
    title: 'Adaptive Bitrate & Bandwidth Control',
    heroKicker: 'Great calls',
    heroHighlight: 'on any network.',
    heroSuffix: '',
    subtitle: 'Simulcast, SVC and adaptive bitrate combine to deliver the best possible experience on 3G, 4G, 5G, Wi-Fi and lossy corporate networks. No more \u201cyou\u2019re frozen.\u201d',
    stats: [
      { v: '3 layers', l: 'Simulcast video streams' },
      { v: '80kbps', l: 'Minimum viable video' },
      { v: 'Auto', l: 'Congestion control' },
    ],
    benefits: [
      { icon: Wifi, t: 'Simulcast + SVC', d: 'Multiple resolutions per sender \u2014 each receiver gets the best they can decode.' },
      { icon: TrendingUp, t: 'Realtime bitrate control', d: 'Congestion signals adjust bitrate every 200ms for smooth video.' },
      { icon: Signal, t: 'FEC & retransmit', d: 'Forward error correction plus selective retransmit handle packet loss.' },
      { icon: Zap, t: 'Fast switching', d: 'Layer switching happens in under 500ms when conditions change.' },
    ],
    howItWorks: [
      { t: 'Sender publishes layers', d: 'Video is encoded in 3 quality layers simultaneously via simulcast.' },
      { t: 'SFU forwards best layer', d: 'Our Selective Forwarding Unit picks the highest layer each receiver can handle.' },
      { t: 'Monitor the network', d: 'RTCP feedback signals RTT, jitter and loss every 200ms.' },
      { t: 'Adapt instantly', d: 'When conditions degrade, layers downshift to keep the call fluid.' },
    ],
    code: {
      lang: 'JavaScript',
      snippet: `await call.publish({
  video: {
    simulcast: true,
    layers: [
      { rid: 'q', maxBitrate: 150000, scale: 4 },
      { rid: 'h', maxBitrate: 500000, scale: 2 },
      { rid: 'f', maxBitrate: 1500000, scale: 1 },
    ],
  },
  audio: { redundancy: true },
})

call.on('quality:changed', ({ from, to, reason }) => {
  showToast(\`Switched \${from} \u2192 \${to} (\${reason})\`)
})`,
    },
    useCases: [
      { t: 'Global consumer apps', d: 'Users in emerging markets on 3G still get a usable video call.' },
      { t: 'Field service', d: 'Technicians on rural cell networks stay connected without dropouts.' },
      { t: 'Corporate VPN', d: 'Congested VPNs get graceful downgrades instead of frozen video.' },
    ],
    faq: [
      { q: 'What\u2019s the minimum bandwidth for a video call?', a: '80kbps for audio-only fallback, 150kbps for low-res video, 500kbps for 720p, 1.5Mbps for HD 1080p.' },
      { q: 'Do you support SVC codecs?', a: 'Yes. VP9 and AV1 SVC are supported on modern browsers and mobile devices. H.264 simulcast is used as fallback.' },
      { q: 'Is there manual bitrate control?', a: 'Yes. You can override adaptive control per-call or per-layer for specific product needs.' },
    ],
    related: ['noise-suppression', 'recording-playback', 'call-queuing'],
  },

  'call-queuing': {
    slug: 'call-queuing',
    category: 'Call SDK',
    icon: PhoneIncoming,
    accent: 'from-violet-500 via-purple-600 to-fuchsia-700',
    badge: 'INTELLIGENT ROUTING',
    title: 'Call Queuing, IVR & Transfer',
    heroKicker: 'Route every call',
    heroHighlight: 'to the right person.',
    heroSuffix: '',
    subtitle: 'Programmable call flows, IVR menus, hold music, ring groups, warm transfer and callback \u2014 with no bespoke telephony platform to run. Everything you need to build a modern contact center.',
    stats: [
      { v: 'Visual', l: 'Drag-drop flow builder' },
      { v: 'Unlimited', l: 'IVR menu levels' },
      { v: '<1s', l: 'Warm transfer time' },
    ],
    benefits: [
      { icon: PhoneIncoming, t: 'Programmable queues', d: 'Skills-based routing, priority queues and overflow rules.' },
      { icon: ListChecks, t: 'Visual IVR builder', d: 'Design multi-level menus with a drag-and-drop editor.' },
      { icon: PhoneForwarded, t: 'Warm & cold transfer', d: 'Blind or attended transfer with context preserved for the receiving agent.' },
      { icon: Clock, t: 'Callback in queue', d: 'Give callers the option to hang up and be called back when it\u2019s their turn.' },
    ],
    howItWorks: [
      { t: 'Design the flow', d: 'Build IVR menus, queues and routing rules visually or via API.' },
      { t: 'Route inbound calls', d: 'The engine picks the best agent based on skills, load and priority.' },
      { t: 'Play hold music', d: 'Custom music, voice prompts and estimated-wait announcements while queued.' },
      { t: 'Transfer with context', d: 'Metadata and history follow the call as it moves between agents.' },
    ],
    code: {
      lang: 'JavaScript',
      snippet: `await kt.callflows.create({
  name: 'support-ivr',
  steps: [
    { type: 'say', text: 'Welcome to KineTalk support.' },
    { type: 'menu', prompt: 'Press 1 for billing, 2 for technical.', options: {
      1: { queue: 'billing', priority: 'normal' },
      2: { queue: 'technical', priority: 'high' },
    }},
    { type: 'callback', afterWaitSeconds: 90 },
  ],
})

await call.transfer({
  to: 'agent_marco',
  type: 'warm',
  context: { ticketId: 'T-4821', customerTier: 'gold' },
})`,
    },
    useCases: [
      { t: 'Contact centers', d: 'Replace legacy PBX / ACD stacks with programmable, cloud-native flows.' },
      { t: 'On-call rotations', d: 'Route after-hours calls to whoever is on-call, with escalation to the next tier if unanswered.' },
      { t: 'Sales inbound', d: 'Priority-queue enterprise leads while general enquiries hold.' },
    ],
    faq: [
      { q: 'Can I integrate with my CRM?', a: 'Yes. Webhooks fire on every routing event with full context so you can enrich or divert calls in your CRM.' },
      { q: 'Is there recording during hold?', a: 'Yes. You can optionally record hold audio for compliance or coaching, gated by user consent.' },
      { q: 'Does it work with SIP trunks?', a: 'Absolutely. Bridge to any SIP trunk provider or PSTN carrier. Bring your own carrier or use ours.' },
    ],
    related: ['recording-playback', 'noise-suppression', 'mentions-presence'],
  },
}
