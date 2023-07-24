import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CategoryDropdown({ jobId, status }) {
  // const [job, setJob] = useState();
  console.log(jobId, status);

  const categories = ['Wishlist', 'Applied', 'Offer', 'Interview', 'Rejected'];

  // const getJobStatus = (status) => {
  //   const statusMap = {
  //     Wishlist: 1,
  //     Applied: 2,
  //     Offer: 3,
  //     Interview: 4,
  //     Rejected: 5,
  //   };

  //   return statusMap[status];
  // };
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
  status: PropTypes.number.isRequired,
};
