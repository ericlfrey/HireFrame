/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteJob } from '../../utils/data/jobData';
import JobDetailsModal from '../JobDetailsModal/JobDetailsModal';
import { useJobContext } from '../../utils/context/jobContext';

export default function JobCard({ job, refreshPage }) {
  const [show, setShow] = useState(false);

  const { getFilteredJobs } = useJobContext();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    getFilteredJobs();
  };

  const handleDelete = () => {
    deleteJob(job.id).then(() => refreshPage());
  };

  return (
    <>
      <Card style={{ width: '90%', backgroundColor: '#85BB65' }}>
        <Button
          variant="outline-danger"
          onClick={handleDelete}
          style={{
            height: '1rem', width: '1rem', fontSize: '.5rem', textAlign: 'center', padding: '0',
          }}
        >X
        </Button>
        <a href="#" onClick={handleShow}>
          <Card.Body>

            <Card.Title style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>{job.company}</Card.Title>
            <Card.Text style={{ fontSize: '0.7rem' }}>
              {job.title}
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
      <JobDetailsModal
        show={show}
        handleClose={handleClose}
        jobId={job.id}
      />
    </>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string,
    dateCreated: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
    title: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
  refreshPage: PropTypes.func.isRequired,
};
