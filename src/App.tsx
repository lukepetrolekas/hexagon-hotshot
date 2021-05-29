import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.global.css';

import Navigation from './organisms/Nav';
import CreateTask from './pages/CreateTask';

export default function App() {
  return (
    <Container fluid>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" component={CreateTask} />
        </Switch>
      </Router>
    </Container>
  );
}
