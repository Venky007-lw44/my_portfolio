import React from 'react';
import { Cpu, Code2, Globe, Terminal, CheckCircle2, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technical Domain.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A structured breakdown of my current software engineering proficiencies, AI research interests, and tooling toolkit.
          </p>
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const isPythonCard = category.id === 'programming';
            const isAICard = category.id === 'ai';

            return (
              <div
                key={category.id}
                id={`skill-card-${category.id}`}
                className={`p-6 sm:p-7 rounded-2xl bg-[#0d1322] border transition-all duration-200 flex flex-col justify-between ${
                  isPythonCard
                    ? 'border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                    : isAICard
                    ? 'border-violet-500/40 shadow-lg shadow-violet-950/20'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {category.skills.length} core competencies
                        </span>
                      </div>
                    </div>

                    {isPythonCard && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Primary Focus
                      </span>
                    )}

                    {isAICard && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        Deep Tech
                      </span>
                    )}
                  </div>

                  {/* Skills List inside category */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-slate-700 transition"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            {skill.name}
                          </h4>
                          {skill.level && (
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                              {skill.level}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 pl-5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom tech badges */}
                <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {category.id === 'programming' && (
                    <>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/30">Python 3</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">CLI Engines</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Control Flow</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Algorithms</span>
                    </>
                  )}
                  {category.id === 'webdev' && (
                    <>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-800/30">HTML5 Semantic</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">CSS3 Flex/Grid</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Tailwind CSS</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">JavaScript ES6+</span>
                    </>
                  )}
                  {category.id === 'ai' && (
                    <>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-950/40 text-violet-300 border border-violet-800/30">Prompt Engineering</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Transformers</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">LLM Evaluation</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">RAG Fundamentals</span>
                    </>
                  )}
                  {category.id === 'tools' && (
                    <>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/30">Git</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">GitHub</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">VS Code</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Linux / Bash</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
