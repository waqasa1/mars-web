# Mars Web — Design Specification

## Brand Identity

**Name:** Mars Web  
**Tagline:** *Beyond Earth. Beyond Ordinary.*  
**Core Values:** Attention to detail · Extraordinary page speed · SEO excellence · Cutting-edge tech

---

## Visual Identity

### Theme Direction
Deep space / exoplanet aesthetic. Not cartoonish sci-fi — think the visual tone of NASA deep-field photography meets high-end tech agency. Dark, vast, precise. The UI should feel like you're looking at something from outside the atmosphere.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--mars` | `#E8441A` | Primary brand, CTAs, active states |
| `--mars-glow` | `#FF6B35` | Hover states, glows, accents |
| `--mars-dim` | `#7A2410` | Borders on mars elements, subtle accents |
| `--space-void` | `#03050F` | Page background |
| `--space-deep` | `#080D1E` | Section backgrounds |
| `--space-surface` | `#0D1228` | Card backgrounds |
| `--space-elevated` | `#131A30` | Elevated cards, modals |
| `--star-white` | `#E8E9F3` | Primary text |
| `--star-dim` | `#8B8FA8` | Secondary / muted text |
| `--star-faint` | `#4A4E63` | Disabled, placeholder text |
| `--nebula-blue` | `#1E3A8A` | Subtle section tints |
| `--nebula-purple` | `#4C1D95` | Gradient accents |
| `--cyan` | `#22D3EE` | Highlight / tech accent |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Card borders |
| `--border-glow` | `rgba(232,68,26,0.3)` | Mars-glow borders on hover |

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero | `Syne` | 800 | `clamp(3rem, 8vw, 7rem)` |
| Section Headings | `Syne` | 700 | `clamp(2rem, 4vw, 3.5rem)` |
| Card Titles | `Syne` | 600 | `1.25rem` |
| Navigation | `Syne` | 600 | `0.875rem` |
| Body / Paragraphs | `DM Sans` | 300–400 | `1rem–1.125rem` |
| Labels / Captions | `DM Sans` | 400 | `0.8rem` |
| Code / Tech Tags | `JetBrains Mono` | 400 | `0.8rem` |

**Google Fonts import:**
```
Syne: 400, 600, 700, 800
DM Sans: 300, 400, 500
JetBrains Mono: 400
```

### Spacing Scale
```
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   40px
2xl:  64px
3xl:  96px
4xl:  160px
```

### Border Radius
```
sm:   4px    (tags, badges)
md:   8px    (buttons, inputs)
lg:   16px   (cards)
xl:   24px   (large cards, hero elements)
full: 9999px (pills)
```

---

## Background & Atmosphere

### Star Field
Generate a CSS/canvas star field on the `<body>` background:
- 3 layers of dots at different sizes (0.5px, 1px, 1.5px) and opacities (0.3, 0.5, 0.8)
- Use `background-image: radial-gradient` repetitions or a `<canvas>` layer
- Subtle parallax scroll effect (move at 0.1x scroll speed)

### Nebula Blobs
Large blurred radial gradient blobs positioned absolutely behind sections:
```css
/* Example nebula blob */
background: radial-gradient(ellipse 800px 600px at 20% 50%, rgba(76,29,149,0.12) 0%, transparent 70%);
```
Place 2–3 per major section. Colors: purple `#4C1D95`, deep blue `#1E3A8A`, faint mars `#7A2410`.

### Mars Planet Element

**Asset:** `/public/assets/mars.glb` — real Mars 3D model rendered via React Three Fiber.

**Dependencies:**
```bash
npm install three @react-three/fiber @react-three/drei
```

**Component:** `components/MarsGlobe.tsx` — client component, rendered in the hero right column.

```tsx
'use client'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function Mars() {
  const { scene } = useGLTF('/assets/mars.glb')
  const ref = useRef<any>()
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.04   // slow self-rotation
  })
  return <primitive ref={ref} object={scene} scale={2.2} />
}

export default function MarsGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ width: 'clamp(300px, 40vw, 580px)', height: 'clamp(300px, 40vw, 580px)', background: 'transparent' }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.1} color="#0D1228" />
      <directionalLight position={[-3, 2, 1]} intensity={2.5} color="#FFF3E0" />
      <pointLight position={[3, -1, -2]} intensity={0.4} color="#E8441A" />
      <Mars />
    </Canvas>
  )
}
```

