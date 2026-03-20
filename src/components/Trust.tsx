"use client";

import Link from "next/link";
import { Ban, FileSearch, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const guardrails = [
  {
    icon: FileSearch,
    title: "Explain",
    text: "Every path should stay readable.",
  },
  {
    icon: ShieldAlert,
    title: "Flag",
    text: "Risk shows up before write.",
  },
  {
    icon: Ban,
    title: "Block",
    text: "Bad configs stop cold.",
  },
];

export default function Trust() {
  return (
    <section id="safety" className="relative py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Safety gates</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            No soft promises.
          </h2>
          <p className="mb-8 mt-3 max-w-xl text-sm leading-relaxed text-white/64 sm:text-base">
            If the setup is shaky, the tool should feel sharp enough to say no.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:items-stretch">
          {guardrails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="surface-panel rounded-[1.5rem] p-5"
              >
                <Icon size={20} className="text-[var(--accent)]" />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/66">
                  {item.text}
                </p>
              </motion.div>
            );
          })}

          <div className="flex items-center md:justify-end">
            <Link
              href="/docs"
              className="focus-ring inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/88 hover:bg-white/[0.08]"
            >
              Read docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
