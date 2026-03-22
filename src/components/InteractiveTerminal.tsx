"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

type LineType = "command" | "output" | "verdict" | "blank";

interface Line {
  id: number;
  type: LineType;
  text: string;
}

const STEPS: { type: LineType; text: string }[] = [
  { type: "command", text: "inspect --report" },
  { type: "output", text: "[✔] Reading hardware" },
  { type: "output", text: "[✔] Checking blockers" },
  { type: "blank", text: "" },
  { type: "command", text: "build --plan" },
  { type: "output", text: "[✔] Picking config family" },
  { type: "output", text: "[✔] Adding kexts and patches" },
  { type: "blank", text: "" },
  { type: "command", text: "validate" },
  { type: "output", text: "[✔] Running final checks" },
  { type: "blank", text: "" },
  { type: "command", text: "verdict" },
  { type: "verdict", text: "Ready for review" },
];

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [cursor, setCursor] = useState(true);
  const [runKey, setRunKey] = useState(0);
  const runIdRef = useRef(0);
  const lineIdRef = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = ++runIdRef.current;
    lineIdRef.current = 0;
    setLines([]);
    setTyping(null);
    setDone(false);

    const cancelled = () => runIdRef.current !== id;

    const sleep = (ms: number) =>
      new Promise<void>((resolve, reject) => {
        setTimeout(() => (cancelled() ? reject(new Error("cancel")) : resolve()), ms);
      });

    const scroll = () => {
      requestAnimationFrame(() => {
        bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
      });
    };

    const run = async () => {
      try {
        await sleep(700);

        for (const step of STEPS) {
          if (step.type === "blank") {
            setLines((prev) => [
              ...prev,
              { id: lineIdRef.current++, type: "blank", text: "" },
            ]);
            scroll();
            await sleep(120);
            continue;
          }

          if (step.type === "command") {
            for (let i = 0; i <= step.text.length; i += 1) {
              if (cancelled()) {
                return;
              }

              setTyping(step.text.slice(0, i));
              await sleep(28 + Math.random() * 28);
            }

            setTyping(null);
            setLines((prev) => [
              ...prev,
              { id: lineIdRef.current++, type: "command", text: step.text },
            ]);
            scroll();
            await sleep(300);
          } else {
            setLines((prev) => [
              ...prev,
              { id: lineIdRef.current++, type: step.type, text: step.text },
            ]);
            scroll();
            await sleep(step.type === "verdict" ? 250 : 160 + Math.random() * 90);
          }
        }

        setDone(true);
      } catch {
        /* cancelled */
      }
    };

    run();
    return () => {
      runIdRef.current += 1;
    };
  }, [runKey]);

  useEffect(() => {
    const timer = setInterval(() => setCursor((prev) => !prev), 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#050505]/92 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="flex items-center border-b border-white/[0.06] px-3.5 py-2">
          <div className="flex gap-[7px]">
            <div className="h-[11px] w-[11px] rounded-full bg-[#ff5f57] transition-transform duration-300 group-hover:scale-105" />
            <div className="h-[11px] w-[11px] rounded-full bg-[#febc2e] transition-transform duration-300 group-hover:scale-105" />
            <div className="h-[11px] w-[11px] rounded-full bg-[#28c840] transition-transform duration-300 group-hover:scale-105" />
          </div>
          <span className="flex-1 select-none text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/22">
            opcore-oneclick flow
          </span>
          {done && (
            <motion.button
              aria-label="Replay terminal preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setRunKey((key) => key + 1)}
              className="rounded p-1 text-white/20 transition-colors hover:bg-white/[0.06] hover:text-white/50"
            >
              <RotateCcw size={11} />
            </motion.button>
          )}
        </div>

        <div
          ref={bodyRef}
          className="scrollbar-hide h-[210px] overflow-y-auto p-3.5 font-mono text-[10.5px] leading-[1.65] sm:h-[240px] sm:p-4 sm:text-[12px]"
        >
          {lines.map((line) => {
            if (line.type === "blank") {
              return <div key={line.id} className="h-2.5" />;
            }

            return (
              <div
                key={line.id}
                className={`-mx-1.5 rounded px-1.5 transition-colors duration-150 hover:bg-white/[0.025] ${
                  line.type === "verdict" ? "mt-0.5" : ""
                }`}
              >
                {line.type === "command" && (
                  <>
                    <span className="select-none text-white/72">❯ </span>
                    <span className="text-white/82">{line.text}</span>
                  </>
                )}
                {line.type === "output" && (
                  <>
                    <span className="select-none text-white/46">[✔]</span>
                    <span className="text-white/62">{line.text.slice(3)}</span>
                  </>
                )}
                {line.type === "verdict" && (
                  <span className="font-medium text-white">
                    {line.text}
                  </span>
                )}
              </div>
            );
          })}

          {!done && (
            <div>
              <span className="select-none text-white/72">❯ </span>
              {typing !== null && <span className="text-white/82">{typing}</span>}
              <span
                className={`ml-px inline-block h-[14px] w-[6.5px] align-middle transition-opacity duration-75 ${
                  cursor ? "bg-white/60" : "bg-transparent"
                }`}
              />
            </div>
          )}

          {done && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="select-none text-white/72">❯ </span>
              <span
                className={`ml-px inline-block h-[14px] w-[6.5px] align-middle transition-opacity duration-75 ${
                  cursor ? "bg-white/60" : "bg-transparent"
                }`}
              />
            </motion.div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-white/[0.03] blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </div>
  );
}
