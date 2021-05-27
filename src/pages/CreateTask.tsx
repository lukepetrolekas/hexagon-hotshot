import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateTask = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group controlId="taskName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Select a distinctive name..."
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group controlId="taskDescription">
          <Form.Label>Task Description</Form.Label>
          <Form.Control placeholder="Describe how the task is actionable here..." />
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Button variant="secondary" type="submit">
          Save as Draft
        </Button>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CreateTask;
