"use client";

import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import Link from "next/link";
import BrandIcon from "@/components/BrandIcon";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-sm tracking-tight text-white/70 hover:text-white transition-colors"
          >
            <BrandIcon className="w-4 h-4" />
            macOS OneClick
          </Link>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a
              href="https://github.com/redpersongpt/macOS-One-Click"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/docs"
              className="hover:text-white/60 transition-colors"
            >
              Docs
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <section className="pt-36 pb-20 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2">
              About
            </h1>
            <p className="text-white/30 text-sm font-mono uppercase tracking-widest mb-12">
              By Red Person
            </p>

            <div className="space-y-8 text-white/45 text-base leading-relaxed">
              <p className="text-white/60 text-lg">
                I&apos;m a system trainee working in IT. I don&apos;t claim to
                be a senior architect or a tech mogul. I&apos;m just someone who
                found themselves fascinated by the bridge between hardware and
                software.
              </p>

              <div>
                <h3 className="text-white/80 font-medium text-lg mb-3">
                  Who built OneClick
                </h3>
                <p>
                  I am the developer behind macOS OneClick. My focus is on
                  creating tools that bridge the gap between complex system
                  configurations and user accessibility.
                </p>
              </div>

              <div>
                <h3 className="text-white/80 font-medium text-lg mb-3">
                  Why the project exists
                </h3>
                <p>
                  This project started as a personal challenge to automate what
                  was once a grueling manual process. It grew into a community
                  tool designed to empower users with the same curiosity — to
                  help them understand their hardware and deploy macOS with
                  confidence.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.youtube.com/@redpersonn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/50 text-sm font-medium hover:bg-white/[0.08] hover:text-white/70 transition-colors"
                >
                  <Youtube size={18} />
                  YouTube Channel
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
