import { React, Component } from 'react';
import { Col, Card, ListGroup } from 'react-bootstrap';
import './styles.css';

class Content extends Component {
  render() {
    return (
      <Col md={8}>
        <Card className="mx-4 p-2 content-card border card-shadow overflow-auto">
          <Card.Title className="p-4 mx-4 p-2 mt-4 border content-title">
            <strong>Experience</strong>
          </Card.Title>
          <Card.Body className="mb-4">
            <ListGroup className="border">
              <ListGroup.Item action href="#">Mav Tecnologia - Fullstack Software Engineer</ListGroup.Item>
              <ListGroup.Item action href="#">Data Backup - Software Engineer</ListGroup.Item>
              <ListGroup.Item action href="#">Mav Tecnologia - Software Engineer</ListGroup.Item>
              <ListGroup.Item action href="#">Mav Tecnologia - Technical Support Analyst</ListGroup.Item>
              <ListGroup.Item action href="#">LS Locações, Serviços e Eventos Ltda - IT Intern</ListGroup.Item>
              <ListGroup.Item action href="#">Supermercados BH - Apprentice</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Content;
