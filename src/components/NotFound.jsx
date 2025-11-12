import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden cursor-none"
      style={{
        background: "#090909",
        color: "white",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
            scale: [1.5, 1, 1.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      {/* 404 Animation */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <motion.h1 
          className="text-9xl font-bold mb-4 cursor-pointer"
          style={{ color: "#00ffc8" }}
          animate={{ 
            textShadow: [
              "0 0 20px rgba(0,255,200,0.5)",
              "0 0 40px rgba(0,255,200,0.8)",
              "0 0 20px rgba(0,255,200,0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-3xl font-semibold mb-4 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 mb-8 max-w-md mx-auto cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </motion.p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer btn-hover"
            >
              <FaHome className="text-lg" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, rotateZ: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projects"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer btn-hover"
            >
              <FaSearch className="text-lg" />
              Browse Projects
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-6xl opacity-20 cursor-pointer"
        animate={{ 
          rotate: [0, 360],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaSearch />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20 text-6xl opacity-20 cursor-pointer"
        animate={{ 
          rotate: [360, 0],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaHome />
      </motion.div>
    </section>
  );
}