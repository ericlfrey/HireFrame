import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteJob } from '../../utils/data/jobData';

export default function JobCard({ job, refreshPage }) {
  const handleDelete = () => {
    deleteJob(job.id).then(() => refreshPage());
  };
  return (
    <Card style={{ width: '90%' }}>
      <Card.Body>
        <Button
          variant="outline-danger"
          onClick={handleDelete}
          style={{
            height: '1rem', width: '1rem', fontSize: '.5rem', textAlign: 'center', padding: '0',
          }}
        >X
        </Button>
        <Card.Title style={{ fontSize: '1rem' }}>{job.company}</Card.Title>
        <Card.Text style={{ fontSize: '0.7rem' }}>
          {job.title}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string,
    dateCreated: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
  refreshPage: PropTypes.func.isRequired,
};
