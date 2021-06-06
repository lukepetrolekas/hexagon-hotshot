import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './App.global.css';

import Navigation from './organisms/Nav';
import CreateTask from './pages/CreateTask';
import Stack from './pages/Stack';
import Home from './pages/Home';
import Sidebar from './organisms/Sidebar';

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Router>
          <Col sm={1}>
            <Sidebar />
          </Col>
          <Col sm={11}>
            <Navigation />
            <Switch>
              <Route path="/create" component={CreateTask} />
              <Route path="/stack" component={Stack} />
              <Route path="/" component={Home} />
            </Switch>
          </Col>
        </Router>
      </Row>
    </Container>
  );
}
