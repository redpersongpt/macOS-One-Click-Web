"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const systemSegments = [
  { label: "Coffee Lake i5-9400F", delay: 0.4 },
  { label: "UHD 630", delay: 0.6 },
  { label: "Sonoma 14.4", delay: 0.8 },
  { label: "High confidence", delay: 1.0, accent: true },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[0.95]"
        >
          The EFI your hardware
          <br />
          actually needs.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-8 text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed"
        >
          Scans your system. Builds a validated OpenCore config.
          <br className="hidden sm:block" />
          Explains every decision before anything touches your disk.
        </motion.p>

        {/* System Summary Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-6 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.06] font-mono text-sm"
        >
          {systemSegments.map((seg, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span className="text-white/15 hidden sm:inline">·</span>
              )}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: seg.delay, duration: 0.4 }}
                className={
                  seg.accent
                    ? "flex items-center gap-2 text-green-400"
                    : "text-white/50"
                }
              >
                {seg.accent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-glow-pulse" />
                )}
                {seg.label}
              </motion.span>
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="https://github.com/redpersongpt/macOS-One-Click/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-[#050505] font-medium rounded-lg text-sm hover:bg-white/90 transition-colors"
          >
            <Download size={16} />
            Download
          </a>
          <a
            href="https://github.com/redpersongpt/macOS-One-Click"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/[0.06] border border-white/[0.08] font-medium rounded-lg text-sm text-white/70 hover:bg-white/[0.1] hover:text-white transition-colors"
          >
            GitHub
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-8 text-xs text-white/25 tracking-wide"
        >
          Validates before writing to disk. Blocks invalid setups.
        </motion.p>
      </div>
    </section>
  );
}
