"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, ServerCrash, AlertTriangle } from "lucide-react";

export default function LiveDashboard() {
  const [cpu, setCpu] = useState(42);
  const [ram, setRam] = useState(65);
  const [logs, setLogs] = useState<string[]>([
    "INFO: Gateway initialized",
    "WARN: Retry backoff on service XYZ",
    "INFO: Worker thread spawned",
    "INFO: Redis cluster healthy"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(prev => Math.min(100, Math.max(10, prev + (Math.random() * 10 - 5))));
      setRam(prev => Math.min(100, Math.max(30, prev + (Math.random() * 6 - 3))));
      
      const newLogs = ["INFO: Batch job 4092 completed", "INFO: Node autoscaling triggered", "WARN: High latency detected"].sort(() => 0.5 - Math.random())[0];
      setLogs(prev => [...prev.slice(1, 4), newLogs]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Operations Telemetry</h2>
        <p className="text-gray-400">Real-time mock infrastructure observability.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-6 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm border-t border-blue-500/30"
      >
        {/* CPU Panel */}
        <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
          <div className="flex justify-between items-center mb-4 text-gray-400">
            <span>CPU Usage</span>
            <Activity size={18} className="text-blue-400" />
          </div>
          <div className="text-5xl font-light text-white mb-2">
            {cpu.toFixed(1)}<span className="text-xl text-blue-500">%</span>
          </div>
          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${cpu}%` }} 
              className={`h-full ${cpu > 80 ? 'bg-red-500' : 'bg-blue-500'} shadow-[0_0_10px_#3b82f6]`} 
            />
          </div>
        </div>

        {/* RAM Panel */}
        <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
          <div className="flex justify-between items-center mb-4 text-gray-400">
            <span>Memory Allocated</span>
            <ServerCrash size={18} className="text-purple-400" />
          </div>
          <div className="text-5xl font-light text-white mb-2">
            {ram.toFixed(1)}<span className="text-xl text-purple-500">%</span>
          </div>
          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${ram}%` }} 
              className="h-full bg-purple-500 shadow-[0_0_10px_#a855f7]" 
            />
          </div>
        </div>

        {/* Live Logs */}
        <div className="bg-black/50 p-6 rounded-2xl border border-gray-800 flex flex-col justify-end overflow-hidden relative">
           <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-red-500 border border-red-500/50 bg-red-900/20 px-2 py-1 rounded">
             <AlertTriangle size={12} /> Live
           </div>
           {logs.map((log, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`py-1 ${log.includes("WARN") ? "text-yellow-400" : "text-green-400"}`}
              >
                &gt; {log}
              </motion.div>
           ))}
        </div>
      </motion.div>
    </section>
  );
}
