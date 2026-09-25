import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../ui/SocialIcons';
import { Mail, Copy, Check, Send, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface ContactSectionProps {
  selectedService: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="FINAL NODE: CONNECTION"
          title="You’ve Seen the Journey. Let’s Build"
          highlightedText="Something Extraordinary"
          subtitle="Whether you need institutional cohort training, production full-stack engineering, or career mentorship — I am one message away."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Collaboration Ecosystem */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6 sm:p-8" glowColor="#00f0ff">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Direct Channels</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                "I don’t just respond. <span className="text-cyan-400 font-semibold">I collaborate</span>." Reach out directly via email or connect across my developer ecosystem:
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-white truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 transition-colors flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Status */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Location: Hyderabad, India (Open for Remote & Onsite)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Status: Active & Taking New Inquiries / Cohorts</span>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#0a1224] hover:bg-[#0077b5] border border-blue-500/30 text-blue-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.youtube.com/@tejaverse"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#1a0c10] hover:bg-[#ff0033] border border-red-500/30 text-red-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  <span>TejaVerse</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Real FormSubmit.co Contact Engine */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8" glowColor="#8b5cf6">
              <form 
                action="https://formsubmit.co/saiteja.yernagula@gmail.com" 
                method="POST" 
                className="contact-form space-y-4"
              >
                {/* FormSubmit Configuration Fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Portfolio Message - Saiteja Yernagula" />
                <input type="hidden" name="_template" value="table" />

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2 font-display">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    Send a Message or Cohort Request
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60">
                    FormSubmit.co Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Inquiry Type / Service</label>
                  <select
                    name="service"
                    defaultValue={selectedService || 'Python Full Stack Training'}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                  >
                    <option value="Python Full Stack Training">Python Full Stack Training (Cohort / Batch)</option>
                    <option value="Frontend / React Coaching">Frontend Coaching (React, Redux, ES6+)</option>
                    <option value="Backend / Django Architecture">Backend & API Engineering (Django, REST, MySQL)</option>
                    <option value="1-on-1 Career & Placement Prep">1-on-1 Career Mentorship & Placement Prep</option>
                    <option value="Full Stack Project Development">Custom Full-Stack Project Development</option>
                    <option value="TejaVerse YouTube Collaboration">TejaVerse YouTube / Content Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Message / Requirements *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your batch requirements, project goals, or consultation topic..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                  />
                </div>

                <div className="pt-2">
                  <MagneticButton strength={25} className="w-full">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-neon-cyan transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-98 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message to Saiteja</span>
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
