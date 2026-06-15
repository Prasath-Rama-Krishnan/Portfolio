import React from 'react';
import image1 from './images/project1.png';
import image2 from './images/project2.png';
import image3 from './images/project.jpeg';
import image4 from './images/photo4.webp';
import images from './images/images.jpeg';
import image5 from './images/music.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image5.avif';
import './MoreProjects.css'
const additionalprojects = [
    { id: 1, title: "Gamification with Education", 
        description: "An interactive platform with educational games for creativity and learning.", 
        image: image3, 
        link: "https://gamification-with-education.netlify.app/" 
    },
    { id: 7, title: "Movie Streaming Website",
             description: "A modern movie streaming platform featuring movie browsing, search functionality, detailed movie information, and a responsive user interface.", 
             image: image7, 
             link: "https://movie-streaming-ten.vercel.app/" 
    },
    {
        id: 3, 
          title: "Farm Fresh Product",
          image: images, 
          link: "https://farm-fresh-rosy.vercel.app/" 
    },
    { id: 8, 
               title: "AQI Monitoring System", 
               description: "An Air Quality Index monitoring application that displays real-time air quality data, pollution levels, and environmental insights through an interactive dashboard.", 
               image: image6, 
               link: "https://aqi-analysis-project.vercel.app/" 
    },
    { id: 2, title: "Streetlight Control System",
         description: "Automating streetlight operations with real-time control and status updates.", 
         image: image2, 
         link: "https://streetlight-monitoring.netlify.app/" 
    },
    { id: 4, 
        title: "CGPA Calculation", 
        description: "Accurately tracks CGPA with user-friendly input and real-time results.", 
        image: image4, link: "https://cgpa-calz.netlify.app/" 
    },
    { id: 6, 
        title: "Music Player", 
        image: image5,
         link: "https://my-music-track.netlify.app/" 
    },
    { id: 5, 
        title: "Online Bookstore",
         description: "A responsive bookstore with search filters and a user-friendly UI.", 
        image: image1, 
        link: "https://github.com/Prasath-Rama-Krishnan/Secondhand-book-shopping" 
    },
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
