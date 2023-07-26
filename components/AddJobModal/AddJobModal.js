import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { patchJob, postNewJob } from '../../utils/data/jobData';

export default function AddJobModal({ categoryName, onUpdate }) {
  const initialState = {
    company: '',
    jobTitle: '',
    category: categoryName,
  };
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState(initialState);

  const { user } = useAuth();

  const categories = ['Wishlist', 'Applied', 'Offer', 'Interview', 'Rejected'];

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
    if (formInput.company === '' || formInput.jobTitle === '') window.alert('All Fields must be valid');
    const payload = {
      company: formInput.company,
      title: formInput.jobTitle,
      dateCreated: new Date().toLocaleDateString(),
      description: '',
      status: formInput.category,
      userId: user.uid,
    };
    postNewJob(payload).then(({ name }) => {
      const patchPayload = { id: name };
      patchJob(patchPayload).then(() => onUpdate());
    });
    handleClose();
    setFormInput(initialState);
  };

  return (
    <>
      <Button
        // variant="outline-primary"
        style={{
          height: '1.5rem', width: '100%', fontSize: '1rem', textAlign: 'center', padding: '0', border: 'none',
        }}
        className="mb-2 btn-style"
        onClick={handleShow}
      >
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: '#EEF0F2' }}>
          <Modal.Title>Add Job</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#EEF0F2' }}>
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
                required="required"
                style={{ backgroundColor: '#EEF0F2', boxShadow: '1px 1px #CCC' }}
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
            <Button type="submit" variant="primary" onClick={handleSubmit} className="btn-style">
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
  onUpdate: PropTypes.func.isRequired,
};
