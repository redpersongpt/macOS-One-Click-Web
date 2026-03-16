import Link from "next/link";
import Footer from "@/components/Footer";
import { Youtube, User, ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen selection:bg-primary/30 relative">
      {/* Background Layer (Identical to Home) */}
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
              <Link href="https://github.com/AtaTuncBilge/macOS-One-Click" className="hover:text-white transition-colors">GitHub</Link>
            </div>
          </div>
        </nav>

        <section className="pt-20 pb-32 container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col gap-12">
            <div>
              <h1 className="text-6xl sm:text-7xl font-black leading-[0.9] tracking-tighter text-glow mb-4">
                About Me
              </h1>
              <p className="text-xl text-white/40 font-bold uppercase tracking-widest">By Red Person</p>
            </div>

            <div className="glass p-12 rounded-[3rem] border-white/5 bg-gradient-to-b from-white/5 to-transparent flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <User size={28} className="text-blue-500" />
                </div>
                <h2 className="text-3xl font-black italic tracking-tight">waddup gang</h2>
              </div>
              
              <p className="text-2xl text-white/80 font-medium leading-relaxed italic">
                &quot;I&apos;m a system trainee working in IT. I don&apos;t claim to be a senior architect or a tech mogul. I&apos;m just someone who found themselves fascinated by the bridge between hardware and software.&quot;
              </p>

              <div className="space-y-6 text-lg text-white/50 leading-relaxed">
                <p>
                  OneClick started as a personal challenge to automate what was once a grueling manual process. It grew into a tool designed to empower users with the same curiosity—to help them understand their hardware and deploy macOS with confidence.
                </p>
                <p>
                  No marketing fluff, no fake achievements. Just reliable tools for the community.
                </p>
              </div>

              <div className="pt-6">
                <a 
                  href="https://www.youtube.com/@redpersonn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-black text-lg hover:bg-red-500/20 transition-all"
                >
                  <Youtube size={22} /> My Channel
                </a>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
