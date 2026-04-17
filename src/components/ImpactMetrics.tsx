"use client";
import { motion } from "framer-motion";

const metrics = [
  { label: "Faster Deployments", value: "35%" },
  { label: "Uptime SLA", value: "99.8%" },
  { label: "ML Boost", value: "25%" },
  { label: "Global Reach", value: "Multi-Cloud" }
];

export default function ImpactMetrics() {
  return (
    <section className="relative z-10 py-16 px-6 -mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            key={i}
            className="glass-panel p-8 rounded-2xl text-center neon-glow"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-2">
              {m.value}
            </h2>
            <p className="text-gray-400 font-medium tracking-wide text-sm uppercase">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
