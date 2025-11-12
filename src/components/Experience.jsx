import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Flookup Capital Advisor Pvt Ltd",
    role: "MERN Stack Developer",
    location: "Jaipur",
    period: " Oct 2025 — Present",
    type: "Full-Time",
    isCurrent: true,
  },
  {
    company: "Delain Technology Pvt Ltd",
    role: "Full Stack Developer (Intern)",
    location: "Hisar",
    period: "May 2025 - August 2025",
    type: "Internship",
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section
      className="min-h-screen py-20 px-6 relative overflow-hidden cursor-none"
      style={{
        background: "#080808",
        color: "white",
      }}
      id="experience"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 300, 0],
            y: [0, -200, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -200, 0],
            y: [0, 200, 0],
            scale: [1.5, 1, 1.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20, rotateX: -90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto cursor-pointer"
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <p className="text-gray-400 mt-4 cursor-pointer">Professional journey so far 🚀</p>
      </motion.div>

      {/* Experience Cards */}
      <div className="flex flex-col items-center gap-10 relative z-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`w-11/12 md:w-2/3 p-8 rounded-2xl border relative overflow-hidden cursor-pointer
                      ${exp.isCurrent
                        ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_30px_rgba(0,255,200,0.2)]"
                        : "border-gray-700 bg-gray-800/40"} 
                      shadow-lg backdrop-blur-sm`}
            initial={{ opacity: 0, y: 40, rotateZ: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
            whileHover={{ 
              scale: 1.03, 
              y: -10,
              rotateZ: exp.isCurrent ? 2 : -2,
              boxShadow: exp.isCurrent 
                ? "0 0 50px rgba(0,255,200,0.4)" 
                : "0 0 30px rgba(255,255,255,0.1)"
            }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10 cursor-pointer"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, ${exp.isCurrent ? '#00ffc8' : '#ffffff'} 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '20px 20px'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 cursor-pointer">
                    <span className={exp.isCurrent ? "text-cyan-300" : "text-gray-300"}>
                      {exp.role}
                    </span>
                  </h3>
                  <p className="text-lg text-gray-300 cursor-pointer">{exp.company}</p>
                </div>
                {exp.isCurrent && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-cyan-400/20 border border-cyan-400/50 rounded-full px-3 py-1 text-xs text-cyan-300 cursor-pointer"
                  >
                    CURRENT
                  </motion.div>
                )}
              </div>
              
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <motion.div 
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.1, color: "#00ffc8" }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{exp.location}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.1, color: "#00ffc8" }}
                >
                  <i className="fas fa-calendar"></i>
                  <span>{exp.period}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.1, color: "#00ffc8" }}
                >
                  <i className="fas fa-briefcase"></i>
                  <span>{exp.type}</span>
                </motion.div>
              </div>
              
              {/* Progress Bar for Current Position */}
              {exp.isCurrent && (
                <motion.div
                  className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mt-4 cursor-pointer"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer"
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}