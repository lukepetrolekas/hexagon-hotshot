import React from 'react';
import { Form, Button, Row, Col, Toast } from 'react-bootstrap';

const { ipcRenderer } = require('electron');

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

    // Async message handler
    ipcRenderer.on('add-task', (e, arg) => {
      // clear out form
      this.setState({ name: '', desc: '' });
    });

    // Async message sender
    ipcRenderer.send('add-task', {
      name: this.state.name,
      description: this.state.desc,
    });

    event.preventDefault();
  }

  render() {
    const { name, desc, show } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group controlId="taskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                value={name}
                onChange={this.handleNameChange}
                placeholder="Select a distinctive name..."
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="taskDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                value={desc}
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
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Task {name} has been added.</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateTask;
