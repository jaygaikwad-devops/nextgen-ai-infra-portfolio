"use client";
import { motion } from "framer-motion";
import { Layers, Workflow } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Self-Healing AI Platform",
      role: "MLOps + AIOps",
      description: "Kafka + Kubeflow + Prometheus + GenAI-powered RCA system for automated resolving of live incidents.",
      icon: <Layers size={40} className="text-blue-400 mb-4" />
    },
    {
      title: "Azure ETL Pipeline",
      role: "Data Engineering",
      description: "Automated CSV → PostgreSQL ETL pipeline using Azure Data Factory and scalable Serverless compute.",
      icon: <Workflow size={40} className="text-purple-400 mb-4" />
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-10 rounded-3xl glass-panel relative overflow-hidden group neon-glow"
            >
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
              {proj.icon}
              <h3 className="text-2xl font-semibold mb-2 text-white">{proj.title}</h3>
              <p className="text-sm text-blue-300 font-mono mb-4">{proj.role}</p>
              <p className="text-gray-400 leading-relaxed">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
