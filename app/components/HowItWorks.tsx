import { ArrowRight, ArrowDown, ListVideo, KeyRound, Sparkles } from 'lucide-react';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const steps = [
  {
    number: 1,
    Icon: ListVideo,
    iconBg: 'bg-sky-accent',
    title: 'Paste your playlist ID',
    description: 'Add the playlist you want to organize and your Gemini API key.',
    trailing: <KeyRound className="hidden h-6 w-6 sm:block text-forest-text" aria-hidden="true" />,
  },
  {
    number: 2,
    Icon: Sparkles,
    iconBg: 'bg-lavender-light',
    title: 'Gemini builds a category draft',
    description: 'Video titles are grouped using micro-niche mode or your custom category rules.',
    trailing: (
      <div className="hidden sm:flex gap-2 flex-shrink-0">
        <span className="rounded-md border border-forest-text bg-mint-accent px-2 py-1 text-[10px] font-extrabold text-forest-text">Python</span>
        <span className="rounded-md border border-forest-text bg-yellow-accent px-2 py-1 text-[10px] font-extrabold text-forest-text">Sleep</span>
      </div>
    ),
  },
  {
    number: 3,
    Icon: ListVideo,
    iconBg: 'bg-mint-accent',
    title: 'Review, create, and resume',
    description: 'Choose today\'s playlists. The remaining categories stay in the draft for the next batch.',
    trailing: (
      <a
        className="hidden sm:inline-flex h-9 items-center gap-2 rounded-lg bg-forest-cta px-4 text-xs font-bold text-white transition-opacity hover:opacity-90 flex-shrink-0"
        href="#open-source"
      >
        ✓ Create batch
      </a>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-mint-field px-6 pb-32 md:px-10 lg:px-16" id="how-it-works">

      {/* Main panel */}
      <div className="brutal-shadow relative mx-auto min-h-[620px] max-w-[1340px] overflow-hidden rounded-panel border-2 border-forest-text bg-peach-workflow px-6 py-16 md:px-12 lg:px-16">
        <div className="grid min-h-[490px] items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">

          {/* Left intro */}
          <div className="relative z-10 max-w-xl">
            <p className="font-heading text-4xl font-medium tracking-[-0.035em] text-forest-text">
              How it works
            </p>
            <h2 className="mt-2 font-heading text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-forest-text md:text-6xl">
              From playlist chaos to organized bliss in 3 steps.
            </h2>
            <a
              className="mt-16 inline-flex items-center gap-3 text-lg font-bold underline decoration-2 underline-offset-4 text-forest-text"
              href="#open-source"
            >
              Setup guide <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Right steps */}
          <div className="mx-auto w-full max-w-[680px]">
            {steps.map(({ number, Icon, iconBg, title, description, trailing }, i) => (
              <div key={number}>
                <article className="brutal-shadow rounded-card border-2 border-forest-text bg-white p-5">
                  <div className="grid items-center gap-4 sm:grid-cols-[48px_1fr_auto]">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 border-forest-text ${iconBg}`}>
                      <Icon className="h-6 w-6 text-forest-text" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-forest-text/70">Step {number}</p>
                      <h3 className="mt-1 text-xl font-bold text-forest-text">{title}</h3>
                      <p className="mt-1 text-sm text-forest-secondary">{description}</p>
                    </div>
                    {trailing}
                  </div>
                </article>
                {i < steps.length - 1 && (
                  <ArrowDown className="mx-auto my-4 h-7 w-7 text-forest-text" strokeWidth={2.5} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
