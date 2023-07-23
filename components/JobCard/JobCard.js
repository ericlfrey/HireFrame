/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Modal } from 'react-bootstrap';
import { deleteJob } from '../../utils/data/jobData';

export default function JobCard({ job, refreshPage }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    setShow(false);
    deleteJob(job.id).then(() => refreshPage());
  };
  return (
    <>
      <Card style={{ width: '90%' }}>
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

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
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
