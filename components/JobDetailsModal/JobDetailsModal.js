/* eslint-disable react-hooks/exhaustive-deps */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import JobDetailsForm from '../JobDetailsForm/JobDetailsForm';
import { getJobById } from '../../utils/data/jobData';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import JobDateForm from '../JobDateForm/JobDateForm';

export default function JobDetailsModal({
  show, handleClose, jobId,
}) {
  const [job, setJob] = useState({});
  const [showCal, setShowCal] = useState(false);

  const getJob = () => getJobById(jobId).then(setJob);

  useEffect(() => {
    getJob();
  }, []);

  return (
    <Modal show={show} onHide={handleClose} animation={false} size="lg" style={{ color: '#3E3E3C' }}>
      <Modal.Header
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          border: 'none',
          paddingBottom: '0',
          backgroundColor: '#EEF0F2',
        }}
      >
        <CategoryDropdown jobId={jobId} status={job?.status} />
        <Button
          variant="light"
          className="btn-sm btn-style"
          onClick={handleClose}
          style={{ marginLeft: '1rem' }}
        >
          Close
        </Button>
      </Modal.Header>
      <Modal.Header style={{ padding: '0 20px', backgroundColor: '#EEF0F2' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Modal.Title>{job.title}</Modal.Title>
          <Modal.Body>{job.company}</Modal.Body>
        </div>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#EEF0F2', paddingBottom: '0' }}>
        <JobDetailsForm job={job} refreshModal={getJob} />
      </Modal.Body>
      <Modal.Footer
        style={{
          backgroundColor: '#EEF0F2', border: 'none', fontSize: '0.7rem', color: '#3E3E3C',
        }}
        onClick={() => setShowCal(!showCal)}
      >
        {showCal
          ? <JobDateForm jobId={jobId} />
          : <span style={{ cursor: 'pointer' }}>{job.dateCreated}</span>}

      </Modal.Footer>
    </Modal>
  );
}

JobDetailsModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  jobId: PropTypes.string.isRequired,
};
