import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getJobById } from '../../utils/data/jobData';

export default function CategoryDropdown({ jobId }) {
  const [job, setJob] = useState();

  useEffect(() => {
    getJobById(jobId).then(setJob);
    console.log(job);
  }, [jobId]);

  const categories = ['Wishlist', 'Applied', 'Offer', 'Interview', 'Rejected'];

  return (
    <DropdownButton drop="down-centered" title="Move" size="sm">
      {categories.map((cat) => (
        <Dropdown.Item
          href="#/action-1"
          key={cat}
          name={cat}
        >
          {cat}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

CategoryDropdown.propTypes = {
  jobId: PropTypes.string.isRequired,
};
