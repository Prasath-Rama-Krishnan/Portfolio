import React from 'react';
import image1 from './images/project1.png';
import image2 from './images/project2.png';
import image3 from './images/project.jpeg';
import image4 from './images/photo4.webp';
import images from './images/images.jpeg';
import image5 from './images/music.jpg';
import './MoreProjects.css'
const additionalprojects = [
    { id: 1, title: "Gamification with Education", 
        description: "An interactive platform with educational games for creativity and learning.", 
        image: image3, 
        link: "https://github.com/Prasath-Rama-Krishnan/Gamification-with-education" 
      },
      { id: 2, title: "Streetlight Control System",
         description: "Automating streetlight operations with real-time control and status updates.", 
         image: image2, 
         link: "https://github.com/Prasath-Rama-Krishnan/streetlight-update" },
      {
        id: 3, 
          title: "Farm Fresh Product",
          image: images, 
          link: "https://github.com/Prasath-Rama-Krishnan/Farm-Fresh-selling-platform" 
         },
      { id: 4, 
        title: "CGPA Calculation", 
        description: "Accurately tracks CGPA with user-friendly input and real-time results.", 
        image: image4, link: "https://github.com/Prasath-Rama-Krishnan/CGPA-CALZ" },
      { id: 6, 
        title: "Music Player", 
        image: image5,
         link: "https://github.com/Prasath-Rama-Krishnan/Music-Player" },
        { id: 5, 
        title: "Online Bookstore",
         description: "A responsive bookstore with search filters and a user-friendly UI.", 
        image: image1, 
        link: "https://github.com/Prasath-Rama-Krishnan/Secondhand-book-shopping" },
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