**Lighting setup:**

| Light | Position | Color | Purpose |
|---|---|---|---|
| Ambient | — | `#0D1228` very dim | Barely lifts pure black shadows |
| Directional (sun) | `[-3, 2, 1]` | `#FFF3E0` warm white | Hard sunlit side, creates terminator line |
| Point (rim) | `[3, -1, -2]` | `#E8441A` mars orange | Subtle brand-color glow on dark side |

**CSS wrapper animations** applied to the `<Canvas>` parent div:
```css
.mars-wrapper {
  animation: marsFloat 6s ease-in-out infinite alternate;
  position: relative;
}

@keyframes marsFloat {
  from { transform: translateY(0px); }
  to   { transform: translateY(-24px); }
}

.mars-wrapper::before {
  content: '';
  position: absolute;
  inset: -15%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(232,68,26,0.12) 0%,
    rgba(139,42,16,0.06) 40%,
    transparent 70%
  );
  animation: marsGlow 4s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: -1;
}

@keyframes marsGlow {
  from { opacity: 0.6; transform: scale(1); }
  to   { opacity: 1;   transform: scale(1.06); }
}
```

**Suspense fallback:** Wrap `<Mars />` in `<Suspense fallback={<MarsPlaceholder />}>` so the page doesn't block while the `.glb` loads. `MarsPlaceholder` = simple blurred radial gradient div matching the globe size.

---

## Layout System

### Container
```css
max-width: 1280px;
margin: 0 auto;
padding: 0 clamp(1.5rem, 5vw, 4rem);
```

### Grid
```css
/* 12-column base */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 24px;
```

### Section Rhythm
Every section: `padding: clamp(5rem, 10vw, 9rem) 0`

---

## Components

### Navigation

**Layout:** Fixed top, full-width, `backdrop-filter: blur(20px)` with `background: rgba(3,5,15,0.8)`

**Structure:**
```
[Logo: MARS WEB]          [Home] [Services] [Portfolio] [About] [Contact]     [Get Started →]
```

**Logo:** `MARS WEB` in Syne 800. The `MARS` in `--star-white`, `WEB` in `--mars`. Small Mars circle SVG icon to the left.

**Nav links:** Syne 600, `0.875rem`, `--star-dim` default → `--star-white` hover. Underline on active via a 1px `--mars` line.

**CTA Button:**
- Background: `--mars`
- Text: white, Syne 600
- Border radius: `md`
- Padding: `10px 24px`
- Hover: `--mars-glow` + subtle glow `box-shadow: 0 0 20px rgba(232,68,26,0.4)`
- Transition: `all 0.3s ease`

**Scroll behavior:** On scroll >80px, add `border-bottom: 1px solid var(--border-subtle)`

---

### Hero Section

**Layout:** Full viewport height, centered content, Mars planet floating right

**Left content (col span 7):**
- Eyebrow label: `WE BUILD DIGITAL WORLDS` — Syne 600, 0.75rem, letter-spacing 0.2em, `--mars` color, uppercase
- H1: `Extraordinary Websites. Engineered Beyond Earth.`
  - Syne 800, `clamp(3rem, 7vw, 6.5rem)`, line-height 1.0
  - Word `Beyond Earth` on its own line, italic, `--mars` color
- Subheading: `DM Sans 300`, 1.125rem, `--star-dim`, max-width 520px
  ```
  We craft pixel-perfect web and mobile experiences 
  with obsessive attention to detail, blazing performance, 
  and SEO built to dominate search rankings.
  ```
- CTA row:
  - Primary: `Start Your Project →` (filled mars button, lg size)
  - Secondary: `View Our Work` (ghost button — transparent, 1px `--border-subtle` border, hover: `--border-glow`)
  - Gap: `16px`

**Right content (col span 5):** `<MarsGlobe />` component — the real 3D Mars `.glb` wrapped in `.mars-wrapper` for the float + atmospheric haze animations. See Mars Planet Element spec above.

