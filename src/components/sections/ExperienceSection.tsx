import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { Calendar, ChevronRight, Sparkles, Award } from 'lucide-react';

const CAREER_STEPS = [
  { id: 'all', label: 'Complete Timeline', step: 'All 4 Phases' },
  { id: 'anudip-foundation', label: 'Anudip Foundation', step: 'Phase 1: Genesis' },
  { id: '10000-coders', label: '10000 Coders', step: 'Phase 2: Pedagogy' },
  { id: 'vector-india', label: 'Vector India', step: 'Phase 3: Backend' },
  { id: 'codegnan', label: 'Codegnan', step: 'Phase 4: Senior Lead' },
];

export const ExperienceSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>('codegnan');

  const filteredExperience = selectedFilter === 'all'
    ? EXPERIENCE_DATA
    : EXPERIENCE_DATA.filter(item => item.id === selectedFilter);

  return (
    <section id="experience" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Cyber Ambient Blobs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Career Journey & Milestones (3+ Years)"
          title="Transformational Track Record Across"
          highlightedText="4 Premier Tech Institutions"
          subtitle="A proven progression from foundational training to architecting full-stack capstone cohorts and accelerating hundreds of student placements."
        />

        {/* 1. Interactive Career Evolution Stepper */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="p-2 rounded-2xl bg-[#0a0e1a]/90 border border-slate-800 backdrop-blur-xl flex flex-wrap items-center justify-between gap-2 shadow-2xl">
            {CAREER_STEPS.map((stepItem) => {
              const isSelected = selectedFilter === stepItem.id;
              return (
                <button
                  key={stepItem.id}
                  onClick={() => setSelectedFilter(stepItem.id)}
                  className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl text-left transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/60 text-white shadow-neon-cyan'
                      : 'hover:bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    {stepItem.step}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-100 truncate mt-0.5 font-display">
                    {stepItem.label}
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="activeStepperIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Main Timeline Flow with Traveling Neon Laser Beam */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line Container with Traveling Laser */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden hidden sm:block">
            {/* Traveling Laser Pulse */}
            <motion.div
              animate={{
                y: ['-100%', '400%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-full h-48 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f0ff]"
            />
          </div>

          <div className="space-y-10 sm:space-y-14">
            <AnimatePresence>
              {filteredExperience.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                const isExpanded = expandedId === exp.id;

                return (
                  <motion.div
                    key={exp.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Center Node with Pulsing Ring */}
                    <div
                      className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-[#080c18] border-2 items-center justify-center z-20 shadow-2xl transition-transform hover:scale-125 cursor-pointer"
                      style={{ borderColor: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}
                      onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: exp.color }} />
                      <span
                        className="absolute inset-0 rounded-full animate-ping opacity-30"
                        style={{ backgroundColor: exp.color }}
                      />
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden sm:block sm:w-1/2" />

                    {/* Main Experience Card with 3D Tilt */}
                    <div className="w-full sm:w-1/2">
                      <GlassCard
                        className="p-6 sm:p-8"
                        glowColor={exp.color}
                        onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                      >
                        {/* Card Top Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span
                            className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                            style={{
                              backgroundColor: `${exp.color}18`,
                              color: exp.color,
                              border: `1px solid ${exp.color}50`,
                            }}
                          >
                            <Sparkles className="w-3 h-3" />
                            {exp.badge}
                          </span>
                          
                          <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            {exp.duration}
                          </span>
                        </div>

                        {/* Company & Role */}
                        <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors font-display">
                          {exp.company}
                        </h3>
                        <div className="text-sm font-mono text-purple-300 font-semibold mb-4">
                          {exp.role}
                        </div>

                        {/* Highlights List */}
                        <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-slate-300">
                          {exp.highlights.map((h, hIdx) => (
                            <motion.li
                              key={hIdx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: hIdx * 0.08 }}
                              className="flex items-start gap-2.5 leading-relaxed"
                            >
                              <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Key Milestone Callout Banner */}
                        {exp.metrics && (
                          <div
                            className="p-3.5 rounded-xl border text-xs font-mono font-bold mb-4 flex items-center gap-2.5 shadow-sm"
                            style={{
                              backgroundColor: `${exp.color}10`,
                              borderColor: `${exp.color}35`,
                              color: exp.color,
                            }}
                          >
                            <Award className="w-4 h-4 shrink-0" />
                            <span>{exp.metrics}</span>
                          </div>
                        )}

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                          {exp.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c1220] text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
