import type { Metadata } from "next";
import Link from "next/link";
import { Youtube } from "lucide-react";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by one developer. Short notes on why macOS OneClick exists.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <PageBackdrop />
      <SiteHeader currentPath="/about" />
      <main id="content" className="relative min-h-screen text-white">
        <section className="container mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built by one person.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              I made macOS OneClick because the manual path was slow, messy,
              and too easy to screw up. The goal is simple: scan the machine,
              show the risks, and keep the output readable.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-[1fr_0.8fr]">
              <section className="surface-panel rounded-[1.6rem] p-6 sm:p-7">
                <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/46">
                  What matters
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/68">
                  <li>Clarity over theater.</li>
                  <li>Constraints over guesses.</li>
                  <li>Trust before write.</li>
                </ul>
              </section>

              <aside className="surface-panel rounded-[1.6rem] p-6 sm:p-7">
                <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/46">
                  Follow
                </h2>
                <div className="mt-4 space-y-3">
                  <a
                    href="https://www.youtube.com/@redpersonn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/82 hover:border-white/20 hover:bg-white/8 hover:text-white"
                  >
                    <Youtube size={18} />
                    YouTube Channel
                  </a>
                  <Link
                    href="/docs"
                    className="focus-ring inline-flex w-full items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/75 hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    Docs
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
