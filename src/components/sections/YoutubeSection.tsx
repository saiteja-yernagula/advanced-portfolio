import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/shadcn/badge';
import { MagneticButton } from '../ui/MagneticButton';
import { YoutubeIcon } from '../ui/SocialIcons';
import { 
  Play, 
  Tv, 
  Sparkles, 
  ExternalLink, 
  Users, 
  BookOpen, 
  Code2, 
  GitBranch, 
  Terminal,
  CheckCircle2
} from 'lucide-react';

const YOUTUBE_VIDEOS = [
  {
    id: 'v1',
    title: 'JavaScript Zero to Hero: Mental Models & Core Fundamentals',
    category: 'JavaScript Core',
    duration: 'Structured Series',
    tagline: 'From variables and closures to event loop & async programming.',
    views: '10K+ Learners',
    color: '#ff0033',
    icon: Code2,
    badge: 'Flagship Series',
    topics: ['Closures & Scope', 'Prototypes', 'Async / Await', 'DOM Manipulation'],
    link: 'https://www.youtube.com/@tejaverse'
  },
  {
    id: 'v2',
    title: 'Git & GitHub Workflows for Real-World Development Teams',
    category: 'DevOps & Tooling',
    duration: 'Hands-on Workshop',
    tagline: 'Master branching strategies, PR reviews, merge conflicts, and CI/CD.',
    views: 'Industry Ready',
    color: '#f97316',
    icon: GitBranch,
    badge: 'Essential Workflow',
    topics: ['Feature Branching', 'Resolving Conflicts', 'Interactive Rebase', 'GitHub Actions'],
    link: 'https://www.youtube.com/@tejaverse'
  },
  {
    id: 'v3',
    title: 'Full Stack Python & Django REST + React Architecture',
    category: 'Full Stack Build',
    duration: 'Production Project',
    tagline: 'Step-by-step engineering of scalable APIs, JWT authentication, and React state.',
    views: '2000+ Capstones',
    color: '#00f0ff',
    icon: Terminal,
    badge: 'Enterprise Architecture',
    topics: ['Django ORM', 'JWT Tokens', 'React Redux Toolkit', 'Axios Interceptors'],
    link: 'https://www.youtube.com/@tejaverse'
  }
];

