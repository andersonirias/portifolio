import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './hooks/app';
import { Container, Row } from 'react-bootstrap';
import Header from './components/header';
import Profile from './components/profile';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <AppProvider>
      <Container fluid>
        <Header className="header"/>
        <Row className="body h-45">
          <Profile />
          <Content />
        </Row>
        <Footer className="footer"/>
      </Container>
    </AppProvider>
  );
}

export default App;
