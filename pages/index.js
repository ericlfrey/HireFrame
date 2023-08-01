import Head from 'next/head';
import { JobProvider } from '../utils/context/jobContext';
import ListGroupHomePage from '../components/ListGroup/ListGroup';

function Home() {
  return (
    <>
      <Head>
        <title>HireFrame</title>
      </Head>
      <JobProvider>
        <ListGroupHomePage />
      </JobProvider>
    </>
  );
}

export default Home;
