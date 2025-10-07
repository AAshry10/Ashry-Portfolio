import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Badge } from 'react-bootstrap';

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'cymate',
      image: '/assets/Images/Projects/Cymate-Dashboard.png',
      title: 'Cymate',
      description: 'CIS Mansoura University Graduation Project',
      technologies: 'React.Js • Django • Node.Js',
      year: '2024 - 2025'
    },
    {
      id: 'denimora',
      image: '/assets/Images/Projects/Denimora-Landing.png',
      video: '/assets/Videos/Denimora.mp4',
      title: 'Denimora',
      description: 'Full E-Commerce Site',
      detaileddescription: 'Denimora is an e-commerce platform that allows users to buy and sell denim products. It is a full-stack project that uses React.js for the frontend and Django for the backend.',
      technologies: 'React.Js • django • RESTful',
      year: '2025'
    },
    {
      id: 'web-portfolio',
      image: '/assets/Images/Projects/Ashry-Portfolio.png',
      video: '/assets/Videos/portfolio-demo.mp4',
      title: 'Web Portfolio',
      description: 'This portfolio ',
      technologies: 'React.Js • Bootstrap • JSON',
      year: '2025'
    }
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h2>Latest Projects</h2>
        <span className="project-count">Showing all projects</span>
      </div>

      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card 
              className="h-100 portfolio-card-custom"
              onClick={() => handleProjectClick(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <Card.Img 
                variant="top" 
                src={project.image} 
                alt={project.title}
                className="project-image-custom"
              />
              <Card.Body className="project-content-custom">
              <div className="d-flex justify-content-between align-items-center">
                  <Badge bg="secondary" className="project-tech-custom">
                    {project.technologies}
                  </Badge>
                </div>
                <Card.Title className="project-title-custom">
                  {project.title}
                </Card.Title>
                <Card.Text className="project-description-custom">
                  {project.description}
                </Card.Text>
                <div className="project-year-custom">
                  {project.year}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Portfolio;
