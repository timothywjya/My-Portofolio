"use client";

import {
  Award,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Search,
  ShieldCheck,
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
      
      {/* NAVIGATION */}
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
            {/* Badge Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
              <Zap size={14} /> Available for Technology Consulting Roles
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Timothy <span className="text-blue-600 italic">Wijaya</span>
            </h1>

            {/* Hero Description - Dibuat lebih tajam untuk Consulting */}
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              Software Development Supervisor at <span className="font-semibold text-slate-800 dark:text-slate-200">Indomaret Group</span>. 
              Transforming business challenges into <span className="text-blue-600 font-medium italic underline">high-impact digital solutions</span> through legacy modernization.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="https://linkedin.com/in/timothywjya28/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl hover:opacity-90 transition shadow-xl dark:shadow-blue-900/20 font-bold">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/timothywjya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition font-bold">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>

          {/* Right Side: Integrated Code Profile */}
          <div className="order-1 md:order-2 relative px-4">
            <div className="absolute -inset-10 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            <div className="relative bg-slate-900 p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-slate-800 transform md:rotate-2 group hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-500 font-mono ml-2 italic">executive_summary.ts</span>
              </div>

              <code className="text-[11px] md:text-sm text-blue-100/90 leading-relaxed block overflow-x-auto italic font-mono">
                <p className="text-blue-400 font-bold mb-2">// Technical & Academic Foundation</p>
                <p><span className="text-pink-400">const</span> profile = &#123;</p>
                <p className="ml-4">gpa: <span className="text-amber-300">3.71</span>,</p>
                <p className="ml-4">techStack: [<span className="text-amber-300">"Laravel"</span>, <span className="text-amber-300">"Next.js"</span>, <span className="text-amber-300">"Oracle"</span>],</p>
                <p className="ml-4">leadership: <span className="text-amber-300">"Led 10+ Developers"</span></p>
                <p>&#125;;</p>

                <p className="text-blue-400 font-bold mt-6 mb-2">// Business Value Delivered</p>
                <p><span className="text-pink-400">const</span> impact = &#123;</p>
                <p className="ml-4">efficiency: <span className="text-amber-300">"+45% Optimization"</span>,</p>
                <p className="ml-4">costReduction: <span className="text-amber-300">"50% License Savings"</span>,</p>
                <p className="ml-4">infrastructure: <span className="text-amber-300">"800+ Retail Nodes"</span>,</p>
                <p className="ml-4">availability: <span className="text-amber-300">"Zero Downtime Migration"</span></p>
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
            <Briefcase className="text-blue-600" /> Professional Journey
          </h2>

          <div className="space-y-16">
            {/* Indomaret Group */}
            <div className="group grid md:grid-cols-4 gap-4 md:gap-8">
              <div className="md:col-span-1">
                <p className="text-blue-600 font-bold tracking-wider text-sm uppercase">2022 — Present </p>
                <h3 className="text-xl font-bold mt-1 italic underline">Indomaret Group </h3>
                <p className="text-slate-500 text-sm italic">Software Development Supervisor </p>
              </div>
              <div className="md:col-span-3">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Leading large-scale refactoring and modernization for the Indogrosir Division. 
                  Spearheaded the migration of 5 critical legacy Visual Basic applications to modern Laravel/Node.js stacks, directly reducing maintenance and licensing costs by 50%.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-sm italic underline text-blue-600 dark:text-blue-400">Enterprise Migration </p>
                    <p className="text-xs text-slate-500 mt-1">Executing zero-downtime database migrations across MySQL, PostgreSQL, and Oracle systems.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-sm italic underline text-blue-600 dark:text-blue-400">System Automation </p>
                    <p className="text-xs text-slate-500 mt-1">Developed national applications using Laravel and automated jobs, slashing manual processing by 45%.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group grid md:grid-cols-4 gap-4 md:gap-8">
              <div className="md:col-span-1">
                <p className="text-blue-600 font-bold tracking-wider text-sm uppercase">2021 — 2022 </p>
                <h3 className="text-xl font-bold mt-1 italic underline">Diskominfo </h3>
                <p className="text-slate-500 text-sm italic">Software Developer Intern</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Led a 13-member cross-functional team of developers and QAs to deploy 5 critical Information Systems for government agencies. 
                  Ensured 100% on-time delivery while optimizing deployment pipelines to reduce time-to-market by 15%.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-sm italic underline text-blue-600 dark:text-blue-400">Team Leadership </p>
                    <p className="text-xs text-slate-500 mt-1">Provided technical guidance and coordination for a 13-intern team, achieving a 100% project completion rate.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-sm italic underline text-blue-600 dark:text-blue-400">Process Automation</p>
                    <p className="text-xs text-slate-500 mt-1">Delivered web tools that automated 8 manual processes, reducing government processing time by ~30%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
            <Code2 className="text-blue-600" /> Strategic Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. National Franchise ERP */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Globe size={24} />
                </div>
                <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full uppercase tracking-widest">Enterprise ERP</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 italic underline">National Franchise Management Ecosystem</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Complete migration of core systems from VB to Laravel. Handles 16 branches and 800+ stores, managing Sales, Margins, Virtual Accounts, and Logistics scheduling.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'Oracle', 'PostgreSQL', 'Automated Jobs'].map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold border border-slate-200 dark:border-slate-700">{t}</span>
                ))}
              </div>
            </div>

            {/* 2. Supply Chain Optimizer */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Zap size={24} />
                </div>
                <span className="text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full uppercase tracking-widest">Supply Chain</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 italic underline">Intelligent Stock & Promotion Optimizer</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Engineered an automated stock allocation system that adjusts inventory levels based on seasonal promotion performance and real-time demand.
              </p>
              <div className="flex flex-wrap gap-2">
                {['PHP', 'MySQL', 'Oracle', 'Business Intelligence'].map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold border border-slate-200 dark:border-slate-700">{t}</span>
                ))}
              </div>
            </div>

            {/* 3. Geo-Field Survey */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Search size={24} />
                </div>
                <span className="text-[10px] font-bold bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full uppercase tracking-widest">Market Expansion</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 italic underline">Expansion Analytics & Survey Suite</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                A Microservices-based API suite (Express JS) for field surveys, analyzing site potential for new outlets and High-Value Customer (HVC) loyalty metrics.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Express JS', 'Node.js', 'REST API', 'PostgreSQL'].map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold border border-slate-200 dark:border-slate-700">{t}</span>
                ))}
              </div>
            </div>

            {/* 4. Log Management */}
            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] border border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-600 rounded-2xl text-white">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[10px] font-bold bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">Innovation Lead</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 italic underline text-blue-400">Event-Driven Observability Platform</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Independently developed a centralized log management system using Kafka to monitor Android, Web, and Desktop applications across the entire SD 1 team.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Kafka', 'Express JS', 'Microservices'].map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold border border-slate-700">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & EDUCATION */}
      <section id="skills" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-3 italic">
                <Award className="text-blue-400" /> Academic & Tech Profile
              </h2>
              <p className="text-slate-400 mt-2 italic">B.S. in Computer Science | Satya Wacana Christian University (2022)</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 text-center">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Honors GPA</p>
              <p className="text-2xl font-bold italic underline">3.71 / 4.00</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm italic underline">
                <Terminal size={18} /> Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {['PHP', 'Node.js', 'Next.js', 'Express', 'TypeScript', 'VB.NET', 'SQL'].map(s => (
                  <span key={s} className="px-4 py-2 bg-slate-800 rounded-xl text-sm border border-slate-700">{s}</span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm italic underline">
                <Database size={18} /> Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Kafka', 'Oracle', 'PostgreSQL', 'MySQL', 'Redis', 'REST APIs'].map(s => (
                  <span key={s} className="px-4 py-2 bg-slate-800 rounded-xl text-sm border border-slate-700">{s}</span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm italic underline">
                <Cpu size={18} /> Methodology
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Agile/Scrum', 'SDLC', 'Refactoring', 'Team Leadership', 'ERP Systems'].map(s => (
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
           <a href="https://linkedin.com/in/timothywjya28/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110"><Linkedin size={28} /></a>
           <a href="https://github.com/timothywjya" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110"><Github size={28} /></a>
           <a href="mailto:wijayatimojaya@gmail.com" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110"><Mail size={28} /></a>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium italic italic underline">
          © 2026 Timothy Wijaya. Optimized for Enterprise Scalability.
        </p>
      </footer>
    </div>
  );
}