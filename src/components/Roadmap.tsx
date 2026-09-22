import React from 'react';
import { Route, CheckCircle, Clock, Sparkles, Compass, ArrowRight, BookMarked } from 'lucide-react';
import { ROADMAP_MILESTONES } from '../data/portfolioData';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Route className="w-3.5 h-3.5" />
            <span>Deep Tech Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Current Focus &amp; Learning Roadmap.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A transparent, ongoing timeline tracking my foundational CS progression, deep learning studies, and software development milestones.
          </p>
        </div>

        {/* Minimalist Timeline Cards */}
        <div className="relative">
          {/* Vertical line connector for desktop */}
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-500 via-indigo-500 to-slate-800" />

          <div className="space-y-6">
            {ROADMAP_MILESTONES.map((milestone, index) => {
              const isActive = milestone.status === 'Active Focus';
              const isInProgress = milestone.status === 'In Progress';

              return (
                <div
                  key={milestone.id}
                  id={`roadmap-${milestone.id}`}
                  className={`p-6 sm:p-7 rounded-2xl bg-[#0d1322] border transition-all duration-200 lg:ml-16 relative ${
                    isActive
                      ? 'border-emerald-500/50 shadow-lg shadow-emerald-950/20'
                      : isInProgress
                      ? 'border-indigo-500/40'
                      : 'border-slate-800'
                  }`}
                >
                  {/* Desktop timeline indicator dot */}
                  <div
                    className={`hidden lg:flex absolute -left-[4.5rem] top-7 w-8 h-8 rounded-full border items-center justify-center font-mono text-xs font-bold ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/30'
                        : isInProgress
                        ? 'bg-indigo-600 text-white border-indigo-400'
                        : 'bg-slate-900 text-slate-400 border-slate-700'
                    }`}
                  >
                    0{index + 1}
                  </div>

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                        {milestone.phase}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                          isActive
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : isInProgress
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {milestone.status}
                      </span>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 font-mono">Progress:</span>
                      <div className="w-24 sm:w-32 bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className={`h-full rounded-full ${
                            isActive
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                              : 'bg-gradient-to-r from-indigo-500 to-violet-400'
                          }`}
                          style={{ width: `${milestone.progressPercent}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-300">
                        {milestone.progressPercent}%
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Key Topics Covered */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                      Key Explorations &amp; Milestones:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {milestone.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
