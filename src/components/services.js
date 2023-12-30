import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
          className="services-landing ps-0 pe-0 mt-5 d-sm-none d-md-block"
        >
          <Row>
            <Col className="pt-5  offset-md-1" md="7" lg="6">
              <h2 className="">What We Do</h2>
              <p className="fs-5">
                The Child Advocacy Center of the 3rd Judicial District seeks to
                provide support and services to victimized children. Our
                services are open to any child with alleged abuse and their
                non-offending caregivers who reside in the Third Judicial
                District (Greene, Hamblen, Hawkins, and Hancock Counties). All
                services are provided free of charge and most are on site. The
                last thing a family needs to worry about is how to pay for their
                child's healing. This is a place where you are safe and you can
                heal.
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
                The Child Advocacy Center of the 3rd Judicial District seeks to
                provide support and services to victimized children. Our
                services are open to any child with alleged abuse and their
                non-offending caregivers who reside in the Third Judicial
                District (Greene, Hamblen, Hawkins, and Hancock Counties). All
                services are provided free of charge and most are on site. The
                last thing a family needs to worry about is how to pay for their
                child's healing. This is a place where you are safe and you can
                heal.
              </p>
            </Col>
          </Row>
        </Container>
        {/* rest of the page text */}
        <Container className="pt-3 pb-3">
          <Row>
            <h3>Services</h3>
            <Row className="pb-2">
              <Col>
                <h4>Specialized Forensic Interviews</h4>
                <p>
                  Forensic Interviews are the key to any severe abuse
                  investigation. It allows for a developmentally friendly,
                  legally defensible way for each child to tell his or her story
                  the best way they can. This sets the stage for the entire
                  investigation and provides the foundation for court decisions
                  for years.
                </p>
                <Button
                  variant="outline-secondary"
                  as={Link}
                  to="/what-we-do/forensic-interview-FAQs"
                >
                  Learn More about Forensic Interviews
                </Button>
              </Col>
              <Col>
                <h4>On-Site Therapy with Frontier Health</h4>
                <p>
                  Our Therapeutic Program, which focuses on Trauma-Focused
                  Cognitive Behavioral Therapy, provides individualized
                  treatment plans for children and families. We are the only
                  agency in the District that will provide an intake and
                  assessment to preschool children. We partner with Frontier
                  Health to provide this service in our office.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Forensic Medical Exams</h4>
                <p>
                  When appropriate, we refer clients to our local partners that
                  provide forensic medical exams and accompany them to the
                  appointment if requested.
                </p>
              </Col>
              <Col>
                <h4>Family Advocacy</h4>
                <p>
                  Our Family Advocates work alongside each family to ensure
                  their physical and psychogical needs are met. They provide
                  crisis intervention, advocacy, referrals, and education so
                  families have the tools for healing and empowerment.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Court Readiness</h4>
                <p>
                  We work with families to prepare them for court proceedings.
                  Our court education and support services continue to increase
                  as more alleged perpetrators are being held accountable for
                  their actions.
                </p>
              </Col>
              <Col>
                <h4>Child Protective Investigative Team (CPIT)</h4>
                <p>
                  The CAC coordinates the Child Protective Investigation Team,
                  which includes members from the Department of Children's
                  Services, Law Enforcement, District Attorney General's Office,
                  Frontier Health, and Juvenile Court. CPIT works together to
                  investigate allegations of severe child abuse while keeping
                  the best interests of the child at the forefront. This process
                  has been proven to reduce the trauma experienced by families
                  and support the healing process while holding offenders
                  accountable.
                </p>
                <Button
                  variant="outline-secondary"
                  as={Link}
                  to="/what-we-do/CPIT"
                >
                  Learn More about CPITs in Each County
                </Button>
              </Col>
            </Row>
          </Row>
          <Row className="pt-3">
            <h3>Prevention & Training</h3>
            <p>
              We offer community education on child abuse and neglect as well as
              the Stewards of Children program, which is specific to child
              sexual abuse prevention. If you are interested in the CAC
              providing training at your organization or business, please
              contact us at the phone number or email below.
            </p>
          </Row>
        </Container>
      </Container>
    </Fade>
  );
}

export default Services;
