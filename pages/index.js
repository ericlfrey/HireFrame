import { ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAllFilteredJobs } from '../utils/data/jobData';

function Home() {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getAllFilteredJobs().then(setFilteredJobs);
  }, []);
  return (
    <>
      <div>
        <h1>Hello {user.displayName}! Welcome to HireFrame!</h1>
        <ListGroup key="sm" horizontal="sm" className="my-2">
          <ListGroup.Item>
            <h6>Wishlist</h6>
            {filteredJobs.wishlist?.map((job) => (
              <p>{job.title}</p>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Applied</h6>
            {filteredJobs.applied?.map((job) => (
              <p>{job.title}</p>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Interview</h6>
            {filteredJobs.interview?.map((job) => (
              <p>{job.title}</p>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Offer</h6>
            {filteredJobs.offer?.map((job) => (
              <p>{job.title}</p>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Rejected</h6>
            {filteredJobs.rejected?.map((job) => (
              <p>{job.title}</p>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default Home;
