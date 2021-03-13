import { React, Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <Row className="header pt-4">
        <Col md={4}>
          <Card className="header-card mx-4 p-2">
            Nome
          </Card>
        </Col>
        <Col md={8}>
          <Row className="justify-content-md-center text-center">
            <Col md={4}>
              <Card className="header-card mx-4 p-2">
                Função
              </Card>
            </Col>
            <Col md={4}>
              <Card className="header-card mx-4 p-2">
                Projetos
              </Card>
            </Col>
            <Col md={4}>
              <Card className="header-card mx-4 p-2">
                Blog
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Header;
