import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Read the setup notes, compatibility guidance, and troubleshooting reference for macOS OneClick.",
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

const troubleshootingData = [
  {
    category: "Boot stage",
    error: "Stuck at Apple logo",
    fix: 'Check CFG-Lock handling in BIOS and confirm the relevant OpenCore settings are enabled for your platform.',
  },
  {
    category: "Boot stage",
    error: "EB|#LOG:EXITBS:START",
    fix: 'Review memory map and virtualisation-related quirks such as DevirtualiseMmio or SetupVirtualMap for the target board.',
  },
  {
    category: "Kernel stage",
    error: "Kernel panic on power management",
    fix: "Verify CPU power-management patches and confirm the required kexts are present in the EFI build.",
  },
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
              Setup guidance, compatibility notes, and a narrow troubleshooting
              reference.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
              The notes below are intentionally scoped. They describe the
              assumptions the project makes, the limits of those assumptions,
              and the most common failure points users should check first.
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

            <section className="mt-6 rounded-[1.8rem] border border-amber-400/15 bg-amber-400/8 p-7 sm:p-8">
              <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-amber-100/70">
                Troubleshooting
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-amber-50/78">
                Use these notes as first-pass checks. They are not universal
                fixes, and the exact settings still depend on the board, CPU,
                GPU, and firmware you are working with.
              </p>

              <div className="mt-6 grid gap-4">
                {troubleshootingData.map((item) => (
                  <article
                    key={item.error}
                    className="rounded-2xl border border-white/8 bg-[#050505]/60 p-5"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-white/45">
                        {item.category}
                      </span>
                      <h3 className="text-base font-semibold text-white">
                        {item.error}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                      {item.fix}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="surface-panel rounded-[1.8rem] p-7 sm:p-8">
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
