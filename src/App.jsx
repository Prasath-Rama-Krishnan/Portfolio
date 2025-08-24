// src/App.jsx
import './App.css';
import './index.css';
import image from './images/my-photo.jpg';
import image2 from './images/project2.png';
import image3 from './images/project.jpeg';
import image4 from './images/photo4.webp';
import htmlImage from './images/html.jpg';
import cssImage from './images/css.png';
import jsImage from './images/js.png';
import images from './images/images.jpeg';
import reactImage from './images/react.png';
import nodejs from './images/nodejs.webp';
import python from './images/python.png';
import sql from './images/sql.png';
import java from './images/java.jpg';
import c from './images/c.jpeg';
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import emailjs from 'emailjs-com';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import MoreProjects from './MoreProjects.jsx';
import LandingPage from "./LandingPage.jsx";

/* ---------------- Footer Component ---------------- */
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = { email };

    emailjs
      .send(
        'service_wi7n9i8',
        'template_u93s68q',
        templateParams,
        'j3QhwtoRixTPgDidY'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
          setEmail('');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">
          <p>© 2024 Crafted with ❤️ by Prasath</p>
        </div>

        <div className="divider"></div>
        <div className="right">
          <ul>
            <li><a href="https://github.com/Prasath-Rama-Krishnan"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/prasath-ramakrishnan-567a71295"><TiSocialLinkedin /></a></li>
            <li><a href="https://www.instagram.com/prasathkcp005"><FaInstagram /></a></li>
            <li><a href="https://leetcode.com/u/Prasath005/"><TbBrandLeetcode /></a></li>
          </ul>

          <div className="footer-input">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ---------------- Home Component ---------------- */
const Home = () => {
  const projects = [
    { id: 1, title: "Gamification with Education", 
      description: "An interactive platform with educational games for creativity and learning.", 
      image: image3, 
      link: "https://github.com/Prasath-Rama-Krishnan/Gamification-with-education" 
    },
    { id: 2, title: "Streetlight Control System",
       description: "Automating streetlight operations with real-time control and status updates.", 
       image: image2, 
       link: "https://github.com/Prasath-Rama-Krishnan/streetlight-update" },
    { id: 3, 
      title: "Farm Fresh Product",
      image: images, 
      link: "https://github.com/Prasath-Rama-Krishnan/Farm-Fresh-selling-platform" },
    { id: 4, 
      title: "CGPA Calculation", 
      description: "Accurately tracks CGPA with user-friendly input and real-time results.", 
      image: image4, 
      link: "https://github.com/Prasath-Rama-Krishnan/CGPA-CALZ" },
  ];

  const skills = [
    { name: "JAVA", imageUrl: java },
    { name: "Python", imageUrl: python },
    { name: "C", imageUrl: c },
    { name: "HTML", imageUrl: htmlImage },
    { name: "CSS", imageUrl: cssImage },
    { name: "JavaScript", imageUrl: jsImage },
    { name: "React", imageUrl: reactImage },
    { name: "Node.js", imageUrl: nodejs },
    { name: "SQL", imageUrl: sql },
  ];

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>{/* 🔹 About Me Section */}
<div className="about" id="about">
  <h1 className="section-title">About Me</h1>
  <div className="about-container">
    <img src={image} alt="Profile" className="about-image" />
    <div className="about-text">
      <p>
        I’m <b>Prasath Ramakrishnan</b>, a 3rd-year Computer Science student and passionate web developer.  
        I love building interactive and problem-solving digital experiences using modern technologies like  
        <b> React, Node.js, and MongoDB</b>.  
      </p>
      <p>
        My interests go beyond coding — I enjoy sports like football, basketball, and ball badminton,  
        which have helped me build teamwork and leadership skills.  
      </p>
      <p>
        My goal is to become a <b>full-stack developer</b> and also explore AI and scalable cloud applications  
        to create impactful solutions for real-world challenges.
      </p>
      <a href="https://drive.google.com/file/d/1uPP-1d3P_Ueu9hOXeFV7TolPvz_48Yvq/view?usp=drivesdk" download className="resume-btn">
      Download Resume
      </a>

    </div>
  </div>
</div>


      <div className="projects" id="projects">
        <h1 className="section-title">Projects</h1>
        <div className="project-grid">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card"
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
            </a>
          ))}
        </div>
        <div className='see'>
          <Link to="/more-projects" >
            <button className='more'><MdOutlineKeyboardDoubleArrowDown />view more</button>
          </Link>
        </div>
      </div>

      <div className="skills" id="skills">
        <h1 className="section-title">Technical Skills</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="section-title" id="contact">Contact</div>
      <Footer />
    </>
  );
};

/* ---------------- ScrollToTop Component ---------------- */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* ---------------- Main App Component ---------------- */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Always scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Show "Back to Top" button when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <ScrollToTop /> {/* ✅ Ensures top on route change */}

      <nav className="main">
        <div className="first">PORTFOLIO</div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`second ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <a href="#about" onClick={(e) => { handleScroll(e); setMenuOpen(false); }}>About Me</a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { handleScroll(e); setMenuOpen(false); }}>Projects</a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => { handleScroll(e); setMenuOpen(false); }}>Skills</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { handleScroll(e); setMenuOpen(false); }}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        {/* LandingPage first, then Home */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Home />
            </>
          }
        />
        <Route path="/more-projects" element={<MoreProjects />} />
      </Routes>

      {/* ✅ Back to Top Button */}
      {showTopBtn && (
        <button onClick={scrollToTop} className="back-to-top">
          ↑ Top
        </button>
      )}
    </Router>
  );
}

export default App;
