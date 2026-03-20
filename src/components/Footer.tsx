import Link from "next/link";
import BrandIcon from "./BrandIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 text-sm text-white/55">
            <BrandIcon className="h-3.5 w-3.5 text-white" />
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
            <a
              href="https://github.com/redpersongpt/macOS-One-Click/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border border-white bg-white px-4 py-2 font-medium text-black hover:bg-white/90"
            >
              Download
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
