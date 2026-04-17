"use client";
import { motion } from "framer-motion";
import { Cloud, Server, Database } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Particles / Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 blur-3xl z-0"></div>

      {/* Floating 3D Elements */}
      <motion.div 
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-1/4 left-1/4 opacity-30 text-blue-400 z-0"
      >
        <Cloud size={80} />
      </motion.div>

      <motion.div 
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }} 
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 opacity-30 text-purple-400 z-0"
      >
        <Server size={100} />
      </motion.div>
      
      <motion.div 
        animate={{ y: [-15, 15, -15], x: [10, -10, 10] }} 
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-1/3 right-1/3 opacity-20 text-indigo-400 z-0"
      >
        <Database size={60} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl glass-panel p-10 rounded-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
            I Build Scalable Cloud & AI Systems
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
          DevOps | MLOps | Platform Engineering
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600/90 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all border border-blue-400/50"
          >
            View Projects
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-gray-800/80 hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-600 shadow-xl transition-all"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
