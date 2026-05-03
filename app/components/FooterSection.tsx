import { ScrollReveal } from "./ScrollReveal";

export function FooterSection() {
  return (
    <footer id="contact" className="px-3 pb-24 pt-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px] space-y-10">
        <ScrollReveal className="glass-panel rounded-[32px] border border-white/10 bg-surface-container/80 py-8 px-5 shadow-[0_40px_120px_rgba(0,112,255,0.14)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-on-surface-variant">
                Stop fighting your tech
              </p>
              <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                Start growing your brand. Ready to build a digital presence that
                converts?
              </h2>
              <p className="max-w-xl text-base leading-8 text-on-surface-variant">
                Let’s jump on a 15-minute strategy call to discuss your roadmap
                and turn your visitors into loyal customers.
              </p>
            </div>
            <div className="space-y-4 rounded-[24px] border border-white/5 bg-surface-container-high/80 py-6 px-3 md:px-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.24em] text-on-surface-variant">
                  Book a Call
                </p>
                <span className="rounded-full bg-primary/10 px-5 md:px-3 py-1 text-sm text-primary">
                  Free Strategy Session
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-white">
                  marvellousabiola004@gmail.com
                </p>
                <p className="text-sm text-on-surface-variant">
                  Available for custom web applications, high-performance CMS
                  builds, and conversion-focused design.
                </p>
              </div>
              <a
                href="mailto:marvellousabiola004@gmail.com"
                className="action-button primary-button w-full text-center rounded-xl"
              >
                Schedule My Free Call
              </a>
            </div>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-on-surface-variant sm:flex-row sm:justify-between">
          <p>
            © 2026 Marvellous | Built for precision, speed, and 24/7
            reliability.
          </p>
          <p>
            I build and maintain high-performance systems so you can focus on
            growing your business.
          </p>
        </div>
      </div>
    </footer>
  );
}
