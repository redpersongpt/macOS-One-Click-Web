import Link from "next/link";
import Footer from "@/components/Footer";
import { BookOpen, ArrowLeft, Info, ShieldCheck, Cpu } from "lucide-react";

export default function DocsPage() {
  return (
    <main className="min-h-screen selection:bg-primary/30 relative">
      {/* Background (Identical) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#000000]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      </div>

      <div className="relative z-10">
        <nav className="p-6">
          <div className="container mx-auto flex justify-between items-center glass px-6 py-4 rounded-2xl">
            <Link href="/" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <ArrowLeft size={18} />
              <div className="font-black tracking-tighter text-xl">OneClick</div>
            </Link>
            <div className="flex gap-8 text-sm font-bold text-white/50">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Me</Link>
            </div>
          </div>
        </nav>

        <section className="pt-20 pb-32 container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col gap-16">
            <div>
              <h1 className="text-6xl sm:text-7xl font-black leading-[0.9] tracking-tighter text-glow mb-6">
                Documentation
              </h1>
              <p className="text-xl text-white/40 font-medium max-w-2xl">
                Everything you need to know before deploying macOS with OneClick.
              </p>
            </div>

            {/* Before You Begin */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-500" size={32} />
                <h2 className="text-4xl font-black tracking-tight">Before You Begin</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass p-8 rounded-3xl border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu size={20} className="text-white/40" />
                    <h3 className="text-xl font-bold">Hardware Compatibility</h3>
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    Ensure your hardware is supported by the version of macOS you intend to install. Mobile CPUs and specific storage controllers may require additional investigation.
                  </p>
                </div>
                <div className="glass p-8 rounded-3xl border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Info size={20} className="text-white/40" />
                    <h3 className="text-xl font-bold">Basic Prerequisites</h3>
                  </div>
                  <ul className="text-white/50 space-y-2 list-disc list-inside">
                    <li>A high-quality USB 3.0 storage device</li>
                    <li>Access to a macOS or Linux environment</li>
                    <li>Basic understanding of BIOS/UEFI settings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-blue-500/20 bg-blue-500/5">
              <p className="text-lg text-white/80 font-medium">
                Full documentation is available on <Link href="https://github.com/AtaTuncBilge/macOS-One-Click" className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-500/30">GitHub</Link> and directly within the application.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
