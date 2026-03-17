import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, HelpCircle, Github, User, ArrowLeft, Search, 
  ChevronDown, AlertTriangle, Info, Check, X 
} from 'lucide-react';
import BrandIcon from './components/BrandIcon';
import AboutStep from './components/AboutStep';

// Ported troubleshooting data
const troubleshootingData = [
  { id: 1, category: 'OpenCore Boot Issues', error: 'Stuck at Apple Logo', fix: 'Enable "AppleCpuPmCfgLock" and "AppleXcpmCfgLock" in your config.plist if your BIOS has CFG-Lock enabled.', severity: 'error' },
  { id: 2, category: 'OpenCore Boot Issues', error: 'EB|#LOG:EXITBS:START', fix: 'Usually an issue with DevirtualiseMmio or SetupVirtualMap. Ensure "DevirtualiseMmio" is True for Z390/X299.', severity: 'error' },
  { id: 3, category: 'Kernel Issues', error: 'Kernel Panic: AppleIntelCPUPowerManagement', fix: 'NullCPUPowerManagement.kext is missing or you need to enable CfgLock patches.', severity: 'critical' },
];

const CATS = ['All', 'OpenCore Boot Issues', 'Kernel Issues', 'Userspace Issues'] as const;

export default function App() {
  const [view, setView] = useState<'landing' | 'about' | 'troubleshoot'>('landing');
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState<string>('All');

  const filteredIssues = useMemo(() =>
    troubleshootingData.filter((it: any) => {
      const matchCat = cat === 'All' || it.category === cat;
      const q = search.toLowerCase();
      const matchQ = !q || it.error.toLowerCase().includes(q) || it.fix.toLowerCase().includes(q) || it.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    }), [search, cat]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans flex items-center justify-center p-4 overflow-hidden relative" style={{ fontFamily: 'var(--font-sans)', display: 'flex' }}>
      <div className="bg-grain" />
      
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            translateX: ['-10%', '10%', '-10%'],
            translateY: ['-10%', '5%', '-10%'],
            opacity: [0.15, 0.25, 0.15] 
          }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
          className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-blue-600/40 rounded-full blur-[200px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            translateX: ['10%', '-10%', '10%'],
            translateY: ['10%', '-5%', '10%'],
            opacity: [0.1, 0.2, 0.1] 
          }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }} 
          className="absolute bottom-[-30%] right-[-20%] w-[90%] h-[90%] bg-purple-600/30 rounded-full blur-[200px]" 
        />
      </div>

      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div 
            key="landing" 
            initial={{ opacity: 0, scale: 0.98, y: 10 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '42rem', padding: '0 1.5rem' }}
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: '10rem',
                height: '10rem',
                marginBottom: '2.5rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '2.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundColor: '#3b82f6', borderRadius: '9999px', filter: 'blur(4rem)', opacity: 0.2 }} />
              <BrandIcon style={{ width: '6rem', height: '6rem', color: 'white', position: 'relative', zIndex: 10 }} />
            </motion.div>
            
            <h1 style={{ fontSize: '5.5rem', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: '1.5rem', color: 'white', lineHeight: 0.9 }}>
              macOS <br/> OneClick
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '3rem', lineHeight: 1.625, fontWeight: 500, maxWidth: '32rem' }}>
              The professional choice for macOS deployment. Engineered for experts, refined by the community.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
              <button 
                onClick={() => window.open('https://github.com/AtaTuncBilge/macOS-One-Click/releases', '_blank')}
                style={{
                  padding: '2rem',
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '1.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  border: 'none',
                  height: '11rem',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                <Download style={{ width: '2rem', height: '2rem' }} />
                <span>Download App</span>
              </button>
              
              <button 
                onClick={() => setView('troubleshoot')}
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  borderRadius: '1.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  height: '11rem',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <HelpCircle style={{ width: '2rem', height: '2rem', opacity: 0.4 }} />
                <span>Troubleshoot</span>
              </button>

              <button 
                onClick={() => window.open('https://github.com/AtaTuncBilge/macOS-One-Click', '_blank')}
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  borderRadius: '1.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  height: '11rem',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <Github style={{ width: '2rem', height: '2rem', opacity: 0.4 }} />
                <span>GitHub Source</span>
              </button>

              <button 
                onClick={() => setView('about')}
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  borderRadius: '1.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  height: '11rem',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <User style={{ width: '2rem', height: '2rem', opacity: 0.4 }} />
                <span>About Me</span>
              </button>
            </div>

            <p className="mt-12 text-[10px] text-white/20 font-mono uppercase tracking-[0.4em]">
              Frontier Release · Redcore Ecosystem
            </p>
          </motion.div>
        )}

        {(view === 'about' || view === 'troubleshoot') && (
          <motion.div 
            key="subview"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 10 }}
            style={{
              zIndex: 10,
              width: '100%',
              maxWidth: '56rem',
              height: '720px',
              backgroundColor: 'rgba(26, 26, 26, 0.55)',
              backdropFilter: 'blur(80px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              padding: '2.5rem',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            {view === 'about' && <AboutStep onBack={() => setView('landing')} />}
            
            {view === 'troubleshoot' && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button onClick={() => setView('landing')} style={{ padding: '0.5rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', cursor: 'pointer' }}>
                    <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
                  </button>
                  <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', letterSpacing: '-0.025em' }}>Support Center</h2>
                </div>

                <div style={{ position: 'relative' }}>
                  <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: 'rgba(255, 255, 255, 0.2)' }} />
                  <input 
                    value={search} onChange={e => setSearch(e.target.value)}
                    placeholder="Search errors, fixes, or hardware..."
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '1.25rem',
                      padding: '1rem 1rem 1rem 3rem',
                      outline: 'none',
                      color: 'white',
                      fontSize: '1.125rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', paddingBottom: '0.5rem' }}>
                  {CATS.map(c => (
                    <button 
                      key={c} 
                      onClick={() => setCat(c)} 
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        transition: 'all 0.2s',
                        cursor: 'pointer',
                        backgroundColor: cat === c ? 'white' : 'rgba(255, 255, 255, 0.05)',
                        color: cat === c ? 'black' : 'rgba(255, 255, 255, 0.4)',
                        border: 'none'
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                <div className="custom-scrollbar" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingRight: '0.5rem' }}>
                  {filteredIssues.map(it => (
                    <div key={it.id} style={{ padding: '1.25rem', borderRadius: '1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'left' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <div style={{ padding: '0.25rem', borderRadius: '0.375rem', backgroundColor: it.severity === 'error' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(59, 130, 246, 0.2)', color: it.severity === 'error' ? '#ef4444' : '#3b82f6' }}>
                          {it.severity === 'error' ? <AlertTriangle style={{ width: '1rem', height: '1rem' }} /> : <Info style={{ width: '1rem', height: '1rem' }} />}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255, 255, 255, 0.3)' }}>{it.category}</span>
                      </div>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>{it.error}</h4>
                      <div style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.625, fontSize: '0.875rem', backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontWeight: 'bold', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase', fontSize: '10px' }}>Fix</span>
                        {it.fix}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', opacity: 0.1, pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BrandIcon style={{ width: '1rem', height: '1rem', color: 'white' }} />
              <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'white' }}>Frontier Web</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
