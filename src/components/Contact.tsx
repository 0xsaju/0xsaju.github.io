import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(20,184,166,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-primary tracking-widest uppercase">0X05 // TRANSMIT_PAYLOAD</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              LET'S<br />CONNECT.
            </h2>
          </div>

          <p className="text-xl text-white/60 font-light leading-relaxed max-w-md">
            Ready to scale. Seeking SRE and senior DevOps challenges. Reach out via secure protocol.
          </p>

          <div className="flex flex-col gap-6 mt-4">
            <a href="https://github.com/0xsaju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-surface-container border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <Github size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">GIT_REPOSITORY</span>
                <span className="text-xl font-bold tracking-tight text-white/90 group-hover:text-primary transition-colors">github.com/0xsaju</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/0xsaju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-surface-container border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary/10 transition-colors">
                <Linkedin size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">PROFESSIONAL_NETWORK</span>
                <span className="text-xl font-bold tracking-tight text-white/90 group-hover:text-secondary transition-colors">linkedin.com/in/0xsaju</span>
              </div>
            </a>

            <a href="https://x.com/0xsaju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-surface-container border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/5 transition-colors">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z"></path></svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">MICROBLOGGING_FEED</span>
                <span className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">x.com/0xsaju</span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-low border-t-2 border-primary p-8 md:p-12 flex flex-col gap-8 relative"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary to-transparent" />
          
          <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">FORM_POST_PROTOCOL_V1</span>

          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-3">
              <label className="font-mono text-[10px] text-white/60 tracking-widest uppercase">SENDER_IDENTITY</label>
              <input 
                type="text" 
                placeholder="Enter name..."
                className="bg-surface border border-white/10 px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-mono text-[10px] text-white/60 tracking-widest uppercase">ENVELOPE_REPLY_TO</label>
              <input 
                type="email" 
                placeholder="user@domain.com"
                className="bg-surface border border-white/10 px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-mono text-[10px] text-white/60 tracking-widest uppercase">MESSAGE_PAYLOAD</label>
              <textarea 
                rows={4}
                placeholder="Writing message..."
                className="bg-surface border border-white/10 px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 resize-none"
              />
            </div>

            <button className="bg-primary text-background font-bold font-mono text-xs tracking-widest py-4 mt-4 hover:bg-primary-container transition-colors">
              TRANSMIT_DATA
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
