import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Hello {user.displayName}! Welcome to HireFrame!</h1>
    </div>
  );
}

export default Home;
