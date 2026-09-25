import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileText, Menu, X, Send } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'YouTube', href: '#youtube' },
    { name: 'LinkedIn', href: '#linkedin' },
    { name: 'Impact', href: '#impact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'youtube', 'linkedin', 'impact', 'faq', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-[#0b0e18]/85 backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-cyan-950/30'
            : 'bg-[#0b0e18]/50 backdrop-blur-md border border-white/5'
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-black font-mono shadow-neon-cyan group-hover:scale-105 transition-transform">
            SY
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-white tracking-tight text-sm sm:text-base font-mono">
              <span>Saiteja</span>
              <span className="text-cyan-400">.dev</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono -mt-1 hidden sm:block">
              Trainer & Developer
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1 bg-[#101524]/60 p-1 rounded-xl border border-white/5">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30 shadow-neon-cyan'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141b2e] hover:bg-[#1a233b] border border-cyan-500/30 text-cyan-400 text-xs font-mono transition-all hover:shadow-neon-cyan"
            title="Launch Terminal CLI"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI</span>
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-neon-cyan transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#0d111c]/95 backdrop-blur-2xl border border-cyan-500/30 p-4 shadow-2xl pointer-events-auto space-y-2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-mono flex items-center justify-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" /> Launch CLI
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" /> View Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
