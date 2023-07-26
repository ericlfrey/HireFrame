import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { patchJob } from '../../utils/data/jobData';

export default function JobDetailsForm({ job, refreshModal }) {
  const initialFormState = {
    jobTitle: job?.title || '',
    company: job?.company || '',
    description: job?.description || '',
  };
  const [formInput, setFormInput] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEnter = (e) => {
    e.preventDefault();
    if (e.code === 'Enter') {
      const patchPayload = {
        id: job.id,
        title: formInput.jobTitle,
        company: formInput.company,
        description: formInput.description,
      };
      patchJob(patchPayload).then(() => refreshModal());
      e.target.blur();
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Job Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Job Title"
          name="jobTitle"
          value={formInput.jobTitle}
          onChange={handleChange}
          autoComplete="off"
          required
          onKeyUp={handleEnter}
          style={{ backgroundColor: '#EEF0F2', boxShadow: '1px 1px #CCC', border: '1px solid #CCC' }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Company"
          name="company"
          value={formInput.company}
          onChange={handleChange}
          autoComplete="off"
          required="required"
          onKeyUp={handleEnter}
          style={{ backgroundColor: '#EEF0F2', boxShadow: '1px 1px #CCC', border: '1px solid #CCC' }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          onChange={handleChange}
          value={formInput.description}
          autoComplete="off"
          onKeyUp={(e) => {
            e.preventDefault();
            patchJob({ id: job.id, description: formInput.description }).then(() => refreshModal());
          }}
          style={{ backgroundColor: '#EEF0F2', boxShadow: '1px 1px #CCC', border: '1px solid #CCC' }}
        />
      </Form.Group>
    </Form>
  );
}

JobDetailsForm.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string,
    dateCreated: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
    title: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
  refreshModal: PropTypes.func.isRequired,
};
