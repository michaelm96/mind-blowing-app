# mind-blowing-app

A Next.js + TypeScript + Tailwind CSS playground showcasing mind-blowing CSS effects &mdash; animated gradients, glassmorphism, 3D tilt, aurora borders, and micro-interactions &mdash; deployed straight from a Vercel-ready repo.

## Stack

- **Next.js 14** with the App Router (`app/`)
- **TypeScript** (strict mode)
- **Tailwind CSS 3** with custom keyframes, theme tokens, and utility compositions
- **Vitest** + React Testing Library for component tests
- **next/font** for self-hosted Google Fonts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the playground.

| Script | What it does |
| ------ | ------------ |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | One-shot Vitest run |
| `npm run test:watch` | Vitest in watch mode |
| `npm run lint` | Next.js lint |

## What's on the page

1. **Hero** &mdash; Animated gradient text (shimmer), conic-gradient halo on hover, layered cosmic backdrop, floating orbs.
2. **Feature grid** &mdash; Tilt cards with hover lift, rotation, and perspective-based transforms.
3. **Cosmic Console** (`components/Interactive.tsx`) &mdash; client-side widget with a theme cycler, energy-meter counter, and a personalized greeting input.
4. **Footer** &mdash; deployment hint.

## Tailwind notes

- Custom palettes: `cosmic` (violet) and `nebula` (rose).
- Custom keyframes & animations: `gradient-pan`, `float`, `spin-slow`, `shimmer`, `fade-up` &mdash; see `tailwind.config.ts`.
- Custom CSS utilities &mdash; see `app/globals.css`:
  - `.cosmic-bg` &mdash; animated radial-gradient backdrop.
  - `.halo` &mdash; conic-gradient hover halo.
  - `.glass` &mdash; glassmorphism surface.
  - `.shimmer-text` &mdash; iridescent clipped text.
  - `.tilt` &mdash; 3D-ready surface.
  - `.aurora-border` &mdash; `@property`-driven conic border.
  - `.starfield` &mdash; star-field pseudo-elements.
  - `.orb` &mdash; glowing radial orb.
  - `.reveal` &mdash; fade-up reveal helper.
- `prefers-reduced-motion` is honored: all animations and transitions collapse to ~instant.

## Tests

`npm test` runs Vitest against the `components/__tests__/` suite. The Interactive widget is covered for:

- initial render and accessibility (`region`, headings, named buttons)
- counter happy path, negative values, and reset
- theme cycling and theme class application
- default and personalized greeting
- very long input handling

## Deploying to Vercel

This repo is Vercel-ready out of the box &mdash; no extra config.

1. Push to GitHub.
2. Import the repo in Vercel.
3. Use the framework preset **Next.js** (auto-detected).
4. (Optional) set a custom project name and domain later.

## Accessibility

- Visible focus rings on every interactive element.
- `aria-label`s on the theme button and the console region.
- `prefers-reduced-motion` collapses all motion.
- Color contrast meets WCAG AA for the cosmic/nebula palette on the deep-violet background.