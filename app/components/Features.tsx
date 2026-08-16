import { BrainCircuit, MonitorCog, Layers, History, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    iconBg: 'bg-white',
    title: 'AI-powered categorization',
    description: 'Gemini reads video titles and groups related saves into focused topic playlists.',
    label: 'Custom prompts',
  },
  {
    icon: MonitorCog,
    iconBg: 'bg-sky-accent',
    title: 'Local processing',
    description: 'Run the FastAPI and React app on your own machine with credentials you control.',
    label: 'Local-first setup',
  },
  {
    icon: Layers,
    iconBg: 'bg-lavender-hero/30',
    title: 'Batch execution',
    description: 'Save the full AI analysis as a draft and create a manageable group of playlists each day.',
    label: 'Quota-aware workflow',
  },
  {
    icon: History,
    iconBg: 'bg-mint-accent',
    title: 'Rollback & history',
    description: 'Remove interrupted playlists, preserve pending work, and review or undo earlier runs.',
    label: 'History and undo',
  },
];

export default function Features() {
  return (
    <section className="bg-mint-field px-6 pb-36 pt-16 md:px-10 lg:px-16" id="features">
      <div className="mx-auto max-w-[1340px]">
        <h2 className="mx-auto max-w-4xl text-center font-heading text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-forest-text md:text-6xl">
          Everything you need to sort your YouTube life.
        </h2>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, iconBg, title, description, label }) => (
            <article
              key={title}
              className="brutal-shadow flex min-h-[330px] flex-col rounded-card border-2 border-forest-text bg-white p-6"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-lg border-2 border-forest-text ${iconBg}`}>
                <Icon className="h-7 w-7 text-forest-text" aria-hidden="true" />
              </div>
              <h3 className="mt-8 font-heading text-2xl font-medium leading-tight tracking-[-0.03em] text-forest-text">
                {title}
              </h3>
              <p className="mt-3 text-base leading-6 text-forest-secondary">
                {description}
              </p>
              <p className="mt-auto pt-8 text-sm font-semibold text-forest-text">
                {label}
              </p>
              <a className="mt-3 inline-flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4 text-forest-text" href="#open-source">
                Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
