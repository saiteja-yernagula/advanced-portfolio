import React from 'react';
import { motion } from 'framer-motion';
import { X, Printer, ExternalLink, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#0f1422] border border-slate-700 shadow-2xl flex flex-col overflow-hidden my-auto"
      >
        <div className="px-6 py-3.5 bg-[#141b2d] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold">
            <Briefcase className="w-4 h-4" />
            <span>Saiteja_Yernagula_Resume.pdf</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0a0d17] text-slate-200 print:bg-white print:text-black">
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-cyan-400 font-mono text-sm mt-1">{PERSONAL_INFO.title}</p>
            <p className="text-xs text-slate-400 mt-2 max-w-2xl">{PERSONAL_INFO.tagline}</p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.email}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.location}</span>
              <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline flex items-center gap-0.5">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline flex items-center gap-0.5">
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">Executive Summary</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Results-driven Python Full Stack Trainer, Developer, and Mentor with 3+ years of proven expertise delivering high-impact technical training across React.js, Django REST Framework, MySQL, and modern web architectures. Mentored 1000+ students and facilitated placement across 100+ top software organizations through rigorous project-based pedagogy and industry-aligned capstone coaching.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Frontend Engineering:</span>
                <span className="text-white font-medium">React.js, Redux Toolkit, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Backend & API Architecture:</span>
                <span className="text-white font-medium">Python, Django, Django REST Framework, MVC/MVT, JWT Authentication</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Databases & Data Tools:</span>
                <span className="text-white font-medium">MySQL (Relational Schema, Indexing, Joins), NumPy, Pandas</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Tools & Mentorship:</span>
                <span className="text-white font-medium">Git, GitHub, Capstone Project Review, Technical Pedagogy, Mock Interviews</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4">Professional Experience (3+ Years)</h2>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map(exp => (
                <div key={exp.id} className="border-l-2 border-slate-700 pl-4 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-sm font-bold text-white">{exp.company} — <span className="text-cyan-400">{exp.role}</span></span>
                    <span className="text-xs font-mono text-slate-400">{exp.duration} ({exp.period})</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  {exp.metrics && (
                    <div className="text-[11px] font-mono text-emerald-400 font-semibold mt-1">
                      Key Milestone: {exp.metrics}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4">Featured Projects</h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map(proj => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="font-mono text-[10px] text-cyan-400">{proj.techStack.join(' • ')}</span>
                  </div>
                  <p className="text-slate-300 mb-2">{proj.description}</p>
                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Key Highlights: </span>
                    {proj.keyFeatures.slice(0, 3).join('; ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">Education & Origin</h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-cyan-400 shrink-0" />
              <div>
                <div className="font-bold text-white">Bachelor of Technology (B.Tech) — Mechanical Engineering</div>
                <div className="text-slate-400 text-[11px]">Self-transitioned to Full-Stack Software Engineering & Advanced Technical Pedagogy</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
