import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Quick notes and hard boundaries for macOS OneClick.",
  alternates: {
    canonical: "/docs",
  },
};

const prerequisites = [
  "A 16 GB or larger USB 3.0 drive for installer media.",
  "A basic understanding of BIOS or UEFI settings, including Secure Boot and VT-d.",
  "A stable internet connection for downloading installers and support files.",
];

const supportNotes = [
  "This project is intended for systems that can reasonably run macOS with OpenCore-style guidance.",
  "CPU generation, chipset, graphics support, and firmware settings still determine whether a setup is viable.",
  "If your hardware is incomplete or unusually configured, treat the generated output as a starting point, not a guarantee.",
];

export default function DocsPage() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <PageBackdrop />
      <SiteHeader currentPath="/docs" />
      <main id="content" className="relative min-h-screen text-white">
        <section className="container mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Documentation</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Quick notes.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Know what you need. Know what can fail. Stop when the hardware
              path is wrong.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <section className="surface-panel rounded-[1.6rem] p-6 sm:p-7">
                <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/46">
                  Need
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/68">
                  {prerequisites.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="surface-panel rounded-[1.6rem] p-6 sm:p-7">
                <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/46">
                  Boundaries
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/68">
                  {supportNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="mt-6 surface-panel rounded-[1.6rem] p-6 sm:p-7">
              <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/46">
                Next step
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/68">
                If the docs do not match your machine, do not force it.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="focus-ring inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/78 hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  About
                </Link>
                <a
                  href="https://github.com/redpersongpt/macOS-One-Click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/82 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </section>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
