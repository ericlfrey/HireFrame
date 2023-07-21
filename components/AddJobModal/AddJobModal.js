import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AddJobModal({ categoryName }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Company" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Job Title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>List</Form.Label>
              <Form.Select>
                <option>Open this select menu</option>
                <option value="1">{categoryName}</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Job
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

AddJobModal.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
