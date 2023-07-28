import React from 'react';
import PropTypes from 'prop-types';

export default function JobDateForm({ jobId }) {
  console.log(jobId);
  return (
    <p>Show date form</p>
  );
}

JobDateForm.propTypes = {
  jobId: PropTypes.string.isRequired,
};

JobDateForm.propTypes = {
  jobId: PropTypes.string.isRequired,
};
