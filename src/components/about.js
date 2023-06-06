import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';

function About() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container className="mt-5 pt-5">
        <h2>Who We Are</h2>
        <Row>
          <Col>
            <p>Content here</p>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default About;