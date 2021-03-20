import { React, Component } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import './styles.css';
import PerfilImg from './img/perfil.jpeg';
import MailImg from './img/mail.png';
import LinImg from './img/linkedin.png';
import GitImg from './img/github.png';

class Profile extends Component {
  render() {
    return (
      <Col md={4}>
        <Card className="mx-4 p-2 profile-card border card-shadow overflow-auto">
          <Card.Body>
            <Row>
              <Col md={12}  className="text-center">
                <Image src={ PerfilImg } className="contact-icon" roundedCircle fluid />
              </Col>
            </Row>
            <Row className="mt-3 p-2 contact-info border card-shadow">
              <Col md={12} className="mt-2">
                <Image src={ MailImg } className="mr-2" fluid />
                <a href="mailto:contato@irias.com.br" target="_blank">
                  contato@irias.com.br
                </a>
              </Col>
              <Col md={12} className="mt-2">
                <Image src={ LinImg } className="mr-2" fluid />
                <a href="https://www.linkedin.com/in/andersonirias" target="_blank">
                  linkedin.com/in/andersonirias
                </a>
              </Col>
              <Col md={12} className="mt-2">
                <Image src={ GitImg } className="mr-2" fluid />
                <a href="https://github.com/andersonirias" target="_blank">
                  github.com/andersonirias
                </a>
              </Col>
            </Row>  
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Profile;
