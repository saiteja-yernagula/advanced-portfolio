import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SERVICES_DATA } from '../../data/portfolioData';
import { GraduationCap, Code2, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-cyan-400" />,
  Code2: <Code2 className="w-6 h-6 text-purple-400" />,
  Compass: <Compass className="w-6 h-6 text-emerald-400" />,
};

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="What I Can Help You With"
          title="Specialized Offerings in Training,"
          highlightedText="Full-Stack Dev & Career Coaching"
          subtitle="Whether you need institutional cohorts upskilled, production-ready web platforms engineered, or 1-on-1 placement acceleration."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6 sm:p-8" glowColor={service.color}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md group-hover:scale-110 transition-transform">
                      {ICON_MAP[service.iconName]}
                    </div>
                    <span
                      className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                        border: `1px solid ${service.color}40`,
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-display">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-mono text-cyan-400 uppercase font-semibold">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-800/80 space-y-4">
                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300 font-mono">Best For: </span>
                    <span>{service.idealFor}</span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-white hover:text-cyan-300 transition-all flex items-center justify-center gap-2 group/btn hover:border-cyan-500/50 hover:shadow-neon-cyan"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
