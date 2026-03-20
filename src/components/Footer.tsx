import Link from "next/link";
import BrandIcon from "./BrandIcon";

export default function Footer() {
  return (
    <footer className="pb-16 pt-10">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="surface-panel-strong rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Final checkpoint</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Read the docs. Pull the build. Stop if the path looks wrong.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/64 sm:text-base">
                That is the whole attitude.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/docs"
                className="focus-ring inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/88 hover:bg-white/[0.08]"
              >
                Read setup docs
              </Link>
              <a
                href="https://github.com/redpersongpt/macOS-One-Click/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/12 px-5 py-3 text-sm font-medium text-white hover:border-[var(--accent)]/55 hover:bg-[var(--accent)]/18"
              >
                Download latest build
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 text-sm text-white/55">
            <BrandIcon className="h-3.5 w-3.5 text-[var(--accent)]" />
            macOS OneClick
          </span>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-4 text-sm text-white/60"
          >
            <Link href="/" className="focus-ring rounded-full px-2 py-1 hover:text-white">
              Overview
            </Link>
            <Link
              href="/docs"
              className="focus-ring rounded-full px-2 py-1 hover:text-white"
            >
              Docs
            </Link>
            <Link
              href="/about"
              className="focus-ring rounded-full px-2 py-1 hover:text-white"
            >
              About
            </Link>
            <a
              href="https://github.com/redpersongpt/macOS-One-Click"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full px-2 py-1 hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
