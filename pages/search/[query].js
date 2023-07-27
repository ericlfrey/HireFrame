/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { searchJobs } from '../../utils/data/jobData';
import { useAuth } from '../../utils/context/authContext';
import AddJobModal from '../../components/AddJobModal/AddJobModal';
import JobCard from '../../components/JobCard/JobCard';
import { JobProvider } from '../../utils/context/jobContext';

export default function SearchQueryPage() {
  const [searchedJobs, setSearchedJobs] = useState([]);

  const { user } = useAuth();

  const router = useRouter();
  const { query } = router.query;

  const getSearchedJobs = () => searchJobs(user.uid, query).then(setSearchedJobs);

  useEffect(() => {
    getSearchedJobs();
  }, [query, user.uid]);
  const categories = [
    { name: 'Wishlist', array: searchedJobs?.wishlist },
    { name: 'Applied', array: searchedJobs?.applied },
    { name: 'Interview', array: searchedJobs?.interview },
    { name: 'Offer', array: searchedJobs?.offer },
    { name: 'Rejected', array: searchedJobs?.rejected },
  ];

  return (
    <JobProvider>
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
                  onUpdate={getSearchedJobs}
                />
                {cat.array?.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    refreshPage={getSearchedJobs}
                  />
                ))}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </>
    </JobProvider>
  );
}
