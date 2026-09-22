import React from 'react';
import { ArrowRight, Linkedin, Github, Sparkles, BookOpen, Cpu, ShieldCheck } from 'lucide-react';
import { PROFILE_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background subtle neon glow rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status & University Chips */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Deep Tech Discussions &amp; Mentorship
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                <BookOpen className="w-3 h-3 text-emerald-400" />
                Joy University • B.Tech CSE (1st Year)
              </span>
            </div>

            {/* Impactful Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-300">{PROFILE_INFO.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {PROFILE_INFO.tagline}
              </p>
            </div>

            {/* Subheadline highlighting curiosity for deep tech and generative AI */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Curious first-year undergraduate passionate about exploring deep tech from mathematical
              first principles to generative AI and foundation models. Bridging strong algorithmic fundamentals
              with modern software development to engineer impactful intelligent systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-btn-projects"
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold text-sm transition shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-btn-linkedin"
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700/80 hover:border-slate-600 transition hover:scale-[1.02] active:scale-[0.98]"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                id="hero-btn-github"
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-3">
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Degree Track</span>
                <p className="text-xs sm:text-sm font-semibold text-slate-200">B.Tech CSE</p>
                <p className="text-[11px] text-slate-400">Joy University</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Specialization</span>
                <p className="text-xs sm:text-sm font-semibold text-slate-200">Deep Tech &amp; AI</p>
                <p className="text-[11px] text-slate-400">Foundation Models</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Mindset</span>
                <p className="text-xs sm:text-sm font-semibold text-emerald-300">Absolute Learner</p>
                <p className="text-[11px] text-slate-400">First-Principles</p>
              </div>
            </div>
          </div>

          {/* Profile Spotlight Board (No code) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-[#0d1322]/95 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-medium text-slate-300 ml-2">Profile Spotlight</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Active Undergrad</span>
                </div>
              </div>

              {/* Board Content (Clean visual showcase, no code) */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Profile Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800/80">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-slate-800 to-indigo-900/40 border border-emerald-500/30 flex items-center justify-center font-bold text-xl text-emerald-400 shadow-md">
                    VR
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{PROFILE_INFO.name}</h3>
                    <p className="text-xs text-emerald-400 font-medium">Aspiring AI Engineer</p>
                    <p className="text-[11px] text-slate-400">Joy University • B.Tech CSE (1st Year)</p>
                  </div>
                </div>

                {/* Key Overview Cards */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Education
                      </span>
                      <p className="text-xs text-slate-200 font-medium">Joy University</p>
                      <p className="text-[11px] text-slate-400">B.Tech in Computer Science &amp; Engineering</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Core Focus
                      </span>
                      <p className="text-xs text-slate-200 font-medium">Deep Tech &amp; Foundation Models</p>
                      <p className="text-[11px] text-slate-400">Python Logic, AI Architectures &amp; Software Dev</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Guiding Philosophy
                      </span>
                      <p className="text-xs text-emerald-300 font-semibold">&quot;Absolute Learner&quot;</p>
                      <p className="text-[11px] text-slate-400">Continuous mastery from first principles to scale</p>
                    </div>
                  </div>
                </div>

                {/* Focus Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                    Generative AI
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                    Python
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                    Algorithms
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-950/40 text-indigo-300 border border-indigo-800/40">
                    Deep Tech
                  </span>
                </div>

                {/* Bottom Status bar */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Open to Mentorship &amp; Collaboration</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
