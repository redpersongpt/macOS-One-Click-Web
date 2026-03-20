"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    step: "01",
    title: "Inspect the hardware you actually have.",
    hook: "OneClick starts with a grounded scan, not a dream configuration. Devices, chipsets, and likely blockers are surfaced before the build path is proposed.",
    proof: "Device map · Blocker scan · Base profile",
  },
  {
    step: "02",
    title: "Assemble an EFI plan with reasons attached.",
    hook: "Every kext, SMBIOS choice, and ACPI adjustment is paired with rationale so the generated output reads like an engineering note, not a black box.",
    proof: "Kext rationale · ACPI notes · SMBIOS choice",
  },
  {
    step: "03",
    title: "Gate the risky parts before they go live.",
    hook: "Validation happens before the write step. Unsupported combinations, shaky assumptions, and known boot blockers are flagged instead of glossed over.",
    proof: "Pre-write validation · Conflict flags · Risk gate",
  },
  {
    step: "04",
    title: "Move from report to installer with a visible trail.",
    hook: "You see the report, review the notes, and only then decide whether the deployment should continue. The process is meant to slow down bad installs.",
    proof: "Review report · Export summary · Controlled handoff",
  },
];

export default function Features() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="balance-text mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            The product story should read like a sequence, not a stack of dark
            rectangles.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/72 sm:text-lg">
            The site now moves from hardware inspection to decision support.
            Each stage exists to make the next step more honest.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
          <div className="grid gap-5">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="surface-panel rounded-[1.75rem] p-7 sm:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                      Step {feature.step}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/72 sm:text-lg">
                      {feature.hook}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/54">
                    {feature.proof}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="section-band rounded-[2rem] border border-white/10 p-7"
          >
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--accent)]">
              Expected outcomes
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Supported path",
                  detail:
                    "Clear compatibility route with enough confidence to proceed.",
                  tone: "bg-emerald-400",
                },
                {
                  label: "Manual review needed",
                  detail:
                    "Possible route, but with hardware caveats or unresolved assumptions.",
                  tone: "bg-amber-300",
                },
                {
                  label: "Blocked",
                  detail:
                    "Known incompatibility or a setup that should not be deployed blindly.",
                  tone: "bg-rose-400",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-white/10 bg-black/18 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
                    <h3 className="text-base font-medium text-white">
                      {item.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/66">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
