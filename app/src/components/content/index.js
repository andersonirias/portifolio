import { React } from 'react';
import { Row, Col, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import { useApp } from './../../hooks/app';
import './styles.css';

export default function Content() {
  const { contentType } = useApp();
  let content;

  switch (contentType) {
    case 'about':
      content = aboutContent();
      break;
    case 'graduation':
      content = graduationContent();
      break;
    case 'experience':
      content = experienceContent();
      break;
    case 'skills':
      content = skillsContent();
      break;
    default:
      content = experienceContent();
      break;
  }

  return (
    <Col md={8}>
      <Card className="mx-4 p-2 content-card border card-shadow overflow-auto h-45">
        { content }
      </Card>
    </Col>
  );
}

function aboutContent() {
  return (
    <div className="mb-4">
      <Card.Title className="p-4 mx-4 p-2 mt-4 border content-title">
        <strong>About</strong>
      </Card.Title>
      <Card.Body className="mb-4">
        <ListGroup className="border">
          <ListGroup.Item>
            Hello, my name is Anderson Irias. I'm a software engineer and i work with IT 
            since was 19 years old.  Check out my articles in my blog. Feel free to take 
            a look at my latest projects on my web site.
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </div>
  );
}

function graduationContent() {
  return (
    <div className="mb-4">
      <Card.Title className="p-4 mx-4 p-2 mt-4 border content-title">
        <strong>Graduation</strong>
      </Card.Title>
      <Card.Body className="mb-4">
        <ListGroup className="border">
          <ListGroup.Item>Cybersecurity Specialization - Centro Universitário Senac</ListGroup.Item>
          <ListGroup.Item>Bachelor degree of Information Systems - Faculdade Pitagoras</ListGroup.Item>
          <ListGroup.Item>Computer Technician - Cecon TI</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </div>
  );
}

function experienceContent() {
  return (
    <div className="mb-4">
      <Card.Title className="p-4 mx-4 p-2 mt-4 border content-title">
        <strong>Experience</strong>
      </Card.Title>
      <Card.Body className="mb-4">
        <ListGroup className="border">
          <ListGroup.Item>Software Engineer Technical Lead - MAV Tecnologia (2022 - atualmente)</ListGroup.Item>
          <ListGroup.Item>Full Software Engineer - MAV Tecnologia (2019 - 2021)</ListGroup.Item>
          <ListGroup.Item>Freelancer Software Developer - Irias LAB (2019 - atualmente)</ListGroup.Item>
          <ListGroup.Item>Junior Software Engineer - MAV Tecnologia (2017 - 2018)</ListGroup.Item>
          <ListGroup.Item>IT Support Analyst - MAV Tecnologia (2014 - 2016)</ListGroup.Item>
          <ListGroup.Item>IT Support Intern - Ls Locações, Serviços e Eventos Ltda (2012 - 2013)</ListGroup.Item>
          <ListGroup.Item>Apprentice - Supermercados BH (2011 - 2012)</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </div>
  );
}

function skillsContent() {
  return (
    <div className="mb-4">
      <Card.Title className="p-4 mx-4 p-2 mt-4 border content-title">
        <strong>Skills</strong>
      </Card.Title>
      <Card.Body>
        <Row>
          <Col md={6}>
            <ListGroup className="border">
              <ListGroup.Item>
                PHP
                <ProgressBar variant="success"  now={90} />
              </ListGroup.Item>
              <ListGroup.Item>
                Python
                <ProgressBar variant="success"  now={75} />
              </ListGroup.Item>
              <ListGroup.Item>
                JavaScript
                <ProgressBar variant="warning"  now={70} />
              </ListGroup.Item>
              <ListGroup.Item>
                HTML + CSS
                <ProgressBar variant="success"  now={90} />
              </ListGroup.Item>
              <ListGroup.Item>
                jQuery
                <ProgressBar variant="warning"  now={70} />
              </ListGroup.Item>
              <ListGroup.Item>
                React
                <ProgressBar variant="warning"  now={65} />
              </ListGroup.Item>
            </ListGroup>  
          </Col>
          <Col md={6}>
            <ListGroup className="border">
              <ListGroup.Item>
                React Native
                <ProgressBar variant="success"  now={75} />
              </ListGroup.Item>
              <ListGroup.Item>
                MySQL
                <ProgressBar variant="success"  now={85} />
              </ListGroup.Item>
              <ListGroup.Item>
                PostgreSQL
                <ProgressBar variant="success"  now={85} />
              </ListGroup.Item>
              <ListGroup.Item>
                MongoDB
                <ProgressBar variant="warning"  now={70} />
              </ListGroup.Item>
              <ListGroup.Item>
                Docker
                <ProgressBar variant="success"  now={80} />
              </ListGroup.Item>
              <ListGroup.Item>
                Linux
                <ProgressBar variant="success"  now={75} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </div>
  );
}