---

### Hero Particle System

**Implementation:** `<canvas>` element absolutely positioned behind all hero content, full viewport size. Use `useEffect` + `requestAnimationFrame` in a `HeroParticles` client component.

**Particle types — 3 layers:**

#### Layer 1 — Ambient Dust (100–150 particles)
Small floating particles that drift slowly upward and fade.
```ts
{
  count: 120,
  size: 0.8–2px,
  color: 'rgba(232, 68, 26, 0.15–0.35)',   // faint mars
  speed: 0.1–0.3px/frame,
  direction: mostly upward + slight horizontal drift,
  opacity: random 0.1–0.4,
  fadeLoop: true   // fade out at top, respawn at bottom
}
```

#### Layer 2 — Star Sparks (60–80 particles)
Slightly larger, white/blue-tinted dots that twinkle (opacity pulse).
```ts
{
  count: 70,
  size: 1–2.5px,
  color: 'rgba(232, 233, 243, 0.4–0.9)',   // --star-white variants
  speed: 0,   // stationary, just twinkle
  twinkleSpeed: 0.005–0.02,   // opacity oscillation per frame
  twinkleMin: 0.1,
  twinkleMax: 0.9,
  distribution: 'random across canvas'
}
```

#### Layer 3 — Mars Embers (20–30 particles)
Larger glowing particles that rise from the **terminator line** of the Mars globe (the shadow edge between lit and dark side). With the directional light coming from `[-3, 2, 1]`, the terminator falls roughly on the right-center edge of the planet in screen space.

```ts
{
  count: 25,
  size: 2–5px,
  color: 'rgba(255, 107, 53, 0.5–0.8)',    // --mars-glow
  origin: {
    // Approximate screen coords — tune after MarsGlobe is placed in hero
    // Terminator line sits ~65–70% across the planet width from left
    x: 'marsGlobeLeft + marsGlobeWidth * 0.67',
    y: 'marsGlobeTop + marsGlobeHeight * 0.3 → 0.7',  // spread vertically along edge
  },
  spread: 80px radius from origin,
  speed: 0.2–0.6px/frame upward,
  trail: true,   // leave a short fading trail, ~4px length
  glowRadius: 4–8px,   // drawCircle with blur shadow
  lifespan: 120–240 frames, fade out near end
}
```

> **Note:** After `MarsGlobe` is rendered and positioned in the hero, use `getBoundingClientRect()` on the canvas wrapper to get real pixel coords, then hard-code the terminator origin. The directional light angle (`[-3, 2, 1]`) is fixed so the terminator position is consistent across screen sizes.

**Mouse parallax interaction:**
- Layers 1 and 3 subtly shift position based on mouse coordinates
- Layer 1: moves `±8px` relative to mouse (slow follow)
- Layer 3 (embers): moves `±4px` (barely, feels atmospheric)
- Use `lerp` for smooth following: `current += (target - current) * 0.05`

**Canvas setup:**
```ts
// HeroParticles.tsx
'use client'

useEffect(() => {
  const canvas = canvasRef.current
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // handle resize
  const onResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', onResize)

  // init particle layers, run animation loop
  let raf: number
  const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    updateAndDrawDust(ctx)
    updateAndDrawSparks(ctx)
    updateAndDrawEmbers(ctx)
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)

  return () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', onResize)
  }
}, [])
```

**Canvas z-index & positioning:**
```css
canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;   /* never blocks clicks */
}
/* Hero content sits on z-index: 1 */
```

**Performance notes:**
- Cap total particles at 250 across all layers
- Skip drawing particles with opacity < 0.02
- On `prefers-reduced-motion: reduce`, disable Layer 1 and 3 motion entirely — only Layer 2 twinkle stays, and even that slows to 50% speed
- Throttle resize handler with `debounce(onResize, 150)`

---

**Below hero:** Scrolling ticker / marquee strip:
```
REACT  ·  NEXT.JS  ·  NODE.JS  ·  REACT NATIVE  ·  SHOPIFY  ·  SEO  ·  DIGITAL MARKETING  ·
```
Font: JetBrains Mono, 0.8rem, `--star-dim`. Speed: 30s linear infinite. Separator: `·` in `--mars`.

