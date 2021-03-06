import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row className="cabecalho">
        <Col className="bg-primary">Cabeçalho</Col>
      </Row>
      <Row className="body">
        <Col md={4} className="bg-secondary">Conteúdo esquerda</Col>
        <Col md={8} className="bg-success">Conteúdo direita</Col>
      </Row>
      <Row className="rodape">
        <Col className="bg-warning">Rodapé</Col>
      </Row>
    </Container>
  );
}

export default App;
