import Link from "next/link";
import BrandIcon from "@/components/BrandIcon";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductProof from "@/components/ProductProof";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-sm tracking-tight text-white/70 hover:text-white transition-colors"
          >
            <BrandIcon className="w-4 h-4" />
            macOS OneClick
          </Link>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a
              href="https://github.com/redpersongpt/macOS-One-Click"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/docs"
              className="hover:text-white/60 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/about"
              className="hover:text-white/60 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <Hero />
        <Features />
        <ProductProof />
        <Trust />
        <Footer />
      </div>
    </main>
  );
}
