"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import InteractiveTerminal from "./InteractiveTerminal";

const proofPills = [
  "Hardware-aware scan",
  "Validation before write",
  "Every patch explained",
];

const reviewPoints = [
  "See blockers before touching a disk",
  "Read why a kext or patch was chosen",
  "Move from scan to installer with a visible trail",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20">
      <div className="container mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,460px)] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Built for real hardware paths, not fantasy specs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="balance-text mt-6 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-[5.2rem]"
          >
            Build the OpenCore plan your machine can actually justify.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/74 sm:text-xl"
          >
            macOS OneClick scans the hardware you have, surfaces blockers
            early, and assembles a review-first EFI path with validation notes
            before anything writes to disk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {proofPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-white/66"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://github.com/redpersongpt/macOS-One-Click/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/12 px-6 py-3 text-sm font-medium text-white hover:border-[var(--accent)]/55 hover:bg-[var(--accent)]/18"
            >
              <Download size={16} />
              Download latest build
            </a>
            <Link
              href="/docs"
              className="focus-ring inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/88 hover:bg-white/[0.08]"
            >
              Read setup docs
              <ArrowRight size={16} />
            </Link>
            <a
              href="#safety"
              className="focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70 hover:text-white"
            >
              <ShieldCheck size={16} />
              See the safety gates
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="surface-panel mt-10 rounded-[1.75rem] p-6"
          >
            <div className="mb-5 flex items-center gap-2 text-white/62">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-glow-pulse" />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em]">
                What the landing page should promise
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {reviewPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4 text-sm leading-relaxed text-white/74"
                >
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="surface-panel-strong relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(119,213,255,0.5),transparent)]" />
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-[1.25rem] border border-white/8 bg-black/20 px-4 py-3">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                  Example flow
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Illustrative output, not a fake live hardware readout.
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/58">
                Review first
              </div>
            </div>
            <InteractiveTerminal />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              "Detect real devices",
              "Gate risky configs",
              "Explain the final plan",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
