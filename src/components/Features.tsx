"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Your hardware, actually understood.",
    hook: "Full system scan. CPU, GPU, audio, network — identified and matched to the right kexts, patches, and SMBIOS profile.",
    proof: "SMBIOS reasoning · Kext selection · Hardware fingerprint",
  },
  {
    title: "Not just a build. A full explanation.",
    hook: "Every config choice comes with context. Know why a kext was included, why a patch was applied, and what each ACPI entry does.",
    proof: "Kext breakdown · ACPI rationale · Config annotations",
  },
  {
    title: "Validation before damage.",
    hook: "Your EFI is checked against known constraints before it's written. Incompatible setups are blocked, not hidden.",
    proof: "Pre-write validation · Conflict detection · Compatibility gate",
  },
];

export default function Features() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                {f.title}
              </h3>
              <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-2xl">
                {f.hook}
              </p>
              <p className="mt-5 text-xs font-mono text-white/20 tracking-wide">
                {f.proof}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
