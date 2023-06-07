import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ella from '../assets/ella.JPG';
import Nellie from '../assets/nellie.jpg';
import Nola from '../assets/nola.jpg';

function About() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container className="mt-5 pt-5">
        <h2 className="mt-5">Who We Are</h2>
        <Row>
          <Col>
            <p>
              The Child Advocacy Center (CAC) of the 3rd Judicial District is a
              non-profit organization that serves child victims of maltreatment.
              Our community recognized the need to enhance the system's ability
              to respond to allegations of abuse while at the same time making
              sure young victims receive the help they need to reduce the
              effects of trauma created by abuse. We serve as a hub for
              investigations of child abuse and provide a child-friendly
              environment for the children involved. We offer trauma-focused
              therapy for children, support for their non-offending caregivers,
              and prevention programs and community education to increase public
              awareness.
            </p>
            <p>
              Funding is provided through grants, local government, and generous
              donations from individuals, businesses, and organizations. All
              services to child victims and their non-offending caregivers are
              provided at no cost. All donations to the CAC are tax deductible
              due to our 501(c)(3) status.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm="auto">
            <Button>
              <NavLink to="/what-we-do">Learn more about CAC services</NavLink>
            </Button>
          </Col>
          <Col sm="auto">
            <Button>
              <NavLink to="/donate">Donate to the CAC</NavLink>
            </Button>
          </Col>
        </Row>
        <h2 className="mt-4">Our Staff</h2>
        <Row className='pb-5'>
          <Col md='4'>
            <Card border="primary" className='border border-2'>
              <Card.Img variant="top" src={Nellie} />
              <Card.Body>
                <Card.Title><h3>Staff Member Name</h3></Card.Title>
                <Card.Subtitle><h5>Staff Member Title</h5></Card.Subtitle>
                <Card.Text>
                  Staff member bio. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Facilisi cras fermentum odio eu feugiat
                  pretium nibh ipsum consequat. Nunc eget lorem dolor sed.
                  Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.
                  Scelerisque mauris pellentesque pulvinar pellentesque.
                  Vulputate dignissim suspendisse in est ante in nibh mauris
                  cursus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4'>
            <Card border="primary" className='border border-2'>
              <Card.Img variant="top" src={Nola} />
              <Card.Body>
                <Card.Title><h3>Staff Member Name</h3></Card.Title>
                <Card.Subtitle><h5>Staff Member Title</h5></Card.Subtitle>
                <Card.Text>
                  Staff member bio. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Facilisi cras fermentum odio eu feugiat
                  pretium nibh ipsum consequat. Nunc eget lorem dolor sed.
                  Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.
                  Scelerisque mauris pellentesque pulvinar pellentesque.
                  Vulputate dignissim suspendisse in est ante in nibh mauris
                  cursus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4'>
            <Card border="primary" className='border border-2'>
              <Card.Img variant="top" src={Ella} />
              <Card.Body>
                <Card.Title><h3>Staff Member Name</h3></Card.Title>
                <Card.Subtitle><h5>Staff Member Title</h5></Card.Subtitle>
                <Card.Text>
                  Staff member bio. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Facilisi cras fermentum odio eu feugiat
                  pretium nibh ipsum consequat. Nunc eget lorem dolor sed.
                  Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.
                  Scelerisque mauris pellentesque pulvinar pellentesque.
                  Vulputate dignissim suspendisse in est ante in nibh mauris
                  cursus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default About;
