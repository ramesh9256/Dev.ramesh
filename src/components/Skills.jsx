import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { title } from 'framer-motion/client';
import { IoLanguageSharp } from "react-icons/io5";

const SKILLS = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TailwindCSS", logo: "https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "VSCode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const SKILL_SETS = [
  {
    title: "Frontend Development",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    icon: "🎨"
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    icon: "⚙️"
  },
  {
    title: "Database & Tools",
    items: ["MongoDB", "Mongoose", "Git", "Postman", "VS Code"],
    icon: "🗄️"
  },
  {
    title: "Core Concepts",
    items: ["MERN Stack", "CRUD Operations", "API Integration", "Deployment"],
    icon: "💡"
  },
  {
    title: "Soft Skills",
    items: ["Team Collaboration", "Problem Solving", "Adaptability", "Quick Learning"],
    icon: "🤝"
  },
  {
    title :  "Languages",
    items : ["Python" , "C++" , "C" , "Java"],
    icon : <IoLanguageSharp />
  }
];

export default function Skills() {
  const stageRef = useRef();

  // 💫 Floating orb placement logic with enhanced animations
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 50;
      });

    circles.forEach((circle, index) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 200);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      // Enhanced floating animation
      const dx = (Math.random() - 0.5) * 120;
      const dy = (Math.random() - 0.5) * 120;
      circle.animate(
        [
          { transform: "translate(0, 0) rotate(0deg)" }, 
          { transform: `translate(${dx}px, ${dy}px) rotate(180deg)` }
        ],
        {
          duration: 6000 + Math.random() * 3000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="skills-section  text-white relative cursor-none">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Title Section */}
      <motion.div
        className="text-center mb-14 relative z-10 py-10"
        initial={{ opacity: 0, y: 30, rotateX: -90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            ⚙️ Skills
          </span>
        </h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto cursor-pointer"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4 cursor-pointer">
          A complete MERN stack toolkit combining both frontend and backend mastery for full-cycle web development.
        </p>
      </motion.div>

      {/* Floating Orbs Section */}
      <motion.div
        ref={stageRef}
        className="skills-orbs-container relative z-10"
        initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        whileHover={{ scale: 1.02 }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle cursor-pointer"
            initial={{ opacity: 0, scale: 0, rotateZ: 180 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6, type: "spring" }}
            whileHover={{ 
              scale: 1.3, 
              rotateZ: 360,
              boxShadow: "0 0 40px 10px rgba(0,255,255,0.6)",
              backgroundColor: "rgba(0,255,200,0.1)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              className="skill-logo cursor-pointer"
              whileHover={{
                rotate: [0, 360],
                filter: "drop-shadow(0 0 20px rgba(0,255,255,1)) brightness(1.5)",
              }}
              transition={{ duration: 0.5 }}
            />
            <span className="skill-name cursor-pointer">{s.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Set Cards */}
      <div className="skills-grid mt-20 relative z-10">
        {SKILL_SETS.map((set, idx) => (
          <motion.div
            key={idx}
            className="skill-card cursor-pointer"
            initial={{ opacity: 0, y: 40, rotateX: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ 
              scale: 1.08, 
              y: -10,
              rotateZ: 2,
              boxShadow: "0 20px 40px rgba(0,255,255,0.3)"
            }}
            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.span 
                className="text-3xl cursor-pointer"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
              >
                {set.icon}
              </motion.span>
              <h3 className="text-cyan-400 font-semibold text-lg cursor-pointer">{set.title}</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              {set.items.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ 
                    x: 10, 
                    color: "#00ffc8",
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                    className="cursor-pointer"
                  >
                    ▸
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}