import React from 'react';
import { Terminal } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-8 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <a href="#home" className="flex items-center gap-2 text-primary font-mono text-sm hover:text-primary-container transition-colors">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span>[sazzad@devsecops]:~#</span>
      </a>
      
      <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-white/50">
        <a href="#experience" className="hover:text-primary transition-colors">EXPERIENCE</a>
        <a href="#skills" className="hover:text-primary transition-colors">SKILLS</a>
        <a href="#certs" className="hover:text-primary transition-colors">CERTS</a>
        <a href="#education" className="hover:text-primary transition-colors">EDUCATION</a>
        <a href="#contact" className="border border-white/20 px-6 py-2 hover:border-primary hover:text-primary transition-colors">CONTACT</a>
      </div>
    </nav>
  );
}
