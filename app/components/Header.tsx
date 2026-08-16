'use client';

import { Menu } from 'lucide-react';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-lavender-hero/95 backdrop-blur-sm border-b-2 border-forest-text/10">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 lg:px-16">
        <a
          className="font-heading text-2xl font-bold tracking-[-0.045em] text-forest-text"
          href="#top"
          aria-label="Sortube home"
        >
          Sortube
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium lg:flex" aria-label="Primary navigation">
          <a className="transition-opacity hover:opacity-60" href="#features">Features</a>
          <a className="transition-opacity hover:opacity-60" href="#how-it-works">How it works</a>
          <a className="transition-opacity hover:opacity-60" href="#open-source">Documentation</a>
          <a className="transition-opacity hover:opacity-60" href="#open-source">Community</a>
          <a className="transition-opacity hover:opacity-60" href="#open-source">GitHub</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="brutal-shadow-sm inline-flex h-11 items-center gap-2 rounded-button border-2 border-forest-text bg-forest-cta px-5 text-sm font-bold text-white transition-transform hover:translate-x-px hover:translate-y-px"
            href="https://github.com/RafiDevAI/Sortube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span className="hidden sm:inline">View on GitHub</span>
            <span className="sm:hidden">GitHub</span>
          </a>

          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-button border border-forest-text bg-white/50 [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Open navigation</span>
            </summary>
            <nav className="absolute right-0 top-14 grid min-w-48 gap-1 brutal-shadow rounded-card border-2 border-forest-text bg-white p-2 z-50">
              <a className="rounded-button px-3 py-2 text-sm font-medium hover:bg-mint-field" href="#features">Features</a>
              <a className="rounded-button px-3 py-2 text-sm font-medium hover:bg-mint-field" href="#how-it-works">How it works</a>
              <a className="rounded-button px-3 py-2 text-sm font-medium hover:bg-mint-field" href="#open-source">Documentation</a>
              <a className="rounded-button px-3 py-2 text-sm font-medium hover:bg-mint-field" href="#open-source">Community</a>
              <a className="rounded-button px-3 py-2 text-sm font-medium hover:bg-mint-field" href="#open-source">GitHub</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
