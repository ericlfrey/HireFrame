/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getJobById, patchJob } from '../../utils/data/jobData';
import { useJobContext } from '../../utils/context/jobContext';

export default function CategoryDropdown({ jobId }) {
  const [, setJob] = useState();
  const [currentStatus, setCurrentStatus] = useState('');

  const { getFilteredJobs } = useJobContext(); // Access the getFilteredJobs function from the JobContext

  useEffect(() => {
    getJobById(jobId).then((jobData) => {
      setJob(jobData);
      setCurrentStatus(jobData?.status || ''); // Set status to empty string if jobData or status is not available
    });
  }, [jobId]);

  const handleChange = (status) => {
    setCurrentStatus(status);
    patchJob({ id: jobId, status }).then(() => getFilteredJobs());
  };

  const categories = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];

  return (
    <DropdownButton drop="end" title="Move" size="sm" id="dropdownBtn">
      {categories.map((category) => (
        <Dropdown.Item
          href="#/action-1"
          key={category}
          disabled={currentStatus === category} // Disable the item if it matches the current status
          onClick={() => handleChange(category)} // Handle the click event to update the status
        >
          {category}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

CategoryDropdown.propTypes = {
  jobId: PropTypes.string.isRequired,
};