---

### Services Section

**Heading:** `What We Do` — centered, with a faint `SERVICES` watermark text behind it in `--space-elevated`

**Layout:** 3-column grid on desktop, 2 on tablet, 1 on mobile

**Services list:**
1. **Web Development** — React, Next.js, Node.js. Lightning-fast, SEO-ready websites.
2. **Mobile Development** — React Native apps for iOS and Android. Native performance.
3. **SEO Optimization** — Technical SEO, Core Web Vitals, structured data. Rank higher.
4. **Digital Marketing** — Data-driven campaigns that convert traffic into revenue.
5. **Social Media Management** — Brand storytelling across all platforms.
6. **Shopify Development** — Custom storefronts and e-commerce solutions.

**Service Card Design:**
```
┌────────────────────────────────┐
│  [Icon — SVG, 40x40, --mars]   │
│                                │
│  Service Name                  │  ← Syne 600, 1.1rem, --star-white
│  Short description             │  ← DM Sans 300, 0.9rem, --star-dim
│                                │
│  [tag1] [tag2]                 │  ← JetBrains Mono pills
└────────────────────────────────┘
```

**Card styles:**
- Background: `--space-surface`
- Border: `1px solid var(--border-subtle)`
- Border radius: `lg`
- Padding: `32px`
- Hover: border → `--border-glow`, subtle `translateY(-4px)` lift
- Transition: `all 0.3s ease`

**Tech tags (pills):**
- Background: `rgba(232,68,26,0.1)`
- Color: `--mars`
- Font: JetBrains Mono 0.75rem
- Border: `1px solid rgba(232,68,26,0.2)`
- Border radius: `full`
- Padding: `3px 10px`

---

### Why Us / Value Props Section

**Background:** Slightly lighter — `--space-deep` with nebula blob

**Layout:** 2-column — left is a large statement, right is 4 value items stacked

**Left statement:**
```
We don't build websites.
We build growth engines.
```
Syne 800, large. Below it: 2–3 sentences about philosophy.

**Right — 4 value items, each:**
- A number `01` `02` `03` `04` in `--mars`, Syne 700, large
- A short bold title
- 1 line description in `--star-dim`
- Thin `1px` horizontal line separator

**Values:**
1. `Obsessive Attention to Detail` — Every pixel, every interaction, crafted with intention.
2. `Extraordinary Page Speed` — Sub-second load times. 100/100 Lighthouse scores.
3. `SEO-First Architecture` — Built to rank from day one, not retrofitted later.
4. `Transparent Communication` — You're never left wondering about your project.

---

### Portfolio Section

**Heading:** `Our Work` — left-aligned with a `→ View All` link to the right

**Layout:** Masonry-style or alternating full/half grid

**Projects:**

#### 1. Accend Fitness
- **URL:** https://accend-fitness.vercel.app/
- **Category:** Web Development · React
- **Description:** A performance fitness platform with blazing speed and seamless UX.
- **Image:** `/assets/accend-fitness.png` — full card cover

#### 2. Mars Web (Software Company Site)
- **URL:** https://software-company-eight.vercel.app/
- **Category:** Web Development · Next.js
- **Description:** A sleek software company landing page built to convert.
- **Image:** `/assets/software-company.png`

#### 3. Asaan Qurbani
- **URL:** https://asaan-qurbani.vercel.app/en
- **Category:** Web App · Shopify · Next.js
- **Description:** Multilingual Qurbani booking platform with a smooth checkout flow.
- **Image:** `/assets/asaan-qurbani.png`

**Portfolio Card Design:**
```
┌──────────────────────────────────┐
│                                  │
│   [Screenshot / Image]           │  ← object-fit: cover, aspect-ratio 16/10
│                                  │
├──────────────────────────────────┤
│  [Category pill]                 │
│  Project Name                    │  ← Syne 600, 1.1rem
│  Short description               │  ← DM Sans, --star-dim
│  [View Project ↗]                │  ← --mars color, hover underline
└──────────────────────────────────┘
```

**Card hover behavior:**
- Image: `scale(1.04)` with `overflow: hidden`
- Overlay: `rgba(3,5,15,0.3)` fades in
- Card border: `--border-glow`

