import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function MainNavbar(): React.ReactElement {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">AKUI Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Link href="https://github.com/tkesgar/ark-royal" target="_blank">
          View on GitHub
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
