import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA } from '../../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'welcome',
      command: 'init',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-cyan-400 font-bold">Saiteja OS [Version 2.4.0 (x86_64)]</div>
          <div>Logged in as guest@saiteja-portfolio:~#</div>
          <div className="text-slate-400">Type <span className="text-cyan-400 font-semibold">'help'</span> for a list of available commands.</div>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let resultNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        resultNode = (
          <div className="space-y-1.5 text-slate-300">
            <div className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              <div><span className="text-emerald-400 font-mono">about</span> - Saiteja's origin story & philosophy</div>
              <div><span className="text-emerald-400 font-mono">skills</span> - Full Stack & Mentorship tech stack</div>
              <div><span className="text-emerald-400 font-mono">experience</span> - Career journey across 4 institutes</div>
              <div><span className="text-emerald-400 font-mono">projects</span> - Featured capstones & Projectolio</div>
              <div><span className="text-emerald-400 font-mono">impact</span> - Stats on 1000+ students trained</div>
              <div><span className="text-emerald-400 font-mono">contact</span> - Email, LinkedIn, GitHub links</div>
              <div><span className="text-emerald-400 font-mono">hire</span> - Book mentorship or full-stack dev</div>
              <div><span className="text-emerald-400 font-mono">matrix</span> - Digital cyber stream</div>
              <div><span className="text-emerald-400 font-mono">clear</span> - Clear terminal window</div>
              <div><span className="text-emerald-400 font-mono">exit</span> - Close terminal</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'story':
        resultNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">STORY: FROM MOBILE PHONE TO 1000+ DEVELOPERS</div>
            <p>• Mechanical Engineering background with passion discovered through teaching to fund education.</p>
            <p>• Learned HTML, CSS, JavaScript by writing code on a mobile phone without a laptop.</p>
            <p>• Secured 1st trainer role at Anudip Foundation within 3 months of self-study.</p>
            <p>• Core Philosophy: "I build developers, not just coders. I train mindset, not just syntax."</p>
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">CORE TECHNICAL ARSENAL:</div>
            <div><span className="text-purple-400 font-semibold">[Frontend]:</span> React.js, Redux Toolkit, JavaScript ES6+, HTML5, CSS3, Bootstrap 5</div>
            <div><span className="text-cyan-400 font-semibold">[Backend]:</span> Python, Django, Django REST Framework, MVC Architecture</div>
            <div><span className="text-emerald-400 font-semibold">[Database]:</span> MySQL, Relational Schema Design, Complex Joins, Indexing</div>
            <div><span className="text-amber-400 font-semibold">[Tools & Data]:</span> Git, GitHub, NumPy, Pandas, REST APIs, JWT Auth</div>
            <div><span className="text-pink-400 font-semibold">[Pedagogy]:</span> Real-World Capstones, Mock Technical Interviews, Placement Preparation</div>
          </div>
        );
        break;

      case 'experience':
        resultNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">CAREER TRAJECTORY (3+ YEARS):</div>
            {EXPERIENCE_DATA.map(exp => (
              <div key={exp.id} className="border-l-2 border-cyan-500/40 pl-2">
                <div className="text-white font-bold">{exp.company} — <span className="text-cyan-300">{exp.role}</span> ({exp.duration})</div>
                <div className="text-slate-400">{exp.highlights[0]}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">FEATURED PROJECTS:</div>
            {PROJECTS_DATA.map(p => (
              <div key={p.id}>
                <span className="text-emerald-400 font-bold">• {p.title}:</span> {p.subtitle}
                <div className="text-slate-400 text-[11px]">Tech: {p.techStack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'impact':
        resultNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">KEY IMPACT METRICS:</div>
            <div>👨‍🎓 1000+ Students Trained across 4 Premier Institutes</div>
            <div>💻 2000+ Capstone Projects Architected & Delivered</div>
            <div>🏢 Placed across 100+ Top Tech Companies</div>
            <div>🚀 Alumni working on high-value (Crore-level) enterprise systems</div>
          </div>
        );
        break;

      case 'contact':
      case 'hire':
        resultNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">DIRECT CHANNELS:</div>
            <div>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></div>
            <div>💼 LinkedIn: <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer" className="text-cyan-400 underline">saiteja-yernagula</a></div>
            <div>💻 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">saiteja-yernagula</a></div>
          </div>
        );
        break;

      case 'matrix':
        resultNode = (
          <div className="text-emerald-400 font-mono text-xs leading-none">
            {`01000011 01001111 01000100 01000101 01000111 01001110 01000001 01001110
01010011 01000001 01001001 01010100 01000101 01001010 01000001 00100001
>>> FULL_STACK_SUPERCONDUCTOR_INITIALIZED
>>> SUCCESS: DEVELOPER_MINDSET_ACQUIRED`}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;

      default:
        resultNode = (
          <div className="text-rose-400 text-xs">
            Command not recognized: '{cmd}'. Type <span className="text-cyan-400 font-mono font-bold">'help'</span> for list of commands.
          </div>
        );
    }

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        command: inputVal,
        output: resultNode
      }
    ]);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-3xl h-[520px] rounded-2xl bg-[#080b12] border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 flex flex-col overflow-hidden font-mono"
      >
        <div className="px-4 py-2.5 bg-[#0f1422] border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs text-slate-300 font-semibold">saiteja-os@terminal: ~</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto space-y-3 cursor-text text-sm"
        >
          {history.map(item => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 text-xs">
                <span className="text-purple-400">visitor@portfolio</span>
                <span className="text-slate-500">:</span>
                <span className="text-emerald-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-100 font-bold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleCommand} className="p-3 bg-[#0c101a] border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-xs">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'experience', 'projects', 'impact'..."
            className="flex-1 bg-transparent text-slate-100 text-xs focus:outline-none placeholder-slate-600 font-mono"
            autoFocus
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 text-xs"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};
