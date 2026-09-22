/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Roadmap } from './components/Roadmap';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'roadmap', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Fixed Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Roadmap />
      </main>

      {/* Footer & Contact Section */}
      <Contact />
    </div>
  );
}

