import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Ella from '../assets/ella.JPG';
import Nellie from '../assets/nellie.jpg';
import Nola from '../assets/nola.jpg';
import CACmodel from '../assets/CAC_Model.png';

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
        <Row className="align-items-center pb-3">
          <Col lg="6" className='text-center'>
            <Image src={CACmodel} fluid />
          </Col>
          <Col lg="6">
            <p>
              The Child Advocacy Center (CAC) of the 3rd Judicial District
              provides hope and healing to children and their families
              experiencing the trauma of child abuse and neglect. The idea is
              simple.
            </p>
            <p>
              We coordinate services to protect victimized children from being
              further traumatized by the very system that is supposed to protect
              them, acting as a broker between the child and family and outside
              services and as a facilitator in the development of treatment and
              prosecution plans. VOCA-funded Family Advocates work closely with
              each family to help them process their individualized trauma and
              give them the tools needed for healing and empowerment.
            </p>
            <p>
              Above all else, the CAC allows a child to simply be a child again.
              We give families the support and resources they need to combat the
              harmful impact of toxic stress. It takes healthy families to raise
              healthy children. This in turn, ensures our children will grow
              into healthy adults. Healthy adults create healthy communities
              with economic advancement and prosperity for all members.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col sm="auto" className="pb-2">
            <Button>
              <NavLink to="/what-we-do">Learn more about CAC services</NavLink>
            </Button>
          </Col>
          <Col sm="auto" className="pb-2">
            <Button>
              <NavLink to="/donate">Donate to the CAC</NavLink>
            </Button>
          </Col>
        </Row>
        <h2 className="mt-3">A Place & A Process</h2>
        <Row className="align-items-center">
          <Col>
            <p>
              The CAC is both a place and a process. As a place, we provide a
              neutral, child-friendly environment for children to meet with the
              Child Protective Investigative Team (CPIT) members and advocates
              when there are reports of severe child abuse. The CAC is where
              severely abused children begin their journey of healing.
            </p>
            <p>
              As a process, the CAC is the only agency in Greene County that
              routinely brings together other disciplines to investigate these
              reports of severe abuse. This CPIT facilitation allows key
              organizations to share vital information to ensure the best and
              most accurate outcomes for our children.
            </p>
          </Col>
        </Row>
        <h2 className="mt-3">Our Staff</h2>
        <Row>
          <Col md="4">
            <Card border="primary" className="border border-2 mb-2">
              <Card.Img variant="top" src={Nellie} />
              <Card.Body>
                <Card.Title>
                  <h3>Staff Member Name</h3>
                </Card.Title>
                <Card.Subtitle>
                  <h5>Staff Member Title</h5>
                </Card.Subtitle>
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
          <Col md="4">
            <Card border="primary" className="border border-2 mb-2">
              <Card.Img variant="top" src={Nola} />
              <Card.Body>
                <Card.Title>
                  <h3>Staff Member Name</h3>
                </Card.Title>
                <Card.Subtitle>
                  <h5>Staff Member Title</h5>
                </Card.Subtitle>
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
          <Col md="4">
            <Card border="primary" className="border border-2 mb-2">
              <Card.Img variant="top" src={Ella} />
              <Card.Body>
                <Card.Title>
                  <h3>Staff Member Name</h3>
                </Card.Title>
                <Card.Subtitle>
                  <h5>Staff Member Title</h5>
                </Card.Subtitle>
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
        <h2 className="mt-3">Volunteers & Internships</h2>
        <Row className="align-items-center pb-4">
          <Col>
            <p>
              Due to the sensitive victimization our clients experience, most
              volunteers are utilized in activities with no client contact such
              as cleaning and sanitizing the facility, facility repairs, and
              landscaping. When volunteers are utilized in a manner they would
              have access to clients or sensitive client information, those
              volunteers endure a full background check including
              fingerprinting. Activities for these volunteers after they pass
              their background check would include answering phones, data entry,
              administering client surveys, filing, and observing children in
              the playroom while their caregivers received services. All
              volunteers undertaking these roles are provided training including
              trauma informed care, confidentiality, and victim symptomology.
            </p>
            <p>
              The CAC can accept internships for students at (what level of
              school?) studying Social Work, Psychology, or a closely related
              field (fact check me please).
            </p>
            <p>
              If you are interested in volunteering or interning, please contact
              us at the phone number or email below.
            </p>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default About;
