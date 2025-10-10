import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectInfo.css';
import projectsData from '../../JSON DB/Projects.json';

const ProjectInfo = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
    scrollToTop();
  }, []);

  useEffect(() => {
    setProjects(projectsData);
    const project = projectsData.find(p => p.id === projectId);
    setCurrentProject(project);
  }, [projectId]);

  if (!currentProject) {
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
        <h1>{currentProject.title}</h1>
      </div>

      <div className="project-info-content">
        {/* Demo Video Section */}
        <section className="demo-section">
          <h2>Demo Video</h2>
          <div className="video-container">
            {currentProject.video ? (
              <video 
                controls 
                poster={currentProject.image}
                className="demo-video"
              >
                <source src={currentProject.video || currentProject.demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="coming-soon-container">
                <img src={currentProject.image} alt="Project" className="coming-soon-image" />
                <div className="coming-soon-overlay">
                  <div className="coming-soon-content">
                    <i className="fa-solid fa-video coming-soon-icon"></i>
                    <h3>Demo Video Coming Soon</h3>
                    <p>Stay tuned for a detailed demonstration</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Project Description Section */}
        <section className="description-section">
          <h2>Project Description</h2>
          <p className="project-description-text">{currentProject.detaileddescription || currentProject.description}</p>
          
          <h3>Key Features</h3>
          <ul className="features-list">
            {currentProject.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Technologies Section */}
        <section className="technologies-section">
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            {(currentProject.technologiesArray || currentProject.technologies.split(' • ')).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>
      </div>

      {/* Repository Link - Standalone at bottom */}
      <div className="repo-link-container">
        <a 
          href={currentProject.repoLink} 
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
