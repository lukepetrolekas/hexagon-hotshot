import React, { useState } from 'react';
import { Form, Button, Row, Col, Toast } from 'react-bootstrap';

class CreateTask extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
      desc: '',
      show: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event: any) {
    this.setState({ name: event.target.value });
  }

  handleDescChange(event: any) {
    this.setState({ desc: event.target.value });
  }

  handleSubmit(event: any) {
    this.setState({ show: true });
    // clear out form
    // this.setState({ name: '', desc: '' });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group controlId="taskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                value={this.state.name}
                onChange={this.handleNameChange}
                placeholder="Select a distinctive name..."
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="taskDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                value={this.state.desc}
                onChange={this.handleDescChange}
                placeholder="Describe how the task is actionable here..."
              />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form.Group>
        </Form>
        <Row>
          <Col xs={6}>
            <Toast
              onClose={() => this.setState({ show: false })}
              show={this.state.show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Task {this.state.name} has been added.</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateTask;
