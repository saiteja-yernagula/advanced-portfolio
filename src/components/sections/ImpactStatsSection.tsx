import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { GsapCounter } from '../ui/GsapCounter';
import { IMPACT_STATS, TESTIMONIALS } from '../../data/portfolioData';
import { Users, FolderGit2, Building2, ShieldCheck, Star, Quote, Sparkles } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6 text-cyan-400" />,
  FolderGit2: <FolderGit2 className="w-6 h-6 text-purple-400" />,
  Building2: <Building2 className="w-6 h-6 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
};

export const ImpactStatsSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Impact & Student Outcomes"
          title="Proven Numbers, Transformative Careers &"
          highlightedText="Industry Placements"
          subtitle="Measurable milestones forged through consistent mentoring, code reviews, and high-standard full-stack training."
        />

        {/* 4 Stats Metric Cards with GSAP Counters & 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between text-center p-6 sm:p-7" glowColor={stat.color}>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {ICON_MAP[stat.iconName]}
                  </div>

                  <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white mb-2 font-display">
                    <GsapCounter target={stat.number} suffix={stat.suffix} color={stat.color} />
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-2 font-display">{stat.label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-[11px] font-mono text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Outcome Metric</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Container */}
        <div className="rounded-3xl bg-[#0b0f1c]/90 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              Student Voices & Transformations
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 font-display">
              Mentorship that turns aspiration into high-impact offers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <GlassCard
                key={idx}
                className="p-6 flex flex-col justify-between"
                glowColor={idx === 0 ? '#00f0ff' : idx === 1 ? '#8b5cf6' : '#10b981'}
              >
                <Quote className="w-8 h-8 text-cyan-500/20 mb-3" />
                <div>
                  <div className="flex items-center gap-1 mb-3 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="font-bold text-white text-sm font-display">{t.name}</div>
                  <div className="text-[11px] text-cyan-400 font-mono font-medium">{t.role}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">{t.batch}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
