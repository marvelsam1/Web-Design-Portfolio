export function Navigation() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/60 backdrop-blur-2xl px-6 py-4 sm:px-8 lg:px-12">
      <div className="pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between gap-6">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-primary"
        >
          MARVELLOUS
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant md:flex">
          {["Services", "Work", "Metrics", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link relative transition-colors duration-200 hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="pointer-events-auto rounded-xl border border-primary/20 bg-primary/10 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition duration-200 hover:border-primary/40 hover:bg-primary/15"
        >
          Talk
        </a>
      </div>
    </header>
  );
}
