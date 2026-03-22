"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STEPS = [
  { text: "$ OpCore-OneClick deploy", delay: 0 },
  { text: "✔ Detecting hardware", delay: 1 },
  { text: "✔ Generating OpenCore config", delay: 2 },
  { text: "✔ Patching kernel extensions", delay: 3 },
  { text: "✔ Preparing macOS installer", delay: 4 },
  { text: "✔ Deployment ready", delay: 5, highlight: true },
];

export default function TerminalMock() {
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSteps((prev) => (prev < STEPS.length ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl glass rounded-xl overflow-hidden shadow-2xl animate-float">
      {/* Terminal Header */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
          <div className="w-3 h-3 rounded-full bg-green-400/50" />
        </div>
        <div className="flex-1 text-center font-mono text-xs text-white/30">
          zsh — 128x64
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm sm:text-base min-h-[300px] flex flex-col gap-2">
        {STEPS.slice(0, visibleSteps).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${step.highlight ? "text-primary font-bold" : "text-white/80"}`}
          >
            {step.text}
          </motion.div>
        ))}
        {visibleSteps < STEPS.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 bg-primary/80"
          />
        )}
      </div>
    </div>
  );
}
