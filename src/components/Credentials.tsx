import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Lock } from 'lucide-react';

export function Credentials() {
  return (
    <section id="certs" className="py-32 px-8 md:px-16 lg:px-24 bg-surface-low border-y border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24">

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-primary tracking-widest uppercase">0X03 // CREDENTIALS</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              CERTIFICATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface border border-white/5 p-8 flex flex-col gap-6 hover:bg-surface-container transition-colors group">
              <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <Award size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold tracking-tight text-white/90">OCI DevOps Professional</h3>
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">ISSUED: OCT 2025 // ID: OCI-772</span>
              </div>
            </div>

            <div className="bg-surface border border-white/5 p-8 flex flex-col gap-6 hover:bg-surface-container transition-colors group">
              <div className="w-12 h-12 rounded-full border border-secondary/20 bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-secondary/10 transition-colors">
                <CheckCircle size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold tracking-tight text-white/90">OCI Architect Associate</h3>
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">ISSUED: OCT 2025 // ID: OCI-114</span>
              </div>
            </div>

            <div className="sm:col-span-2 bg-surface border border-white/5 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-surface-container transition-colors group">
              <div className="w-12 h-12 rounded-sm border border-primary/20 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                <Lock size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-white/90">Certified Ethical Hacker (C|EH)</h3>
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">EC-COUNCIL // SECURITY_CLEARANCE: ENABLED</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-12 lg:border-l border-white/10 lg:pl-16"
        >
          <div className="flex flex-col gap-4" id="education">
            <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">0X04 // ACADEMIC</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              EDUCATION
            </h2>
          </div>

          <div className="flex flex-col gap-12 border-l border-white/10 pl-8 ml-2">
            <div className="flex flex-col gap-2 relative">
              <div className="absolute -left-[32px] top-2 w-2 h-2 bg-secondary -translate-x-[4.5px] rounded-full" />
              <h3 className="text-2xl font-bold tracking-tight text-white/90">B.Sc. in CSE </h3>
              <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">SOUTHEAST UNIVERSITY</span>
            </div>

            <div className="flex flex-col gap-2 relative">
              <div className="absolute -left-[32px] top-2 w-2 h-2 bg-primary -translate-x-[4.5px] rounded-full" />
              <h3 className="text-2xl font-bold tracking-tight text-white/90">Diploma in Engineering (Computer Technology)</h3>
              <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">RAJSHAHI POLYTECHNIC INSTITUTE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
