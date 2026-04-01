import React from 'react';
import { User, Terminal, Award, Mail } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-20 bottom-0 w-16 flex flex-col items-center py-8 gap-8 border-r border-white/5 bg-background/50 backdrop-blur-md z-40 hidden md:flex">
      <a href="#skills" className="p-3 text-white/40 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="About">
        <User size={20} />
      </a>
      <a href="#experience" className="p-3 text-white/40 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Experience">
        <Terminal size={20} />
      </a>
      <a href="#certs" className="p-3 text-white/40 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Credentials">
        <Award size={20} />
      </a>
      <a href="#contact" className="p-3 text-white/40 hover:text-primary hover:bg-primary/10 rounded-lg transition-all" title="Contact">
        <Mail size={20} />
      </a>
    </aside>
  );
}
