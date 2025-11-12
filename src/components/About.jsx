import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section
            className="min-h-screen flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden cursor-none"
            style={{
                minHeight: "90vh",
                background: "linear-gradient(135deg, #050505, #0b0b0b)",
                color: "white",
            }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ top: '20%', left: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.5, 1, 1.5],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ bottom: '20%', right: '10%' }}
                />
            </div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-4xl md:text-5xl font-bold mb-8 relative z-10 cursor-pointer"
                style={{
                    color: "#00ffc8",
                    fontWeight: "600",
                }}
            >
                About Me
            </motion.h2>

            {/* Main Content Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                className="w-full max-w-4xl relative z-10 cursor-pointer"
                style={{
                    background: "rgba(0,255,200,0.05)",
                    border: "1px solid rgba(0,255,200,0.15)",
                    borderRadius: "16px",
                    padding: "40px",
                    boxShadow: "0 0 40px rgba(0,255,200,0.1)",
                    backdropFilter: "blur(8px)",
                }}
                whileHover={{
                    boxShadow: "0 0 60px rgba(0,255,200,0.2)",
                    scale: 1.02,
                }}
            >
                {/* First Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 10, x: -50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed cursor-pointer"
                >
                    Hi 👋 I'm <motion.span 
                        className="font-semibold cursor-pointer"
                        whileHover={{ scale: 1.2, color: "#00ffc8" }}
                        style={{ color: "#00ffc8" }}
                    >Ramesh Kumar</motion.span>, a passionate{" "}
                    <motion.strong 
                        className="font-semibold cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        style={{ color: "#00ffc8" }}
                    >MERN Stack Developer</motion.strong> from Jaipur, India.  
                    I love building scalable, fast, and beautiful web applications using technologies like{" "}
                    <motion.span 
                        className="font-semibold cursor-pointer"
                        whileHover={{ scale: 1.1, color: "#00ffc8" }}
                    >React, Node.js, MongoDB, and Express</motion.span>.
                </motion.p>

                {/* Second Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 10, x: 50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                    className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 cursor-pointer"
                >
                    My journey started with curiosity to solve real-world problems through clean, efficient
                    code. I believe in continuous learning, teamwork, and writing maintainable, testable code.
                    Outside coding, I enjoy exploring new tech tools, reading about AI advancements, and
                    contributing to open-source.
                </motion.p>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Location",
                            content: "Jaipur, India 🇮🇳",
                            icon: "📍",
                            delay: 1.0
                        },
                        {
                            title: "Experience",
                            content: "1+ year (Intern + Developer)",
                            icon: "💼",
                            delay: 1.2
                        },
                        {
                            title: "Specialization",
                            content: "MERN Stack, REST APIs, UI Design",
                            icon: "🚀",
                            delay: 1.4
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, rotateZ: 10 }}
                            animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                            transition={{ delay: item.delay, duration: 0.6 }}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                rotateZ: 2,
                                backgroundColor: "rgba(0,255,200,0.1)"
                            }}
                            className="border border-cyan-500/20 rounded-xl p-6 text-center cursor-pointer transition-all duration-300"
                            style={{
                                background: "rgba(0,255,200,0.05)",
                            }}
                        >
                            <motion.div 
                                className="text-3xl mb-3 cursor-pointer"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h4 
                                className="font-semibold mb-2 cursor-pointer"
                                style={{ color: "#00ffc8" }}
                            >
                                {item.title}
                            </h4>
                            <p className="text-gray-300 text-sm cursor-pointer">{item.content}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}