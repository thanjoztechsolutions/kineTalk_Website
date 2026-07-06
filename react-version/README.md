# KineTalk — React.js Website

A futuristic, glass-morphism, enterprise CPaaS marketing site for **KineTalk** — built in **pure React.js** with Vite, TailwindCSS, Framer Motion and Lucide icons.

## Quick start

```bash
cd react-version
npm install         # or yarn
npm run dev         # dev server at http://localhost:5173
npm run build       # production build in /dist
```

## Tech

- **React 18** (pure, no Next.js)
- **Vite 6** (blazing dev server + build)
- **TailwindCSS 3** (utility-first CSS)
- **Framer Motion** (scroll-reveal, entrance, floats)
- **Lucide React** (icons)
- **Google Fonts** – Space Grotesk + Inter

## Structure

```
react-version/
├── index.html               # HTML shell, fonts, favicon
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx             # React entry
    ├── index.css            # Tailwind + glass utilities + aurora animations
    ├── App.jsx              # The full website (Hero, AI, Devs, Pricing, FAQ…)
    └── components/ui.jsx    # Tiny Button / Badge / Accordion primitives
```

## Sections included

Nav · Hero (interactive glass dashboard) · Social proof marquee · Feature grid (8 SDKs) · AI orbit visualization · Developer code tabs (Node / Python / React / Go / Swift) · Architecture stack · Industries · Why KineTalk · Admin dashboard preview · Pricing · Testimonials · FAQ accordion · Aurora CTA · Footer.

## Design system

- **Colors** – Electric Blue `#3b82f6`, Royal Purple `#8b5cf6`, Cyan `#22d3ee`
- **BG** – `#05060f` dark canvas + animated aurora blobs + grid pattern
- **Radius** – `rounded-2xl` → `rounded-3xl` glass panels
- **Effects** – backdrop-blur 20-28px, saturate 180%, soft glows
- **Typography** – Space Grotesk (display) + Inter (body), tight tracking
- **Motion** – aurora, float, marquee, spin-slow, shimmer, pulse-ring, gradient-x, scroll reveal

## Deploy anywhere

`npm run build` produces a static `/dist` folder that you can host on Vercel, Netlify, Cloudflare Pages, S3, GitHub Pages — any static host.
