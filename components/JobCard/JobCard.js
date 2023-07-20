import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function JobCard({ job }) {
  return (
    <Card style={{ width: '90%' }}>
      <Card.Body>
        <Card.Title>{job.company}</Card.Title>
        <Card.Text>
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
};
