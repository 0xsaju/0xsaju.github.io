import React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Sidebar />
      <main className="md:pl-16 pt-20">
        {children}
      </main>
    </div>
  );
}
