import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Container fluid className="text-bg-light bg-primary">
      <Row className="p-3 justify-content-around">
        <Col sm md="3" className="m-1 me-2">
          <h4>Contact Us</h4>
          <Row className='mb-2'>
            <a href="mailto:cac3jd@gmail.com" title="Email" target="_blank">
              cac3jd@gmail.com
            </a>
          </Row>
          <Row>
            <a href="tel:423-422-4446" title="Call">
              (423) 422-4446
            </a>
          </Row>
          <Row><p className='mb-2'>(423) 422-4499 (fax)</p></Row>
          <Row>
            <p>
              PO Box 743<br></br>Mosheim, TN 37818
            </p>
          </Row>
        </Col>
        <Col sm md="3" className="m-1">
          <h4>Other Resources</h4>
          <p>
            Report Child Abuse:{' '}
            <a href="tel:1-877-237-0004" title="Call">
              1-877-237-0004
            </a>
          </p>
          <a href='https://www.nationalchildrensalliance.org/' target='_blank'>
            <img
              src={require('../assets/natl-childrens-alliance.png')}
              alt="National Children's Alliance Logo"
              className='footer-images'
            />
          </a> <br></br>
          <a href='https://www.kidcentraltn.com/' target='_blank'>
            <img
              src={require('../assets/kidcentral-tn.png')}
              alt="Kid Central TN Logo"
              className='footer-images mt-2'
            />
          </a>
        </Col>

        <Col sm md="3" className="m-1 ms-2">
          <h4>Site Menu</h4>
          <Row>
            <NavLink to="/">Home</NavLink>
          </Row>
          <Row>
            <NavLink to="/who-we-are">Who We Are</NavLink>
          </Row>
          <Row>
            <NavLink to="/what-we-do">What We Do</NavLink>
          </Row>
          <Row>
            <NavLink to="/donate">Donate</NavLink>
          </Row>
        </Col>
      </Row>
      <Row className='footer-site p-1'>
        <Col className='text-center'>
          Site Created by <a href='https://www.ettahaselden.com/' target='_blank'>Etta Haselden</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
