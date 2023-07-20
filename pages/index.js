import { ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAllFilteredJobs } from '../utils/data/jobData';
import JobCard from '../components/JobCard/JobCard';

function Home() {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getAllFilteredJobs().then(setFilteredJobs);
  }, []);
  return (
    <>
      <div className="main-page-container">
        <h1>Hello {user.displayName}! Welcome to HireFrame!</h1>
        <ListGroup key="sm" horizontal="sm" className="my-2">
          <ListGroup.Item style={{ width: '19%' }}>
            <h6>Wishlist</h6>
            {filteredJobs.wishlist?.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </ListGroup.Item>
          <ListGroup.Item style={{ width: '19%' }}>
            <h6>Applied</h6>
            {filteredJobs.applied?.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </ListGroup.Item>
          <ListGroup.Item style={{ width: '19%' }}>
            <h6>Interview</h6>
            {filteredJobs.interview?.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </ListGroup.Item>
          <ListGroup.Item style={{ width: '19%' }}>
            <h6>Offer</h6>
            {filteredJobs.offer?.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </ListGroup.Item>
          <ListGroup.Item style={{ width: '19%' }}>
            <h6>Rejected</h6>
            {filteredJobs.rejected?.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default Home;
