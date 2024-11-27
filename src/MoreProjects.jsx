import React from 'react';
import image1 from './images/project1.png';
import image2 from './images/project2.png';
import image3 from './images/project.jpeg';
import image4 from './images/photo4.webp';
import './MoreProjects.css'
const additionalprojects = [
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
]
const MoreProjects = () => {
  return (
    
    <div className='more-projects'>
        <h1 className='more-title'>More Projects</h1>
        <div className='project-grids'> 
            {additionalprojects.map((project)=>(
                <a key={project.id} href={project.link}
                target='_blank' rel="noopener noreferrer" className='project-cards'>
                    <img src={project.image} alt={project.title} className='project-images'/>
                    <h3 className='project-titles'>{project.title}</h3>
                </a>
            ))
            }
        </div>
    </div>
  );
};

export default MoreProjects;
