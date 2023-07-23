/* eslint-disable react-hooks/exhaustive-deps */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import JobDetailsForm from '../JobDetailsForm/JobDetailsForm';
import { getJobById } from '../../utils/data/jobData';

export default function JobDetailsModal({
  show, handleClose, jobId,
}) {
  const [job, setJob] = useState({});

  const getJob = () => getJobById(jobId).then(setJob);

  useEffect(() => {
    getJob();
  }, []);

  return (
    <Modal show={show} onHide={handleClose} animation={false} size="xl">
      <Modal.Header style={{ display: 'flex', justifyContent: 'flex-end', border: 'none' }}>
        <Button variant="primary" className="btn-sm">
          Move
        </Button>
        <Button variant="light" className="btn-sm" onClick={handleClose} style={{ border: '1px solid black', marginLeft: '1rem' }}>
          Close
        </Button>
      </Modal.Header>
      <Modal.Header>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Modal.Title>{job.title}</Modal.Title>
          <Modal.Body>{job.company}</Modal.Body>
        </div>
      </Modal.Header>
      <Modal.Body>
        <JobDetailsForm job={job} refreshModal={getJob} />
      </Modal.Body>
    </Modal>
  );
}

JobDetailsModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  jobId: PropTypes.string.isRequired,
};
