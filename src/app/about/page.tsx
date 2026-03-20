import type { Metadata } from "next";
import Link from "next/link";
import { Youtube } from "lucide-react";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn who built macOS OneClick, why it exists, and the design principles behind the project.",
  alternates: {
    canonical: "/about",
  },
};

const principles = [
  {
    title: "Build for clarity",
    body: "The project should explain what it is doing before it touches a disk. Clear output matters more than theatrical automation.",
  },
  {
    title: "Prefer constraints over guesses",
    body: "If hardware or configuration data is incomplete, the tool should make that explicit instead of pretending the setup is safe.",
  },
  {
    title: "Keep the path short",
    body: "OneClick is meant to reduce the number of manual steps between hardware detection, validation, and a working OpenCore build.",
  },
];

export default function AboutPage() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <PageBackdrop />
      <SiteHeader currentPath="/about" />
      <main id="content" className="relative min-h-screen text-white">
        <section className="container mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-24">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">
              About the project
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              A small team focus: make a difficult workflow legible, safer, and
              faster.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
              macOS OneClick exists to turn hardware detection and OpenCore
              setup into a guided process. The goal is not to hide complexity.
              The goal is to surface the important decisions before anything is
              written.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="surface-panel rounded-[1.6rem] p-6"
                >
                  <h2 className="text-base font-semibold tracking-tight text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/66">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <section className="surface-panel rounded-[1.8rem] p-7 sm:p-8">
                <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/52">
                  Who built it
                </h2>
                <div className="mt-4 space-y-5 text-base leading-relaxed text-white/72">
                  <p>
                    I&apos;m the developer behind macOS OneClick. The project
                    came from working through a process that was too manual,
                    too easy to misconfigure, and too opaque for a lot of users.
                  </p>
                  <p>
                    The main constraint I keep in mind is trust. If a setup is
                    not compatible, the interface should say that plainly. If a
                    step is risky, the user should see it before they commit to
                    it.
                  </p>
                </div>
              </section>

              <aside className="section-band rounded-[1.8rem] border border-white/10 p-7 sm:p-8">
                <h2 className="text-sm font-mono uppercase tracking-[0.24em] text-white/52">
                  Where to follow
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/68">
                  I keep the project updates and related content on the links
                  below.
                </p>
                <div className="mt-6 space-y-3">
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
                    Read the docs
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