**Image placeholder (if screenshot not yet added):**
- Use a dark gradient `linear-gradient(135deg, --space-elevated, --nebula-blue)`
- Overlay: project initials in Syne 800, large, `--star-dim`

---

### Testimonials Section

**Heading:** `What Our Clients Say`

**Layout:** Horizontal scroll on mobile, 3-column grid on desktop

**Card Design:**
```
┌──────────────────────────────────┐
│  ★ ★ ★ ★ ★                       │  ← --mars color stars
│                                  │
│  "Quote text here, describing    │
│   the experience with Mars Web   │
│   and what impact it had."       │  ← DM Sans 300 italic, --star-white
│                                  │
│  ─────────────────────────────   │
│  [Avatar]  Name                  │  ← Syne 600
│            Role, Company         │  ← DM Sans, --star-dim, 0.85rem
└──────────────────────────────────┘
```

**Card styles:**
- Background: `--space-surface`
- Border: `1px solid var(--border-subtle)`
- Border radius: `lg`
- Padding: `32px`
- Quote mark: Large `"` in `--mars`, Syne 800, ~80px, positioned top-left, `opacity: 0.4`

**Avatar:** 40x40 circle, initials fallback, `background: --mars-dim`

**Placeholder testimonials** (replace with real ones):
1. *"Mars Web transformed our online presence. Page speed went from 45 to 98 on Lighthouse. Incredible work."* — Ahmed R., Founder, Accend Fitness
2. *"They understood our vision immediately. The attention to detail in every component was unlike anything we'd seen."* — Sara M., E-commerce Manager
3. *"Our SEO rankings jumped within weeks of launch. These guys build for performance from the ground up."* — Tariq H., CEO, Local Business

---

### Tech Stack Section

**Heading:** `Built With The Best`

**Layout:** Centered, single row of logos/icons with labels below

**Technologies to show:**
- React
- Next.js
- Node.js
- React Native
- Shopify
- TypeScript
- Tailwind CSS
- Vercel

**Design:** Each tech as a card-pill — icon + name. Monochrome icons, `--star-dim` → `--star-white` on hover. Subtle `border: 1px solid var(--border-subtle)`, `border-radius: md`, `padding: 12px 20px`.

**Layout:** Flex wrap, centered, `gap: 12px`

---

### Contact Section

**Background:** `--space-void` with large Mars glow behind the form

**Heading:** 
```
Ready to Launch
Your Project?
```
Syne 800, centered. Below: short subtext in `--star-dim`.

**Two-column layout:**
- Left (col 5): Contact info + social links
- Right (col 7): Contact form

**Left — Contact Info:**
```
📍  Based in Pakistan. Working Globally.

✉️  marsweb321@gmail.com
    [Click to copy] or [mailto link]

💬  WhatsApp: +92 320 4402790
    [Chat on WhatsApp →]   ← links to wa.me/923204402790
```

Icons: SVG icons in `--mars`. Each item: flex row, `gap: 12px`. 

**Right — Contact Form:**

Fields:
- Full Name (text input)
- Email Address (email input)
- Service Interested In (select dropdown — options: Web Development, Mobile App, SEO, Digital Marketing, Social Media, Shopify, Other)
- Project Brief (textarea, 4 rows)

**Submit CTA:** `Send Message via WhatsApp →`

**Form submission behavior:**
```js
// Build WhatsApp message from form data
const message = encodeURIComponent(
  `Hi Mars Web!\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Brief:\n${message}`
);
window.open(`https://wa.me/923204402790?text=${message}`, '_blank');
```

**Input styles:**
```css
background: var(--space-surface);
border: 1px solid var(--border-subtle);
border-radius: var(--md);
padding: 14px 16px;
color: var(--star-white);
font-family: var(--font-body);
transition: border-color 0.2s;

