import Link from "next/link";
import { blogs } from "../components/data"; // Ensure blogs is exported from your [slug] file
import { Navigation } from "../components/Navigation";
import { FooterSection } from "../components/FooterSection";
import { ScrollReveal } from "../components/ScrollReveal";

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navigation />

      <main className="pt-36 pb-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Insights & <span className="text-primary">Innovation</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Deep dives into UI/UX strategy, full-stack development, and
            technical SEO to help you scale your digital presence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <ScrollReveal key={blog.slug} delay={index * 100}>
              <Link href={`/blog/${blog.slug}`} className="group block">
                <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/[0.05]">
                  {/* Image Placeholder - Replace src with blog.image if you add it to your data */}
                  <div className="aspect-[16/9] w-full overflow-hidden bg-white/5">
                    <img
                      src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop`}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 rounded bg-primary/10">
                        {blog.category}
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="mb-3 text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {blog.title}
                    </h2>

                    <p className="line-clamp-3 text-sm leading-relaxed text-on-surface-variant">
                      {blog.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                      Read Article
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
