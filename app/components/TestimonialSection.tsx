import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Marvellous completely transformed our user flow. The new React Native frontend reduced our friction by 60%, and our users are loving the seamless experience.",
    author: "Ibitomiwa",
    role: "Founder, Connectly",
  },
  {
    quote:
      "Working with Marvellous was a game-changer. Our B2B platform now screams 'premium' and we saw a 25% spike in lead inquiries within the first month of launch.",
    author: "Engineer Aderoju",
    role: "CEO, Aderoju Energy",
  },
  {
    quote:
      "The technical architecture Marvellous built for us was flawless. It scales beautifully and the performance scores are exactly what we were promised.",
    author: "Michael Chen",
    role: "CTO, FinTech Solutions",
  },
  {
    quote:
      "An absolute professional. The integration of our complex backend with a beautiful, fast UI resulted in a 40% increase in user retention.",
    author: "Emily Rodriguez",
    role: "Founder, SaaS Nova",
  },
  {
    quote:
      "We needed a website that wasn't just pretty, but actually drove conversions. Marvellous delivered a masterclass in both design and robust engineering.",
    author: "James Peterson",
    role: "Marketing Director, Horizon",
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="px-6 pb-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <ScrollReveal className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-on-surface-variant">
            Client Success
          </p>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
            Don't just take my word for it.
          </h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 150}>
              <div className="glass-panel flex h-full flex-col justify-between rounded-[32px] border border-white/10 bg-surface-container/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-10">
                <div>
                  <p className="text-lg italic leading-8 text-on-surface-variant">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.1em] text-on-surface-variant">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
