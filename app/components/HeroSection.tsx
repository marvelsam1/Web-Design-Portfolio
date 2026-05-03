import { ScrollReveal } from "./ScrollReveal";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pb-24 pt-28 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-1/2 top-44 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <ScrollReveal className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary shadow-[0_0_0_1px_rgba(176,198,255,0.12)] backdrop-blur-sm">
            Web Development & SEO for Brands
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-on-surface-variant">
              Strategic Web Development
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              You focus on your business. I’ll make sure the world finds it!
            </h1>
            <p className="max-w-2xl text-base leading-8 text-on-surface-variant sm:text-lg">
              I build easy-to-use websites that turn just looking visitors into
              paying customers. No complexity, no confusion, just results.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#work" className="action-button primary-button rounded-xl">
              View My Work
            </a>
            <a
              href="#contact"
              className="action-button secondary-button rounded-xl"
            >
              Start Your Project
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "CMS Excellence",
                value:
                  "High-performance builds on Shopify, WordPress, and Webflow.",
              },
              {
                label: "Custom Frameworks",
                value:
                  "Scalable web apps built with React, Node.js, and Laravel.",
              },
              {
                label: "Conversion SEO",
                value: "Technical optimization ensuring your site is found.",
              },
            ].map((item) => (
              <div key={item.label} className="glass-pill p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-on-surface-variant">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={300}
          className="relative flex w-full max-w-xl items-center justify-center"
        >
          <div className="glass-panel relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-surface-container-high/80 p-6 shadow-[0_40px_140px_rgba(0,112,255,0.16)] backdrop-blur-2xl sm:p-8">
            <div className="absolute -right-16 top-8 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-16 bottom-10 h-36 w-36 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-on-surface-variant">
                <span>Performance Metrics</span>
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                  Active
                </span>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl border border-primary/10 bg-surface-container/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-on-surface-variant">
                        Page Speed Score
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        99/100
                      </p>
                    </div>
                    <div className="h-14 w-14 rounded-3xl bg-primary/10 text-primary grid place-items-center text-lg font-semibold">
                      A
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-primary to-secondary animate-progress"></div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Conversion",
                      value: "89.4%",
                      accent: "secondary",
                    },
                    {
                      title: "System uptime",
                      value: "99.98%",
                      accent: "primary",
                    },
                  ].map((item) => (
                    <div key={item.title} className="glass-pill p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-on-surface-variant">
                        {item.title}
                      </p>
                      <p className="mt-2 text-xl font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
