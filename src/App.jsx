import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden cursor-none">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,255,200,0.1) 0%, transparent 50%), 
                                radial-gradient(circle at 80% 80%, rgba(0,150,255,0.1) 0%, transparent 50%)`
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;