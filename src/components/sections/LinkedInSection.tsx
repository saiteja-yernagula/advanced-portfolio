import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { LinkedinIcon } from '../ui/SocialIcons';
import { 
  ExternalLink, 
  Check, 
  Copy, 
  ShieldCheck, 
  GraduationCap, 
  Flame, 
  PhoneCall
} from 'lucide-react';

const LINKEDIN_POSTS = [
  {
    id: 'post-1',
    category: 'Teaching Mindset',
    title: 'Why I Train Others Instead of Just Building Products',
    period: '1 yr ago • Edited',
    icon: GraduationCap,
    color: '#0077b5',
    headline: '“Why are you training others instead of being a developer yourself?”',
    summary: 'Because building developers creates infinitely more impact than building products. Yes, I love coding. But what excites me even more is helping others go from “I don’t get this” to “I just built that!” Instead of building products for one company, I chose to build developers for the entire industry.',
    highlights: [
      'Project-based full-stack roadmaps across Python, Django & React',
      'Focusing on concepts, confidence & career readiness',
      'Explaining why architecture matters, not just syntax'
    ],
    hashtags: ['#DeveloperTrainer', '#TeachingTech', '#FullStackMentor', '#WhyITeach'],
    link: 'https://www.linkedin.com/posts/saiteja-yernagula_developertrainer-teachingtech-fullstackmentor-activity-7351587912481767425--sca?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2nZ2EBUby91MdvbHdpobLyGSNAaluj5tY'
  },
  {
    id: 'post-2',
    category: 'Origin Journey',
    title: 'From Mobile Screen to Full Stack Mentor',
    period: '1 yr ago • Viral Post',
    icon: Flame,
    color: '#00a0dc',
    headline: '“No system. No support. No background. Just a phone and unshakable belief.”',
    summary: 'Coming from a mechanical background, I had no laptop and no money to join an institute. But I discovered SPCK Editor on my mobile. That tiny 6-inch screen became my classroom. I learned HTML, CSS, and JS from open source and landed my first role at Anudip Foundation.',
    highlights: [
      'Self-taught on a smartphone with zero initial tech background',
      'Rose from Anudip Foundation to 10000 Coders & Vector India',
      'Trained 700+ students and helped shape enterprise curricula'
    ],
    hashtags: ['#FromMobileToMentor', '#TrainerJourney', '#MechanicalToTech', '#Upskill'],
    link: 'https://www.linkedin.com/posts/saiteja-yernagula_frommobiletomentor-trainerjourney-techforall-activity-7358047804151226368-pDyQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2nZ2EBUby91MdvbHdpobLyGSNAaluj5tY'
  },
  {
    id: 'post-3',
    category: 'Mentor Mission',
    title: 'My True Definition of Success: That One Phone Call',
    period: 'Recent • Verified Impact',
    icon: PhoneCall,
    color: '#38bdf8',
    headline: '“I don’t measure my success in money. My success is in one call: ‘Sir, I got the job.’”',
    summary: 'That one call is worth more than anything else. I guide, I mentor, I invest 100%. I don’t expect gifts or praise. I only expect one phone call when you land your first role. Your success is the only return I want.',
    highlights: [
      'Personal mentorship commitment to every cohort student',
      'Hundreds of successful student placement phone calls',
      '100% dedicated to student career transformation'
    ],
    hashtags: ['#FullStackDevelopment', '#ReactJS', '#PythonTrainer', '#TechnicalTrainer'],
    link: 'https://www.linkedin.com/posts/saiteja-yernagula_fullstackdevelopment-frontenddevelopment-activity-7370674762865582080-4Jv7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2nZ2EBUby91MdvbHdpobLyGSNAaluj5tY'
  }
];

export const LinkedInSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="linkedin" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Cyber Blue Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="SCENE 11 — LINKEDIN IMPACT ZONE"
          title="Documenting the Craft of"
          highlightedText="Building Developers"
          subtitle="Beyond classrooms and code, I share unfiltered insights on developer pedagogy, student transformations, and career engineering."
        />

        {/* 1. LinkedIn Profile Master Banner */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1324] via-[#09101e] to-[#060a14] border border-blue-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#0077b5] p-3 text-white flex items-center justify-center shadow-lg shrink-0">
                  <LinkedinIcon className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                      Saiteja Yernagula
                    </h3>
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono mt-0.5">
                    Python Full Stack Trainer | Developer | Mentor
                  </p>
                  <p className="text-[11px] text-blue-300 font-mono mt-1">
                    Vector India • Codegnan • 10000 Coders • Anudip Foundation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <MagneticButton href="https://www.linkedin.com/in/saiteja-yernagula" strength={20}>
                  <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#00669c] text-white font-mono font-bold text-xs shadow-[0_0_15px_#0077b580] transition-all flex items-center justify-center gap-2 hover:scale-105 cursor-pointer">
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </MagneticButton>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <span className="italic text-slate-300">
                "I teach in classrooms. I scale impact on YouTube. I build credibility on LinkedIn."
              </span>
              <span className="text-cyan-400 font-bold">1000+ Students Mentored</span>
            </div>
          </div>
        </div>

        {/* 2. 3 Featured Real LinkedIn Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LINKEDIN_POSTS.map((post, idx) => {
            const IconComp = post.icon;
            const isCopied = copiedId === post.id;

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <GlassCard className="h-full flex flex-col justify-between p-6 sm:p-7" glowColor={post.color}>
                  <div>
                    {/* Post Top Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-blue-300 font-bold block">
                            {post.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            {post.period}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopy(post.id, post.summary)}
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        title="Copy post excerpt"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 font-display">
                      {post.title}
                    </h4>

                    <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs font-mono text-blue-200 italic mb-4">
                      {post.headline}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {post.summary}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1.5 mb-4 text-[11px] font-mono text-slate-400">
                      {post.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-400 font-bold">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-3">
                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1">
                      {post.hashtags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-blue-400/80">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Direct LinkedIn Post Button */}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-xl bg-[#0a152e] hover:bg-[#0077b5] text-blue-300 hover:text-white border border-blue-500/40 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Read Full Post on LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
