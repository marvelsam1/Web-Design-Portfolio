"use client";

import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Metrics", href: "/#metrics" },
    { name: "Tools", href: "/#tools" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/60 backdrop-blur-2xl px-6 py-4 sm:px-8 lg:px-12">
      <div className="pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between gap-6">
        <a
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-primary"
        >
          MARVELLOUS
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link relative transition-colors duration-200 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="pointer-events-auto flex items-center gap-4">
          <a
            href="/#contact"
            className="rounded-xl border border-primary/20 bg-primary/10 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition duration-200 hover:border-primary/40 hover:bg-primary/15 hidden sm:block"
          >
            Chat
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 text-on-surface-variant transition hover:text-primary md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="pointer-events-auto absolute left-0 top-full w-full border-b border-white/10 bg-surface/95 px-6 py-6 shadow-2xl backdrop-blur-2xl md:hidden transition-all duration-300">
          <nav className="flex flex-col gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link relative transition-colors duration-200 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
