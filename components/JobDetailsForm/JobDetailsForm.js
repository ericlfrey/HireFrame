import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { patchJob } from '../../utils/data/jobData';

export default function JobDetailsForm({ job }) {
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
      console.log(formInput);
      const patchPayload = {
        id: job.id,
        title: formInput.jobTitle,
      };
      patchJob(patchPayload).then(() => { });
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
    status: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
};
