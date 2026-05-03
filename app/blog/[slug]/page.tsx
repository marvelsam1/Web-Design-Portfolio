import { Navigation } from "../../components/Navigation";
import { FooterSection } from "../../components/FooterSection";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ScrollReveal } from "../../components/ScrollReveal";
import { blogs } from "../../components/data";

// ... (blogs array remains the same)
// export const blogs = [
//   {
//     slug: "strategic-ui-ux-design-doubles-conversion",
//     title:
//       "Stop Bleeding Sales: How Strategic UI/UX Design Doubles Your Conversion Rate",
//     excerpt:
//       "Are your visitors leaving without buying? Discover how a premium UI/UX redesign can fix your conversion void and turn clicks into loyal customers.",
//     date: "Oct 24, 2024",
//     readTime: "5 min read",
//     category: "UI/UX Strategy",
//     content: (
//       <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
//         <p>
//           You’ve invested heavily in driving traffic to your website. You’re
//           running ads, optimizing your SEO, and posting on social media. But
//           when those potential clients finally land on your page...{" "}
//           <strong className="text-white">nothing happens.</strong>
//         </p>
//         <p>
//           They click around for a few seconds and then bounce, straight into the
//           arms of your competitors. This is known as the "Conversion Void," and
//           it is the single most expensive problem your business can have.
//         </p>

//         <h3 className="mb-4 mt-12 text-2xl font-bold text-white">
//           The 3-Second Rule
//         </h3>
//         <p>
//           Research shows that users form an opinion about your website in just
//           0.05 seconds. Furthermore, 53% of mobile site visitors will abandon a
//           page if it takes longer than 3 seconds to load. Strategic UI/UX design
//           isn’t just about making things look "pretty." It’s about building an
//           architecture of trust.
//         </p>

//         <h3 className="mb-4 mt-12 text-2xl font-bold text-white">
//           Guiding the User Journey
//         </h3>
//         <p>
//           A premium web design functions like your best salesperson. It
//           anticipates the user’s questions, provides social proof exactly when
//           hesitation arises, and creates frictionless pathways to your{" "}
//           <em>Buy</em> or <em>Contact</em> buttons.
//         </p>
//         <ul className="list-disc pl-6 space-y-2 mt-4">
//           <li>
//             <strong>Clear Visual Hierarchy:</strong> Ensuring the eye naturally
//             flows to your call-to-action.
//           </li>
//           <li>
//             <strong>Micro-Interactions:</strong> Subtle animations that reward
//             users for engaging with your platform.
//           </li>
//           <li>
//             <strong>Cognitive Load Reduction:</strong> Removing clutter so your
//             value proposition is crystal clear.
//           </li>
//         </ul>

//         <p className="mt-8 border-l-2 border-primary pl-6 italic">
//           "Good design is obvious. Great design is transparent."
//         </p>
//       </div>
//     ),
//   },
//   {
//     slug: "headless-commerce-scaling-ecommerce-brands",
//     title:
//       "Shopify vs. Custom Headless Commerce: Scaling Your E-Commerce Brand",
//     excerpt:
//       "When do you outgrow standard Shopify? Learn why ambitious brands are moving to custom Next.js web applications for sub-second page loads.",
//     date: "Oct 18, 2024",
//     readTime: "7 min read",
//     category: "Full-Stack Development",
//     content: (
//       <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
//         <p>
//           Shopify is an incredible platform to start an e-commerce business. But
//           what happens when you hit $1M+ in revenue? Suddenly, standard themes
//           feel restrictive, apps slow down your page speed, and your conversion
//           rate plateaus.
//         </p>

//         <h3 className="mb-4 mt-12 text-2xl font-bold text-white">
//           Enter: Headless Commerce
//         </h3>
//         <p>
//           Headless commerce means decoupling your frontend (what the user sees)
//           from your backend (Shopify's inventory and checkout system). By
//           building a custom <strong>Next.js and React</strong> web application
//           on the frontend, you unlock absolute freedom.
//         </p>

//         <h3 className="mb-4 mt-12 text-2xl font-bold text-white">
//           Why the Top Brands Go Custom
//         </h3>
//         <p>
//           A headless architecture solves the notorious "Speed Trap." Because
//           pages are pre-rendered and delivered via edge networks (like Vercel),
//           your store loads in milliseconds.
//         </p>
//         <p>
//           Amazon found that every 100ms of latency cost them 1% in sales. When
//           you scale, a faster website directly translates to millions in
//           retained revenue. Furthermore, custom web development allows you to
//           integrate complex AR features, highly customized product builders, and
//           robust UI/UX experiences that standard templates simply cannot
//           support.
//         </p>
//       </div>
//     ),
//   },
//   {
//     slug: "technical-seo-playbook-invisible-website",
//     title:
//       "The Technical SEO Playbook: Why Your Beautiful Website is Invisible on Google",
//     excerpt:
//       "A pretty website is useless if nobody can find it. Master the technical SEO strategies that force Google's algorithms to prioritize your web pages.",
//     date: "Oct 12, 2024",
//     readTime: "6 min read",
//     category: "Conversion SEO",
//     content: (
//       <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
//         <p>
//           You just launched a gorgeous new website. The animations are smooth,
//           the typography is elegant, and the branding is flawless. But a month
//           goes by, and your organic traffic is flatlining. Why?
//         </p>
//         <p>
//           Because <strong>Google's bots don't have eyes.</strong> They don't
//           care about your brand colors. They care about your Technical
//           Architecture.
//         </p>

//         <h3 className="mb-4 mt-12 text-2xl font-bold text-white">
//           The Core Web Vitals Trap
//         </h3>
//         <p>
//           Google’s algorithm heavily favors websites that pass their Core Web
//           Vitals assessment. This means your site needs exceptional LCP (Largest
//           Contentful Paint), CLS (Cumulative Layout Shift), and FID (First Input
//           Delay). If your site is built using clunky builders rather than clean,
//           custom React/Next.js code, you are likely failing these metrics.
//         </p>

//         <h3 className="mb-4 mt-12 text-2xl font-bold text-white">
//           Semantic HTML & SSR
//         </h3>
//         <p>
//           Building modern web applications requires Server-Side Rendering (SSR).
//           Frameworks like Next.js ensure that when Google crawls your site, it
//           instantly sees the fully rendered HTML, rather than waiting for
//           Javascript to execute.
//         </p>
//         <p>
//           Combined with strict semantic HTML tags (proper use of h1, h2, aside,
//           article tags) and dynamic metadata generation, a technically optimized
//           site doesn't just sit on the internet—it actively hunts for your
//           customers.
//         </p>
//       </div>
//     ),
//   },
// ];

// ✅ Fix: params must be awaited in Next.js 15
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // Change to Promise
}) {
  const { slug } = await params; // Await the slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return {};

  return {
    title: `${blog.title} | Marvellous`,
    description: blog.excerpt,
  };
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ Fix: The component must be async and params must be awaited
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>; // Change to Promise
}) {
  const { slug } = await params; // Await the slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navigation />
      <main className="relative overflow-hidden pt-36 pb-24 px-6 sm:px-8 lg:px-12">
        <article className="mx-auto max-w-200">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition hover:text-white mb-12"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.15em] text-on-surface-variant mb-6">
              <span className="rounded-full border border-primary/30 px-3 py-1 text-primary">
                {blog.category}
              </span>
              <span>{blog.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/20"></span>
              <span>{blog.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl mb-16">
              {blog.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>{blog.content}</ScrollReveal>
        </article>
      </main>
      <FooterSection />
    </div>
  );
}
