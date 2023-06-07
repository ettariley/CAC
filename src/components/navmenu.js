import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function NavMenu(props) {
  const navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      variant="light"
      bg="primary"
      expand="md"
      className='no-print'
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={require('../assets/cac-logo-custom.png')}
            height="90"
            alt="Child Advocacy Center of the 3rd Judicial District Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link eventKey="1" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/who-we-are">
              Who We Are
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/what-we-do">
              What We Do
            </Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/donate">
              Donate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;