"use client";
import { motion } from "framer-motion";
import { Database, Cpu, Brain, UploadCloud, Activity } from "lucide-react";

export default function InteractiveArchitecture() {
  const steps = [
    { icon: <Database size={32} />, label: "Data Ingestion" },
    { icon: <Cpu size={32} />, label: "Feature Store" },
    { icon: <Brain size={32} />, label: "ML Processing" },
    { icon: <UploadCloud size={32} />, label: "Deployment" },
    { icon: <Activity size={32} />, label: "Monitoring" },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">System Architecture</h2>
        <p className="text-gray-400 text-lg">Scalable pipelines powering intelligent capabilities.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, translateY: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center neon-glow-purple relative z-10 w-40 h-40"
            >
              <div className="text-purple-400 mb-3 animate-pulse-slow">
                {step.icon}
              </div>
              <span className="font-semibold text-sm text-gray-200">{step.label}</span>
            </motion.div>

            {i < steps.length - 1 && (
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 50 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3 }}
                className="hidden md:block h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-2 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              ></motion.div>
            )}
             {i < steps.length - 1 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3 }}
                className="md:hidden w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full my-2 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              ></motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
