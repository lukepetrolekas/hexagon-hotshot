import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Hexagon Hotshot</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Inbox</Nav.Link>
        <Nav.Link>Stack</Nav.Link>
        <Nav.Link>Calendar</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
