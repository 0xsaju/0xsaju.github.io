import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    date: 'PRESENT',
    id: '0x5F3E_INIT',
    ts: '1717200000',
    role: 'Systems Administrator & DevOps Engineer',
    company: 'Cefalo',
    description: 'Architecting production Azure environments for microservices. Optimized scaling policies resulting in <span class="text-primary font-medium">33% platform cost reduction</span>.',
    tags: ['#TERRAFORM', '#AZURE_VNET', '#KUBERNETES_AKS'],
  },
  {
    date: 'OCT 2023',
    id: '0x4D1A_SYNC',
    ts: '1696118400',
    role: 'System Engineer',
    company: 'KDDI Asia Pacific Pte Ltd',
    description: 'Led IT infrastructure for multinational clients. Managed end-to-end deployment lifecycle and hybrid-cloud connectivity.',
    tags: [],
  },
  {
    date: 'FEB 2020',
    id: '0x2B9C_EXEC',
    ts: '1580515200',
    role: 'System Administrator, Cyber Security',
    company: 'Divine IT Limited',
    description: 'Maintained 99.95% uptime for 300+ ERP deployments across 200+ bare-metal and virtual servers.',
    tags: [],
    terminal: [
      '> python3 automation_v2.py --target=all',
      '> [INFO] Automating manual audits...',
      '> [SUCCESS] Saved 40+ manual hours/week'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-24">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-primary tracking-widest uppercase">0X02 // DEPLOYMENT_HISTORY</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              JOURNAL.LOG
            </h2>
          </div>
          <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
            SORT_BY: CHRONOLOGICAL_DESC
          </span>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-l border-white/10 relative pl-8 md:pl-0 pb-24 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-2 h-2 bg-primary -translate-x-[4.5px] rounded-full" />

              <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest md:text-right md:pr-16 md:border-r border-white/10 pt-1">
                <span className="text-primary font-bold">{exp.date}</span>
                <span className="text-white/80">{exp.id}</span>
                <span className="text-white/40">TS: {exp.ts}</span>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl font-bold tracking-tight text-white/90 flex items-center gap-3">
                    {exp.role}
                    {index === 0 && <span className="w-2 h-2 bg-primary rounded-sm animate-pulse" />}
                  </h3>
                  <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">{exp.company}</span>
                </div>

                <p 
                  className="text-lg text-white/60 font-light leading-relaxed max-w-2xl"
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />

                {exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] text-primary tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {exp.terminal && (
                  <div className="mt-6 bg-surface-container border border-white/5 p-6 rounded-sm font-mono text-xs text-white/60 flex flex-col gap-2 relative">
                    <div className="absolute top-2 right-4 text-[8px] text-white/20 tracking-widest">STDOUT</div>
                    {exp.terminal.map((line, i) => (
                      <div key={i} className={line.includes('[SUCCESS]') ? 'text-primary' : ''}>
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
