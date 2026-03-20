"use client";

import { motion } from "framer-motion";

const scanResults = [
  { label: "CPU", value: "Intel Core i5-9400F" },
  { label: "GPU", value: "Intel UHD Graphics 630" },
  { label: "Audio", value: "Realtek ALC887" },
  { label: "Ethernet", value: "Intel I219-V" },
];

export default function ProductProof() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mock System Report */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm"
          >
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              {/* Window Chrome */}
              <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[11px] text-white/20 ml-2">
                  OneClick — System Report
                </span>
              </div>

              {/* Hardware Scan */}
              <div className="p-5 space-y-2 border-b border-white/[0.06]">
                <div className="text-[11px] text-white/25 uppercase tracking-widest mb-3">
                  Hardware Scan
                </div>
                {scanResults.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-0.5"
                  >
                    <span className="text-white/25">{item.label}</span>
                    <span className="text-white/60">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Verdict */}
              <div className="p-5 border-b border-white/[0.06]">
                <div className="text-[11px] text-white/25 uppercase tracking-widest mb-3">
                  Verdict
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-glow-pulse" />
                  <span className="text-green-400 font-medium text-[13px]">
                    Compatible — High Confidence
                  </span>
                </div>
                <div className="text-white/30 text-xs space-y-0.5">
                  <div>Target: macOS Sonoma 14.4</div>
                  <div>SMBIOS: iMac19,1</div>
                </div>
              </div>

              {/* EFI Summary */}
              <div className="p-5">
                <div className="text-[11px] text-white/25 uppercase tracking-widest mb-3">
                  EFI Configuration
                </div>
                <div className="text-white/40 text-xs space-y-0.5">
                  <div>OpenCore 0.9.7</div>
                  <div>12 Kexts · 4 ACPI patches · 3 Quirks</div>
                  <div className="text-green-400/60">
                    All entries validated
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 leading-tight">
              This is what it looks like
              <br />
              when it works.
            </h2>
            <div className="space-y-5 text-white/40 text-base leading-relaxed">
              <p>
                OneClick scans your actual hardware — not a generic profile.
                Every component is identified, matched against known
                compatibility data, and used to generate an EFI specific to your
                system.
              </p>
              <p>
                The confidence score reflects how well your hardware maps to
                tested configurations. The EFI summary shows exactly what was
                built and why.
              </p>
              <p>
                Nothing is written until validation passes. If something
                doesn&apos;t check out, you&apos;ll know before your disk does.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
