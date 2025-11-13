import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { IoLogoVercel } from "react-icons/io5";

const links = [
    { label: "Home", to: "/", icon: "🏠" },
    { label: "Projects", to: "/projects", icon: "💼" },
    { label: "Skills", to: "/skills", icon: "⚙️" },
    { label: "Experience", to: "/experience", icon: "📈" },
    { label: "About me", to: "/about", icon: "👤" },
    { label: "Contact", to: "/contact", icon: "📧" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isLoaded, setIsLoaded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            // Close mobile menu when resizing to desktop
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial width
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Set loaded state after component mounts
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Mobile menu variants
    const mobileMenuVariants = {
        hidden: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    // Link item variants for mobile menu
    const linkVariants = {
        hidden: { 
            opacity: 0, 
            x: 50,
            rotateY: 90
        },
        visible: (i) => ({
            opacity: 1, 
            x: 0,
            rotateY: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                type: "spring"
            }
        })
    };

    // Determine mobile menu width based on screen size
    const getMobileMenuWidth = () => {
        if (windowWidth < 380) return 'w-full'; // Very small phones
        if (windowWidth < 480) return 'w-4/5'; // Small phones
        if (windowWidth < 640) return 'w-3/4'; // Medium phones
        return 'w-80'; // Large phones/tablets
    };

    return (
        <>
            {/* Main Navigation - Fixed at top, always visible */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20,
                    duration: 0.8
                }}
                className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4 transition-all duration-500 cursor-none ${
                    isScrolled 
                        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
                        : 'bg-black/80 backdrop-blur-lg border-b border-white/10'
                }`}
                style={{
                    background: isScrolled 
                        ? 'rgba(0,0,0,0.9)' 
                        : 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: isScrolled ? '1px solid rgba(0,255,200,0.3)' : '1px solid rgba(255,255,255,0.1)',
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo with 3D rotation and glow */}
                    <motion.div
                        className="flex items-center gap-2 sm:gap-3"
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            animate={{ 
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                                duration: 20, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }}
                            whileHover={{ 
                                rotate: 180,
                                scale: 1.2,
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer"
                        >
                            <span className="text-black font-bold text-sm sm:text-xl">RK</span>
                        </motion.div>
                        <motion.h2
                            className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
                            whileHover={{ 
                                scale: 1.05,
                                textShadow: "0 0 30px rgba(0,255,200,0.8)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="hidden sm:inline">Ramesh Kumar</span>
                            <span className="sm:hidden">RK</span>
                        </motion.h2>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-4 sm:gap-8">
                        {links.map((l, index) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                end
                                className={({ isActive }) => 
                                    `relative group font-medium transition-all duration-300 cursor-none ${
                                        isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ 
                                            delay: index * 0.1,
                                            type: "spring"
                                        }}
                                        className="relative"
                                    >
                                        <motion.span
                                            className="flex items-center gap-1 sm:gap-2 py-2 cursor-pointer text-sm sm:text-base"
                                            whileHover={{
                                                scale: 1.1,
                                                color: "#00ffc8",
                                                textShadow: "0 0 20px rgba(0,255,200,0.8)",
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.span
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ 
                                                    duration: 2, 
                                                    repeat: Infinity,
                                                    delay: index * 0.2
                                                }}
                                                className="text-sm sm:text-base"
                                            >
                                                {l.icon}
                                            </motion.span>
                                            <span className="hidden sm:inline">{l.label}</span>
                                        </motion.span>
                                        
                                        {/* Animated underline */}
                                        <motion.div
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 ${
                                                isActive ? 'w-full' : 'w-0'
                                            }`}
                                            initial={false}
                                            animate={{ 
                                                width: isActive ? '100%' : isHovered ? '100%' : '0%' 
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        
                                        {/* Hover glow effect */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-0 bg-cyan-400/10 rounded-lg blur-xl"
                                                animate={{ 
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 0.8, 0.5]
                                                }}
                                                transition={{ 
                                                    duration: 2, 
                                                    repeat: Infinity 
                                                }}
                                            />
                                        )}
                                    </motion.div>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right side actions */}
                    <div className="hidden lg:flex items-center gap-2 sm:gap-4">
                        {/* Resume Download Button */}
                        <motion.a
                            href="/resume.pdf"
                            download
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-2 sm:px-4 py-2 rounded-lg font-semibold flex items-center gap-1 sm:gap-2 text-xs sm:text-sm hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer btn-hover"
                            whileHover={{ 
                                scale: 1.05, 
                                rotateX: 10,
                                boxShadow: "0 10px 30px rgba(0,255,200,0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaDownload className="text-xs sm:text-sm" />
                            <span className="hidden sm:inline">Resume</span>
                        </motion.a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            {[
                                { icon: FaGithub, href: "https://github.com/ramesh9256", color: "hover:text-white" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/ramesh-kumar-b65038316/", color: "hover:text-blue-400" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`text-cyan-400 ${social.color} transition-all duration-300 cursor-pointer`}
                                    whileHover={{ 
                                        scale: 1.3, 
                                        rotateY: 360,
                                        textShadow: "0 0 20px rgba(0,255,200,0.8)"
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <social.icon className="text-lg sm:text-xl" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-xl sm:text-2xl text-gray-300 relative z-50 cursor-pointer p-2"
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaTimes />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaBars />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={`fixed top-0 right-0 h-screen bg-black/95 backdrop-blur-xl z-40 lg:hidden cursor-none ${getMobileMenuWidth()}`}
                        style={{
                            borderLeft: '1px solid rgba(0,255,200,0.3)',
                        }}
                    >
                        {/* Mobile Menu Header */}
                        <div className="p-16 sm:p-6 border-b border-gray-800">
                            <motion.div
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity 
                                }}
                                className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 cursor-pointer"
                            >
                                <span className="text-black font-bold text-lg sm:text-2xl">RK</span>
                            </motion.div>
                            <h3 className="text-lg sm:text-xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Ramesh Kumar
                            </h3>
                            <p className="text-gray-400 text-center text-xs sm:text-sm mt-1">MERN Stack Developer</p>
                        </div>

                        {/* Mobile Navigation Links */}
                        <nav className="p-2 sm:p-6 max-h-96 overflow-y-auto">
                            {links.map((l, index) => (
                                <motion.div
                                    key={l.to}
                                    custom={index}
                                    variants={linkVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <NavLink
                                        to={l.to}
                                        end
                                        className={({ isActive }) => 
                                            `flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 mb-2 sm:mb-3 cursor-none ${
                                                isActive 
                                                    ? 'bg-cyan-400/10 border border-cyan-400/30 text-cyan-400' 
                                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            }`
                                        }
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <motion.span
                                            className="text-xl sm:text-2xl cursor-pointer"
                                            whileHover={{ 
                                                scale: 1.2,
                                                rotate: [0, 10, -10, 0]
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {l.icon}
                                        </motion.span>
                                        <span className="font-medium text-sm sm:text-base cursor-pointer">{l.label}</span>
                                    </NavLink>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Mobile Menu Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 border-t border-gray-800">
                            <div className="flex justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                {[
                                    { icon: FaGithub, href: "https://github.com/ramesh9256" },
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ramesh-kumar-b65038316/" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center text-cyan-400 cursor-pointer"
                                        whileHover={{ 
                                            scale: 1.2, 
                                            rotateY: 360,
                                            backgroundColor: "rgba(0,255,200,0.2)"
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <social.icon className="text-base sm:text-xl" />
                                    </motion.a>
                                ))}
                            </div>
                            <motion.a
                                href="/resume.pdf"
                                download
                                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-2 sm:py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer btn-hover text-sm sm:text-base"
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 10px 30px rgba(0,255,200,0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaDownload className="text-sm sm:text-base" />
                                <span className="text-sm sm:text-base">Download Resume</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden cursor-none"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}