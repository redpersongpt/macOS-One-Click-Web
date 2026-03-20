"use client";

import { motion } from "framer-motion";
import BrandIcon from "./BrandIcon";

const scanResults = [
  { label: "Platform class", value: "Intel desktop sample" },
  { label: "Graphics path", value: "Integrated graphics route" },
  { label: "Audio profile", value: "Realtek codec detected" },
  { label: "Networking", value: "Intel ethernet family" },
];

export default function ProductProof() {
  return (
    <section id="proof" className="relative py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Example report</p>
          <h2 className="balance-text mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Show the decision trail, not a fake live machine.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/72 sm:text-lg">
            This panel is explicitly illustrative. The point is the shape of
            the report: detection, confidence, blockers, and the final EFI
            summary before any write step happens.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm"
          >
            <div className="surface-panel-strong overflow-hidden rounded-[2rem]">
              <div className="flex items-center gap-2 border-b border-white/[0.08] px-5 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/12" />
                </div>
                <BrandIcon className="ml-2 h-3 w-3 text-[var(--accent)]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                  Illustrative report
                </span>
              </div>

              <div className="border-b border-white/[0.08] p-5">
                <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  Hardware Scan
                </div>
                <dl className="space-y-3">
                  {scanResults.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 rounded-xl border border-white/6 bg-white/[0.03] px-3 py-2.5"
                    >
                      <dt className="text-white/46">{item.label}</dt>
                      <dd className="text-right text-white/78">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="border-b border-white/[0.08] p-5">
                <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  Verdict
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
                  <span className="text-[13px] font-medium text-emerald-300">
                    Compatible path surfaced for review
                  </span>
                </div>
                <div className="space-y-0.5 text-xs text-white/56">
                  <div className="flex items-center gap-1">
                    <span>Target:</span>
                    <BrandIcon className="h-2.5 w-2.5 text-white/44" />
                    <span>Example Sonoma-era deployment</span>
                  </div>
                  <div>SMBIOS family: desktop sample profile</div>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  EFI Configuration
                </div>
                <div className="space-y-2 text-xs text-white/64">
                  <div>OpenCore release pinned for this export</div>
                  <div>Annotated kext list, ACPI notes, and boot arguments</div>
                  <div className="text-emerald-300/80">
                    Validation passed for the illustrated sample
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="balance-text text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The useful part is the report shape: what was seen, what it
              means, and where the risk lives.
            </h3>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/72">
              <p>
                OneClick should show the operator a legible path from hardware
                detection to EFI export. That means explicit notes, validation
                gates, and visible assumptions instead of ambiguous success
                messaging.
              </p>
              <p>
                Versioned details are presented as examples, not as a fake
                promise that every system receives the same result. The report
                exists to support judgment, not replace it.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {[
                "Blockers are surfaced before export.",
                "Confidence is tied to the detected path, not marketing copy.",
                "Nothing writes until the review state is clear.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