&:focus {
  border-color: var(--mars);
  outline: none;
  box-shadow: 0 0 0 3px rgba(232,68,26,0.1);
}
```

---

### Footer

**Layout:** 4-column grid + bottom bar

**Column 1 — Brand:**
- Logo: `MARS WEB` with icon
- Tagline: *Beyond Earth. Beyond Ordinary.*
- Social links: Instagram, LinkedIn, GitHub — SVG icons, `--star-dim` → `--star-white`

**Column 2 — Services:**
- Web Development
- Mobile Development
- SEO Optimization
- Digital Marketing
- Social Media Management
- Shopify Development

**Column 3 — Company:**
- Home
- Portfolio
- About Us
- Contact

**Column 4 — Contact:**
- marsweb321@gmail.com
- +92 320 4402790
- WhatsApp CTA button

**Bottom bar:**
```
© 2025 Mars Web. All rights reserved.          Built with ❤️ beyond Earth.
```
Border top: `1px solid var(--border-subtle)`. Text: `--star-faint`, `0.8rem`.

---

## Pages

### `/` — Home
Sections in order:
1. Navigation
2. Hero
3. Tech Stack ticker
4. Services
5. Why Us / Value Props
6. Portfolio (3 featured projects)
7. Testimonials
8. Contact
9. Footer

### `/portfolio` — Portfolio
- Full portfolio grid, all projects
- Filter tabs: All · Web · Mobile · Shopify · SEO
- Each card links to live project (new tab)
- Add a "Your Project Could Be Here" CTA card at the end

### `/services` — Services
- Each service gets a full section with expanded description
- Show relevant tech stack for each service
- CTA to contact at the bottom

---

## Loading Screen

### Concept
**"Mars Coming Into View"** — The screen starts in total darkness. A glowing Mars planet slowly materializes from the void as a circular progress arc fills around it. Once complete, the loader exits and the hero fades in. Fast, cinematic, on-brand.

### Duration Breakdown
```
0.0s – 0.3s   Fade in: logo text + dark background appear
0.3s – 1.6s   Mars planet scales in + progress arc animates 0° → 360°
1.6s – 1.8s   Brief hold at 100% — Mars glows brighter
1.8s – 2.0s   Exit: entire loader fades out + scales up slightly (feels like launching through it)
2.0s+         Hero section entrance begins (staggered text reveal)
```

### Visual Layout
```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│              [Progress Arc]                 │
│           ┌─────────────┐                  │
│           │             │                  │
│           │  Mars Planet│                  │
│           │   Sphere    │                  │
│           │             │                  │
│           └─────────────┘                  │
│                                             │
│              MARS WEB                       │  ← Syne 800, letter-spacing 0.3em
│        Preparing for launch...              │  ← DM Sans 300, --star-dim
│                                             │
└─────────────────────────────────────────────┘
```

**Background:** `--space-void` (`#03050F`), full screen, `position: fixed`, `z-index: 9999`

**A few ambient star particles** from the hero particle system — reuse the Layer 2 twinkle-only sparks at low opacity so the screen isn't completely dead.

---

### Mars Planet (Loader)

Use the same `<MarsGlobe />` component from the hero — **not** a CSS circle. This way the loader and hero use an identical Mars, making the transition feel seamless (same model, same lighting, just smaller).

**Loader canvas size:** `140×140px` — smaller than the hero but enough to show real surface detail.

```tsx
// Inside LoadingScreen.tsx
<div className="loader-planet-wrapper" style={{ width: 140, height: 140, position: 'relative' }}>
  <Canvas
    camera={{ position: [0, 0, 4], fov: 45 }}
    style={{ width: 140, height: 140, background: 'transparent' }}
    gl={{ alpha: true }}
  >
    <ambientLight intensity={0.1} color="#0D1228" />
    <directionalLight position={[-3, 2, 1]} intensity={2.5} color="#FFF3E0" />
    <pointLight position={[3, -1, -2]} intensity={0.4} color="#E8441A" />
    <Suspense fallback={null}>
      <LoaderMars rotationSpeed={0.06} />  {/* slightly faster than hero */}
    </Suspense>
  </Canvas>
</div>
```

```tsx
// LoaderMars — same as Mars component but accepts rotationSpeed prop
function LoaderMars({ rotationSpeed = 0.04 }) {
  const { scene } = useGLTF('/assets/mars.glb')
  const ref = useRef<any>()
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * rotationSpeed
  })
  return <primitive ref={ref} object={scene} scale={2.2} />
}
```

