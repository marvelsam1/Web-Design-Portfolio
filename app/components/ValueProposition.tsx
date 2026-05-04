import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function ValueProposition() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-surface text-on-surface relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Your Business Growth, Built: Beyond Just a Website
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Partner with us to build a high-performance sales engine designed
              to turn your visitors into loyal customers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <ScrollReveal delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-white/10 transition duration-300">
              <div className="text-4xl mb-6">🎁</div>
              <h3 className="text-xl font-bold text-white mb-4">
                The Profit Leak Audit
              </h3>
              <p className="text-on-surface-variant mb-8 grow">
                Before you spend a dime, I will provide a personalized,
                15-minute video breakdown of your current site. I’ll show you
                exactly where you’re losing revenue and provide three technical
                'Quick Wins' to start capturing leads immediately.
              </p>
              <Link
                href="/#contact"
                className="inline-flex justify-center items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-surface transition hover:bg-primary/90 mt-auto"
              >
                Claim My Free Profit Audit
              </Link>
            </div>
          </ScrollReveal>

          {/* Feature 2 */}
          <ScrollReveal delay={200}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-white/10 transition duration-300">
              <div className="text-4xl mb-6">📚</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Complete Creative Control
              </h3>
              <p className="text-on-surface-variant mb-8 grow">
                I don't just hand over a site and disappear. You will receive a
                custom video training vault recorded specifically for your new
                CMS. You’ll be fully empowered to update text, images, and blogs
                in seconds—so you never have to pay a developer for
                'maintenance' ever again
              </p>
            </div>
          </ScrollReveal>

          {/* Feature 3 */}
          <ScrollReveal delay={300}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-white/10 transition duration-300">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Direct Strategy Access
              </h3>
              <p className="text-on-surface-variant mb-8 grow">
                You get a partner, not just a vendor. We’ll jump on deep-dive
                strategy calls to walk through the Custom Conversion Roadmap
                I've built for your specific niche. We don't just build pages;
                we architect a path to your business goals
              </p>
              <Link
                href="/#contact"
                className="inline-flex justify-center items-center rounded-full border border-primary text-primary px-6 py-3 text-sm font-bold transition hover:bg-primary/10 mt-auto"
              >
                Book My Strategy Session
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
