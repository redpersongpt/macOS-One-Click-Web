"use client";

import { motion } from "framer-motion";
import { BookOpen, AlertTriangle, Info, Check } from "lucide-react";
import Footer from "@/components/Footer";

const troubleshootingData = [
  { id: 1, category: 'OpenCore Boot Issues', error: 'Stuck at Apple Logo', fix: 'Enable "AppleCpuPmCfgLock" and "AppleXcpmCfgLock" in your config.plist if your BIOS has CFG-Lock enabled.' },
  { id: 2, category: 'OpenCore Boot Issues', error: 'EB|#LOG:EXITBS:START', fix: 'Usually an issue with DevirtualiseMmio or SetupVirtualMap. Ensure "DevirtualiseMmio" is True for Z390/X299.' },
  { id: 3, category: 'Kernel Issues', error: 'Kernel Panic: AppleIntelCPUPowerManagement', fix: 'NullCPUPowerManagement.kext is missing or you need to enable CfgLock patches.' },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#000000]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      </div>

      <div className="relative z-10 h-full">
        {/* Navigation spacer */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6">
          <div className="container mx-auto flex justify-between items-center glass px-6 py-4 rounded-2xl">
             <div className="font-black tracking-tighter text-xl">macOS OneClick</div>
              <div className="flex gap-8 text-sm font-bold text-white/50">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <a href="https://github.com/AtaTuncBilge/macOS-One-Click" className="hover:text-white transition-colors">GitHub</a>
              </div>
          </div>
        </nav>

        <section className="pt-40 pb-20 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 rounded-2xl glass border-white/10">
                <BookOpen size={32} className="text-blue-500" />
              </div>
              <h1 className="text-5xl font-black tracking-tighter">Documentation</h1>
            </div>

            <div className="space-y-12">
              {/* Before You Begin */}
              <section className="glass p-8 sm:p-12 rounded-[3rem] border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <Info size={24} className="text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">Before You Begin</h2>
                </div>

                <div className="space-y-8 text-white/50 leading-relaxed text-lg">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3 tracking-tight flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      Hardware Compatibility Note
                    </h3>
                    <p>
                      OneClick is designed to support a wide range of modern hardware, primarily focusing on Intel and AMD systems. Ensure your CPU supports SSE4.2 and your GPU is compatible with Metal (highly recommended for macOS Mojave and newer).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-xl mb-3 tracking-tight flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      Basic Prerequisites
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Minimum 16GB USB 3.0 Drive</li>
                      <li>Basic understanding of BIOS/UEFI settings (VT-d, Secure Boot, etc.)</li>
                      <li>Stable internet connection for initial setup and recovery download</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-xl mb-3 tracking-tight flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      Short explanation before running OneClick
                    </h3>
                    <p>
                      macOS OneClick automates the heavy lifting of OpenCore configuration and deployment. It detects your hardware signatures to generate the most compatible setup possible, reducing the risk of boot failures and kernel panics.
                    </p>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section className="glass p-8 sm:p-12 rounded-[3rem] border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 rounded-lg bg-red-500/20 border border-red-500/30">
                    <AlertTriangle size={24} className="text-red-400" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">Troubleshooting</h2>
                </div>

                <div className="space-y-6">
                  {troubleshootingData.map((it) => (
                    <div key={it.id} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{it.category}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">{it.error}</h4>
                      <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] block mb-2">Recommended Fix</span>
                        <p className="text-white/70 leading-relaxed">{it.fix}</p>
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
