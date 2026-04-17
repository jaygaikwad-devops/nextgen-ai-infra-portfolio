"use client";
import { motion } from "framer-motion";
import { Code, Cloud, Terminal, Shield } from "lucide-react";

export default function SkillsTimeline() {
  const categories = [
    { title: "Cloud & Infrastructure", skills: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"], icon: <Cloud size={24} /> },
    { title: "DevOps & CI/CD", skills: ["GitHub Actions", "ArgoCD", "Jenkins", "Ansible"], icon: <Terminal size={24} /> },
    { title: "MLOps & AIOps", skills: ["Kubeflow", "MLflow", "Kafka", "Airflow", "PyTorch"], icon: <Code size={24} /> },
    { title: "Observability", skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"], icon: <Shield size={24} /> },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Technical Arsenal</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent">
          
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-blue-500 shadow-[0_0_15px_#3b82f6] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {cat.icon}
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl neon-glow">
                <h3 className="font-bold text-xl text-white mb-2">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded border border-blue-700/50 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
