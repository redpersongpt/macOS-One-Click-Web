import BrandIcon from "./BrandIcon";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <BrandIcon className="w-6 h-6 text-white" />
          <span className="font-black text-xl tracking-tighter">macOS OneClick</span>
        </div>
        
        <div className="flex gap-10">
          {["Platform", "GitHub", "About Me", "Legal"].map((link) => (
            <a 
              key={link} 
              href={link === "About Me" ? "/about" : link === "GitHub" ? "https://github.com/redpersongpt/macOS-One-Click" : "#"} 
              className="text-white/30 hover:text-white font-bold text-sm transition-colors uppercase tracking-widest leading-none flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-white/10" />
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
