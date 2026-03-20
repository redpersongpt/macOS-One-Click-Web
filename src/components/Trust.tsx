"use client";

import { motion } from "framer-motion";

const does = [
  "Scans your real hardware and identifies every component",
  "Generates an OpenCore EFI matched to your exact system",
  "Validates every config entry before writing to disk",
  "Explains why each kext, patch, and SMBIOS was chosen",
  "Blocks configurations that would fail or cause instability",
];

const doesNot = [
  "Support hardware that macOS genuinely cannot run on",
  "Fake compatibility results to make builds seem viable",
  "Write to disk without passing validation first",
  "Skip checks or hide known incompatibilities",
  "Guarantee success on untested or exotic configurations",
];

export default function Trust() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Honest about what it does.
          </h2>
          <p className="text-white/35 text-base sm:text-lg mb-14 max-w-2xl">
            Hackintosh tools that overpromise cause real damage. OneClick is
            strict by design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
          >
            <h3 className="text-xs font-mono text-white/25 uppercase tracking-widest mb-6">
              What it does
            </h3>
            <ul className="space-y-4">
              {does.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/50 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/50 shrink-0" />
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
            className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
          >
            <h3 className="text-xs font-mono text-white/25 uppercase tracking-widest mb-6">
              What it doesn&apos;t do
            </h3>
            <ul className="space-y-4">
              {doesNot.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/50 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/15 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
