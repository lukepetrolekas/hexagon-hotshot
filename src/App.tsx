import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.global.css';

import Navigation from './organisms/Nav';
import CreateTask from './pages/CreateTask';
import Stack from './pages/Stack';
import Home from './pages/Home';

export default function App() {
  return (
    <Container fluid>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateTask} />
          <Route path="/stack" component={Stack} />
        </Switch>
      </Router>
    </Container>
  );
}
