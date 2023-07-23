import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getJobById } from '../../utils/data/jobData';

export default function JobDetailsForm({ jobId }) {
  const [job, setJob] = useState({});

  useEffect(() => {
    getJobById(jobId).then(setJob);
  }, [jobId]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Job Tile</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" value={job.title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

JobDetailsForm.propTypes = {
  jobId: PropTypes.string.isRequired,
};
