import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-white py-16 px-6 relative overflow-hidden cursor-none"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
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
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-10 relative z-10"
        initial={{ opacity: 0, y: 20, rotateX: -90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </span>
        </h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto cursor-pointer"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <p className="text-gray-400 max-w-xl mx-auto mt-4 cursor-pointer">
          Let's build something amazing together 🚀 — feel free to reach out for collaborations or opportunities!
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12 relative z-10">
        {[
          {
            icon: <FaEnvelope className="text-cyan-400 text-3xl mb-3" />,
            title: "Email",
            text: "9256.ramesh@gmail.com",
            link: "mailto:9256.ramesh@gmail.com",
            color: "from-cyan-400/20 to-blue-500/20"
          },
          {
            icon: <FaPhone className="text-cyan-400 text-3xl mb-3" />,
            title: "Phone",
            text: "+91 9256746259",
            link: "tel:+919256746259",
            color: "from-purple-400/20 to-pink-500/20"
          },
          {
            icon: <FaMapMarkerAlt className="text-cyan-400 text-3xl mb-3" />,
            title: "Location",
            text: "Jaipur, Raj.",
            link: null,
            color: "from-green-400/20 to-emerald-500/20"
          },
        ].map((info, i) => (
          <motion.div
            key={i}
            className="bg-[#0a0a0a]/60 border border-cyan-900/40 rounded-2xl p-6 text-center relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 20, rotateY: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5,
              borderColor: "rgba(0,255,200,0.5)",
              boxShadow: "0 20px 40px rgba(0,255,200,0.2)"
            }}
            transition={{ duration: 0.6, delay: i * 0.2, type: "spring" }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer`}
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.5 }}
            />
            
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer"
              >
                {info.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400 cursor-pointer">{info.title}</h3>
              {info.link ? (
                <motion.a
                  href={info.link}
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 inline-block cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, x: 5 }}
                >
                  {info.text}
                </motion.a>
              ) : (
                <p className="text-gray-300 cursor-pointer">{info.text}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-3xl bg-[#0a0a0a]/60 p-8 rounded-2xl border border-cyan-900/40 backdrop-blur-md relative overflow-hidden cursor-none"
        initial={{ opacity: 0, scale: 0.9, rotateX: 90 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Form Background Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 cursor-pointer"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0,255,200,0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(0,150,255,0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(0,255,200,0.05) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-cyan-900/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,255,200,0.3)] cursor-pointer"
              required
              whileFocus={{ scale: 1.02, y: -2 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-cyan-900/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,255,200,0.3)] cursor-pointer"
              required
              whileFocus={{ scale: 1.02, y: -2 }}
            />
          </div>
          <motion.input
            type="text"
            placeholder="Subject"
            className="bg-transparent border border-cyan-900/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,255,200,0.3)] mt-6 w-full cursor-pointer"
            whileFocus={{ scale: 1.02, y: -2 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            className="bg-transparent border border-cyan-900/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,255,200,0.3)] mt-6 w-full resize-none cursor-pointer"
            required
            whileFocus={{ scale: 1.02, y: -2 }}
          ></motion.textarea>

          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(0,255,255,0.4)",
              rotateZ: 2
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer btn-hover"
            type="submit"
          >
            <FaPaperPlane className="text-lg" />
            Send Message
          </motion.button>
        </div>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-10 text-3xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {[
          { icon: FaGithub, href: "https://github.com/ramesh9256" },
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/ramesh-kumar-b65038316/" }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            className="text-cyan-400 hover:text-white transition-all duration-300 cursor-pointer"
            target="_blank"
            rel="noreferrer"
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
    </section>
  );
}