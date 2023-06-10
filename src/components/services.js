import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Button from 'react-bootstrap/Button';

function Services() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container fluid className="p-0 mt-5 overflow-hidden">
        {/* full picture landing - medium and up */}
        <Container
          fluid
          className="services-landing ps-0 pe-0 mt-5 overflow-hidden d-sm-none d-md-block"
        >
          <Row>
            <Col className="pt-5  offset-md-1" md="6">
              <h2 className="">What We Do</h2>
              <p className='fs-5'>
                These couple of lines will provide a general overview of your
                services and programs. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Facilisi cras fermentum odio eu feugiat
                pretium nibh ipsum consequat.{' '}
              </p>
            </Col>
          </Row>
        </Container>
        {/* text landing - xs and small */}
        <Container className="d-sm-block d-md-none mt-5">
          <Row>
            <Col>
              <h2 className="pt-5">What We Do</h2>
              <p className="pt-2">
                These couple of lines will provide a general overview of your
                services and programs. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Facilisi cras fermentum odio eu feugiat
                pretium nibh ipsum consequat.{' '}
              </p>
            </Col>
          </Row>
        </Container>
        {/* rest of the page text */}
        <Container className='pt-3 pb-3'>
          <Row>
            <h3>Services</h3>
            <Row>
              <Col>
                <h4>Forensic Interviewing</h4>
                <p>
                  The forensic interview is conducted in a supportive and
                  non-leading manner by a trained professional. The interview
                  takes place in a child-friendly environment and is designed to
                  elicit a child's unique information about the alleged abuse.
                </p>
              </Col>
              <Col>
                <h4>Victim Services</h4>
                <p>
                  The Victims Advocate is responsible for coordinating the CPIT
                  meetings, tracking case data, and providing court liaison
                  services. The Victim Services Coordinator also assists
                  caregivers in filing for Victim's Compensation funds for the
                  child victim.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Counseling</h4>
                <p>
                  Licensed mental health therapists, specializing in trauma
                  focused therapy and play therapy, work with the child victim
                  to help promote healing and to minimize the effects of abuse.
                </p>
              </Col>
              <Col>
                <h4>Family Advocacy</h4>
                <p>
                  Assists the non-offending caregiver with services needed to
                  maintain a safe and stable environment for the child victim.
                  Provides helpful information to caregivers that are meeting
                  the needs of abused children.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Education and Prevention</h4>
                <p>
                  Responsible for coordinating Adult Prevention training as well
                  at the Children's Education program.
                </p>
              </Col>
              <Col>
                <h4>Child Protective Investigative Team</h4>
                <p>
                  The CPIT is an
                  interdisciplinary team of individuals from different
                  backgrounds responsible for discussing and responding to child
                  abuse cases.
                </p>
              </Col>
            </Row>
          </Row>
          <Row className='pt-3'>
            <h3>Prevention & Training</h3>
            <p>
              If you offer different types of prevention services and training
              opportunities, I can expound on that here!
            </p>
          </Row>
        </Container>
      </Container>
    </Fade>
  );
}

export default Services;
