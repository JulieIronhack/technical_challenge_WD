import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarTop() {
  return (
    <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand className="logo" as={NavLink} to="/">
        <img
          src="https://res.cloudinary.com/djersm2h6/image/upload/v1655995737/image-from-rawpixel-id-2812731-original_dntvhz.png"
          height="32"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/phones">
            Phone List
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default NavbarTop