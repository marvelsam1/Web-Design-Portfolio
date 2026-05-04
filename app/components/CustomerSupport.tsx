import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function CustomerSupport() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-surface text-on-surface relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Customer Satisfaction, Our #1 Priority
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                A world-class website demands clear, reliable communication. I
                make myself accessible so we can move from concept to launch
                with speed and precision. Choose the channel that fits your
                workflow
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">💬</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      Real-Time Digital Chat
                    </h4>
                    <p className="text-on-surface-variant">
                      For immediate questions, feedback, or quick check-ins,
                      connect with me via Slack or WhatsApp. No waiting on email
                      threads; just rapid progress
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">🏢</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      Strategic Video Sessions
                    </h4>
                    <p className="text-on-surface-variant">
                      Need to dive deep into a technical issue or map out the
                      next phase? Schedule a Zoom or Google Meet session so we
                      can screen-share and strategize face-to-face
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side contact cards */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Dedicated Project Hotlines
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                      📱 Technical & Hosting Emergencies
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 text-lg text-white">
                      <a
                        href="tel:07008888328"
                        className="hover:text-primary transition"
                      >
                        090 306 529 05
                      </a>
                      <span className="hidden sm:block text-white/30">|</span>
                      <a
                        href="tel:02018888328"
                        className="hover:text-primary transition"
                      >
                        070 665 184 99
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                      🏪 Client Partnership Manager
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 text-lg text-white">
                      <a
                        href="tel:07008888329"
                        className="hover:text-primary transition"
                      >
                        070 665 184 99
                      </a>
                      <span className="hidden sm:block text-white/30">|</span>
                      <a
                        href="tel:02018888329"
                        className="hover:text-primary transition"
                      >
                        090 306 529 05
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <Link
                    href="#contact"
                    className="inline-flex w-full justify-center items-center rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-white/90"
                  >
                    Connect With Me Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