export const YoutubeSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section id="youtube" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Dynamic Red & Crimson Cyber Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="SCENE 10 — YOUTUBE UNIVERSE"
          title="TejaVerse: Scaling High-Impact"
          highlightedText="Education Across the Web"
          subtitle="I don’t just teach in classrooms. I teach on the internet at scale — breaking down complex full-stack concepts into structured, project-based video masterclasses."
        />

        {/* 1. Cinematic Hologram Channel Showcase */}
        <div className="mb-16">
          <div className="rounded-3xl bg-gradient-to-b from-[#180d12] via-[#0d0a14] to-[#06070d] border border-red-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient Red Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_20px_#ef4444]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Branding & Value Prop */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge variant="outline" className="border-red-500/50 bg-red-950/40 text-red-400 text-xs font-mono">
                    <Tv className="w-3.5 h-3.5 mr-1.5 text-red-400" /> SYSTEM MODULE: TEJAVERSE MEDIA
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">@tejaverse</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-black text-white font-display">
                    Welcome to <span className="bg-gradient-to-r from-red-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">TejaVerse</span>
                  </h3>
                  <div className="text-sm font-mono text-red-300 font-semibold">
                    Full Stack Development & Engineering Channel
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Where I guide thousands of learners from syntax basics to production readiness. Every video is designed as a structured blueprint:
                </p>

                <div className="space-y-2.5 text-xs sm:text-sm font-mono text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>JavaScript from fundamentals to modern ESNext & async engines</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Git & GitHub enterprise workflows & collaboration practices</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Full-stack Python, Django REST APIs & React production architectures</span>
                  </div>
                </div>

                {/* Micro Stats Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <Users className="w-3 h-3 text-red-400" /> Community
                    </div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">Growing Learners</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-amber-400" /> Pedagogy
                    </div>
                    <div className="text-sm font-bold text-amber-300 font-mono mt-0.5">100% Project First</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cyan-400" /> Impact
                    </div>
                    <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">Internet Scale</div>
                  </div>
                </div>

                {/* Channel Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <MagneticButton href="https://www.youtube.com/@tejaverse" strength={25}>
                    <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono font-bold text-xs shadow-[0_0_20px_#ef444480] transition-all flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer">
                      <YoutubeIcon className="w-4 h-4 fill-current" />
                      <span>Watch TejaVerse Channel</span>
                    </div>
                  </MagneticButton>

                  <MagneticButton href="https://www.youtube.com/@tejaverse" strength={25}>
                    <div className="px-5 py-3 rounded-xl bg-[#1a0e14] hover:bg-[#25151e] border border-red-500/40 text-red-300 font-mono text-xs font-bold transition-all flex items-center gap-2 hover:shadow-[0_0_15px_#ef444440] hover:scale-105 cursor-pointer">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Explore Playlists</span>
                    </div>
                  </MagneticButton>
                </div>

              </div>

              {/* Right Column: 3D Holographic Video Player Deck */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-[#0a0710] border border-red-500/30 overflow-hidden shadow-2xl group">
                  {/* Player Window Header */}
                  <div className="px-4 py-2.5 bg-[#140b12] border-b border-red-950/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-[11px] font-mono text-slate-400 ml-2">tejaverse-stream.player</span>
                    </div>
                    <span className="text-[10px] font-mono text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/40 flex items-center gap-1 animate-pulse">
                      ● LIVE ON YOUTUBE
                    </span>
                  </div>

                  {/* Video Stage Frame */}
                  <div className="p-6 sm:p-8 bg-gradient-to-b from-[#12080f] to-[#07040a] min-h-[300px] flex flex-col justify-between relative overflow-hidden">
                    {/* Background Visual Waves */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0,transparent_70%)] pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full bg-red-950/80 text-red-300 border border-red-500/40 text-xs font-mono font-bold">
                          {YOUTUBE_VIDEOS[activeVideo].badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{YOUTUBE_VIDEOS[activeVideo].duration}</span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                        {YOUTUBE_VIDEOS[activeVideo].title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {YOUTUBE_VIDEOS[activeVideo].tagline}
                      </p>

                      {/* Topic Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {YOUTUBE_VIDEOS[activeVideo].topics.map((t, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-md bg-[#180d16] border border-red-900/40 text-[11px] font-mono text-red-200">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Play Action */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <Users className="w-3.5 h-3.5 text-red-400" />
                        <span>{YOUTUBE_VIDEOS[activeVideo].views}</span>
                      </div>

                      <a
                        href={YOUTUBE_VIDEOS[activeVideo].link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-neon-red hover:scale-105"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch on YouTube</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. Floating Video Playlist Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {YOUTUBE_VIDEOS.map((video, idx) => {
            const IconComp = video.icon;
            const isSelected = activeVideo === idx;
            return (
              <motion.div
                key={video.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveVideo(idx)}
                className="cursor-pointer"
              >
                <GlassCard
                  className={`h-full p-6 flex flex-col justify-between transition-all ${
                    isSelected ? 'ring-2 ring-red-500 shadow-[0_0_25px_#ef444440]' : ''
                  }`}
                  glowColor={video.color}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6 text-red-400" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-red-950/60 text-red-300 border border-red-800/40">
                        {video.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 font-display">{video.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{video.tagline}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-red-400 font-semibold">{video.views}</span>
                    <span className="flex items-center gap-1 text-slate-400 hover:text-white">
                      <span>Preview</span>
                      <Play className="w-3 h-3 fill-current text-red-400" />
                    </span>
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
