export default function Footer() {
  return (
    <footer className="bg-[#FDF6ED] border-t border-forest-text/20 px-6 py-8 md:px-10 lg:px-16" id="open-source">
      <div className="mx-auto flex max-w-[1340px] flex-wrap items-center justify-between gap-6">
        <div className="max-w-[240px]">
          <a className="font-heading text-[1.25rem] font-bold tracking-tight text-forest-text" href="#top">
            Sortube
          </a>
          <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-forest-secondary">
            An open-source librarian for saved YouTube videos.
          </p>
        </div>

        <nav className="flex items-center gap-6">
          <a className="text-[0.8125rem] font-medium text-forest-text hover:underline" href="#features">
            Features
          </a>
          <a className="text-[0.8125rem] font-medium text-forest-text hover:underline" href="#how-it-works">
            How it works
          </a>
          <a className="text-[0.8125rem] font-medium text-forest-text hover:underline" href="#open-source">
            Setup
          </a>
        </nav>

        <div className="text-[0.8125rem] text-forest-secondary">
          © {new Date().getFullYear()} Sortube
        </div>
      </div>
    </footer>
  );
}
