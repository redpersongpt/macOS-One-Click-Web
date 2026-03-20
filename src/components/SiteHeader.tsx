import Link from "next/link";
import BrandIcon from "./BrandIcon";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
];

type SiteHeaderProps = {
  currentPath?: string;
};

export default function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#05090d]/78 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-full border border-transparent px-2 py-1 text-sm text-white/88"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
            <BrandIcon className="h-4 w-4 text-[var(--accent)]" />
          </span>
          <span>
            <span className="block text-sm font-medium tracking-tight">
              macOS OneClick
            </span>
            <span className="block font-mono text-[0.64rem] uppercase tracking-[0.22em] text-white/42">
              Review-first EFI generation
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1.5 sm:flex"
          >
            {navItems.map((item) => {
              const active = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  aria-current={active ? "page" : undefined}
                  href={item.href}
                  className={`focus-ring rounded-full px-4 py-2 text-sm ${
                    active
                      ? "bg-white/[0.08] text-white"
                      : "text-white/64 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://github.com/redpersongpt/macOS-One-Click/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/12 px-4 py-2 text-sm font-medium text-white hover:border-[var(--accent)]/55 hover:bg-[var(--accent)]/18"
          >
            Latest build
          </a>
        </div>
      </div>
    </header>
  );
}
