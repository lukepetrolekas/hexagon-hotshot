import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Hexagon Hotshot</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Inbox</Nav.Link>
        <LinkContainer to="/create">
          <Nav.Link>Create</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/stack">
          <Nav.Link>Stack</Nav.Link>
        </LinkContainer>
        <Nav.Link>Calendar</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
