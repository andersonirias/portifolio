import { React } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { useApp } from './../../hooks/app';
import './styles.css';
import Books from  './img/books.png';
import Parchment from './img/parchment.png';
import Bag from './img/bag.png';
import Sword from './img/sword.png';

export default function Footer() {
  const { contentType, setContentType } = useApp();

  return (
    <Row className="pb-4 justify-content-md-center text-center">
      <Col md={2} className="mt-4">
        <Card 
          onClick={() => {setContentType('about')}}
          className={
            contentType === 'about' 
              ? "footer-card border-radius card-shadow footer-card-active" 
              : "footer-card border-radius card-shadow"
          }
        >
          <Card.Body className="align-middle">
            <Image src={ Parchment } className="icon-footer mr-2" fluid />
            <strong>About</strong>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2} className="mt-4">
        <Card 
          onClick={() => {setContentType('graduation')}}
          className={
            contentType === 'graduation' 
              ? "footer-card border-radius card-shadow footer-card-active" 
              : "footer-card border-radius card-shadow"
          }
        >
          <Card.Body className="align-middle">
            <Image src={ Books } className="icon-footer mr-2" fluid />
            <strong>Graduation</strong>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2} className="mt-4">
      <Card 
          onClick={() => {setContentType('experience')}}
          className={
            contentType === 'experience' 
              ? "footer-card border-radius card-shadow footer-card-active" 
              : "footer-card border-radius card-shadow"
          }
        >
          <Card.Body className="align-middle">
            <Image src={ Sword } className="icon-footer mr-2" fluid />
            <strong>Experience</strong>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2} className="mt-4">
        <Card 
          onClick={() => {setContentType('skills')}}
          className={
            contentType === 'skills' 
              ? "footer-card border-radius card-shadow footer-card-active" 
              : "footer-card border-radius card-shadow"
          }
        >
          <Card.Body className="align-middle">
            <Image src={ Bag } className="icon-footer mr-2" fluid />
            <strong>Skills</strong>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
