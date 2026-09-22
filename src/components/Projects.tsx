import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Terminal, CheckCircle2, Clock } from 'lucide-react';
import { PROJECTS, SOCIAL_LINKS } from '../data/portfolioData';
import { VotingSimulator } from './VotingSimulator';

export const Projects: React.FC = () => {
  const [showInteractiveTester, setShowInteractiveTester] = useState<boolean>(true);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Technical Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Featured Work &amp; Lab Projects.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Concrete implementations and active research projects demonstrating logic construction, Python tooling, and deep tech exploration.
            </p>
          </div>

          <a
            id="projects-github-cta"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-medium transition self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>View All Repositories on GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          
          {/* Card 1: Completed Project (Voting Eligibility Calculator & Validator) */}
          {PROJECTS.filter((p) => p.status === 'Completed').map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-emerald-500/30 shadow-xl shadow-black/30 relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Project Info */}
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Completed &amp; Verified
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800">
                      Primary Language: Python
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-row lg:flex-col gap-2.5 shrink-0">
                  <a
                    id="btn-project-github"
                    href={project.githubUrl || SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition"
                  >
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <button
                    id="btn-toggle-simulator"
                    type="button"
                    onClick={() => setShowInteractiveTester(!showInteractiveTester)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition"
                  >
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span>{showInteractiveTester ? 'Hide Live Tester' : 'Launch Live Tester'}</span>
                  </button>
                </div>

              </div>

              {/* Embedded Interactive Simulator */}
              {showInteractiveTester && (
                <div className="pt-4 border-t border-slate-800/80 mt-6">
                  <VotingSimulator />
                </div>
              )}
            </div>
          ))}

          {/* In-Progress Placeholder Projects Grid (Glassmorphism & Dashed Border Design) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {PROJECTS.filter((p) => p.status === 'In Progress').map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="p-6 sm:p-7 rounded-2xl bg-[#0b101c]/70 backdrop-blur-md border border-dashed border-slate-700/80 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30 inline-flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-amber-400 animate-spin" />
                      In Progress • Ongoing Lab Work
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Deep Tech Exploration</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-emerald-400 text-xs font-mono">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition"
                  >
                    <span>Follow Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
