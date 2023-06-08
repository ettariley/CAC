import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/cac-logo.png';

function Footer() {
  return (
    <Container fluid className="text-bg-light bg-primary">
      <Row className="p-3 justify-content-center">
        <Col sm md="2" className="me-2">
          <h4>Contact Us</h4>
          <Row>
            <p className="mb-1">
              Email:{' '}
              <a href="mailto:cac3jd@gmail.com" title="Email" target="_blank">
                cac3jd@gmail.com
              </a>
            </p>
          </Row>
          <Row>
            <p className="mb-1">
              Phone:{' '}
              <a href="tel:423-422-4446" title="Call">
                (423) 422-4446
              </a>
            </p>
          </Row>
          <Row>
            <p className="mb-2">Fax: (423) 422-4499</p>
          </Row>
        </Col>
        <Col sm md="2" className="me-2">
          <h4>Address</h4>
          <Row>
            <p className="mb-2">
              200 Main Street<br></br>Mosheim, TN 37818
            </p>
          </Row>
          <Row>
            <p>
              Mailing:<br></br>
              PO Box 743<br></br>Mosheim, TN 37818
            </p>
          </Row>
        </Col>
        <Col sm md="2" className="me-2">
          <h4>Resources</h4>
          <p>
            Report Child Abuse<br></br>
            <a href="tel:1-877-237-0004" title="Call">
              1-877-237-0004
            </a>
          </p>
          <a href="https://www.nationalchildrensalliance.org/" target="_blank">
            <Image
              src={require('../assets/natl-childrens-alliance.png')}
              alt="National Children's Alliance Logo"
              fluid
              className="footer-images"
            />
          </a>{' '}
          <br></br>
          <a href="https://www.kidcentraltn.com/" target="_blank">
            <Image
              src={require('../assets/kidcentral-tn.png')}
              alt="Kid Central TN Logo"
              className="mt-2 footer-images"
              fluid
            />
          </a>
        </Col>
        <Col sm md="2" className="">
          <h4>Site Menu</h4>
          <Row className="mb-1">
            <NavLink to="/">Home</NavLink>
          </Row>
          <Row className="mb-1">
            <NavLink to="/who-we-are">Who We Are</NavLink>
          </Row>
          <Row className="mb-1">
            <NavLink to="/what-we-do">What We Do</NavLink>
          </Row>
          <Row>
            <NavLink to="/donate">Donate</NavLink>
          </Row>
        </Col>
      </Row>
      <Row className="footer-site p-1">
        <Col className="text-center">
          Site Created by{' '}
          <a href="https://www.ettahaselden.com/" target="_blank">
            Etta Haselden
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
