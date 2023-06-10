import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Donate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <Fade in={open}>
      <Container fluid className="mt-5 pt-5 donate-page">
        <Container className="mt-5">
          <Row className="justify-content-center pb-4">
            <Col className="donate-content" md="4">
              <h2 className="">Donate</h2>
              <p>call to action here</p>
              <Row>
                <Col>
                  <h3>Select an Amount</h3>
                  <Row className="pb-2">
                    <Col>
                      <ButtonGroup aria-label="One Time or Recurring Donation">
                        <Button variant="secondary">One-Time Donation</Button>
                        <Button variant="secondary">Recurring Donation</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Stack direction="horizontal" gap={3}>
                        <Button variant="secondary">$250</Button>
                        <Button variant="secondary">$100</Button>
                        <Button variant="secondary">$50</Button>
                        <Button variant="secondary">$25</Button>
                        <Button variant="secondary">Other</Button>
                      </Stack>
                      <Row className="pt-2">
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="donation-amount">
                            <i class="bi bi-currency-dollar"></i>
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Donation Amount"
                            aria-label="Donation Amount"
                            aria-describedby="donation-amount"
                          />
                        </InputGroup>
                      </Row>

                      {/* add warning about going further with monthly donation */}
                      {/* add donation in honor or memory of someone */}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Your Information</h3>
                  <Form.Group
                    className="mb-3"
                    controlId="infoForm.ControlFirstName"
                  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="infoForm.ControlLastName"
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" size="lg">
                    Submit Donation
                  </Button>
                  <p className="pt-1">
                    You will be directed to PayPal to complete your donation.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fade>
  );
}

export default Donate;
