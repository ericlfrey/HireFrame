/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteJob } from '../../utils/data/jobData';
import JobDetailsModal from '../JobDetailsModal/JobDetailsModal';
import { useJobContext } from '../../utils/context/jobContext';

export default function JobCard({ job, refreshPage }) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const { getFilteredJobs } = useJobContext();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    if (refreshPage) {
      console.log(refreshPage);
      refreshPage();
    } else {
      getFilteredJobs();
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteJob(job.id).then(() => getFilteredJobs());
  };

  return (
    <>
      <Card
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ width: '90%', backgroundColor: '#85BB65', marginBottom: '0.5rem' }}
      >

        {/* <Button
          variant="outline-dark"
          onClick={handleDelete}
          style={{
            height: '1rem', width: '1rem', fontSize: '.5rem', textAlign: 'center', padding: '0',
          }}

        >X
        </Button> */}
        <a href="#" onClick={handleShow}>
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Card.Title
                style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#1C1C1C' }}
              >
                {job.company}
              </Card.Title>
              {hover === true ? (
                <Button
                  variant="outline-dark"
                  onClick={handleDelete}
                  style={{
                    height: '1rem', width: '1rem', fontSize: '.5rem', textAlign: 'center', padding: '0',
                  }}
                >X
                </Button>
              ) : ''}
            </div>
            <Card.Text style={{ fontSize: '0.7rem', color: '#E8E9C9' }}>
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
  refreshPage: PropTypes.func,
};

JobCard.defaultProps = {
  refreshPage: null,
};
