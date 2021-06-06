import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  Stack,
  Inbox,
  Calendar,
  Star,
  Speedometer,
  Gear,
} from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  return (
    <ListGroup>
      <ListGroup.Item>No style</ListGroup.Item>
      <LinkContainer to="/stack">
        <ListGroup.Item>
          <Stack size={48} />
          <br />
          Stack
        </ListGroup.Item>
      </LinkContainer>
      <LinkContainer to="/create">
        <ListGroup.Item>
          <Inbox size={48} />
          <br />
          Create Task
        </ListGroup.Item>
      </LinkContainer>
      <ListGroup.Item>
        <Calendar size={48} />
        <br />
        Calendar
      </ListGroup.Item>
      <ListGroup.Item>
        <Star size={48} />
        <br />
        Favourites
      </ListGroup.Item>
      <ListGroup.Item>
        <Speedometer size={48} />
        <br />
        Tempo
      </ListGroup.Item>
      <ListGroup.Item>
        <Gear size={48} />
        <br />
        Settings
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;
