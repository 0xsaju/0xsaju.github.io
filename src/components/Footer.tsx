import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 px-8 md:px-16 lg:px-24 border-t border-white/5 bg-background font-mono text-[10px] tracking-widest text-white/40 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        © 2024 MD SAZZAD HOSSAIN // REL_3.1.0 // SYSTEM_READY
      </div>
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-primary transition-colors">GITHUB_SRC</a>
        <a href="#" className="hover:text-secondary transition-colors">LINKEDIN_PROF</a>
        <a href="#" className="hover:text-white transition-colors">DOC_BUILD_01</a>
      </div>
    </footer>
  );
}
