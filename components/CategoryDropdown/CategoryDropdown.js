/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getAllFilteredJobs, getJobById, patchJob } from '../../utils/data/jobData';

export default function CategoryDropdown({ jobId }) {
  const [, setJob] = useState();
  const [, setFilteredJobs] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('');

  const router = useRouter();

  const getFilteredJobs = () => getAllFilteredJobs().then(setFilteredJobs);

  useEffect(() => {
    getJobById(jobId).then((jobData) => {
      setJob(jobData);
      setCurrentStatus(jobData?.status || ''); // Set status to empty string if jobData or status is not available
    });
    getFilteredJobs();
  }, [jobId]);

  const handleChange = (status) => {
    setCurrentStatus(status);
    patchJob({ id: jobId, status }).then(() => {
      getFilteredJobs().then(() => router.push('/'));
    });
  };

  const categories = ['Wishlist', 'Applied', 'Offer', 'Interview', 'Rejected'];

  return (
    <DropdownButton drop="down-centered" title="Move" size="sm">
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
