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
          <Col md='4' lg='6' className='pb-4'>
            {/* add in later - each word fades in by itself */}
            <Row className="home-landing pt-5">Hearing. Helping. Healing.</Row>
            <Row className="fs-5 pt-3">
              The Child Advocacy Center of the 3rd Judicial District provides
              prevention and support services to child victims of physical and
              sexual abuse in Greene, Hamblen, Hancock, and Hawkins Counties.
            </Row>
          </Col>
          <Col className="pb-3 d-sm-none d-md-flex justify-content-center">
            <Image src={HomeLanding} fluid />
          </Col>
          {/* add in later - more information provided by agency - stats, programs, etc. */}
        </Row>
      </Container>
    </Fade>
  );
}

export default Home;
