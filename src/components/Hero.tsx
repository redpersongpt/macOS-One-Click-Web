"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, Star, ArrowRight } from "lucide-react";
import TerminalMock from "./TerminalMock";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-white/50 uppercase tracking-widest whitespace-nowrap">v1.2.0 Stable now live</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black leading-[0.9] tracking-tighter text-glow">
            macOS <br /> OneClick
          </h1>

          <p className="text-xl sm:text-2xl text-white/50 font-medium leading-relaxed max-w-md">
            The professional choice for macOS deployment. Engineered for experts, refined by the community.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://github.com/AtaTuncBilge/macOS-One-Click/releases', '_blank')}
              className="bg-white text-black px-8 py-4 rounded-xl font-black text-lg flex items-center gap-2 shadow-2xl transition-shadow"
            >
              <Download size={20} /> Download OneClick
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/docs'}
              className="glass px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2"
            >
              <BookOpen size={20} /> View Documentation
            </motion.button>
          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TerminalMock />
        </motion.div>
      </div>
    </section>
  );
}
