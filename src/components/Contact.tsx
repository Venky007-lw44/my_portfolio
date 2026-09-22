import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { SOCIAL_LINKS, PROFILE_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-slate-800 bg-[#060910] text-slate-300">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build the Future Together.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            I am always eager to connect with fellow engineers, researchers, mentors, and peers.
            Whether you want to discuss deep tech architectures, algorithmic challenges, or exciting project opportunities, feel free to reach out!
          </p>
        </div>

        {/* Two Columns: Quick Connect Cards + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 border border-slate-800 transition"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-base font-semibold text-white hover:text-emerald-300 font-mono transition break-all"
              >
                {SOCIAL_LINKS.email}
              </a>
              <p className="text-xs text-slate-400 mt-1">
                Drop me an email anytime for inquiries or peer conversations.
              </p>
            </div>

            {/* LinkedIn Card */}
            <a
              id="footer-linkedin-link"
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/60 transition block group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      LinkedIn Network
                    </h4>
                    <p className="text-xs text-slate-400">venkat-reddy-vaddi</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-emerald-300 transition-colors">
                  Connect &rarr;
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              id="footer-github-link"
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/60 transition block group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      GitHub Repositories
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">@Venky007-lw44</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-emerald-300 transition-colors">
                  Follow &rarr;
                </span>
              </div>
            </a>

            {/* Academic Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-1">
              <span className="text-slate-300 font-semibold block">Academic Base:</span>
              <p>Joy University — Department of Computer Science &amp; Engineering</p>
              <p className="text-slate-500">First-year student pursuing Deep Tech &amp; AI architectures</p>
            </div>

          </div>

          {/* Quick Note / Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-slate-800">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Send a Note to Venkat
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  Mentorship / Collaborations
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-200">
                    Message Prepared &amp; Received!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. You can also connect directly via LinkedIn or email at{' '}
                    <span className="text-emerald-300 font-mono">{SOCIAL_LINKS.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Ramesh or Alex"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100 text-xs outline-none transition placeholder-slate-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. you@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100 text-xs outline-none transition placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Peer Discussion on Generative AI or Mentorship"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100 text-xs outline-none transition placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your thoughts, suggestions, or collaboration ideas..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100 text-xs outline-none transition placeholder-slate-600 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold text-xs tracking-wider uppercase transition shadow-md shadow-emerald-950/40"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Sub-footer Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#04060b] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">Venkat Reddy</span>
            <span>•</span>
            <span>Joy University (1st Year CSE)</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-emerald-400 transition flex items-center gap-1 text-slate-400"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-slate-400 text-center sm:text-right">
            &copy; {new Date().getFullYear()} Venkat Reddy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
