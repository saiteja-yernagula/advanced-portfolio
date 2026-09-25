import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Timer, 
  BarChart3, 
  UserCheck, 
  Layers, 
  ArrowRight, 
  Sparkles,
  FileSpreadsheet,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_QUIZ_QUESTIONS } from '../../data/quizData';

export const ProjectolioDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'admin'>('student');
  
  // Student Quiz State
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(180); // 3 minutes

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (quizStarted && !isSubmitted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleQuizSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, isSubmitted, timeLeft]);

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQIndex]: optionIndex
    }));
  };

  const handleQuizSubmit = () => {
    setIsSubmitted(true);
    let score = 0;
    SAMPLE_QUIZ_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) score++;
    });
    if (score >= 3) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleResetQuiz = () => {
    setQuizStarted(true);
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setTimeLeft(180);
  };

  const currentQ = SAMPLE_QUIZ_QUESTIONS[currentQIndex];
  const score = Object.entries(selectedAnswers).reduce((acc, [qIdx, ans]) => {
    return acc + (SAMPLE_QUIZ_QUESTIONS[Number(qIdx)].correctAnswer === ans ? 1 : 0);
  }, 0);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full rounded-2xl bg-[#090d16] border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/40">
      <div className="bg-[#0f1422] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            PROJECTOLIO LIVE INTERACTIVE SIMULATOR v2.4
          </span>
        </div>

        <div className="flex items-center bg-[#182032] p-1 rounded-lg border border-slate-700/60">
          <button
            onClick={() => setActiveTab('student')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'student'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-neon-cyan'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Student View (Live Test)
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'admin'
                ? 'bg-purple-600 text-white font-bold shadow-neon-purple'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Admin Analytics View
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'student' ? (
            <motion.div
              key="student-mode"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {!quizStarted ? (
                <div className="text-center py-8 sm:py-12 max-w-xl mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4 text-cyan-400 shadow-neon-cyan">
                    <Layers className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Interactive Python Full-Stack Evaluation
                  </h3>
                  <p className="text-sm text-slate-400 mb-6">
                    Experience the student test engine: Timed questions, anti-cheat state isolation, code snippets, and automated instant scoring.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 text-left">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                      <div className="text-slate-400 mb-1">Questions</div>
                      <div className="text-white font-bold font-mono">4 Challenge Sets</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                      <div className="text-slate-400 mb-1">Time Limit</div>
                      <div className="text-cyan-400 font-bold font-mono">03:00 Mins</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs col-span-2 sm:col-span-1">
                      <div className="text-slate-400 mb-1">Auto Grading</div>
                      <div className="text-emerald-400 font-bold font-mono">Instant with Explanations</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setQuizStarted(true);
                      setTimeLeft(180);
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-neon-cyan hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Launch Interactive Test Engine
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      {SAMPLE_QUIZ_QUESTIONS.map((_, idx) => {
                        const isAnswered = selectedAnswers[idx] !== undefined;
                        const isCurrent = currentQIndex === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setCurrentQIndex(idx)}
                            className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all ${
                              isCurrent
                                ? 'bg-cyan-500 text-slate-950 shadow-neon-cyan ring-2 ring-cyan-300'
                                : isAnswered
                                ? 'bg-cyan-950 text-cyan-300 border border-cyan-600/40'
                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                            }`}
                          >
                            Q{idx + 1}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-mono font-bold">
                      <Timer className={`w-4 h-4 ${timeLeft < 30 ? 'text-red-400 animate-spin' : 'text-cyan-400'}`} />
                      <span className={timeLeft < 30 ? 'text-red-400' : 'text-cyan-400'}>
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                  </div>

                  {!isSubmitted ? (
                    <div>
                      <div className="mb-4">
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                          Question {currentQIndex + 1} of {SAMPLE_QUIZ_QUESTIONS.length}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                          {currentQ.question}
                        </h4>
                      </div>

                      {currentQ.codeSnippet && (
                        <div className="p-3.5 mb-6 rounded-xl bg-[#06080e] border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
                          <div className="flex items-center justify-between text-slate-500 text-[10px] mb-1.5 pb-1 border-b border-slate-800">
                            <span>Code Snippet</span>
                            <span>Python/React/SQL</span>
                          </div>
                          <pre>{currentQ.codeSnippet}</pre>
                        </div>
                      )}

                      <div className="space-y-3 mb-6">
                        {currentQ.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[currentQIndex] === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(optIdx)}
                              className={`w-full text-left p-3.5 rounded-xl text-sm transition-all border flex items-start gap-3 ${
                                isSelected
                                  ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-neon-cyan'
                                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                                  isSelected
                                    ? 'bg-cyan-400 text-slate-950'
                                    : 'bg-slate-800 text-slate-400'
                                }`}
                              >
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <button
                          disabled={currentQIndex === 0}
                          onClick={() => setCurrentQIndex(prev => prev - 1)}
                          className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800"
                        >
                          ← Previous
                        </button>

                        <div className="flex items-center gap-2">
                          {currentQIndex < SAMPLE_QUIZ_QUESTIONS.length - 1 ? (
                            <button
                              onClick={() => setCurrentQIndex(prev => prev + 1)}
                              className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold shadow-neon-cyan hover:bg-cyan-400 flex items-center gap-1.5"
                            >
                              Next Question <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            <button
                              onClick={handleQuizSubmit}
                              className="px-5 py-2 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold shadow-neon-green hover:bg-emerald-400 flex items-center gap-1.5"
                            >
                              Submit Quiz <CheckCircle2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-900/60 border border-cyan-500/30">
                        <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-2">
                          <Award className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-1">
                          Test Score: {score} / {SAMPLE_QUIZ_QUESTIONS.length} ({Math.round((score / SAMPLE_QUIZ_QUESTIONS.length) * 100)}%)
                        </h4>
                        <p className="text-xs text-slate-400 mb-4 font-mono">
                          Evaluation completed in sub-50ms via Django Auto-Grading REST Service
                        </p>
                        <button
                          onClick={handleResetQuiz}
                          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-medium inline-flex items-center gap-1.5 transition-all"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Retake Test
                        </button>
                      </div>

                      <div className="space-y-4">
                        <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          Review Explanations:
                        </h5>
                        {SAMPLE_QUIZ_QUESTIONS.map((q, idx) => {
                          const userAns = selectedAnswers[idx];
                          const isCorrect = userAns === q.correctAnswer;
                          return (
                            <div
                              key={idx}
                              className={`p-4 rounded-xl border text-xs ${
                                isCorrect
                                  ? 'bg-emerald-950/20 border-emerald-500/30'
                                  : 'bg-rose-950/20 border-rose-500/30'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-white">Question {idx + 1}: {q.question}</span>
                                {isCorrect ? (
                                  <span className="flex items-center gap-1 text-emerald-400 font-bold font-mono">
                                    <CheckCircle2 className="w-4 h-4" /> Correct (+1.0)
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1 text-rose-400 font-bold font-mono">
                                    <XCircle className="w-4 h-4" /> Incorrect (0.0)
                                  </span>
                                )}
                              </div>
                              <div className="text-slate-300 font-medium mb-2">
                                <span className="text-slate-500">Correct Answer: </span>
                                <span className="text-emerald-300">{q.options[q.correctAnswer]}</span>
                              </div>
                              <p className="text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-cyan-400 font-mono font-semibold">Concept Breakdown: </span>
                                {q.explanation}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="admin-mode"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Total Test Attempts</div>
                  <div className="text-2xl font-bold font-mono text-white">1,480+</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↑ 18% this month</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Average Batch Score</div>
                  <div className="text-2xl font-bold font-mono text-cyan-400">84.6%</div>
                  <div className="text-[10px] text-cyan-400 mt-1">Pass threshold: 70%</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Pass Rate</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">92.4%</div>
                  <div className="text-[10px] text-slate-400 mt-1">Across 12 batches</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Active Quizzes</div>
                  <div className="text-2xl font-bold font-mono text-purple-400">28 Tests</div>
                  <div className="text-[10px] text-purple-400 mt-1">Full-Stack Curriculum</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
                <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Batch Topic Mastery Performance</span>
                  <span className="text-cyan-400 font-sans normal-case text-xs">Live SQL Aggregation</span>
                </h5>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Python OOP & Decorators</span>
                      <span className="font-mono text-cyan-400 font-bold">94% High Mastery</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[94%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Django REST Framework & ModelSerializers</span>
                      <span className="font-mono text-purple-400 font-bold">89% Strong</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[89%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">React State Management & Redux Toolkit</span>
                      <span className="font-mono text-emerald-400 font-bold">91% High Mastery</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-[91%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">MySQL Complex Joins & B-Tree Indexing</span>
                      <span className="font-mono text-amber-400 font-bold">86% Solid</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-[86%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0d121f] border border-cyan-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span>Bulk Excel Question Upload supported via Django Pandas backend.</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 font-mono text-[11px]">
                  RBAC: Admin Role Verified
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
