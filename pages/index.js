import { ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import getAllJobs from '../utils/data/jobData';

function Home() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  const categories = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];

  useEffect(() => {
    getAllJobs().then(setJobs);
  }, []);

  return (
    <>
      <div>
        <h1>Hello {user.displayName}! Welcome to HireFrame!</h1>
        <ListGroup key="sm" horizontal="sm" className="my-2">
          {categories.map((cat) => (
            <ListGroup.Item>
              {cat}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div>
        {jobs.map((job) => (
          <h1>{job.title}</h1>
        ))}
      </div>
    </>
  );
}

export default Home;
