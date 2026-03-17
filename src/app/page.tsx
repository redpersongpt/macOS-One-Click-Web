import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#000000]" />
        
        {/* Animated Gradient Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow [animation-delay:2s]" />
        
        {/* Noise Filter Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      </div>

      <div className="relative z-10 h-full">
        {/* Navigation spacer */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6">
          <div className="container mx-auto flex justify-between items-center glass px-6 py-4 rounded-2xl">
             <div className="font-black tracking-tighter text-xl">macOS OneClick</div>
              <div className="flex gap-8 text-sm font-bold text-white/50">
                <a href="#" className="hover:text-white transition-colors">Platform</a>
                <a href="https://github.com/AtaTuncBilge/macOS-One-Click" className="hover:text-white transition-colors">GitHub</a>
                <a href="/about" className="hover:text-white transition-colors">About Me</a>
              </div>
          </div>
        </nav>

        <Hero />
        <Features />
        
        {/* Mission Section */}
        <section className="py-20 text-center container mx-auto px-6">
          <div className="glass p-12 rounded-[3rem] border-primary/5 bg-gradient-to-b from-primary/5 to-transparent">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">Built for reliable <br/> hardware exploration.</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg mb-0">
              OneClick was built to make macOS deployment accessible and reliable. Join the most advanced deployment ecosystem.

            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
