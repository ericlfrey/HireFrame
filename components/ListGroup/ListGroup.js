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
    { name: 'Interview', array: filteredJobs?.interview },
    { name: 'Offer', array: filteredJobs?.offer },
    { name: 'Rejected', array: filteredJobs?.rejected },
  ];

  return (
    <>
      <div className="main-page-container">
        <ListGroup
          key="sm"
          horizontal="sm"
          className="my-2 categories-list"
          style={{
            height: '95%', width: '100vw', display: 'flex', justifyContent: 'center',
          }}
        >
          {categories.map((cat) => (
            <ListGroup.Item
              style={{
                width: '19%', backgroundColor: '#f5f5f5', borderColor: '#636F7E', display: 'flex', flexDirection: 'column', padding: '10px 0',
              }}
              key={cat.name}
            >
              <div style={{ position: 'sticky', padding: '0 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#3E3E3C' }}>
                  <h6>{cat.name}</h6>
                  <h6>{cat.array?.length} {cat.array?.length === 1 ? 'Job' : 'Jobs'}</h6>
                </div>
                <AddJobModal
                  categoryName={cat.name}
                  onUpdate={getFilteredJobs}
                />
              </div>
              <div
                className="scroll"
                style={{
                  width: '97%', position: 'relative', overflowX: 'hidden', overflowY: 'auto', height: '83.45vh', paddingLeft: '20px',
                }}
              >

                {cat.array?.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                  />
                ))}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}
