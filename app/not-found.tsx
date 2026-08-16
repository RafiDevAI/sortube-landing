'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-mint-field px-6">
      <div className="text-center">
        <div className="brutal-shadow mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-panel border-2 border-forest-text bg-lavender-hero">
          <span className="font-heading text-6xl font-extrabold text-white">404</span>
        </div>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-forest-text md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-forest-secondary">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="brutal-shadow-sm inline-flex h-11 items-center justify-center gap-2 rounded-button border-2 border-forest-text bg-forest-cta px-5 text-sm font-bold text-white transition-transform hover:translate-x-px hover:translate-y-px"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="brutal-shadow-sm inline-flex h-11 items-center justify-center gap-2 rounded-button border-2 border-forest-text bg-white px-5 text-sm font-bold text-forest-text transition-transform hover:translate-x-px hover:translate-y-px"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
