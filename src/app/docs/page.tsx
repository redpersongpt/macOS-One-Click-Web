"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BrandIcon from "@/components/BrandIcon";
import Footer from "@/components/Footer";

const troubleshootingData = [
  {
    category: "OpenCore Boot Issues",
    error: "Stuck at Apple Logo",
    fix: 'Enable "AppleCpuPmCfgLock" and "AppleXcpmCfgLock" in your config.plist if your BIOS has CFG-Lock enabled.',
  },
  {
    category: "OpenCore Boot Issues",
    error: "EB|#LOG:EXITBS:START",
    fix: 'Usually an issue with DevirtualiseMmio or SetupVirtualMap. Ensure "DevirtualiseMmio" is True for Z390/X299.',
  },
  {
    category: "Kernel Issues",
    error: "Kernel Panic: AppleIntelCPUPowerManagement",
    fix: "NullCPUPowerManagement.kext is missing or you need to enable CfgLock patches.",
  },
];

export default function DocsPage() {
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
              href="/about"
              className="hover:text-white/60 transition-colors"
            >
              About
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
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12">
              Documentation
            </h1>

            <div className="space-y-10">
              {/* Before You Begin */}
              <section className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <h2 className="text-xl font-semibold tracking-tight mb-6">
                  Before You Begin
                </h2>
                <div className="space-y-6 text-white/40 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-white/60 font-medium mb-2">
                      Hardware Compatibility
                    </h3>
                    <p>
                      OneClick supports modern Intel and AMD systems. Ensure
                      your CPU supports SSE4.2 and your GPU is compatible with
                      Metal for macOS Mojave and newer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white/60 font-medium mb-2">
                      Prerequisites
                    </h3>
                    <ul className="list-disc list-inside space-y-1.5 ml-1">
                      <li>Minimum 16GB USB 3.0 drive</li>
                      <li>
                        Basic understanding of BIOS/UEFI settings (VT-d, Secure
                        Boot)
                      </li>
                      <li>Stable internet connection for initial setup</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white/60 font-medium mb-2">
                      How it works
                    </h3>
                    <p>
                      OneClick automates OpenCore configuration and deployment.
                      It detects your hardware signatures to generate the most
                      compatible setup possible, reducing the risk of boot
                      failures and kernel panics.
                    </p>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <h2 className="text-xl font-semibold tracking-tight mb-6">
                  Troubleshooting
                </h2>
                <div className="space-y-5">
                  {troubleshootingData.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                    >
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                        {item.category}
                      </span>
                      <h4 className="text-white/70 font-medium mt-2 mb-3">
                        {item.error}
                      </h4>
                      <div className="p-4 rounded-lg bg-[#050505] border border-white/[0.04]">
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block mb-1.5">
                          Fix
                        </span>
                        <p className="text-white/40 text-sm leading-relaxed">
                          {item.fix}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
