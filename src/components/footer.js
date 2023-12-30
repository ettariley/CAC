import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
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
          <h4>Report Child Abuse</h4>
          <Button
            href="https://carat.app.tn.gov/carat/"
            target="_blank"
            variant="success"
            className="mb-2"
          >
            DCS Online Referral Form
          </Button>
          <br></br>
          <Button href="tel:1-877-237-0004" variant="success">
            Hotline: 1-877-237-0004
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center pb-3">
        <Col sm="auto">
          <a href="https://www.nationalchildrensalliance.org/" target="_blank">
            <Image
              src={require('../assets/natl-childrens-alliance.png')}
              alt="National Children's Alliance Logo"
              fluid
              className="footer-images m-1"
            />
          </a>
        </Col>
        <Col sm="auto">
          <a href="https://www.kidcentraltn.com/" target="_blank">
            <Image
              src={require('../assets/kidcentral-tn.png')}
              alt="Kid Central TN Logo"
              className="footer-images m-1"
              fluid
            />
          </a>
        </Col>
        <Col sm="auto">
          <a href="https://www.cactn.org/" target="_blank">
            <Image
              src={require('../assets/cactn-logo-white.png')}
              alt="Child Advocacy Centers of Tennessee Logo"
              className="footer-images m-1"
              fluid
            />
          </a>
        </Col>
        <Col sm="auto">
          <a href="https://unitedwayofgreenecounty.com/" target="_blank">
            <Image
              src={require('../assets/uwgc.png')}
              alt="United Way of Greene County Logo"
              className="footer-images m-1"
              fluid
            />
          </a>
        </Col>
        <Col sm="auto">
          <a href="https://www.speedwaycharities.org/" target="_blank">
            <Image
              src={require('../assets/scc.png')}
              alt="Speedway Childrens Charities Logo"
              className="footer-images m-1"
              fluid
            />
          </a>
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
