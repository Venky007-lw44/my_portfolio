import React from 'react';
import { User, Sparkles, Compass, Target, GraduationCap, Lightbulb, BookOpen } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Curious Mind, Analytical Foundation.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A look into my academic journey, core philosophy, and aspirations in software and artificial intelligence.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">B.Tech in Computer Science &amp; Engineering</h3>
                  <p className="text-xs text-emerald-400 font-mono">Joy University • 1st Year Undergraduate</p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                <p>
                  I am currently a 1st-year B.Tech CSE student at <strong className="text-white font-semibold">Joy University</strong>. From my first lines of Python code, I became fascinated by how deterministic logic rules can evolve into self-improving algorithmic architectures.
                </p>
                <p>
                  Rather than treating modern artificial intelligence as an impenetrable black box, my journey is driven by an <strong className="text-emerald-300 font-semibold">&quot;Absolute Learner&quot;</strong> mindset. I believe real mastery in deep tech comes from deconstructing systems to their first principles—understanding how data structures, memory allocation, and mathematical logic form the bedrock of multi-billion parameter foundation models.
                </p>
                <p>
                  My definitive long-term goal is to engineer <strong className="text-white font-semibold">impactful intelligent systems</strong> that solve non-trivial societal and technological challenges, marrying backend rigor with intuitive interfaces.
                </p>
              </div>

              {/* Tag Highlights */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                  Joy University CSE
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                  &quot;Absolute Learner&quot; Tenet
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-950/40 text-indigo-300 border border-indigo-800/40">
                  Foundation Models
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                  Systems &amp; Logic Design
                </span>
              </div>
            </div>
          </div>

          {/* Core Mindset Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Pillar 1 */}
            <div className="p-5 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">First-Principles Logic</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Prioritizing rock-solid foundational concepts—Python algorithmic building blocks, boundary case validation, and memory efficiency before scaling complexity.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">The Absolute Learner</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Relentless curiosity with zero fear of starting from scratch. Actively exploring research papers, new language syntaxes, and generative AI advancements daily.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Impactful System Building</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Software is only as good as the value it provides. Aiming to build intelligent tools that automate mundane toil and accelerate human creativity.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
