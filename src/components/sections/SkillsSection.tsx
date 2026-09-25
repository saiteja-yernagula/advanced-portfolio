import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/shadcn/badge';
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/shadcn/tooltip';
import { SKILLS_DATA } from '../../data/portfolioData';
import { 
  Atom, 
  Boxes, 
  Code2, 
  FileCode2, 
  Palette, 
  LayoutGrid, 
  Terminal, 
  Server, 
  Database, 
  GitBranch, 
  BarChart3, 
  BookOpenCheck, 
  Briefcase,
  Sparkles,
  Layers
} from 'lucide-react';

const ICON_COMPONENTS: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-6 h-6 text-cyan-400" />,
  Boxes: <Boxes className="w-6 h-6 text-purple-400" />,
  Code2: <Code2 className="w-6 h-6 text-amber-400" />,
  FileCode2: <FileCode2 className="w-6 h-6 text-orange-400" />,
  Palette: <Palette className="w-6 h-6 text-blue-400" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-indigo-400" />,
  Terminal: <Terminal className="w-6 h-6 text-emerald-400" />,
  Server: <Server className="w-6 h-6 text-teal-400" />,
  Database: <Database className="w-6 h-6 text-cyan-400" />,
  GitBranch: <GitBranch className="w-6 h-6 text-rose-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-yellow-400" />,
  BookOpenCheck: <BookOpenCheck className="w-6 h-6 text-pink-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-emerald-400" />,
};

type FilterCategory = 'all' | 'frontend' | 'backend' | 'database' | 'tools' | 'mentorship';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const categories = [
    { id: 'all', label: 'All Arsenal' },
    { id: 'frontend', label: 'Frontend UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Database & SQL' },
    { id: 'tools', label: 'Tools & Data' },
    { id: 'mentorship', label: 'Pedagogy & Mentorship' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Technical Mastery & Tooling"
          title="Engineered for Production &"
          highlightedText="High-Impact Pedagogy"
          subtitle="A comprehensive toolkit spanning client interfaces, scalable server architectures, relational databases, and mentorship frameworks."
        />

        {/* Category Filters Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as FilterCategory)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-neon-cyan scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with ShadCN Badges & Tooltips */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map(skill => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  className="h-full flex flex-col justify-between p-6"
                  glowColor={
                    skill.category === 'frontend'
                      ? '#00f0ff'
                      : skill.category === 'backend'
                      ? '#8b5cf6'
                      : skill.category === 'database'
                      ? '#10b981'
                      : '#f59e0b'
                  }
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md group-hover:scale-110 transition-transform cursor-pointer">
                            {ICON_COMPONENTS[skill.iconName] || <Layers className="w-6 h-6 text-cyan-400" />}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name} Mastery: {skill.level}%</p>
                        </TooltipContent>
                      </Tooltip>

                      <div className="flex items-center gap-2">
                        {skill.highlight && (
                          <Badge variant="cyber" className="text-[10px] py-0.5 px-2.5">
                            <Sparkles className="w-2.5 h-2.5 mr-1" /> Core
                          </Badge>
                        )}
                        <Badge variant="outline" className="font-mono text-cyan-300 border-slate-800">
                          {skill.level}%
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 font-display">{skill.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-5">
                      {skill.tagline}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1.5">
                      <span>Proficiency</span>
                      <span className="text-slate-400">Industry Ready</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden p-0.5 border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          skill.category === 'frontend'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            : skill.category === 'backend'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                            : skill.category === 'database'
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                            : 'bg-gradient-to-r from-amber-500 to-orange-500'
                        }`}
                      />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
