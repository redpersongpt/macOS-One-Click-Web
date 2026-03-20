import Link from "next/link";
import BrandIcon from "./BrandIcon";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/[0.05]">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <span className="flex items-center gap-2 text-sm text-white/20">
          <BrandIcon className="w-3.5 h-3.5" />
          macOS OneClick
        </span>
        <div className="flex items-center gap-6 text-sm text-white/20">
          <a
            href="https://github.com/redpersongpt/macOS-One-Click"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors"
          >
            GitHub
          </a>
          <Link href="/docs" className="hover:text-white/50 transition-colors">
            Docs
          </Link>
          <Link
            href="/about"
            className="hover:text-white/50 transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
