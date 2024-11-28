import './App.css';
import './index.css';
import image from './images/my photo.jpg';
import image1 from './images/project1.png';
import image2 from './images/project2.png';
import image3 from './images/project.jpeg';
import image4 from './images/photo4.webp';
import htmlImage from './images/html.jpg';
import cssImage from './images/css.png';
import jsImage from './images/js.png';
import reactImage from './images/react.png';
import nodejs from './images/nodejs.webp';
import { GrFacebookOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MoreProjects from './MoreProjects.jsx';

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
          <p>&copy; Prasath | 2024</p>
        </div>
        <div className="divider"></div>
        <div className="right">
          <ul>
            <li><a href="https://github.com/PrasathRamakrishna"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/prasath-ramakrishnan-9131a4275/"><TiSocialLinkedin /></a></li>
            <li><a href="#"><GrFacebookOption /></a></li>
            <li><a href="#"><TfiYoutube /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><TbBrandLeetcode /></a></li>
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

const Home = () => {
  const projects = [
    { id: 1, title: "Gamification with Education", 
      description: "An interactive platform with educational games for creativity and learning.", 
      image: image3, 
      link: "https://prasathramakrishna.github.io/education-with-gamification/gamification/index.html" 
    },
    { id: 2, title: "Streetlight Control System",
       description: "Automating streetlight operations with real-time control and status updates.", 
       image: image2, 
       link: "https://prasathramakrishna.github.io/streetlight-update/public/" },
    { id: 3, 
      title: "Online Bookstore",
       description: "A responsive bookstore with search filters and a user-friendly UI.", 
      image: image1, 
      link: "https://prasathramakrishna.github.io/Secondhand-book-shopping/onlinebook/book.html" },
    { id: 4, 
      title: "CGPA Calculation", 
      description: "Accurately tracks CGPA with user-friendly input and real-time results.", 
      image: image4, link: "https://prasathramakrishna.github.io/cgpa-calculator/loginpage.html" },
  ];

  const skills = [
    { name: "HTML", imageUrl: htmlImage },
    { name: "CSS", imageUrl: cssImage },
    { name: "JavaScript", imageUrl: jsImage },
    { name: "React", imageUrl: reactImage },
    { name: "Node.js", imageUrl: nodejs },
  ];

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="about" id="about">
        <fieldset className="init">
          <h1>About Me</h1>
          <p>
            Hi! My name is <b>Prasath</b>, and I am an aspiring web developer with a strong passion for designing and
            building engaging, user-friendly websites. My journey in web development began with a curiosity about
            digital solutions, evolving into a commitment to blending creativity and technology to craft meaningful
            experiences.
          </p>
          <div className='frame'>
            <button className='custombutton'>
              <a className='col' href='https://prasathramakrishna.github.io/resume/my%20resume.pdf'><FaArrowRightLong />View Resume</a>
            </button>
          </div>
        </fieldset>
        <div className="photo">
          <img src={image} alt="Profile" />
        </div>
      </div>

      <div className="projects" id="projects">
        <h1 className="section-title">Projects</h1>
        <div className="project-grid">
          {projects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
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
        <h1 className="section-title">Skills</h1>
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


function App() {

   
    const [menuOpen, setMenuOpen] = useState(false);
  
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen); 
    }
  
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    
    <Router>
      <nav className="main">
        <div className="first">PORTFOLIO</div>



        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`second ${menuOpen ? "active" : ""}`}>
          <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><a href="#about" onClick={(e) => { handleScroll(e); setMenuOpen(false); }}>About Me</a></li>
            <li><a href="#projects" onClick={(e) => { handleScroll(e); setMenuOpen(false); }}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => { handleScroll(e); setMenuOpen(false); }}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => { handleScroll(e); setMenuOpen(false); }}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-projects" element={<MoreProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
