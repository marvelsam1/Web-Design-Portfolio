import { ScrollReveal } from "./ScrollReveal";

const workItems = [
  {
    title: "Clear Icon Medics — Company Website",
    description:
      "For this project, I developed a professional, HIPAA-compliant-ready digital presence for a modern healthcare provider. The focus was on creating a secure environment for patient data while maintaining an intuitive interface for appointment scheduling. I implemented technical SEO and accessibility standards to ensure the provider ranks highly in local searches while remaining easy for patients to navigate.",
    tags: ["UI/UX", "React Native", "App"],
    accent: "primary",
    year: "2024",
    image: "/images/clear-icon.png", // Add your image path here
    link: "https://www.cleariconmedicdiagnostics.com.ng/", // Replace with the actual URL
  },
  {
    title: "Aderoju Energy — Corporate Platform",
    description:
      "I designed and developed a corporate service platform for a leading energy solutions provider in Nigeria. The goal was to transform their digital presence into a professional hub that clearly communicates complex energy services to B2B clients. I focused on clean architecture and high-speed performance to reflect the company’s reliability and leadership in the energy sector.",
    tags: ["B2B", "Wordpress", "Lead Gen"],
    accent: "secondary",
    year: "2023",
    image: "/images/aderoju.png", // Add your image path here
    link: "https://www.aderojuenergy.com/", // Replace with the actual URL
  },
  {
    title: "Connectly — Networking Ecosystem",
    description:
      "Connectly is a dynamic networking ecosystem designed to bridge the gap between service connectors and seekers. I built this platform to handle real-time interactions and seamless user matching, ensuring that seekers can find verified experts without the friction of traditional networking. The project involved creating a high-fidelity mobile experience that prioritizes speed and user trust.",
    tags: ["Web App", "React", "Analytics"],
    accent: "tertiary",
    year: "2023",
    image: "/images/connectly.png", // Add your image path here
    link: "https://www.connectly.ng/", // Replace with the actual URL
  },
  {
    title: "SleetShop — E-Commerce Experience",
    description:
      "SleetShop is a high-performance e-commerce storefront designed to eliminate the friction between product discovery and checkout. I built this platform to handle complex inventory management and high-traffic surges, ensuring a seamless shopping experience that prioritizes lightning-fast load speeds and user security. The project involved creating a mobile-first interface that guides customers through a frictionless path to purchase, resulting in a significant boost in conversion rates and brand trust.",
    tags: ["E-Commerce", "Shopify"],
    accent: "primary",
    year: "2024",
    image: "/images/sleetshop.png", // Add your image path here
    link: "https://sleet-shop.vercel.app/", // Replace with the actual URL
  },
];

export function WorkSection() {
  return (
    <section id="work" className="px-6 pb-24 pt-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-on-surface-variant">
              Past Work & Projects
            </p>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              A showcase of high-performance digital platforms built for
              results.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-on-surface-variant">
              Explore a selection of my recently completed websites and
              applications. See how professional design and reliable engineering
              come together to create a powerful online presence for every
              business.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="mb-2 shrink-0">
            <a
              href="#contact"
              className="action-button secondary-button inline-flex items-center gap-2 rounded-xl"
            >
              Discuss a Project
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  path="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </ScrollReveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {workItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 150}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container-high/50 border-b border-white/5">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-40 transition-transform duration-700 group-hover:scale-110 z-10 ${
                      item.accent === "primary"
                        ? "from-primary/50 via-transparent to-transparent"
                        : item.accent === "secondary"
                          ? "from-secondary/50 via-transparent to-transparent"
                          : "from-tertiary/50 via-transparent to-transparent"
                    }`}
                  />

                  {/* Real Project Image Implementation */}
                  <div className="absolute inset-0 flex items-end justify-center px-8 pt-12">
                    <div className="relative h-full w-full max-w-lg overflow-hidden rounded-t-2xl border-x border-t border-white/10 bg-surface/80 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:translate-y-2 z-20">
                      {/* Browser Mockup Header */}
                      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-white/5">
                        <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                      </div>

                      {/* Image Content */}
                      <div className="relative h-full w-full bg-surface-container">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay to keep the text/UI aesthetic if the image is missing */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.25em] ${item.accent === "primary" ? "border-primary/30 text-primary" : item.accent === "secondary" ? "border-secondary/30 text-secondary" : "border-tertiary/30 text-tertiary"}`}
                    >
                      {item.tags[0]}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.24em] text-on-surface-variant">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-on-surface-variant sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-8 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
