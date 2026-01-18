"use client"; 

import React, { useState } from 'react';
import { 
  Terminal, Code2, Briefcase, Cpu, Database, 
  ExternalLink, Github, Linkedin, Award, Users, 
  ChevronRight, Menu, X, Globe, Zap
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      {/* NAVIGATION */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-2xl tracking-tighter text-blue-600 italic">TW.</span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 shadow-lg">
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block font-medium text-slate-700">Skills</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-6xl mx-auto pt-32 md:pt-48 pb-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 mx-auto md:mx-0">
              <Zap size={14} /> Available for Technology Consulting Roles
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Timothy <span className="text-blue-600 italic">Wijaya</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Software Development Supervisor at <span className="font-semibold text-slate-800">Indomaret Group</span>[cite: 8, 9]. 
              Specializing in <span className="text-blue-600 font-medium">legacy modernization</span> and high-concurrency architecture[cite: 11, 13].
            </p>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="https://linkedin.com/in/timothywjya28/" target="_blank" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-blue-600 transition shadow-xl shadow-blue-100/50">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/timothywjya" target="_blank" className="flex items-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-2xl hover:bg-slate-50 transition">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative px-4">
            <div className="absolute -inset-10 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-slate-900 p-6 md:p-8 rounded-[2rem] shadow-3xl border border-slate-800 transform md:rotate-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <code className="text-xs md:text-sm text-blue-100/80 leading-relaxed block overflow-x-auto">
                <p className="text-blue-400 font-bold mb-2">// Career Strategic Metrics</p>
                <p><span className="text-pink-400 italic">const</span> impact = &#123;</p>
                <p className="ml-4">maintenanceReduction: <span className="text-amber-300">"50%"</span>, </p>
                <p className="ml-4">manualProcessCut: <span className="text-amber-300">"45%"</span>, [cite: 16]</p>
                <p className="ml-4">migrationSuccess: <span className="text-amber-300">"Zero Downtime"</span>, [cite: 12]</p>
                <p className="ml-4">leadership: <span className="text-amber-300">"Supervising National Apps"</span> [cite: 16, 17]</p>
                <p>&#125;;</p>
              </code>
            </div>
          </div>
        </div>
      </header>

      {/* CORE EXPERIENCE [cite: 7] */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
            <Briefcase className="text-blue-600" /> Professional Experience [cite: 7]
          </h2>

          <div className="space-y-12">
            {/* Indomaret Group */}
            <div className="group grid md:grid-cols-4 gap-4 md:gap-8">
              <div className="md:col-span-1">
                <p className="text-blue-600 font-bold tracking-wider text-sm uppercase">2022 — Present [cite: 10]</p>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Indomaret Group [cite: 8]</h3>
                <p className="text-slate-500 font-medium italic">North Jakarta, ID [cite: 8]</p>
              </div>
              <div className="md:col-span-3 pb-12 border-b border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Software Development Supervisor [cite: 9]</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Spearheaded the modernization of critical legacy systems for Indogrosir Division. 
                  Focused on migrating 5 Visual Basic applications to modern Laravel/Node.js stacks, 
                  slashing maintenance overhead by 50%.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
                    <p className="font-bold text-slate-900 text-sm">Database & Integration [cite: 12]</p>
                    <p className="text-xs text-slate-500 mt-1">Managed Oracle, PostgreSQL, and MySQL migrations with zero-downtime[cite: 12].</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
                    <p className="font-bold text-slate-900 text-sm">National Scaling [cite: 17]</p>
                    <p className="text-xs text-slate-500 mt-1">Optimized sync for National Promotions impacting 10+ branches[cite: 17].</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diskominfo */}
            <div className="group grid md:grid-cols-4 gap-4 md:gap-8">
              <div className="md:col-span-1 italic">
                <p className="text-slate-400 font-bold tracking-wider text-sm uppercase italic">2021 — 2022 [cite: 20]</p>
                <h3 className="text-xl font-bold text-slate-900 mt-1 italic">Diskominfo [cite: 18]</h3>
                <p className="text-slate-500 font-medium italic italic">Salatiga, ID [cite: 18]</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-xl font-bold text-slate-900 mb-4 italic">Project Manager & Intern [cite: 19, 32]</h4>
                <p className="text-slate-600 leading-relaxed mb-4 italic">
                  Led a 13-member cross-functional team to deploy 5 critical Information Systems[cite: 21, 23]. 
                  Achieved 100% on-time delivery and reduced manual processing by 30%[cite: 21, 22].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-blue-600" /> Strategic Case Studies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600"><Zap size={24} /></div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">-50% Cost Reduction </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 italic underline">Legacy Ecosystem Overhaul </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Successfully transitioned 5 critical Visual Basic apps to Laravel 10/Node.js. 
                  Ensured 100% data integrity during migration across legacy Oracle and MySQL databases.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'Node.js', 'Express', 'Oracle'].map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-2xl bg-blue-50 text-blue-600"><Globe size={24} /></div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">National Impact [cite: 17]</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 italic underline text-blue-800">National Sync Engine [cite: 17]</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Optimized real-time visibility for 10+ national branches[cite: 17]. 
                  Automated recurring jobs resulting in 45% less manual data entry[cite: 16].
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Laravel', 'Redis', 'Automation'].map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH ECOSYSTEM [cite: 41, 42] */}
      <section id="skills" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 my-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-3 italic">
                <Cpu className="text-blue-400 italic" /> Technology Ecosystem [cite: 41, 42]
              </h2>
              <p className="text-slate-400 mt-2 italic">Comprehensive toolkit for enterprise-grade solutions.</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 italic">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest italic underline mb-1">Academic Profile </p>
              <p className="text-xl font-bold italic">GPA 3.71 / 4.00 </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 italic underline text-blue-800">
            <div className="space-y-6 italic underline">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm italic underline">
                <Code2 size={18} /> Languages [cite: 42]
              </h4>
              <div className="flex flex-wrap gap-2 italic underline">
                {['PHP', 'JavaScript', 'TypeScript', 'VB.NET', 'SQL'].map(s => (
                  <span key={s} className="px-4 py-2 bg-slate-800 rounded-xl text-sm border border-slate-700 italic underline">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-6 italic underline">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm italic underline">
                <Database size={18} /> Infrastructure [cite: 12]
              </h4>
              <div className="flex flex-wrap gap-2 italic underline">
                {['Oracle', 'PostgreSQL', 'MySQL', 'Express.js', 'Git'].map(s => (
                  <span key={s} className="px-4 py-2 bg-slate-800 rounded-xl text-sm border border-slate-700 italic underline">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-6 italic underline">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm italic underline">
                <Award size={18} /> Methodology [cite: 42]
              </h4>
              <div className="flex flex-wrap gap-2 italic underline">
                {['Agile/Scrum', 'SDLC', 'Legacy Refactoring', 'RESTful API'].map(s => (
                  <span key={s} className="px-4 py-2 bg-slate-800 rounded-xl text-sm border border-slate-700 italic underline">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-slate-200 text-center italic">
        <p className="text-slate-500 font-bold text-blue-800 mb-4 underline italic">Looking to innovate your enterprise system? Let's connect.</p>
        <div className="flex justify-center gap-6 mb-8 underline">
           <a href="https://linkedin.com/in/timothywjya28/" target="_blank" className="text-slate-400 hover:text-blue-600 transition underline italic"><Linkedin /></a>
           <a href="https://github.com/timothywjya" target="_blank" className="text-slate-400 hover:text-blue-600 transition underline italic"><Github /></a>
        </div>
        <p className="text-slate-400 text-xs italic font-bold text-blue-800 underline">
          © 2026 Timothy Wijaya. Built with Next.js 14, Tailwind CSS, and Lucide Icons.
        </p>
      </footer>
    </div>
  );
}