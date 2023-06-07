import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Image from 'react-bootstrap/Image';
import HomeLanding from '../assets/home-landing.png';

function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container className="mt-5 pt-5">
        <Row className="mt-4">
          <Col className="home-landing">
            <Row>Hearing. Helping. Healing.</Row>
          </Col>
          {/* <Col md="7">
            <Row>
              <Col className="home-landing">Hearing.</Col>
            </Row>
            <Row>
              <Col className="home-landing offset-md-2">Helping.</Col>
            </Row>
            <Row>
              <Col className="home-landing offset-md-4">Healing.</Col>
            </Row>
          </Col> */}
          <Col>
            <Image src={HomeLanding} fluid />
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Home;
