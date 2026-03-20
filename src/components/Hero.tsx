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
import BrandIcon from "./BrandIcon";
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
    <section className="relative overflow-hidden pb-14 pt-10 sm:pb-16 sm:pt-14">
      <div className="container mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black">
              <BrandIcon className="h-4 w-4 text-white" />
            </span>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-white/58">
              macOS OneClick
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="balance-text max-w-3xl text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-[4.7rem]">
              macOS needs the right EFI.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-md text-base leading-relaxed text-white/68 sm:text-lg"
          >
            Scan. Build. Validate. No fake specs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {proofPills.map((pill) => {
              const Icon = pill.icon;

              return (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-3 py-1.5 text-sm text-white/70"
                >
                  <Icon size={15} className="text-white" />
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
              className="focus-ring inline-flex items-center gap-2.5 rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              <Download size={16} />
              Download latest build
            </a>
            <Link
              href="/docs"
              className="focus-ring inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white hover:bg-white/[0.06]"
            >
              Read setup docs
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative lg:ml-auto lg:w-full lg:max-w-[360px]"
        >
          <div className="surface-panel-strong relative overflow-hidden rounded-[1.8rem] p-3.5 sm:p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-[1.1rem] border border-white/8 bg-black/20 px-3.5 py-2.5">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/48">
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
