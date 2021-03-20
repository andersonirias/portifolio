import { React, Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <Card className="mx-4 p-3 mt-4 header-card border-radius card-shadow text-center">
            <Card.Text>
              <strong>Anderson Irias</strong>
            </Card.Text>
          </Card>
        </Col>
        <Col md={8}>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Card className="mx-4 p-3 mt-4  header-card border-radius card-shadow text-center">
                <Card.Text>
                  <strong>Fullstack Software Engineer</strong>
                </Card.Text>
              </Card>
            </Col>
            <Col md={3} className="text-center">
              <Button variant="info" className="mx-4 p-3 mt-4 header-button border-radius card-shadow" >
                <strong>Projects</strong>
              </Button>
            </Col>
            <Col md={3} className="text-center">
              <Button variant="success" className="mx-4 p-3 mt-4 header-button border-radius card-shadow">
                <strong>Blog</strong>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Header;
