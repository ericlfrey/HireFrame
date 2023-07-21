import { ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAllFilteredJobs } from '../utils/data/jobData';
import JobCard from '../components/JobCard/JobCard';
import JobDetailsModal from '../components/JobDetailsModal/JobDetailsModal';

function Home() {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { user } = useAuth();
  const categories = [
    { name: 'Wishlist', array: filteredJobs.wishlist },
    { name: 'Applied', array: filteredJobs.applied },
    { name: 'Offer', array: filteredJobs.offer },
    { name: 'Interview', array: filteredJobs.interview },
    { name: 'Rejected', array: filteredJobs.rejected },
  ];

  useEffect(() => {
    getAllFilteredJobs().then(setFilteredJobs);
  }, []);

  return (
    <>
      <div className="main-page-container">
        <ListGroup key="sm" horizontal="sm" className="my-2">
          {categories.map((cat) => (
            <ListGroup.Item style={{ width: '19%' }} key={cat.name}>
              <h6>{cat.name}</h6>
              <JobDetailsModal categoryName={cat.name} />
              {cat.array?.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                />
              ))}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default Home;
