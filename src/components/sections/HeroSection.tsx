import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Play, Server, Database, Code2 } from 'lucide-react';
import { HeroCanvas3D } from '../3d/HeroCanvas3D';
import { MagneticButton } from '../ui/MagneticButton';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

const ROLES = [
  "Python Full Stack Trainer",
  "React & Django Developer",
  "Career & Placement Mentor",
  "Pedagogy Architect"
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-32 pb-16 flex items-center overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Value Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0c1222]/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono backdrop-blur-xl shadow-neon-cyan"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full-Stack Training & Mentorship</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <div className="text-slate-400 font-mono text-sm sm:text-base flex items-center gap-2">
                <span>Hello, World! I am</span>
                <span className="text-cyan-400 font-bold">Saiteja Yernagula</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-display">
                I build <span className="text-gradient-cyan">developers</span>,<br />
                not just coders.
              </h1>
            </div>

            {/* Dynamic Role Rotator */}
            <div className="flex items-center gap-2 font-mono text-lg sm:text-xl text-purple-300 h-8">
              <span className="text-slate-500">&gt;</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-bold text-gradient-amber"
              >
                {ROLES[roleIndex]}
              </motion.span>
              <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block" />
            </div>

            {/* Inspiring Core Story Hook */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              From coding HTML & JavaScript on a <span className="text-white font-semibold underline decoration-cyan-500 underline-offset-4">mobile phone</span> to training <span className="text-cyan-400 font-bold">1000+ students</span> across top institutions — I turn complex tech stacks into intuitive, project-first developer mindsets.
            </p>

            {/* Action Buttons Group with GSAP Magnetic Attraction */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <MagneticButton href="#projectolio-demo" strength={25}>
                <div className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-neon-cyan transition-all flex items-center gap-2 hover:scale-105 active:scale-95 group cursor-pointer">
                  <Play className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
                  <span>Live Project Demo</span>
                </div>
              </MagneticButton>

              <MagneticButton onClick={onOpenTerminal} strength={25}>
                <div className="px-5 py-3.5 rounded-xl bg-[#0e1424] hover:bg-[#151f38] border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold transition-all flex items-center gap-2 hover:shadow-neon-cyan hover:scale-105 cursor-pointer">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Launch CLI Terminal</span>
                </div>
              </MagneticButton>

              <MagneticButton onClick={onOpenResume} strength={25}>
                <div className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all flex items-center gap-2 hover:scale-105 cursor-pointer">
                  <span>View CV</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </MagneticButton>
            </div>

            {/* Floating Tech Orbit Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 shadow-sm"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>React 18 & Redux</span>
              </motion.div>
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono flex items-center gap-1.5 shadow-sm"
              >
                <Server className="w-3.5 h-3.5 text-purple-400" />
                <span>Python & Django REST</span>
              </motion.div>
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-1.5 shadow-sm"
              >
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>MySQL Relational</span>
              </motion.div>
            </div>

            {/* Key Micro-Metrics Pill Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 max-w-lg">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black font-mono text-white font-display">1000+</div>
                <div className="text-[11px] text-slate-400 font-sans">Students Trained</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black font-mono text-cyan-400 font-display">2000+</div>
                <div className="text-[11px] text-slate-400 font-sans">Projects Built</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400 font-display">100+</div>
                <div className="text-[11px] text-slate-400 font-sans">Hiring Partners</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Seamless Borderless 3D Hologram Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] lg:min-h-[580px]"
          >
            {/* Ambient Radial Backlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Seamless 3D Canvas with Zero Box Borders */}
            <div className="relative w-full h-full">
              <HeroCanvas3D />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