**Entrance animation** on the wrapper div:
```css
.loader-planet-wrapper {
  animation: planetPulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes planetPulse {
  0%   { transform: scale(0.3); opacity: 0; }
  60%  { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1);   opacity: 1; }
}
```

**Atmospheric haze** — absolutely positioned behind the canvas:
```css
.loader-planet-wrapper::before {
  content: '';
  position: absolute;
  inset: -30%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,68,26,0.18) 0%, transparent 70%);
  animation: loaderGlow 1.5s ease-in-out infinite alternate;
  z-index: -1;
}

@keyframes loaderGlow {
  from { opacity: 0.5; transform: scale(0.95); }
  to   { opacity: 1;   transform: scale(1.05); }
}
```

**At 100% progress** — intensify the haze before exit:
```css
.loader-planet-wrapper.complete::before {
  background: radial-gradient(circle, rgba(232,68,26,0.4) 0%, transparent 70%);
  transition: background 0.2s ease;
}
```

---

### Progress Arc (SVG)

Wrap the planet in an SVG ring. Use `stroke-dasharray` / `stroke-dashoffset` to animate the arc filling clockwise.

```tsx
// LoadingScreen.tsx
const RADIUS = 72        // slightly larger than planet (60px half)
const CIRCUMFERENCE = 2 * Math.PI * RADIUS   // ≈ 452px

<svg width="160" height="160" style={{ position: 'absolute', inset: 0 }}>
  {/* Background track */}
  <circle
    cx="80" cy="80" r={RADIUS}
    fill="none"
    stroke="rgba(255,255,255,0.05)"
    strokeWidth="1.5"
  />
  {/* Animated fill arc */}
  <circle
    cx="80" cy="80" r={RADIUS}
    fill="none"
    stroke="url(#arcGradient)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeDasharray={CIRCUMFERENCE}
    strokeDashoffset={CIRCUMFERENCE * (1 - progress)}  // progress: 0 → 1
    transform="rotate(-90 80 80)"   // start from top
    style={{ transition: 'stroke-dashoffset 0.05s linear' }}
  />
  <defs>
    <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#E8441A" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#FF6B35" stopOpacity="1" />
    </linearGradient>
  </defs>
</svg>
```

**Progress value:** Driven by a `useEffect` timer — not tied to actual network load (too unpredictable). Simulate with eased increments:
```ts
// Fills fast at first, slows near end (feels natural)
// 0→70% in 0.8s, 70→100% in 0.5s
const easeProgress = (t: number) =>
  t < 0.7 ? t / 0.7 * 0.7 : 0.7 + ((t - 0.7) / 0.3) * 0.3
```

A small glowing dot trails the arc tip:
```tsx
// Dot at the leading edge of the arc
const angle = progress * 360 - 90  // degrees, offset to start at top
const dotX = 80 + RADIUS * Math.cos((angle * Math.PI) / 180)
const dotY = 80 + RADIUS * Math.sin((angle * Math.PI) / 180)

<circle cx={dotX} cy={dotY} r="3" fill="#FF6B35"
  style={{ filter: 'drop-shadow(0 0 4px #FF6B35)' }} />
```

---

### Text Elements

**Logo text:** `MARS WEB`
- Font: Syne 800, `1.1rem`, letter-spacing `0.35em`
- `MARS` in `--star-white`, `WEB` in `--mars`
- Fades in at `0.2s` delay

**Status line:** Cycles through phrases as progress fills:
```ts
const statusMessages = [
  'Initializing orbit...',
  'Calibrating systems...',
  'Preparing for launch...',
  'Almost there...',
  'Ready for takeoff.',
]
// Switch message at ~20%, 40%, 65%, 90% progress
```
- Font: DM Sans 300, `0.8rem`, `--star-dim`, letter-spacing `0.1em`
- Each message fades in/out with `opacity` transition `0.3s`

---

### Exit Animation

When progress hits 100% and the 200ms hold completes:

```css
@keyframes loaderExit {
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.08); }
}

.loader-exiting {
  animation: loaderExit 0.25s ease-in forwards;
  pointer-events: none;
}
```

