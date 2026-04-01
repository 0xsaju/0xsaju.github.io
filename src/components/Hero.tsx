import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden">
      {/* Background grid/glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.05),transparent_50%)]" />

      <div className="absolute top-8 right-8 text-right font-mono text-[10px] text-white/30 tracking-widest hidden lg:block">
        [ 23.8103° N, 90.4125° E ]<br />
        LOC_DHAKA_BD_01
      </div>

      <div className="w-full relative z-10 flex items-center justify-between min-h-[calc(100vh-5rem)] px-8 md:px-12 lg:px-16 max-w-[85rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-xl lg:max-w-2xl py-12 lg:py-20 relative z-20 flex-shrink-0"
        >
          <div className="flex flex-col gap-2 font-mono text-xs tracking-widest">
            <div className="flex items-center gap-2 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              STATUS: SYSTEM_ONLINE
            </div>
            <div className="text-secondary">
              &gt; SYSTEM_INIT --ROLE="SRE/DEVOPS"
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.85] flex flex-col drop-shadow-2xl">
            <span className="text-white">MD</span>
            <span className="text-white">SAZZAD</span>
            <span className="text-primary">HOSSAIN</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 font-light max-w-xl leading-relaxed mt-4 drop-shadow-lg">
            Over 6 Years of Experience as a DevOps & Site Reliability Engineer specializing in high-availability cloud systems & GitOps workflows.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 font-mono text-xs tracking-widest">
            <a href="#experience" className="bg-primary text-background px-8 py-4 hover:bg-primary-container transition-colors font-bold inline-block">
              INIT_PROJECTS_VIEW
            </a>
            <a href="#contact" className="border border-white/20 px-8 py-4 hover:border-primary hover:text-primary transition-colors inline-block bg-background/50 backdrop-blur-sm">
              CONTACT_ME
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-end justify-end h-full flex-shrink-0 hidden md:flex pointer-events-none"
        >
          <div className="relative w-full h-full flex items-end justify-end">
            {/* 
              USER: Once you upload your image to the 'public' folder and name it 'hero-image.png',
              change the src below from the unsplash URL to "/hero-image.png"
            */}
            <div className="relative w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px]">
              <img
                src="/hero-image.png"
                onError={(e) => {
                  // Fallback to a placeholder if the user hasn't uploaded their image yet
                  e.currentTarget.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop";
                }}
                alt="MD Sazzad Hossain - System Architecture"
                className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(20,184,166,0.15)] pointer-events-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-[5%] left-[10%] z-20 font-mono text-[10px] text-primary bg-background/95 px-3 py-1.5 border border-primary/30 backdrop-blur-md pointer-events-auto">
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
