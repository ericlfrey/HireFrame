/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import AddJobModal from '../AddJobModal/AddJobModal';
import JobCard from '../JobCard/JobCard';
import { useJobContext } from '../../utils/context/jobContext';

export default function ListGroupHomePage() {
  const { getFilteredJobs, filteredJobs } = useJobContext();
  const categories = [
    { name: 'Wishlist', array: filteredJobs?.wishlist },
    { name: 'Applied', array: filteredJobs?.applied },
    { name: 'Offer', array: filteredJobs?.offer },
    { name: 'Interview', array: filteredJobs?.interview },
    { name: 'Rejected', array: filteredJobs?.rejected },
  ];

  return (
    <>
      <div className="main-page-container">
        <ListGroup
          key="sm"
          horizontal="sm"
          className="my-2 categories-list"
          style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
        >
          {categories.map((cat) => (
            <ListGroup.Item
              style={{
                width: '19%', backgroundColor: '#f5f5f5', borderColor: '#636F7E',
              }}
              key={cat.name}
            >
              <h6>{cat.name}</h6>
              <AddJobModal
                categoryName={cat.name}
                onUpdate={getFilteredJobs}
              />
              {cat.array?.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  refreshPage={getFilteredJobs}
                />
              ))}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}