After animation ends, set `display: none` and trigger hero entrance.

---

### Component Structure

```
/components/LoadingScreen/
  LoadingScreen.tsx     ← main component, manages progress state
  LoaderPlanet.tsx      ← Mars sphere div
  LoaderArc.tsx         ← SVG progress ring
  loader.module.css     ← or use Tailwind + inline styles
```

**`LoadingScreen.tsx` integration in `layout.tsx`:**
```tsx
// app/layout.tsx
const [loaded, setLoaded] = useState(false)

return (
  <>
    {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
    <main style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease 0.1s' }}>
      {children}
    </main>
  </>
)
```

**`onComplete` callback:** called when exit animation finishes — triggers hero staggered entrance.

---

### Reduced Motion Fallback

```css
@media (prefers-reduced-motion: reduce) {
  /* Skip planet scale-in and arc animation entirely */
  /* Show loader for 1s then immediately fade out */
  .loader-planet { transform: scale(1); opacity: 1; }
  .loader-arc { display: none; }
}
```

---

## Animation Guidelines

### Principles
- Purposeful, not decorative
- Entrances: `fadeInUp` (translateY 20px → 0, opacity 0 → 1)
- Duration: 0.5s–0.8s, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Use `IntersectionObserver` to trigger on scroll

### Key Animations

**Hero text:** Staggered entrance — eyebrow (0s), H1 line 1 (0.1s), H1 line 2 (0.2s), sub (0.3s), CTAs (0.4s)

**Mars planet:** Slow float — `transform: translateY(0px) → translateY(-20px)`, 6s ease-in-out infinite alternate

**Service cards:** Stagger on scroll — each card delays `index * 0.08s`

**Portfolio cards:** Same stagger pattern

**Stats / numbers:** Count-up animation when entering viewport

**Marquee ticker:** CSS `@keyframes scroll` infinite, pause on hover

### Hover Micro-interactions
- All cards: `translateY(-4px)` + border glow
- CTA buttons: glow expand + slight scale `1.02`
- Nav links: underline slide in from left
- Portfolio images: `scale(1.04)` on image, overlay fade

---

## Assets Structure

```
/public
  /assets
    mars.glb                 ← 3D Mars model (React Three Fiber)
    /portfolio
      accend-fitness.png       ← screenshot, ideally 1200×750px
      software-company.png
      asaan-qurbani.png
    /icons
      mars-logo.svg
      service-icons/
        web.svg
        mobile.svg
        seo.svg
        marketing.svg
        social.svg
        shopify.svg
    og-image.png               ← 1200×630, for social sharing
    favicon.ico
```

---

## SEO & Meta

```html
<title>Mars Web — Extraordinary Web & Mobile Development</title>
<meta name="description" content="Pakistan-based software house specializing in React, Next.js, React Native, and Shopify development. Obsessive attention to detail, extraordinary page speed, and SEO-first builds." />

<!-- Open Graph -->
<meta property="og:title" content="Mars Web — Beyond Earth. Beyond Ordinary." />
<meta property="og:image" content="/assets/og-image.png" />
<meta property="og:type" content="website" />

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@type": "LocalBusiness",
  "name": "Mars Web",
  "email": "marsweb321@gmail.com",
  "telephone": "+923204402790",
  "description": "Software house specializing in web, mobile, SEO and digital marketing.",
  "serviceType": ["Web Development", "Mobile Development", "SEO", "Digital Marketing"]
}
</script>
```

---

## Next.js Project Notes

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with custom CSS variables extending the palette above
- **3D / Mars Globe:** `three`, `@react-three/fiber`, `@react-three/drei` — client components only
- **Animations:** Framer Motion for entrance animations, CSS for continuous loops
- **Icons:** Lucide React or custom SVGs
- **Form:** React Hook Form, WhatsApp deep link on submit
- **Fonts:** `next/font/google` — Syne + DM Sans + JetBrains Mono
- **Images:** `next/image` with `priority` on hero, `lazy` elsewhere
- **Performance targets:** Lighthouse 95+ on all pages, LCP < 1.5s
- **R3F note:** Add `transpilePackages: ['three']` to `next.config.js` and mark all R3F components as `'use client'`
