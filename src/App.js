import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavMenu from './components/navmenu';
import About from './components/about';
import Donate from './components/donate';
import Footer from './components/footer';
import Home from './components/home';
import Services from './components/services';
import './App.css';

function App() {
  return (
    <Container fluid className="App d-flex flex-column justify-content-between">
      <div>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<About />} />
          <Route path="/what-we-do" element={<Services />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </Container>
  );
}

export default App;
