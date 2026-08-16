import { ArrowRight, Play, ListVideo } from 'lucide-react';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-clip bg-lavender-hero pb-24" id="top">
      <div className="mx-auto grid min-h-[580px] max-w-[1400px] items-center gap-10 px-6 pb-12 pt-8 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-16">

        {/* Left copy */}
        <div className="max-w-[560px]">
          <h1 className="font-heading text-[clamp(3.5rem,6.5vw,6.75rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-forest-text">
            Your saved<br />videos,<br />sorted.
          </h1>
          <p className="mt-6 max-w-[520px] text-[0.9375rem] leading-[1.65] text-forest-text md:text-[1rem]">
            An open-source, locally hosted tool that uses Gemini AI to categorize saved videos and merge them into playlists you already have.
          </p>
          <p className="mt-3 max-w-[520px] text-[0.9375rem] leading-[1.65] text-forest-text md:text-[1rem]">
            Turn one overloaded YouTube playlist into focused micro-niche playlists.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              className="brutal-shadow-sm inline-flex h-11 items-center justify-center gap-2.5 rounded-lg border-2 border-forest-text bg-forest-cta px-5 text-[0.875rem] font-bold text-white transition-transform hover:translate-x-px hover:translate-y-px"
              href="https://github.com/RafiDevAI/Sortube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              View on GitHub
            </a>
            <a
              className="brutal-shadow-sm inline-flex h-11 items-center justify-center gap-2.5 rounded-lg border-2 border-forest-text bg-lavender-hero px-5 text-[0.875rem] font-bold text-forest-text transition-transform hover:translate-x-px hover:translate-y-px"
              href="#how-it-works"
            >
              See how it works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div
          className="relative mx-auto w-full max-w-[700px]"
          aria-label="Before and after: one mixed YouTube playlist becomes three focused topic playlists"
        >
          {/* Solid circular background */}
          <div className="absolute left-1/2 top-1/2 h-[480px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"></div>

          <div className="relative grid items-center gap-4 md:grid-cols-[0.87fr_auto_1.13fr]">

            {/* BEFORE card */}
            <article className="brutal-shadow rounded-[15px] border-[3px] border-forest-text bg-white p-4">
              <p className="text-[0.6875rem] font-extrabold uppercase tracking-[0.12em] text-forest-text/60">Before</p>
              <div className="mt-2.5 flex items-center justify-between border-b-2 border-forest-text pb-2.5">
                <div>
                  <p className="font-heading text-[1.25rem] font-extrabold leading-tight text-forest-text">Watch Later</p>
                  <p className="mt-0.5 text-[0.6875rem] text-forest-text/60">42 mixed videos</p>
                </div>
                <ListVideo className="h-6 w-6 text-forest-text" aria-hidden="true" />
              </div>
              <div className="mt-3 space-y-2.5">
                {[
                  { bg: 'bg-[#D7DAF7]', label: 'Python tutorial' },
                  { bg: 'bg-[#FCA5AF]', label: 'Tokyo travel vlog' },
                  { bg: 'bg-[#93C5FD]', label: 'Easy pasta recipe' },
                ].map(({ bg, label }) => (
                  <div key={label} className="grid grid-cols-[60px_1fr] items-center gap-2.5">
                    <div className={`flex aspect-video items-center justify-center rounded-md border-2 border-forest-text ${bg}`}>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest-cta text-white">
                        <Play className="ml-0.5 h-2.5 w-2.5 fill-current" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="text-[0.8125rem] font-bold leading-tight text-forest-text">{label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 rounded-lg bg-mint-field px-2.5 py-1.5 text-center text-[0.6875rem] font-bold leading-snug text-forest-text">
                Different topics in one long list
              </p>
            </article>

            {/* Center arrow */}
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="brutal-shadow-sm flex h-14 w-14 items-center justify-center rounded-full border-2 border-forest-text bg-white">
                <ArrowRight className="h-6 w-6 rotate-90 text-forest-text md:rotate-0" aria-hidden="true" />
              </div>
              <span className="text-[0.625rem] font-extrabold uppercase tracking-wide text-forest-text">Sortube</span>
            </div>

            {/* AFTER section */}
            <div>
              <p className="text-[0.6875rem] font-extrabold uppercase tracking-[0.12em] text-forest-text/60">After</p>
              <h2 className="mt-1 font-heading text-[1.25rem] font-extrabold leading-tight text-forest-text">Focused playlists</h2>
              <div className="mt-3 space-y-2.5">
                {[
                  { bg: 'bg-[#D4F1DD]', name: 'AI & Tech', count: '12 videos', badge: 'New playlist' },
                  { bg: 'bg-[#FCA5AF]', name: 'Travel', count: '8 videos', badge: 'New playlist' },
                  { bg: 'bg-[#93C5FD]', name: 'Cooking', count: '6 videos', badge: '⚡ merged' },
                ].map(({ bg, name, count, badge }) => (
                  <article key={name} className={`brutal-shadow-sm rounded-[11px] border-2 border-forest-text p-3 ${bg}`}>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-2 border-forest-text bg-white">
                        <ListVideo className="h-4 w-4 text-forest-text" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[0.9375rem] font-extrabold leading-tight text-forest-text">{name}</p>
                        <p className="mt-0.5 text-[0.6875rem] text-forest-text/60">{count}</p>
                      </div>
                      <span className="ml-auto shrink-0 rounded-md border border-forest-text bg-white px-2 py-0.5 text-[0.625rem] font-extrabold leading-tight text-forest-text">
                        {badge}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-3 rounded-lg border-2 border-forest-text bg-forest-cta px-2.5 py-1.5 text-center text-[0.6875rem] font-bold leading-snug text-white">
                Same videos. Now organized by topic.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Scalloped wave */}
      <svg
        className="absolute -bottom-1 left-0 h-20 w-full text-mint-field"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 40 Q30 75 60 40 T120 40 T180 40 T240 40 T300 40 T360 40 T420 40 T480 40 T540 40 T600 40 T660 40 T720 40 T780 40 T840 40 T900 40 T960 40 T1020 40 T1080 40 T1140 40 T1200 40 T1260 40 T1320 40 T1380 40 T1440 40 V80 H0Z"
        />
      </svg>
    </section>
  );
}
