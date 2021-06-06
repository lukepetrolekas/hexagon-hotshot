import React from 'react';
import { Table } from 'react-bootstrap';

function Stack() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Stack;
