"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Youtube, User } from "lucide-react";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
                <User size={32} className="text-blue-500" />
              </div>
              <div>
                <h1 className="text-5xl font-black tracking-tighter">About Me</h1>
                <p className="text-white/40 font-bold uppercase tracking-widest text-sm mt-1">By Red Person</p>
              </div>
            </div>

            <div className="glass p-8 sm:p-12 rounded-[3rem] border-white/5 bg-gradient-to-b from-white/5 to-transparent space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-black italic">waddup gang</h3>
              </div>
              
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                "I&apos;m a system trainee working in IT. I don&apos;t claim to be a senior architect or a tech mogul. I&apos;m just someone who found themselves fascinated by the bridge between hardware and software."
              </p>

              <div className="space-y-6 text-white/50 leading-relaxed text-lg">
                <h4 className="text-white font-bold text-xl tracking-tight">Who built OneClick</h4>
                <p>
                  I am the developer behind the macOS OneClick project. My focus is on creating tools that bridge the gap between complex system configurations and user accessibility.
                </p>

                <h4 className="text-white font-bold text-xl tracking-tight">Why the project exists</h4>
                <p>
                  This project started as a personal challenge to automate what was once a grueling manual process. It grew into a community tool designed to empower users with the same curiosity—to help them understand their hardware and deploy macOS with confidence, not just one click.
                </p>

                <h4 className="text-white font-bold text-xl tracking-tight">YouTube channel link</h4>
                <div className="pt-4">
                  <a 
                    href="https://www.youtube.com/@redpersonn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-red-600/10 border border-red-600/20 text-red-400 font-black hover:bg-red-600/20 transition-all"
                  >
                    <Youtube size={24} /> My Channel
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
