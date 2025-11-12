import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-cyan-900/40 text-gray-400 py-8 text-center relative overflow-hidden cursor-none">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 cursor-pointer"
        animate={{
          background: [
            "linear-gradient(to right, rgba(0,255,200,0.05) 0%, rgba(0,150,255,0.05) 50%, rgba(0,255,200,0.05) 100%)",
            "linear-gradient(to right, rgba(0,150,255,0.05) 0%, rgba(0,255,200,0.05) 50%, rgba(0,150,255,0.05) 100%)",
            "linear-gradient(to right, rgba(0,255,200,0.05) 0%, rgba(0,150,255,0.05) 50%, rgba(0,255,200,0.05) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10">
        {/* Copyright with Animation */}
        <motion.p 
          className="text-xs text-gray-600 mt-4 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          © {new Date().getFullYear()} Ramesh Kumar. All rights reserved.
        </motion.p>
        
        {/* Footer Links */}
        <motion.div 
          className="flex justify-center gap-6 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {[
            { name: "Privacy", href: "#" },
            { name: "Terms", href: "#" },
            { name: "Sitemap", href: "#" }
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
