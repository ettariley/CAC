import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';

function CPIT() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container className="mt-5 pt-5">
        <h2 className="mt-5">CPIT</h2>
        <Row className="mt-4">
          <Col>
            The Child Advocacy Center actively facilitates and coordinates the
            Child Protective Investigation Team during the investigation and
            treatment for our children. Multiple research has shown the benefit
            of our model:<br></br>
            <ul>
              <li>
                Saves approximately $1,047 per investigation due to this
                coordination of services. This translated to a savings of
                $615,636 for the 3rd Judicial District last year alone
              </li>
              <li>
                Highly focused, job-specific training for CPIT provided at no
                cost annually to the agency
              </li>
              <li>
                All services offered free of charge to families and community.
                The last thing a parent needs to worry about is how to pay for
                their child's healing
              </li>
              <li>
                Families report greater satisfaction with investigation process
              </li>
              <li>
                Families report a decrease in frequency or intensity of child
                abuse behaviors
              </li>
              <li>More perpetrators are held accountable</li>
            </ul>
            The CAC is the only agency in the 3rd Judicial District that
            routinely brings together multiple agencies to provide a continuum
            of care for children experiencing child abuse. The CAC routinely
            meets with other service providers in our area to share program
            information and advocate for system changes.
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>(CPIT team members will go here by county.)</Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default CPIT;
