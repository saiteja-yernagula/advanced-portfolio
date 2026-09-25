import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectolioDemo } from '../ui/ProjectolioDemo';
import { PROJECTS_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon } from '../ui/SocialIcons';
import { Sparkles, CheckCircle2, Cpu, Globe, ExternalLink, Play, Layers } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const ProjectsSection: React.FC = () => {
  const studentGlobe = PROJECTS_DATA.find(p => p.id === 'student-globe-app') || PROJECTS_DATA[0];
  const projectolio = PROJECTS_DATA.find(p => p.id === 'projectolio') || PROJECTS_DATA[1];

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Featured Engineering Capstones"
          title="Full-Stack & 3D WebGL Systems Built for"
          highlightedText="Scale & Real-World Impact"
          subtitle="Production-grade platforms engineered with React, Three.js, Django REST, and MySQL — designed as complete ecosystems and student training benchmarks."
        />

        {/* 1. Flagship 3D Showcase: Student Globe App */}
        <div className="mb-16">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0c1424] via-[#090e1a] to-[#05070d] border border-cyan-500/40 shadow-2xl relative overflow-hidden group">
            {/* Ambient Cyan Radial Light */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-neon-cyan">
                  <Globe className="w-3.5 h-3.5 animate-spin-slow" />
                  3D WebGL Masterpiece
                </span>
                <span className="text-xs font-mono text-slate-400">Interactive Student Projects Globe</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MagneticButton href={studentGlobe.liveLink} strength={20}>
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-xs shadow-neon-cyan flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </div>
                </MagneticButton>

                <a
                  href={studentGlobe.githubLink || PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Source
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                  {studentGlobe.title}
                </h3>
                <div className="text-sm font-mono text-cyan-300 font-semibold">
                  {studentGlobe.subtitle}
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {studentGlobe.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {studentGlobe.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#101b30] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Key Capabilities & Innovations:
                  </h4>
                  {studentGlobe.keyFeatures.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {studentGlobe.metrics?.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center font-mono text-xs text-cyan-300 font-bold">
                  ✓ {m}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Featured Full-Stack System: Projectolio Showcase with Interactive Simulator */}
        <div id="projectolio-demo" className="mb-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#120f24] via-[#0a0d18] to-[#05070d] border border-purple-500/40 shadow-2xl relative overflow-hidden">
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-neon-purple">
                  <Layers className="w-3.5 h-3.5" />
                  Full-Stack Architecture Capstone
                </span>
                <span className="text-xs font-mono text-slate-400">Enterprise Quiz Assessment & Evaluation</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MagneticButton href="https://projectolio.vercel.app/" strength={20}>
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-mono font-bold text-xs shadow-neon-purple flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Live App</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </div>
                </MagneticButton>

                <a
                  href={projectolio.githubLink || PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Source
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                  {projectolio.title}{' '}
                  <span className="text-gradient-cyan text-2xl sm:text-3xl block sm:inline font-bold">
                    — Online Quiz Engine
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {projectolio.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {projectolio.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#1a1430] border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold mb-2">
                    Key Architectural Capabilities:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Role-based authentication (Admin & Student) with JWT</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Timer-based quiz attempts with auto-evaluation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Admin analytics dashboard for topic performance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Bulk Excel upload via Django Pandas parsing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Live Interactive Simulator Frame */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  Live Simulator: Test drive quiz engine below
                </span>
                <span className="text-[11px] font-mono text-emerald-400">● 100% Functional Client Demo</span>
              </div>
              <ProjectolioDemo />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
