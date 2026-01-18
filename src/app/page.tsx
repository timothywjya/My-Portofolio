"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Terminal, Code2, Briefcase, Cpu, Database, 
  ExternalLink, Github, Linkedin, Award,
  ChevronRight, Menu, X, Globe, Zap, Sun, Moon
} from 'lucide-react';

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-2xl tracking-tighter text-blue-600 italic">TW.</span>
          
          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-semibold">
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            </div>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:ring-2 ring-blue-500 transition-all"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-4 shadow-lg">
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block font-medium">Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block font-medium">Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block font-medium">Skills</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-6xl mx-auto pt-32 md:pt-48 pb-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
              <Zap size={14} /> Available for Technology Consulting Roles
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Timothy <span className="text-blue-600 italic">Wijaya</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              Software Development Supervisor at <span className="font-semibold text-slate-800 dark:text-slate-200">Indomaret Group</span>. 
              Specializing in <span className="text-blue-600 font-medium italic underline">legacy modernization</span> and high-impact digital solutions.
            </p>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="https://linkedin.com/in/timothywjya28/" target="_blank" className="flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl hover:opacity-90 transition shadow-xl">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/timothywjya" target="_blank" className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
          
          {/* Decorative Code Block */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-800">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <code className="text-xs md:text-sm text-blue-100/90 leading-relaxed block overflow-x-auto italic">
                <p className="text-blue-400 font-bold mb-2">// Strategic Impact at Indomaret</p>
                <p><span className="text-pink-400">const</span> impact = &#123;</p>
                <p className="ml-4">costReduction: <span className="text-amber-300">"50%"</span>,</p>
                <p className="ml-4">manualProcessCut: <span className="text-amber-300">"45%"</span>,</p>
                <p className="ml-4">migration: <span className="text-amber-300">"Zero Downtime"</span>,</p>
                <p className="ml-4">systemIntegrity: <span className="text-amber-300">"100%"</span></p>
                <p>&#125;;</p>
              </code>
            </div>
          </div>
        </div>
      </header>

      {/* CORE EXPERIENCE */}
      <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-3 italic">
            <Briefcase className="text-blue-600" /> Professional Experience
          </h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <p className="text-blue-600 font-bold tracking-wider text-sm">2022 — PRESENT</p>
                <h3 className="text-xl font-bold mt-1 italic underline">Indomaret Group</h3>
              </div>
              <div className="md:col-span-3 pb-12 border-b border-slate-200 dark:border-slate-800">
                <h4 className="text-xl font-bold mb-4">Software Development Supervisor</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 italic">
                  Leading the digital transformation of Indogrosir division. Successfully migrated 5 business-critical 
                  Visual Basic legacy apps to modern Laravel/Node.js architecture.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-sm italic underline">Migration Expert</p>
                    <p className="text-xs text-slate-500 mt-1">Managed complex Oracle to PostgreSQL database transitions.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-sm italic underline text-blue-600">Team Leadership</p>
                    <p className="text-xs text-slate-500 mt-1 italic">Supervising national-scale applications for 10+ branches.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center italic">
        <p className="text-slate-500 text-sm">© 2026 Timothy Wijaya. Optimized for PwC Technology Consulting.</p>
      </footer>
    </div>
  );
}