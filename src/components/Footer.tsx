import BrandIcon from "./BrandIcon";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <BrandIcon className="w-6 h-6 text-white" />
          <span className="font-black text-xl tracking-tighter">OneClick</span>
        </div>
        
        <div className="flex gap-10">
          {["GitHub", "About", "License"].map((link) => (
            <a 
              key={link} 
              href={link === "About" ? "/about" : link === "GitHub" ? "https://github.com/AtaTuncBilge/macOS-One-Click" : "#"} 
              className="text-white/30 hover:text-white font-bold text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
