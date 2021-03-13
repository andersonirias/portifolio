import { React, Component } from 'react';
import { Col, Card } from 'react-bootstrap';
import './styles.css';

class Profile extends Component {
  render() {
    return (
      <Col md={4}>
        <Card className="mx-4 p-2 profile-card">
          <Card.Body>
            Perfil
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Profile;
