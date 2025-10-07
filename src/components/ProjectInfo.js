import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectInfo = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Project data - you can move this to a separate file later
  const projectsData = {
    'denimora': {
      title: 'Denimora',
      description: 'A comprehensive e-commerce platform built for a freelancing client. This project features a modern design, full shopping cart functionality, user authentication, product management, and payment integration. Built with React.js frontend and Django backend with RESTful API architecture.',
      technologies: ['React.js', 'Django', 'Python', 'RESTful API', 'CSS3', 'JavaScript'],
      demoVideo: '/assets/Videos/Denimora.mp4',
      repoLink: 'https://github.com/AAshry10/denimora',
      image: '/assets/Images/Denimora.png',
      features: [
        'Full e-commerce functionality',
        'Shopping cart and checkout',
        'Admin panel for business management',
        'Responsive design for all devices',
        'Bosta shipping integration'
      ]
    },
    'cymate': {
      title: 'Cymate',
      description: 'A graduation project developed for CIS Mansoura University. This comprehensive web application features advanced functionality built with modern technologies. The project demonstrates full-stack development skills with React.js frontend, Django backend, and Node.js services.',
      technologies: ['React.js', 'Django', 'Node.js', 'RESTful API', 'Python', 'JavaScript'],
      demoVideo: '/assets/Videos/cymate-demo.mp4',
      repoLink: 'https://github.com/AAshry10/Cymate-Frontend',
      image: '/assets/Images/Cymate (3).png',
      features: [
        'Full-stack web application',
        'Modern React.js frontend',
        'Django REST API backend',
        'Node.js microservices',
        'Database integration',
        'User management system'
      ]
    },
    'web-portfolio': {
      title: 'Web Portfolio',
      description: 'This portfolio website you are currently viewing! Built with React and modern web technologies, featuring a responsive design, smooth animations, and optimized performance. The site showcases projects, skills, and contact information in an elegant and professional manner.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design', 'Font Awesome'],
      demoVideo: '/assets/Videos/portfolio-demo.mp4',
      repoLink: 'https://github.com/AAshry10/portfolio',
      image: '/assets/Images/Ashry-Portfolio.png',
      features: [
        'Fully responsive design',
        'Smooth scroll animations',
        'Contact form integration',
        'Project showcase',
        'Modern UI/UX design',
        'Fast loading performance'
      ]
    },
    'figma-training': {
      title: 'Figma Training',
      description: 'A training project completed during ITI Section training program. This project demonstrates proficiency in HTML, CSS, JavaScript, and design principles. Built as a solo project to showcase frontend development skills and modern web design techniques.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Design', 'Responsive Web Design'],
      demoVideo: '/assets/Videos/figma-training-demo.mp4',
      repoLink: 'https://github.com/AAshry10/figma-training',
      image: '/assets/Images/ITI Section Training.png',
      features: [
        'Clean HTML structure',
        'Modern CSS styling',
        'Interactive JavaScript',
        'Responsive design',
        'Cross-browser compatibility',
        'Optimized performance'
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/')} className="btn">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="project-info">
      <div className="project-info-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Portfolio
        </button>
        <h1>{project.title}</h1>
      </div>

      <div className="project-info-content">
        {/* Demo Video Section */}
        <section className="demo-section">
          <h2>Demo Video</h2>
          <div className="video-container">
            <video 
              controls 
              poster={project.image}
              className="demo-video"
            >
              <source src={project.demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Project Description Section */}
        <section className="description-section">
          <h2>Project Description</h2>
          <p className="project-description-text">{project.description}</p>
          
          <h3>Key Features</h3>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Technologies Section */}
        <section className="technologies-section">
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>
      </div>

      {/* Repository Link - Standalone at bottom */}
      <div className="repo-link-container">
        <a 
          href={project.repoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="repo-link"
        >
          <i className="fa-brands fa-github"></i>
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
