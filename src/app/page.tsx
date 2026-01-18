"use client";

import {
  Award,
  Briefcase,
  Code2,
  Cpu, Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Terminal,
  X,
  Zap
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-700 dark:selection:text-blue-200">
      
      <nav className="fixed w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-2xl tracking-tighter text-blue-600 italic">TW.</span>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600 dark:text-slate-400">
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            </div>

            <button className="md:hidden p-2 text-slate-600 dark:text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-4 shadow-xl">
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block font-medium hover:text-blue-600">Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block font-medium hover:text-blue-600">Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block font-medium hover:text-blue-600">Skills</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-6xl mx-auto pt-32 md:pt-48 pb-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
              <Zap size={14} /> Available for Technology Consulting Roles
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Timothy <span className="text-blue-600 italic">Wijaya</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              Software Development Supervisor at <span className="font-semibold text-slate-800 dark:text-slate-200">Indomaret Group</span>. 
              Specializing in <span className="text-blue-600 font-medium italic underline">legacy modernization</span> and enterprise system optimization.
            </p>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="https://linkedin.com/in/timothywjya28/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl hover:opacity-90 transition shadow-xl dark:shadow-blue-900/20">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/timothywjya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 relative px-4">
            <div className="absolute -inset-10 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-slate-900 p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-slate-800 transform md:rotate-2 group hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <code className="text-xs md:text-sm text-blue-100/90 leading-relaxed block overflow-x-auto italic">
                <p className="text-blue-400 font-bold mb-2">// Career Strategic Impact</p>
                <p><span className="text-pink-400">const</span> stats = &#123;</p>
                <p className="ml-4">maintenanceReduction: <span className="text-amber-300">"50%"</span>,</p>
                <p className="ml-4">manualProcessCut: <span className="text-amber-300">"45%"</span>,</p>
                <p className="ml-4">dataIntegrity: <span className="text-amber-300">"100%"</span>,</p>
                <p className="ml-4">role: <span className="text-amber-300">"Supervisor"</span></p>
                <p>&#125;;</p>
              </code>
            </div>
          </div>
        </div>
      </header>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-white dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
            <Briefcase className="text-blue-600" /> Professional Experience
          </h2>

          <div className="space-y-12">
            {/* Indomaret Group */}
            <div className="group grid md:grid-cols-4 gap-4 md:gap-8">
              <div className="md:col-span-1">
                <p className="text-blue-600 font-bold tracking-wider text-sm uppercase">2022 — Present</p>
                <h3 className="text-xl font-bold mt-1 italic underline">Indomaret Group</h3>
                <p className="text-slate-500 text-sm">Software Development Supervisor</p>
              </div>
              <div className="md:col-span-3 pb-12 border-b border-slate-200 dark:border-slate-800">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 italic">
                  Leading legacy refactoring projects and database migrations for Indogrosir division. 
                  Successfully migrated 5 critical Visual Basic apps to Laravel/Node.js, cutting maintenance costs by 50%.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-sm italic underline">Migration Expert</p>
                    <p className="text-xs text-slate-500 mt-1">MySQL, PostgreSQL, Oracle Zero-Downtime Integration.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-sm italic underline">National Impact</p>
                    <p className="text-xs text-slate-500 mt-1">Optimizing data synchronization across 10+ National Branches.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-blue-600" /> Strategic Case Studies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"><Zap size={24} /></div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">-50% Cost Reduction</span>
                </div>
                <h3 className="text-xl font-extrabold mb-4 italic underline">Ecosystem Overhaul</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Spearheaded the migration of 5 legacy systems to a modern web stack, ensuring 100% data integrity during the transition.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'Node.js', 'Oracle', 'PostgreSQL'].map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"><Globe size={24} /></div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">National Scaling</span>
                </div>
                <h3 className="text-xl font-extrabold mb-4 italic underline">National Sync Engine</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Built an automated sync system for national promotions, reducing manual processing time by 45%.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Automated Jobs', 'REST API', 'Redis', 'Node.js'].map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH ECOSYSTEM */}
      <section id="skills" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-3 italic">
                <Cpu className="text-blue-400" /> Technology Ecosystem
              </h2>
              <p className="text-slate-400 mt-2 italic underline text-blue-800">Advanced toolkit for enterprise solutions.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 italic">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Academic Honor</p>
              <p className="text-2xl font-bold">GPA 3.71 / 4.00</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
                <Terminal size={18} /> Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {['PHP (Laravel)', 'Node.js', 'TypeScript', 'SQL', 'VB.NET'].map(s => (
                  <span key={s} className="px-4 py-2 bg-slate-800 rounded-xl text-sm border border-slate-700">{s}</span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
                <Database size={18} /> Data Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Oracle', 'PostgreSQL', 'MySQL', 'Redis', 'API Design'].map(s => (
                  <span key={s} className="px-4 py-2 bg-slate-800 rounded-xl text-sm border border-slate-700">{s}</span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
                <Award size={18} /> Methodologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Agile / Scrum', 'SDLC', 'Legacy Refactoring', 'DevOps'].map(s => (
                  <span key={s} className="px-4 py-2 bg-slate-800 rounded-xl text-sm border border-slate-700">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center">
        <div className="flex justify-center gap-8 mb-8">
           <a href="https://linkedin.com/in/timothywjya28/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition duration-300"><Linkedin size={28} /></a>
           <a href="https://github.com/timothywjya" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition duration-300"><Github size={28} /></a>
           <a href="mailto:wijayatimojaya@gmail.com" className="text-slate-400 hover:text-blue-600 transition duration-300"><Mail size={28} /></a>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium italic">
          © 2026 Timothy Wijaya. Optimized for Enterprise Performance.
        </p>
      </footer>
    </div>
  );
}