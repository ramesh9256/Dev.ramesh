import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section
            className="min-h-screen py-20 md:py-20 flex flex-col justify-center items-center text-center
                       bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-white px-6 relative overflow-hidden cursor-none"
            id="home"
        >
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ top: '10%', left: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ bottom: '10%', right: '10%' }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Name with 3D effect */}
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-3 cursor-pointer"
                    initial={{ opacity: 0, y: 50, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                        Ramesh Kumar
                    </span>
                </motion.h1>

                {/* Role with typing effect simulation */}
                <motion.h2
                    className="text-2xl md:text-3xl text-gray-300 mb-4 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <motion.span
                        className="inline-block"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        MERN Stack Developer 💻
                    </motion.span>
                </motion.h2>

                {/* Description with stagger animation */}
                <motion.p
                    className="max-w-3xl text-gray-400 mb-8 text-lg leading-relaxed cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                >
                    Passionate about building scalable web apps and crafting seamless digital
                    experiences. Focused on writing clean, efficient code and turning complex
                    ideas into beautiful user interfaces.
                </motion.p>

                {/* Contact Info Cards */}
                <motion.div
                    className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1 }}
                >
                    {[
                        { icon: FaEnvelope, text: "9256.ramesh@gmail.com", label: "Email" },
                        { icon: FaPhone, text: "+91 9256746259", label: "Phone" },
                        { icon: FaMapMarkerAlt, text: "Jaipur", label: "Location" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -5,
                                boxShadow: "0 10px 30px rgba(0,255,200,0.3)"
                            }}
                            className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-xl px-6 py-4 flex items-center gap-3 cursor-pointer"
                        >
                            <item.icon className="text-cyan-400 text-xl" />
                            <span className="text-gray-300 cursor-pointer">{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quick Highlights */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 1 }}
                >
                    {[
                        
                        "Open to Opportunities 🚀",
                        "Full Stack & API Development"
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ 
                                scale:1.1,
                            }}
                            transition={{ duration:0.5}}
                            className="border border-cyan-400/50 rounded-full px-6 py-3 text-gray-300 text-sm cursor-pointer"
                        >
                            {text}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-5 justify-center mb-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.5, type: "spring" }}
                >
                    <motion.a
                        href="/resume.pdf"
                        download
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer btn-hover"
                        whileHover={{ scale: 1.05, rotateX: 10 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload className="text-xl" />
                        Download Resume
                    </motion.a>
                    <Link
                        to="/contact"
                        className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer btn-hover"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Social Icons with 3D rotation */}
                <motion.div
                    className="flex gap-6 text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    {[
                        { icon: FaGithub, href: "https://github.com/ramesh9256" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/ramesh-kumar-b65038316/" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-400 hover:text-white transition-all duration-300 cursor-pointer"
                            whileHover={{ 
                                scale: 1.3, 
                                rotateY: 360,
                                textShadow: "0 0 20px rgba(0,255,200,0.8)"
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <i className="fas fa-chevron-down text-2xl text-cyan-400/50"></i>
            </motion.div>
        </section>
    );
}