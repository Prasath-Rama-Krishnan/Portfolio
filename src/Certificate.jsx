import React from "react";
import "./Certificate.css";

// Import all images
import cert1 from "./images/code.jpg";
import cert2 from "./images/prompt.jpg";
import cert3 from "./images/football.jpg";
import cert4 from "./images/java2.jpg";
import cert5 from "./images/c.jpg";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      image: cert1,
      title: "Code Debugging Competition 🏆",
      year: "2025",
      desc: "Secured 1st Place in the National Level Technical Symposium NEURONEX’25 (Vel Tech, Chennai).",
    },
    {
      id: 2,
      image: cert2,
      title: "Prompt Engineering Contest 🥈",
      year: "2025",
      desc: "Won 2nd Place in Prompt Engineering event at TECHNOVANZA’25 (Jerusalem College of Engineering).",
    },
    {
      id: 3,
      image: cert3,
      title: "Football Zonal Tournament ⚽",
      year: "2024-2025",
      desc: "Represented Velammal Engineering College in Anna University Zonal Football Tournament (Men).",
    },
    {
      id: 4,
      image: cert4,
      title: "NPTEL – Programming in Java 🎓",
      year: "2024",
      desc: "Completed NPTEL 12-week course in Java Programming with Elite certificate.",
    },
    {
      id: 5,
      image: cert5,
      title: "NPTEL – C Programming 🎓",
      year: "2023",
      desc: "Completed NPTEL 12-week course on Problem Solving through Programming in C with Elite certificate.",
    },
  ];

  return (
    <div className="certificates-section">
      <h2 className="section-title">Awards & Certifications</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="flip-card">
            <div className="flip-card-inner">
              
              {/* Front Side */}
              <div className="flip-card-front">
                <h3 className="card-title">{cert.title}</h3>
                <p className="card-year">{cert.year}</p>
                <p className="card-desc">{cert.desc}</p>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <img src={cert.image} alt={cert.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
