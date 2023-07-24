import { JobProvider } from '../utils/context/jobContext';
import ListGroupHomePage from '../components/ListGroup/ListGroup';

function Home() {
  return (
    <JobProvider>
      <ListGroupHomePage />
    </JobProvider>
  );
}

export default Home;
