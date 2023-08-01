/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Trash3Fill } from 'react-bootstrap-icons';
import { deleteJob } from '../../utils/data/jobData';
import JobDetailsModal from '../JobDetailsModal/JobDetailsModal';
import { useJobContext } from '../../utils/context/jobContext';

export default function JobCard({ job, refreshPage }) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const { getFilteredJobs } = useJobContext();

  const timeElapsed = () => {
    const now = Date.now();
    const jobDate = new Date(job.dateCreated);
    const days = Math.ceil((now - jobDate) / 86400000);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    if (days < 7) {
      return `${days}d`;
    } if (weeks < 4) {
      return `${weeks}w`;
    }
    return `${months}mo`;
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    if (refreshPage) {
      refreshPage();
    } else {
      getFilteredJobs();
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(
      `Are you sure you want to delete ${job.title} at ${job.company}?`,
    )) deleteJob(job.id).then(() => getFilteredJobs());
  };

  return (
    <>
      <Card
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ width: '90%', backgroundColor: '#85BB65', marginBottom: '0.5rem' }}
      >
        <a href="#" onClick={handleShow}>
          <Card.Body style={{ padding: '10px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Card.Title
                style={{
                  fontSize: '0.7rem', fontWeight: 'bold', color: '#3E3E3C', width: '75%',
                }}
              >
                {job.company}
              </Card.Title>
              {hover === true ? (
                <Button
                  onClick={handleDelete}
                  style={{
                    height: '1.3rem', width: '1.3rem', fontSize: '.7rem', textAlign: 'center', padding: '0', backgroundColor: 'rgba(62, 62, 60, 0.1)', border: 'solid 1px rgba(62, 62, 60, 0.4)',
                  }}
                >
                  <Trash3Fill style={{ color: '#EEF0F2' }} />
                </Button>
              ) : ''}
            </div>
            <Card.Text style={{ fontSize: '0.7rem', color: '#EEF0F2', margin: '0' }}>
              {job.title}
            </Card.Text>
            <Card.Text style={{ textAlign: 'right', fontSize: '0.7rem', color: '#3E3E3C' }}>{timeElapsed()}</Card.Text>
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
  refreshPage: PropTypes.func,
};

JobCard.defaultProps = {
  refreshPage: null,
};
