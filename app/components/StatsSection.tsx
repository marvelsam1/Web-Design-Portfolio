import { ScrollReveal } from "./ScrollReveal";

const metrics = [
  {
    label: "The Speed Trap",
    value: "> 3s",
    caption: "53% of users leave if a page takes over 3 seconds to load.",
  },
  {
    label: "The Design Gap",
    value: "Dated",
    caption: "If it looks dated, users assume your service is too.",
  },
  {
    label: "Conversion Void",
    value: "0%",
    caption:
      "A pretty site is useless if it doesn't guide users to 'Buy' or 'Contact.'",
  },
];

const techStack = [
  {
    title: "Strategy",
    desc: "We map your business goals to a technical blueprint.",
  },
  {
    title: "Design",
    desc: "I create a custom Figma prototype based on user psychology.",
  },
  {
    title: "Build",
    desc: "Clean, secure, and fast development on your chosen platform.",
  },
  {
    title: "Launch",
    desc: "Final QA, SEO optimization, and a seamless go-live.",
  },
];

export function StatsSection() {
  return (
    <section id="metrics" className="px-6 pb-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <ScrollReveal className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-on-surface-variant">
              The Silent Killers
            </p>
            <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
              Is your website your best employee, or a liability?
            </h2>
            <p className="max-w-xl text-base leading-8 text-on-surface-variant">
              Most websites suffer from three silent killers that destroy
              conversion rates and drive potential customers straight to your
              competitors.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <ScrollReveal key={metric.label} delay={index * 150}>
                <article className="glass-pill h-full rounded-[24px] border border-white/10 bg-surface-container-high/85 p-5 transition duration-300 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.24em] text-on-surface-variant">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                    {metric.caption}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal
          delay={400}
          className="glass-panel rounded-[32px] border border-white/10 bg-surface-container/80 p-8 shadow-[0_40px_120px_rgba(0,112,255,0.14)]"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-on-surface-variant">
            The Roadmap
          </p>
          <div className="mt-8 space-y-5">
            {techStack.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-3xl border border-white/5 bg-white/5 p-4"
              >
                <span className="mt-1 h-3 w-3 rounded-full bg-secondary shadow-[0_0_0_8px_rgba(78,222,163,0.08)]" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
