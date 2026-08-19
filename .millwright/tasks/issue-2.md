# You are implementing a single GitHub issue inside this repo. Do exactly what is described, nothing more.

      # The Issue

      **Title:** setup

      **Body:**
      create a webpage using next.js, with mind-blowing css that makes anyone wonder how the website get created, and later will be deployed to vercel

      # Requirements Analysis (from the upstream Requirements Agent)

      {
  "edgeCases": [
    "Users with prefers-reduced-motion enabled should not experience disorienting animations — disable/simplify Tailwind animations and custom keyframes",
    "Performance on low-end devices and slow networks — heavy CSS animations and transitions can cause jank; consider will-change and reduced animation counts",
    "Browser compatibility — ensure advanced CSS features (e.g., backdrop-filter, custom properties, CSS Grid) degrade gracefully in older browsers; Tailwind's browser support baseline applies",
    "Layout breaks when content is shorter or longer than expected (overflow, clipping) — use min-h-screen, overflow-hidden, and forgiving containers",
    "Font loading failures or FOIT/FOUT issues with custom typography loaded via next/font",
    "Color contrast and accessibility for users with visual impairments — verify Tailwind color palette combinations meet WCAG contrast",
    "Touch device behavior — hover-only effects must have touch-friendly fallbacks (e.g., active: and focus: Tailwind variants)",
    "Interactive elements (buttons, forms) must remain usable under keyboard navigation and screen readers — provide visible focus rings and ARIA labels",
    "Tailwind purging (content scanning) must include all template files; missing globs in tailwind.config can silently drop classes in production builds"
  ],
  "riskLevel": "low",
  "requirements": [
    "Initialize a Next.js project in the repository root (mind-blowing-app)",
    "Use Next.js with the App Router (app/ directory) as the routing paradigm",
    "Use TypeScript for the project (with proper tsconfig.json and type safety)",
    "Use Tailwind CSS as the styling framework (configure tailwind.config and PostCSS)",
    "Create visually stunning, mind-blowing CSS effects (animations, gradients, transforms, scroll effects, micro-interactions) using Tailwind utility classes and additional CSS where needed",
    "Build a homepage/landing page that serves as a generic showcase of the design capabilities (no specific product or portfolio domain)",
    "Include interactive elements on the page (buttons with state, toggles, form inputs, or other interactive widgets) on top of the visual showcase",
    "Ensure the project structure is compatible with Vercel deployment (zero-config ready); custom domain/project name will be configured later",
    "Make the design responsive across mobile, tablet, and desktop breakpoints via Tailwind responsive utilities",
    "Use sensible default brand colors, typography, and design treatment (no specific brand guidelines provided)",
    "Add proper metadata, fonts (e.g., next/font), and assets for a polished look",
    "Include a README documenting setup, dev, build, and deployment commands"
  ],
  "openQuestions": [],
  "securityRisks": [
    "Minimal security surface since this is a static landing page with no backend or user input storage",
    "Risk of exposing sensitive env variables if improperly configured during Vercel deployment — ensure .env files are gitignored",
    "Supply chain risk from third-party npm packages (Next.js, Tailwind, typography plugins, any animation libraries) — pin versions and audit dependencies",
    "Potential XSS if user-generated content is later added (e.g., form inputs extended) — sanitize inputs when extending functionality",
    "Ensure .gitignore properly excludes node_modules, .next, .env*, and build artifacts to avoid leaking them to the repository",
    "Tailwind CDN or untrusted plugin use could inject unexpected CSS — install only official Tailwind packages and respected plugins"
  ],
  "filesToNotTouch": [],
  "acceptanceCriteria": [
    "Repository contains a valid Next.js project with package.json, next.config, tsconfig.json, and app/ directory (App Router)",
    "Project is written in TypeScript (.tsx/.ts files) with no JavaScript-only configuration files (jsconfig.json not used)",
    "Tailwind CSS is installed and configured: tailwind.config.ts (or .js), postcss.config.js, and Tailwind directives imported in app/globals.css",
    "npm install (or pnpm/yarn) succeeds without errors",
    "npm run dev starts the development server and the page loads in the browser",
    "npm run build completes successfully producing a production-ready build",
    "The rendered page displays mind-blowing CSS effects (e.g., animated gradients, hover transitions, scroll-triggered animations, 3D transforms) using Tailwind utilities and complementary CSS",
    "The page includes interactive elements (buttons with state, toggles, form inputs, or similar interactive widgets) that respond to user input",
    "Layout is responsive and renders correctly on mobile, tablet, and desktop viewport sizes via Tailwind responsive breakpoints",
    "Project is ready to be deployed to Vercel without additional configuration (custom domain or project name to be configured later)",
    "README.md is updated with project description, setup instructions, Tailwind usage notes, and deployment guidance"
  ],
  "filesLikelyToCreate": [
    {
      "path": "package.json",
      "reason": "Next.js project manifest declaring dependencies (next, react, react-dom, typescript, tailwindcss, postcss, autoprefixer, @types/*) and scripts (dev, build, start, lint)"
    },
    {
      "path": "next.config.mjs",
      "reason": "Next.js configuration file (ESM) required for App Router build/runtime customization"
    },
    {
      "path": "tsconfig.json",
      "reason": "TypeScript configuration with Next.js-recommended settings and path aliases"
    },
    {
      "path": "tailwind.config.ts",
      "reason": "Tailwind CSS configuration defining content globs, theme extensions (colors, fonts, animations), and any plugins"
    },
    {
      "path": "postcss.config.js",
      "reason": "PostCSS configuration to enable Tailwind CSS and Autoprefixer pipelines"
    },
    {
      "path": "app/layout.tsx",
      "reason": "Root layout for the App Router: fonts (next/font), metadata, and global Tailwind import"
    },
    {
      "path": "app/page.tsx",
      "reason": "Landing page entry point showcasing mind-blowing CSS effects and interactive elements"
    },
    {
      "path": "app/globals.css",
      "reason": "Global stylesheet with Tailwind @tailwind directives (base, components, utilities) plus any custom keyframes/utilities"
    },
    {
      "path": "components/Interactive.tsx",
      "reason": "Client component(s) implementing interactive elements (buttons with state, toggles, form inputs) as requested"
    },
    {
      "path": ".gitignore",
      "reason": "Ignore node_modules, .next, .env*, and other build artifacts"
    },
    {
      "path": "public/",
      "reason": "Static assets directory for images, fonts, and SVG illustrations used by the showcase"
    }
  ],
  "filesLikelyToModify": [
    {
      "path": "README.md",
      "reason": "Update the existing minimal README to document the Next.js App Router + TypeScript + Tailwind project, setup, scripts, and Vercel deployment instructions"
    }
  ]
}

      # Hard Rules

      - Make minimal changes. Edit only files needed to implement the requirement.
      - Do NOT commit. The harness will commit.
      - Run `npm typecheck` and `npm test` before you finish. Both MUST pass.
      - Add tests covering the new behavior. For every behavior change, write tests for:
          • Happy path — the main user journey
          • Boundary values — empty, zero, negative, max, min, very long
          • Type coercion — string vs number, NaN, undefined, null, empty array, mixed
          • Failure modes — invalid input, missing auth, expired session, network timeout
          • Concurrency / race conditions — two requests at the same time, mid-operation interruption
          • State transitions — before, during, after; partial state; rollback
          • Idempotency — calling twice produces the same result; replay protection
          • Auth boundaries — anonymous, wrong role, scope mismatch, token expiry
          • Encoding — Unicode, emoji, special characters, very long strings
          • Error propagation — does the error bubble up, or get swallowed?
        For each test, ask: "What would a careless or adversarial user do to break this?" A real user hitting a non-obvious bug should make the suite fail.
      - If you cannot make both pass in 40 tool turns, stop and explain what's blocking you.
      - Keep the diff small. Resist scope creep.