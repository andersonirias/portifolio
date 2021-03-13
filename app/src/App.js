import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Header from './components/header';
import Profile from './components/profile';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <Container fluid>
      <Header />
      <Row className="body">
        <Profile />
        <Content />
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
