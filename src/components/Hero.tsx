"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  FileCode2,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import InteractiveTerminal from "./InteractiveTerminal";

const proofPills = [
  {
    icon: ScanSearch,
    label: "Real scan",
  },
  {
    icon: FileCode2,
    label: "Clean EFI path",
  },
  {
    icon: ShieldCheck,
    label: "Hard stop on bad configs",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,440px)] lg:items-center">
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
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Scan the hardware. Build the path. Block the bad write. No fake
            machine readout. No mystery config.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {proofPills.map((pill) => {
              const Icon = pill.icon;

              return (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/72"
              >
                <Icon size={15} className="text-[var(--accent)]" />
                {pill.label}
              </span>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
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
              href="#flow"
              className="focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70 hover:text-white"
            >
              <ShieldCheck size={16} />
              See the flow
            </a>
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
                <p className="mt-1 text-sm text-white/64">
                  Sample output. Not your phone. Not fake live specs.
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/58">
                Review first
              </div>
            </div>
            <InteractiveTerminal />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
