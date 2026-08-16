const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function BottomSection() {
  return (
    <section className="bg-[#FDF6ED] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1340px] gap-8 lg:grid-cols-[1.2fr_1fr]">

        {/* Built to run locally */}
        <article className="brutal-shadow rounded-[32px] border-[3px] border-forest-text bg-[#7C7CF0] p-10 lg:p-12">
          <h3 className="font-heading text-[2.375rem] font-bold leading-[1.15] text-forest-text lg:text-[3rem]">
            Built to run locally.<br />
            Open for everyone.
          </h3>
          <p className="mt-5 text-[0.9375rem] leading-[1.6] text-forest-text lg:text-[1.0625rem]">
            Sortube runs on your own machine and uses credentials you configure locally. The source will be open for inspection, modification, and contribution.
          </p>
          <a
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-4 text-[0.8125rem] font-semibold text-forest-text border-2 border-forest-text brutal-shadow-sm transition-transform hover:translate-x-px hover:translate-y-px"
            href="https://github.com/RafiDevAI/Sortube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            View Repository
          </a>
        </article>

        {/* What you'll need */}
        <article className="brutal-shadow rounded-[32px] border-[3px] border-forest-text bg-white p-10 lg:p-12">
          <h3 className="font-heading text-[1.25rem] font-bold leading-tight text-forest-text lg:text-[1.375rem]">
            What you'll need
          </h3>
          
          <ul className="mt-6 space-y-3.5">
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-mint-field">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-forest-text">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </span>
              <span className="pt-0 text-[0.8125rem] leading-[1.6] text-forest-text">
                Python 3.10+ and Node.js 18+
              </span>
            </li>
            
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-mint-field">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-forest-text">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
              </span>
              <span className="pt-0 text-[0.8125rem] leading-[1.6] text-forest-text">
                Gemini API key
              </span>
            </li>
            
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-mint-field font-mono text-[0.625rem] font-bold text-forest-text">
                &lt;/&gt;
              </span>
              <span className="pt-0 text-[0.8125rem] leading-[1.6] text-forest-text">
                YouTube Data API v3 OAuth credentials
              </span>
            </li>
          </ul>
          
          <div className="mt-6 border-t border-forest-text/10 pt-5">
            <p className="text-[0.6875rem] leading-[1.65] text-forest-secondary">
              Setup instructions cover the FastAPI backend, React/Vite frontend, Gemini key, and Google OAuth desktop credentials.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}
