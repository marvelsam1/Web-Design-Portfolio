import { ScrollReveal } from "./ScrollReveal";

const tools = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    accent: "primary",
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "PostgreSQL", "REST APIs"],
    accent: "secondary",
  },
  {
    category: "Design",
    items: ["Figma", "Framer Motion", "UI/UX Strategy", "Prototyping"],
    accent: "tertiary",
  },
  {
    category: "Platforms",
    items: ["Shopify", "WordPress", "Webflow", "Vercel"],
    accent: "primary",
  },
  {
    category: "SEO",
    items: ["Ahrefs", "SEMrush", "Google Search Console", "Technical SEO"],
    accent: "secondary",
  },
  {
    category: "Marketing",
    items: ["Google Analytics", "HubSpot", "Mailchimp", "Meta Ads"],
    accent: "tertiary",
  },
];

export function ToolsSection() {
  return (
    <section id="tools" className="px-6 pb-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <ScrollReveal className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-on-surface-variant">
            My Arsenal
          </p>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            The tools I use to build your digital success.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-on-surface-variant">
            Industry-leading frameworks and platforms chosen for performance,
            security, and ultimate scalability.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 150}>
              <div className="glass-panel flex h-full flex-col rounded-[32px] border border-white/10 bg-surface-container/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-10">
                <h3 className="mb-8 text-xl font-bold text-white">
                  {group.category}
                </h3>
                <ul className="mt-auto space-y-5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            group.accent === "primary"
                              ? "bg-primary"
                              : group.accent === "secondary"
                                ? "bg-secondary"
                                : "bg-tertiary"
                          }`}
                        />
                      </span>
                      <span className="text-sm font-medium text-on-surface-variant">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
