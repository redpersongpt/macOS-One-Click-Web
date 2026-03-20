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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/82 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-full border border-transparent px-1 py-1 text-sm text-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03]">
            <BrandIcon className="h-4 w-4 text-white" />
          </span>
          <span className="text-sm font-medium tracking-tight">macOS OneClick</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 sm:flex"
          >
            {navItems.map((item) => {
              const active = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  aria-current={active ? "page" : undefined}
                  href={item.href}
                  className={`focus-ring rounded-full px-2 py-1 text-sm ${
                    active
                      ? "text-white"
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
            className="focus-ring inline-flex items-center rounded-full border border-white/16 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            Latest build
          </a>
        </div>
      </div>
    </header>
  );
}
