import Interactive from "@/components/Interactive";

const features = [
  {
    title: "Cosmic Gradients",
    body: "Layered radial and conic gradients that drift, breathe, and respond to motion. The depth you see is built from pure CSS.",
    tone: "from-cosmic-500/60 via-nebula-500/40 to-transparent",
  },
  {
    title: "Glassmorphism",
    body: "Backdrop-filtered panels with iridescent edges, soft inner highlights, and aurora borders painted by @property-driven conic gradients.",
    tone: "from-nebula-500/60 via-cosmic-500/40 to-transparent",
  },
  {
    title: "3D Tilt & Float",
    body: "Perspective-aware surfaces that lift toward the viewer, drop violet shadows, and float on a six-second cycle without a single line of JS.",
    tone: "from-cosmic-400/60 via-sky-400/40 to-transparent",
  },
  {
    title: "Shimmer & Reveal",
    body: "Text and surfaces use animated background-position and clip-path reveals so the page feels alive as it loads.",
    tone: "from-nebula-400/60 via-amber-300/40 to-transparent",
  },
];

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      {/* Cosmic background layers */}
      <div aria-hidden className="absolute inset-0 -z-30 cosmic-bg animate-gradient-pan" />
      <div aria-hidden className="absolute inset-0 -z-20 starfield" />

      {/* Floating decorative orbs */}
      <div
        aria-hidden
        className="orb pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full animate-float opacity-50 blur-2xl"
      />
      <div
        aria-hidden
        className="orb pointer-events-none absolute right-[-6rem] top-[28rem] h-80 w-80 rounded-full animate-float opacity-40 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 md:px-10 md:py-28">
        {/* Hero */}
        <section className="reveal flex flex-col items-center text-center" style={{ animationDelay: "0ms" }}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cosmic-200">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cosmic-300" />
            Mind-Blowing CSS, zero framework lock-in
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
            <span className="shimmer-text animate-shimmer">Build the web</span>
            <br />
            <span className="relative inline-block">
              that makes people
              <span
                aria-hidden
                className="halo absolute inset-0 -z-10 -m-2 rounded-2xl opacity-0 transition-opacity duration-500 hover:opacity-100 animate-spin-slow"
              />
              <span className="relative"> wonder.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-cosmic-100/90 md:text-xl">
            A playground of pure CSS effects &mdash; animated gradients, glassmorphism, aurora borders, 3D tilts, and micro-interactions. Built with Next.js, TypeScript, and Tailwind. Deployed to Vercel in one push.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#console"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-cosmic-950 transition hover:scale-[1.04] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-300"
            >
              Try the console
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-cosmic-100 transition hover:scale-[1.04] hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-300"
            >
              See the effects
            </a>
          </div>
        </section>

        {/* Feature grid */}
        <section id="features" className="flex flex-col gap-10">
          <div className="reveal" style={{ animationDelay: "120ms" }}>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              What you can do with pure CSS
            </h2>
            <p className="mt-3 max-w-2xl text-cosmic-100/80">
              Every effect below is rendered without a single animation library. Hover, focus, and scroll do all the work.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className="reveal"
                style={{ animationDelay: `${200 + index * 90}ms` }}
              >
                <article
                  className="tilt group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6 transition-transform duration-300 hover:-translate-y-2 hover:rotate-[1.5deg]"
                  style={{ transform: "perspective(900px) rotateX(0deg)" }}
                >
                  <div
                    aria-hidden
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${feature.tone} blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70`}
                  />
                  <div className="relative z-10 flex h-full flex-col gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-display text-lg text-white">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-cosmic-100/80">
                      {feature.body}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Interactive console */}
        <section id="console" className="reveal" style={{ animationDelay: "300ms" }}>
          <Interactive />
        </section>

        <footer className="reveal flex flex-col items-center gap-3 pb-12 pt-8 text-center text-sm text-cosmic-200/80" style={{ animationDelay: "400ms" }}>
          <p>
            Crafted with Next.js {`\u00b7`} TypeScript {`\u00b7`} Tailwind {`\u00b7`} ready for Vercel.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-cosmic-300/70">
            the cosmos awaits your first deploy
          </p>
        </footer>
      </div>
    </main>
  );
}