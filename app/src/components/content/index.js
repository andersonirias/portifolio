import { React, Component } from 'react';
import { Col, Card } from 'react-bootstrap';
import './styles.css';

class Content extends Component {
  render() {
    return (
      <Col md={8}>
        <Card className="mx-4 p-2 content-card">
          <Card.Body>
            Conteúdo.
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Content;
