import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaServer, FaPalette } from 'react-icons/fa';

const projects = [
  {
    name: "XML Schema Reorder Tool",
    description:
      "A Node.js based tool that reorders XML files according to a given XSD schema. Includes file upload, extraction, and intelligent tag arrangement.",
    github: "https://github.com/ramesh9256/XML-Schema-Reorder-Tool",
    live: "",
    tech: ["Node.js", "Express", "Fast-XML-Parser", "Multer"],
    icon: FaServer,
    color: "from-green-400/20 to-emerald-500/20"
  },
  {
    name: "Flookup Web",
    description:
      "AI-powered duplicate detection and data lookup web app. Built with React and Node.js, integrated with Flookup APIs for intelligent matching.",
    github: "https://github.com/ramesh9256/Flookup-web",
    live: "https://flookup-web.vercel.app/main",
    tech: ["React", "TailwindCSS", "Node.js", "API Integration"],
    icon: FaCode,
    color: "from-cyan-400/20 to-blue-500/20"
  },
  {
    name: "Vyapaar Mandal Website",
    description:
      "A complete business association website with modules like Notice Board, Feedback, Membership, Gallery, and Admin Dashboard.",
    github: "https://github.com/ramesh9256/Vyaapar-Mandal",
    live: "https://vyaapar-mandal.vercel.app/",
    tech: ["MERN Stack", "NodeMailer", "MongoDB", "Cloudinary"],
    icon: FaPalette,
    color: "from-purple-400/20 to-pink-500/20"
  },
  {
    name: "Blog 2.0 Platform",
    description:
      "A modern blogging app using React + Express + MongoDB with image uploads, user authentication, and animated UI.",
    github: "https://github.com/ramesh9256/blog-2.o",
    live: "https://blog-2-o.vercel.app/",
    tech: ["React", "Express", "MongoDB", "JWT Auth"],
    icon: FaCode,
    color: "from-yellow-400/20 to-orange-500/20"
  },
  {
    name: "New Book Store",
    description:
      "A full-stack book store app for browsing, purchasing, and managing books — complete with search and admin features.",
    github: "https://github.com/ramesh9256/new-book-store",
    live: "https://new-book-store-pi.vercel.app/",
    tech: ["React", "MongoDB", "Node.js", "TailwindCSS"],
    icon: FaDatabase,
    color: "from-red-400/20 to-rose-500/20"
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-6 md:px-12 relative overflow-hidden cursor-none"
      style={{
        background: "linear-gradient(to bottom, #050505, #0a0a0a)",
        color: "white",
      }}
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
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: 20, rotateX: -90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto cursor-pointer"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4 cursor-pointer">
          🚀 A showcase of my MERN stack applications, tools, and real-world web solutions.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="relative bg-[#0a0a0a]/70 border border-cyan-900/40 rounded-2xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 40, rotateY: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{ 
              scale: 1.03, 
              y: -10,
              rotateX: 5,
              borderColor: "rgba(0,255,200,0.5)",
              boxShadow: "0 20px 40px rgba(0,255,200,0.3)"
            }}
            transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
          >
            {/* Card Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer`}
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Card Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              {/* Project Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/30 cursor-pointer"
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  scale: 1.1,
                  borderColor: "rgba(0,255,200,0.5)"
                }}
                transition={{ duration: 0.5 }}
              >
                <project.icon className="text-2xl text-cyan-400" />
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2 cursor-pointer">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed cursor-pointer">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded-lg cursor-pointer"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(0,255,200,0.2)",
                        borderColor: "rgba(0,255,200,0.5)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-5 mt-4 text-xl">
                <motion.a
                  href={project.github}
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
                  <FaGithub />
                </motion.a>
                {project.live && (
                  <motion.a
                    href={project.live}
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
                    <FaExternalLinkAlt />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}