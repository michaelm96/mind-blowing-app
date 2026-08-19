"use client";

import { useMemo, useState } from "react";

const THEMES = ["void", "aurora", "inferno"] as const;
type Theme = (typeof THEMES)[number];

const DEFAULT_GREETING =
  "Welcome traveler — speak your name into the void and watch the cosmos reply.";

function greetingFor(name: string): string {
  const trimmed = name.trim();
  if (trimmed.length === 0) return DEFAULT_GREETING;
  return `Welcome ${trimmed} — the cosmos aligns for you tonight.`;
}

export default function Interactive() {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState<Theme>("void");
  const [name, setName] = useState("");

  const greeting = useMemo(() => greetingFor(name), [name]);

  function cycleTheme() {
    setTheme((current) => {
      const idx = THEMES.indexOf(current);
      return THEMES[(idx + 1) % THEMES.length];
    });
  }

  return (
    <section
      aria-label="Cosmic console"
      data-testid="console"
      className={`glass aurora-border tilt relative overflow-hidden rounded-3xl p-8 md:p-10 theme-${theme}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full orb animate-float opacity-60"
      />
      <div className="relative z-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-cosmic-300">
            interactive
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold shimmer-text animate-shimmer">
            Cosmic Console
          </h2>
        </header>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={cycleTheme}
            className="self-start rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-cosmic-100 transition hover:scale-[1.03] hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-300"
            aria-label={`Theme: ${theme}. Click to cycle.`}
          >
            <span className="mr-2 opacity-70">Theme:</span>
            <span className="font-display tracking-wide capitalize text-white">
              {theme}
            </span>
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-cosmic-300">
            Energy meter
          </p>
          <div className="flex items-center justify-between gap-4">
            <span
              data-testid="counter"
              className="font-display text-5xl font-semibold text-white tabular-nums drop-shadow-[0_0_18px_rgba(167,139,250,0.6)]"
            >
              {counter}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCounter((c) => c - 1)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:scale-105 hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-300"
              >
                Decrement
              </button>
              <button
                type="button"
                onClick={() => setCounter((c) => c + 1)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:scale-105 hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-300"
              >
                Increment
              </button>
              <button
                type="button"
                onClick={() => setCounter(0)}
                className="rounded-full border border-nebula-400/40 bg-nebula-500/20 px-4 py-2 text-sm transition hover:scale-105 hover:bg-nebula-500/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-300"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <label
            htmlFor="name-input"
            className="mb-3 block text-xs uppercase tracking-[0.25em] text-cosmic-300"
          >
            Your name
          </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Type here to greet the cosmos"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-cosmic-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-300"
          />
          <p
            data-testid="greeting"
            className="mt-4 font-display text-lg leading-snug text-cosmic-100"
          >
            {greeting}
          </p>
        </div>
      </div>
    </section>
  );
}