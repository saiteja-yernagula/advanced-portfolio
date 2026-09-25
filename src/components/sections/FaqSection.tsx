import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/shadcn/accordion';
import { Sparkles, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    id: 'item-1',
    question: 'How do you train non-CS and beginner students to build production full-stack apps?',
    answer:
      'I start from the student’s perspective with zero assumed jargon. We establish solid fundamentals in Python and JavaScript before moving into architecture. Every concept is tied immediately to a real-world scenario (e.g., authentication, relational schema design, state management), ensuring students understand the "why" before writing the "how".',
  },
  {
    id: 'item-2',
    question: 'What makes your 100% project-based pedagogy different from traditional courses?',
    answer:
      'Instead of passive syntax memorization, students engineer 2000+ real-world capstones like Projectolio (an automated full-stack quiz platform with JWT auth, Django REST APIs, and React state). Students write real endpoints, debug database queries, handle CORS/tokens, and deploy live apps on cloud platforms.',
  },
  {
    id: 'item-3',
    question: 'How do you prepare learners for high-stakes technical interviews?',
    answer:
      'We simulate authentic company hiring loops: live whiteboarding, data structure problem-solving, architectural teardowns, and behavioral confidence training. Having mentored 1000+ engineers into 100+ hiring partners, I teach students how to clearly articulate their architectural decisions.',
  },
  {
    id: 'item-4',
    question: 'Are you available for corporate cohorts, bootcamp curriculums, or 1-on-1 mentorship?',
    answer:
      'Yes! I partner with tech institutions, engineering bootcamps, and organizations for full-stack cohort instruction, syllabus design, and bespoke developer acceleration programs. You can inquire directly via the contact section below.',
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Mentorship FAQ & Pedagogy"
          title="Inside the Philosophy of"
          highlightedText="Building Developers"
          subtitle="Frequently asked questions about cohort training, project architectures, and career acceleration frameworks."
        />

        <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0e1c]/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-wider font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Interactive Pedagogy Breakdown</span>
          </div>

          <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
            {FAQ_DATA.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>
                  <span className="text-left font-display">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Verified Teaching Standard</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};
