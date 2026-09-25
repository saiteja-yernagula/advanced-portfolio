import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { STORY_PILLARS } from '../../data/portfolioData';
import { 
  Smartphone, 
  Laptop, 
  GraduationCap, 
  Flame, 
  Cpu, 
  Layers, 
  HeartHandshake, 
  Award,
  Sparkles
} from 'lucide-react';

const CHAPTERS = [
  {
    id: 1,
    number: "01",
    title: "The Spark & Responsibility",
    period: "B.Tech Era (Mechanical Engg)",
    tagline: "Teaching to support education & discovering the calling",
    story: "Coming from a mechanical engineering background, tech wasn't handed to me. During my B.Tech, I started teaching to fund my own education. That early teaching shaped my ability to connect with students and simplify complex mental models long before I entered software.",
    badge: "Humble Roots",
    icon: GraduationCap,
    color: "#f59e0b",
    stats: "First Classroom Formed"
  },
  {
    id: 2,
    number: "02",
    title: "The Mobile Screen Breakthrough",
    period: "3-Month Self-Taught Sprint",
    tagline: "Writing HTML, CSS & JavaScript on a 6-inch Android phone",
    story: "With zero access to a laptop initially, I coded on a mobile phone. What started as curiosity turned into relentless obsession. Within just 3 months of self-learning on that tiny screen, I secured my first professional trainer role at Anudip Foundation.",
    badge: "Pure Resourcefulness",
    icon: Smartphone,
    color: "#00f0ff",
    stats: "3 Months • 1 Mobile • 1 Job Offer"
  },
  {
    id: 3,
    number: "03",
    title: "The Empathy-Driven Vow",
    period: "Anudip Foundation Phase",
    tagline: "Ensuring no student has to suffer through the dark alone",
    story: "I faced every struggle students face today: lack of guidance, confusing documentation, and zero resources. That's when I made a vow: 'I will never let my students go through what I went through.' I set out to redefine technical education from the student's perspective.",
    badge: "The Mission Born",
    icon: Flame,
    color: "#ec4899",
    stats: "150+ Grassroots Students Upskilled"
  },
  {
    id: 4,
    number: "04",
    title: "1000+ Developers Shaped",
    period: "10000 Coders • Vector • Codegnan",
    tagline: "Transforming learners into high-impact full-stack engineers",
    story: "Over 3+ years, I refined my pedagogy with top mentors. Today, I don't just teach code syntax — I train mindset, architect 2000+ real-world capstones, and guide students into top tech careers globally.",
    badge: "Proven Outcome",
    icon: Award,
    color: "#10b981",
    stats: "1000+ Trained • 100+ Companies"
  }
];

const TRANSFORMATION_MATRIX = [
  {
    challenge: "Zero laptop access — coding on a 6-inch phone screen",
    transformation: "Architected 2000+ production-grade web capstones across React & Django",
    badge: "Resourcefulness",
    color: "#00f0ff"
  },
  {
    challenge: "No mentor or roadmap — constant confusion and trial-and-error",
    transformation: "Mentored 1000+ students with structured step-by-step developer roadmaps",
    badge: "Guidance",
    color: "#8b5cf6"
  },
  {
    challenge: "Theoretical rote learning common in standard courses",
    transformation: "100% project-based pedagogy building real-world enterprise architectures",
    badge: "Hands-on First",
    color: "#10b981"
  },
  {
    challenge: "Imposter syndrome and fear of technical interviews",
    transformation: "Alumni placed in 100+ top firms and high-value (Crore-level) systems",
    badge: "Career Outcomes",
    color: "#f59e0b"
  }
];

