// src/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./LandingPage.css"; // custom CSS for this section

export default function LandingPage() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="landing-container">
      {/* Glow background */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 2 }}
        className="landing-glow"
      />

      {/* Centered Content */}
      <div className="landing-text">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="landing-title"
        >
          Hi, I’m <span className="highlight">Prasath</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="landing-subtitle"
        >
          Web Developer | Creative Coder | Problem Solver
        </motion.p>

        {/* Short Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="landing-description"
        >
          I am a passionate web developer who enjoys building interactive and
          user-friendly digital experiences. Skilled in front-end technologies
          like React, JavaScript, HTML, and CSS, with growing expertise in
          backend development.
        </motion.p>

        {/* Call-to-action button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="landing-button"
        >
          Explore My Work
        </motion.a>
      </div>

      {/* Scroll down icon */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="scroll-icon"
        onClick={handleScroll}
      >
        <MdOutlineKeyboardDoubleArrowDown size={35} />
      </motion.div>
    </div>
  );
}
