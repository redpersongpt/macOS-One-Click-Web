"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const accepted = [
  "Systems with a plausible OpenCore path and enough signal to reason about.",
  "Operators who want notes, validation, and a report before export.",
  "Hardware checks that can be mapped to explicit configuration choices.",
];

const blocked = [
  "Known incompatibilities that would turn the build into guesswork.",
  "Configs that need unsupported assumptions or blind patching.",
  "Any write flow that tries to skip the review and validation gates.",
];

const checklist = [
  "Hardware profile generated",
  "Risk flags reviewed",
  "EFI notes exported",
  "Write step manually confirmed",
];

export default function Trust() {
  return (
    <section id="safety" className="relative py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Safety gates</p>
          <h2 className="balance-text mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            The right product promise is restraint.
          </h2>
          <p className="mb-14 mt-4 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
            Hackintosh tooling becomes dangerous when it hides uncertainty.
            OneClick should be strict about what it accepts, explicit about
            what it flags, and comfortable saying no.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(260px,0.8fr)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="surface-panel rounded-[1.8rem] p-8 sm:p-9"
          >
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-emerald-300">
              Accepts
            </h3>
            <ul className="mt-6 space-y-4">
              {accepted.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/72"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400/70" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="surface-panel rounded-[1.8rem] p-8 sm:p-9"
          >
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-rose-300">
              Blocks
            </h3>
            <ul className="mt-6 space-y-4">
              {blocked.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/72"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-400/70" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="section-band rounded-[1.8rem] border border-white/10 p-8"
          >
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--accent)]">
              Before write
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-black/18 px-4 py-3 text-sm text-white/72"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/docs"
              className="focus-ring mt-8 inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/88 hover:bg-white/[0.08]"
            >
              Review the docs checklist
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