export const AboutStorySection: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'ide'>('mobile');
  const [selectedPillar, setSelectedPillar] = useState(0);

  const currChapter = CHAPTERS[activeChapter];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="The Journey & Story"
          title="From Learning on a Mobile Phone to"
          highlightedText="Building 1000+ Developers"
          subtitle="A real journey forged through responsibility, resourcefulness, and a mission to make engineering intuitive for every student."
        />

        {/* 1. Interactive Dual-Device Workspace Simulator */}
        <div className="mb-20">
          <div className="rounded-3xl bg-gradient-to-b from-[#0e1424] to-[#070a14] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Interactive Workspace Evolution
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 font-display">
                  Compare: <span className="text-gradient-cyan">Where I Started vs How I Train Today</span>
                </h3>
              </div>

              {/* Device Mode Switcher */}
              <div className="flex items-center bg-[#131a2e] p-1.5 rounded-xl border border-slate-700/80">
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    deviceMode === 'mobile'
                      ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_#f59e0b]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>6" Phone Screen (2020)</span>
                </button>
                <button
                  onClick={() => setDeviceMode('ide')}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    deviceMode === 'ide'
                      ? 'bg-cyan-500 text-slate-950 shadow-neon-cyan'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Laptop className="w-4 h-4" />
                  <span>Enterprise Workstation (Today)</span>
                </button>
              </div>
            </div>

            {/* Interactive Device Viewport */}
            <AnimatePresence mode="wait">
              {deviceMode === 'mobile' ? (
                <motion.div
                  key="mobile-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Smartphone Frame Mockup */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-[280px] sm:w-[320px] rounded-[36px] bg-[#000] border-4 border-slate-700 p-3 shadow-2xl shadow-amber-500/20 relative">
                      {/* Notch & Speaker */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-2 z-20">
                        <span className="w-2 h-2 rounded-full bg-slate-700" />
                        <span className="w-8 h-1 rounded-full bg-slate-800" />
                      </div>

                      {/* Screen Container */}
                      <div className="rounded-[28px] bg-[#0d111c] border border-slate-800 p-4 pt-8 text-[11px] font-mono overflow-hidden text-slate-300 min-h-[460px] flex flex-col justify-between">
                        <div>
                          {/* Mobile Code App Header */}
                          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[10px] text-amber-400">
                            <span>Acode Mobile Editor</span>
                            <span>index.html • 1.2 KB</span>
                          </div>

                          {/* Code Lines on Mobile */}
                          <div className="space-y-1 text-slate-300">
                            <div><span className="text-pink-400">&lt;!DOCTYPE html&gt;</span></div>
                            <div><span className="text-cyan-400">&lt;html&gt;</span></div>
                            <div className="pl-3"><span className="text-cyan-400">&lt;head&gt;</span></div>
                            <div className="pl-6"><span className="text-purple-400">&lt;title&gt;</span>Saiteja Learning<span className="text-purple-400">&lt;/title&gt;</span></div>
                            <div className="pl-3"><span className="text-cyan-400">&lt;/head&gt;</span></div>
                            <div className="pl-3"><span className="text-cyan-400">&lt;body&gt;</span></div>
                            <div className="pl-6 text-emerald-300">&lt;h1&gt;Learning JS on Phone!&lt;/h1&gt;</div>
                            <div className="pl-6 text-amber-300">&lt;script&gt;</div>
                            <div className="pl-9 text-slate-200">const passion = true;</div>
                            <div className="pl-9 text-cyan-300">let students = 1000;</div>
                            <div className="pl-6 text-amber-300">&lt;/script&gt;</div>
                            <div className="pl-3"><span className="text-cyan-400">&lt;/body&gt;</span></div>
                            <div><span className="text-cyan-400">&lt;/html&gt;</span></div>
                          </div>
                        </div>

                        {/* Mobile Status Bar at bottom */}
                        <div className="pt-3 border-t border-slate-800 text-[10px] text-amber-400 flex items-center justify-between">
                          <span>Ln 12, Col 8</span>
                          <span className="animate-pulse">● Compiling in Mobile Browser</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Story Context for Mobile Phase */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
                      <Smartphone className="w-3.5 h-3.5" />
                      Phase: The Mobile Breakthrough (2020)
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                      "I had no laptop. But I had <span className="text-gradient-amber">relentless drive</span>."
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Writing HTML tags, CSS Flexbox, and JavaScript closures on a touch keyboard with no physical monitor or debugger is intense. Every bracket had to be typed manually.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      That constraint trained my brain to <span className="text-white font-semibold">mentally compile code</span> before ever running it. Within 90 days, I mastered the fundamentals and landed my first role at Anudip Foundation.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs text-slate-400">Device</div>
                        <div className="text-sm font-bold text-white font-mono">6-inch Smartphone</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs text-slate-400">Result</div>
                        <div className="text-sm font-bold text-amber-400 font-mono">Hired in 3 Months</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="ide-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Modern Full-Stack IDE Mockup */}
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl bg-[#090d17] border border-cyan-500/30 overflow-hidden shadow-2xl">
                      {/* IDE Top Window Tabs */}
                      <div className="px-4 py-2.5 bg-[#0e1322] border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-500/80" />
                          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <span className="w-3 h-3 rounded-full bg-green-500/80" />
                          <div className="flex items-center gap-2 ml-4 text-xs font-mono">
                            <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-600/40">
                              App.tsx
                            </span>
                            <span className="px-2.5 py-0.5 rounded text-slate-400 hover:text-white">
                              views.py
                            </span>
                            <span className="px-2.5 py-0.5 rounded text-slate-400 hover:text-white">
                              models.py
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400">Production Stack</span>
                      </div>

                      {/* Code Area */}
                      <div className="p-4 text-xs font-mono text-slate-300 space-y-1 bg-[#06080f] overflow-x-auto">
                        <div><span className="text-purple-400">import</span> React, &#123; useState &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;</div>
                        <div className="text-slate-500">// Mentoring 1000+ Students to Architect Production React & Django APIs</div>
                        <div><span className="text-cyan-400 font-bold">export const</span> <span className="text-amber-300 font-bold">FullStackCohortEngine</span> = () =&gt; &#123;</div>
                        <div className="pl-4">const [studentsTrained] = useState(<span className="text-cyan-400 font-bold">1000</span>);</div>
                        <div className="pl-4">const [projectsArchitected] = useState(<span className="text-purple-400 font-bold">2000</span>);</div>
                        <div className="pl-4 text-slate-400">return &lt;DeveloperTransformation mindset="Industry-Ready" /&gt;;</div>
                        <div>&#125;;</div>
                      </div>

                      {/* IDE Terminal Output */}
                      <div className="p-3 bg-[#0d121f] border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center justify-between">
                        <span>✓ Django REST API : 200 OK (38ms)</span>
                        <span className="text-cyan-400">React 18 + Redux Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Story Context for Modern Phase */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                      <Laptop className="w-3.5 h-3.5 text-cyan-400" />
                      Phase: Senior Mentor & Architect (Today)
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                      "I build <span className="text-gradient-cyan">developers</span>, not just coders."
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Now leading cohorts across Codegnan, delivering end-to-end full-stack architectures, mock interviews, and automated student performance systems.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs text-slate-400">Students Shaped</div>
                        <div className="text-sm font-bold text-cyan-400 font-mono">1000+ Engineers</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs text-slate-400">Projects Delivered</div>
                        <div className="text-sm font-bold text-emerald-400 font-mono">2000+ Capstones</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 2. Interactive 4-Chapter Narrative Explorer */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              The 4 Milestone Chapters
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">
              The Evolution of a Mentor
            </h3>
          </div>

          {/* Chapter Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {CHAPTERS.map((ch, idx) => {
              const isActive = activeChapter === idx;
              const IconComp = ch.icon;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(idx)}
                  className={`p-4 rounded-2xl text-left transition-all border relative overflow-hidden ${
                    isActive
                      ? 'bg-[#0e1424] border-cyan-500 shadow-neon-cyan scale-102'
                      : 'bg-[#090d16]/80 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold" style={{ color: ch.color }}>
                      CHAPTER {ch.number}
                    </span>
                    <IconComp className="w-4 h-4" style={{ color: ch.color }} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    {ch.title}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    {ch.period}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Chapter Card */}
          <motion.div
            key={currChapter.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-6 sm:p-10" glowColor={currChapter.color}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                      style={{
                        backgroundColor: `${currChapter.color}20`,
                        color: currChapter.color,
                        border: `1px solid ${currChapter.color}40`,
                      }}
                    >
                      {currChapter.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{currChapter.period}</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-black text-white font-display">
                    {currChapter.title}
                  </h4>
                  <div className="text-sm font-mono text-purple-300">{currChapter.tagline}</div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {currChapter.story}
                  </p>
                </div>

                <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-3">
                  <div className="text-xs font-mono text-slate-400">Key Milestone Outcome</div>
                  <div className="text-lg font-bold font-mono text-cyan-300">
                    {currChapter.stats}
                  </div>
                  <div className="text-xs text-slate-500 pt-2 border-t border-slate-800">
                    Verified Transformation Epoch
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* 3. "Before vs After" Transformation Matrix */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              The Contrast Matrix
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">
              Obstacles Transformed into Blueprints
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRANSFORMATION_MATRIX.map((item, idx) => (
              <GlassCard key={idx} className="p-6" glowColor={item.color}>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Before */}
                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-200">
                    <span className="font-mono text-rose-400 font-bold block mb-1">
                      ✕ The Struggle / Barrier:
                    </span>
                    <span>{item.challenge}</span>
                  </div>

                  {/* After */}
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200">
                    <span className="font-mono text-emerald-400 font-bold block mb-1">
                      ✓ The Solution & Impact:
                    </span>
                    <span>{item.transformation}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* 4. Holographic 4-Pillar Energy Core */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0c101d] to-[#060810] border border-slate-800 p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              The Pedagogical Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 font-display">
              "I don't just teach code — <span className="text-gradient-cyan">I shape developers</span>."
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Click any pillar below to inspect the foundational teaching philosophy:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STORY_PILLARS.map((pillar, pIdx) => {
              const isSelected = selectedPillar === pIdx;
              return (
                <button
                  key={pIdx}
                  onClick={() => setSelectedPillar(pIdx)}
                  className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-500 shadow-neon-cyan scale-102'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                        {pIdx === 0 ? <HeartHandshake className="w-5 h-5" /> : pIdx === 1 ? <Cpu className="w-5 h-5" /> : pIdx === 2 ? <Layers className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {pillar.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-slate-500'}>
                      {isSelected ? '● Active Core' : 'Click to inspect'}
                    </span>
                    <span className="text-cyan-400 font-bold">0{pIdx + 1}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
