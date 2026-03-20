"use client";

import { motion } from "framer-motion";
import { FileCode2, ScanSearch, ShieldAlert } from "lucide-react";

const FEATURES = [
  {
    icon: ScanSearch,
    step: "01",
    title: "Scan",
    hook: "CPU, GPU, audio, network. Real hardware only.",
  },
  {
    icon: FileCode2,
    step: "02",
    title: "Build",
    hook: "Kexts, patches, SMBIOS, boot args. With notes.",
  },
  {
    icon: ShieldAlert,
    step: "03",
    title: "Block",
    hook: "Bad paths stop before anything touches a disk.",
  },
];

export default function Features() {
  return (
    <section id="flow" className="relative py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-8 max-w-xl">
          <p className="eyebrow">Flow</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three moves.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/64 sm:text-base">
            Short, sharp, and dark. That was the point.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="surface-panel rounded-[1.6rem] p-6"
              >
                <div className="flex items-center justify-between">
                  <Icon className="text-[var(--accent)]" size={20} />
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-white/34">
                    {feature.step}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/66">
                  {feature.hook}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
