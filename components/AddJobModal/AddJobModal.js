import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AddJobModal({ categoryName }) {
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState({});

  const categories = ['Wishlist', 'Applied', 'Offer', 'Interview', 'Rejected'];

  useEffect(() => {
    setFormInput({
      company: '',
      jobTitle: '',
      category: categoryName,
    });
  }, [categoryName]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

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
              <Form.Control
                type="text"
                placeholder="Company"
                name="company"
                value={formInput.company}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job Title"
                name="jobTitle"
                value={formInput.jobTitle}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>List</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="category"
                value={formInput.category}
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Form.Group>
            {/* <Button type="button" variant="secondary" onClick={handleClose}>
              Discard
            </Button> */}
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Save Job
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

AddJobModal.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
