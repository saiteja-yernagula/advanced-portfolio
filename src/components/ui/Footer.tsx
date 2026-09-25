import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ArrowUp, Terminal, Mail } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080e] pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Persona Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-black font-mono shadow-neon-cyan">
                SY
              </div>
              <span className="font-bold text-white tracking-tight text-lg font-mono">
                Saiteja Yernagula
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="text-xs text-slate-500 font-mono">
              3+ Years of Training • 1000+ Students Mentored • 100+ Companies Placed
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">Origin Story</a></li>
              <li><a href="#skills" className="hover:text-cyan-300 transition-colors">Technical Arsenal</a></li>
              <li><a href="#experience" className="hover:text-cyan-300 transition-colors">Career Journey</a></li>
              <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projectolio</a></li>
              <li><a href="#impact" className="hover:text-cyan-300 transition-colors">Student Impact & Reviews</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Training Services</a></li>
            </ul>
          </div>

          {/* Social Channels & Interactive Tools */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              Connect & Terminal
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenTerminal}
                className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-900/60 transition-colors"
                title="Open Terminal CLI"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[11px] text-slate-500">
              Email: <span className="text-slate-400 font-mono">{PERSONAL_INFO.email}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Saiteja Yernagula. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Crafted for 3D & High-Performance Web</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
