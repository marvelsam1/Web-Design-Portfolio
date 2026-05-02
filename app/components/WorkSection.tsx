import { ScrollReveal } from "./ScrollReveal";

const workItems = [
  {
    title: "Connectly — Networking Ecosystem",
    description:
      "Reduced user friction by 60% through intuitive UI/UX and a React Native frontend.",
    tags: ["UI/UX", "React Native", "App"],
    accent: "primary",
  },
  {
    title: "Aderoju Energy — Corporate Platform",
    description:
      "Established a premium digital presence for a B2B energy leader, resulting in a 25% increase in lead inquiries.",
    tags: ["B2B", "Corporate", "Lead Gen"],
    accent: "secondary",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="px-6 pb-24 pt-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <ScrollReveal className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-on-surface-variant">
            The Proof
          </p>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Case studies of digital platforms that actually convert.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-on-surface-variant">
            Real results from real businesses. See how strategic design and
            robust engineering can transform your digital presence.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 150}>
              <article className="glass-panel group h-full overflow-hidden rounded-[24px] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.25em] ${item.accent === "primary" ? "border-primary/30 text-primary" : item.accent === "secondary" ? "border-secondary/30 text-secondary" : "border-tertiary/30 text-tertiary"}`}
                  >
                    {item.tags[0]}
                  </span>
                  <span className="text-xs uppercase tracking-[0.24em] text-on-surface-variant">
                    2026
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
