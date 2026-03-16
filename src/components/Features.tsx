"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users } from "lucide-react";

const FEATURES = [
  {
    icon: <Zap size={24} className="text-yellow-400" />,
    title: "Automated OpenCore",
    desc: "Frontier detects your hardware and generates optimized OpenCore setups automatically.",
    color: "rgba(250, 204, 21, 0.1)"
  },
  {
    icon: <Shield size={24} className="text-blue-400" />,
    title: "Expert-Grade Tools",
    desc: "Built for developers who need full control of macOS environments with native precision.",
    color: "rgba(59, 130, 246, 0.1)"
  },
  {
    icon: <Users size={24} className="text-purple-400" />,
    title: "Community Driven",
    desc: "Constantly refined by Hackintosh and macOS power users for maximum compatibility.",
    color: "rgba(168, 85, 247, 0.1)"
  }
];

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group border-white/5"
            >
              {/* Card Glow */}
              <div 
                className="absolute -inset-24 opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${f.color} 0%, transparent 70%)` }}
              />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 mb-6">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{f.title}</h3>
                <p className="text-white/50 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
