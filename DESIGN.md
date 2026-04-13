# DESIGN.md — Ember Studios Website

## Design Philosophy
Dark-first, premium, motion-rich. Inspired by Raycast, VoltAgent, and Vercel's design language.

## Color System
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#000000` | Page background |
| `--bg-secondary` | `#0A0A0A` | Card backgrounds |
| `--bg-tertiary` | `#111111` | Section alternation |
| `--surface` | `#1A1A1A` | Elevated surfaces |
| `--border` | `#222222` | Subtle borders |
| `--border-hover` | `#333333` | Hover state borders |
| `--text-primary` | `#FAFAFA` | Headings, primary text |
| `--text-secondary` | `#A1A1A1` | Body text, descriptions |
| `--text-muted` | `#666666` | Captions, labels |
| `--accent` | `#10B981` | Emerald accent (primary CTA) |
| `--accent-hover` | `#34D399` | Hover state |
| `--accent-glow` | `rgba(16, 185, 129, 0.15)` | Glow effects |
| `--gradient-start` | `#10B981` | Gradient start |
| `--gradient-end` | `#06B6D4` | Cyan gradient end |

## Typography
- **Primary Font:** Inter (via Next.js Google Fonts)
- **Mono Font:** JetBrains Mono (code snippets)
- **Display:** Inter at 900 weight for hero headings
- **Scale:** 14/16/18/20/24/30/36/48/60/72/80/96px

## Motion Principles
1. **Purposeful** — animations guide attention, never distract
2. **Fast** — 200-400ms for transitions, 600ms for entrances
3. **Springy** — spring physics for interactive elements
4. **Staggered** — children animate in sequence (50ms offset)
5. **Respectful** — honors `prefers-reduced-motion`

## Component Library
- `Button` — Primary (emerald), Secondary (outlined), Ghost
- `Card` — Surface with border, hover glow effect
- `GradientText` — Emerald→Cyan gradient on text
- `Section` — Consistent padding and max-width
- `Badge` — Small label with accent border
- `Grid` — Responsive grid with gap system

## Layout
- Max width: 1280px (content), 1440px (hero)
- Section padding: 96px vertical (64px mobile)
- Grid: 12-col → 4-col mobile
- Breakpoints: 640/768/1024/1280px

## Homepage Sections
1. **Hero** — Full viewport, animated tagline, gradient orb background, CTA buttons
2. **Trusted By** — Logo strip of client industries
3. **Services** — 3-column grid with icons and descriptions
4. **Showcase** — Featured project cards with hover animations
5. **Process** — 4-step horizontal timeline
6. **Testimonials** — Quote cards with avatars
7. **CTA** — Final call to action with gradient background
8. **Footer** — Links, social, copyright

## SEO
- Semantic HTML5 elements
- Open Graph + Twitter Card meta tags
- Structured data (Organization, WebSite)
- Proper heading hierarchy (single H1)
- Alt text on all images
