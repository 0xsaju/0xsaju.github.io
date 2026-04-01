import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Terminal, GitBranch, Shield } from 'lucide-react';

const skills = [
  {
    title: 'CLOUD & ORCHESTRATION',
    icon: <Cloud className="w-5 h-5 text-primary" />,
    tags: ['AWS', 'Azure', 'Kubernetes', 'Docker'],
  },
  {
    title: 'IAC & GITOPS',
    icon: <Terminal className="w-5 h-5 text-secondary" />,
    tags: ['Terraform', 'ArgoCD', 'Ansible'],
  },
  {
    title: 'CI/CD PIPELINE',
    icon: <GitBranch className="w-5 h-5 text-primary" />,
    tags: ['GitHub Actions', 'Jenkins', 'Azure DevOps'],
  },
  {
    title: 'OBS & SECURITY',
    icon: <Shield className="w-5 h-5 text-secondary" />,
    tags: ['Prometheus', 'Grafana', 'Wazuh'],
  },
];

export function About() {
  return (
    <section id="skills" className="py-32 px-8 md:px-16 lg:px-24 bg-surface-low border-y border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4 font-mono">
            <span className="text-[10px] text-primary tracking-widest uppercase">0X01 // IDENTITY_SUMMARY</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90">
              ~/about_me $ cat summary.txt
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
            DevOps / Site Reliability Engineer with 6+ years building secure, scalable multi-cloud infrastructure across <span className="text-secondary font-medium">AWS and Azure</span>. Specialized in Kubernetes, Terraform, and CI/CD automation.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 bg-surface border border-white/5 p-8 rounded-sm"
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2 pb-6 border-b border-white/5 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="text-primary">
                  {skill.icon}
                </div>
                <h3 className="font-mono text-xs tracking-widest text-white/80 uppercase">{skill.title}</h3>
              </div>
              <p className="font-mono text-[11px] text-white/50 leading-relaxed pl-8">
                {skill.tags.join(' • ')}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
