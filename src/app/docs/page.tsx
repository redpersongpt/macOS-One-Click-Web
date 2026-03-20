import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Read the setup notes and compatibility boundaries for macOS OneClick.",
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
        <section className="container mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-24">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">
              Documentation
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Setup notes and hard boundaries.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
              Keep it narrow. Know what the tool expects. Know when to stop.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <section className="surface-panel rounded-[1.8rem] p-7 sm:p-8">
                <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/52">
                  Before you begin
                </h2>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-sm font-semibold text-white">
                      Prerequisites
                    </dt>
                    <dd className="mt-2">
                      <ul className="space-y-2 text-sm leading-relaxed text-white/68">
                        {prerequisites.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300/75" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-white">
                      Support boundaries
                    </dt>
                    <dd className="mt-2 space-y-3 text-sm leading-relaxed text-white/68">
                      {supportNotes.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </dd>
                  </div>
                </dl>
              </section>

              <section className="section-band rounded-[1.8rem] border border-white/10 p-7 sm:p-8">
                <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/52">
                  How it works
                </h2>
                <ol className="mt-5 space-y-4 text-sm leading-relaxed text-white/68">
                  <li className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    Detect the target hardware and extract the compatibility
                    signals the build needs.
                  </li>
                  <li className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    Build the OpenCore configuration with the necessary
                    kexts, quirks, and boot settings.
                  </li>
                  <li className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    Validate the output before writing anything to disk so
                    unsafe setups can be stopped early.
                  </li>
                </ol>
              </section>
            </div>

            <section className="mt-6 surface-panel rounded-[1.8rem] p-7 sm:p-8">
              <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/52">
                Next step
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68">
                If the documentation does not match your hardware, the safer
                move is to confirm compatibility before continuing.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="focus-ring inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/78 hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  About the project
                </Link>
                <a
                  href="https://github.com/redpersongpt/macOS-One-Click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/82 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  View the repository
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
