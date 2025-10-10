import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import './Portfolio.css';
import projectsData from '../../JSON DB/Projects.json';

const Portfolio = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h2>Latest Projects</h2>
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
